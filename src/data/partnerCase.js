// Cas réel communiqué par le client le 7 novembre 2026, publié anonymement.
// Période relative connue : mois 1 à 4. Aucune date calendaire n’a été fournie.
// Les volumes concernent des demandes qualifiées transmises, pas des ventes.
const periods = [
  { label: 'Mois 1', count: 100 },
  { label: 'Mois 2', count: 200 },
  { label: 'Mois 3', count: 200 },
  { label: 'Mois 4', count: 200 },
];

export const CASE_STUDY = {
  kind: 'article',
  path: '/retour-experience-partenaire-btp',
  title: 'Partenariat BTP et couverture : retour d’expérience | Celexia',
  description: 'Retour d’expérience Celexia : 700 demandes qualifiées transmises en quatre mois à une entreprise BTP orientée couverture. Méthode et périmètre des chiffres.',
  breadcrumbLabel: 'Retour d’expérience BTP',
  eyebrow: 'Retour d’expérience · Entreprise partenaire',
  h1: 'Apport d’affaires BTP : un partenariat orienté couverture.',
  lead: 'Une entreprise du bâtiment tous corps de métier, avec une activité orientée couverture. Voici les demandes qualifiées transmises par Celexia au cours des quatre premiers mois de cette collaboration.',
  summary: 'Celexia a transmis 100 demandes qualifiées à cette entreprise partenaire le premier mois, puis 200 demandes chacun des trois mois suivants : soit 700 demandes sur quatre mois. Ces chiffres décrivent les demandes transmises, pas des chantiers signés.',
  author: 'L’équipe Celexia',
  source: 'Données opérationnelles communiquées par l’équipe Celexia. Entreprise anonymisée.',
  publishedAt: '2026-11-07',
  updatedAt: '2026-11-07',
  periods,
  total: periods.reduce((sum, period) => sum + period.count, 0),
  totalLabel: 'demandes qualifiées transmises sur quatre mois',
  calculation: '100 + 200 + 200 + 200 = 700 demandes',
  sections: [
    {
      id: 'contexte',
      title: 'Le contexte du partenariat',
      paragraphs: [
        'Ce retour d’expérience concerne une entreprise BTP tous corps de métier, orientée vers la couverture. Son identité reste confidentielle. Le suivi présenté porte sur les quatre premiers mois de la collaboration avec Celexia. Les chiffres concernent les demandes transmises à cette entreprise, sans ventilation par corps de métier.',
        'La répartition mensuelle permet de lire le volume sur l’ensemble de cette période. Les mois sont indiqués dans l’ordre de la collaboration : le premier mois correspond au démarrage du partenariat.',
      ],
    },
    {
      id: 'qualification',
      title: 'Ce que signifie une demande qualifiée',
      paragraphs: [
        'Dans le fonctionnement de Celexia, la qualification porte sur cinq points : l’identité du particulier, la nature du projet, le budget, la zone et le calendrier. L’objectif est de transmettre les informations utiles pour préparer la prise de contact et comprendre le besoin.',
        'Cette préparation ne remplace pas l’étude technique de l’artisan. Pour un projet de couverture, celui-ci doit notamment examiner l’état de la toiture, les accès et le périmètre des travaux avant d’établir son devis.',
      ],
    },
    {
      id: 'lecture',
      title: 'De la demande au chantier : des étapes distinctes',
      paragraphs: [
        'Une demande transmise correspond à un projet qualifié présenté à l’entreprise. Un devis est la proposition que l’artisan établit ensuite. Un chantier signé suppose l’accord du client sur cette proposition.',
        'Les chiffres de cette page concernent uniquement les demandes transmises. Ils ne comptent pas les devis établis, les chantiers signés ou le chiffre d’affaires encaissé. Dans le partenariat Celexia, l’entreprise garde la main sur son chiffrage, ses prix et la relation avec le particulier.',
      ],
    },
  ],
  limitation: 'Ce cas décrit une collaboration particulière ; les volumes dépendent notamment du métier, du secteur et des capacités de l’entreprise et ne constituent pas une garantie de résultat.',
};
