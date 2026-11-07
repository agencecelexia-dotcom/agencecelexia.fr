// Contenu éditorial partagé entre l'accueil et les pages métiers.
//
// Règles de rédaction (voir .claude/skills/celexia-copy/SKILL.md) :
//   - Ne jamais décrire les canaux d'acquisition.
//   - Ne jamais publier de terme contractuel (préavis, durée, délai de paiement).
//   - Aucun chiffre de volume, d'ancienneté ou de performance. Seules les
//     fourchettes de budget de chantier sont autorisées.
//   - Ne publier aucun taux : la rémunération se précise au téléphone.
//   - Ne faire aucune mention de l’exclusivité ou du nombre de destinataires.

/**
 * Définition courte de Celexia, écrite pour être citée telle quelle par un
 * moteur de réponse (ChatGPT, Perplexity, AI Overviews) qui répondrait à
 * « qu'est-ce qu'Agence Celexia ». Nom, nature, périmètre, modèle : quatre
 * phrases, autonomes, sans renvoi au reste de la page.
 */
export const DEFINITION =
  "Agence Celexia est un apporteur d'affaires français dédié aux artisans du bâtiment. " +
  "L'entreprise recherche et finance elle-même les demandes de chantiers de particuliers, " +
  "vérifie chacune d'elles, puis transmet aux artisans les informations utiles pour préparer leur devis. " +
  "Celexia est rémunérée à la commission, uniquement une fois le chantier signé et l'acompte reçu.";

export const ETAPES = [
  {
    titre: 'Nous recherchons les projets',
    desc: 'Nous prenons en charge et finançons la recherche de projets de travaux. Vous n’avez aucun budget à avancer pour cette recherche.',
  },
  {
    titre: 'Nous qualifions chaque demande',
    desc: 'Identité, projet, budget, zone et calendrier : nous vérifions ces cinq points pour vous transmettre des demandes précises et cohérentes avec votre activité.',
  },
  {
    titre: 'Nous vous confions le dossier',
    desc: 'Le projet correspond à votre métier et à votre secteur. Vous disposez des informations pour contacter le particulier et préparer votre devis.',
  },
  {
    titre: 'Vous chiffrez et réalisez le chantier',
    desc: 'Vous fixez vos prix et gardez la relation client. Notre commission intervient uniquement une fois le chantier signé et l’acompte reçu.',
  },
];

export const PAS_NOTRE_METIER = [
  'Nous n’achetons pas de fichiers de contacts',
  'Nous ne faisons pas de démarchage à froid en votre nom',
  'Nous ne vous vendons ni site web, ni abonnement, ni prestation',
];

/** Questions partagées : modèle, valeur et parcours de candidature. */
export const FAQ_COMMUNE = [
  {
    q: 'Que dois-je payer avant de recevoir un projet ?',
    a: 'Aucun frais d’entrée, aucun abonnement et aucun budget de recherche à avancer. Celexia finance la recherche et la qualification des projets. Notre rémunération intervient uniquement après la signature du chantier et la réception de votre acompte.',
  },
  {
    q: 'Quelles informations vais-je recevoir sur un projet ?',
    a: 'Nous vérifions l’identité du particulier, la nature du projet, le budget, la zone d’intervention et le calendrier souhaité. Vous recevez une demande qualifiée pour pouvoir échanger avec le particulier et établir votre propre devis.',
  },
  {
    q: 'Qui prépare le devis et échange avec le client ?',
    a: 'Vous prenez directement contact avec le particulier, étudiez son projet et établissez votre devis. Vous fixez vos prix et organisez les travaux. Celexia prépare les informations en amont ; vous gardez la main sur la relation client.',
  },
  {
    q: 'Comment Celexia est-elle rémunérée ?',
    a: 'Nous percevons une commission uniquement une fois le chantier signé et l’acompte reçu. Nous vous présentons son fonctionnement de vive voix lors de notre échange. Sans signature ni acompte, aucune commission n’est facturée.',
  },
  {
    q: 'Que se passe-t-il après ma candidature ?',
    a: 'L’équipe sélection Celexia analyse votre entreprise, votre métier, votre secteur et votre capacité à accueillir de nouveaux chantiers. Nous revenons ensuite vers vous pour échanger sur votre demande. Le formulaire sert à faire connaissance : il ne crée pas de compte et ne comporte aucune signature de contrat.',
  },
];
