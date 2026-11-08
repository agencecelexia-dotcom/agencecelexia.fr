/** Audit HTTP public, en lecture seule. Un User-Agent simulé ne prouve pas l’accès depuis les IP d’un moteur. */
import { createHash } from 'node:crypto';
import { validateIndexableHtml } from './lib/indexnow.mjs';

const SITE = 'https://agencecelexia.fr';
const bots = ['Googlebot', 'bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'MistralAI-Index'];
const paths = ['/apporteur-affaires-btp', '/guides/demande-qualifiee-btp', '/guides/choisir-apporteur-affaires-couvreur'];
const request = (path, agent = 'Celexia-Public-Audit/1.0') => fetch(`${SITE}${path}`, {
  headers: { 'User-Agent': agent }, redirect: 'error', signal: AbortSignal.timeout(15000),
});
const check = (condition, message) => { if (!condition) throw new Error(message); };

try {
  const robotsResponse = await request('/robots.txt');
  check(robotsResponse.status === 200, `robots.txt : HTTP ${robotsResponse.status}`);
  const robots = await robotsResponse.text();
  check(robots.includes(`Sitemap: ${SITE}/sitemap.xml`), 'Sitemap absent de robots.txt');
  // Le fichier livré n’a aucune restriction de chemin. Si cela change, demander
  // une revue réelle des règles au lieu de déduire leur effet d’un simple Allow.
  check(!/^Disallow:\s*\S+/im.test(robots), 'Restriction robots détectée : analyser les groupes avant de conclure');
  const sitemapResponse = await request('/sitemap.xml');
  check(sitemapResponse.status === 200, `sitemap : HTTP ${sitemapResponse.status}`);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  check(urls.length > 0 && new Set(urls).size === urls.length, 'Sitemap vide ou dupliqué');
  for (const url of urls) {
    const parsed = new URL(url);
    check(parsed.origin === SITE && !parsed.search && !parsed.hash && !parsed.username && !parsed.password, 'URL hors périmètre dans le sitemap');
  }
  const baselines = new Map();
  const inspect = async (path, agent) => {
    const response = await request(path, agent);
    check(response.status === 200, `${agent || 'Visiteur'} ${path} : HTTP ${response.status}`);
    const html = await response.text();
    validateIndexableHtml(html, `${SITE}${path}`, response.headers.get('x-robots-tag'));
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
    check(/<h1\b/.test(main) && main.replace(/<[^>]+>/g, ' ').trim().length > 300, `${path} : contenu principal absent`);
    const hash = createHash('sha256').update(main).digest('hex');
    if (!agent) baselines.set(path, hash);
    else check(baselines.get(path) === hash, `${path} : le contenu varie selon le User-Agent ${agent}`);
    return { agent: agent || 'Visiteur', path, status: response.status, canonical: true, htmlComplet: true, contenuIdentique: true };
  };
  for (const url of urls) await inspect(new URL(url).pathname);
  for (const path of paths) check(baselines.has(path), `${path} absent du site publié`);
  for (const agent of bots) {
    for (const path of paths) console.log(JSON.stringify(await inspect(path, agent)));
  }
  console.log(`${urls.length} pages publiques contrôlées, ${bots.length} User-Agents sur ${paths.length} pages clés.`);
  console.log('Contrôle HTTP uniquement : aucune preuve d’indexation, de citation ou d’accès depuis les IP réelles des moteurs.');
} catch (error) {
  console.error(`Audit interrompu : ${error.message}`);
  process.exitCode = 1;
}
