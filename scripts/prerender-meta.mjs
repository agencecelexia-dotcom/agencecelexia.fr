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
  legalName: 'CELEXIA SASU',
  url: 'https://agencecelexia.fr',
  logo: { '@type': 'ImageObject', url: 'https://agencecelexia.fr/logo.png', width: 605, height: 98 },
  image: 'https://agencecelexia.fr/logo.png',
  description: 'Apporteur d\'affaires pour artisans du bâtiment en France. Celexia finance 100 % de la publicité, qualifie les demandes de chantiers et transmet aux artisans partenaires les projets prêts à chiffrer. Commission de 10 % sur devis signés uniquement, sans avance de frais ni engagement.',
  slogan: 'On gagne quand vous gagnez',
  priceRange: '€€',
  serviceType: 'Apport d\'affaires pour artisans du bâtiment',
  telephone: '+33651725756',
  email: 'agence.celexia@gmail.com',
  address: { '@type': 'PostalAddress', addressCountry: 'FR', addressRegion: 'Île-de-France', addressLocality: 'Nogent-sur-Marne' },
  foundingDate: '2024',
  taxID: 'SIREN 939 306 429',
  areaServed: { '@type': 'Country', name: 'France' },
  knowsLanguage: 'fr',
  knowsAbout: [
    'Apport d\'affaires pour artisans',
    'Génération de leads qualifiés bâtiment',
    'Acquisition client locale',
    'Publicité Google Ads pour artisans',
    'Qualification de chantiers'
  ],
  sameAs: ['https://www.facebook.com/agencecelexia', 'https://www.linkedin.com/company/agence-celexia'],
  founder: [
    { '@type': 'Person', '@id': 'https://agencecelexia.fr/#rayan', name: 'Rayan Music', jobTitle: 'Co-fondateur', worksFor: { '@id': 'https://agencecelexia.fr/#organization' } },
    { '@type': 'Person', '@id': 'https://agencecelexia.fr/#ilyes', name: 'Ilyes Music', jobTitle: 'Co-fondateur', worksFor: { '@id': 'https://agencecelexia.fr/#organization' } }
  ],
  contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'agence.celexia@gmail.com', contactType: 'customer service', availableLanguage: 'French', areaServed: 'FR' }
};

const FAQ_LD = {
  '@type': 'FAQPage',
  '@id': 'https://agencecelexia.fr/#faq',
  mainEntity: [
    { '@type': 'Question', name: 'Combien coûte l\'apport d\'affaires Celexia ?', acceptedAnswer: { '@type': 'Answer', text: '10 % du montant TTC de chaque devis signé grâce à un chantier transmis par Celexia. C\'est tout. Aucun frais d\'entrée, aucun abonnement, aucun budget pub à votre charge.' } },
    { '@type': 'Question', name: 'Et si je ne signe pas le chantier ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous ne payez rien. La facturation ne se déclenche que sur devis signé. C\'est notre risque, pas le vôtre.' } },
    { '@type': 'Question', name: 'Dois-je avancer un budget publicitaire ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Celexia finance 100 % de la publicité. Vous n\'avancez rien, jamais.' } },
    { '@type': 'Question', name: 'Y a-t-il un engagement de durée ?', acceptedAnswer: { '@type': 'Answer', text: 'Aucun. Pas de durée minimum, pas de préavis, pas de frais de sortie. Vous arrêtez quand vous voulez.' } },
    { '@type': 'Question', name: 'Les chantiers sont-ils qualifiés ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Chaque appel est qualifié avant de vous être transmis : on vérifie le besoin, la zone d\'intervention, le budget et le sérieux de la demande.' } },
    { '@type': 'Question', name: 'Quels métiers acceptez-vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Nous accompagnons 19 métiers d\'artisans du bâtiment, de la plomberie aux piscines en passant par la couverture, la maçonnerie et le paysage.' } },
    { '@type': 'Question', name: 'Comment se passe le paiement de la commission ?', acceptedAnswer: { '@type': 'Answer', text: 'Quand un devis est signé par le client, vous nous reversez 10 % du montant. On définit ensemble un rythme de règlement, le plus souvent mensuel.' } },
    { '@type': 'Question', name: 'Je peux continuer à trouver des clients de mon côté ?', acceptedAnswer: { '@type': 'Answer', text: 'Bien sûr. Vous restez 100 % maître de votre activité. Notre rôle est d\'ajouter du flux qualifié, pas de vous remplacer.' } }
  ]
};

const HOWTO_LD = {
  '@type': 'HowTo',
  '@id': 'https://agencecelexia.fr/#howto',
  name: 'Comment fonctionne l\'apport d\'affaires Celexia pour les artisans',
  description: 'Celexia finance la publicité, qualifie les appels et transmet les chantiers aux artisans. 4 étapes, zéro paperasse.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Celexia finance et lance la publicité', text: 'Celexia investit 100 % du budget publicitaire. Votre métier est positionné en tête des résultats Google dans votre zone. Vous n\'avancez rien.' },
    { '@type': 'HowToStep', position: 2, name: 'Les appels sont reçus et qualifiés', text: 'Les particuliers appellent. Avant de vous transmettre un projet, Celexia vérifie le besoin, la zone, le budget et le sérieux de la demande.' },
    { '@type': 'HowToStep', position: 3, name: 'Le chantier qualifié vous est transmis', text: 'Vous recevez uniquement des projets qui correspondent à votre métier, votre zone et votre capacité.' },
    { '@type': 'HowToStep', position: 4, name: 'Vous chiffrez, signez et payez 10 %', text: 'Vous gérez la relation commerciale. Vous ne reversez 10 % que sur les devis effectivement signés. Pas de signature = pas de facture.' }
  ]
};

const baseRoutes = [
  {
    path: '/',
    title: 'Agence Celexia | Apport d\'affaires pour artisans',
    description: 'Apporteur d\'affaires pour artisans du bâtiment. On finance la pub, on qualifie les clients, on vous envoie des chantiers. Vous ne payez 10 % que sur les devis signés. Sans avance, sans engagement.',
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
          dateModified: '2026-06-26'
        },
        ORG_LD,
        FAQ_LD,
        HOWTO_LD,
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
      dateModified: '2026-06-26'
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
          dateModified: '2026-06-26'
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
];

// Génère automatiquement une route pour chacun des 19 métiers
const metierRoutes = Object.entries(METIERS).map(([slug, label]) => ({
  path: `/metiers/${slug}`,
  title: `Apport d'affaires ${label} | Agence Celexia`,
  description: `Agence d'apport d'affaires pour ${label.toLowerCase()}. On finance la pub, on qualifie les clients, on vous transmet les chantiers. Vous payez 10 % uniquement sur les devis signés.`,
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
    dateModified: '2026-06-26'
  },
}));

const routes = [...baseRoutes, ...metierRoutes];

// Breadcrumb segment names
const pageNames = {
  about: 'À propos',
  contact: 'Contact',
  reserver: 'Réserver',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
  metiers: 'Métiers',
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
