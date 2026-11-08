export const REQUEST_FOLLOWUP_GUIDE = {
  kind: 'article',
  path: '/guides/suivi-demandes-devis-artisan',
  breadcrumbLabel: 'Suivre ses demandes et devis',
  title: 'Suivi des demandes et devis pour artisans | Celexia',
  description: 'Artisans : organisez vos demandes de travaux, visites, devis et relances. Un tableau de suivi pour décider selon vos projets et votre capacité.',
  eyebrow: 'Guide · Organisation commerciale',
  h1: 'Artisan : comment suivre vos demandes de travaux et vos devis ?',
  lead: 'Visite à préparer, devis à expliquer, réponse attendue : chaque demande appelle une action différente. Voici une méthode pour suivre chaque projet et savoir qui doit intervenir.',
  summary: 'Pour suivre vos demandes de travaux, associez à chaque projet un statut, un responsable et une prochaine action datée. Séparez contact, visite, devis, retour client, signature et acompte encaissé. Ce suivi organise le travail commercial ; il ne garantit aucun chantier.',
  sections: [
    {
      id: 'statuts',
      title: 'Définir des étapes que toute l’équipe comprend',
      paragraphs: [
        'Évitez le seul statut « en cours », qui peut désigner un particulier injoignable ou un devis prêt à signer. Actualisez le statut après un fait observable, en conservant la dernière action.',
      ],
      items: [
        'Contact : distinguez une tentative de contact et un échange réellement effectué.',
        'Visite : séparez le rendez-vous prévu de la visite réalisée et notez les éléments techniques manquants.',
        'Devis : distinguez la préparation, l’envoi et les précisions demandées par le client.',
        'Retour client : indiquez si le projet reste à l’étude, doit être ajusté, est reporté ou refusé.',
        'Signature : enregistrez la confirmation du chantier, au-delà d’un simple intérêt exprimé.',
        'Acompte : suivez son encaissement effectif, distinct de la signature.',
      ],
    },
    {
      id: 'tableau',
      title: 'Quelles colonnes mettre dans un tableau de suivi des devis ?',
      paragraphs: [
        'France Num recommande de suivre séparément rendez-vous, devis et ventes. Le tableau proposé ici traduit cette distinction en tâches concrètes pour une entreprise artisanale. Utilisez une ligne par projet, même si votre devis connaît plusieurs versions.',
      ],
      table: {
        headers: ['Colonne', 'Information à noter', 'Utilité'],
        rows: [
          ['Référence du projet', 'Un repère interne lié au dossier de travaux.', 'Retrouver le bon dossier sans le recréer.'],
          ['Prestation et secteur', 'Nature des travaux et zone d’intervention.', 'Vérifier l’adéquation avec votre activité.'],
          ['Étape actuelle', 'Contact, visite, devis, retour, signature ou acompte.', 'Savoir ce qui est réellement réalisé.'],
          ['Dernier échange', 'Date et résumé factuel du point discuté.', 'Reprendre la conversation dans son contexte.'],
          ['Question en attente', 'Information ou décision nécessaire pour avancer.', 'Préparer une réponse utile.'],
          ['Prochaine action', 'Tâche précise, personne responsable et date prévue.', 'Éviter une attente sans suite définie.'],
          ['Issue du projet', 'Suite donnée, report ou refus confirmé et motif connu.', 'Distinguer une décision d’une absence de réponse.'],
        ],
      },
    },
    {
      id: 'priorites',
      title: 'Choisir les dossiers à traiter en priorité',
      paragraphs: [
        'Commencez par les actions convenues avec le client et les informations que vous devez fournir. Regardez ensuite les projets compatibles avec votre métier, votre secteur et votre planning. L’urgence ne rend pas adaptée une demande qui sort de votre activité.',
        'Identifiez ce qui permettrait d’avancer : obtenir une précision, préparer la visite ou expliquer une solution technique. Pour un projet reporté, notez ce qui doit changer avant sa reprise. Distinguez-le des devis qui attendent une réponse maintenant.',
      ],
    },
    {
      id: 'relances',
      title: 'Relancer un devis avec une raison précise',
      paragraphs: [
        'Préparez votre suivi lors de l’échange : quel point le particulier souhaite-t-il examiner, et quand prévoit-il de revenir vers vous ? Appuyez votre prochain contact sur ce repère, sans fréquence universelle de relance.',
        'Reprenez le sujet resté ouvert et proposez une aide concrète. Par exemple, après une question sur les travaux prévus : « Souhaitez-vous que nous reprenions ensemble la partie du devis concernant la préparation du support ? » Adaptez votre message au point discuté avec le particulier.',
        'Un message identique répété sans information nouvelle ne clarifie pas la décision. Si le particulier demande de suspendre les échanges ou confirme un refus, mettez le dossier à jour. Une absence de réponse reste une absence de réponse ; elle ne prouve ni l’acceptation ni le refus du devis.',
      ],
    },
    {
      id: 'capacite',
      title: 'Vérifier sa capacité avant d’accueillir davantage de demandes',
      paragraphs: [
        'Examinez ensemble les visites à organiser, les devis à terminer et les chantiers déjà prévus. Qui peut prendre les rendez-vous ? Qui peut chiffrer ? Quelle équipe pourra réaliser les travaux si le client donne suite ?',
        'Si les devis attendent votre étude technique, davantage de demandes ne résoudront pas cette étape. Ajustez votre capacité aux tâches que vous pouvez assurer. Pour les projets reportés ou refusés, relevez les motifs connus : secteur, prestation, calendrier ou choix du client. Utilisez-les pour préciser les demandes adaptées à votre entreprise.',
      ],
    },
    {
      id: 'celexia',
      title: 'Qui assure le suivi dans un partenariat Celexia ?',
      paragraphs: [
        'Celexia prépare et qualifie les demandes avant transmission. Votre entreprise garde la relation client, réalise l’étude technique, fixe ses prix et suit ses devis. Ce guide concerne votre organisation interne ; il ne décrit pas un service de relance Celexia.',
        'La rémunération de Celexia intervient uniquement après chantier signé et acompte encaissé. Présentez votre métier, votre secteur et votre capacité supplémentaire à l’équipe Celexia pour étude de votre candidature.',
      ],
    },
  ],
  faq: [
    {
      q: 'Faut-il un logiciel particulier pour suivre ses devis ?',
      a: 'Un tableau partagé peut convenir si chacun tient les statuts et les prochaines actions à jour. Examinez un outil dédié si les échanges deviennent difficiles à retrouver.',
    },
    {
      q: 'Quand relancer un devis de travaux ?',
      a: 'Appuyez-vous sur le moment convenu avec le particulier et sur la question restée en attente. Adaptez le suivi au projet et aux préférences exprimées, sans appliquer automatiquement la même séquence à tous les dossiers.',
    },
  ],
  sourceNote: 'Conseils éditoriaux de l’équipe Celexia, sans mesure d’efficacité ni garantie de signature. France Num distingue rendez-vous, devis et ventes ; notre tableau et notre méthode sont à adapter à votre organisation. Source consultée le 8 novembre 2026.',
  sources: [
    { label: 'France Num — suivre les rendez-vous, les devis et les ventes', path: 'https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/outils-de-developpement-des-ventes/prospection' },
    { label: 'Celexia — distinguer demande qualifiée, devis et chantier signé', path: '/guides/demande-qualifiee-btp' },
    { label: 'Celexia — rôle de l’entreprise dans le partenariat', path: '/partenariat-artisans-btp' },
  ],
  related: ['/guides/demande-qualifiee-btp', '/partenariat-artisans-btp', '/apporteur-affaires-btp'],
  publishedAt: '2026-11-08',
  updatedAt: '2026-11-08',
};
