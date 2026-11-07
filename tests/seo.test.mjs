import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { SEO_PAGES } from '../src/data/seoPages.js';
import { SEO_HUB } from '../src/data/seoHub.js';
import { CASE_STUDY } from '../src/data/partnerCase.js';
import { METIERS } from '../src/data/metiers.js';

// Tests d’intégration des fichiers réellement livrés : npm run build doit avoir
// été lancé avant node --test tests/seo.test.mjs.
const SITE = 'https://agencecelexia.fr';
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const sitemap = read('dist/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const paths = urls.map((url) => new URL(url).pathname);
const fileFor = (path) => `dist${path === '/' ? '' : path}/index.html`;
const pages = new Map(paths.map((path) => [path, read(fileFor(path))]));
const decode = (text) => text.replace(/&amp;|&quot;|&#39;|&lt;|&gt;/g, (entity) => ({
  '&amp;': '&', '&quot;': '"', '&#39;': "'", '&lt;': '<', '&gt;': '>',
}[entity]));
const meta = (html, name) => decode(html.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`))?.[1] || '');
const schemas = (html) => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));

test('sitemap et pages indexables restent synchronisés, y compris les nouvelles pages', () => {
  assert.equal(urls.length, new Set(urls).size, 'pas d’URL dupliquée');
  for (const page of [...Object.values(SEO_PAGES), SEO_HUB, CASE_STUDY]) {
    assert.ok(paths.includes(page.path), `${page.path} manque au sitemap`);
  }
  function collectIndexes(directory, found = []) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) collectIndexes(path, found);
      else if (entry.name === 'index.html') found.push(path);
    }
    return found;
  }
  const generated = collectIndexes('dist')
    .filter((path) => !path.startsWith('dist/proposition/'))
    .map((path) => path.replace(/^dist/, '').replace(/\/index\.html$/, '') || '/');
  assert.deepEqual(generated.sort(), [...paths].sort());
  assert.ok(!paths.includes('/404'));
});

test('chaque page livre un contenu complet et des métadonnées propres sans JavaScript', () => {
  const titles = new Set();
  for (const [path, html] of pages) {
    const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
    assert.ok(title, `${path} : titre manquant`);
    assert.ok(!titles.has(title), `${path} : titre dupliqué`);
    titles.add(title);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path} : un seul h1`);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path} : une seule canonical`);
    assert.ok(html.includes(`<link rel="canonical" href="${SITE}${path}"`), `${path} : canonical auto-référente`);
    assert.equal(meta(html, 'og:url'), `${SITE}${path}`);
    assert.equal(meta(html, 'og:title'), title);
    assert.ok(meta(html, 'description').length > 40, `${path} : description manquante`);
    assert.ok(!meta(html, 'robots').includes('noindex'), `${path} : indexation autorisée`);
    assert.ok(!html.includes('hreflang='), `${path} : pas de fausses traductions vers l’accueil`);
    const main = html.match(/<main\b[^>]*>(.*?)<\/main>/s)?.[1] || '';
    assert.ok(main.replace(/<[^>]*>/g, ' ').trim().length > 300, `${path} : contenu HTML principal absent`);
    const hiddenContainers = [...main.matchAll(/<div\b[^>]*>/g)]
      .some(([tag]) => /\shidden(?:\s|=|>)/.test(tag.replace(/"[^"]*"|'[^']*'/g, '""')));
    assert.ok(!hiddenContainers, `${path} : contenu non caché par Suspense`);
  }
});

test('les guides partagent leur titre, date et auteur visibles avec Article', () => {
  for (const page of [...Object.values(SEO_PAGES), CASE_STUDY]) {
    const html = pages.get(page.path);
    assert.equal(decode(html.match(/<title>([^<]+)<\/title>/)[1]), page.title);
    assert.equal(meta(html, 'description'), page.description);
    if (page.kind !== 'article') continue;
    assert.equal(meta(html, 'og:type'), 'article');
    const article = schemas(html).flatMap((schema) => schema['@graph'] || [schema]).find((node) => node['@type'] === 'Article');
    assert.ok(article, `${page.path} : Article absent`);
    assert.equal(article.headline, page.h1);
    assert.equal(article.datePublished, page.publishedAt);
    assert.equal(article.dateModified, page.updatedAt);
    assert.equal(article.author.name, 'L’équipe Celexia');
    assert.ok(html.includes(`dateTime="${page.updatedAt}"`) || html.includes(`datetime="${page.updatedAt}"`), `${page.path} : date visible absente`);
    assert.ok(html.includes('L’équipe Celexia'), `${page.path} : auteur visible absent`);
  }
});

test('les schémas sont cohérents et les fils d’Ariane ne pointent que vers des pages existantes', () => {
  for (const [path, html] of pages) {
    const graphs = schemas(html);
    assert.equal(graphs.length, 1, `${path} : un seul graphe JSON-LD`);
    const graph = graphs[0]['@graph'];
    assert.ok(graph.some((node) => node['@type'] === 'Organization'));
    assert.ok(graph.some((node) => node['@type'] === 'WebSite'));
    assert.ok(!graph.some((node) => ['HowTo', 'FAQPage', 'LocalBusiness'].includes(node['@type'])));
    const breadcrumb = graph.find((node) => node['@type'] === 'BreadcrumbList');
    if (path === '/') assert.equal(breadcrumb, undefined);
    else {
      assert.ok(breadcrumb, `${path} : fil d’Ariane manquant`);
      for (const [index, crumb] of breadcrumb.itemListElement.entries()) {
        assert.equal(crumb.position, index + 1);
        assert.ok(urls.includes(crumb.item), `${path} : fil d’Ariane vers ${crumb.item}`);
      }
    }
    for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) {
      const linkedPath = new URL(decode(match[1]), SITE).pathname;
      if (/\.[a-z\d]+$/i.test(linkedPath)) {
        assert.ok(existsSync(`dist${linkedPath}`), `${path} : fichier lié absent ${linkedPath}`);
      } else assert.ok(pages.has(linkedPath), `${path} : lien interne absent ${linkedPath}`);
    }
  }
});

test('les métiers livrent leurs métadonnées et les repères techniques spécifiques au pré-rendu', () => {
  for (const [slug, metier] of Object.entries(METIERS)) {
    const html = pages.get(`/metiers/${slug}`);
    assert.equal(decode(html.match(/<title>([^<]+)<\/title>/)[1]), metier.seoTitle);
    assert.equal(meta(html, 'description'), metier.seoDescription);
    const content = decode(html);
    for (const point of metier.preparation.points) {
      assert.ok(content.includes(point.title), `${slug} : repère technique absent`);
      assert.ok(content.includes(point.description), `${slug} : explication absente`);
    }
    for (const question of metier.questions) assert.ok(content.includes(question.a), `${slug} : réponse métier absente`);
    assert.ok(!content.includes('Ordre de grandeur constaté sur le marché'), `${slug} : ancien budget non sourcé`);
  }
  assert.ok(pages.get('/partenariat-artisans-btp').includes('/ressources/fiche-partenariat-artisan.html'));
  const sheet = read('dist/ressources/fiche-partenariat-artisan.html');
  assert.equal(meta(sheet, 'robots'), 'noindex, follow');
  assert.ok(!/googletagmanager|fetch\(|<form\b/.test(sheet), 'la fiche ne collecte aucune information');
});

test('les URL inconnues ont un document 404 non indexable sans repli vers un accueil HTTP200', () => {
  const html = read('dist/404.html');
  assert.equal(meta(html, 'robots'), 'noindex, follow');
  assert.ok(html.includes('Cette page n’existe pas.'));
  assert.ok(!html.includes('rel="canonical"'));
  assert.equal(schemas(html).length, 0);
  const vercel = JSON.parse(read('vercel.json'));
  assert.ok(!(vercel.rewrites || []).some((route) => route.destination === '/index.html'));
  assert.ok(!/^\/\*\s+\/index\.html\s+200/m.test(read('public/_redirects')));
  assert.ok(!/from = "\/\*"\s+to = "\/index.html"\s+status = 200/.test(read('netlify.toml')));
  assert.ok(read('netlify.toml').includes('from = "/api/candidature"'), 'API Netlify préservée');
  assert.ok(vercel.redirects.some((route) => route.source === '/rejoindre' && route.destination === '/candidature'));
});

test('le document 404 partagé conserve le même contenu que les routes inconnues du routeur', async () => {
  const { render } = await import('../dist-ssr/entry-server.js');
  const mainFrom = (html) => html.match(/<main\b[^>]*>(.*?)<\/main>/s)?.[1];
  const expected = mainFrom(read('dist/404.html'));
  for (const path of ['/page-inconnue-test-seo', '/metiers/metier-inconnu-test-seo', '/guides/guide-inconnu-test-seo']) {
    assert.equal(mainFrom(await render(path)), expected, `${path} : pas de redirection client ni de contenu divergent`);
  }
});

test('robots autorise les ressources de rendu et les robots de recherche IA', () => {
  const robots = read('dist/robots.txt');
  assert.ok(!/Disallow:\s*\/assets\//i.test(robots));
  assert.ok(robots.includes(`Sitemap: ${SITE}/sitemap.xml`));
  for (const bot of ['OAI-SearchBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot']) {
    assert.ok(robots.includes(`User-agent: ${bot}\nAllow: /`), `${bot} est autorisé`);
  }
});
