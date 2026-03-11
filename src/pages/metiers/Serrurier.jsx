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
    'audience': { '@type': 'Audience', 'audienceType': 'Serruriers' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
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

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Nos recommandations personnalisées pour développer votre activité de serrurier.
            Captez les urgences 24/7, développez votre visibilité locale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un audit gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: metierColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
              Serrurerie et marketing digital : restaurer la confiance dans un secteur en crise
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              La serrurerie est un métier à part dans le paysage artisanal français. Environ 80 % des recherches « serrurier » sur Google correspondent à des situations d'urgence : porte claquée, clé perdue, serrure bloquée, cambriolage. Cette dimension d'urgence absolue, combinée à un problème endémique d'arnaques en ligne, crée un environnement marketing unique où la confiance est la monnaie la plus précieuse. Les serruriers honnêtes et qualifiés doivent non seulement être visibles, mais aussi prouver activement leur légitimité face à des escrocs qui investissent massivement en publicité pour tromper les consommateurs en détresse.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le fléau des faux serruriers : une opportunité pour les vrais professionnels
            </h3>
            <p>
              Le secteur de la serrurerie souffre d'un problème de réputation majeur. Des sociétés peu scrupuleuses, souvent basées à l'étranger, achètent des positions publicitaires sur Google et affichent des numéros locaux qui redirigent vers des centrales d'appels. Les « artisans » envoyés sur place pratiquent des tarifs exorbitants, réalisent des travaux inutiles et facturent parfois trois à cinq fois le prix normal. Cette réalité, largement documentée par les associations de consommateurs et les médias, a créé une méfiance généralisée envers les serruriers trouvés en ligne. Pour un artisan serrurier légitime, cette situation est paradoxalement une opportunité : en affichant de manière transparente votre identité, vos tarifs, vos certifications et vos avis clients vérifiés, vous vous démarquez radicalement de ces opérateurs frauduleux.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              La transparence tarifaire comme avantage concurrentiel
            </h3>
            <p>
              Lorsqu'une personne est enfermée dehors à deux heures du matin, sa priorité est de rentrer chez elle rapidement et sans mauvaise surprise. Afficher des grilles tarifaires claires sur votre site web, avec des fourchettes de prix par type d'intervention (ouverture de porte simple entre 80 et 150 euros, changement de cylindre entre 120 et 250 euros, installation de serrure multipoint entre 500 et 2 000 euros), rassure immédiatement le prospect. Cette transparence, rare dans le secteur, devient votre argument commercial le plus puissant. Couplez-la à un engagement écrit de devis gratuit avant toute intervention et de prix fixe annoncé par téléphone pour les interventions courantes, et vous transformez la méfiance du consommateur en confiance active.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              La disponibilité 24/7 : un impératif technique et marketing
            </h3>
            <p>
              Les urgences de serrurerie ne suivent pas les horaires de bureau. Une porte claquée survient le dimanche soir, un cambriolage est découvert au retour de vacances, une serrure se bloque un jour férié. Votre présence en ligne doit refléter cette disponibilité permanente. Un site web avec un bouton d'appel proéminent et une mention claire « Intervention 24h/24, 7j/7 » convertit significativement mieux qu'un site classique. Google Local est le canal principal d'acquisition pour les serruriers : plus de 70 % des appels d'urgence proviennent directement de la fiche Google Business, souvent depuis un smartphone dans la rue ou sur un palier. L'optimisation de cette fiche avec des horaires d'ouverture étendus, des photos de votre véhicule d'intervention et de vos équipements, ainsi que des réponses rapides aux avis clients, est la base absolue de toute stratégie digitale pour un serrurier.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Au-delà de l'urgence : développer le marché de la sécurité
            </h3>
            <p>
              Si l'urgence représente la majorité des appels, le marché de l'installation de systèmes de sécurité offre des perspectives de développement à plus forte marge. Serrures connectées, portes blindées, systèmes de contrôle d'accès pour copropriétés, coffres-forts : ces prestations à plus haute valeur ajoutée (500 à 2 000 euros et plus) attirent une clientèle qui anticipe plutôt que de subir. Votre communication digitale doit adresser ces deux segments : l'urgence immédiate avec un message de réassurance et de rapidité, et la sécurité préventive avec un discours de conseil et d'expertise technique. Les certifications professionnelles (A2P, APSAD) et les partenariats avec des marques reconnues (Fichet, Vachette, Bricard) sont des signaux de confiance déterminants qui méritent une place centrale sur votre site web et vos supports digitaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
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
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: metierColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Serrurier;
