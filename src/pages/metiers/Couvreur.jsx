import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Couvreur = () => {
  usePageMeta({
    title: 'Marketing Digital Couvreurs | Agence Celexia',
    description: 'Recommandations personnalisées pour couvreurs : publicité, site web, avis clients. Multipliez vos chantiers toiture et rénovation.',
    canonical: 'https://agencecelexia.fr/metiers/couvreur'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/couvreur/#service',
    'name': 'Marketing Digital pour Couvreurs',
    'description': 'Solutions marketing digital sur-mesure pour couvreurs : publicité à la performance, site web avec galerie avant/après, gestion des avis clients et campagnes saisonnières pour capter les urgences toiture et développer votre carnet de chantiers.',
    'url': 'https://agencecelexia.fr/metiers/couvreur',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Couvreurs' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const metierColor = '#6D4C41';
  const metierLabel = 'Couvreur';
  const prixAppel = '20€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour dépannage, réfection et rénovation toiture',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Position prioritaire "couvreur [ville]"',
        'Capture urgences fuite/tempête',
        'Ciblage géographique précis'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Professionnel',
      description: 'Site vitrine avec galerie photos réalisations toiture',
      benefits: [
        'Galerie avant/après',
        'Certifications RGE',
        'Formulaire devis toiture',
        'Section dépannage urgence'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Multipliez vos avis Google pour dominer le marché local',
      benefits: [
        'Collecte automatique après chantier',
        'Réponses aux avis',
        'Amélioration réputation',
        'Crédibilité professionnelle'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Relances et promotions saisonnières',
      benefits: [
        'Relance devis réfection',
        'Rappel inspection toiture',
        'Campagnes avant tempêtes',
        'Offres démoussage'
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
            Nos recommandations personnalisées pour développer votre activité de couvreur.
            Captez les urgences, développez votre carnet de chantiers.
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
              Le marketing digital au service des couvreurs
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier de couvreur occupe une place singulière dans le paysage du bâtiment en France. Directement dépendant des conditions météorologiques, il connaît des variations saisonnières marquées et des pics d'urgence imprévisibles qui transforment radicalement la demande en quelques heures. Après chaque épisode de tempête, de grêle ou de fortes pluies, les recherches Google pour « couvreur urgence » ou « réparation toiture » peuvent être multipliées par dix dans les zones touchées. Cette réalité impose une stratégie marketing digital capable de répondre instantanément à ces pics de demande.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Les urgences climatiques : un levier d'acquisition majeur
            </h3>
            <p>
              Lorsqu'une tempête frappe une région, des milliers de propriétaires découvrent simultanément des dégâts sur leur toiture. Tuiles arrachées, fuites d'eau, charpente endommagée : l'urgence est réelle et le besoin d'un professionnel immédiat. Dans ces moments critiques, seuls les couvreurs visibles en première page de Google captent ces appels à forte valeur ajoutée. Un couvreur qui n'a pas anticipé sa présence en ligne perd des dizaines de chantiers potentiels à chaque épisode climatique. Notre publicité à la performance vous positionne en priorité sur ces requêtes urgentes, précisément quand les propriétaires cherchent désespérément un professionnel disponible.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Des projets à haute valeur et la puissance du visuel
            </h3>
            <p>
              La couverture est l'un des métiers du bâtiment où les tickets moyens sont les plus élevés. Une réfection complète de toiture se situe entre 5 000 et 30 000 euros, voire davantage pour les propriétés de grande surface ou les toitures complexes avec lucarnes et cheminées. Les travaux liés aux sinistres assurés représentent également une part importante du chiffre d'affaires, avec des interventions souvent prises en charge par les assurances habitation. Pour ces projets d'envergure, les clients potentiels effectuent des recherches approfondies avant de choisir leur artisan. C'est ici que les photos avant/après prennent toute leur importance.
            </p>
            <p>
              La photographie par drone est devenue un outil marketing particulièrement puissant pour les couvreurs. Elle permet de montrer l'état d'une toiture avant intervention et le résultat final sous un angle spectaculaire que les photos au sol ne peuvent pas offrir. Ces images aériennes impressionnent les prospects, démontrent votre maîtrise technique et renforcent considérablement la confiance. Intégrées à votre site web et à votre fiche Google Business, elles constituent un argument de vente visuel incomparable face à des concurrents qui se contentent de descriptions textuelles.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              Certifications et confiance : les piliers de la conversion
            </h3>
            <p>
              Dans un secteur où les travaux en hauteur présentent des risques et où les montants engagés sont significatifs, la confiance est le facteur décisif. Les certifications professionnelles, notamment la qualification RGE (Reconnu Garant de l'Environnement), jouent un rôle déterminant. Elles permettent non seulement de rassurer le client sur vos compétences, mais aussi de rendre vos clients éligibles aux aides financières pour la rénovation énergétique comme MaPrimeRénov'. Afficher clairement vos certifications, vos attestations d'assurance décennale et vos garanties sur votre site web et vos supports digitaux transforme des visiteurs hésitants en clients convaincus.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">
              La saisonnalité comme opportunité stratégique
            </h3>
            <p>
              Le cycle annuel du couvreur est bien défini : forte activité au printemps et en automne, ralentissement en hiver selon les régions, et pics imprévisibles liés aux intempéries. Une stratégie marketing digitale intelligente anticipe ces variations. Les campagnes de démoussage et d'entretien préventif au printemps, les rappels d'inspection avant l'hiver, les offres de réfection durant les mois les plus cléments : chaque saison appelle un message différent. L'email marketing et les campagnes publicitaires ciblées permettent de maintenir un flux régulier de chantiers tout au long de l'année, lissant ainsi les creux d'activité naturels du métier. C'est cette approche méthodique et adaptée au rythme unique de votre profession qui fait la différence entre un carnet de commandes plein et des semaines creuses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les couvreurs ?
            </h3>
            <div className="space-y-4">
              {[
                'Les urgences toiture (fuite, tempête) génèrent des appels immédiats à fort CPA',
                'Les projets de réfection complète ont un ticket moyen très élevé',
                'Les certifications RGE sont déterminantes pour les aides à la rénovation',
                'Les avis clients avec photos avant/après sont très convaincants',
                'La saisonnalité (automne, avant hiver) nécessite des campagnes ciblées'
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

export default Couvreur;
