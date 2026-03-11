/**
 * Post-build script: generates static HTML files for each route
 * with proper meta tags (title, description, canonical, OG, Twitter, JSON-LD).
 *
 * This ensures Googlebot sees correct SEO metadata in the HTML source
 * without needing to execute JavaScript.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE_URL = 'https://agencecelexia.fr';

// All routes with their SEO meta data
const routes = [
  {
    path: '/',
    title: 'Agence Celexia | Marketing Digital pour Artisans',
    description: 'Agence marketing digital pour artisans du bâtiment. Publicité locale, sites web, SEO, avis clients, emailing et automatisation. Résultats mesurables.',
  },
  {
    path: '/about',
    title: 'À propos | Agence Celexia – Notre Histoire',
    description: 'Découvrez comment Agence Celexia aide les artisans à générer des leads qualifiés. Transparence, expertise métier, résultats mesurables.',
  },
  {
    path: '/contact',
    title: 'Contact | Agence Celexia – Appel Gratuit',
    description: 'Réservez un appel stratégique gratuit de 30 min avec Agence Celexia. Analyse de visibilité, recommandations et projection de résultats pour artisans.',
  },
  {
    path: '/reserver',
    title: 'Réserver un audit stratégique | Agence Celexia',
    description: '30 minutes pour analyser votre situation et évaluer le potentiel de croissance de votre activité. Sans engagement. Gratuit.',
  },
  {
    path: '/sites-artisans',
    title: 'Sites Web Artisans | Agence Celexia',
    description: 'Site web professionnel pour artisans livré en 7 jours. Design moderne, optimisé SEO, responsive. Devis gratuit pour plombiers, électriciens, menuisiers.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions Légales - Agence Celexia',
    description: "Mentions légales du site agencecelexia.fr. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de Confidentialité - Agence Celexia',
    description: 'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
  },
  // Services
  {
    path: '/services/publicite-performance',
    title: 'Publicité Performance | Agence Celexia',
    description: 'Payez uniquement pour des appels de clients réels. Positionnement prioritaire sur Google Local. Paiement par appel qualifié pour artisans.',
  },
  {
    path: '/services/site-web',
    title: 'Sites Web Artisans | Agence Celexia',
    description: 'Site web professionnel pour artisans livré en 7 jours. Design moderne, optimisé SEO, responsive. Devis gratuit pour plombiers, électriciens, menuisiers.',
  },
  {
    path: '/services/seo',
    title: 'Référencement SEO Local pour Artisans | Agence Celexia',
    description: 'Positionnez votre entreprise en tête des résultats Google locaux. SEO technique, optimisation Google My Business, avis clients. Résultats visibles sous 90 jours.',
  },
  {
    path: '/services/avis-clients',
    title: 'Gestion Automatisée des Avis Clients | Google Reviews | Agence Celexia',
    description: 'Multipliez vos avis Google automatiquement. Système de collecte, réponses automatiques, gestion de réputation. Objectif de forte augmentation en 3 mois.',
  },
  {
    path: '/services/emailing',
    title: 'Campagnes Email Automatisées pour Artisans | Agence Celexia',
    description: "Emails automatiques de relance, newsletters, promotions. Taux d'ouverture optimisé. Reconquête clients inactifs. CRM intégré avec votre activité.",
  },
  {
    path: '/services/automatisation',
    title: 'Automatisation Complète pour Artisans | CRM + Workflows | Agence Celexia',
    description: 'Automatisez tout : devis, facturation, relances, rappels RDV, collecte avis. CRM artisan connecté à vos outils. Économisez un temps précieux.',
  },
  // Métiers
  {
    path: '/metiers/pisciniste',
    title: 'Solutions Marketing Digital pour Piscinistes | Agence Celexia',
    description: 'Recommandations personnalisées pour piscinistes : publicité, site web, avis clients. Générez plus de leads qualifiés pour vos projets piscine.',
  },
  {
    path: '/metiers/paysagiste',
    title: 'Solutions Marketing Digital pour Paysagistes | Agence Celexia',
    description: 'Recommandations personnalisées pour paysagistes : publicité, site web portfolio, avis clients. Développez votre carnet de commandes.',
  },
  {
    path: '/metiers/plombier',
    title: 'Solutions Marketing Digital pour Plombiers | Agence Celexia',
    description: "Recommandations personnalisées pour plombiers : publicité, site web, avis clients. Générez plus d'appels urgents et de chantiers.",
  },
  {
    path: '/metiers/chauffagiste',
    title: 'Solutions Marketing Digital pour Chauffagistes | Agence Celexia',
    description: "Recommandations personnalisées pour chauffagistes : publicité, site web, avis clients. Générez plus de contrats d'entretien et installations.",
  },
  {
    path: '/metiers/electricien',
    title: 'Solutions Marketing Digital pour Électriciens | Agence Celexia',
    description: 'Recommandations personnalisées pour électriciens : publicité, site web, avis clients. Générez plus de chantiers et dépannages électriques.',
  },
  {
    path: '/metiers/menuisier',
    title: 'Solutions Marketing Digital pour Menuisiers | Agence Celexia',
    description: 'Recommandations personnalisées pour menuisiers : site portfolio, publicité, avis clients. Multipliez vos projets menuiserie.',
  },
  {
    path: '/metiers/couvreur',
    title: 'Solutions Marketing Digital pour Couvreurs | Agence Celexia',
    description: 'Recommandations personnalisées pour couvreurs : publicité, site web, avis clients. Multipliez vos chantiers toiture et rénovation.',
  },
  {
    path: '/metiers/macon',
    title: 'Solutions Marketing Digital pour Maçons | Agence Celexia',
    description: 'Recommandations personnalisées pour maçons : publicité, site web portfolio, avis clients. Multipliez vos chantiers maçonnerie.',
  },
  {
    path: '/metiers/carreleur',
    title: 'Solutions Marketing Digital pour Carreleurs | Agence Celexia',
    description: 'Recommandations personnalisées pour carreleurs : site portfolio, publicité, avis clients. Multipliez vos chantiers carrelage.',
  },
  {
    path: '/metiers/peintre',
    title: 'Solutions Marketing Digital pour Peintres | Agence Celexia',
    description: 'Recommandations personnalisées pour peintres : site portfolio, publicité, avis clients. Multipliez vos chantiers peinture.',
  },
  {
    path: '/metiers/serrurier',
    title: 'Solutions Marketing Digital pour Serruriers | Agence Celexia',
    description: 'Recommandations personnalisées pour serruriers : publicité urgence, site web, avis clients. Multipliez vos interventions serrurerie.',
  },
  {
    path: '/metiers/vitrier',
    title: 'Solutions Marketing Digital pour Vitriers | Agence Celexia',
    description: 'Recommandations personnalisées pour vitriers : publicité urgence, site web, avis clients. Multipliez vos interventions vitrerie.',
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generatePage(template, route) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = `${SITE_URL}/logo.png`;

  let html = template;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" ?\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" ?\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*" ?\/?>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" ?\/?>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" ?\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" ?\/?>/,
    `<meta property="og:image" content="${image}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" ?\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" ?\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" ?\/?>/,
    `<meta name="twitter:image" content="${image}" />`
  );

  // Inject JSON-LD schema before </head>
  const jsonLd = buildJsonLd(route);
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`
  );

  return html;
}

function buildJsonLd(route) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;

  if (route.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Agence Celexia',
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'French',
          },
          areaServed: { '@type': 'Country', name: 'France' },
          description: route.description,
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Agence Celexia',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'fr-FR',
        },
        {
          '@type': 'WebPage',
          '@id': canonical,
          url: canonical,
          name: route.title,
          description: route.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'fr-FR',
        },
      ],
    };
  }

  // Build breadcrumb
  const segments = route.path.split('/').filter(Boolean);
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
  ];
  let currentPath = '';
  segments.forEach((seg, i) => {
    currentPath += `/${seg}`;
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: i + 2,
      name: route.title.split('|')[0].trim(),
      item: `${SITE_URL}${currentPath}`,
    });
  });

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
      {
        '@type': 'WebPage',
        '@id': canonical,
        url: canonical,
        name: route.title,
        description: route.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'fr-FR',
      },
    ],
  };

  // Add Service schema for service and metier pages
  if (route.path.startsWith('/services/') || route.path.startsWith('/metiers/')) {
    schema['@graph'].push({
      '@type': 'Service',
      name: route.title.split('|')[0].trim(),
      description: route.description,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'France' },
      inLanguage: 'fr-FR',
    });
  }

  return schema;
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
    // Overwrite the main index.html with homepage meta
    writeFileSync(templatePath, html);
  } else {
    // Create directory structure: /about → dist/about/index.html
    const dir = join(distDir, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  generated++;
}

console.log(`Pre-rendered ${generated} pages with SEO meta tags.`);
