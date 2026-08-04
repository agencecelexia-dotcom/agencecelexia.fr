// Point de conversion unique du site. Toute inscription passe par ici.
// Le paramètre `taux` transmet la commission au CRM : il doit rester aligné
// avec le taux affiché sur le site (constante TAUX ci-dessous).
const REGISTER_BASE = 'https://crm-ci7k.vercel.app/rejoindre';

/** Taux de commission, en pourcentage. Unique endroit où le modifier. */
export const TAUX = 15;

/**
 * Libellé du bouton d'inscription. Volontairement identique partout, du header
 * jusqu'à la page d'arrivée : un artisan qui a cliqué doit reconnaître où il atterrit.
 * Ne promet aucun volume — « recevoir des chantiers » sous-entendrait une garantie.
 */
export const CTA_LABEL = 'Devenir artisan partenaire';

/**
 * URL d'inscription avec provenance, pour savoir depuis quelle page l'artisan est parti.
 * @param {string} page - identifiant de la page émettrice (ex. 'accueil', 'metier-couverture')
 */
export const registerUrl = (page = 'site') =>
  `${REGISTER_BASE}?taux=${TAUX}&src=site&page=${encodeURIComponent(page)}`;

// Conservé pour les cas sans provenance (données structurées, fallback).
export const REGISTER_URL = `${REGISTER_BASE}?taux=${TAUX}`;
