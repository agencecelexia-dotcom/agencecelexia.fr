// Contenus éditoriaux publics : une source partagée par les pages et le pré-rendu.
// Les modalités de rémunération se présentent au téléphone : aucun taux public.
import { QUALIFICATION_GUIDE } from './qualificationGuide.js';

export const SEO_PAGES = {
  'demande-qualifiee-btp': QUALIFICATION_GUIDE,
  'apporteur-affaires-btp': {
    kind: 'service',
    path: '/apporteur-affaires-btp',
    breadcrumbLabel: 'Apporteur d’affaires BTP',
    title: 'Apporteur d’affaires BTP pour artisans | Celexia',
    description: 'Celexia, apporteur d’affaires BTP : des projets qualifiés pour les artisans. Commission après signature et acompte. Présentez votre entreprise.',
    eyebrow: 'Apport d’affaires · Bâtiment',
    h1: 'Votre apporteur d’affaires BTP, pour des projets adaptés à votre entreprise.',
    lead: 'Vous cherchez des projets qui correspondent à votre métier, à votre secteur et à votre planning. Celexia recherche et qualifie les demandes de particuliers, puis vous transmet les informations pour préparer votre devis.',
    summary: 'Celexia est un apporteur d’affaires pour les artisans du bâtiment en France. Nous finançons la recherche de projets et vérifions l’identité du particulier, son besoin, son budget, sa zone et son calendrier. L’artisan reste responsable de son devis et de sa relation client. Notre commission intervient uniquement après la signature du chantier et la réception de l’acompte.',
    sections: [
      {
        id: 'role',
        title: 'Quel est le rôle d’un apporteur d’affaires dans le BTP ?',
        paragraphs: [
          'Dans le fonctionnement de Celexia, l’apport d’affaires consiste à rapprocher un projet de travaux d’une entreprise capable de le réaliser. Notre travail se situe en amont de votre devis : rechercher les projets, comprendre la demande et vérifier qu’elle correspond à votre activité.',
          'Vous prenez ensuite directement contact avec le particulier. Vous vérifiez les conditions techniques, décidez de la solution adaptée et fixez votre prix. Celexia ne réalise pas les travaux et ne chiffre pas à votre place. Cette répartition permet de savoir qui fait quoi dès le départ.',
        ],
        table: {
          headers: ['Celexia prépare', 'Votre entreprise prend la main'],
          rows: [
            ['La recherche et la qualification du projet', 'Le contact avec le particulier et l’étude technique'],
            ['Les informations sur le besoin, le budget et le calendrier', 'Le chiffrage, le devis et son explication au client'],
            ['La vérification du métier et de la zone concernés', 'L’organisation et la réalisation du chantier'],
          ],
        },
      },
      {
        id: 'qualification',
        title: 'Une demande qualifiée : quelles informations recevez-vous ?',
        paragraphs: [
          'Un nom et un numéro de téléphone ne suffisent pas pour préparer un échange utile. Avant de vous transmettre une demande, nous vérifions les éléments qui permettent de comprendre le projet et d’évaluer sa cohérence avec votre entreprise.',
          'La qualification prépare votre prise de contact. Elle ne remplace pas votre visite ni votre analyse technique : l’état du bâtiment, les accès, les contraintes du terrain ou les choix définitifs du client restent à examiner avec lui.',
        ],
        items: [
          'Identité : qui porte le projet, décide et peut être joint ?',
          'Projet : quels travaux le particulier souhaite-t-il réaliser ?',
          'Budget : son enveloppe est-elle cohérente avec le besoin annoncé ?',
          'Zone : le chantier se situe-t-il dans votre secteur d’intervention ?',
          'Calendrier : à quelle échéance les travaux sont-ils envisagés ?',
        ],
      },
      {
        id: 'metiers',
        title: 'Des projets pour quatre métiers du bâtiment',
        paragraphs: [
          'Celexia accompagne les constructeurs de piscines, les couvreurs, les entreprises de façade et d’isolation thermique par l’extérieur, ainsi que les maçons. Le partenariat concerne les entreprises intervenant en France, avec une zone définie selon leur organisation.',
          'Le périmètre est concret : construction ou rénovation lourde de piscine, réfection de toiture, ravalement ou isolation de façade, extension et travaux structurants de maçonnerie. Préciser vos spécialités est donc aussi utile que donner le nom de votre métier. Un couvreur n’accepte pas nécessairement les mêmes matériaux ou les mêmes configurations qu’un autre.',
          'Nous cherchons à comprendre les chantiers que vous souhaitez réellement prendre en charge. Les prestations que vous ne réalisez pas et les secteurs trop éloignés comptent autant que vos possibilités.',
        ],
      },
      {
        id: 'remuneration',
        title: 'Quand l’apporteur d’affaires est-il rémunéré ?',
        paragraphs: [
          'Chez Celexia, il n’y a aucun frais d’entrée, aucun abonnement et aucun budget de recherche à avancer. Nous prenons en charge la recherche et la qualification. La rémunération repose sur une commission, uniquement une fois votre chantier signé et votre acompte reçu.',
          'Le fonctionnement de la commission se précise de vive voix. Cet échange vous permet de comprendre le modèle et de poser vos questions avant d’envisager un partenariat. Vous conservez la maîtrise de votre devis, de vos prix et de vos échanges avec le client.',
        ],
      },
      {
        id: 'premier-echange',
        title: 'Commencer par votre entreprise et votre capacité réelle',
        paragraphs: [
          'Un apport d’affaires est utile si votre équipe peut étudier et réaliser de nouveaux projets. Avant de présenter votre entreprise, identifiez votre zone, les travaux recherchés et la place disponible dans votre planning. Une capacité bien décrite aide à préparer un échange concret.',
          'Le formulaire Celexia recueille votre activité, votre organisation et vos coordonnées. L’équipe Celexia analyse votre demande puis revient vers vous pour en parler. Vous ne créez pas de compte et vous ne signez aucun contrat dans le formulaire.',
        ],
      },
    ],
    faq: [
      {
        q: 'Celexia s’adresse-t-elle aux artisans ou aux particuliers ?',
        a: 'Cette page et le formulaire de candidature s’adressent aux entreprises du bâtiment qui souhaitent étudier un partenariat. Les projets recherchés et qualifiés par Celexia sont des projets de travaux de particuliers.',
      },
      {
        q: 'Une demande qualifiée est-elle un chantier déjà signé ?',
        a: 'Non. La demande vous donne les informations pour échanger avec le particulier et préparer votre devis. La visite, le chiffrage et la décision du client viennent ensuite. La commission Celexia intervient uniquement après signature et réception de l’acompte.',
      },
      {
        q: 'Puis-je présenter mon entreprise si ma zone est limitée ?',
        a: 'Oui. Indiquez le secteur dans lequel vous pouvez intervenir. La cohérence entre la localisation des projets et votre organisation fait partie des éléments étudiés par l’équipe Celexia.',
      },
    ],
    related: ['/guides/demande-qualifiee-btp', '/partenariat-artisans-btp', '/guides/commission-apporteur-affaires-btp', '/guides/trouver-chantiers-artisans'],
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-07',
  },
  'partenariat-artisans-btp': {
    kind: 'service',
    path: '/partenariat-artisans-btp',
    breadcrumbLabel: 'Partenariat artisans',
    title: 'Partenariat artisans BTP : présenter son entreprise | Celexia',
    description: 'Artisan du bâtiment : présentez votre métier, votre zone et votre capacité à Celexia. Un partenariat à la commission, après signature et acompte.',
    eyebrow: 'Partenariat · Artisans',
    h1: 'Un partenariat BTP adapté à votre entreprise artisanale.',
    lead: 'Votre métier, votre secteur et la place dans votre planning sont le point de départ. Présentez votre entreprise à Celexia pour étudier ensemble l’apport de nouveaux projets de travaux.',
    summary: 'Le partenariat Celexia s’adresse aux entreprises de piscine, couverture, façade et ITE, et maçonnerie en France. Celexia recherche et qualifie des projets de particuliers ; l’artisan établit ses devis et réalise les travaux. La candidature permet à l’équipe Celexia d’étudier l’activité et la capacité de l’entreprise, avant un échange sur le fonctionnement du partenariat.',
    sections: [
      {
        id: 'profil',
        title: 'À qui ce partenariat s’adresse-t-il ?',
        paragraphs: [
          'Vous dirigez une entreprise du bâtiment ou vous êtes chargé de son développement. Vous pouvez accueillir de nouveaux chantiers et vous souhaitez consacrer vos échanges commerciaux à des projets mieux définis. Celexia étudie les candidatures d’entreprises dans quatre métiers : piscine, couverture, façade et isolation par l’extérieur, maçonnerie.',
          'La taille de votre équipe ne raconte pas tout. Votre spécialité, votre façon de travailler et votre capacité à prendre en charge un nouveau projet sont essentielles. Une entreprise avec peu de salariés peut avoir une organisation très précise ; une équipe plus importante peut être déjà mobilisée sur plusieurs chantiers.',
          'Présentez votre situation telle qu’elle est. L’objectif du formulaire est de comprendre votre activité et d’ouvrir une discussion utile, avec des informations cohérentes sur ce que vous pouvez réaliser.',
        ],
      },
      {
        id: 'cadre',
        title: 'Définir les bons projets avant de parler de volume',
        paragraphs: [
          'Le partenariat commence par un périmètre. Quelles prestations réalisez-vous avec votre équipe ? Dans quelles communes ou quels départements intervenez-vous ? Quels déplacements restent compatibles avec votre organisation ? Les réponses permettent de relier votre savoir-faire à des besoins concrets.',
          'Précisez aussi les travaux que vous préférez et les limites de votre activité. Pour la couverture, il peut s’agir des matériaux ou des configurations de toiture. Pour la piscine, des techniques de construction. Pour la façade et la maçonnerie, des types de bâtiments et des travaux que vous prenez en charge.',
          'La disponibilité mérite le même niveau de précision. Distinguez le nombre de projets que vous réalisez habituellement et la capacité supplémentaire que vous pourriez accepter. Un planning chargé aujourd’hui et une disponibilité à venir sont deux informations différentes.',
        ],
      },
      {
        id: 'repartition',
        title: 'Une répartition claire du travail',
        paragraphs: [
          'Celexia finance la recherche des projets et en vérifie les informations principales : identité, besoin, budget, zone et calendrier. Cette préparation vous donne un point de départ pour contacter le particulier et approfondir sa demande.',
          'Votre entreprise conserve la relation client. Vous étudiez les contraintes techniques, préparez le devis, choisissez vos prix et organisez les travaux. Les informations transmises en amont ne remplacent pas votre diagnostic professionnel sur place.',
          'Le modèle ne comporte aucun frais d’entrée, aucun abonnement et aucun budget de recherche à avancer. La commission intervient uniquement après la signature du chantier et la réception de votre acompte. Nous vous en présentons les modalités au téléphone.',
        ],
      },
      {
        id: 'preparer',
        title: 'Ce qu’il faut préparer pour votre candidature',
        paragraphs: [
          'Le formulaire rassemble les éléments nécessaires pour comprendre votre entreprise avant de vous recontacter. Vous pouvez préparer les informations ci-dessous afin de le remplir avec des réponses précises.',
          'Le chiffre d’affaires, l’effectif et le rythme de vos chantiers donnent un contexte à votre candidature. Ils se lisent ensemble avec votre métier et votre capacité disponible : une activité de piscine ne s’organise pas comme une activité de maçonnerie.',
        ],
        items: [
          'Votre entreprise : son nom, son année de création, son activité et sa zone d’intervention.',
          'Votre organisation : votre effectif et la tranche de chiffre d’affaires correspondant à votre activité.',
          'Votre capacité : le nombre habituel de chantiers par mois et ceux que vous pourriez accueillir en plus.',
          'Votre interlocuteur : son rôle, son ancienneté dans l’entreprise, son email et son téléphone.',
          'Le contexte utile : vos spécialités, vos disponibilités et les particularités à connaître pour échanger.',
        ],
      },
      {
        id: 'suite',
        title: 'Que se passe-t-il après l’envoi du formulaire ?',
        paragraphs: [
          'Votre demande est transmise à l’équipe Celexia pour analyse. Nous examinons les informations sur votre métier, votre secteur et votre capacité à accueillir des projets. Nous revenons ensuite vers vous pour discuter de votre candidature.',
          'L’échange permet de préciser ce que vous attendez du partenariat et de présenter le fonctionnement de Celexia. Préparez vos questions sur les informations transmises, la prise de contact avec le particulier et la rémunération.',
          'La candidature n’est pas une inscription à un espace client. Elle ne crée aucun compte et ne comporte aucune signature de contrat. Elle constitue une première présentation de votre entreprise.',
        ],
      },
    ],
    faq: [
      {
        q: 'Le partenariat concerne-t-il toute la France ?',
        a: 'Celexia étudie les entreprises intervenant en France. Votre zone réelle d’intervention est renseignée dans la candidature et fait partie des éléments examinés. Vous n’avez pas besoin d’intervenir partout en France pour présenter votre entreprise.',
      },
      {
        q: 'Dois-je avoir une grande équipe pour candidater ?',
        a: 'Le formulaire permet de présenter votre effectif et votre organisation. L’équipe Celexia étudie ces informations avec votre métier, votre secteur et votre capacité supplémentaire. Décrivez votre entreprise et vos possibilités réelles.',
      },
      {
        q: 'L’envoi de la candidature déclenche-t-il une facturation ?',
        a: 'Non. Présenter votre entreprise est gratuit. Le modèle Celexia ne comporte aucun frais d’entrée ni abonnement. Notre commission intervient uniquement lorsqu’un chantier apporté est signé et que vous avez reçu l’acompte.',
      },
    ],
    related: ['/apporteur-affaires-btp', '/guides/trouver-chantiers-artisans', '/guides/commission-apporteur-affaires-btp'],
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-07',
  },
  'commission-apporteur-affaires-btp': {
    kind: 'article',
    path: '/guides/commission-apporteur-affaires-btp',
    breadcrumbLabel: 'Commission et pourcentage',
    title: 'Apporteur d’affaires BTP : pourcentage et commission | Celexia',
    description: 'Pourcentage, base de calcul et déclenchement : les questions à poser à un apporteur d’affaires BTP. Chez Celexia, commission après signature et acompte.',
    eyebrow: 'Guide · Commission',
    h1: 'Apporteur d’affaires BTP : comment évaluer le pourcentage et la commission ?',
    lead: 'Avant de comparer un pourcentage, comprenez ce qu’il rémunère, à quel montant il s’applique et ce qui déclenche la commission. Pour votre entreprise, ces questions comptent autant que le taux lui-même.',
    summary: 'Pour évaluer la commission d’un apporteur d’affaires BTP, un artisan doit examiner le service fourni, la base de calcul et la condition de facturation. Chez Celexia, la commission intervient uniquement après la signature du chantier et la réception de l’acompte, sans frais d’entrée ni abonnement. Le pourcentage et ses modalités sont présentés de vive voix.',
    sections: [
      {
        id: 'pourcentage',
        title: 'Quel pourcentage prévoir pour un apporteur d’affaires BTP ?',
        paragraphs: [
          'Si vous cherchez un pourcentage pour comparer des partenaires, commencez par demander une explication complète du modèle proposé. Un taux pris seul ne dit pas quelles tâches sont réalisées, sur quelle base il sera appliqué ni à quel moment une commission sera due.',
          'Celexia présente son pourcentage au téléphone. Vous pouvez ainsi poser vos questions à partir de votre activité et de vos projets. Cette page explique les points à examiner pour préparer cet échange ; elle ne publie pas de barème.',
          'Votre point de comparaison doit rester concret : que recevez-vous pour étudier le chantier, quel travail reste à votre charge et comment la rémunération s’articule-t-elle avec la signature du client ? Une présentation claire de ces éléments facilite votre décision.',
        ],
      },
      {
        id: 'service',
        title: 'Que rémunère la commission ?',
        paragraphs: [
          'Demandez d’abord ce qui est fait avant la transmission d’une demande. La recherche du projet, la prise de connaissance du besoin et la vérification des informations constituent des tâches différentes de votre visite technique et de votre devis.',
          'Chez Celexia, nous finançons la recherche et qualifions chaque demande sur cinq points : identité du particulier, nature du projet, budget, zone et calendrier. Vous disposez de ces informations pour commencer votre échange et préparer votre étude.',
          'Vous gardez ensuite la main sur la relation client, le chiffrage et la réalisation. Lorsque vous évaluez un partenariat, regardez donc aussi le temps nécessaire pour prendre contact, visiter, vérifier les contraintes et construire votre proposition. La qualité des informations de départ a une utilité pratique pour ce travail.',
        ],
      },
      {
        id: 'base',
        title: 'Sur quelle base le pourcentage est-il calculé ?',
        paragraphs: [
          'Avant de comparer deux propositions, demandez quel montant sert de base au calcul. Faites préciser le traitement de la TVA, le périmètre des travaux concernés et la façon dont une modification du devis serait prise en compte. Deux pourcentages ne sont comparables que si vous comprenez ce à quoi ils s’appliquent.',
          'Préparez un exemple tiré de votre activité pour en discuter : un type de chantier que vous réalisez régulièrement, avec les postes qui composent habituellement votre devis. L’objectif est de comprendre le calcul et les informations dont chaque partie aura besoin, sans se limiter à un taux annoncé.',
          'Ces questions sont à poser lors de votre échange avec Celexia. Les modalités de rémunération vous sont présentées de vive voix.',
        ],
      },
      {
        id: 'declenchement',
        title: 'À quel moment la commission se déclenche-t-elle ?',
        paragraphs: [
          'Distinguez la transmission d’une demande, la visite, l’envoi du devis, la signature et la réception de l’acompte. Il s’agit d’étapes différentes. Comprendre celle qui déclenche la rémunération permet d’évaluer le modèle proposé à votre entreprise.',
          'Chez Celexia, la commission intervient uniquement lorsque le chantier est signé et que vous avez reçu l’acompte. Une demande transmise ne constitue donc pas, à elle seule, le déclenchement de notre commission.',
          'Il n’y a aucun frais d’entrée, aucun abonnement et aucun budget de recherche à avancer. Ce fonctionnement est un point à examiner avec les autres éléments de l’offre, notamment la qualification du projet et le travail que vous conservez auprès du client.',
        ],
      },
      {
        id: 'comparer',
        title: 'Les questions à poser avant de choisir votre partenaire',
        paragraphs: [
          'Une comparaison utile tient sur une fiche simple. Notez les réponses pour comprendre l’ensemble du service et repérer les points à clarifier pendant l’appel.',
        ],
        table: {
          headers: ['Point à examiner', 'Question à poser'],
          rows: [
            ['Travail réalisé en amont', 'Quelles informations sur le projet sont vérifiées avant la transmission ?'],
            ['Adéquation avec votre entreprise', 'Comment mon métier, ma zone et ma disponibilité sont-ils pris en compte ?'],
            ['Base de calcul', 'À quel montant la commission s’applique-t-elle et comment est-il défini ?'],
            ['Déclenchement', 'Quelle étape du chantier rend la commission applicable ?'],
            ['Coûts à avancer', 'Y a-t-il des frais d’entrée, un abonnement ou un budget de recherche ?'],
            ['Relation avec le particulier', 'Qui prépare le devis, fixe le prix et échange avec le client ?'],
          ],
        },
      },
      {
        id: 'rentabilite',
        title: 'Raisonner à l’échelle du chantier',
        paragraphs: [
          'Pour apprécier l’intérêt d’un projet, mettez la commission en regard de votre propre chiffrage : matériaux, main-d’œuvre, déplacements, moyens nécessaires et temps d’étude. Une demande compatible avec votre spécialité et votre secteur mérite une analyse différente d’un projet qui désorganise votre équipe.',
          'Le bon échange commence donc par votre entreprise. En présentant votre métier, votre zone et votre capacité à Celexia, vous nous donnez le contexte nécessaire pour parler du partenariat et de sa rémunération.',
        ],
      },
      {
        id: 'comparer-modeles',
        title: 'Commission, achat de contact ou abonnement : comment comparer ?',
        paragraphs: [
          'Commencez par identifier ce qui déclenche le paiement. Un contact reçu, une période de service et un chantier signé ne correspondent pas à la même étape de votre activité. Comparez ensuite le travail inclus et les informations disponibles avant votre prise de contact.',
          'Le tableau ci-dessous sert à préparer vos questions. Les offres au contact ou par abonnement varient selon le prestataire : vérifiez leur fonctionnement précis. Pour Celexia, la règle est connue : la commission intervient uniquement après signature du chantier et réception de votre acompte.',
        ],
        table: {
          headers: ['Modèle examiné', 'Déclenchement à clarifier', 'Questions utiles'],
          rows: [
            ['Paiement au contact', 'À quelle étape le contact est-il facturé : réception, validation ou rendez-vous ?', 'Quelles informations ont été vérifiées ? Quel travail reste-t-il avant de pouvoir chiffrer ?'],
            ['Abonnement', 'Quelle période et quel service le paiement couvre-t-il ?', 'Quelles prestations sont incluses et comment les demandes correspondent-elles à votre métier et à votre secteur ?'],
            ['Commission Celexia', 'Uniquement après chantier signé et acompte reçu.', 'Comment les projets sont-ils qualifiés et comment la commission s’applique-t-elle à votre entreprise ? Nous en parlons de vive voix.'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Où connaître le pourcentage de commission de Celexia ?',
        a: 'Nous vous le présentons de vive voix lors de notre échange. Vous pouvez commencer par présenter votre entreprise via le formulaire de candidature. L’équipe Celexia analyse votre demande puis revient vers vous.',
      },
      {
        q: 'Une commission est-elle due pour une simple demande de devis ?',
        a: 'Chez Celexia, non. Notre commission intervient uniquement lorsque le chantier est signé et que votre acompte a été reçu. La transmission d’une demande ou l’envoi d’un devis ne suffisent pas à déclencher la commission.',
      },
      {
        q: 'Qui fixe le prix des travaux ?',
        a: 'Votre entreprise fixe ses prix et établit son devis. Vous échangez directement avec le particulier, réalisez l’étude technique et organisez les travaux.',
      },
    ],
    related: ['/apporteur-affaires-btp', '/partenariat-artisans-btp', '/guides/trouver-chantiers-artisans'],
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-07',
  },
  'trouver-chantiers-artisans': {
    kind: 'article',
    path: '/guides/trouver-chantiers-artisans',
    breadcrumbLabel: 'Trouver des chantiers',
    title: 'Trouver des chantiers sans abonnement : guide artisan | Celexia',
    description: 'Artisans BTP : comment trouver des chantiers sans abonnement et choisir les projets adaptés ? Méthode, qualification et apport d’affaires Celexia.',
    eyebrow: 'Guide · Développement de votre activité',
    h1: 'Trouver des chantiers sans abonnement, à la mesure de votre entreprise.',
    lead: 'Recommandations, relations entre métiers et apport d’affaires : plusieurs pistes permettent de développer votre activité. Voici comment les aborder en tenant compte de votre secteur, de votre planning et du travail nécessaire avant de signer.',
    summary: 'Un artisan peut rechercher des chantiers sans abonnement grâce aux recommandations de ses clients, aux relations avec des entreprises de métiers complémentaires ou à un apporteur d’affaires rémunéré au résultat. Chaque piste demande du temps ou entraîne un coût à examiner. Chez Celexia, la recherche et la qualification sont financées par nos soins ; la commission intervient après chantier signé et acompte reçu.',
    sections: [
      {
        id: 'pistes',
        title: 'Où chercher des chantiers sans abonnement ?',
        paragraphs: [
          'Commencez par les relations déjà construites autour de votre entreprise. À la fin d’un chantier, un client satisfait peut parler de votre travail à son entourage. Indiquez clairement les travaux que vous réalisez et votre secteur pour faciliter une recommandation pertinente.',
          'Les entreprises de métiers complémentaires constituent une autre piste. Un projet de façade, de toiture ou d’extension peut faire apparaître un besoin dans un autre corps de métier. Présentez vos spécialités aux professionnels que vous connaissez et clarifiez le rôle de chacun avant d’organiser une mise en relation.',
          'Vous pouvez aussi étudier un partenariat avec un apporteur d’affaires. Vérifiez alors ce qui est préparé avant la transmission du projet, le coût du service et son déclenchement. Un service sans abonnement peut rester payant : il faut distinguer l’absence de mensualité et la rémunération liée à une affaire.',
        ],
        table: {
          headers: ['Piste à explorer', 'Travail à prévoir dans votre entreprise'],
          rows: [
            ['Recommandations de clients', 'Entretenir la relation, présenter vos prestations et qualifier la nouvelle demande.'],
            ['Relations avec des métiers complémentaires', 'Expliquer votre périmètre et convenir de la manière de travailler ensemble.'],
            ['Apport d’affaires Celexia', 'Prendre contact avec le particulier, vérifier le projet sur le plan technique et établir votre devis ; commission après signature et acompte.'],
          ],
        },
      },
      {
        id: 'bons-projets',
        title: 'Définir les chantiers que vous souhaitez vraiment réaliser',
        paragraphs: [
          '« Trouver des chantiers » peut désigner des besoins très différents : compléter un planning, développer une spécialité ou préparer l’activité des prochains mois. Commencez par décrire votre objectif avec les travaux que vous savez réaliser et que vous souhaitez prendre en charge.',
          'Soyez plus précis que votre seul métier. Pour une entreprise de couverture, réfection complète et dépannage ne mobilisent pas la même organisation. Pour un pisciniste, construction, rénovation lourde et entretien ne correspondent pas aux mêmes projets. Pour la façade ou la maçonnerie, les matériaux, les accès et la nature des travaux peuvent aussi orienter vos choix.',
          'Une liste claire de vos prestations facilite les échanges avec les particuliers comme avec un apporteur d’affaires. Elle évite de passer du temps à approfondir des demandes qui sortent de votre activité.',
        ],
      },
      {
        id: 'zone',
        title: 'Relier votre zone d’intervention à votre organisation',
        paragraphs: [
          'Votre zone ne se résume pas à une distance autour de l’entreprise. Prenez en compte les trajets de l’équipe, l’approvisionnement, les visites de préparation et le suivi nécessaire pendant les travaux. Un déplacement acceptable pour un chantier important peut être moins pertinent pour une intervention plus courte.',
          'Préparez une liste des secteurs où vous intervenez habituellement et des zones à étudier selon le projet. Cette distinction vous permet de répondre précisément lorsqu’un partenaire vous demande où rechercher des chantiers pour votre entreprise.',
        ],
      },
      {
        id: 'capacite',
        title: 'Évaluer la place disponible avant d’ajouter des demandes',
        paragraphs: [
          'Regardez les chantiers déjà signés, ceux en cours d’étude et les moyens disponibles pour en démarrer de nouveaux. L’objectif est de distinguer votre rythme habituel de votre capacité supplémentaire.',
          'Pensez aussi au temps commercial : une personne doit pouvoir rappeler le particulier, organiser une visite et établir le devis. Une équipe disponible pour les travaux n’implique pas toujours une disponibilité immédiate pour toutes ces étapes.',
          'Lorsque vous présentez votre entreprise à Celexia, votre effectif, votre nombre habituel de chantiers et votre capacité à en accueillir davantage apportent ce contexte. Des réponses fidèles à votre organisation sont plus utiles qu’un objectif de volume isolé.',
        ],
      },
      {
        id: 'qualifier',
        title: 'Vérifier les informations utiles avant la visite',
        paragraphs: [
          'Une demande mérite d’abord un échange sur le projet. Les informations de départ vous aident à préparer votre prise de contact et à savoir quelles questions techniques approfondir. Vous pourrez ensuite confirmer les contraintes sur place.',
          'Chez Celexia, ces cinq points sont vérifiés avant la transmission de la demande. La qualification prépare votre travail ; votre expertise reste nécessaire pour vérifier la faisabilité et établir une proposition adaptée.',
        ],
        items: [
          'La personne : qui porte le projet et comment la joindre ?',
          'Les travaux : quel est le besoin et quel résultat le particulier attend-il ?',
          'Le budget : l’enveloppe annoncée est-elle cohérente avec les travaux envisagés ?',
          'Le lieu : l’adresse se trouve-t-elle dans votre secteur d’intervention ?',
          'L’échéance : quand les travaux sont-ils souhaités et est-ce compatible avec votre planning ?',
        ],
      },
      {
        id: 'suivi',
        title: 'Suivre une demande jusqu’à la décision du client',
        paragraphs: [
          'Conservez un suivi simple pour chaque projet : coordonnées, besoin, dernier échange, prochaine étape et personne responsable dans l’entreprise. Il doit vous permettre de retrouver le contexte sans recommencer toute la discussion.',
          'Après la visite, expliquez le périmètre de votre devis et identifiez les questions qui restent ouvertes. Le particulier a-t-il besoin de préciser un choix technique ou de revoir l’étendue des travaux ? Un suivi concret permet de distinguer une décision en attente d’un projet qui ne correspond plus à votre activité.',
          'Votre entreprise garde la main sur ce travail dans le partenariat Celexia. Vous fixez vos prix, établissez vos devis et échangez directement avec le client.',
        ],
      },
      {
        id: 'partenaire',
        title: 'Quand faire appel à un apporteur d’affaires ?',
        paragraphs: [
          'Un apporteur d’affaires peut être pertinent lorsque vous avez une capacité disponible et souhaitez recevoir des projets préparés en amont de votre intervention. Le partenariat doit être étudié avec votre métier, votre secteur et votre façon de chiffrer.',
          'Celexia finance la recherche et la qualification des projets de particuliers en piscine, couverture, façade et ITE, et maçonnerie. Vous n’avancez aucun budget de recherche : il n’y a ni frais d’entrée ni abonnement. La commission intervient uniquement après la signature du chantier et la réception de votre acompte.',
          'Pour commencer, présentez votre entreprise et vos possibilités réelles. L’équipe Celexia analyse votre candidature puis revient vers vous pour échanger sur le partenariat et sa rémunération.',
        ],
      },
    ],
    faq: [
      {
        q: 'Comment trouver des chantiers sans abonnement avec Celexia ?',
        a: 'Celexia finance la recherche et la qualification des projets. Vous pouvez présenter votre entreprise pour faire étudier un partenariat. Le modèle repose sur une commission après signature du chantier et réception de l’acompte, sans frais d’entrée ni abonnement.',
      },
      {
        q: 'Quelles informations donner pour recevoir des projets adaptés ?',
        a: 'Précisez vos prestations, votre zone d’intervention, votre effectif, votre rythme de chantiers et votre capacité supplémentaire. Ces éléments permettent de comprendre le type de projet que votre entreprise peut prendre en charge.',
      },
      {
        q: 'Puis-je déléguer la réalisation du devis à Celexia ?',
        a: 'Non. Celexia recherche et qualifie les projets. Votre entreprise réalise l’étude technique, chiffre les travaux et établit le devis. Vous conservez la relation avec le particulier.',
      },
    ],
    related: ['/partenariat-artisans-btp', '/apporteur-affaires-btp', '/guides/commission-apporteur-affaires-btp'],
    publishedAt: '2026-11-07',
    updatedAt: '2026-11-07',
  },
};

export const SEO_PAGE_LIST = Object.values(SEO_PAGES);
export const getSeoPage = (slug) => SEO_PAGES[slug] || null;
