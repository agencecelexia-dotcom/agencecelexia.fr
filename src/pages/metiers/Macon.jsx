import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Macon = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Maçons | Agence Celexia',
    description: 'Recommandations personnalisées pour maçons : publicité, site web portfolio, avis clients. Multipliez vos chantiers maçonnerie.',
    canonical: 'https://agencecelexia.fr/metiers/macon'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/macon/#service',
    'name': 'Marketing Digital pour Maçons',
    'description': 'Stratégies marketing digital adaptées aux maçons : génération de leads qualifiés pour chantiers gros oeuvre, site portfolio professionnel, gestion des avis et campagnes ciblées pour le marché de la rénovation et de la construction.',
    'url': 'https://agencecelexia.fr/metiers/macon',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Maçons' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const metierColor = '#9E9E9E';
  const metierLabel = 'Maçon';
  const prixAppel = '18€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour projets maçonnerie et rénovation',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire "maçon [ville]"',
        'Ciblage projets extension/rénovation',
        'Capture chantiers gros œuvre'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Portfolio',
      description: 'Site avec galerie de vos chantiers et réalisations',
      benefits: [
        'Galerie photos chantiers',
        'Présentation savoir-faire',
        'Formulaire devis maçonnerie',
        'Section extension/surélévation'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis pour renforcer votre crédibilité',
      benefits: [
        'Collecte automatique post-chantier',
        'Avis avec photos réalisations',
        'Amélioration réputation locale',
        'Différenciation concurrence'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Relances devis et fidélisation clients',
      benefits: [
        'Relance devis extension',
        'Newsletter réalisations',
        'Offres promotionnelles',
        'Réactivation anciens clients'
      ],
      prix: 'Forfait mensuel',
      link: '/services/emailing'
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
            Nos recommandations personnalisées pour développer votre activité de maçon.
            Showcase chantiers, génération leads, avis clients.
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
              Comprendre le marché de la maçonnerie pour mieux communiquer
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              La maçonnerie constitue la colonne vertébrale du secteur du bâtiment en France. Qu'il s'agisse de construction neuve, d'extension, de surélévation ou de rénovation structurelle, le maçon intervient sur les fondations mêmes de chaque projet immobilier. Aujourd'hui, le marché de la rénovation représente plus de 50 % des dépenses de construction en France, une tendance qui ne cesse de s'accentuer avec les politiques de rénovation énergétique et la raréfaction du foncier en zones urbaines. Pour les maçons indépendants et les petites entreprises de maçonnerie, cette évolution du marché crée à la fois des opportunités considérables et des défis marketing spécifiques.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Un marché de la rénovation en pleine expansion
            </h3>
            <p>
              Les incitations gouvernementales à la rénovation énergétique, notamment MaPrimeRénov' et les Certificats d'Économies d'Énergie, ont profondément transformé le marché de la maçonnerie. L'isolation thermique par l'extérieur, la reprise de façades, le renforcement structurel pour accueillir des équipements de chauffage modernes : autant de chantiers qui nécessitent l'intervention d'un maçon qualifié. Les projets de rénovation génèrent des tickets moyens compris entre 10 000 et 100 000 euros, voire davantage pour les restructurations complètes d'immeubles anciens. Être visible en ligne sur ces requêtes à forte valeur commerciale est devenu indispensable pour maintenir un carnet de commandes rempli.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Se différencier face aux grandes entreprises de construction
            </h3>
            <p>
              L'un des principaux défis du maçon indépendant est la concurrence des grandes entreprises de construction qui disposent de budgets marketing conséquents et d'une visibilité naturelle grâce à leur taille. Pourtant, les particuliers et les petits maîtres d'ouvrage recherchent souvent la proximité, la réactivité et le contact humain qu'offre un artisan local. Votre stratégie digitale doit mettre en avant ces atouts : disponibilité, écoute, connaissance du terrain local, et surtout un portfolio de réalisations concrètes qui témoigne de votre savoir-faire. Un site web professionnel présentant vos chantiers avec des photos détaillées des différentes étapes de construction crée une crédibilité que les grandes structures, souvent impersonnelles, peinent à reproduire.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le portfolio : votre meilleur commercial
            </h3>
            <p>
              La maçonnerie est un métier de transformation visible et durable. Murs en pierre de taille, briques apparentes, béton architectonique, enduits décoratifs : chaque type de maçonnerie raconte une histoire différente et parle à une clientèle distincte. Photographier vos chantiers sous tous les angles, documenter les étapes clés de la construction, montrer les fondations solides que vous coulez et les murs droits que vous élevez : c'est investir dans le contenu marketing le plus convaincant qui soit. Les clients qui envisagent un projet d'extension ou de construction veulent voir ce que vous savez faire avant de vous confier leur chantier. La connaissance des démarches de permis de construire et de déclaration préalable constitue également un différenciateur précieux à mettre en avant dans votre communication digitale.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              L'éco-construction : un positionnement d'avenir
            </h3>
            <p>
              La tendance vers l'éco-construction et les matériaux biosourcés ouvre de nouvelles perspectives pour les maçons qui savent s'adapter. Briques de chanvre, béton bas carbone, murs en terre crue, réemploi de matériaux : ces techniques attirent une clientèle sensible aux enjeux environnementaux, souvent disposée à investir davantage pour un projet responsable. Communiquer sur ces compétences spécifiques dans votre stratégie digitale vous positionne sur un segment en forte croissance et encore peu concurrentiel en ligne. Les maçons qui adoptent et affichent ces savoir-faire dès maintenant construisent un avantage concurrentiel durable dans un marché qui évolue rapidement vers des pratiques plus vertueuses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les maçons ?
            </h3>
            <div className="space-y-4">
              {[
                'Les projets maçonnerie ont un ticket moyen très élevé (extension, surélévation)',
                'Un portfolio photo de chantiers terminés est indispensable pour rassurer',
                'La concurrence locale est forte : les avis clients font la différence',
                'Les devis ont un cycle long : relances email augmentent la conversion',
                'La visibilité Google Local est critique pour capter les projets de proximité'
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

export default Macon;
