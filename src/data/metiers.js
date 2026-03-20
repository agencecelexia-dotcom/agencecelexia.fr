// Données personnalisées par métier pour personnalisation dynamique du site
export const METIERS_DATA = {
  pisciniste: {
    hero: {
      tag: 'Génération de leads piscines',
      title: 'Remplissez votre agenda avec des projets de piscines',
      subtitle: 'Construction, rénovation, entretien',
      description: 'Recevez des appels de clients qualifiés prêts à investir dans leur projet piscine. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Appels Qualifiés Garantis',
        description: 'Recevez uniquement des appels de clients réels prêts à construire ou rénover leur piscine',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Filtrage automatique des demandes sérieuses',
          'Position #1 sur Google',
          'Géolocalisation précise de vos zones d\'intervention'
        ]
      },
      siteWeb: {
        title: 'Site Web Professionnel Pisciniste',
        description: 'Un site vitrine optimisé pour convertir vos visiteurs en clients',
        benefits: [
          'Design moderne spécial piscinistes',
          'Galerie photos de réalisations piscines',
          'Formulaire devis construction/rénovation',
          'Section entretien et SAV intégrée'
        ]
      },
      avisClients: {
        title: 'Gestion d\'Avis Automatisée',
        description: 'Collectez et affichez automatiquement les avis de vos clients satisfaits',
        benefits: [
          'Demande automatique après chaque projet',
          'Affichage sur Google, votre site et réseaux',
          'Réponses automatiques aux avis',
          'Augmente votre crédibilité locale'
        ]
      },
      emailing: {
        title: 'E-mailing & Séquences Automatisées',
        description: 'Restez en contact avec vos prospects et clients pour maximiser vos conversions',
        benefits: [
          'Séquences de relance automatiques',
          'Newsletters saisonnières (ouverture, hivernage)',
          'Offres promotionnelles ciblées',
          'Fidélisation clients existants'
        ]
      },
      automatisation: {
        title: 'Automatisation Marketing',
        description: 'Gagnez du temps avec des processus automatisés de A à Z',
        benefits: [
          'Qualification automatique des demandes',
          'Attribution intelligente des leads',
          'Rappels de suivi automatiques',
          'Dashboard temps réel de vos performances'
        ]
      }
    },
    testimonial: {
      company: 'Piscines Expert Paris',
      name: 'Marc D., Gérant',
      text: 'En 4 mois, nous avons doublé notre chiffre d\'affaires grâce aux leads qualifiés Celexia. Chaque appel est un vrai projet, pas de touristes. Le ROI est incroyable.',
      results: '+120% de CA',
      metric: '45 projets signés en 6 mois'
    }
  },

  plombier: {
    hero: {
      tag: 'Génération de leads plomberie',
      title: 'Développez votre activité de plomberie',
      subtitle: 'Dépannage, installation, rénovation',
      description: 'Recevez des appels de clients en urgence ou avec des projets de rénovation. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Appels Urgents & Projets Qualifiés',
        description: 'Recevez des appels de clients ayant besoin d\'un plombier maintenant ou pour leurs travaux',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Mix urgences 24/7 et projets planifiés',
          'Position #1 sur Google pour "plombier [votre ville]"',
          'Filtrage automatique spam et fausses urgences'
        ]
      },
      siteWeb: {
        title: 'Site Web Pro Plomberie',
        description: 'Un site optimisé pour urgences et devis en ligne',
        benefits: [
          'Bouton d\'urgence visible 24/7',
          'Formulaire devis rapide',
          'Galerie avant/après de rénovations',
          'Section certifications et garanties'
        ]
      },
      avisClients: {
        title: 'Avis Clients Automatisés',
        description: 'Construisez votre réputation locale avec des avis 5 étoiles',
        benefits: [
          'SMS automatique post-intervention',
          'Affichage sur Google My Business',
          'Badge "Plombier recommandé" sur votre site',
          'Gestion des avis négatifs'
        ]
      },
      emailing: {
        title: 'Campagnes Email Ciblées',
        description: 'Convertissez vos devis en chantiers et fidélisez vos clients',
        benefits: [
          'Relances automatiques devis non signés',
          'Offres entretien chaudière annuel',
          'Conseils plomberie préventive',
          'Promotions printemps/automne'
        ]
      },
      automatisation: {
        title: 'Automatisation Complète',
        description: 'Optimisez votre temps et concentrez-vous sur les interventions',
        benefits: [
          'Répartition auto urgences/projets',
          'Planning interventions optimisé',
          'Facturation automatisée',
          'Suivi satisfaction client'
        ]
      }
    },
    testimonial: {
      company: 'Plomberie Dupont Lyon',
      name: 'Thomas D., Artisan plombier',
      text: 'Avant Celexia, je perdais 50% de mon temps au téléphone avec des gens qui cherchaient juste des prix. Maintenant, 80% des appels se transforment en intervention. Game changer.',
      results: '+85 appels/mois',
      metric: 'Taux conversion 78%'
    }
  },

  electricien: {
    hero: {
      tag: 'Génération de leads électricité',
      title: 'Multipliez vos chantiers électriques',
      subtitle: 'Dépannage, installation, mise aux normes',
      description: 'Recevez des appels de particuliers et professionnels pour vos services électriques. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Leads Électricité Qualifiés',
        description: 'Urgences électriques, rénovations et mises aux normes - que des vrais projets',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Urgences électriques prioritaires',
          'Position #1 sur "électricien [votre ville]"',
          'Segmentation particuliers/professionnels'
        ]
      },
      siteWeb: {
        title: 'Site Web Électricien Pro',
        description: 'Rassurez vos clients avec un site professionnel et certifié',
        benefits: [
          'Mise en avant certifications (Qualifelec, RGE)',
          'Section sécurité et normes électriques',
          'Devis en ligne avec configurateur',
          'Urgences électriques 24/7 visible'
        ]
      },
      avisClients: {
        title: 'Réputation Électricien',
        description: 'Devenez l\'électricien de référence de votre zone',
        benefits: [
          'Collecte avis après chaque intervention',
          'Badge "Électricien certifié 5 étoiles"',
          'Témoignages vidéo clients (option)',
          'Réponses professionnelles automatiques'
        ]
      },
      emailing: {
        title: 'Email Marketing Électricité',
        description: 'Transformez vos devis en chantiers signés',
        benefits: [
          'Relances intelligentes devis',
          'Campagnes mise aux normes (loi)',
          'Offres borne électrique/photovoltaïque',
          'Newsletter conseils sécurité'
        ]
      },
      automatisation: {
        title: 'Automatisation Chantiers',
        description: 'Gérez plus de chantiers avec moins d\'administratif',
        benefits: [
          'Qualification auto des demandes',
          'Planning optimisé par zone',
          'Envoi automatique certificats conformité',
          'Suivi chantiers temps réel'
        ]
      }
    },
    testimonial: {
      company: 'Électricité Martin Marseille',
      name: 'Julien M., Chef d\'entreprise',
      text: 'En 3 mois on est passés de 2 à 5 électriciens tellement on a de chantiers. Celexia nous amène 60+ projets par mois, qualité au top. Mon meilleur investissement business.',
      results: '+300% de chiffre',
      metric: '60 projets/mois'
    }
  },

  menuisier: {
    hero: {
      tag: 'Génération de leads menuiserie',
      title: 'Remplissez votre carnet de commandes',
      subtitle: 'Menuiserie, agencement, rénovation',
      description: 'Recevez des demandes de clients pour vos prestations de menuiserie sur-mesure. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Projets Menuiserie Qualifiés',
        description: 'Fenêtres, portes, placards, terrasses - des clients prêts à investir dans vos créations',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Projets sur-mesure valorisant votre savoir-faire',
          'Position #1 sur "menuisier [votre ville]"',
          'Filtrage automatique petits bricolages'
        ]
      },
      siteWeb: {
        title: 'Site Web Menuisier',
        description: 'Mettez en valeur vos réalisations avec un portfolio professionnel',
        benefits: [
          'Galerie photos avant/après triée par projet',
          'Configurateur fenêtres/portes en ligne',
          'Présentation savoir-faire artisanal',
          'Certifications et labels qualité'
        ]
      },
      avisClients: {
        title: 'Avis & Recommandations',
        description: 'Transformez vos clients satisfaits en ambassadeurs',
        benefits: [
          'Demande automatique fin de chantier',
          'Photos clients de vos réalisations',
          'Badge "Menuisier recommandé"',
          'Partage avis sur réseaux sociaux'
        ]
      },
      emailing: {
        title: 'Campagnes Email Menuiserie',
        description: 'Restez dans l\'esprit de vos prospects entre la demande et le projet',
        benefits: [
          'Relances devis avec visuels 3D',
          'Conseils entretien bois/menuiseries',
          'Offres promotionnelles saisonnières',
          'Programme de parrainage client'
        ]
      },
      automatisation: {
        title: 'Gestion Projets Automatisée',
        description: 'Concentrez-vous sur votre métier, on s\'occupe de la gestion',
        benefits: [
          'Qualification auto des demandes',
          'Planification chantiers optimisée',
          'Suivi avancement projets',
          'Facturation et relances paiement'
        ]
      }
    },
    testimonial: {
      company: 'Menuiserie Bois & Création',
      name: 'Antoine L., Menuisier',
      text: 'J\'ai enfin pu embaucher un apprenti grâce à Celexia. Les leads sont ultra qualifiés, souvent des projets à 10-15k€. Ma boîte a explosé en 6 mois, merci !',
      results: '+180% projets signés',
      metric: 'Panier moyen 12k€'
    }
  },

  // Métiers suivants (paysagiste, chauffagiste, couvreur, etc.) seront ajoutés en Phase 6
  paysagiste: {
    hero: {
      tag: 'Génération de leads paysagisme',
      title: 'Développez votre activité d\'aménagement extérieur',
      subtitle: 'Jardins, terrasses, entretien espaces verts',
      description: 'Recevez des projets d\'aménagement paysager et d\'entretien. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Projets Paysagers Qualifiés',
        description: 'Création de jardins, terrasses, entretien - des clients prêts à investir',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Mix création et entretien régulier',
          'Position #1 sur Google',
          'Projets valorisant votre expertise'
        ]
      },
      siteWeb: {
        title: 'Site Web Paysagiste',
        description: 'Inspirez vos clients avec un portfolio visuel époustouflant',
        benefits: [
          'Galerie photos jardins avant/après',
          'Portfolio par type (moderne, zen, méditerranéen)',
          'Devis en ligne avec plans 3D',
          'Section entretien et contrats annuels'
        ]
      },
      avisClients: {
        title: 'Avis Clients Paysagisme',
        description: 'Construisez votre réputation de paysagiste de référence',
        benefits: [
          'Collecte automatique post-chantier',
          'Photos de jardins par vos clients',
          'Badge "Paysagiste recommandé"',
          'Partage avant/après sur réseaux'
        ]
      },
      emailing: {
        title: 'Email Marketing Paysagiste',
        description: 'Fidélisez et développez votre portefeuille clients',
        benefits: [
          'Conseils jardinage saisonniers',
          'Offres entretien printemps/automne',
          'Relances devis aménagement',
          'Programme fidélité entretien'
        ]
      },
      automatisation: {
        title: 'Automatisation Paysagisme',
        description: 'Optimisez votre planning et votre rentabilité',
        benefits: [
          'Planning tournées entretien optimisé',
          'Qualification auto création vs entretien',
          'Rappels clients contrats annuels',
          'Facturation récurrente automatique'
        ]
      }
    },
    testimonial: {
      company: 'Jardins & Paysages Provence',
      name: 'Pierre R., Paysagiste',
      text: 'Les contrats d\'entretien annuels générés par Celexia ont stabilisé ma trésorerie. En plus, je signe 4-5 gros projets de création par mois. Que du bonheur.',
      results: '+25 contrats annuels',
      metric: '4-5 créations/mois'
    }
  },

  chauffagiste: {
    hero: {
      tag: 'Génération de leads chauffage',
      title: 'Multipliez vos installations et dépannages',
      subtitle: 'Installation, dépannage, entretien',
      description: 'Recevez des appels de clients pour installations et urgences chauffage. Paiement uniquement aux appels qualifiés.'
    },
    services: {
      publicitePerformance: {
        title: 'Leads Chauffagiste Qualifiés',
        description: 'Urgences, installations neuves, remplacements - mix parfait pour votre activité',
        benefits: [
          'Paiement à l\'appel qualifié uniquement',
          'Urgences hivernales prioritaires',
          'Position #1 sur "chauffagiste [ville]"',
          'Projets PAC, chaudières, climatisation'
        ]
      },
      siteWeb: {
        title: 'Site Web Chauffagiste Pro',
        description: 'Rassurez et convertissez avec un site professionnel',
        benefits: [
          'Urgences 24/7 bien visibles',
          'Simulateur aides de l\'État (MaPrimeRénov)',
          'Comparateur chaudières/PAC',
          'Certifications RGE mise en avant'
        ]
      },
      avisClients: {
        title: 'Réputation Chauffagiste',
        description: 'Devenez le chauffagiste de confiance de votre secteur',
        benefits: [
          'Avis collectés après chaque intervention',
          'Badge "Chauffagiste RGE 5 étoiles"',
          'Témoignages économies d\'énergie',
          'Réponses automatiques professionnelles'
        ]
      },
      emailing: {
        title: 'Email Marketing Chauffage',
        description: 'Maximisez vos conversions et contrats d\'entretien',
        benefits: [
          'Relances devis PAC/chaudières',
          'Campagnes entretien annuel obligatoire',
          'Infos aides État/primes énergie',
          'Offres climatisation été'
        ]
      },
      automatisation: {
        title: 'Automatisation Chauffagiste',
        description: 'Gérez efficacement urgences et planifications',
        benefits: [
          'Répartition auto urgences/projets',
          'Rappels automatiques contrats entretien',
          'Planning interventions optimisé',
          'Certificats conformité automatiques'
        ]
      }
    },
    testimonial: {
      company: 'Chauffage Confort Bordeaux',
      name: 'Sébastien T., Gérant',
      text: 'Celexia m\'a permis de structurer mon entreprise. Les contrats d\'entretien assurent ma trésorerie, et les installations PAC me font vivre. 40+ projets par mois maintenant.',
      results: '+250% de CA',
      metric: '40 installations/mois'
    }
  }
};

// Fonction utilitaire pour récupérer les données d'un métier
export const getMetierData = (metier) => {
  return METIERS_DATA[metier] || METIERS_DATA.pisciniste; // Fallback sur pisciniste
};

// Fonction pour vérifier si un métier a des données
export const hasMetierData = (metier) => {
  return !!METIERS_DATA[metier];
};
