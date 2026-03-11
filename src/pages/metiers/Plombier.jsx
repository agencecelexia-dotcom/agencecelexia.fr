import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Plombier = () => {
  usePageMeta({
    title: 'Solutions Marketing Digital pour Plombiers | Agence Celexia',
    description: 'Recommandations personnalisées pour plombiers : publicité, site web, avis clients. Générez plus d\'appels urgents et de chantiers.',
    canonical: 'https://agencecelexia.fr/metiers/plombier'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/plombier/#service',
    'name': 'Marketing Digital pour Plombiers',
    'description': 'Marketing digital specialise pour plombiers : captation d\'appels urgents, visibilite locale maximale, gestion des avis clients et fidelisation par email pour transformer les interventions ponctuelles en contrats recurrents.',
    'url': 'https://agencecelexia.fr/metiers/plombier',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Plombiers' }
  });

  const metierColor = '#1EA36F';
  const metierLabel = 'Plombier';
  const prixAppel = '25€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels urgents et demandes de devis pour dépannage, installation et rénovation',
      benefits: [
        'Paiement uniquement à l\'appel qualifié',
        'Position prioritaire sur "plombier urgence [ville]"',
        'Ciblage géographique précis',
        'Disponibilité 24/7 pour capter les urgences'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Gestion des Avis Clients',
      description: 'Multipliez vos avis Google pour dominer les résultats locaux',
      benefits: [
        'Collecte automatique après intervention',
        'Réponses rapides aux avis',
        'Amélioration de votre réputation locale',
        'Plus de crédibilité face aux concurrents'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
    },
    {
      priority: 'Priorité 3',
      service: 'Site Web Professionnel',
      description: 'Site optimisé pour les urgences et la prise de rendez-vous rapide',
      benefits: [
        'Bouton appel d\'urgence visible',
        'Formulaire devis express',
        'Présentation de vos services',
        'Optimisé mobile pour appels immédiats'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Recommandé',
      service: 'Email Marketing',
      description: 'Fidélisation et réactivation de clients pour entretien chaudière, détartrage, etc.',
      benefits: [
        'Rappel entretien annuel chaudière',
        'Relance devis non signés',
        'Promotions saisonnières',
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
            Nos recommandations personnalisées pour développer votre activité de plombier.
            Captez les urgences, développez votre notoriété locale, fidélisez vos clients.
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

      {/* LE QUOTIDIEN DU PLOMBIER ET LE DIGITAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              La plomberie à l'ère du digital
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Quand le téléphone doit sonner : les enjeux digitaux du plombier
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Pour un plombier, le marketing digital n'est pas un luxe, c'est une question de survie commerciale. Contrairement à d'autres métiers du bâtiment où le client prend le temps de comparer, de réfléchir et de planifier, la plomberie obéit à une logique d'urgence. Environ 70 % des recherches « plombier » sur Google correspondent à une situation de crise : fuite d'eau, canalisation bouchée, chauffe-eau en panne, toilettes hors service. Le particulier qui tape « plombier urgence Marseille » à 22 heures un samedi soir n'a pas la patience de parcourir dix pages de résultats. Il appelle le premier professionnel qui inspire confiance.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Le mobile d'abord : la réalité des recherches en plomberie
            </h3>
            <p>
              Plus de 85 % des recherches liées à la plomberie sont effectuées depuis un smartphone. Le propriétaire est debout dans sa salle de bain inondée, le téléphone à la main. Il a besoin d'un numéro à appeler immédiatement. Si votre site web met plus de trois secondes à charger sur mobile, si le numéro de téléphone n'est pas cliquable, si le bouton d'appel n'est pas visible sans scroller, vous perdez ce prospect au profit du concurrent dont le site est optimisé pour cette situation exacte.
            </p>
            <p>
              Un site de plombier performant n'est pas un site « joli ». C'est un site qui affiche un numéro de téléphone en gros, un bouton « appeler maintenant » qui fonctionne en un tap, et vos avis Google bien visibles pour rassurer en une seconde.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La confiance en quelques secondes : le rôle crucial des avis
            </h3>
            <p>
              La plomberie souffre d'un problème de réputation sectorielle. Les arnaques au dépannage d'urgence, les factures abusives et les artisans peu scrupuleux ont rendu les consommateurs extrêmement méfiants. Dans ce contexte, vos avis Google sont votre meilleur atout. Un plombier avec 80 avis et une note de 4,7 étoiles rassure instantanément, là où un profil sans avis suscite la méfiance. Chaque intervention réussie devrait se transformer en avis positif grâce à un système de collecte automatisé.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Au-delà de l'urgence : développer le chiffre d'affaires planifié
            </h3>
            <p>
              Si les urgences représentent le flux quotidien d'un plombier, les projets planifiés -- rénovation de salle de bain, remplacement de chauffe-eau, installation de système de filtration -- constituent les interventions les plus rentables. Le ticket moyen d'une urgence se situe entre 200 et 400 euros, tandis qu'une rénovation complète de salle de bain peut atteindre 5 000 à 15 000 euros. Capter ces projets nécessite une visibilité différente : des pages dédiées à la rénovation, un formulaire de demande de devis et des photos de réalisations qui démontrent votre capacité à mener des projets d'envergure.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Les contrats d'entretien : transformer l'intervention ponctuelle en revenu récurrent
            </h3>
            <p>
              L'entretien annuel de chaudière est une obligation légale pour les locataires et propriétaires. Chaque client chez qui vous intervenez pour un dépannage est un contrat d'entretien potentiel. Les campagnes email automatisées permettent de relancer ces clients au bon moment : un email envoyé en septembre pour l'entretien de chaudière avant l'hiver génère des prises de rendez-vous régulières sans aucun effort de prospection. Sur une base de 500 clients, un simple rappel annuel peut générer 50 à 80 contrats d'entretien supplémentaires.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La concurrence urbaine : se démarquer dans un marché saturé
            </h3>
            <p>
              Dans les grandes agglomérations, la densité de plombiers est telle que la visibilité en ligne devient un facteur déterminant. À Paris, Lyon ou Marseille, des dizaines de plombiers se disputent les mêmes requêtes Google. Sans stratégie digitale, même un excellent plombier reste invisible. La publicité à la performance, combinée à une fiche Google Business optimisée et des avis réguliers, permet de sortir du lot et de remplir son planning semaine après semaine, même dans les zones les plus concurrentielles.
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI CES RECOMMANDATIONS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les plombiers ?
            </h3>
            <div className="space-y-4">
              {[
                '70% des recherches "plombier" sont des urgences : il faut être visible immédiatement sur Google',
                'Les avis sont décisifs : 93% des clients consultent les avis avant d\'appeler un plombier',
                'Le ticket moyen des interventions justifie un coût d\'acquisition client élevé (25€/appel rentable)',
                'L\'email marketing permet de transformer les interventions ponctuelles en contrats d\'entretien récurrents',
                'Un site optimisé mobile avec bouton d\'appel direct peut doubler votre taux de conversion'
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
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Plombier;
