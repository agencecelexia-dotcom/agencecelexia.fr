// Source de vérité unique des métiers accompagnés par Celexia.
//
// ⚠️ Toute modification de cette liste doit être répercutée dans :
//   - scripts/prerender-meta.mjs  (objet METIERS — sinon la page n'est pas pré-rendue)
//   - public/sitemap.xml          (une <url> par métier)
//   - vercel.json / netlify.toml  (301 si un slug disparaît)
// Voir le skill .claude/skills/celexia-routes/SKILL.md
//
// Les fourchettes de budget sont des ordres de grandeur du marché, pas des
// promesses de chantier. Ne jamais y ajouter de volume, de délai ni de résultat.

export const METIERS = {
  'constructeurs-piscines': {
    label: 'Constructeurs de piscines',
    labelCourt: 'Piscine',
    // Teintes matière, volontairement désaturées : elles ne concurrencent
    // jamais le cuivre, qui reste le seul accent du site.
    color: '#2E6E7E',
    titre: 'Des projets de piscine, transmis à un seul constructeur',
    accroche:
      "Vous construisez des piscines. Nous trouvons les particuliers qui en veulent une, nous vérifions que leur projet tient debout, et nous vous le transmettons à vous seul.",
    budget: '25 000 à 50 000 €',
    budgetNote: "Ordre de grandeur du marché pour une piscine enterrée avec terrasse.",
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
  },

  couverture: {
    label: 'Couverture',
    labelCourt: 'Couverture',
    color: '#5A6470',
    titre: 'Des toitures à refaire, sans les chasser',
    accroche:
      "Vous êtes couvreur. Nous trouvons les propriétaires qui doivent refaire leur toit, nous vérifions leur projet, et vous êtes le seul à recevoir la demande.",
    budget: '10 000 à 30 000 €',
    budgetNote: "Ordre de grandeur du marché pour une réfection complète de toiture.",
    projets: [
      'Réfection complète de couverture',
      'Tuile, ardoise, zinc, bac acier',
      'Charpente et zinguerie associées',
      'Isolation de toiture par l’extérieur',
    ],
    faq: {
      q: 'Et les dépannages, les fuites, les urgences ?',
      a: "Ce n’est pas notre terrain. Nous travaillons sur les chantiers de réfection, pas sur le dépannage à quelques centaines d’euros — le modèle n’aurait de sens ni pour vous ni pour nous.",
    },
  },

  'facade-ite': {
    label: 'Façade et isolation par l’extérieur',
    labelCourt: 'Façade / ITE',
    color: '#C2A878',
    titre: 'Des façades à reprendre, une demande pour vous seul',
    accroche:
      "Ravalement, bardage, isolation par l’extérieur. Nous trouvons les propriétaires dont la façade est à reprendre, nous qualifions le projet, et nous vous le transmettons sans le partager.",
    budget: '15 000 à 40 000 €',
    budgetNote: "Ordre de grandeur du marché pour un ravalement avec isolation extérieure.",
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
  },

  maconnerie: {
    label: 'Maçonnerie',
    labelCourt: 'Maçonnerie',
    color: '#8C7F72',
    titre: 'Du gros œuvre, transmis à un seul maçon',
    accroche:
      "Extensions, murs, dalles, reprises de structure. Nous trouvons les particuliers qui ont un vrai projet de maçonnerie et nous vous le transmettons à vous, pas à cinq entreprises.",
    budget: '20 000 à 60 000 €',
    budgetNote: "Ordre de grandeur du marché pour une extension ou un chantier de gros œuvre.",
    projets: [
      'Extensions et surélévations',
      'Dalles, fondations, murs porteurs',
      'Reprise en sous-œuvre et ouvertures',
      'Murs de clôture et soutènement maçonnés',
    ],
    faq: {
      q: 'Vous envoyez des petits travaux de reprise ?',
      a: "Non. Nous nous concentrons sur les chantiers structurants, ceux qui remplissent une semaine d’équipe plutôt qu’une matinée.",
    },
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
