import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

const Chauffagiste = () => {
  usePageMeta({
    title: 'Marketing Digital Chauffagistes | Agence Celexia',
    description: 'Recommandations personnalisées pour chauffagistes : publicité, site web, avis clients. Générez plus de contrats d\'entretien et installations.',
    canonical: 'https://agencecelexia.fr/metiers/chauffagiste'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/metiers/chauffagiste/#service',
    'name': 'Marketing Digital pour Chauffagistes',
    'description': 'Accompagnement marketing digital complet pour chauffagistes : visibilité lors des pics hivernaux, promotion des installations pompes à chaleur, automatisation des rappels d\'entretien obligatoire et positionnement sur la transition énergétique.',
    'url': 'https://agencecelexia.fr/metiers/chauffagiste',
    'serviceType': 'Marketing Digital',
    'category': 'Marketing Digital pour Artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Chauffagistes' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const metierColor = '#E05024';
  const metierLabel = 'Chauffagiste';
  const prixAppel = '25€';

  const recommendations = [
    {
      priority: 'Priorité 1',
      service: 'Publicité à la Performance',
      description: 'Génération d\'appels pour dépannage, entretien et installation de chaudières',
      benefits: [
        'Paiement à l\'appel qualifié uniquement',
        'Position prioritaire "chauffagiste [ville]"',
        'Ciblage géographique précis',
        'Capture urgences chauffage hiver'
      ],
      prix: `${prixAppel}/appel`,
      link: '/services/publicite-performance'
    },
    {
      priority: 'Priorité 2',
      service: 'Email Marketing',
      description: 'Automatisation des rappels d\'entretien annuel obligatoire',
      benefits: [
        'Rappel entretien chaudière annuel',
        'Relance devis installation',
        'Promotions PAC et pompes à chaleur',
        'Campagnes avant hiver'
      ],
      prix: 'Forfait mensuel',
      link: '/services/emailing'
    },
    {
      priority: 'Priorité 3',
      service: 'Site Web Professionnel',
      description: 'Site optimisé pour capter urgences et contrats d\'entretien',
      benefits: [
        'Certifications RGE mises en avant',
        'Formulaire devis chaudière/PAC',
        'Section entretien annuel',
        'Bouton appel urgence hiver'
      ],
      prix: 'Sur devis',
      link: '/services/site-web'
    },
    {
      priority: 'Recommandé',
      service: 'Gestion des Avis Clients',
      description: 'Collectez des avis pour renforcer votre crédibilité',
      benefits: [
        'Collecte automatique post-intervention',
        'Réponses aux avis',
        'Mise en avant certifications',
        'Amélioration référencement local'
      ],
      prix: 'Forfait mensuel',
      link: '/services/avis-clients'
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
            Nos recommandations personnalisées pour développer votre activité de chauffagiste.
            Urgences hiver, contrats d\'entretien, installations PAC.
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

      {/* LA TRANSITION ENERGETIQUE ET LE CHAUFFAGISTE */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block" style={{ backgroundColor: `${metierColor}20`, color: metierColor }}>
              Chauffage et transition énergétique
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Le chauffagiste au coeur de la révolution énergétique française
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le métier de chauffagiste traverse une période de transformation sans précédent. L'interdiction progressive des chaudières au fioul, les incitations massives pour l'installation de pompes à chaleur et la montée en puissance des énergies renouvelables dans le bâtiment redessinent complètement le paysage du secteur. Pour les chauffagistes, cette transition énergétique est une opportunité de croissance exceptionnelle, mais elle exige de communiquer différemment auprès d'une clientèle qui a besoin d'être informée, rassurée et accompagnée dans ses choix.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Un marché en pleine explosion : les pompes à chaleur
            </h3>
            <p>
              Le marché français de la pompe à chaleur a connu une accélération spectaculaire, avec plus d'un million d'unités vendues ces dernières années. Le ticket moyen d'une installation de pompe à chaleur air-eau se situe entre 8 000 et 15 000 euros, ce qui en fait l'un des projets les plus rentables pour un chauffagiste. Mais le particulier qui envisage cet investissement fait des recherches approfondies avant de s'engager : il compare les technologies, vérifie les aides financières disponibles (MaPrimeRénov', CEE), consulte les certifications du professionnel et lit les retours d'expérience.
            </p>
            <p>
              Un chauffagiste qui ne dispose pas d'un site web expliquant clairement les avantages de la pompe à chaleur, les aides auxquelles le client peut prétendre et ses propres certifications (RGE, QualiPAC) passe à côté de ce marché en plein essor. Le contenu éducatif -- expliquer simplement la différence entre une PAC air-air et air-eau, détailler le processus d'installation, rassurer sur le niveau sonore -- est un levier d'acquisition puissant.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Les certifications RGE et QualiPAC : un argument commercial décisif
            </h3>
            <p>
              Les particuliers le savent : pour bénéficier des aides à la rénovation énergétique, ils doivent faire appel à un artisan certifié RGE (Reconnu Garant de l'Environnement). Cette certification est bien plus qu'un label technique -- c'est un critère de sélection pour le client. Votre site web, votre fiche Google Business et vos supports de communication doivent mettre ces certifications en avant de manière visible et immédiate. Un chauffagiste RGE qui n'affiche pas clairement cette mention en ligne se prive d'un avantage concurrentiel majeur.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              La saisonnalité extrême : anticiper le rush hivernal
            </h3>
            <p>
              Le chauffage est sans doute le métier du bâtiment le plus soumis à la saisonnalité. Dès les premières baisses de température en octobre, les appels explosent : pannes de chaudière, demandes d'entretien oubliées, installations urgentes avant le grand froid. En décembre et janvier, les agendas sont saturés. Puis, dès mars, l'activité chute brutalement. Cette saisonnalité marquée impose une stratégie digitale en deux temps.
            </p>
            <p>
              Pendant la haute saison, la publicité à la performance doit être maximale pour capter chaque prospect dans un contexte où la demande dépasse souvent l'offre. Pendant la basse saison, le marketing doit se concentrer sur les projets d'installation de pompes à chaleur, les remplacements de chaudières vétustes et les contrats d'entretien -- des prestations qui peuvent se planifier en avance et lisser votre activité tout au long de l'année.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              L'entretien obligatoire : une mine d'or pour la fidélisation
            </h3>
            <p>
              L'entretien annuel de chaudière est une obligation réglementaire pour tous les occupants d'un logement équipé. Ce rendez-vous annuel représente un revenu récurrent prévisible et une occasion de détecter des besoins de remplacement ou de modernisation. L'email marketing automatisé est l'outil parfait pour ce cas d'usage : un rappel envoyé chaque année en septembre ou octobre, personnalisé avec le type d'équipement du client et la date du dernier entretien, transforme un simple rappel en prise de rendez-vous quasi automatique.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Éduquer pour vendre : le marketing de contenu au service du chauffagiste
            </h3>
            <p>
              Le passage d'une chaudière gaz à une pompe à chaleur est un investissement important qui suscite de nombreuses questions chez le particulier. Quel sera le retour sur investissement ? Mon logement est-il compatible ? Quelles aides puis-je obtenir ? Le chauffagiste qui prend le temps de répondre à ces questions sur son site web -- via des articles, des FAQ détaillées ou des simulateurs d'économies -- se positionne comme un expert de confiance. Ce contenu génère du trafic qualifié et pré-qualifie le prospect avant même le premier appel téléphonique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi ces recommandations pour les chauffagistes ?
            </h3>
            <div className="space-y-4">
              {[
                'L\'entretien annuel obligatoire génère un revenu récurrent prévisible',
                'Les urgences chauffage en hiver ont un CPA élevé mais un taux de conversion excellent',
                'L\'email marketing automatise les rappels légaux d\'entretien',
                'Les certifications RGE ouvrent droit aux aides et doivent être mises en avant',
                'La transition énergétique (PAC, pompes à chaleur) offre de nouvelles opportunités'
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

export default Chauffagiste;
