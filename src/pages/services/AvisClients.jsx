import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const AvisClients = () => {
  usePageMeta({
    title: 'Gestion Avis Clients Google | Agence Celexia',
    description: 'Multipliez vos avis Google automatiquement. Système de collecte, réponses automatiques, gestion de réputation. Objectif de forte augmentation en 3 mois.',
    canonical: 'https://agencecelexia.fr/services/avis-clients'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/services/avis-clients/#service',
    'name': 'Gestion Automatisée des Avis Clients Google',
    'description': 'Système automatisé de collecte et gestion des avis Google pour artisans. Collecte par SMS et email, réponses IA, alertes avis négatifs et suivi de réputation en temps réel.',
    'url': 'https://agencecelexia.fr/services/avis-clients',
    'serviceType': 'Gestion de réputation en ligne',
    'category': 'Service complémentaire artisans',
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Collecte automatique',
      desc: 'SMS et emails automatiques après chaque intervention pour demander un avis'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Note 4.8/5 moyenne',
      desc: 'Nos clients atteignent en moyenne 4.8 étoiles sur Google'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Réponses automatiques',
      desc: 'Réponses IA personnalisées à tous les avis sous 1 heure'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Gestion des avis négatifs',
      desc: 'Alertes instantanées et protocole de gestion de crise'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics détaillés',
      desc: 'Suivi en temps réel : nombre d\'avis, note moyenne, évolution'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Boost SEO local',
      desc: 'Les avis Google améliorent significativement votre référencement local'
    }
  ];

  const stats = [
    { value: 'x3-x5', label: 'Multiplication des avis' },
    { value: '100%', label: 'Automatisation collecte' },
    { value: '<1h', label: 'Temps de réponse IA' },
    { value: '24/7', label: 'Service automatique' }
  ];

  const process = [
    {
      step: '01',
      title: 'Configuration',
      desc: 'On connecte votre Google My Business et on paramètre les scénarios de collecte',
      duration: 'Jour 1'
    },
    {
      step: '02',
      title: 'Automatisation',
      desc: 'Envoi automatique de SMS/emails après chaque intervention terminée',
      duration: 'J+2'
    },
    {
      step: '03',
      title: 'Collecte',
      desc: 'Vos clients laissent leurs avis directement sur votre fiche Google',
      duration: 'En continu'
    },
    {
      step: '04',
      title: 'Gestion',
      desc: 'Réponses automatiques IA + alertes sur avis négatifs pour intervention manuelle',
      duration: 'En continu'
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Avis Clients</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Multipliez vos Avis Google
            <span className="block text-violet-600">en Automatique</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Système automatisé de collecte et gestion d'avis. SMS après intervention, réponses IA, alertes avis négatifs.
            <strong className="block mt-2 text-gray-900">+50% d'avis positifs garantis en 3 mois.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Démarrer la collecte d'avis
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Fonctionnalités</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Gestion complète de votre e-réputation
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
              La gestion des avis clients : un levier de croissance majeur pour les artisans
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              Dans le secteur de l'artisanat, la recommandation est historiquement le premier canal d'acquisition de clients. Aujourd'hui, cette recommandation est devenue numérique. <strong className="text-gray-900">Les avis Google sont le bouche-à-oreille du XXIe siècle</strong>, et ils influencent directement la décision de vos futurs clients. Un artisan avec 80 avis et une note de 4.8/5 inspire infiniment plus confiance qu'un concurrent avec 5 avis, même s'il fait un travail de qualité équivalente.
            </p>
            <p>
              Le problème, c'est que les clients satisfaits laissent rarement un avis de manière spontanée. Ils sont contents, ils passent à autre chose. En revanche, un client mécontent sera beaucoup plus motivé pour exprimer son insatisfaction en ligne. Sans système de collecte proactif, votre fiche Google risque de ne refléter qu'une image biaisée de votre activité.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Notre système de collecte automatisé</h3>
            <p>
              Notre système envoie automatiquement une demande d'avis à votre client après chaque intervention terminée. Le message est envoyé par <strong className="text-gray-900">SMS et email</strong>, car le taux de réponse par SMS est 4 fois supérieur à celui de l'email. Le client reçoit un lien direct vers votre fiche Google — en un seul clic, il peut laisser son avis sans créer de compte ni naviguer dans des menus complexes.
            </p>
            <p>
              Le timing d'envoi est crucial. Nous envoyons la demande entre 2 et 4 heures après la fin de l'intervention, quand le client est encore satisfait de votre travail et que l'expérience est fraîche dans sa mémoire. Ce timing optimisé permet d'atteindre un taux de conversion de 25 à 35%, contre moins de 5% pour une demande faite par email simple plusieurs jours après.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">La gestion intelligente des réponses</h3>
            <p>
              Répondre à chaque avis est essentiel, tant pour les avis positifs que négatifs. Google valorise les entreprises qui interagissent avec leurs clients, et une réponse personnalisée montre votre professionnalisme aux futurs visiteurs de votre fiche. Notre <strong className="text-gray-900">système de réponse par intelligence artificielle</strong> génère des réponses personnalisées en moins d'une heure après la publication de l'avis.
            </p>
            <p>
              Pour les avis positifs, l'IA rédige une réponse chaleureuse et professionnelle qui remercie le client et mentionne le type d'intervention réalisé (ce qui renforce le SEO local). Pour les avis négatifs, le système vous alerte immédiatement par notification push sur votre téléphone. Vous pouvez alors choisir de répondre vous-même ou utiliser la suggestion de réponse diplomatique proposée par l'IA, qui vise à désamorcer le conflit tout en montrant votre bonne foi aux lecteurs.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">L'impact concret sur votre activité</h3>
            <p>
              Les chiffres parlent d'eux-mêmes. Un artisan passant de 10 à 50 avis Google constate en moyenne une <strong className="text-gray-900">augmentation de 35% de ses demandes de devis</strong>. La note moyenne joue également un rôle déterminant : les entreprises avec une note supérieure à 4.5 étoiles reçoivent 28% de contacts supplémentaires par rapport à celles sous les 4 étoiles. Enfin, les avis Google constituent l'un des trois facteurs de classement les plus importants pour le Pack Local de Google, ce qui signifie que plus vous avez d'avis positifs récents, plus vous remontez dans les résultats de recherche locaux.
            </p>
            <p>
              Notre service de gestion des avis fonctionne en complément de vos autres canaux d'acquisition. Les avis renforcent votre crédibilité sur votre site web, améliorent votre référencement naturel et augmentent le taux de conversion de vos campagnes publicitaires. C'est un investissement qui amplifie l'efficacité de toutes vos autres actions marketing.
            </p>
          </div>
        </div>
      </section>

      {/* WHY REVIEWS MATTER */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Impact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Pourquoi les avis sont cruciaux ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 border-gray-200 text-center">
              <div className="font-display text-5xl font-bold text-violet-600 mb-3">93%</div>
              <p className="text-sm text-gray-600">
                des consommateurs lisent les avis avant de choisir un artisan
              </p>
            </div>
            <div className="card p-6 border-gray-200 text-center">
              <div className="font-display text-5xl font-bold text-violet-600 mb-3">+35%</div>
              <p className="text-sm text-gray-600">
                de conversions avec 50+ avis positifs
              </p>
            </div>
            <div className="card p-6 border-gray-200 text-center">
              <div className="font-display text-5xl font-bold text-violet-600 mb-3">x2.5</div>
              <p className="text-sm text-gray-600">
                amélioration du référencement local Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Collecte d'avis 100% automatisée
            </h2>
            <p className="text-gray-600 text-lg">
              Vous n'avez rien à faire, tout est automatique
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={i} className="card p-6 md:p-8 border-gray-200 hover:border-violet-200 group transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-start md:items-center gap-4 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg flex-shrink-0
                                   group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:text-right md:min-w-[100px]">
                    <span className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <div className="flex gap-1 mb-6 justify-center">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
              "Avant, je galérais à avoir des avis. Maintenant j'en reçois 3-4 par semaine automatiquement.
              Ça m'a fait passer de 12 à 67 avis en 4 mois. Mon téléphone n'arrête plus de sonner !"
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-gray-900">Marc D.</p>
              <p className="text-sm text-gray-600">Plombier à Lyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à multiplier vos avis Google ?
          </h2>
          <p className="text-lg text-violet-200 mb-8 leading-relaxed">
            Configuration en 24h, premiers avis sous 48h
          </p>
          <Link to="/reserver" className="btn-secondary text-base px-8 py-4 inline-flex items-center">
            Activer la collecte automatique
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AvisClients;
