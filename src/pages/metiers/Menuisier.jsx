import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Menuisier = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Menuisiers | Agence Celexia',
    description: 'Recommandations personnalisées pour menuisiers : site portfolio, publicité, avis clients. Multipliez vos projets menuiserie.',
    canonical: 'https://agencecelexia.fr/metiers/menuisier'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/menuisier/#service',
    'name': 'Marketing Digital pour Menuisiers',
    'description': 'Marketing digital dedie aux menuisiers et ebenistes : mise en valeur du savoir-faire artisanal, portfolio de realisations sur-mesure, differenciation face a la grande distribution et generation de projets a forte valeur ajoutee.',
    'url': 'https://agencecelexia.fr/metiers/menuisier',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Menuisiers' }
  });

  const metierColor = '#BF6C2E';
  const metierLabel = 'Menuisier';
  const prixAppel = '20€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Site Web Portfolio',
      description: 'Site vitrine avec galerie de vos réalisations menuiserie',
      benefits: [
        'Galerie photos projets sur-mesure',
        'Présentation savoir-faire',
        'Formulaire devis menuiserie',
        'Design bois et artisanal'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 2',
      service: 'Publicité à la Performance',
      description: 'Génération de leads pour projets menuiserie sur-mesure',
      benefits: [
        'Paiement à l\'appel qualifié',
        'Ciblage projets fenêtres/portes/escaliers',
        'Position prioritaire Google Local',
        'Capture projets rénovation'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis avec photos de vos réalisations',
      benefits: [
        'Avis avec photos projets',
        'Mise en avant du sur-mesure',
        'Amélioration réputation',
        'Crédibilité artisanale'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Fidélisation et relance des devis projets',
      benefits: [
        'Relance devis menuiserie',
        'Newsletter réalisations récentes',
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
            Nos recommandations personnalisées pour développer votre activité de menuisier.
            Showcase de vos réalisations, génération de leads, avis clients.
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

      {/* L'ARTISANAT DU BOIS FACE AU DIGITAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              La menuiserie artisanale et le digital
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Menuisier artisan : comment le digital valorise votre savoir-faire unique
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le menuisier artisan incarne un paradoxe fascinant du marché actuel : dans un monde où la production de masse domine, la demande pour le travail sur-mesure et la qualité artisanale n'a jamais été aussi forte. Les consommateurs, lassés des meubles en kit et des cuisines standardisées, se tournent de plus en plus vers des artisans capables de créer des pièces uniques, adaptées à leurs espaces et à leurs goûts. Mais comment ces clients vous trouvent-ils ? La réponse, de plus en plus souvent, passe par le digital.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le combat David contre Goliath : artisan vs grande distribution
            </h3>
            <p>
              IKEA, Leroy Merlin, Castorama, Schmidt, Cuisinella... Les enseignes de grande distribution et de cuisine intégrée investissent des millions d'euros en publicité chaque année. Un menuisier indépendant ne peut pas rivaliser sur le terrain du volume publicitaire. En revanche, il dispose d'un avantage que ces enseignes ne pourront jamais offrir : l'unicité de chaque réalisation, le contact direct avec l'artisan qui conçoit et fabrique, la possibilité d'adapter chaque détail aux souhaits du client.
            </p>
            <p>
              Le marketing digital permet au menuisier artisan de jouer sur ce terrain-là. Quand un particulier tape « cuisine sur-mesure bois massif » ou « bibliothèque chêne sur-mesure », il ne cherche pas un meuble en kit. Il cherche un artisan. Si votre site web apparaît dans les résultats avec des photos de vos réalisations et des témoignages de clients comblés, vous n'êtes plus en concurrence avec la grande distribution. Vous êtes dans une catégorie à part.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le portfolio en ligne : votre atelier vitrine ouvert 24h/24
            </h3>
            <p>
              Un menuisier vend d'abord avec ses yeux. La beauté du grain, la précision des assemblages, l'harmonie des proportions -- tout cela se transmet par l'image bien avant de se toucher du doigt. Votre portfolio en ligne est l'équivalent digital de votre showroom, mais avec un avantage majeur : il est accessible depuis n'importe où, à n'importe quelle heure. Un couple qui rêve d'un dressing sur-mesure parcourra vos réalisations un dimanche soir sur le canapé. Une architecte d'intérieur qui cherche un menuisier pour un projet client consultera votre galerie entre deux rendez-vous.
            </p>
            <p>
              La qualité des photos est primordiale. Des clichés pris au smartphone dans un atelier mal éclairé ne rendent pas justice à votre travail. Investir dans quelques séances photo professionnelles de vos plus belles réalisations, installées chez le client et mises en situation, transforme votre site en un outil de vente redoutable.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Cuisines et salles de bain : le marché porteur de la rénovation
            </h3>
            <p>
              Le marché de la rénovation de cuisines en France représente plusieurs milliards d'euros par an, et les particuliers sont de plus en plus nombreux à préférer une cuisine artisanale à une cuisine industrielle. Le menuisier qui se positionne sur la fabrication de cuisines sur-mesure accède à des projets de 8 000 à 30 000 euros et plus. Les meubles de salle de bain, les dressings et les aménagements sous pente complètent cette offre avec des tickets moyens de 3 000 à 10 000 euros.
            </p>
            <p>
              Pour capter ce marché, votre présence en ligne doit montrer votre capacité à réaliser des projets complets, de la conception à la pose, avec des matériaux nobles et des finitions irréprochables.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le bois durable : un argument qui séduit de plus en plus
            </h3>
            <p>
              La tendance vers les matériaux écologiques et durables joue pleinement en faveur du menuisier artisan. Le bois issu de forêts gérées durablement, les finitions naturelles à base d'huile ou de cire, la fabrication locale qui réduit l'empreinte carbone : autant d'arguments qui résonnent fortement auprès d'une clientèle sensibilisée aux enjeux environnementaux. Communiquer sur ces engagements via votre site web et vos réseaux sociaux vous différencie des fabricants industriels et justifie des prix supérieurs.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le bouche-à-oreille amplifié par le digital
            </h3>
            <p>
              Le bouche-à-oreille reste le premier canal d'acquisition pour de nombreux menuisiers. Mais le digital ne remplace pas le bouche-à-oreille : il l'amplifie considérablement. Quand un client satisfait vous recommande à un ami, celui-ci va immédiatement taper votre nom sur Google. S'il trouve un site professionnel avec des photos de réalisations magnifiques et des avis élogieux, la recommandation se transforme en conviction. S'il ne trouve rien, ou pire, un profil Google vide, le doute s'installe. Les avis Google sont le bouche-à-oreille du XXIe siècle : chaque témoignage positif est une recommandation permanente, visible par des centaines de prospects potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les menuisiers ?
            </h3>
            <div className="space-y-4">
              {[
                'Le portfolio photo est essentiel : les clients choisissent sur la qualité visible du travail',
                'Les projets menuiserie ont un ticket moyen élevé (fenêtres, escaliers, aménagements)',
                'Les avis avec photos renforcent la crédibilité du savoir-faire artisanal',
                'Les devis ont un cycle long : l\'email marketing permet de relancer efficacement',
                'Un site professionnel différencie du menuisier lambda sans présence web'
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

export default Menuisier;
