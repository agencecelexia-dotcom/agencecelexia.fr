// Contenu éditorial partagé entre l'accueil et les pages métiers.
//
// Règles de rédaction (voir .claude/skills/celexia-copy/SKILL.md) :
//   - Ne jamais décrire les canaux d'acquisition.
//   - Ne jamais publier de terme contractuel (préavis, durée, délai de paiement).
//   - Aucun chiffre de volume, d'ancienneté ou de performance. Seuls le taux de
//     commission et les fourchettes de budget de chantier sont autorisés.

/**
 * Définition courte de Celexia, écrite pour être citée telle quelle par un
 * moteur de réponse (ChatGPT, Perplexity, AI Overviews) qui répondrait à
 * « qu'est-ce qu'Agence Celexia ». Nom, nature, périmètre, modèle : quatre
 * phrases, autonomes, sans renvoi au reste de la page.
 */
export const DEFINITION =
  "Agence Celexia est un apporteur d'affaires français dédié aux artisans du bâtiment. " +
  "L'entreprise recherche et finance elle-même les demandes de chantiers de particuliers, " +
  "vérifie chacune d'elles, puis les transmet à un seul artisan partenaire — jamais à plusieurs. " +
  "L'artisan ne reverse une commission de 15 % que sur les devis qu'il a effectivement signés.";

export const ETAPES = [
  {
    titre: 'Nous trouvons les projets, et nous les payons',
    desc: "Aller chercher des particuliers qui ont un vrai projet coûte de l’argent. C’est nous qui le dépensons, pas vous. Vous n’avancez rien, à aucun moment.",
  },
  {
    titre: 'Nous les vérifions une par une',
    desc: "Une demande n’est transmise que si elle tient debout sur cinq points. Celles qui ne passent pas ne vous parviennent jamais.",
  },
  {
    titre: 'Nous la transmettons à un seul artisan',
    desc: "Le chantier part chez vous, et chez personne d’autre. Vous n’êtes pas mis en concurrence avec quatre autres entreprises sur le même dossier.",
  },
  {
    titre: 'Vous chiffrez, vous signez, vous reversez 15 %',
    desc: "Vous gardez la main sur le prix, la vente et la relation client. Si le devis n’est pas signé, il n’y a pas de facture.",
  },
];

export const PAS_NOTRE_METIER = [
  'Nous n’achetons pas de fichiers de contacts',
  'Nous ne revendons pas la même demande à plusieurs artisans',
  'Nous ne faisons pas de démarchage à froid en votre nom',
  'Nous ne vous vendons ni site web, ni abonnement, ni prestation',
];

/** Les quatre objections, dans l'ordre où un artisan se les pose. */
export const FAQ_COMMUNE = [
  {
    q: 'C’est trop beau. Où est l’arnaque ?',
    a: "Il n’y a rien à payer parce que nous prenons le risque à votre place : nous dépensons pour trouver les projets, et nous ne gagnons quelque chose que si vous signez. Si vous ne signez pas, nous avons travaillé pour rien. C’est un pari sur la qualité de ce qu’on vous envoie, pas un cadeau.",
  },
  {
    q: 'Vos chantiers, ils sortent d’où ?',
    a: "Nous ne dirons pas comment nous les trouvons : c’est notre métier, et c’est précisément ce que nous finançons à votre place. En revanche, nous sommes très clairs sur ce que vous recevez : un particulier qui nous a contactés pour son propre projet, dont nous avons vérifié l’identité, le besoin, le budget, la zone et l’échéance. Jamais un nom acheté dans un fichier.",
  },
  {
    q: 'Je vais me retrouver contre quatre autres entreprises ?',
    a: "Non. Une demande, un artisan. Et ce n’est pas une promesse en l’air : comme nous ne sommes rémunérés qu’en cas de signature, envoyer le même chantier à cinq artisans diviserait nos propres chances par cinq. Notre intérêt est que vous signiez.",
  },
  {
    q: '15 %, c’est cher.',
    a: "C’est 15 % d’un chantier que vous avez signé, pas d’un chantier espéré. Un budget de publicité se dépense que ça marche ou non ; un lot de contacts se paie d’avance et part souvent chez vos concurrents en même temps. Ici, tant qu’il n’y a pas de signature, il n’y a pas de facture — et le chantier ne vous a rien coûté pour arriver jusqu’à vous.",
  },
];
