import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Peintre = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Peintres | Agence Celexia',
    description: 'Recommandations personnalisées pour peintres : site portfolio, publicité, avis clients. Multipliez vos chantiers peinture.',
    canonical: 'https://agencecelexia.fr/metiers/peintre'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/peintre/#service',
    'name': 'Marketing Digital pour Peintres',
    'description': 'Solutions marketing digital conçues pour les peintres en bâtiment : différenciation par la spécialisation, site portfolio avec transformations avant/après, publicité locale et stratégie de marque pour se démarquer dans un marché très concurrentiel.',
    'url': 'https://agencecelexia.fr/metiers/peintre',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Peintres' }
  });

  const metierColor = '#E91E63';
  const metierLabel = 'Peintre';
  const prixAppel = '15€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Site Web Portfolio',
      description: 'Site vitrine avec galerie photos avant/après de vos chantiers',
      benefits: [
        'Galerie avant/après percutante',
        'Présentation finitions et techniques',
        'Formulaire devis peinture',
        'Design coloré et moderne'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 2',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour chantiers peinture intérieur/extérieur',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire "peintre [ville]"',
        'Ciblage projets rénovation',
        'Capture chantiers neufs'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Multipliez vos avis avec photos des transformations',
      benefits: [
        'Avis avec photos avant/après',
        'Showcase transformations',
        'Amélioration réputation locale',
        'Crédibilité professionnelle'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Relances devis et campagnes saisonnières',
      benefits: [
        'Relance devis peinture',
        'Promotions ravalement façade',
        'Campagnes printemps/été',
        'Réactivation clients'
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
            Nos recommandations personnalisées pour développer votre activité de peintre.
            Showcase transformations, génération leads, avis clients.
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
              Se démarquer dans le marché ultra-concurrentiel de la peinture
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier de peintre en bâtiment est l'un des plus concurrentiels du secteur artisanal en France. Avec des barrières à l'entrée relativement faibles par rapport à d'autres corps de métier, le nombre de professionnels déclarés est élevé, sans compter la concurrence du travail non déclaré. Dans ce contexte saturé, la différenciation n'est plus une option mais une nécessité absolue. Le marketing digital offre aux peintres professionnels les outils pour se démarquer, construire une identité de marque forte et attirer une clientèle prête à payer le juste prix pour un travail de qualité.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              La spécialisation : votre meilleure arme de différenciation
            </h3>
            <p>
              Dans un marché où des centaines de peintres proposent les mêmes services génériques, la spécialisation est le moyen le plus efficace de sortir du lot. Peinture décorative et effets de matière, application de peintures écologiques et biosourcées, ravalement de façade et traitement de l'humidité, peinture industrielle et de sols, décoration intérieure haut de gamme : chaque spécialisation correspond à une niche de marché avec une clientèle spécifique et souvent moins de concurrence. Votre stratégie digitale doit affirmer cette expertise distinctive. Un peintre qui se présente comme « spécialiste des enduits décoratifs à la chaux » se positionne très différemment d'un « peintre tous travaux » dans l'esprit du prospect.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              L'expertise couleur : un atout marketing sous-estimé
            </h3>
            <p>
              La maîtrise des couleurs et des harmonies chromatiques est un savoir-faire que peu de peintres mettent en avant dans leur communication. Pourtant, c'est souvent ce qui préoccupe le plus les clients : quelles couleurs choisir pour agrandir visuellement une pièce ? Comment créer une ambiance chaleureuse dans un salon nord ? Quelles teintes pour une chambre d'enfant apaisante ? En publiant sur votre site web et vos réseaux sociaux des conseils de colorimétrie, des exemples de palettes harmonieuses et des photos de réalisations commentées avec les références de teintes utilisées, vous démontrez une expertise qui va bien au-delà de la simple application de peinture. Vous devenez un conseiller en décoration, ce qui justifie un positionnement tarifaire supérieur.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le défi de la preuve qualité
            </h3>
            <p>
              La peinture présente un défi marketing unique : la qualité réelle du travail ne se révèle qu'après séchage complet, et les défauts de préparation ou d'application n'apparaissent parfois que des semaines plus tard. Un client ne peut pas juger la qualité d'une peinture au moment de la réception comme il le ferait pour un carrelage ou une menuiserie. C'est pourquoi les avis clients sont particulièrement déterminants pour les peintres. Un avis publié plusieurs mois après les travaux, confirmant que la peinture tient parfaitement et que les finitions sont impeccables, a une valeur de persuasion considérable. Encourager vos clients satisfaits à laisser des avis détaillés, idéalement avec des photos de l'intérieur de leur logement quelques mois après votre passage, constitue un investissement marketing à très fort retour.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Résidentiel et commercial : deux marchés, deux stratégies
            </h3>
            <p>
              Le marché de la peinture se divise en deux segments distincts qui appellent des approches marketing différentes. Le marché résidentiel, avec des projets de 1 000 à 5 000 euros en moyenne, repose sur le volume et la proximité géographique. Le marché commercial, incluant bureaux, commerces, restaurants et hôtels, offre des tickets plus élevés et des relations récurrentes avec des gestionnaires d'immeubles ou des architectes d'intérieur. Votre présence digitale doit parler à ces deux audiences. Un portfolio segmenté présentant d'un côté vos réalisations résidentielles et de l'autre vos chantiers commerciaux permet à chaque type de prospect de se projeter. La tendance actuelle de rénovation des espaces de travail post-pandémie et le mouvement vers les peintures à faible émission de COV créent des opportunités spécifiques que les peintres avisés captent en se positionnant sur ces thématiques dans leur communication en ligne.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les peintres ?
            </h3>
            <div className="space-y-4">
              {[
                'Les photos avant/après sont extrêmement convaincantes pour les projets peinture',
                'Le ticket moyen est accessible : le volume de chantiers est élevé',
                'La saisonnalité (printemps/été) nécessite des campagnes ciblées',
                'Les avis clients avec visuels des transformations génèrent beaucoup de confiance',
                'Un site portfolio moderne vous différencie des peintres sans présence web'
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

export default Peintre;
