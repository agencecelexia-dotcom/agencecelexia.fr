import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Vitrier = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Vitriers | Agence Celexia',
    description: 'Recommandations personnalisées pour vitriers : publicité urgence, site web, avis clients. Multipliez vos interventions vitrerie.',
    canonical: 'https://agencecelexia.fr/metiers/vitrier'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/vitrier/#service',
    'name': 'Marketing Digital pour Vitriers',
    'description': 'Stratégies marketing digital pour vitriers et miroitiers : captation des urgences bris de glace, positionnement sur le marché du vitrage énergetique, site web professionnel et gestion de la réputation en ligne pour développer votre clientèle.',
    'url': 'https://agencecelexia.fr/metiers/vitrier',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Vitriers' }
  });

  const metierColor = '#00BCD4';
  const metierLabel = 'Vitrier';
  const prixAppel = '22€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels urgents pour dépannage vitrerie 24/7',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire "vitrier urgence [ville]"',
        'Capture urgences bris de vitre',
        'Géolocalisation précise'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Professionnel',
      description: 'Site optimisé pour urgences et interventions rapides',
      benefits: [
        'Bouton appel urgence visible',
        'Disponibilité 24/7',
        'Tarifs transparents',
        'Zone intervention claire'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis pour renforcer votre crédibilité',
      benefits: [
        'Collecte automatique post-intervention',
        'Réponses rapides',
        'Amélioration réputation',
        'Transparence tarifaire'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Référencement SEO Local',
      description: 'Dominez les résultats "vitrier [ville]" sur Google',
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
            Nos recommandations personnalisées pour développer votre activité de vitrier.
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
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>Expertise Métier</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Vitrerie et miroiterie : saisir les opportunités d'un marché en mutation
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier de vitrier-miroitier se situe au carrefour de deux réalités commerciales distinctes : le dépannage d'urgence et le marché de la rénovation énergétique. D'un côté, le remplacement de vitres brisées suite à un accident, un cambriolage ou une intempérie génère un flux constant d'interventions urgentes. De l'autre, la transition énergétique et les exigences croissantes en matière d'isolation thermique créent une demande soutenue pour le remplacement de vitrages anciens par du double ou triple vitrage performant. Cette dualité impose une stratégie marketing digital capable d'adresser simultanément ces deux segments de clientèle aux comportements d'achat radicalement différents.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              L'urgence du bris de glace : réactivité et visibilité instantanée
            </h3>
            <p>
              Une vitre brisée est une urgence qui ne peut pas attendre. Qu'il s'agisse d'une baie vitrée fracturée par une tempête de grêle, d'une vitrine de commerce défoncée lors d'un cambriolage ou d'une fenêtre cassée par un ballon dans un pavillon de banlieue, le propriétaire a besoin d'un vitrier disponible dans les heures qui suivent. La sécurité du logement ou du local est en jeu, sans parler de l'exposition aux intempéries et du risque de vol. Dans ces moments de stress, le réflexe est invariablement le même : recherche sur smartphone « vitrier urgence + ville ». Les vitriers qui apparaissent dans les trois premiers résultats captent la quasi-totalité de ces appels. Chaque intervention d'urgence représente un ticket moyen de 200 à 800 euros, et la satisfaction du client en situation de détresse génère naturellement des avis positifs et du bouche-à-oreille.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Les schémas saisonniers : anticiper les pics de demande
            </h3>
            <p>
              L'activité de vitrerie suit des cycles saisonniers prévisibles qu'une stratégie marketing intelligente doit exploiter. Les tempêtes automnales et hivernales provoquent des pics de demandes de dépannage. La période estivale voit augmenter les projets de vérandas, de garde-corps en verre et de cloisons vitrées. Les cambriolages, plus fréquents pendant les vacances d'été et les fêtes de fin d'année, génèrent des besoins de remplacement et de sécurisation. En ajustant vos campagnes publicitaires et vos messages marketing à ces cycles, vous optimisez votre budget et captez la demande au moment précis où elle se manifeste. Des campagnes Google Ads activées automatiquement lors d'alertes météo dans votre zone d'intervention peuvent multiplier votre taux de conversion.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le vitrage énergétique : un marché porté par les subventions
            </h3>
            <p>
              Le remplacement de fenêtres simple vitrage par du double ou triple vitrage constitue l'un des postes majeurs de la rénovation énergétique en France. Les aides gouvernementales comme MaPrimeRénov', les CEE (Certificats d'Économies d'Énergie) et l'éco-prêt à taux zéro rendent ces travaux accessibles à un large public. Pour les vitriers, ce marché représente des projets de 1 500 à 5 000 euros par logement, avec une clientèle motivée par les économies d'énergie et le confort acoustique. Mettre en avant votre capacité à accompagner les clients dans les démarches administratives d'obtention des aides, tout en garantissant la qualité de pose certifiée, constitue un argument commercial puissant que votre site web doit valoriser.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le double marché résidentiel et commercial
            </h3>
            <p>
              Les vitriers-miroitiers interviennent aussi bien chez les particuliers que pour les professionnels. Le marché commercial englobe les vitrines de magasins, les cloisons de bureaux, les façades vitrées d'immeubles, les garde-corps et rampes en verre pour les ERP (Établissements Recevant du Public). Ces chantiers commerciaux représentent des tickets plus élevés et des relations récurrentes avec des gestionnaires d'immeubles, des architectes et des syndics de copropriété. Votre présence en ligne doit adresser ces deux cibles avec des pages et des contenus dédiés. Un portfolio montrant aussi bien le remplacement rapide d'une vitre chez un particulier que l'installation d'une façade vitrée pour un commerce démontre la polyvalence de votre savoir-faire. La documentation photographique de vos interventions, accompagnée des délais de réalisation, renforce la crédibilité de votre offre tant en urgence qu'en projet planifié, et constitue le socle d'une stratégie de contenu efficace pour développer durablement votre activité.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les vitriers ?
            </h3>
            <div className="space-y-4">
              {[
                '95% des recherches "vitrier" sont des urgences (bris de vitre) : visibilité immédiate critique',
                'Les avis rassurent sur le professionnalisme et la rapidité d\'intervention',
                'La transparence tarifaire différencie des concurrents peu scrupuleux',
                'Le ticket moyen des interventions urgentes justifie un CPA élevé (22€/appel)',
                'Un site avec bouton d\'appel visible et tarifs clairs augmente la conversion'
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

export default Vitrier;
