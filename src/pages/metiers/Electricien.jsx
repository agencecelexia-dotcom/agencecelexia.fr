import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Electricien = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Électriciens | Agence Celexia',
    description: 'Recommandations personnalisées pour électriciens : publicité, site web, avis clients. Générez plus de chantiers et dépannages électriques.',
    canonical: 'https://agencecelexia.fr/metiers/electricien'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/electricien/#service',
    'name': 'Marketing Digital pour Électriciens',
    'description': 'Solutions marketing digital pour electriciens : captation de chantiers neufs et renovations, visibilite sur les nouvelles technologies (bornes de recharge, panneaux solaires, domotique) et gestion de reputation en ligne.',
    'url': 'https://agencecelexia.fr/metiers/electricien',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Électriciens' }
  });

  const metierColor = '#F4C20D';
  const metierLabel = 'Électricien';
  const prixAppel = '20€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour dépannage électrique, installation et mise aux normes',
      benefits: [
        'Paiement uniquement à l\'appel qualifié',
        'Position prioritaire sur "électricien [ville]"',
        'Ciblage précis de votre zone',
        'Capture des urgences 24/7'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Site Web Professionnel',
      description: 'Site optimisé pour capter les demandes de dépannage et travaux électriques',
      benefits: [
        'Design professionnel et rassurant',
        'Certifications mises en avant',
        'Formulaire devis express',
        'Bouton appel d\'urgence'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Priorité 3',
      service: 'Gestion des Avis Clients',
      description: 'Renforcez votre crédibilité avec des avis clients réguliers',
      benefits: [
        'Collecte automatique post-intervention',
        'Réponses rapides aux avis',
        'Mise en avant de votre expertise',
        'Amélioration du référencement local'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Fidélisez vos clients avec des rappels et promotions ciblées',
      benefits: [
        'Rappel vérification installation',
        'Relance devis tableaux électriques',
        'Promotions saisonnières',
        'Réactivation clients anciens'
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
            Nos recommandations personnalisées pour développer votre activité d'électricien.
            Captez les urgences, développez votre clientèle, fidélisez.
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
              Solutions adaptées à votre métier d'{metierLabel.toLowerCase()} pour maximiser votre croissance
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

      {/* L'ELECTRICIEN FACE AUX NOUVELLES TECHNOLOGIES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              L'électricité en pleine révolution
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Un métier en pleine mutation : les nouvelles opportunités pour les électriciens
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier d'électricien n'a jamais autant évolué qu'au cours des cinq dernières années. Autrefois cantonné au câblage, aux tableaux électriques et au dépannage, l'électricien d'aujourd'hui installe des bornes de recharge pour véhicules électriques, pose des panneaux photovoltaïques, configure des systèmes domotiques et intègre des solutions de stockage d'énergie. Cette diversification des compétences ouvre des marchés considérables, mais elle impose aussi de repenser entièrement sa communication pour attirer les bons clients.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Les bornes de recharge : un marché en croissance exponentielle
            </h3>
            <p>
              Avec l'accélération des ventes de véhicules électriques en France -- plus de 25 % des immatriculations neuves en 2025 -- la demande d'installation de bornes de recharge à domicile explose. Chaque propriétaire de véhicule électrique a besoin d'une borne Wallbox installée par un électricien qualifié IRVE (Infrastructure de Recharge de Véhicules Électriques). Le ticket moyen de cette prestation se situe entre 1 200 et 2 500 euros, et le volume de demandes ne fait que croître.
            </p>
            <p>
              Pourtant, la plupart des électriciens qui proposent ce service n'ont aucune page dédiée sur leur site web. Les prospects qui tapent « installation borne de recharge + ville » ne trouvent souvent que des plateformes d'intermédiation qui prélèvent des commissions de 15 à 25 %. Un électricien avec une page bien référencée sur cette prestation capte ces clients en direct, sans intermédiaire.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le solaire résidentiel : l'électricien comme partenaire de la transition
            </h3>
            <p>
              L'autoconsommation photovoltaïque connaît un engouement sans précédent auprès des particuliers français. Les installations résidentielles de panneaux solaires représentent des projets de 8 000 à 20 000 euros, avec des aides gouvernementales qui rendent l'investissement attractif. L'électricien certifié QualiPV ou RGE qui se positionne sur ce créneau accède à un marché à forte marge. Mais la concurrence est forte, notamment de la part d'installateurs spécialisés qui investissent massivement en publicité digitale.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La domotique et la maison connectée : fidéliser par l'innovation
            </h3>
            <p>
              La domotique n'est plus un gadget réservé aux passionnés de technologie. Les systèmes de gestion de l'éclairage, les volets roulants connectés, les thermostats intelligents et les systèmes d'alarme intégrés sont devenus des prestations courantes. Un électricien qui maîtrise ces technologies peut se positionner comme intégrateur de solutions pour la maison intelligente, avec des projets allant de 500 euros pour un simple thermostat connecté à plus de 5 000 euros pour une installation domotique complète.
            </p>
            <p>
              Le marketing digital permet de cibler spécifiquement les propriétaires intéressés par ces solutions, via des campagnes Google Ads sur des mots-clés comme « installation domotique maison » ou « électricien maison connectée ».
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Urgences et sécurité : les fondamentaux qui ne changent pas
            </h3>
            <p>
              Malgré l'émergence de ces nouveaux marchés, le coeur de métier de l'électricien reste le dépannage et la mise en conformité. Les pannes électriques, les courts-circuits, les tableaux vétustes et les mises aux normes obligatoires avant la vente d'un bien immobilier génèrent un flux constant d'appels. La sécurité électrique est un sujet sur lequel le client ne transige pas : il veut un professionnel certifié, assuré et bien noté. Votre certification Consuel, vos assurances décennales et vos avis clients positifs sont les piliers de votre crédibilité en ligne.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Mixte urgence et projet : structurer votre acquisition client
            </h3>
            <p>
              L'électricien a une particularité par rapport aux autres métiers du bâtiment : il doit gérer simultanément des appels d'urgence (panne, court-circuit) et des demandes de projets planifiés (rénovation électrique, installation de borne, pose de panneaux solaires). Ces deux types de clients ont des parcours d'achat radicalement différents. L'un cherche un numéro de téléphone à appeler dans la minute ; l'autre compare des devis pendant plusieurs semaines. Votre stratégie digitale doit adresser ces deux publics de manière distincte, avec des pages d'atterrissage, des messages et des appels à l'action adaptés à chaque situation. Un site web qui ne traite que le dépannage perd les projets planifiés. Un site qui ne met pas en avant l'urgence perd les appels immédiats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les électriciens ?
            </h3>
            <div className="space-y-4">
              {[
                'Les dépannages électriques sont urgents : vous devez apparaître en premier sur Google',
                'La sécurité est critique : un site professionnel et des avis rassurent les prospects',
                'Les chantiers de rénovation électrique représentent un CA important : chaque lead compte',
                'Les certifications (Qualifelec, RGE) doivent être mises en avant pour rassurer',
                'L\'email permet de relancer sur les mises aux normes et vérifications obligatoires'
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
            Prêt à développer votre activité d'{metierLabel.toLowerCase()} ?
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

export default Electricien;
