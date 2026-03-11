import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Emailing = () => {
  usePageMeta({
    title: 'Email Marketing Artisans | Agence Celexia',
    description: 'Emails automatiques de relance, newsletters, promotions. Taux d\'ouverture optimisé. Reconquête clients inactifs. CRM intégré avec votre activité.',
    canonical: 'https://agencecelexia.fr/services/emailing'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/services/emailing/#service',
    'name': 'Campagnes Email Automatisées pour Artisans',
    'description': 'Service de campagnes email automatisées pour artisans. Relances devis, promotions saisonnières, rappels entretien et reconquête de clients inactifs avec CRM intégré.',
    'url': 'https://agencecelexia.fr/services/emailing',
    'serviceType': 'Email marketing automatisé',
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Relances automatiques',
      desc: 'Emails automatiques aux devis non signés pour augmenter le taux de conversion'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Campagnes saisonnières',
      desc: 'Promotions ciblées selon la saison (climatisation été, chauffage hiver...)'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Segmentation intelligente',
      desc: 'Segmentation par type de service, zone géo, date dernière intervention'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Reconquête clients',
      desc: 'Réactivation automatique des clients inactifs depuis 6/12/18 mois'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Templates professionnels',
      desc: 'Modèles d\'emails conçus spécifiquement pour artisans'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics détaillés',
      desc: 'Taux d\'ouverture, clics, conversions en temps réel'
    }
  ];

  const useCases = [
    {
      title: 'Relance devis non signés',
      desc: 'Email automatique J+3, J+7 et J+14 après envoi du devis',
      impact: '+25% de conversion'
    },
    {
      title: 'Rappel entretien annuel',
      desc: 'Notification automatique 1 an après intervention (chaudière, climatisation...)',
      impact: '+40% de récurrence'
    },
    {
      title: 'Promotions saisonnières',
      desc: 'Climatisation en mai, ramonage en septembre, déco Noël en novembre',
      impact: '+60% de CA hors-saison'
    },
    {
      title: 'Clients inactifs',
      desc: 'Offre spéciale pour clients n\'ayant pas utilisé vos services depuis 12 mois',
      impact: '+15% de réactivation'
    }
  ];

  const stats = [
    { value: '100%', label: 'Automatisation' },
    { value: '24/7', label: 'Fonctionnement continu' },
    { value: 'ROI+', label: 'Excellent retour' },
    { value: '<0.10€', label: 'Coût par contact' }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Email Marketing</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Campagnes Email
            <span className="block text-violet-600">100% Automatisées</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Relances devis, promotions saisonnières, rappels entretien, reconquête clients inactifs.
            <strong className="block mt-2 text-gray-900">Taux d'ouverture optimisé.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Lancer mes campagnes email
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
              Email marketing sur-mesure pour artisans
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
              L'email marketing : le canal le plus rentable pour fidéliser vos clients
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              L'email marketing reste le canal de communication au <strong className="text-gray-900">meilleur retour sur investissement</strong> tous secteurs confondus. Pour 1 euro investi, l'email marketing rapporte en moyenne 42 euros — un ratio que ni la publicité Google, ni les réseaux sociaux ne peuvent égaler. Pour les artisans, dont le chiffre d'affaires repose largement sur la récurrence et le bouche-à-oreille, l'email est un outil de fidélisation et de relance particulièrement puissant.
            </p>
            <p>
              Pourtant, la plupart des artisans n'exploitent pas ce canal. Manque de temps, méconnaissance des outils, absence de base de données structurée — les freins sont nombreux. C'est précisément pour cela que nous avons conçu un service d'emailing 100% automatisé, spécifiquement adapté aux contraintes et aux opportunités du métier d'artisan.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Des scénarios d'emails pensés pour l'artisanat</h3>
            <p>
              Chaque scénario d'emailing que nous mettons en place répond à un objectif commercial précis. La <strong className="text-gray-900">relance des devis non signés</strong> est le scénario le plus rentable : un email envoyé 3 jours après l'envoi du devis, suivi d'un second à 7 jours et d'un dernier à 14 jours, augmente le taux de signature de 25% en moyenne. Le contenu de chaque relance est soigneusement calibré : le premier rappelle les points forts de votre offre, le deuxième propose de répondre à d'éventuelles questions, et le troisième inclut une incitation à l'action (disponibilité limitée, offre spéciale).
            </p>
            <p>
              Le scénario de <strong className="text-gray-900">rappel d'entretien annuel</strong> est particulièrement efficace pour les métiers liés au chauffage, à la climatisation, à la plomberie ou à l'électricité. Onze mois après une intervention, votre client reçoit automatiquement un email lui rappelant la nécessité d'un entretien, avec un lien pour prendre rendez-vous. Ce simple mécanisme génère un taux de récurrence de 40%, transformant des clients ponctuels en clients réguliers.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">La segmentation : envoyer le bon message à la bonne personne</h3>
            <p>
              Envoyer le même email à toute votre base de contacts est inefficace. Notre système segmente automatiquement votre base selon plusieurs critères : type de service demandé, zone géographique, date de la dernière intervention, montant moyen des devis, et niveau d'engagement (ouvertures, clics précédents). Un client qui a fait installer une chaudière il y a un an ne recevra pas le même message qu'un prospect qui a demandé un devis pour une rénovation de salle de bain sans jamais donner suite.
            </p>
            <p>
              Cette segmentation fine permet d'atteindre des <strong className="text-gray-900">taux d'ouverture de 35 à 45%</strong>, contre 15 à 20% pour des emails génériques. Le taux de clic suit la même tendance : un email pertinent et ciblé génère 3 à 5 fois plus de clics qu'un message de masse. Concrètement, cela signifie plus de prises de rendez-vous, plus de devis signés et plus de chiffre d'affaires généré par email.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Des templates professionnels adaptés à votre métier</h3>
            <p>
              Nous fournissons des modèles d'emails spécialement conçus pour les artisans. Chaque template est responsive (lisible sur mobile et ordinateur), intègre votre logo et vos couleurs, et respecte les bonnes pratiques de délivrabilité pour éviter de finir dans les spams. Les modèles incluent des éléments de preuve sociale (note Google, nombre d'avis, certifications) pour renforcer votre crédibilité. Vous pouvez également personnaliser chaque template ou nous laisser gérer la création de contenus adaptés à vos campagnes saisonnières, promotions spéciales ou communications événementielles.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Cas d'usage</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              4 scénarios qui génèrent du chiffre d'affaires
            </h2>
            <p className="text-gray-600 text-lg">
              Configurés une fois, ils tournent en automatique 24/7
            </p>
          </div>

          <div className="space-y-5">
            {useCases.map((item, i) => (
              <div key={i} className="card p-6 md:p-8 border-gray-200 hover:border-violet-200 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-100 text-violet-600 text-sm font-bold flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed ml-11">{item.desc}</p>
                  </div>
                  <div className="md:text-right md:min-w-[140px]">
                    <span className="inline-block px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 text-sm font-bold">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Mise en place en 48h
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Import de votre base clients',
                desc: 'On importe vos contacts depuis Excel, votre logiciel de facturation ou CRM'
              },
              {
                num: '02',
                title: 'Configuration des scénarios',
                desc: 'On paramètre les déclencheurs automatiques selon votre activité'
              },
              {
                num: '03',
                title: 'Personnalisation des templates',
                desc: 'Adaptation des emails avec votre logo, couleurs et contenu'
              },
              {
                num: '04',
                title: 'Lancement & suivi',
                desc: 'Les campagnes démarrent automatiquement, vous suivez les résultats en temps réel'
              }
            ].map((item, i) => (
              <div key={i} className="card p-6 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EMAIL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi l'email est le canal #1 pour les artisans ?
            </h3>
            <div className="space-y-4">
              {[
                'ROI moyen de 42€ pour 1€ investi (meilleur ROI de tous les canaux)',
                'Coût par contact 50x moins cher que la pub Google',
                'Vous possédez votre base de données (contrairement aux réseaux sociaux)',
                'Automatisable à 100% : configurez une fois, profitez à vie',
                'Permet de fidéliser et réactiver vos anciens clients'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à automatiser vos emails ?
          </h2>
          <p className="text-lg text-violet-200 mb-8 leading-relaxed">
            Configuration en 48h, premières campagnes actives sous 72h
          </p>
          <Link to="/reserver" className="btn-secondary text-base px-8 py-4 inline-flex items-center">
            Lancer mes campagnes email
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Emailing;
