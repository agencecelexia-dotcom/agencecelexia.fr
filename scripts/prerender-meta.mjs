/**
 * Pré-rendu complet : chaque URL indexable reçoit son contenu, ses métadonnées
 * et ses données structurées dans le HTML initial, sans dépendre de JavaScript.
 * Les contenus SEO et les métiers sont partagés avec les composants React.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { METIERS } from '../src/data/metiers.js';
import { DEFINITION } from '../src/data/offre.js';
import { SEO_PAGES } from '../src/data/seoPages.js';
import { SEO_HUB } from '../src/data/seoHub.js';
import { CASE_STUDY } from '../src/data/partnerCase.js';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(rootDir, 'dist');
const SITE_URL = 'https://agencecelexia.fr';
const DATE_MODIFIED = '2026-11-07';

const ORG_LD = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Agence Celexia',
  alternateName: ['Celexia', 'CELEXIA'],
  legalName: 'CELEXIA',
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512x512.png`, width: 512, height: 512 },
  image: `${SITE_URL}/og-image.png`,
  description: DEFINITION,
  slogan: 'On gagne quand vous gagnez',
  telephone: '+33651725756',
  email: 'agence.celexia@gmail.com',
  taxID: 'SIREN 939 306 429',
  areaServed: { '@type': 'Country', name: 'France' },
  knowsLanguage: 'fr',
  knowsAbout: [
    'Apport d’affaires pour artisans',
    'Qualification de demandes de chantiers',
    'Mise en relation artisan et particulier',
    'Chantiers de piscine, couverture, façade et maçonnerie',
  ],
  sameAs: ['https://www.facebook.com/agencecelexia'],
  founder: ['Thomas', 'Antoine'].map((name) => ({
    '@type': 'Person',
    '@id': `${SITE_URL}/#${name.toLowerCase()}`,
    name,
    jobTitle: 'Co-fondateur',
    worksFor: { '@id': `${SITE_URL}/#organization` },
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33651725756',
    email: 'agence.celexia@gmail.com',
    contactType: 'customer service',
    availableLanguage: 'French',
    areaServed: 'FR',
  },
};

const WEBSITE_LD = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Agence Celexia',
  description: DEFINITION,
  inLanguage: 'fr-FR',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const baseRoutes = [
  {
    path: '/',
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    description: 'Celexia accompagne les artisans avec des projets qualifiés. Recherche financée par nos soins, commission après signature et acompte reçu.',
    updatedAt: DATE_MODIFIED,
  },
  {
    path: '/about',
    title: 'Qui sommes-nous ? | Agence Celexia',
    description: 'Thomas et Antoine, fondateurs de Celexia. Des projets qualifiés pour les artisans, une commission uniquement après signature et acompte reçu.',
    pageType: 'AboutPage',
    updatedAt: DATE_MODIFIED,
  },
  {
    path: '/contact',
    title: 'Parlons de votre entreprise | Agence Celexia',
    description: 'Contactez l’équipe Celexia ou présentez votre entreprise. Votre candidature est étudiée par l’équipe Celexia avant un premier échange.',
    pageType: 'ContactPage',
    updatedAt: DATE_MODIFIED,
  },
  {
    path: '/candidature',
    title: 'Candidature artisan | Agence Celexia',
    description: 'Présentez votre entreprise, votre activité et vos capacités. L’équipe Celexia étudie votre candidature et revient vers vous.',
    pageType: 'ContactPage',
    updatedAt: DATE_MODIFIED,
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Agence Celexia',
    description: 'Mentions légales du site agencecelexia.fr : éditeur, hébergeur, propriété intellectuelle et droit applicable.',
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de confidentialité | Agence Celexia',
    description: 'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
  },
];

const metierRoutes = Object.entries(METIERS).map(([slug, metier]) => ({
  path: `/metiers/${slug}`,
  title: metier.seoTitle,
  description: metier.seoDescription,
  updatedAt: DATE_MODIFIED,
  serviceName: `Apport d’affaires pour ${metier.label.toLowerCase()}`,
  audience: metier.label,
}));

const editorialRoutes = [...Object.values(SEO_PAGES), CASE_STUDY].map((page) => ({
  ...page,
  article: page.kind === 'article',
  serviceName: page.path === '/apporteur-affaires-btp'
    ? 'Apport d’affaires BTP pour artisans du bâtiment'
    : undefined,
}));

const routes = [
  ...baseRoutes,
  ...metierRoutes,
  { ...SEO_HUB, pageType: 'CollectionPage' },
  ...editorialRoutes,
];
const routePaths = new Set(routes.map(({ path }) => path));
if (routePaths.size !== routes.length) throw new Error('Une route SEO est déclarée plusieurs fois.');

const pageNames = {
  '/': 'Accueil',
  '/about': 'Qui sommes-nous ?',
  '/contact': 'Contact',
  '/candidature': 'Candidature',
  '/mentions-legales': 'Mentions légales',
  '/politique-confidentialite': 'Politique de confidentialité',
  '/guides': 'Guides artisans',
  ...Object.fromEntries(Object.entries(METIERS).map(([slug, metier]) => [`/metiers/${slug}`, metier.label])),
  ...Object.fromEntries(editorialRoutes.map((page) => [page.path, page.breadcrumbLabel || page.h1])),
};

function buildBreadcrumbJsonLd(route) {
  if (route.path === '/') return null;
  const breadcrumbs = [{ name: 'Accueil', path: '/' }];
  let path = '';
  for (const segment of route.path.split('/').filter(Boolean)) {
    path += `/${segment}`;
    // /metiers n’est pas une page : ne pas déclarer d’URL inexistante.
    if (routePaths.has(path)) breadcrumbs.push({ name: pageNames[path], path });
  }
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${route.path}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function buildJsonLd(route) {
  const url = `${SITE_URL}${route.path}`;
  const breadcrumb = buildBreadcrumbJsonLd(route);
  const webpage = {
    '@type': route.pageType || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': WEBSITE_LD['@id'] },
    about: { '@id': ORG_LD['@id'] },
    ...(route.updatedAt && { dateModified: route.updatedAt }),
    ...(breadcrumb && { breadcrumb: { '@id': breadcrumb['@id'] } }),
  };
  const graph = [ORG_LD, WEBSITE_LD, webpage];
  if (breadcrumb) graph.push(breadcrumb);
  if (route.serviceName) {
    const id = `${url}#service`;
    webpage.mainEntity = { '@id': id };
    graph.push({
      '@type': 'Service',
      '@id': id,
      name: route.serviceName,
      description: route.description,
      url,
      serviceType: 'Apport d’affaires',
      provider: { '@id': ORG_LD['@id'] },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'BusinessAudience', audienceType: route.audience || 'Artisans et entreprises du bâtiment' },
    });
  }
  if (route.article) {
    const id = `${url}#article`;
    webpage.mainEntity = { '@id': id };
    graph.push({
      '@type': 'Article',
      '@id': id,
      headline: route.h1,
      description: route.description,
      url,
      mainEntityOfPage: { '@id': webpage['@id'] },
      inLanguage: 'fr-FR',
      author: { '@type': 'Organization', name: 'L’équipe Celexia', url: `${SITE_URL}/about` },
      publisher: { '@id': ORG_LD['@id'] },
      datePublished: route.publishedAt,
      dateModified: route.updatedAt,
      isAccessibleForFree: true,
      ...(route.sources && { citation: route.sources.map(source => `${SITE_URL}${source.path}`) }),
    });
  }
  if (route.path === SEO_HUB.path) {
    webpage.mainEntity = {
      '@type': 'ItemList',
      itemListElement: editorialRoutes.map((page, i) => ({
        '@type': 'ListItem', position: i + 1, name: page.h1, url: `${SITE_URL}${page.path}`,
      })),
    };
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function escapeHtml(value) {
  return String(value).replace(/[&"'<>]/g, (char) => ({
    '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;',
  }[char]));
}

function generatePage(template, route, content) {
  const canonical = `${SITE_URL}${route.path}`;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  // Le site est uniquement en français. Les anciens hreflang pointaient vers
  // l’accueil depuis toutes les pages, sans représenter de versions traduites.
  html = html.replace(/\s*<link[^>]+hreflang="[^"]*"[^>]*>/g, '');
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, route.noindex ? '' : `<link rel="canonical" href="${canonical}" />`);
  const metas = {
    description: route.description,
    'og:title': route.title,
    'og:description': route.description,
    'og:url': canonical,
    'og:type': route.article ? 'article' : 'website',
    'twitter:title': route.title,
    'twitter:description': route.description,
  };
  if (route.noindex) metas.robots = 'noindex, follow';
  for (const [name, value] of Object.entries(metas)) {
    const attribute = name.startsWith('og:') ? 'property' : 'name';
    const pattern = new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*\\/?>`);
    html = html.replace(pattern, `<meta ${attribute}="${name}" content="${escapeHtml(value)}" />`);
  }
  if (!route.noindex) {
    // Escape '<' so editorial text can never terminate the JSON-LD script.
    const schema = JSON.stringify(buildJsonLd(route)).replace(/</g, '\\u003c');
    html = html.replace('</head>', `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  }
  return html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
}

const templatePath = join(distDir, 'index.html');
const ssrPath = join(rootDir, 'dist-ssr', 'entry-server.js');
if (!existsSync(templatePath) || !existsSync(ssrPath)) {
  throw new Error('Pré-rendu incomplet : lancer npm run build pour produire les bundles client et serveur.');
}
const template = readFileSync(templatePath, 'utf-8');
const { render } = await import(ssrPath);
for (const route of routes) {
  const content = await render(route.path);
  if (!content.includes('<h1')) throw new Error(`Contenu principal absent du pré-rendu : ${route.path}`);
  const path = route.path === '/' ? templatePath : join(distDir, route.path, 'index.html');
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, generatePage(template, route, content));
}

// Vercel et Netlify servent ce fichier avec un véritable statut 404 lorsque
// aucune route statique, redirection ou fonction ne correspond à la demande.
const notFound = {
  path: '/404',
  title: 'Page introuvable | Agence Celexia',
  description: 'Cette page n’existe pas ou a été déplacée.',
  noindex: true,
};
writeFileSync(join(distDir, '404.html'), generatePage(template, notFound, await render('/404')));
console.log(`Pre-rendered ${routes.length} pages with SEO meta tags, JSON-LD and full page content, plus 404.html.`);
