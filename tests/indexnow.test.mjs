import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  INDEXNOW_ENDPOINT, SITE_ORIGIN, IndexNowError, parseArgs, parseSitemapUrls,
  runIndexNow, selectUrls, validateConfig, validateIndexableHtml, validatePublicUrl,
} from '../scripts/lib/indexnow.mjs';

// Every request is intercepted here. These tests cannot contact a search engine.
const config = { origin: SITE_ORIGIN, endpoint: INDEXNOW_ENDPOINT, key: '0'.repeat(32) };
const keyLocation = `${SITE_ORIGIN}/${config.key}.txt`;
const sitemapLocation = `${SITE_ORIGIN}/sitemap.xml`;
const paths = ['/', '/apporteur-affaires-btp', '/guides/demande-qualifiee-btp'];
const urls = paths.map(path => `${SITE_ORIGIN}${path}`);
const sitemap = (entries = urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(url => `<url><loc>${url}</loc><lastmod>2026-11-07</lastmod></url>`).join('\n')}
</urlset>`;
const html = (url, extra = '') => `<!doctype html><html><head>
<link rel="canonical" href="${url}">${extra}
</head><body><h1>Page publique Celexia</h1></body></html>`;

function response(body, { status = 200, type = 'text/html', headers = {}, redirected = false, url = '' } = {}) {
  return { status, redirected, url, headers: new Headers({ 'content-type': type, ...headers }), text: async () => body };
}

function mockNetwork(overrides = new Map(), postResponse = response('', { status: 200, type: 'application/json' })) {
  const calls = [];
  return {
    calls,
    fetchImpl: async (url, options) => {
      calls.push({ url, ...options });
      assert.equal(options.redirect, 'manual', 'aucune redirection réseau automatique');
      assert.equal(options.credentials, 'omit', 'aucun identifiant de session');
      if (options.method === 'POST') {
        assert.equal(url, INDEXNOW_ENDPOINT, 'un seul endpoint public autorisé');
        if (postResponse instanceof Error) throw postResponse;
        return postResponse;
      }
      assert.equal(options.method, 'GET');
      if (overrides.has(url)) {
        const value = overrides.get(url);
        if (value instanceof Error) throw value;
        return value;
      }
      if (url === sitemapLocation) return response(sitemap(), { type: 'application/xml; charset=utf-8' });
      if (url === keyLocation) return response(config.key, { type: 'text/plain' });
      if (urls.includes(url)) return response(html(url));
      assert.fail('Requête inattendue : aucun accès réseau réel autorisé dans les tests.');
    },
  };
}

test('configuration livrée et fichier public correspondent sans afficher la clé', () => {
  const actual = JSON.parse(readFileSync(new URL('../config/indexnow.json', import.meta.url), 'utf8'));
  assert.doesNotThrow(() => validateConfig(actual));
  const verification = readFileSync(new URL(`../public/${actual.key}.txt`, import.meta.url), 'utf8');
  assert.ok(verification === actual.key, 'le fichier UTF-8 contient exactement la valeur configurée');
  assert.ok(parseSitemapUrls(readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')).length > 0);
});

test('CLI en lecture seule par défaut, sélection par chemin et envoi explicite', () => {
  assert.deepEqual(parseArgs([]), { help: false, submit: false, paths: [] });
  assert.deepEqual(parseArgs(['/apporteur-affaires-btp']), { help: false, submit: false, paths: ['/apporteur-affaires-btp'] });
  assert.equal(parseArgs(['--dry-run']).submit, false);
  assert.equal(parseArgs(['--submit', '/']).submit, true);
  assert.equal(parseArgs(['--help']).help, true);
  assert.throws(() => parseArgs(['--submit', '--dry-run']), IndexNowError);
  assert.throws(() => parseArgs(['--submit', '--submit']), IndexNowError);
  assert.throws(() => parseArgs(['--endpoint=https://example.org']), IndexNowError);
  assert.throws(() => parseArgs([urls[0]]), IndexNowError);
});

test('domaine, endpoint et URL privées refusés avant toute requête', async () => {
  const invalidConfigs = [
    { ...config, origin: 'https://example.org' },
    { ...config, origin: 'https://127.0.0.1' },
    { ...config, endpoint: 'https://www.bing.com/indexnow' },
    { ...config, endpoint: 'http://169.254.169.254' },
    { ...config, key: '../invalid' },
  ];
  for (const invalid of invalidConfigs) {
    const network = mockNetwork();
    await assert.rejects(runIndexNow({ config: invalid, submit: true, fetchImpl: network.fetchImpl }), IndexNowError);
    assert.equal(network.calls.length, 0);
  }
  for (const path of ['/api/candidature', '/admin', '/private/test', '/.env', '//example.org', '/login', '/guides/../admin']) {
    const network = mockNetwork();
    await assert.rejects(runIndexNow({ config, paths: [path], submit: true, fetchImpl: network.fetchImpl }), IndexNowError);
    assert.equal(network.calls.length, 0);
  }
});

test('URL du sitemap : HTTPS exact, même origine, sans paramètre ni identifiant', () => {
  assert.equal(validatePublicUrl(urls[0]), urls[0]);
  const unsafe = [
    'https://example.org/', 'http://agencecelexia.fr/', 'https://www.agencecelexia.fr/',
    'https://127.0.0.1/', 'https://[::1]/', 'https://169.254.169.254/',
    'https://user:password@agencecelexia.fr/', 'https://agencecelexia.fr:443/',
    `${urls[0]}?utm_source=test`, `${urls[0]}?`, `${urls[0]}#`, `${urls[0]}#x`,
    `${SITE_ORIGIN}/api/candidature`, `${SITE_ORIGIN}/internal/status`,
    `${SITE_ORIGIN}/guides/../about`, `${SITE_ORIGIN}/%61bout`,
    `${SITE_ORIGIN}/.git/config`, `${SITE_ORIGIN}/about/`, `${SITE_ORIGIN}/ABOUT`,
  ];
  for (const url of unsafe) assert.throws(() => validatePublicUrl(url), IndexNowError);
});

test('sitemap limité au format public, sans DTD, ambiguïté ni URL externe', () => {
  assert.deepEqual(parseSitemapUrls(sitemap()), urls);
  const invalid = [
    sitemap([]), sitemap([urls[0], urls[0]]), sitemap(['https://example.org/']),
    sitemap([`${SITE_ORIGIN}/api/candidature`]), sitemap(['https://127.0.0.1/']),
    '<!DOCTYPE urlset [<!ENTITY x SYSTEM "file:///etc/passwd">]>' + sitemap(),
    sitemap().replace('</loc>', '</loc><loc>https://example.org/</loc>'),
    sitemap().replace('</urlset>', '<script>invalid</script></urlset>'),
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>',
  ];
  for (const xml of invalid) assert.throws(() => parseSitemapUrls(xml), IndexNowError);
  assert.deepEqual(selectUrls(urls, ['/apporteur-affaires-btp', '/apporteur-affaires-btp']), [urls[1]]);
  assert.throws(() => selectUrls(urls, ['/page-non-publiee']), IndexNowError);
  assert.throws(() => selectUrls(urls, [urls[1]]), IndexNowError);
});

test('simulation par défaut contrôle les pages sans clé de production ni POST', async () => {
  const network = mockNetwork();
  const result = await runIndexNow({ config, fetchImpl: network.fetchImpl });
  assert.deepEqual(result, { mode: 'dry-run', urls, posted: false });
  assert.deepEqual(network.calls.map(call => call.url), [sitemapLocation, ...urls]);
  assert.ok(network.calls.every(call => call.method === 'GET'));
});

test('sélection absente ou sitemap étranger bloque avant fichier de clé et POST', async () => {
  const network = mockNetwork();
  await assert.rejects(runIndexNow({ config, paths: ['/inconnue'], submit: true, fetchImpl: network.fetchImpl }), IndexNowError);
  assert.equal(network.calls.length, 1);
  const external = mockNetwork(new Map([[sitemapLocation, response(sitemap(['https://example.org/']), { type: 'text/xml' })]]));
  await assert.rejects(runIndexNow({ config, submit: true, fetchImpl: external.fetchImpl }), IndexNowError);
  assert.equal(external.calls.length, 1);
});

test('fichier de clé absent, redirigé ou incorrect bloque tout POST', async () => {
  const rejected = [
    response('', { status: 404, type: 'text/plain' }),
    response('', { status: 301, type: 'text/plain', headers: { location: 'https://example.org/' } }),
    response(config.key, { type: 'text/plain', redirected: true }),
    response(config.key, { type: 'text/plain', url: 'https://example.org/key' }),
    response(`${config.key}\n`, { type: 'text/plain' }),
    response('wrong', { type: 'text/plain' }),
    response(config.key, { type: 'text/html' }),
    new Error('raw-network-error-with-sensitive-data'),
  ];
  for (const keyResponse of rejected) {
    const network = mockNetwork(new Map([[keyLocation, keyResponse]]));
    await assert.rejects(runIndexNow({ config, submit: true, fetchImpl: network.fetchImpl }), error => {
      assert.ok(error instanceof IndexNowError);
      assert.ok(!error.message.includes(config.key));
      assert.ok(!error.message.includes('sensitive-data'));
      return true;
    });
    assert.equal(network.calls.filter(call => call.method === 'POST').length, 0);
    assert.equal(network.calls.length, 2);
  }
});

test('précontrôle de chaque page : erreurs HTTP, redirections, noindex et canonical bloquent tout POST', async () => {
  const target = urls[1];
  const rejected = [
    response('', { status: 404 }),
    response('', { status: 302, headers: { location: urls[0] } }),
    response(html(target), { redirected: true }),
    response(html(target), { url: urls[0] }),
    response(html(target), { headers: { 'x-robots-tag': 'googlebot: noindex, nofollow' } }),
    response(html(target, '<meta name="robots" content="none">')),
    response(html(target, '<meta name="bingbot" content="NOINDEX, follow">')),
    response(html(target, '<meta http-equiv="refresh" content="0;url=/">')),
    response(html(urls[0])),
    response(html(target, `<link rel="canonical" href="${target}">`)),
    response('<html><head></head><body>Pas de canonical</body></html>'),
    response(html(target), { type: 'application/json' }),
  ];
  for (const pageResponse of rejected) {
    const network = mockNetwork(new Map([[target, pageResponse]]));
    await assert.rejects(runIndexNow({ config, submit: true, fetchImpl: network.fetchImpl }), IndexNowError);
    assert.equal(network.calls.filter(call => call.method === 'POST').length, 0);
  }
});

test('HTML : attributs variés acceptés, canonical cachée dans commentaire ou script refusée', () => {
  assert.doesNotThrow(() => validateIndexableHtml(`<HTML><HEAD><LINK HREF='${urls[0]}' REL=canonical><META name=robots content='index, follow'></HEAD></HTML>`, urls[0]));
  assert.throws(() => validateIndexableHtml(`<html><head><!-- <link rel="canonical" href="${urls[0]}"> --></head></html>`, urls[0]), IndexNowError);
  assert.throws(() => validateIndexableHtml(`<html><head><script>const x='<link rel="canonical" href="${urls[0]}">';</script></head></html>`, urls[0]), IndexNowError);
  assert.throws(() => validateIndexableHtml(`<head><link rel="canonical" href="${urls[0]}" href="https://example.org/"></head>`, urls[0]), IndexNowError);
  assert.throws(() => validateIndexableHtml(html(urls[0]), urls[0], 'none'), IndexNowError);
});

test('envoi explicite : un seul POST après précontrôles, uniquement les URL sélectionnées', async () => {
  const network = mockNetwork();
  const result = await runIndexNow({ config, submit: true, paths: ['/apporteur-affaires-btp'], fetchImpl: network.fetchImpl });
  assert.deepEqual(network.calls.map(call => call.url), [sitemapLocation, keyLocation, urls[1], INDEXNOW_ENDPOINT]);
  const posts = network.calls.filter(call => call.method === 'POST');
  assert.equal(posts.length, 1);
  assert.deepEqual(JSON.parse(posts[0].body), {
    host: 'agencecelexia.fr', key: config.key, keyLocation, urlList: [urls[1]],
  });
  assert.deepEqual(result, { mode: 'submit', urls: [urls[1]], posted: true, status: 200, receipt: 'received' });
  assert.ok(!JSON.stringify(result).includes(config.key));
  assert.ok(!('indexed' in result));
});

test('HTTP 202 indique une validation en cours, jamais une indexation', async () => {
  const network = mockNetwork(new Map(), response('', { status: 202 }));
  const result = await runIndexNow({ config, submit: true, fetchImpl: network.fetchImpl });
  assert.equal(result.status, 202);
  assert.equal(result.receipt, 'key-validation-pending');
  assert.ok(!('indexed' in result));
});

test('HTTP 429, erreur réseau ou redirection du service : aucun nouvel essai ni endpoint alternatif', async () => {
  const rejected = [
    response('', { status: 429 }), response('', { status: 500 }),
    response('', { status: 301, headers: { location: 'https://example.org/' } }),
    response('', { status: 200, redirected: true }),
    response('', { status: 200, url: 'https://example.org/' }),
    new Error('raw-network-error-with-sensitive-data'),
  ];
  for (const serviceResponse of rejected) {
    const network = mockNetwork(new Map(), serviceResponse);
    await assert.rejects(runIndexNow({ config, submit: true, fetchImpl: network.fetchImpl }), error => {
      assert.ok(error instanceof IndexNowError);
      assert.match(error.message, /Aucun nouvel essai automatique/);
      assert.ok(!error.message.includes(config.key));
      assert.ok(!error.message.includes('sensitive-data'));
      return true;
    });
    assert.equal(network.calls.filter(call => call.method === 'POST').length, 1);
    assert.ok(network.calls.every(call => call.url.startsWith(SITE_ORIGIN) || call.url === INDEXNOW_ENDPOINT));
  }
});
