/**
 * Post-build script: génère un fichier HTML statique par route avec les bonnes
 * meta tags (title, description, canonical, OG, Twitter, JSON-LD).
 *
 * Garantit que Googlebot voit les meta correctes dans le HTML source sans
 * avoir besoin d'exécuter du JavaScript.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE_URL = 'https://agencecelexia.fr';

// Liste des 19 métiers (mirroir de src/context/NicheContext.jsx).
// À garder synchronisé avec NicheContext.METIERS.
const METIERS = {
  'amenagement-paysager': 'Aménagement paysager',
  'bardage': 'Bardage',
  'clotures': 'Clôtures',
  'constructeurs-piscines': 'Constructeurs de piscines',
  'couverture': 'Couverture',
  'chauffagistes': 'Chauffagistes',
  'demenagement': 'Déménagement',
  'diagnostics-immobiliers': 'Diagnostics immobiliers',
  'entretien-piscine': 'Entretien de piscine',
  'fondations': 'Fondations',
  'menuiserie': 'Menuiserie',
  'plomberie': 'Plomberie',
  'nettoyage-vitres': 'Nettoyage de vitres',
  'revetement-sol': 'Revêtement de sol',
  'restauration-degat-eaux': 'Restauration après dégât des eaux',
  'fenetres': 'Fenêtres',
  'plans-de-travail': 'Plans de travail',
  'portes-garage': 'Portes de garage',
  'arboriculture': 'Arboriculture',
};

const ORG_LD = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://agencecelexia.fr/#organization',
  name: 'Agence Celexia',
  url: 'https://agencecelexia.fr',
  logo: { '@type': 'ImageObject', url: 'https://agencecelexia.fr/logo.png', width: 605, height: 98 },
  image: 'https://agencecelexia.fr/logo.png',
  description: 'Agence d\'apport d\'affaires pour artisans : nous amenons les appels clients qualifiés, vous payez 10 % uniquement sur les devis signés.',
  priceRange: '€€',
  serviceType: 'Apport d\'affaires pour artisans',
  telephone: '+33651725756',
  email: 'agence.celexia@gmail.com',
  address: { '@type': 'PostalAddress', addressCountry: 'FR', addressRegion: 'France métropolitaine', addressLocality: 'France' },
  foundingDate: '2024',
  areaServed: { '@type': 'Country', name: 'France' },
  knowsLanguage: 'fr',
  sameAs: ['https://www.facebook.com/agencecelexia', 'https://www.linkedin.com/company/agence-celexia'],
  founder: [
    { '@type': 'Person', name: 'Thomas', jobTitle: 'Co-fondateur' },
    { '@type': 'Person', name: 'Antoine', jobTitle: 'Co-fondateur' }
  ],
  contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'agence.celexia@gmail.com', contactType: 'customer service', availableLanguage: 'French' }
};

const baseRoutes = [
  {
    path: '/',
    title: 'Agence Celexia | Apport d\'affaires pour artisans',
    description: 'Agence d\'apport d\'affaires pour artisans. Nous générons les appels clients qualifiés, vous payez 10 % uniquement sur les devis signés. Sans engagement, sans frais fixes.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://agencecelexia.fr/#website',
          url: 'https://agencecelexia.fr',
          name: 'Agence Celexia',
          description: 'Agence d\'apport d\'affaires pour artisans. Commission 10% sur devis signés.',
          inLanguage: 'fr-FR',
          publisher: { '@id': 'https://agencecelexia.fr/#organization' }
        },
        {
          '@type': 'WebPage',
          '@id': 'https://agencecelexia.fr/#webpage',
          url: 'https://agencecelexia.fr',
          name: 'Agence Celexia | Apport d\'affaires pour artisans',
          isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
          about: { '@id': 'https://agencecelexia.fr/#organization' },
          description: 'Agence d\'apport d\'affaires pour artisans. Appels clients qualifiés, paiement 10 % sur devis signés uniquement.',
          inLanguage: 'fr-FR',
          datePublished: '2024-10-01',
          dateModified: '2026-05-10'
        },
        ORG_LD,
      ]
    },
  },
  {
    path: '/about',
    title: 'À propos | Agence Celexia',
    description: 'Découvrez Agence Celexia, agence d\'apport d\'affaires pour artisans. Modèle 100 % à la performance, 10 % sur devis signés, sans engagement.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'À propos - Agence Celexia',
      description: 'Découvrez Agence Celexia, agence d\'apport d\'affaires pour artisans. Modèle 100 % à la performance.',
      url: 'https://agencecelexia.fr/about',
      mainEntity: ORG_LD,
      datePublished: '2024-10-01',
      dateModified: '2026-05-10'
    },
  },
  {
    path: '/contact',
    title: 'Contact | Agence Celexia',
    description: 'Réservez un appel découverte gratuit de 30 min avec Agence Celexia pour comprendre comment notre apport d\'affaires peut développer votre activité d\'artisan.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': 'https://agencecelexia.fr/contact#contactpage',
          name: 'Contactez Agence Celexia',
          description: 'Réservez un appel découverte gratuit de 30 minutes pour évaluer ensemble votre potentiel d\'apport d\'affaires.',
          url: 'https://agencecelexia.fr/contact',
          inLanguage: 'fr-FR',
          isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
          datePublished: '2024-10-01',
          dateModified: '2026-05-10'
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://agencecelexia.fr/contact#localbusiness',
          name: 'Agence Celexia',
          description: 'Agence d\'apport d\'affaires pour artisans. Commission 10 % sur devis signés.',
          url: 'https://agencecelexia.fr',
          telephone: '+33651725756',
          email: 'agence.celexia@gmail.com',
          image: 'https://agencecelexia.fr/logo.png',
          address: { '@type': 'PostalAddress', addressCountry: 'FR', addressLocality: 'France' },
          areaServed: { '@type': 'Country', name: 'France' },
          priceRange: '€€',
          openingHours: 'Mo-Fr 09:00-18:00',
          contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'agence.celexia@gmail.com', contactType: 'customer service', availableLanguage: 'French', areaServed: 'FR' }
        }
      ]
    },
  },
  {
    path: '/reserver',
    title: 'Réserver un appel découverte | Agence Celexia',
    description: '30 minutes pour comprendre votre activité, valider que notre apport d\'affaires est adapté et estimer le volume de chantiers que nous pouvons vous apporter. Gratuit, sans engagement.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Agence Celexia',
    description: 'Mentions légales du site agencecelexia.fr. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de confidentialité | Agence Celexia',
    description: 'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
  },
  // Services complémentaires
  {
    path: '/services/publicite-performance',
    title: 'Publicité à la performance | Agence Celexia',
    description: 'Service complémentaire d\'apport d\'appels qualifiés pour artisans. Vous ne payez que sur les appels qualifiés réellement reçus.',
  },
  {
    path: '/services/site-web',
    title: 'Création de site web pour artisans | Agence Celexia',
    description: 'Site web professionnel rapide, livré en 7 jours, conçu pour convertir les visiteurs en demandes de devis. Service complémentaire à l\'apport d\'affaires.',
  },
  {
    path: '/services/seo',
    title: 'Référencement SEO local artisans | Agence Celexia',
    description: 'Sortez en tête sur Google dans votre zone d\'intervention. SEO local et optimisation Google Business Profile pour artisans.',
  },
  {
    path: '/services/avis-clients',
    title: 'Gestion des avis clients | Agence Celexia',
    description: 'Collecte automatique d\'avis Google après chaque chantier, gestion de réputation, réponses assistées. Service complémentaire à l\'apport d\'affaires.',
  },
  {
    path: '/services/emailing',
    title: 'Email marketing pour artisans | Agence Celexia',
    description: 'Relances automatiques de devis, fidélisation, campagnes saisonnières. Service complémentaire à l\'apport d\'affaires.',
  },
  {
    path: '/services/automatisation',
    title: 'Automatisation des relances et de l\'admin | Agence Celexia',
    description: 'Industrialisez vos relances, devis, rappels et factures. Gagnez des heures par semaine. Service complémentaire à l\'apport d\'affaires.',
  },
];

// Génère automatiquement une route pour chacun des 19 métiers
const metierRoutes = Object.entries(METIERS).map(([slug, label]) => ({
  path: `/metiers/${slug}`,
  title: `Apport d'affaires ${label} | Agence Celexia`,
  description: `Agence d'apport d'affaires pour ${label.toLowerCase()}. Nous vous amenons les appels qualifiés, vous payez 10 % uniquement sur les devis signés.`,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://agencecelexia.fr/metiers/${slug}/#service`,
    name: `Apport d'affaires pour ${label}`,
    description: `Service d'apport d'affaires dédié au métier ${label.toLowerCase()}. Commission 10 % sur devis signés, sans frais fixes ni engagement.`,
    url: `https://agencecelexia.fr/metiers/${slug}`,
    serviceType: 'Apport d\'affaires',
    provider: { '@id': 'https://agencecelexia.fr/#organization' },
    areaServed: { '@type': 'Country', name: 'France' },
    audience: { '@type': 'Audience', audienceType: label },
    datePublished: '2024-10-01',
    dateModified: '2026-05-10'
  },
}));

const routes = [...baseRoutes, ...metierRoutes];

// Breadcrumb segment names
const pageNames = {
  about: 'À propos',
  contact: 'Contact',
  'sites-artisans': 'Sites web artisans',
  reserver: 'Réserver',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
  services: 'Services',
  metiers: 'Métiers',
  'publicite-performance': 'Publicité à la performance',
  'site-web': 'Création de site web',
  seo: 'Référencement SEO',
  'avis-clients': 'Avis clients',
  emailing: 'Email marketing',
  automatisation: 'Automatisation',
  ...METIERS,
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

function generatePage(template, route) {
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

  return html;
}

// Main
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let generated = 0;

for (const route of routes) {
  const html = generatePage(template, route);

  if (route.path === '/') {
    writeFileSync(templatePath, html);
  } else {
    const dir = join(distDir, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  generated++;
}

console.log(`Pre-rendered ${generated} pages with SEO meta tags and JSON-LD schemas.`);
