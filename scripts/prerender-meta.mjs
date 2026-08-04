/**
 * Script post-build : génère un fichier HTML statique par route, contenant
 * à la fois ses meta (title, description, canonical, OG, Twitter), son JSON-LD
 * et **le contenu de la page réellement rendu**.
 *
 * C'est la SEULE source de vérité du SEO. Une route absente d'ici est invisible
 * pour Google, quoi qu'en dise le routeur React.
 *
 * Le rendu du contenu vient de dist-ssr/entry-server.js (bundle SSR produit par
 * `vite build --ssr`). Sans lui, le HTML ne contiendrait qu'un <div id="root">
 * vide : Google saurait l'exécuter, mais pas GPTBot, ClaudeBot, PerplexityBot
 * ni les robots d'aperçu de lien.
 *
 * Les métiers et la FAQ sont IMPORTÉS depuis src/data/ : plus aucune liste
 * dupliquée à maintenir en parallèle. Ajouter un métier dans src/data/metiers.js
 * suffit à générer sa page — il reste à l'ajouter à public/sitemap.xml.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { METIERS } from '../src/data/metiers.js';
import { DEFINITION, ETAPES, FAQ_COMMUNE } from '../src/data/offre.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE_URL = 'https://agencecelexia.fr';
const DATE_PUBLISHED = '2024-10-01';
const DATE_MODIFIED = '2026-08-02';

const ORG_LD = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Agence Celexia',
  // Les deux formes sont réellement tapées dans un moteur de recherche.
  alternateName: ['Celexia', 'CELEXIA'],
  legalName: 'CELEXIA',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 605, height: 98 },
  image: `${SITE_URL}/og-image.png`,
  // Reprise mot pour mot de DEFINITION (src/data/offre.js), elle-même affichée
  // en tête d'accueil : ce que le site montre et ce qu'il déclare coïncident.
  description: DEFINITION,
  slogan: 'On gagne quand vous gagnez',
  serviceType: "Apport d'affaires pour artisans du bâtiment",
  telephone: '+33651725756',
  email: 'agence.celexia@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressRegion: 'Île-de-France',
    addressLocality: 'Nogent-sur-Marne',
  },
  foundingDate: '2024',
  taxID: 'SIREN 939 306 429',
  areaServed: { '@type': 'Country', name: 'France' },
  knowsLanguage: 'fr',
  knowsAbout: [
    "Apport d'affaires pour artisans",
    'Qualification de demandes de chantiers',
    'Mise en relation artisan et particulier',
    'Chantiers de piscine, couverture, façade et maçonnerie',
  ],
  // Ne lister ici que des profils qui répondent réellement : un lien mort est un
  // signal négatif. LinkedIn a été retiré (404 au 3 août 2026), à remettre le
  // jour où la page existe.
  sameAs: ['https://www.facebook.com/agencecelexia'],
  founder: [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#thomas`,
      name: 'Thomas',
      jobTitle: 'Co-fondateur',
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#antoine`,
      name: 'Antoine',
      jobTitle: 'Co-fondateur',
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33651725756',
    email: 'agence.celexia@gmail.com',
    contactType: 'customer service',
    availableLanguage: 'French',
    areaServed: 'FR',
  },
};

// Reprend mot pour mot la FAQ affichée à l'écran (src/data/offre.js).
// Un FAQPage sans FAQ visible est une non-conformité Google.
const FAQ_LD = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: FAQ_COMMUNE.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

// Reprend les 4 étapes affichées à l'écran (src/data/offre.js).
const HOWTO_LD = {
  '@type': 'HowTo',
  '@id': `${SITE_URL}/#howto`,
  name: "Comment fonctionne l'apport d'affaires Celexia pour les artisans",
  description:
    "Celexia finance la recherche des chantiers, qualifie les demandes et les transmet à un seul artisan. L'artisan ne reverse 15 % que sur les devis signés.",
  step: ETAPES.map((etape, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: etape.titre,
    text: etape.desc,
  })),
};

const baseRoutes = [
  {
    path: '/',
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    // ~150 caractères : au-delà, Google tronque en résultat de recherche.
    description:
      "Apporteur d'affaires pour artisans. Nous finançons et qualifions les demandes de chantiers, puis les transmettons à un seul artisan. 15 % sur devis signé.",
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Agence Celexia',
          description:
            "Apporteur d'affaires pour artisans du bâtiment. Commission de 15 % sur les devis signés uniquement.",
          inLanguage: 'fr-FR',
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: SITE_URL,
          name: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          description:
            "Celexia trouve et finance les demandes de chantiers, les qualifie, puis les transmet à un seul artisan partenaire.",
          inLanguage: 'fr-FR',
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
        },
        ORG_LD,
        FAQ_LD,
        HOWTO_LD,
      ],
    },
  },
  {
    path: '/about',
    title: 'À propos | Agence Celexia',
    description:
      "Celexia est un apporteur d'affaires pour artisans du bâtiment, fondé par Thomas et Antoine. Payés uniquement sur les devis signés, une demande transmise à un seul artisan.",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#aboutpage`,
      name: 'À propos — Agence Celexia',
      description:
        "L'origine de Celexia et les partis pris du modèle : rémunération à la signature, une demande par artisan, réseau restreint.",
      url: `${SITE_URL}/about`,
      inLanguage: 'fr-FR',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: ORG_LD,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
  },
  {
    path: '/contact',
    title: 'Contact | Agence Celexia',
    description:
      "Joindre Agence Celexia : téléphone, courriel et informations de la société (CELEXIA, SIREN 939 306 429, Nogent-sur-Marne).",
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${SITE_URL}/contact#contactpage`,
          name: 'Contacter Agence Celexia',
          description:
            "Téléphone, courriel et informations légales vérifiables de la société CELEXIA.",
          url: `${SITE_URL}/contact`,
          inLanguage: 'fr-FR',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/contact#localbusiness`,
          name: 'Agence Celexia',
          description:
            "Apporteur d'affaires pour artisans du bâtiment. Commission de 15 % sur les devis signés.",
          url: SITE_URL,
          telephone: '+33651725756',
          email: 'agence.celexia@gmail.com',
          image: `${SITE_URL}/logo.png`,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
            addressRegion: 'Île-de-France',
            addressLocality: 'Nogent-sur-Marne',
          },
          areaServed: { '@type': 'Country', name: 'France' },
          // `priceRange` retiré : dénué de sens pour une commission au résultat.
          openingHours: 'Mo-Fr 09:00-18:00',
          parentOrganization: { '@id': `${SITE_URL}/#organization` },
        },
      ],
    },
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Agence Celexia',
    description:
      "Mentions légales du site agencecelexia.fr : éditeur, hébergeur, propriété intellectuelle et droit applicable.",
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de confidentialité | Agence Celexia',
    description:
      "Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.",
  },
];

// Une route par métier, dérivée directement de src/data/metiers.js.
const metierRoutes = Object.entries(METIERS).map(([slug, metier]) => ({
  path: `/metiers/${slug}`,
  title: `Apport d'affaires ${metier.label} | Agence Celexia`,
  description: `Celexia trouve et finance les demandes de chantiers ${metier.labelCourt.toLowerCase()}, les qualifie, puis les transmet à un seul artisan. Vous reversez 15 % sur les devis signés.`,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/metiers/${slug}/#service`,
        name: `Apport d'affaires pour ${metier.label.toLowerCase()}`,
        description: `Service d'apport d'affaires dédié au métier ${metier.label.toLowerCase()}. Demandes de chantiers qualifiées, transmises à un seul artisan. Commission de 15 % sur les devis signés.`,
        url: `${SITE_URL}/metiers/${slug}`,
        serviceType: "Apport d'affaires",
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'France' },
        audience: { '@type': 'Audience', audienceType: metier.label },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/metiers/${slug}/#faq`,
        mainEntity: [...FAQ_COMMUNE, metier.faq].map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  },
}));

const routes = [...baseRoutes, ...metierRoutes];

// Libellés des segments d'URL, pour le fil d'Ariane.
const metierLabels = Object.fromEntries(
  Object.entries(METIERS).map(([slug, metier]) => [slug, metier.label])
);

const pageNames = {
  about: 'À propos',
  contact: 'Contact',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
  metiers: 'Métiers',
  ...metierLabels,
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildBreadcrumbJsonLd(route) {
  if (route.path === '/') return null;

  const segments = route.path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Accueil', path: '/' }];
  let currentPath = '';
  segments.forEach((seg) => {
    currentPath += `/${seg}`;
    breadcrumbs.push({
      name: pageNames[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
      path: currentPath,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function generatePage(template, route, contenu) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = `${SITE_URL}/og-image.png`;

  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<link rel="canonical" href="[^"]*" ?\/?>/, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<meta name="description" content="[^"]*" ?\/?>/, `<meta name="description" content="${description}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" ?\/?>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" ?\/?>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" ?\/?>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*" ?\/?>/, `<meta property="og:image" content="${image}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" ?\/?>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" ?\/?>/, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*" ?\/?>/, `<meta name="twitter:image" content="${image}" />`);

  let schemas = '';
  const breadcrumbLd = buildBreadcrumbJsonLd(route);
  if (breadcrumbLd) {
    schemas += `    <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>\n`;
  }
  if (route.jsonLd) {
    schemas += `    <script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n`;
  }
  if (schemas) {
    html = html.replace('</head>', `${schemas}  </head>`);
  }

  // Injection du contenu rendu. `hydrateRoot` (src/entry-client.jsx) reprend la
  // main dessus au chargement ; sans JavaScript, le texte reste lisible tel quel.
  if (contenu) {
    html = html.replace('<div id="root"></div>', `<div id="root">${contenu}</div>`);
  }

  return html;
}

// --- Exécution ---
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html introuvable. Lancer vite build d’abord.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');

// Bundle SSR produit par `vite build --ssr`. Absent en cas de build partiel :
// on dégrade alors sur meta + JSON-LD seuls, en le signalant bruyamment.
const ssrPath = join(__dirname, '..', 'dist-ssr', 'entry-server.js');
let render = null;
if (existsSync(ssrPath)) {
  ({ render } = await import(ssrPath));
} else {
  console.warn(
    "⚠️  dist-ssr/entry-server.js introuvable : le contenu des pages ne sera PAS " +
    "pré-rendu. Lancer `npm run build` complet."
  );
}

let generated = 0;

for (const route of routes) {
  const contenu = render ? await render(route.path) : null;
  const html = generatePage(template, route, contenu);

  if (route.path === '/') {
    writeFileSync(templatePath, html);
  } else {
    const dir = join(distDir, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  generated++;
}

console.log(
  `Pre-rendered ${generated} pages with SEO meta tags and JSON-LD schemas` +
  (render ? ' and full page content.' : ' (WITHOUT page content).')
);
