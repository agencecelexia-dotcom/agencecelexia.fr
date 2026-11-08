// Source de vérité unique des métiers accompagnés par Celexia.
//
// ⚠️ Toute modification de cette liste doit être répercutée dans :
//   - scripts/prerender-meta.mjs  (objet METIERS — sinon la page n'est pas pré-rendue)
//   - public/sitemap.xml          (une <url> par métier)
//   - vercel.json / netlify.toml  (301 si un slug disparaît)
// Voir le skill .claude/skills/celexia-routes/SKILL.md
//
// Les repères de préparation servent à l’artisan avant sa visite : ils ne
// constituent pas des informations techniques garanties par Celexia.

export const METIERS = {
  'constructeurs-piscines': {
    label: 'Constructeurs de piscines',
    labelCourt: 'Piscine',
    // Repères de couleur associés à chaque métier.
    color: '#2E6E7E',
    seoTitle: 'Chantiers pour piscinistes : partenariat artisan | Celexia',
    seoDescription: 'Piscinistes : des projets de construction et de rénovation qualifiés pour votre entreprise. Commission après signature et acompte reçu.',
    titre: 'Des chantiers pour piscinistes, de la construction à la rénovation',
    accroche:
      "Vous construisez des piscines. Nous recherchons des projets de construction et de rénovation, puis vérifions le besoin, le budget et le calendrier avant de vous les transmettre.",
    projets: [
      'Piscines maçonnées béton, sur-mesure',
      'Coques polyester posées',
      'Chantiers complets : terrassement, local technique, plage',
      'Rénovation et réfection de bassin',
    ],
    faq: {
      q: 'Vous transmettez aussi les demandes de simple entretien ?',
      a: "Non. Nous nous concentrons sur les projets de construction et de rénovation lourde, ceux dont le montant justifie votre déplacement et votre étude.",
    },
    preparation: {
      title: 'Préparer votre visite pour un projet de piscine',
      intro: 'Celexia vérifie le besoin, le budget, la zone et le calendrier du particulier. Pour passer de cette demande à votre devis, vous approfondissez ensuite les éléments techniques. Voici les points à préparer avec le client, puis à confirmer sur place.',
      points: [
        {
          title: 'Le bassin et les usages souhaités',
          description: 'Construction neuve ou rénovation, type de bassin envisagé, dimensions souhaitées, accès à l’eau et équipements attendus : précisez ce que le propriétaire imagine. Distinguez ses choix arrêtés des options qu’il souhaite encore comparer avec vous.',
        },
        {
          title: 'Le terrain et les accès',
          description: 'Demandez comment les engins et les matériaux peuvent atteindre l’emplacement. Lors de la visite, examinez le terrain, les espaces de travail et les contraintes qui peuvent modifier votre organisation ou nécessiter une étude complémentaire.',
        },
        {
          title: 'Le périmètre des travaux',
          description: 'Terrassement, bassin, local technique, raccordements et aménagements autour de la piscine : identifiez ce que votre entreprise prend en charge. Vérifiez aussi les interventions déjà prévues avec d’autres professionnels pour délimiter votre proposition.',
        },
        {
          title: 'L’avancement du projet',
          description: 'Quels plans, documents ou démarches existent déjà ? Quelle période le propriétaire souhaite-t-il viser ? Ces réponses aident à distinguer son objectif de calendrier d’une date que vous pourrez confirmer après votre étude.',
        },
      ],
    },
    organisation: {
      title: 'Un partenariat adapté à votre façon de construire',
      paragraphs: [
        'Présentez vos spécialités : piscine maçonnée, pose de coque, rénovation de bassin ou chantier complet. Précisez également les prestations que vous ne réalisez pas. Cette description aide à orienter la recherche vers des projets cohérents avec vos compétences et votre équipement.',
        'Décrivez votre zone et la place disponible dans votre planning, en tenant compte de la préparation, des travaux et des déplacements. Vous restez responsable de la visite, du choix technique et du chiffrage. Celexia prépare le premier échange ; votre expertise permet de construire la proposition au particulier.',
      ],
    },
    questions: [
      { q: 'Puis-je présenter une entreprise spécialisée dans un seul type de piscine ?', a: 'Oui. Décrivez votre spécialité et votre périmètre dans la candidature, par exemple la piscine maçonnée ou la pose de coque. L’équipe Celexia étudiera votre activité et votre secteur avant d’échanger avec vous.' },
      { q: 'Le dossier transmis remplace-t-il une visite du terrain ?', a: 'Non. La demande qualifiée prépare votre prise de contact. L’accès, le terrain, l’implantation et les contraintes techniques restent à examiner par votre entreprise avant de finaliser le devis.' },
      { q: 'Comment signaler mes disponibilités pour de nouveaux bassins ?', a: 'Indiquez votre capacité supplémentaire dans le formulaire et utilisez les précisions libres pour expliquer vos périodes disponibles. Cela donne un contexte à l’échange, sans vous demander de fixer une date de travaux avant l’étude du projet.' },
    ],
  },

  couverture: {
    updatedAt: '2026-11-08',
    label: 'Couverture',
    labelCourt: 'Couverture',
    color: '#5A6470',
    seoTitle: 'Chantiers pour couvreurs : apport d’affaires BTP | Celexia',
    seoDescription: 'Couvreurs : des projets de réfection de toiture qualifiés dans votre secteur. Partenariat Celexia, commission après signature et acompte reçu.',
    titre: 'Des chantiers de toiture pour votre entreprise de couverture',
    accroche:
      "Vous êtes couvreur. Nous recherchons les propriétaires qui souhaitent refaire leur toit et qualifions leur projet pour vous transmettre les informations utiles à votre devis.",
    projets: [
      'Réfection complète de couverture',
      'Tuile, ardoise, zinc, bac acier',
      'Charpente et zinguerie associées',
      'Isolation de toiture par l’extérieur',
    ],
    faq: {
      q: 'Et les dépannages, les fuites, les urgences ?',
      a: 'Celexia accompagne les projets de réfection de toiture. Les demandes de dépannage ponctuel et les urgences ne font pas partie du périmètre recherché.',
    },
    preparation: {
      title: 'Les points à approfondir avant un devis de couverture',
      intro: 'La qualification Celexia vous donne un premier contexte sur le projet du propriétaire. Elle ne constitue pas un diagnostic de toiture. Votre échange et votre visite servent à examiner les informations suivantes avant de définir la solution et le devis.',
      points: [
        {
          title: 'La couverture existante et le besoin',
          description: 'Quels matériaux sont en place et que souhaite remplacer le propriétaire ? Demandez ce qui motive les travaux et si des photographies ou documents existent. Distinguez la réfection recherchée des observations techniques que vous devrez confirmer.',
        },
        {
          title: 'Les accès et l’installation du chantier',
          description: 'Examinez les possibilités d’accès au bâtiment, les espaces disponibles pour les matériaux et l’organisation des interventions en hauteur. Ces contraintes peuvent influencer la préparation du chantier, même lorsque le besoin de réfection paraît simple.',
        },
        {
          title: 'Les travaux associés',
          description: 'Le projet comprend-il de la charpente, de la zinguerie ou une isolation de toiture ? Clarifiez les attentes du client, votre propre périmètre et les points à étudier avant de confirmer ce qui figurera au devis.',
        },
        {
          title: 'Le calendrier du propriétaire',
          description: 'Identifiez la période souhaitée et les autres travaux prévus sur le bâtiment. Vous pourrez ensuite mettre cet objectif en regard de votre planning, de vos approvisionnements et de l’organisation nécessaire à la réalisation.',
        },
      ],
    },
    organisation: {
      title: 'Décrire les chantiers que votre équipe peut accueillir',
      paragraphs: [
        'Tuile, ardoise, zinc, bac acier : indiquez les matériaux et configurations sur lesquels votre entreprise intervient. Précisez si vous réalisez les travaux associés de charpente, de zinguerie ou d’isolation. Une description concrète est plus utile que le seul intitulé « couverture ».',
        'Votre secteur doit aussi tenir compte des visites, des livraisons et du suivi pendant les travaux. Présentez votre rythme habituel et votre capacité supplémentaire. Vous gardez la main sur l’analyse de la toiture, vos prix et vos échanges avec le particulier ; le partenariat se prépare à partir de cette organisation réelle.',
      ],
    },
    questions: [
      { q: 'Puis-je candidater si je travaille seulement certains matériaux ?', a: 'Oui. Indiquez les matériaux et les types de toiture que vous prenez en charge, ainsi que vos exclusions. Ces précisions aident l’équipe Celexia à comprendre les projets qui correspondent à votre activité.' },
      { q: 'La qualification comprend-elle un diagnostic de charpente ?', a: 'Non. Celexia vérifie le contexte de la demande. L’état de la charpente, de la couverture et des éléments associés relève de votre examen technique et, selon le projet, des études à prévoir avant le devis.' },
      { q: 'Dois-je assurer la charpente et la zinguerie pour présenter mon entreprise ?', a: 'Décrivez simplement les prestations que votre entreprise réalise. Le périmètre de chaque projet devra être rapproché de vos spécialités ; votre candidature sert d’abord à préparer cet échange avec Celexia.' },
    ],
  },

  'facade-ite': {
    label: 'Façade et isolation par l’extérieur',
    labelCourt: 'Façade / ITE',
    color: '#C2A878',
    seoTitle: 'Chantiers façade et ITE : partenariat façadier | Celexia',
    seoDescription: 'Façadiers : projets de ravalement, bardage et isolation extérieure qualifiés. Partenariat Celexia, commission après signature et acompte reçu.',
    titre: 'Des chantiers de façade et d’ITE pour votre entreprise',
    accroche:
      "Ravalement, bardage, isolation par l’extérieur. Nous recherchons et qualifions les projets de propriétaires dont la façade est à reprendre, dans votre zone d’intervention.",
    projets: [
      'Isolation thermique par l’extérieur',
      'Ravalement et reprise d’enduit',
      'Bardage bois, composite, fibre-ciment ou métal',
      'Maisons individuelles et petit collectif',
    ],
    faq: {
      q: 'Les dossiers d’aides à la rénovation, vous les gérez ?',
      a: "Non, c’est votre métier et votre relation client. Nous vérifions en amont que le projet est réel et le budget cohérent, puis nous vous laissons la main sur le montage et le chiffrage.",
    },
    preparation: {
      title: 'Préparer l’étude d’un chantier de façade',
      intro: 'Ravalement et isolation extérieure ne répondent pas toujours au même besoin. Après la première qualification de la demande par Celexia, votre échange avec le propriétaire et votre visite permettent de préciser le projet et d’examiner les supports.',
      points: [
        {
          title: 'L’objectif des travaux',
          description: 'Le propriétaire souhaite-t-il reprendre l’aspect de la façade, traiter des désordres observés ou envisager une isolation extérieure ? Faites préciser son besoin et ses attentes de finition avant de proposer un périmètre de travaux.',
        },
        {
          title: 'Les supports et l’existant',
          description: 'Demandez quels revêtements sont en place et si des travaux ont déjà été réalisés. Sur place, votre entreprise examine l’état du support et les points qui nécessitent une vérification particulière avant le choix d’une solution.',
        },
        {
          title: 'Les ouvertures et les équipements',
          description: 'Fenêtres, volets, appuis, descentes d’eau et équipements fixés en façade : repérez les éléments à prendre en compte. Ils aident à préciser les raccords, les interventions associées et les limites de votre proposition.',
        },
        {
          title: 'Les accès et les documents disponibles',
          description: 'Vérifiez l’accès aux façades et l’espace nécessaire à l’installation du chantier. Identifiez les plans, photographies ou études déjà disponibles, ainsi que les autres professionnels impliqués, pour préparer les questions encore ouvertes.',
        },
      ],
    },
    organisation: {
      title: 'Mettre vos spécialités au centre du partenariat',
      paragraphs: [
        'Présentez vos prestations avec précision : ravalement, reprise d’enduit, bardage ou isolation thermique par l’extérieur. Indiquez les matériaux et les configurations que vous maîtrisez, ainsi que les travaux que vous ne prenez pas en charge. Le besoin d’un propriétaire doit être rapproché de ce périmètre concret.',
        'Décrivez votre zone et vos disponibilités en tenant compte de l’installation, des travaux et du suivi. Vous réalisez l’étude technique, préparez votre devis et échangez directement avec le particulier. Si le projet concerne des aides à la rénovation, les démarches restent à examiner avec lui dans le cadre de votre intervention.',
      ],
    },
    questions: [
      { q: 'Puis-je candidater si je fais du ravalement mais pas d’ITE ?', a: 'Oui. Précisez dans votre candidature que votre activité porte sur le ravalement et décrivez les travaux réalisés. L’équipe Celexia pourra étudier votre périmètre et votre secteur sans supposer que vous proposez de l’isolation extérieure.' },
      { q: 'Le budget annoncé valide-t-il la solution technique ?', a: 'Non. Il donne un repère pour le premier échange. Votre visite, l’examen du support et les choix du propriétaire permettent de déterminer les travaux que vous pourrez effectivement proposer et chiffrer.' },
      { q: 'Comment présenter mon activité de bardage ?', a: 'Indiquez les matériaux, les types de bâtiments et la zone sur lesquels vous intervenez. Vous pouvez utiliser le champ libre de la candidature pour préciser les configurations recherchées et celles que vous ne réalisez pas.' },
    ],
  },

  maconnerie: {
    label: 'Maçonnerie',
    labelCourt: 'Maçonnerie',
    color: '#8C7F72',
    seoTitle: 'Chantiers maçonnerie : partenariat pour maçons | Celexia',
    seoDescription: 'Maçons : projets d’extension, fondations et gros œuvre qualifiés pour votre entreprise. Commission Celexia après signature et acompte reçu.',
    titre: 'Des chantiers de maçonnerie pour développer votre entreprise',
    accroche:
      "Extensions, murs, dalles, reprises de structure. Nous recherchons des projets de maçonnerie et vérifions leur cohérence avec votre activité avant de vous les transmettre.",
    projets: [
      'Extensions et surélévations',
      'Dalles, fondations, murs porteurs',
      'Reprise en sous-œuvre et ouvertures',
      'Murs de clôture et soutènement maçonnés',
    ],
    faq: {
      q: 'Vous envoyez des petits travaux de reprise ?',
      a: 'Celexia recherche des projets structurants de maçonnerie et de gros œuvre. Les petites réparations ponctuelles ne font pas partie du périmètre accompagné.',
    },
    preparation: {
      title: 'Les informations à réunir avant d’étudier le gros œuvre',
      intro: 'Une extension, une dalle ou une reprise de structure demandent des échanges différents. Celexia qualifie la demande en amont. Votre entreprise approfondit ensuite le projet et vérifie les éléments nécessaires à son étude technique avant de chiffrer.',
      points: [
        {
          title: 'La nature et les limites du projet',
          description: 'Faites préciser le résultat attendu : agrandir un bâtiment, créer une ouverture, réaliser une dalle ou construire un mur. Délimitez les travaux envisagés et les parties de l’existant concernées pour préparer une visite utile.',
        },
        {
          title: 'Les plans et études disponibles',
          description: 'Demandez quels plans, relevés ou études ont déjà été réalisés et qui accompagne le propriétaire. Identifiez ce qui reste à approfondir avant de définir votre intervention ; une demande qualifiée ne vaut pas validation de la faisabilité technique.',
        },
        {
          title: 'Le terrain, les accès et la logistique',
          description: 'Examinez les accès pour les engins et les matériaux, les espaces de stockage et les conditions d’évacuation. Ces éléments permettent de préparer votre organisation et de repérer les contraintes à intégrer à l’étude du chantier.',
        },
        {
          title: 'Les interventions qui se croisent',
          description: 'Le projet implique-t-il d’autres entreprises ou des travaux déjà programmés ? Clarifiez votre périmètre, les échanges nécessaires et le calendrier souhaité. Vous pourrez ensuite expliquer au propriétaire les étapes qui concernent votre entreprise.',
        },
      ],
    },
    organisation: {
      title: 'Un partenariat construit autour de vos capacités',
      paragraphs: [
        'Présentez vos spécialités : extensions, fondations, dalles, murs ou interventions sur l’existant. Précisez ce que votre équipe réalise habituellement et les configurations que vous ne souhaitez pas prendre en charge. Ces informations aident à distinguer un projet adapté d’une demande trop éloignée de votre activité.',
        'La capacité disponible dépend du planning de l’équipe, des moyens nécessaires et du temps consacré à l’étude des projets. Décrivez votre situation dans le formulaire sans chercher à annoncer un volume idéal. Vous restez maître de la visite, du chiffrage et de l’organisation des travaux ; Celexia prépare la mise en relation avec le particulier.',
      ],
    },
    questions: [
      { q: 'Puis-je présenter une entreprise spécialisée dans les extensions ?', a: 'Oui. Précisez votre spécialité, les travaux que vous prenez en charge et votre secteur d’intervention. Le formulaire permet aussi de décrire la capacité de votre équipe à accueillir de nouveaux projets.' },
      { q: 'Celexia fournit-elle les études nécessaires aux travaux de structure ?', a: 'Non. Celexia recherche et qualifie le projet du particulier. Votre entreprise examine les documents disponibles et identifie avec les intervenants concernés les vérifications nécessaires avant de préparer sa proposition.' },
      { q: 'Comment préciser les projets que je ne souhaite pas réaliser ?', a: 'Utilisez le champ libre pour indiquer vos exclusions, par exemple certaines interventions sur l’existant ou des zones trop éloignées. Ces précisions complètent votre métier et aident à préparer un échange concret avec l’équipe Celexia.' },
    ],
  },
};

/** Les cinq points vérifiés avant qu'une demande vous soit transmise. */
export const POINTS_QUALIFIES = [
  { titre: 'Identité', desc: "La personne existe, elle est joignable, et c’est bien elle qui décide." },
  { titre: 'Projet', desc: "Le besoin est précis et correspond à ce que vous faites." },
  { titre: 'Budget', desc: "L’enveloppe est cohérente avec la réalité du chantier demandé." },
  { titre: 'Zone', desc: "Le chantier est dans le secteur où vous acceptez d’intervenir." },
  { titre: 'Calendrier', desc: "Le projet a une échéance, ce n’est pas une idée pour dans trois ans." },
];

export const METIER_SLUGS = Object.keys(METIERS);

export const getMetier = (slug) => METIERS[slug] || null;
export const getMetierLabel = (slug) => METIERS[slug]?.label || 'Artisan';
export const getMetierColor = (slug) => METIERS[slug]?.color || '#B4622C';
export const hasMetier = (slug) => Boolean(METIERS[slug]);
