import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Automatisation = () => {
  usePageMeta({
    title: 'Automatisation Complète pour Artisans | CRM + Workflows | Agence Celexia',
    description: 'Automatisez tout : devis, facturation, relances, rappels RDV, collecte avis. CRM artisan connecté à vos outils. Économisez un temps précieux.',
    canonical: 'https://agencecelexia.fr/services/automatisation'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/services/automatisation/#service',
    'name': 'Automatisation Complète pour Artisans',
    'description': 'Service d\'automatisation des processus administratifs pour artisans. CRM artisan, devis automatiques, relances intelligentes, rappels RDV, facturation et collecte d\'avis automatisés.',
    'url': 'https://agencecelexia.fr/services/automatisation',
    'serviceType': 'Automatisation de processus métier',
    'category': 'Marketing Digital',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Artisans et professionnels du bâtiment' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'CRM artisan',
      desc: 'Gestion centralisée : prospects, devis, chantiers, facturation, relances'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Devis automatiques',
      desc: 'Génération et envoi automatique de devis depuis un formulaire web'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Rappels RDV automatiques',
      desc: 'SMS/Email automatique J-1 et J-7 avant chaque intervention'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Relances intelligentes',
      desc: 'Relances automatiques devis non signés, factures impayées'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Sync Google Calendar',
      desc: 'Vos RDV se créent automatiquement dans votre agenda Google'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Intégrations multiples',
      desc: 'Connecté à vos outils : Google, Brevo, Notion, Slack, Drive...'
    }
  ];

  const workflows = [
    {
      title: 'Nouveau lead → Client',
      steps: [
        'Lead remplit formulaire site web',
        'Création automatique dans CRM',
        'Email de confirmation au client',
        'Notification Slack à votre équipe',
        'Génération et envoi devis auto',
        'Relances J+3, J+7, J+14 si pas signé',
        'Si signé: création chantier + sync Google Calendar'
      ]
    },
    {
      title: 'Intervention terminée',
      steps: [
        'Vous marquez intervention "Terminée"',
        'Génération facture automatique',
        'Envoi facture par email',
        'SMS demande avis Google',
        'Relance facture J+30 si impayée',
        'Archivage documents dans Drive',
        'Stats ajoutées au dashboard'
      ]
    },
    {
      title: 'Entretien annuel',
      steps: [
        'Système détecte 11 mois après intervention',
        'Email rappel entretien avec lien réservation',
        'Si pas de réponse: relance SMS J+7',
        'Si réservation: ajout auto Google Calendar',
        'Rappel SMS J-1 de l\'intervention',
        'Après intervention: facture + demande avis'
      ]
    }
  ];

  const savings = [
    { task: 'Relances devis', before: '2h/semaine', after: 'Auto', saving: '8h/mois' },
    { task: 'Rappels RDV', before: '1h/semaine', after: 'Auto', saving: '4h/mois' },
    { task: 'Gestion avis', before: '1h/semaine', after: 'Auto', saving: '4h/mois' },
    { task: 'Saisie CRM', before: '3h/semaine', after: 'Auto', saving: '12h/mois' },
    { task: 'Facturation', before: '2h/semaine', after: '30min', saving: '6h/mois' }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Automatisation</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Automatisez Tout
            <span className="block text-violet-600">Libérez votre Temps</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            CRM artisan, devis automatiques, relances, rappels RDV, facturation, collecte d'avis.
            <strong className="block mt-2 text-gray-900">Concentrez-vous sur vos chantiers, on gère l'admin.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Automatiser mon activité
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TIME SAVINGS */}
      <section className="py-16 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-display text-2xl font-bold text-gray-900 mb-8">
            Temps économisé par tâche
          </h3>
          <div className="space-y-3">
            {savings.map((item, i) => (
              <div key={i} className="card p-4 md:p-6 border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{item.task}</h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-red-600">Avant: {item.before}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-emerald-600 font-semibold">Après: {item.after}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-violet-100 text-violet-700 font-bold text-sm whitespace-nowrap">
                    {item.saving} économisées
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block px-6 py-3 rounded-xl bg-violet-600 text-white">
              <span className="text-sm font-medium">Total: </span>
              <span className="font-display text-2xl font-bold">Gains de temps importants</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Fonctionnalités</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Un système complet pour artisans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="card p-6 border-gray-200 group hover:border-violet-200">
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center mb-4 text-violet-600
                               group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED EXPLANATION */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">En détail</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              L'automatisation : la clé pour faire grandir votre activité d'artisan sans embaucher
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              En tant qu'artisan, vous passez en moyenne <strong className="text-gray-900">15 à 20 heures par semaine</strong> sur des tâches administratives : répondre aux demandes de devis, relancer les clients, planifier les interventions, émettre des factures, suivre les paiements, demander des avis. Ce temps passé derrière un bureau, c'est du temps que vous ne passez pas sur vos chantiers — là où vous générez réellement du chiffre d'affaires.
            </p>
            <p>
              Notre solution d'automatisation vise à réduire drastiquement ce temps administratif en automatisant les tâches répétitives et à faible valeur ajoutée. L'objectif n'est pas de remplacer le contact humain, mais de l'optimiser : vous intervenez uniquement quand votre expertise est nécessaire, le reste se fait tout seul.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Un CRM conçu pour les artisans, pas pour les multinationales</h3>
            <p>
              Les CRM traditionnels (Salesforce, HubSpot) sont conçus pour des équipes commerciales de grandes entreprises. Ils sont complexes, coûteux et inadaptés aux réalités d'un artisan qui travaille seul ou avec une petite équipe. Notre CRM artisan est <strong className="text-gray-900">simple, visuel et accessible depuis votre téléphone</strong>. En un coup d'œil, vous voyez vos prospects en attente, vos devis envoyés, vos chantiers en cours et vos factures impayées.
            </p>
            <p>
              Chaque contact est enrichi automatiquement : historique des interventions, montant total facturé, avis laissé, dernière date de contact. Quand un ancien client vous appelle, vous avez immédiatement son historique complet sous les yeux. Ce niveau de connaissance client vous permet de personnaliser chaque interaction et de renforcer la relation de confiance qui fait la force de l'artisanat.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Des workflows qui travaillent pendant que vous êtes sur vos chantiers</h3>
            <p>
              Un workflow est une séquence d'actions automatiques déclenchées par un événement. Par exemple, quand un prospect remplit le formulaire de contact sur votre site : le système crée automatiquement une fiche dans votre CRM, vous envoie une notification, génère un devis pré-rempli à partir des informations fournies, et programme une relance automatique si le devis n'est pas signé sous 3 jours. Tout cela sans que vous n'ayez à lever le petit doigt.
            </p>
            <p>
              De la même manière, quand vous marquez une intervention comme terminée dans votre CRM, la facture est générée et envoyée automatiquement, un SMS de demande d'avis Google est programmé, les documents sont archivés dans votre Google Drive, et un rappel d'entretien est planifié pour 11 mois plus tard. <strong className="text-gray-900">Chaque étape du cycle client est couverte</strong>, de la première prise de contact jusqu'à la fidélisation à long terme.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Connecté à tous vos outils existants</h3>
            <p>
              Notre système s'intègre nativement avec les outils que vous utilisez déjà : Google Calendar pour votre planning, Gmail pour vos emails, Google Drive pour vos documents, et votre logiciel de facturation. Pas besoin de changer vos habitudes ni d'apprendre un nouvel outil complexe. Les données circulent automatiquement entre toutes ces applications, éliminant les doubles saisies et les erreurs manuelles.
            </p>
            <p>
              Nous utilisons la plateforme N8N en self-hosted pour construire vos workflows d'automatisation. Cette approche garantit que <strong className="text-gray-900">vos données restent chez vous</strong>, sur votre propre serveur, sans transiter par des services tiers américains. C'est un point crucial pour les artisans soucieux de la confidentialité de leurs données clients. De plus, contrairement aux solutions SaaS qui vous facturent au nombre d'exécutions, notre approche self-hosted vous offre des automatisations illimitées pour un coût fixe mensuel maîtrisé, quel que soit le volume de votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* WORKFLOWS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Workflows</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              3 exemples de workflows automatisés
            </h2>
            <p className="text-gray-600 text-lg">
              Chaque étape s'exécute automatiquement sans votre intervention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workflows.map((workflow, i) => (
              <div key={i} className="card p-6 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 text-center pb-4 border-b border-gray-100">
                  {workflow.title}
                </h3>
                <div className="space-y-3">
                  {workflow.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        {j + 1}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Intégrations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Connecté à tous vos outils
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Google Calendar', icon: '📅' },
              { name: 'Gmail', icon: '✉️' },
              { name: 'Google Drive', icon: '💾' },
              { name: 'Brevo', icon: '📧' },
              { name: 'Notion', icon: '📝' },
              { name: 'Slack', icon: '💬' },
              { name: 'Stripe', icon: '💳' },
              { name: 'WhatsApp', icon: '💬' }
            ].map((tool, i) => (
              <div key={i} className="card p-4 border-gray-200 text-center group hover:border-violet-200 transition-all">
                <div className="text-4xl mb-2">{tool.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600 text-sm">
            + des centaines d'autres intégrations possibles via API
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Mise en place</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Déploiement en 7 jours
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { day: 'J1-2', title: 'Audit de vos processus', desc: 'On analyse votre activité et identifie ce qui peut être automatisé' },
              { day: 'J3-4', title: 'Configuration CRM & outils', desc: 'Setup de votre CRM artisan et connexion de vos outils' },
              { day: 'J5-6', title: 'Création des workflows', desc: 'Mise en place de tous les scénarios d\'automatisation' },
              { day: 'J7', title: 'Formation & lancement', desc: 'Session de formation 1h + mise en production' }
            ].map((item, i) => (
              <div key={i} className="card p-6 border-gray-200 hover:border-violet-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-lg bg-violet-100 text-violet-600 font-bold text-sm flex-shrink-0">
                    {item.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à automatiser votre activité ?
          </h2>
          <p className="text-lg text-violet-200 mb-8 leading-relaxed">
            Audit gratuit de vos processus + démonstration du système
          </p>
          <Link to="/reserver" className="btn-secondary text-base px-8 py-4 inline-flex items-center">
            Réserver un audit gratuit
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Automatisation;
