import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Paysagiste = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Paysagistes | Agence Celexia',
    description: 'Recommandations personnalisées pour paysagistes : publicité, site web portfolio, avis clients. Développez votre carnet de commandes.',
    canonical: 'https://agencecelexia.fr/metiers/paysagiste'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/paysagiste/#service',
    'name': 'Marketing Digital pour Paysagistes',
    'description': 'Strategies de marketing digital adaptees aux paysagistes : portfolio visuel en ligne, generation de leads saisonniers, gestion de reputation et campagnes email pour contrats d\'entretien recurrents.',
    'url': 'https://agencecelexia.fr/metiers/paysagiste',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Paysagistes' }
  });

  const metierColor = '#4CAF50';
  const metierLabel = 'Paysagiste';
  const prixAppel = '10€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Site Web Portfolio',
      description: 'Site vitrine avec galerie photos de vos réalisations paysagères',
      benefits: [
        'Galerie photos avant/après',
        'Présentation des services (création, entretien)',
        'Formulaire devis jardins',
        'Design végétal et naturel'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 2',
      service: 'Publicité à la Performance',
      description: 'Génération de leads pour création et entretien d\'espaces verts',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Ciblage géographique précis',
        'Position prioritaire Google Local',
        'Capture projets aménagement extérieur'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis avec photos de vos réalisations',
      benefits: [
        'Collecte automatique avec photos',
        'Avis avec visuels jardins',
        'Amélioration réputation locale',
        'Showcase de votre savoir-faire'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Campagnes saisonnières et contrats d\'entretien récurrents',
      benefits: [
        'Rappel tonte et taille saisonnière',
        'Promotions plantations printemps/automne',
        'Relance devis aménagement',
        'Offres entretien annuel'
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

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Nos recommandations personnalisées pour développer votre activité de paysagiste.
            Showcase de vos réalisations, génération de leads, gestion d\'avis.
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

      {/* L'UNIVERS DU PAYSAGISME ET LE DIGITAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              Le paysagisme face au digital
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Comment le marketing digital transforme le métier de paysagiste
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier de paysagiste est en pleine mutation. Longtemps fondé exclusivement sur le bouche-à-oreille et les recommandations de voisinage, le secteur du paysagisme doit désormais composer avec des clients qui débutent leur parcours d'achat bien avant de décrocher le téléphone. Avant même de chercher « paysagiste près de chez moi » sur Google, le futur client a souvent passé des heures sur Pinterest à épingler des idées d'aménagement, à parcourir des comptes Instagram de jardins contemporains ou à regarder des vidéos de transformations spectaculaires sur YouTube.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Deux saisons, deux stratégies marketing distinctes
            </h3>
            <p>
              L'activité de paysagiste connaît deux pics majeurs : le printemps pour les créations et les plantations, et l'automne pour les travaux de restructuration et la préparation hivernale. Ces fenêtres de forte demande sont courtes, et la concurrence est rude. Un paysagiste qui lance sa visibilité en ligne en avril a déjà perdu une partie de la saison : les prospects commencent leurs recherches dès février. À l'inverse, les mois d'hiver, souvent perçus comme creux, sont le moment idéal pour préparer ses campagnes, enrichir son portfolio et mettre en place des séquences email qui se déclencheront automatiquement au retour des beaux jours.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La diversité des services : un atout à valoriser en ligne
            </h3>
            <p>
              Un paysagiste ne fait pas qu'un seul métier. Conception de jardins, terrassement, pose de clôtures, création de terrasses, plantations, élagage, installation d'arrosage automatique, éclairage extérieur... Cette polyvalence est une force commerciale, mais elle doit être clairement présentée sur votre site web. Un prospect qui cherche « pose terrasse bois » ne tombera sur votre site que si cette prestation y figure avec ses propres mots-clés et ses propres photos de réalisations.
            </p>
            <p>
              Chaque service mérite sa propre page, ses propres visuels et son propre argumentaire. Un site générique qui mentionne vaguement « aménagement extérieur » ne capte qu'une fraction du trafic potentiel.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              L'éco-paysagisme : une tendance porteuse à exploiter
            </h3>
            <p>
              La demande pour des jardins écologiques, des aménagements favorisant la biodiversité et des solutions de gestion durable de l'eau ne cesse de croître. Les particuliers recherchent activement des paysagistes capables de concevoir des jardins secs, des toitures végétalisées, des noues paysagères ou des haies champêtres. Ce positionnement « vert » est non seulement en phase avec les attentes du marché, mais il permet également de se différencier des concurrents qui proposent encore uniquement du gazon et des thuyas.
            </p>
            <p>
              Du contenu éducatif sur ces sujets -- articles de blog, guides pratiques, vidéos de projets réalisés -- renforce votre expertise perçue et attire un trafic qualifié de prospects déjà sensibilisés à ces enjeux.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Les contrats d'entretien : le nerf de la guerre financière
            </h3>
            <p>
              La création de jardins génère du chiffre d'affaires ponctuel, mais ce sont les contrats d'entretien récurrents qui assurent la stabilité financière d'une entreprise de paysagisme. Un client qui vous confie la tonte, la taille et l'entretien saisonnier de son jardin représente un revenu prévisible sur plusieurs années. Le marketing par email est l'outil idéal pour convertir vos clients de création en clients d'entretien : une séquence automatisée envoyée trois mois après la livraison d'un chantier, proposant un contrat d'entretien annuel, génère des taux de conversion remarquables.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Contre le DIY, affirmez votre expertise professionnelle
            </h3>
            <p>
              Les émissions télévisées et les tutoriels en ligne incitent de plus en plus de particuliers à tenter l'aménagement de leur jardin eux-mêmes. Pour un paysagiste professionnel, l'enjeu n'est pas de combattre cette tendance, mais de démontrer la valeur ajoutée d'un professionnel : la maîtrise du végétal, la connaissance des sols, la vision à long terme, la garantie d'un résultat durable. Votre présence digitale, à travers des photos de projets aboutis et des témoignages de clients satisfaits, est le meilleur antidote au « je vais le faire moi-même ».
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les paysagistes ?
            </h3>
            <div className="space-y-4">
              {[
                'Le visuel est roi : un portfolio photo professionnel est indispensable pour convaincre',
                'Les projets paysagers se décident en grande partie sur les réalisations passées',
                'La saisonnalité forte nécessite des campagnes email ciblées (printemps/automne)',
                'Les avis avec photos de jardins transformés sont extrêmement convaincants',
                'Les contrats d\'entretien récurrents assurent un revenu stable toute l\'année'
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

export default Paysagiste;
