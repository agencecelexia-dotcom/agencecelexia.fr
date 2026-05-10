import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';
import ROICalculator from '../../components/ROICalculator';

const PublicitePerformance = () => {
  usePageMeta({
    title: 'Publicité Performance | Agence Celexia',
    description: 'Payez uniquement pour des appels de clients réels. Positionnement prioritaire sur Google. Paiement par appel qualifié pour artisans.',
    canonical: 'https://agencecelexia.fr/services/publicite-performance'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://agencecelexia.fr/services/publicite-performance/#service',
    'name': 'Publicité à la Performance pour Artisans',
    'description': 'Système de génération d\'appels qualifiés pour artisans. Positionnement prioritaire sur Google avec paiement uniquement à l\'appel qualifié.',
    'url': 'https://agencecelexia.fr/services/publicite-performance',
    'serviceType': 'Publicité digitale à la performance',
    'category': 'Service complémentaire artisans',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': 'Artisans et professionnels du bâtiment' },
    'datePublished': '2024-10-01',
    'dateModified': '2026-03-11'
  });

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Paiement à l\'appel',
      desc: 'Vous ne payez que pour les appels de clients réels prêts à investir dans vos services'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Positionnement prioritaire',
      desc: 'Votre entreprise apparaît en tête des résultats de recherche locaux'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Filtrage anti-spam',
      desc: 'Système intelligent qui élimine automatiquement les appels non qualifiés'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Engagement résultats',
      desc: 'Objectif de retour sur investissement rapide, suivi personnalisé'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Géolocalisation précise',
      desc: 'Ciblez uniquement vos zones d\'intervention pour optimiser chaque appel'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Dashboard temps réel',
      desc: 'Suivez vos appels, conversions et ROI en direct depuis votre espace client'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Configuration initiale',
      desc: 'On configure vos zones d\'intervention, votre profil Google My Business et vos critères de qualification',
      duration: 'Jour 1-2'
    },
    {
      step: '02',
      title: 'Lancement campagne',
      desc: 'Votre annonce est mise en ligne et positionnée en tête des recherches locales',
      duration: 'Jour 3'
    },
    {
      step: '03',
      title: 'Premiers appels',
      desc: 'Vous commencez à recevoir des appels qualifiés de clients potentiels',
      duration: 'Jour 4-7'
    },
    {
      step: '04',
      title: 'Optimisation continue',
      desc: 'On affine le ciblage et les critères pour maximiser la qualité des appels',
      duration: 'En continu'
    }
  ];

  const faq = [
    {
      q: 'Comment fonctionne le paiement à l\'appel ?',
      a: 'Vous payez uniquement pour les appels qui répondent à vos critères de qualification : zone d\'intervention, type de projet, budget minimum. Si un appel ne correspond pas, vous ne payez rien.'
    },
    {
      q: 'Quel est le prix par appel ?',
      a: 'Le prix varie selon votre secteur d\'activité, de 10€ à 25€ par appel qualifié. Utilisez notre calculateur ROI ci-dessus pour voir le coût exact dans votre métier.'
    },
    {
      q: 'Combien d\'appels vais-je recevoir ?',
      a: 'Le volume dépend de votre zone d\'intervention et de votre secteur. En moyenne, nos clients reçoivent entre 20 et 80 appels qualifiés par mois. On vous montre le potentiel exact lors de l\'audit gratuit.'
    },
    {
      q: 'Y a-t-il un engagement ou un contrat ?',
      a: 'Aucun engagement. Vous pouvez suspendre ou arrêter le service à tout moment. On ne facture que les appels reçus, pas d\'abonnement mensuel.'
    },
    {
      q: 'Comment obtenez-vous un positionnement prioritaire ?',
      a: 'Nous activons un dispositif d\'acquisition à la performance qui place votre entreprise en haut des résultats locaux pour vos requêtes prioritaires, sans que vous ayez à gérer une régie publicitaire.'
    },
    {
      q: 'Que se passe-t-il si je ne suis pas satisfait ?',
      a: 'Notre objectif est votre satisfaction. Nous travaillons en étroite collaboration avec vous pour optimiser les résultats. Aucun engagement de durée, vous pouvez arrêter à tout moment.'
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Publicité à la Performance</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Payez uniquement pour
            <span className="block text-violet-600">des Appels Qualifiés</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Positionnement prioritaire sur Google. Filtrage automatique des spams. Objectif de ROI positif rapide.
            <strong className="block mt-2 text-gray-900">Payez uniquement les appels qualifiés.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un audit gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#calculateur" className="btn-ghost text-base px-8 py-4">
              Calculer mon ROI
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Avantages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Pourquoi choisir le paiement à la performance ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="card p-6 border-gray-200 group hover:border-violet-200">
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center mb-4 text-violet-600
                               group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED EXPLANATION */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">En détail</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Comment fonctionne la publicité à la performance pour les artisans ?
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              La publicité à la performance repose sur un dispositif d'acquisition local qui positionne votre entreprise en haut des résultats de recherche dans votre zone d'intervention. Contrairement aux régies au clic où vous payez chaque clic, qu'il aboutisse ou non à un appel, notre dispositif facture uniquement les appels qualifiés que vous recevez.
            </p>
            <p>
              Concrètement, votre entreprise apparaît tout en haut des résultats locaux. Lorsqu'un utilisateur recherche « plombier urgence Lyon » ou « couvreur Bordeaux », votre fiche apparaît avec votre note, vos horaires et un bouton d'appel direct.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Notre processus de qualification des appels</h3>
            <p>
              Tous les appels ne se valent pas. C'est pourquoi nous avons mis en place un système de qualification rigoureux. Chaque appel est analysé selon plusieurs critères : la localisation du client (dans votre zone d'intervention ?), le type de demande (correspond à vos services ?), et le sérieux de la demande (projet réel avec budget ?).
            </p>
            <p>
              Les appels qui ne répondent pas à ces critères — démarcheurs, erreurs de numéro, demandes hors zone — sont automatiquement filtrés et ne vous sont pas facturés. En moyenne, notre taux de qualification atteint 85%, ce qui signifie que 85 appels sur 100 que vous recevez sont de vrais prospects intéressés par vos services.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Pourquoi ce modèle est idéal pour les artisans</h3>
            <p>
              Le modèle de paiement à l'appel élimine le risque financier pour l'artisan. Pas d'abonnement mensuel fixe, pas de budget publicitaire à avancer. Vous investissez uniquement quand vous recevez un contact qualifié. C'est particulièrement adapté aux artisans dont l'activité connaît des variations saisonnières : en période creuse, vos coûts baissent naturellement puisque vous ne payez que les appels reçus.
            </p>
            <p>
              De plus, le ticket moyen d'une intervention artisanale (plomberie, électricité, menuiserie) se situe généralement entre 200 € et 2 000 €. Avec un coût par appel qualifié de 10 € à 25 € selon le métier, le retour sur investissement est rapide et mesurable. Un seul chantier signé peut rentabiliser plusieurs dizaines d'appels.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">La transparence au cœur de notre offre</h3>
            <p>
              Chaque appel reçu est enregistré et accessible depuis votre tableau de bord personnel. Vous pouvez réécouter les conversations, vérifier la qualification et contester un appel si vous estimez qu'il ne correspond pas aux critères définis. Notre équipe analyse manuellement chaque contestation et vous rembourse sous 48 heures si l'appel n'était effectivement pas qualifié.
            </p>
            <p>
              Nous fournissons également des rapports hebdomadaires détaillés incluant le nombre d'appels reçus, le taux de conversion en devis, le coût par acquisition client et votre retour sur investissement global. Cette transparence totale vous permet de piloter votre budget publicitaire en toute sérénité et de comprendre précisément combien chaque nouveau client vous coûte.
            </p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-8 mb-3">Une stratégie locale ultra-ciblée</h3>
            <p>
              Notre système de géolocalisation vous permet de définir précisément vos zones d'intervention. Que vous couvriez un rayon de 15 km autour de votre atelier ou plusieurs départements, nous ajustons le ciblage pour que seuls les clients situés dans votre périmètre puissent vous contacter. Cette précision géographique évite les déplacements inutiles et maximise votre rentabilité par intervention. Les artisans qui utilisent notre service constatent en moyenne une réduction de 30% de leurs trajets improductifs, ce qui représente un gain de temps et de carburant considérable sur l'année.
            </p>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="calculateur" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Le processus</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 text-lg">
              De la configuration à vos premiers clients en moins d'une semaine
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={i} className="card p-6 md:p-8 border-gray-200 hover:border-violet-200 group transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-start md:items-center gap-4 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg flex-shrink-0
                                   group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:text-right md:min-w-[100px]">
                    <span className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="card p-6 border-gray-200 group cursor-pointer">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Prêt à multiplier vos appels clients ?
          </h2>
          <p className="text-lg text-violet-200 mb-8 leading-relaxed">
            Audit gratuit de 30 minutes pour évaluer le potentiel dans votre zone
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

export default PublicitePerformance;
