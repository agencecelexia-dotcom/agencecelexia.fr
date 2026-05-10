// Contenu personnalisé par métier pour la page /metiers/:slug.
// La liste des métiers, slugs, couleurs et prix de référence vit dans ../context/NicheContext.jsx.
// Ici on stocke uniquement le contenu éditorial spécifique (accroche, audience, FAQ).

export const METIERS_CONTENT = {
  'amenagement-paysager': {
    accroche: 'Aménagez plus de jardins, de terrasses et d\'espaces verts en laissant Celexia remplir votre carnet de commandes.',
    audience: [
      'Création de jardins, terrasses et allées',
      'Engazonnement et plantations',
      'Maçonnerie paysagère et clôtures végétales',
      'Contrats d\'entretien réguliers'
    ],
    faqExtra: [
      {
        q: 'Vous différenciez les projets de création et d\'entretien ?',
        a: 'Oui. Nous calibrons les flux selon votre mix idéal (création vs entretien), pour stabiliser votre activité toute l\'année.'
      }
    ]
  },
  'bardage': {
    accroche: 'Recevez des projets de bardage bois, composite ou métallique de particuliers et de professionnels prêts à investir.',
    audience: [
      'Pose de bardage bois, composite, fibre-ciment ou métal',
      'Rénovation et isolation par l\'extérieur (ITE)',
      'Maisons individuelles, locaux pros',
      'Chantiers neufs comme rénovation'
    ],
    faqExtra: [
      {
        q: 'Vous gérez les demandes liées à la rénovation énergétique ?',
        a: 'Oui. Nous sommes habitués aux projets ITE (Isolation Thermique par l\'Extérieur) qui mobilisent des aides à la rénovation : nous vous transmettons les demandes solides.'
      }
    ]
  },
  'clotures': {
    accroche: 'Faites grimper le volume de vos chantiers de pose de clôtures, portails et automatismes.',
    audience: [
      'Clôtures rigides, panneaux occultants, grillage',
      'Clôtures bois, composite, alu',
      'Portails motorisés et automatismes',
      'Particuliers et copropriétés'
    ],
    faqExtra: [
      {
        q: 'Les demandes incluent-elles la fourniture matériel ?',
        a: 'Oui. Nous transmettons les demandes complètes (fourniture + pose) comme les demandes de pose seule, selon votre fonctionnement.'
      }
    ]
  },
  'constructeurs-piscines': {
    accroche: 'Signez plus de constructions de piscines : nous nous chargeons d\'attirer les vrais projets, vous chiffrez et signez.',
    audience: [
      'Piscines coque polyester ou maçonnées',
      'Piscines béton sur-mesure',
      'Pisciniers complets (terrassement, dallage, locaux techniques)',
      'Maisons neuves et rénovations'
    ],
    faqExtra: [
      {
        q: 'Vous filtrez les "curieux" qui demandent juste un prix ?',
        a: 'Oui. Notre qualification écarte les demandes peu sérieuses pour ne vous transmettre que les contacts ayant un budget réel et un projet identifié.'
      }
    ]
  },
  'couverture': {
    accroche: 'Couverture neuve, rénovation, démoussage, étanchéité : on vous apporte les chantiers, vous gardez la main commerciale.',
    audience: [
      'Réfection complète de toiture',
      'Démoussage, traitement, hydrofuge',
      'Réparation de fuite, urgence après tempête',
      'Couverture tuile, ardoise, zinc, bac acier'
    ],
    faqExtra: [
      {
        q: 'Vous pouvez nous amener des urgences (fuites, tempêtes) ?',
        a: 'Oui. Nos dispositifs sont calibrés pour capter aussi les demandes urgentes, à fort taux de conversion.'
      }
    ]
  },
  'chauffagistes': {
    accroche: 'Installations de chaudières, pompes à chaleur, dépannages et entretien : remplissez votre planning toute l\'année.',
    audience: [
      'Installation de chaudières, PAC, climatisations',
      'Dépannage et entretien annuel',
      'Rénovation énergétique (MaPrimeRénov\', CEE)',
      'Particuliers, syndics, professionnels'
    ],
    faqExtra: [
      {
        q: 'Les demandes éligibles aux aides sont-elles bien identifiées ?',
        a: 'Oui. Nous identifions les projets éligibles aux aides à la rénovation énergétique pour vous transmettre des demandes prêtes à être chiffrées avec ce paramètre.'
      }
    ]
  },
  'demenagement': {
    accroche: 'Studios, maisons, déménagements pros : on vous apporte les demandes, vous chiffrez le devis adapté.',
    audience: [
      'Déménagements particuliers (studio à grande maison)',
      'Déménagements d\'entreprises et bureaux',
      'Garde-meubles et stockage',
      'Trajets locaux, longue distance, internationaux'
    ],
    faqExtra: [
      {
        q: 'Comment gérez-vous la saisonnalité forte du déménagement ?',
        a: 'Nous lissons l\'apport sur l\'année et accélérons les volumes en haute saison (mars à octobre), avec des dispositifs spécifiques pour les fins de mois.'
      }
    ]
  },
  'diagnostics-immobiliers': {
    accroche: 'DPE, amiante, plomb, électricité, gaz, termites : remplissez votre agenda de missions de diagnostic réglementaire.',
    audience: [
      'Diagnostics avant vente / location',
      'Audits énergétiques',
      'Repérages amiante avant travaux',
      'Particuliers, agents immobiliers, notaires'
    ],
    faqExtra: [
      {
        q: 'Vous travaillez avec les agences immobilières aussi ?',
        a: 'Oui. Nous identifions les apporteurs (agences, notaires, syndics) en plus des demandes particuliers, selon votre cible préférée.'
      }
    ]
  },
  'entretien-piscine': {
    accroche: 'Mise en service, hivernage, contrats annuels et SAV : industrialisez l\'arrivée de demandes d\'entretien piscine.',
    audience: [
      'Hivernage et remise en service',
      'Contrats d\'entretien annuels',
      'Recherche de fuite, SAV, dépannage',
      'Bassins privés et collectifs'
    ],
    faqExtra: [
      {
        q: 'Vous m\'aidez à signer surtout des contrats récurrents ?',
        a: 'Oui. Nous priorisons les demandes orientées contrat annuel, qui sécurisent votre chiffre d\'affaires sur la saison suivante.'
      }
    ]
  },
  'fondations': {
    accroche: 'Reprise en sous-œuvre, micropieux, fondations spéciales : on capte les chantiers techniques, vous chiffrez sereinement.',
    audience: [
      'Reprise en sous-œuvre',
      'Micropieux, longrines, radiers',
      'Constructions neuves et extensions',
      'Particuliers, maîtres d\'œuvre, architectes'
    ],
    faqExtra: [
      {
        q: 'Les demandes sont-elles techniquement qualifiées ?',
        a: 'Oui. Vu la technicité du métier, notre qualification écarte les demandes hors scope pour ne vous transmettre que des projets cohérents.'
      }
    ]
  },
  'menuiserie': {
    accroche: 'Sur-mesure, agencement, dressings, escaliers, terrasses : remplissez votre carnet de commandes en menuiserie.',
    audience: [
      'Menuiserie intérieure (placards, dressings, escaliers)',
      'Agencement sur-mesure',
      'Terrasses bois et claustras',
      'Particuliers et architectes'
    ],
    faqExtra: [
      {
        q: 'Vous faites bien la différence avec les fenêtres / volets ?',
        a: 'Oui. Si vous voulez aussi capter ce flux, nous activons en parallèle le dispositif "Services liés aux fenêtres".'
      }
    ]
  },
  'plomberie': {
    accroche: 'Dépannages d\'urgence, rénovations de salle de bain, installations sanitaires : remplissez votre planning de plombier.',
    audience: [
      'Dépannages : fuites, débouchages, chauffe-eau',
      'Rénovation de salle de bain et cuisine',
      'Installations sanitaires neuves',
      'Maintenance et entretien chaudière'
    ],
    faqExtra: [
      {
        q: 'On peut prioriser urgence ou rénovation selon mon planning ?',
        a: 'Oui. Vous pouvez nous indiquer le mix souhaité (par exemple 60 % urgences / 40 % rénovations) et nous calibrons en conséquence.'
      }
    ]
  },
  'nettoyage-vitres': {
    accroche: 'Vitres résidentielles, vitrines, façades : on remplit votre planning de chantiers de nettoyage de vitres.',
    audience: [
      'Particuliers (maisons individuelles)',
      'Commerçants et restaurants',
      'Bureaux et copropriétés',
      'Contrats récurrents et prestations ponctuelles'
    ],
    faqExtra: [
      {
        q: 'Vous favorisez les contrats récurrents ?',
        a: 'Oui. Les contrats récurrents sont le cœur de la rentabilité du métier : nous priorisons les demandes orientées dans ce sens.'
      }
    ]
  },
  'revetement-sol': {
    accroche: 'Parquet, vinyle, carrelage, sol souple : remplissez votre planning de chantiers de pose et rénovation de sol.',
    audience: [
      'Pose de parquet (massif, contrecollé, stratifié)',
      'Sols vinyles, lino, sols souples',
      'Carrelage et faïence',
      'Ponçage, vitrification, rénovation'
    ],
    faqExtra: [
      {
        q: 'Vous gérez la diversité des matériaux ?',
        a: 'Oui. Vous nous indiquez vos spécialités, on calibre le ciblage pour vous transmettre les demandes pertinentes.'
      }
    ]
  },
  'restauration-degat-eaux': {
    accroche: 'Sinistres dégât des eaux, urgences inondation, séchage et assainissement : remplissez votre planning de chantiers post-sinistre.',
    audience: [
      'Pompage, séchage, déshumidification',
      'Démolition et remise en état',
      'Coordination avec assurances',
      'Particuliers, copropriétés, professionnels'
    ],
    faqExtra: [
      {
        q: 'Le rythme des sinistres est imprévisible — comment ça marche ?',
        a: 'Nos dispositifs amplifient les fenêtres de demande (météo, périodes de gel, saison des orages) pour vous apporter du flux quand le besoin explose.'
      }
    ]
  },
  'fenetres': {
    accroche: 'Pose et remplacement de fenêtres, baies vitrées, volets : remplissez votre planning de chantiers menuiserie extérieure.',
    audience: [
      'Remplacement de fenêtres PVC, alu, bois',
      'Baies vitrées, vérandas, portes-fenêtres',
      'Volets roulants, battants, persiennes',
      'Rénovation énergétique (CEE, MaPrimeRénov\')'
    ],
    faqExtra: [
      {
        q: 'Les demandes sont-elles éligibles aux aides ?',
        a: 'Souvent oui. Nous identifions les projets éligibles MaPrimeRénov\' / CEE pour vous les transmettre prêts à chiffrer.'
      }
    ]
  },
  'plans-de-travail': {
    accroche: 'Plans de travail en pierre, quartz, granit, céramique ou bois : on vous apporte les chantiers, vous gardez la main commerciale.',
    audience: [
      'Plans de cuisine (quartz, granit, céramique, dekton)',
      'Plans de salle de bain',
      'Plans sur-mesure pour pros (restaurants, hôtels)',
      'Pose seule ou fourniture + pose'
    ],
    faqExtra: [
      {
        q: 'Vous travaillez avec des cuisinistes / architectes ?',
        a: 'Oui. Nous pouvons aussi cibler les apporteurs B2B (cuisinistes, architectes, agenceurs) en plus des particuliers.'
      }
    ]
  },
  'portes-garage': {
    accroche: 'Pose, motorisation, dépannage de portes de garage : remplissez votre carnet de commandes sur ce métier précis.',
    audience: [
      'Portes sectionnelles, basculantes, enroulables',
      'Motorisations et automatismes',
      'Réparation et SAV',
      'Particuliers et copropriétés'
    ],
    faqExtra: [
      {
        q: 'Vous gérez les marques que je distribue ?',
        a: 'Vous nous indiquez vos marques et gammes : on aligne les messages pour ne vous transmettre que les demandes compatibles.'
      }
    ]
  },
  'arboriculture': {
    accroche: 'Élagage, abattage, soins aux arbres : on remplit votre planning d\'arboriste-grimpeur ou élagueur.',
    audience: [
      'Élagage, taille de formation, taille douce',
      'Abattage et démontage par démontage',
      'Diagnostics phytosanitaires',
      'Particuliers, copropriétés, collectivités'
    ],
    faqExtra: [
      {
        q: 'Vous savez gérer les demandes urgentes (chute de branche, tempête) ?',
        a: 'Oui. Nous activons des dispositifs spécifiques en cas de tempête ou de pic météo pour vous apporter du flux d\'urgence.'
      }
    ]
  },
};

export const getMetierContent = (slug) => METIERS_CONTENT[slug] || null;
export const hasMetierContent = (slug) => Boolean(METIERS_CONTENT[slug]);
