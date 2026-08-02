// Anciens slugs métiers, hérités de l'offre à 19 métiers.
//
// ⚠️ Ceci est un FILET DE SÉCURITÉ CÔTÉ CLIENT (dev, bundles en cache, navigation
// interne). La vraie redirection 301, celle que Google lit, est servie par
// l'hébergeur : vercel.json et netlify.toml. Toute entrée ajoutée ici doit
// l'être aussi dans ces deux fichiers.
//
// Trois slugs gardent une continuité thématique ; les autres n'ont plus
// d'équivalent et repartent vers l'accueil.
export const LEGACY_METIERS = {
  bardage: '/metiers/facade-ite',
  fondations: '/metiers/maconnerie',
  'entretien-piscine': '/metiers/constructeurs-piscines',

  'amenagement-paysager': '/',
  clotures: '/',
  chauffagistes: '/',
  demenagement: '/',
  'diagnostics-immobiliers': '/',
  menuiserie: '/',
  plomberie: '/',
  'nettoyage-vitres': '/',
  'revetement-sol': '/',
  'restauration-degat-eaux': '/',
  fenetres: '/',
  'plans-de-travail': '/',
  'portes-garage': '/',
  arboriculture: '/',
};

export const getLegacyTarget = (slug) => LEGACY_METIERS[slug] || null;
