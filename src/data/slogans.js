// Slogans et messaging pour Agence Celexia
// Nouveau positionnement : Partenaire de croissance à la performance

export const SLOGANS = {
  // Slogan principal recommandé
  principal: "Investissez quand ça marche, sinon c'est gratuit",

  // Slogans alternatifs pour A/B testing
  alternatifs: [
    "Croissance garantie ou remboursé",
    "L'agence qui prend le risque avec vous",
    "Résultats d'abord, paiement ensuite",
    "Quand vous gagnez, nous gagnons",
    "Performance garantie, sans engagement"
  ],

  // Baseline (sous-titre slogan)
  baseline: "Votre partenaire de croissance à la performance",

  // Variantes courtes pour CTAs
  cta: {
    court: "Investissez malin",
    moyen: "Investissez sans risque",
    long: "Investissez quand ça marche"
  }
};

// Propositions de valeur par contexte
export const VALUE_PROPS = {
  home: {
    title: "L'agence de marketing qui multiplie votre investissement",
    subtitle: "Paiement uniquement aux résultats. Si ça ne marche pas, c'est gratuit.",
    garantie: "Garantie résultats ou 100% remboursé"
  },

  servicePerformance: {
    title: "Publicité à la performance",
    subtitle: "Payez uniquement les appels de clients prêts à acheter",
    promesse: "ROI garanti dès les premiers jours"
  },

  booking: {
    title: "Réservez votre audit stratégique",
    subtitle: "30 minutes pour évaluer le potentiel de votre activité",
    cta: "Réserver mon audit gratuit"
  }
};

// Messaging par métier (exemples pour personnalisation)
export const METIER_MESSAGING = {
  pisciniste: {
    slogan: "Remplissez votre agenda de projets piscines",
    promesse: "Des clients prêts à investir 15k-50k€ dans leur piscine"
  },

  plombier: {
    slogan: "Plus de vrais projets, moins de perte de temps",
    promesse: "Urgences 24/7 et gros chantiers de rénovation"
  },

  electricien: {
    slogan: "Multipliez vos chantiers électriques",
    promesse: "Installations, mises aux normes, rénovations complètes"
  },

  menuisier: {
    slogan: "Remplissez votre carnet de commandes",
    promesse: "Projets sur-mesure valorisant votre savoir-faire"
  },

  paysagiste: {
    slogan: "Développez votre activité paysagère",
    promesse: "Créations de jardins et contrats d'entretien annuels"
  },

  chauffagiste: {
    slogan: "Installations et urgences chauffage garanties",
    promesse: "PAC, chaudières, urgences hivernales + contrats entretien"
  }
};

// Social proof statements
export const SOCIAL_PROOF = [
  "Dès les premiers jours de publication des campagnes publicitaires",
  "Sans engagement, résiliable à tout moment",
  "Paiement par appel qualifié uniquement",
  "+1200 artisans nous font confiance",
  "Note moyenne 4.9/5 sur Google",
  "Position #1 garantie sur Google Local"
];

// Fonction pour récupérer le slogan actif (permet A/B testing)
export const getActiveSlogan = () => {
  // Pour l'instant, retourne le slogan principal
  // Pourrait être connecté à un système d'A/B testing plus tard
  return SLOGANS.principal;
};

// Fonction pour récupérer un messaging spécifique métier
export const getMetierMessaging = (metier) => {
  return METIER_MESSAGING[metier] || {
    slogan: "Développez votre activité d'artisan",
    promesse: "Des clients qualifiés prêts à investir"
  };
};
