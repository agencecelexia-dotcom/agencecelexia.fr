// Une candidature permet à l’équipe sélection de connaître l’entreprise.
// Aucun compte ni contrat n’est créé depuis le site vitrine.
export const CTA_LABEL = 'Présenter mon entreprise';
export const CANDIDATURE_URL = 'https://agencecelexia.fr/candidature';

/** Conserve la provenance sans quitter le site. */
export const candidatureUrl = (page = 'site') =>
  `/candidature?origine=${encodeURIComponent(page)}`;
