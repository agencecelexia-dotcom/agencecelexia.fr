import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Pisciniste = () => {
  usePageMeta({
    title: 'Marketing Digital Piscinistes | Agence Celexia',
    description: 'Recommandations personnalisées pour piscinistes : publicité, site web, avis clients. Générez plus de leads qualifiés pour vos projets piscine.',
    canonical: 'https://agencecelexia.fr/metiers/pisciniste'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/pisciniste/#service',
    'name': 'Marketing Digital pour Piscinistes',
    'description': 'Solutions de marketing digital sur-mesure pour les piscinistes : génération de leads qualifiés, site web portfolio, gestion des avis clients et campagnes email saisonnières pour maximiser votre chiffre d\'affaires.',
    'url': 'https://agencecelexia.fr/metiers/pisciniste',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Piscinistes' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const metierColor = '#1E88E5';
  const metierLabel = 'Pisciniste';
  const prixAppel = '10€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération de leads qualifiés pour projets piscine (construction, rénovation, entretien)',
      benefits: [
        'Paiement uniquement à l\'appel qualifié',
        'Position prioritaire sur Google',
        'Ciblage géographique précis de votre zone',
        'Filtrage des demandes sérieuses'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Professionnel',
      description: 'Site vitrine optimisé pour convertir vos visiteurs en clients',
      benefits: [
        'Design moderne spécial pisciniste',
        'Galerie photos de vos réalisations',
        'Formulaire devis construction/rénovation',
        'Section entretien et SAV'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Collecte et gestion automatisée des avis Google pour renforcer votre crédibilité',
      benefits: [
        'Collecte automatique après chaque chantier',
        'Réponses assistées par IA',
        'Gestion des avis négatifs',
        'Amélioration de votre note globale'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Campagnes automatisées pour fidéliser et réactiver vos clients',
      benefits: [
        'Relance devis non signés',
        'Rappel entretien annuel piscine',
        'Promotions saisonnières (ouverture/hivernage)',
        'Reconquête clients inactifs'
      ],
      prix: 'Forfait mensuel',
      link: '/services/emailing'
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
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
            Nos recommandations personnalisées pour développer votre activité de pisciniste.
            Publicité performance, site web, avis clients, email marketing.
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

      {/* RECOMMANDATIONS */}
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
                  {/* Priority badge */}
                  <div className="flex-shrink-0">
                    <span
                      className="inline-block px-4 py-2 rounded-lg text-sm font-bold"
                      style={{ backgroundColor: `${metierColor}20`, color: metierColor }}
                    >
                      {rec.priority}
                    </span>
                  </div>

                  {/* Content */}
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

      {/* LE MARCHE DE LA PISCINE ET SES DEFIS DIGITAUX */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              Le marché de la piscine en France
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Pourquoi le digital est devenu indispensable pour les piscinistes
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              La France est le deuxième marché mondial de la piscine privée, juste derrière les États-Unis. Avec plus de 3,2 millions de bassins installés sur le territoire et une croissance annuelle de 10 à 15 % depuis 2020, le secteur attire de plus en plus d'acteurs. Pour un pisciniste indépendant ou une entreprise locale, cette dynamique représente à la fois une opportunité formidable et un défi considérable : comment se démarquer dans un marché où les grandes enseignes nationales comme Desjoyaux, Waterair ou Magiline investissent massivement en publicité ?
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Un cycle de vente long et saisonnier qui exige une stratégie anticipée
            </h3>
            <p>
              Le métier de pisciniste est profondément saisonnier. L'essentiel des demandes de construction se concentre entre février et juin, avec un pic au printemps lorsque les propriétaires commencent à imaginer leur été au bord de la piscine. Le ticket moyen d'une construction neuve oscille entre 15 000 et 50 000 euros, ce qui signifie que chaque prospect perdu représente un manque à gagner considérable. Les particuliers ne prennent pas cette décision à la légère : 78 % des acheteurs de piscine effectuent des recherches en ligne avant de contacter un professionnel. Ils comparent les réalisations, lisent les avis, consultent les galeries photos et demandent plusieurs devis.
            </p>
            <p>
              C'est pourquoi il est essentiel d'être visible dès le mois de janvier sur les requêtes de type « pisciniste + ville » ou « construction piscine + département ». Un pisciniste qui n'apparaît pas dans les trois premiers résultats Google au moment où le prospect cherche laisse littéralement ses futurs clients à la concurrence.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le pouvoir de l'image : avant/après et réalisations
            </h3>
            <p>
              Contrairement à beaucoup d'autres métiers du bâtiment, la piscine est un produit hautement visuel et émotionnel. Un propriétaire n'achète pas seulement un bassin : il achète un cadre de vie, un rêve d'été en famille, un espace de détente. Les photos avant/après de vos chantiers sont votre meilleur argument commercial. Un site web sans galerie de réalisations, c'est comme un restaurant sans carte : le prospect passera son chemin.
            </p>
            <p>
              Les réseaux sociaux, notamment Instagram et Pinterest, jouent un rôle croissant dans l'inspiration des futurs propriétaires de piscine. Mais ces plateformes ne suffisent pas : elles doivent être complétées par un site professionnel qui rassemble vos réalisations, vos certifications et vos avis clients au même endroit.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La rénovation : un marché en pleine expansion
            </h3>
            <p>
              Au-delà de la construction neuve, le marché de la rénovation de piscines connaît une croissance remarquable. Des millions de bassins construits dans les années 2000 arrivent à un âge où le liner doit être remplacé, la filtration modernisée ou la margelle refaite. Ce segment représente des interventions de 5 000 à 20 000 euros et offre l'avantage d'une moindre saisonnalité. Un pisciniste qui sait capter ces demandes via des campagnes ciblées « rénovation piscine » ou « remplacement liner » diversifie son activité et lisse son chiffre d'affaires sur l'année.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              L'entretien annuel : la clé de la fidélisation
            </h3>
            <p>
              Chaque piscine construite est un client potentiel récurrent pour l'ouverture printanière, l'hivernage automnal, le traitement de l'eau et le remplacement des équipements. Les campagnes email automatisées permettent de relancer vos anciens clients au bon moment, avant qu'ils ne cherchent un autre prestataire. Un simple email de rappel envoyé en mars pour l'ouverture de la piscine peut générer un taux de conversion de 30 à 40 % chez vos clients existants.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Face aux chaînes nationales, misez sur la proximité et la confiance
            </h3>
            <p>
              Les grandes enseignes de piscine investissent des budgets publicitaires importants, mais elles ne peuvent pas rivaliser avec un pisciniste local sur un point crucial : la relation de confiance et le service après-vente de proximité. Vos avis Google, vos témoignages clients et votre réactivité sont des atouts que les chaînes ne pourront jamais reproduire. Le marketing digital vous permet d'amplifier ces avantages naturels et de les rendre visibles exactement au moment où le prospect prend sa décision.
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI CES RECOMMANDATIONS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les piscinistes ?
            </h3>
            <div className="space-y-4">
              {[
                'Les projets piscine sont à forte valeur ajoutée : chaque lead qualifié peut générer plusieurs milliers d\'euros de CA',
                'La saisonnalité de votre activité nécessite une présence digitale forte pour capter les projets au bon moment',
                'Les avis clients sont déterminants : 89% des prospects consultent les avis avant de choisir leur pisciniste',
                'L\'email marketing permet de relancer les devis (taux moyen 20k€) et de planifier les entretiens annuels',
                'Un site professionnel avec galerie photos de réalisations renforce votre crédibilité et facilite la conversion'
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

      {/* CTA FINAL */}
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

export default Pisciniste;
