import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Carreleur = () => {
  usePageMeta({
    title: 'Marketing Digital Carreleurs | Agence Celexia',
    description: 'Recommandations personnalisées pour carreleurs : site portfolio, publicité, avis clients. Multipliez vos chantiers carrelage.',
    canonical: 'https://agencecelexia.fr/metiers/carreleur'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/carreleur/#service',
    'name': 'Marketing Digital pour Carreleurs',
    'description': 'Accompagnement marketing digital dédié aux carreleurs : site portfolio visuel, publicité ciblée pour projets salle de bain et cuisine, gestion des avis avec photos de finitions et stratégie de présence sur Google Images.',
    'url': 'https://agencecelexia.fr/metiers/carreleur',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Carreleurs' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const metierColor = '#795548';
  const metierLabel = 'Carreleur';
  const prixAppel = '18€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Site Web Portfolio',
      description: 'Site vitrine avec galerie photos de vos réalisations carrelage',
      benefits: [
        'Galerie photos avant/après',
        'Présentation styles et finitions',
        'Formulaire devis carrelage',
        'Design visuel et moderne'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 2',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour projets carrelage intérieur/extérieur',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire sur Google',
        'Ciblage projets rénovation',
        'Capture chantiers neufs'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis avec photos de vos réalisations',
      benefits: [
        'Avis avec photos finitions',
        'Showcase savoir-faire',
        'Amélioration réputation',
        'Crédibilité professionnelle'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Relances et promotions sur pose carrelage',
      benefits: [
        'Relance devis salle de bain',
        'Newsletter nouvelles tendances',
        'Promotions pose carrelage',
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
            Nos recommandations personnalisées pour développer votre activité de carreleur.
            Showcase de vos finitions, génération de leads qualifiés.
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
              Le carrelage : un métier visuel qui se vend par l'image
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Parmi tous les métiers du bâtiment, le carrelage est sans doute celui où l'impact visuel du travail fini est le plus immédiat et le plus saisissant. Une salle de bain entièrement carrelée avec des motifs géométriques, un sol en grès cérame grand format posé sans aucun défaut d'alignement, une terrasse en pierre naturelle parfaitement jointoyée : le résultat parle de lui-même. Cette dimension esthétique fait du marketing digital un allié naturel pour les carreleurs, car le contenu visuel est précisément ce qui performe le mieux sur le web et les réseaux sociaux. L'industrie du carrelage bénéficie de manière exceptionnelle de la photographie avant/après, qui constitue le format de contenu le plus engageant pour les artisans du bâtiment.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Le boom de la rénovation de salles de bain et cuisines
            </h3>
            <p>
              La rénovation de salles de bain et de cuisines représente un marché en croissance constante en France. Les émissions de décoration intérieure, les plateformes comme Pinterest et Instagram ont développé chez les particuliers une culture du design et une exigence esthétique qui profitent directement aux carreleurs professionnels. Le budget moyen d'un projet de carrelage se situe entre 2 000 et 8 000 euros pour une pièce complète, un ticket moyen qui justifie pleinement un investissement en acquisition digitale. Les clients recherchent activement des artisans capables de réaliser les designs qu'ils ont repérés en ligne, et c'est votre portfolio qui fera la différence entre un devis accepté et un prospect perdu.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Google Images : le canal sous-exploité des métiers visuels
            </h3>
            <p>
              Pour les carreleurs, la présence sur Google Images est un levier d'acquisition souvent négligé. Lorsqu'un particulier recherche « carrelage salle de bain moderne » ou « pose carrelage imitation bois », il parcourt naturellement les résultats images avant même de consulter les sites web. Si vos réalisations apparaissent dans ces résultats, vous captez l'attention d'un prospect déjà en phase d'inspiration, au tout début de son parcours d'achat. Un site web avec des photos correctement optimisées, nommées avec des mots-clés pertinents et accompagnées de balises alt descriptives, génère un trafic qualifié et gratuit que vos concurrents ignorent souvent.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Se démarquer face au DIY et aux grandes surfaces
            </h3>
            <p>
              Le carrelage fait face à une concurrence particulière : celle du « faites-le vous-même ». Les grandes surfaces de bricolage vendent des kits de pose et des tutoriels vidéo qui peuvent donner l'impression qu'un carrelage réussi est à la portée de tous. Votre communication digitale doit subtilement éduquer le prospect sur la complexité réelle d'une pose de qualité : la préparation du support, la gestion des coupes complexes autour des obstacles, l'étanchéité en pièce humide, l'alignement parfait des grands formats qui ne tolèrent aucune irrégularité du sol. Montrer ces détails techniques à travers des photos de chantier et des descriptions de projets transforme le visiteur sceptique en client convaincu de la nécessité de faire appel à un professionnel.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Les nouvelles tendances qui créent de la demande
            </h3>
            <p>
              Le marché du carrelage évolue rapidement avec l'apparition de nouvelles tendances. Les carreaux grand format (60x120 cm et au-delà) nécessitent une expertise de pose spécifique et un équipement adapté que les amateurs ne possèdent pas. Le carrelage extérieur pour terrasses sur plots connaît une croissance forte, porté par l'aménagement des espaces extérieurs post-Covid. Les imitations parquet en grès cérame séduisent les clients qui veulent l'esthétique du bois sans ses contraintes d'entretien. Chacune de ces tendances représente une opportunité de vous positionner comme spécialiste sur des requêtes de recherche précises et à forte intention d'achat. Une stratégie de contenu ciblée autour de ces spécialités vous différencie et attire une clientèle prête à investir dans un travail de qualité.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les carreleurs ?
            </h3>
            <div className="space-y-4">
              {[
                'Le visuel est déterminant : un portfolio photo de qualité fait toute la différence',
                'Les projets carrelage (salle de bain, cuisine) ont un bon ticket moyen',
                'Les avis avec photos des finitions rassurent sur la qualité du travail',
                'Les devis se comparent : relances email augmentent vos chances de signature',
                'Un site moderne différencie du carreleur sans présence digitale'
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

export default Carreleur;
