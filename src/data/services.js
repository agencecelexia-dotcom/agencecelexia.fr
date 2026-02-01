// Configuration des 5 services principaux avec icônes et ordre d'affichage

export const SERVICES_CONFIG = {
  publicitePerformance: {
    id: 'publicitePerformance',
    name: 'Publicité à la Performance',
    shortName: 'Appels Qualifiés',
    icon: 'phone',
    order: 1,
    color: 'violet', // Utilise la couleur primaire du site
    defaultTitle: 'Génération d\'Appels Qualifiés',
    defaultDescription: 'Paiement uniquement aux appels de clients réels prêts à investir dans vos services',
    defaultBenefits: [
      'Paiement à l\'appel qualifié uniquement',
      'Position #1 sur Google Local',
      'Filtrage automatique des spams',
      'ROI garanti dès les premiers jours'
    ]
  },

  siteWeb: {
    id: 'siteWeb',
    name: 'Création de Site Web',
    shortName: 'Site Web Pro',
    icon: 'globe',
    order: 2,
    color: 'violet',
    defaultTitle: 'Site Web Professionnel',
    defaultDescription: 'Un site vitrine moderne optimisé pour convertir vos visiteurs en clients',
    defaultBenefits: [
      'Design moderne et responsive',
      'Livraison en 7 jours',
      'Optimisé SEO local',
      'Formulaire de contact intégré'
    ]
  },

  avisClients: {
    id: 'avisClients',
    name: 'Gestion d\'Avis Clients',
    shortName: 'Avis Automatisés',
    icon: 'star',
    order: 3,
    color: 'violet',
    defaultTitle: 'Collecte d\'Avis Automatisée',
    defaultDescription: 'Construisez votre réputation avec des avis clients 5 étoiles automatisés',
    defaultBenefits: [
      'Demandes automatiques post-intervention',
      'Affichage Google My Business',
      'Gestion des avis négatifs',
      'Badge "Recommandé 5 étoiles"'
    ]
  },

  emailing: {
    id: 'emailing',
    name: 'E-mailing & Séquences',
    shortName: 'Email Marketing',
    icon: 'mail',
    order: 4,
    color: 'violet',
    defaultTitle: 'Campagnes Email Automatisées',
    defaultDescription: 'Convertissez vos prospects et fidélisez vos clients avec des séquences intelligentes',
    defaultBenefits: [
      'Séquences de relance automatiques',
      'Newsletters personnalisées',
      'Offres promotionnelles ciblées',
      'Suivi des taux d\'ouverture et clics'
    ]
  },

  automatisation: {
    id: 'automatisation',
    name: 'Automatisation Marketing',
    shortName: 'Automatisation',
    icon: 'cog',
    order: 5,
    color: 'violet',
    defaultTitle: 'Automatisation Complète',
    defaultDescription: 'Gagnez du temps avec des processus automatisés de A à Z',
    defaultBenefits: [
      'Qualification automatique des leads',
      'Planning optimisé par zone',
      'Facturation et relances automatiques',
      'Dashboard de performance temps réel'
    ]
  }
};

// Fonction pour récupérer la config d'un service
export const getServiceConfig = (serviceId) => {
  return SERVICES_CONFIG[serviceId] || SERVICES_CONFIG.publicitePerformance;
};

// Liste ordonnée des services pour affichage
export const getServicesOrder = () => {
  return Object.values(SERVICES_CONFIG).sort((a, b) => a.order - b.order);
};

// Fonction pour fusionner config par défaut et données métier
export const getServiceData = (serviceId, metierData) => {
  const config = SERVICES_CONFIG[serviceId];
  const metierServiceData = metierData?.services?.[serviceId];

  if (!config) return null;

  return {
    id: config.id,
    name: config.name,
    shortName: config.shortName,
    icon: config.icon,
    order: config.order,
    color: config.color,
    // Données métier si disponibles, sinon fallback sur défaut
    title: metierServiceData?.title || config.defaultTitle,
    description: metierServiceData?.description || config.defaultDescription,
    benefits: metierServiceData?.benefits || config.defaultBenefits
  };
};
