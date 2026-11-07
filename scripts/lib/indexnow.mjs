// IndexNow notification helper. A successful notification is not an indexation.
// Protocol: https://www.indexnow.org/documentation
// Single shared endpoint: https://www.indexnow.org/faq
export const SITE_ORIGIN = 'https://agencecelexia.fr';
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10000;
const MAX_DOCUMENT_BYTES = 1024 * 1024;
const PRIVATE_PREFIX = /^\/(?:api|admin|auth|account|accounts|login|private|internal|dashboard)(?:\/|$)/;
const PUBLIC_PATH = /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/;

export class IndexNowError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'IndexNowError';
    this.status = status;
  }
}

export function validateConfig(config) {
  if (!config || config.origin !== SITE_ORIGIN || config.endpoint !== INDEXNOW_ENDPOINT) {
    throw new IndexNowError('Configuration IndexNow invalide : domaine et endpoint doivent être ceux de Celexia.');
  }
  if (typeof config.key !== 'string' || !/^[a-f0-9]{32}$/.test(config.key)) {
    throw new IndexNowError('Configuration IndexNow invalide : fichier de vérification attendu.');
  }
  return Object.freeze({
    origin: SITE_ORIGIN,
    endpoint: INDEXNOW_ENDPOINT,
    key: config.key,
    keyLocation: `${SITE_ORIGIN}/${config.key}.txt`,
    sitemapUrl: `${SITE_ORIGIN}/sitemap.xml`,
  });
}

function validatePath(path) {
  if (typeof path !== 'string' || !PUBLIC_PATH.test(path) || PRIVATE_PREFIX.test(path)) {
    throw new IndexNowError('Chemin refusé : utiliser un chemin public canonique présent dans le sitemap.');
  }
  return path;
}

export function validatePublicUrl(value) {
  let url;
  try { url = new URL(value); } catch { throw new IndexNowError('URL du sitemap invalide.'); }
  if (typeof value !== 'string' || url.origin !== SITE_ORIGIN || url.protocol !== 'https:'
    || url.username || url.password || url.port || url.search || url.hash
    || value.includes('?') || value.includes('#') || url.href !== value) {
    throw new IndexNowError('URL du sitemap refusée : domaine HTTPS public canonique uniquement, sans paramètres ni identifiants.');
  }
  validatePath(url.pathname);
  return url.href;
}

/** Read only this site's flat urlset format; fail closed on XML extensions/DTD. */
export function parseSitemapUrls(xml) {
  if (typeof xml !== 'string' || Buffer.byteLength(xml) > MAX_DOCUMENT_BYTES || /<!/i.test(xml)) {
    throw new IndexNowError('Sitemap invalide ou trop volumineux.');
  }
  const root = xml.trim().match(/^(?:<\?xml[^?]*\?>\s*)?<urlset\s+xmlns=(['"])http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9\1\s*>([\s\S]*)<\/urlset>$/);
  if (!root) throw new IndexNowError('Sitemap invalide : un urlset XML simple est attendu.');
  const blocks = [...root[2].matchAll(/<url>\s*([\s\S]*?)\s*<\/url>/g)];
  if (!blocks.length || blocks.length > MAX_URLS || root[2].replace(/<url>[\s\S]*?<\/url>/g, '').trim()) {
    throw new IndexNowError('Sitemap invalide : liste d’URL absente ou non prise en charge.');
  }
  const urls = blocks.map(([, block]) => {
    const locations = [...block.matchAll(/<loc>([^<]*)<\/loc>/g)];
    const remainder = block.replace(/<loc>[^<]*<\/loc>/g, '')
      .replace(/<(lastmod|changefreq|priority)>[^<]*<\/\1>/g, '').trim();
    if (locations.length !== 1 || remainder) throw new IndexNowError('Sitemap invalide : entrée URL ambiguë.');
    return validatePublicUrl(locations[0][1].trim());
  });
  if (new Set(urls).size !== urls.length) throw new IndexNowError('Sitemap invalide : URL dupliquées.');
  return urls;
}

export function selectUrls(sitemapUrls, paths = []) {
  if (!Array.isArray(paths)) throw new IndexNowError('La sélection de chemins est invalide.');
  const allowed = new Set(sitemapUrls.map(validatePublicUrl));
  if (!paths.length) return [...allowed];
  return [...new Set(paths.map(path => {
    const url = `${SITE_ORIGIN}${validatePath(path)}`;
    if (!allowed.has(url)) throw new IndexNowError('Chemin refusé : absent du sitemap public actuellement déployé.');
    return url;
  }))];
}

export function parseArgs(args) {
  let mode;
  const paths = [];
  for (const arg of args) {
    if (arg === '--help' || arg === '-h') return { help: true, submit: false, paths: [] };
    if (arg === '--submit' || arg === '--dry-run') {
      if (mode) throw new IndexNowError('Choisir un seul mode : --dry-run ou --submit.');
      mode = arg;
    } else {
      paths.push(validatePath(arg));
    }
  }
  return { help: false, submit: mode === '--submit', paths };
}

async function getText(fetchImpl, url, label, { mime, timeoutMs, maxBytes = MAX_DOCUMENT_BYTES }) {
  let response;
  try {
    response = await fetchImpl(url, {
      method: 'GET', redirect: 'manual', credentials: 'omit',
      headers: { Accept: mime, 'User-Agent': 'Celexia-IndexNow-Preflight/1.0' },
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch {
    throw new IndexNowError(`${label} : lecture réseau non confirmée. Aucun envoi effectué.`);
  }
  if (response.status !== 200 || response.redirected || (response.url && response.url !== url)) {
    throw new IndexNowError(`${label} : une réponse HTTP 200 directe est requise. Aucun envoi effectué.`, response.status);
  }
  const type = response.headers.get('content-type') || '';
  if (!mime.split(',').some(value => type.toLowerCase().split(';')[0].trim() === value.trim())) {
    throw new IndexNowError(`${label} : type de document inattendu. Aucun envoi effectué.`);
  }
  const length = Number(response.headers.get('content-length'));
  if (Number.isFinite(length) && length > maxBytes) throw new IndexNowError(`${label} : document trop volumineux.`);
  let text;
  try { text = await response.text(); } catch { throw new IndexNowError(`${label} : lecture incomplète. Aucun envoi effectué.`); }
  if (Buffer.byteLength(text) > maxBytes) throw new IndexNowError(`${label} : document trop volumineux.`);
  return { text, response };
}

function decodeAttribute(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
    const names = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (names[entity.toLowerCase()]) return names[entity.toLowerCase()];
    const hex = /^&#x/i.test(entity);
    const point = Number.parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10);
    if (!Number.isSafeInteger(point) || point > 0x10ffff) throw new IndexNowError('Métadonnées HTML invalides.');
    return String.fromCodePoint(point);
  });
}

function attributes(tag) {
  const result = new Map();
  const raw = tag.replace(/^<\w+\b/, '').replace(/\/?\s*>$/, '');
  for (const match of raw.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s'"=<>`]+)))?/g)) {
    const name = match[1].toLowerCase();
    if (result.has(name)) throw new IndexNowError('Métadonnées HTML ambiguës.');
    result.set(name, decodeAttribute(match[2] ?? match[3] ?? match[4] ?? ''));
  }
  return result;
}

const deniesIndexing = value => /(?:^|[\s,:;])(?:noindex|none)(?=$|[\s,;])/i.test(value || '');

export function validateIndexableHtml(html, url, robotsHeader = '') {
  validatePublicUrl(url);
  if (deniesIndexing(robotsHeader)) throw new IndexNowError('Page non indexable : directive HTTP noindex/none. Aucun envoi effectué.');
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head\s*>/i)?.[1];
  if (!head) throw new IndexNowError('Page sans en-tête HTML exploitable. Aucun envoi effectué.');
  const visibleHead = head.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  const canonicals = [];
  for (const match of visibleHead.matchAll(/<(link|meta)\b(?:"[^"]*"|'[^']*'|[^'">])*?>/gi)) {
    const a = attributes(match[0]);
    if (match[1].toLowerCase() === 'link' && (a.get('rel') || '').toLowerCase().split(/\s+/).includes('canonical')) {
      canonicals.push(a.get('href'));
    }
    if (match[1].toLowerCase() === 'meta') {
      const name = (a.get('name') || '').toLowerCase();
      if ((name === 'robots' || /bot|spider|crawler/.test(name)) && deniesIndexing(a.get('content'))) {
        throw new IndexNowError('Page non indexable : directive robots noindex/none. Aucun envoi effectué.');
      }
      if ((a.get('http-equiv') || '').toLowerCase() === 'refresh') {
        throw new IndexNowError('Page redirigée dans le HTML. Aucun envoi effectué.');
      }
    }
  }
  if (canonicals.length !== 1 || canonicals[0] !== url) {
    throw new IndexNowError('Page non confirmée : une canonical unique vers cette URL est requise. Aucun envoi effectué.');
  }
}

/** Default is read-only. POST is reachable only with the explicit boolean submit. */
export async function runIndexNow({ config, paths = [], submit = false, fetchImpl = globalThis.fetch, timeoutMs = 10000 }) {
  const settings = validateConfig(config);
  if (typeof submit !== 'boolean' || typeof fetchImpl !== 'function') throw new IndexNowError('Options IndexNow invalides.');
  if (!Array.isArray(paths)) throw new IndexNowError('La sélection de chemins est invalide.');
  paths.forEach(validatePath);
  const sitemap = await getText(fetchImpl, settings.sitemapUrl, 'Sitemap public', { mime: 'application/xml, text/xml', timeoutMs });
  const urls = selectUrls(parseSitemapUrls(sitemap.text), paths);
  if (!urls.length || urls.length > MAX_URLS) throw new IndexNowError('La sélection d’URL est vide ou trop grande.');

  if (submit) {
    const verification = await getText(fetchImpl, settings.keyLocation, 'Fichier de vérification IndexNow', { mime: 'text/plain', timeoutMs, maxBytes: 128 });
    if (verification.text !== settings.key) throw new IndexNowError('Le fichier de vérification public ne correspond pas. Aucun envoi effectué.');
  }
  // Sequential, bounded preflights avoid flooding the public site and fail early.
  for (const url of urls) {
    const page = await getText(fetchImpl, url, 'Page du sitemap', { mime: 'text/html, application/xhtml+xml', timeoutMs });
    validateIndexableHtml(page.text, url, page.response.headers.get('x-robots-tag'));
  }
  if (!submit) return { mode: 'dry-run', urls, posted: false };

  let response;
  try {
    response = await fetchImpl(settings.endpoint, {
      method: 'POST', redirect: 'manual', credentials: 'omit',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: new URL(settings.origin).hostname, key: settings.key, keyLocation: settings.keyLocation, urlList: urls }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch {
    throw new IndexNowError('Réception IndexNow non confirmée. Aucun nouvel essai automatique ; vérifier avant de relancer.');
  }
  if (response.redirected || (response.url && response.url !== settings.endpoint) || ![200, 202].includes(response.status)) {
    const message = response.status === 429
      ? 'IndexNow limite les envois (HTTP 429). Aucun nouvel essai automatique.'
      : `IndexNow n’a pas confirmé la réception (HTTP ${response.status}). Aucun nouvel essai automatique.`;
    throw new IndexNowError(message, response.status);
  }
  return { mode: 'submit', urls, posted: true, status: response.status, receipt: response.status === 200 ? 'received' : 'key-validation-pending' };
}
