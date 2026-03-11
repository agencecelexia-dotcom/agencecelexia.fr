import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Serrurier = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Serruriers | Agence Celexia',
    description: 'Recommandations personnalisées pour serruriers : publicité urgence, site web, avis clients. Multipliez vos interventions serrurerie.',
    canonical: 'https://agencecelexia.fr/metiers/serrurier'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/serrurier/#service',
    'name': 'Marketing Digital pour Serruriers',
    'description': 'Marketing digital spécialisé pour serruriers honnêtes : visibilité en urgence 24/7, site web avec tarifs transparents, collecte d\'avis vérifiés et stratégie de confiance pour se différencier des arnaques en ligne.',
    'url': 'https://agencecelexia.fr/metiers/serrurier',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Serruriers' }
  });

  const metierColor = '#607D8B';
  const metierLabel = 'Serrurier';
  const prixAppel = '22€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels urgents pour dépannage serrurerie 24/7',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire "serrurier urgence [ville]"',
        'Capture urgences 24/7',
        'Géolocalisation précise'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Professionnel',
      description: 'Site optimisé pour urgences et prise d\'appel immédiate',
      benefits: [
        'Bouton appel d\'urgence visible',
        'Disponibilité 24/7 mise en avant',
        'Tarifs transparents',
        'Zone d\'intervention claire'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis pour rassurer sur votre professionnalisme',
      benefits: [
        'Collecte automatique post-intervention',
        'Réponses rapides aux avis',
        'Amélioration réputation',
        'Transparence tarifaire'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Référencement SEO Local',
      description: 'Dominez les résultats "serrurier [ville]" sur Google',
      benefits: [
        'Position top 3 locale',
        'Google My Business optimisé',
        'Optimisation urgences',
        'Visibilité 24/7'
      ],
      prix: 'Forfait mensuel',
      link: '/services/seo'
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 opacity-20"
          style={{ backgroundColor: metierColor }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
            {metierLabel}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Solutions Marketing Digital
            <span className="block" style={{ color: metierColor }}>pour {metierLabel}s</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Nos recommandations personnalisées pour développer votre activité de serrurier.
            Captez les urgences 24/7, développez votre visibilité locale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un audit gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Recommandations</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Ce que nous vous conseillons
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Solutions adaptées à votre métier de {metierLabel.toLowerCase()} pour maximiser votre croissance
            </p>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="card p-6 md:p-8 border-gray-200 hover:border-opacity-100 transition-all duration-300"
                style={{ borderColor: `${metierColor}30` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <span
                      className="inline-block px-4 py-2 rounded-lg text-sm font-bold"
                      style={{ backgroundColor: `${metierColor}20`, color: metierColor }}
                    >
                      {rec.priority}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.service}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{rec.description}</p>

                    <div className="space-y-2 mb-5">
                      {rec.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: metierColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-sm font-bold text-gray-900">
                        Tarif : <span style={{ color: metierColor }}>{rec.prix}</span>
                      </span>
                      <Link
                        to={rec.link}
                        className="btn-ghost text-sm px-6 py-2 inline-flex items-center"
                        style={{
                          borderColor: metierColor,
                          color: metierColor
                        }}
                      >
                        En savoir plus
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les serruriers ?
            </h3>
            <div className="space-y-4">
              {[
                '90% des recherches "serrurier" sont des urgences : la visibilité immédiate est critique',
                'Les avis rassurent sur le professionnalisme et la transparence tarifaire',
                'Le secteur souffre d\'une mauvaise réputation : avis positifs différencient',
                'Le ticket moyen des interventions urgentes justifie un CPA élevé (22€/appel)',
                'Un site avec bouton d\'appel visible et tarifs transparents augmente la conversion'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: metierColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6" style={{ backgroundColor: metierColor }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à développer votre activité de {metierLabel.toLowerCase()} ?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Audit gratuit de 30 minutes pour analyser votre situation et élaborer une stratégie sur-mesure
          </p>
          <Link to="/reserver" className="btn-secondary text-base px-8 py-4 inline-flex items-center">
            Réserver mon audit gratuit
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Serrurier;
