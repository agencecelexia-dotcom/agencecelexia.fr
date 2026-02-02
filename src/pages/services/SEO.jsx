import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';

const SEO = () => {
  usePageMeta({
    title: 'Référencement SEO Local pour Artisans | Agence Celexia',
    description: 'Positionnez votre entreprise en tête des résultats Google locaux. SEO technique, optimisation Google My Business, avis clients. Résultats visibles sous 90 jours.',
    canonical: 'https://agencecelexia.fr/services/seo'
  });

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Positionnement local',
      desc: 'Objectif d\'apparaître en tête des recherches Google dans votre zone'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Google My Business',
      desc: 'Optimisation complète de votre fiche GMB pour maximiser votre visibilité'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Contenu optimisé',
      desc: 'Rédaction de pages optimisées pour vos mots-clés stratégiques'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Backlinks de qualité',
      desc: 'Acquisition de liens depuis des sites d\'autorité dans votre secteur'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Suivi des performances',
      desc: 'Dashboard temps réel avec positions, trafic et conversions'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Engagement résultats',
      desc: 'Objectif de positionnement top 3 sous 90 jours, suivi rigoureux'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Audit SEO complet',
      desc: 'Analyse approfondie de votre site, vos concurrents et vos opportunités de mots-clés',
      duration: 'Semaine 1'
    },
    {
      step: '02',
      title: 'Optimisations techniques',
      desc: 'Correction des problèmes techniques, vitesse, mobile-friendly, structure',
      duration: 'Semaines 2-3'
    },
    {
      step: '03',
      title: 'Contenu & GMB',
      desc: 'Création de contenu optimisé et configuration complète de votre Google My Business',
      duration: 'Semaines 4-6'
    },
    {
      step: '04',
      title: 'Link building',
      desc: 'Acquisition de backlinks de qualité pour renforcer votre autorité',
      duration: 'Semaines 7-12'
    }
  ];

  const results = [
    { metric: 'x2-x5', label: 'Potentiel trafic organique' },
    { metric: 'Top 3', label: 'Objectif position locale' },
    { metric: '+50%', label: 'Croissance demandes' },
    { metric: '90j', label: 'Premiers résultats' }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Référencement SEO Local</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Dominez Google
            <span className="block text-violet-600">dans votre Zone</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Positionnement optimal sur les recherches locales de votre métier. SEO technique, Google My Business, avis clients.
            <strong className="block mt-2 text-gray-900">Résultats visibles sous 90 jours.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Obtenir un audit SEO gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS STATS */}
      <section className="py-16 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                  {item.metric}
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
            <span className="tag mb-4 inline-block">Notre approche</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              SEO local complet pour artisans
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
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Le processus</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Notre méthodologie SEO en 4 étapes
            </h2>
            <p className="text-gray-500 text-lg">
              Résultats visibles dès le 3ème mois, position top 3 garantie sous 90 jours
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
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:text-right md:min-w-[120px]">
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

      {/* WHY SEO */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi le SEO ?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              L'investissement le plus rentable sur le long terme
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">❌</span> Publicité Google Ads
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Coût par clic élevé (5-15€)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Résultats s'arrêtent quand vous arrêtez de payer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Budget mensuel minimum 1000€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Concurrence féroce sur les enchères</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 border-violet-200 bg-violet-50/30">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Référencement SEO
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Trafic gratuit une fois positionné</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Résultats durables (années)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>ROI exponentiel sur le long terme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Crédibilité et confiance accrues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à dominer votre marché local ?
          </h2>
          <p className="text-lg text-violet-200 mb-8 leading-relaxed">
            Audit SEO gratuit : on analyse votre site et vos concurrents
          </p>
          <Link to="/reserver" className="btn-secondary text-base px-8 py-4 inline-flex items-center">
            Réserver mon audit SEO gratuit
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEO;
