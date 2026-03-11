import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const Home = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  usePageMeta({
    title: 'Agence Celexia | Marketing Digital pour Artisans',
    description: 'Agence marketing digital pour artisans du bâtiment. Publicité locale, sites web, SEO, avis clients, emailing et automatisation. Résultats mesurables.',
    canonical: 'https://agencecelexia.fr/'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://agencecelexia.fr/#website',
        'url': 'https://agencecelexia.fr',
        'name': 'Agence Celexia',
        'description': 'Agence marketing digital spécialisée pour artisans du bâtiment.',
        'inLanguage': 'fr-FR',
        'publisher': { '@id': 'https://agencecelexia.fr/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agencecelexia.fr/#webpage',
        'url': 'https://agencecelexia.fr',
        'name': 'Agence Celexia | Marketing Digital pour Artisans',
        'isPartOf': { '@id': 'https://agencecelexia.fr/#website' },
        'about': { '@id': 'https://agencecelexia.fr/#organization' },
        'description': 'Agence marketing digital pour artisans du bâtiment. Publicité locale, sites web, SEO, avis clients, emailing et automatisation.',
        'inLanguage': 'fr-FR',
        'datePublished': '2024-10-01',
        'dateModified': '2026-03-11'
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://agencecelexia.fr/#organization',
        'name': 'Agence Celexia',
        'url': 'https://agencecelexia.fr',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://agencecelexia.fr/logo.png',
          'width': 605,
          'height': 98
        },
        'image': 'https://agencecelexia.fr/logo.png',
        'description': 'Agence marketing digital pour artisans du bâtiment. Publicité à la performance, sites web, SEO local, gestion avis clients, email marketing, automatisation.',
        'priceRange': '€€',
        'serviceType': 'Marketing Digital pour Artisans',
        'telephone': '+33651725756',
        'email': 'contact@agencecelexia.fr',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FR',
          'addressLocality': 'France'
        },
        'areaServed': { '@type': 'Country', 'name': 'France' },
        'knowsLanguage': 'fr',
        'sameAs': [
          'https://www.facebook.com/agencecelexia',
          'https://www.linkedin.com/company/agence-celexia'
        ],
        'founder': [
          { '@type': 'Person', 'name': 'Thomas', 'jobTitle': 'Co-fondateur - Marketing Digital & Acquisition Client' },
          { '@type': 'Person', 'name': 'Antoine', 'jobTitle': 'Co-fondateur - Développement Web & Optimisation Technique' }
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+33651725756',
          'email': 'contact@agencecelexia.fr',
          'contactType': 'customer service',
          'availableLanguage': 'French'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Services Marketing Digital pour Artisans',
          'itemListElement': [
            { '@type': 'OfferCatalog', 'name': 'Publicité à la Performance', 'url': 'https://agencecelexia.fr/services/publicite-performance' },
            { '@type': 'OfferCatalog', 'name': 'Création de Sites Web', 'url': 'https://agencecelexia.fr/services/site-web' },
            { '@type': 'OfferCatalog', 'name': 'Référencement SEO', 'url': 'https://agencecelexia.fr/services/seo' },
            { '@type': 'OfferCatalog', 'name': 'Gestion Avis Clients', 'url': 'https://agencecelexia.fr/services/avis-clients' },
            { '@type': 'OfferCatalog', 'name': 'Email Marketing', 'url': 'https://agencecelexia.fr/services/emailing' },
            { '@type': 'OfferCatalog', 'name': 'Automatisation Marketing', 'url': 'https://agencecelexia.fr/services/automatisation' }
          ]
        }
      }
    ]
  });

  // Lazy load Cal.com with IntersectionObserver
  useEffect(() => {
    if (!calRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !calLoaded) {
          setCalLoaded(true);
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          window.Cal("init", "rdv-decouverte-240-appels-an-garantis", {origin:"https://app.cal.com"});
          window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("inline", {
            elementOrSelector:"#my-cal-inline-rdv-decouverte-240-appels-an-garantis",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "agence-celexia-1qyn93/rdv-decouverte-240-appels-an-garantis",
          });
          window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("ui", {
            "cssVarsPerTheme":{"light":{"cal-brand":"#7C3AED"},"dark":{"cal-brand":"#7C3AED"}},
            "hideEventTypeDetails":false,
            "layout":"month_view"
          });
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(calRef.current);
    return () => observer.disconnect();
  }, [calLoaded]);

  const services = [
    {
      title: 'Google Local Services Ads',
      category: 'Génération Leads',
      description: 'Payez uniquement pour des appels de clients réels. Votre entreprise apparaît en position #1 sur Google avec le badge "Garanti par Google".',
      link: '/services/publicite-performance',
      color: 'blue',
      features: ['Paiement à l\'appel qualifié', 'Badge Google Garantie', 'ROI mesurable']
    },
    {
      title: 'Sites Web Artisans',
      category: 'Web Design',
      description: 'Site professionnel livré en 7 jours, conçu pour les artisans. Design moderne, optimisé pour le référencement et la conversion.',
      link: '/services/site-web',
      color: 'violet',
      features: ['Livraison en 7 jours', 'Design responsive', 'Optimisé SEO local']
    },
    {
      title: 'Référencement SEO Local',
      category: 'Visibilité',
      description: 'Dominez les résultats Google dans votre zone. Optimisation Google Business Profile et stratégie de contenu local.',
      link: '/services/seo',
      color: 'emerald',
      features: ['Google Business Profile', 'Backlinks de qualité', 'Résultats sous 90 jours']
    },
    {
      title: 'Gestion des Avis Clients',
      category: 'E-réputation',
      description: 'Automatisez la collecte d\'avis Google après chaque intervention. Répondez aux avis avec l\'aide de l\'IA.',
      link: '/services/avis-clients',
      color: 'amber',
      features: ['Collecte automatisée', 'Réponses assistées par IA', 'Gestion des avis négatifs']
    },
    {
      title: 'Email Marketing',
      category: 'Fidélisation',
      description: 'Campagnes email automatisées pour fidéliser vos clients et réactiver les anciens. Relances de devis et promotions.',
      link: '/services/emailing',
      color: 'cyan',
      features: ['Relances automatiques', 'Reconquête clients inactifs', 'Campagnes saisonnières']
    },
    {
      title: 'Automatisation',
      category: 'Productivité',
      description: 'Automatisez vos processus administratifs : CRM, devis, facturation, rappels de rendez-vous.',
      link: '/services/automatisation',
      color: 'purple',
      features: ['CRM dédié artisans', 'Devis automatiques', 'Rappels de RDV']
    }
  ];

  const colorClasses = {
    blue: 'from-blue-400 to-blue-600',
    violet: 'from-violet-400 to-violet-600',
    emerald: 'from-emerald-400 to-emerald-600',
    amber: 'from-amber-400 to-amber-600',
    cyan: 'from-cyan-400 to-cyan-600',
    purple: 'from-purple-400 to-purple-600'
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" aria-hidden="true" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Agence Marketing Digital</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Le marketing digital
            <span className="block text-violet-600">conçu pour les artisans</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            De la publicité locale à l'automatisation, nous accompagnons les artisans du bâtiment
            avec des solutions marketing adaptées à leur métier. Plus de clients, moins de temps perdu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un appel gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#services" className="btn-ghost text-base px-8 py-4">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos Services</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              6 solutions pour développer votre activité
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque service est conçu pour les artisans et professionnels du bâtiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="card overflow-hidden border-gray-200 group hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
                <div className={`h-48 bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center text-white font-display text-2xl font-bold px-6 text-center relative`}>
                  {service.title}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">{service.category}</span>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-violet-600 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                    En savoir plus
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CELEXIA */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi Celexia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Une agence qui comprend les artisans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous travaillons exclusivement avec les professionnels du bâtiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Spécialistes de l\'artisanat', desc: 'Nous connaissons vos défis, votre saisonnalité et vos clients. Chaque solution est adaptée à votre corps de métier.' },
              { title: 'Résultats mesurables', desc: 'Accès en temps réel à vos statistiques : appels, conversions, coût par acquisition. Vous savez exactement où va chaque euro.' },
              { title: 'Solutions clés en main', desc: 'Pas besoin de vous y connaître en marketing. On gère tout pour vous, de la stratégie à l\'exécution.' },
              { title: 'Accompagnement humain', desc: 'Un interlocuteur dédié qui connaît votre dossier. Pas de chatbot, un vrai partenariat.' }
            ].map((item, i) => (
              <div key={i} className="card p-7 border-gray-200 group hover:border-violet-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METIERS QUE NOUS ACCOMPAGNONS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos Métiers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              12 corps de métiers du bâtiment accompagnés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque stratégie marketing est adaptée aux spécificités de votre métier : saisonnalité, type de clientèle, urgence et zone d'intervention.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Plombier', path: '/metiers/plombier', color: '#1EA36F' },
              { name: 'Électricien', path: '/metiers/electricien', color: '#F59E0B' },
              { name: 'Menuisier', path: '/metiers/menuisier', color: '#8B5E3C' },
              { name: 'Couvreur', path: '/metiers/couvreur', color: '#6B7280' },
              { name: 'Maçon', path: '/metiers/macon', color: '#D97706' },
              { name: 'Carreleur', path: '/metiers/carreleur', color: '#0EA5E9' },
              { name: 'Peintre', path: '/metiers/peintre', color: '#EC4899' },
              { name: 'Serrurier', path: '/metiers/serrurier', color: '#6366F1' },
              { name: 'Chauffagiste', path: '/metiers/chauffagiste', color: '#EF4444' },
              { name: 'Pisciniste', path: '/metiers/pisciniste', color: '#06B6D4' },
              { name: 'Paysagiste', path: '/metiers/paysagiste', color: '#22C55E' },
              { name: 'Vitrier', path: '/metiers/vitrier', color: '#94A3B8' }
            ].map((metier) => (
              <Link
                key={metier.path}
                to={metier.path}
                className="card p-5 border-gray-200 hover:border-violet-200 group text-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <span
                  className="w-3 h-3 rounded-full inline-block mb-3"
                  style={{ backgroundColor: metier.color }}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {metier.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LE MARKETING DIGITAL POUR LES ARTISANS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Expertise</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Le marketing digital, un levier essentiel pour les artisans du bâtiment
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Le secteur du bâtiment connaît une transformation profonde dans la façon dont les particuliers trouvent et choisissent leurs artisans. Aujourd'hui, plus de 80 % des propriétaires commencent leur recherche d'artisan sur internet, principalement via Google. Que ce soit pour une urgence de plomberie, une rénovation de salle de bain ou l'installation d'une piscine, le réflexe est le même : on sort son smartphone et on tape « plombier près de chez moi » ou « électricien + nom de ville ». L'artisan qui n'est pas visible en ligne perd chaque jour des clients au profit de concurrents mieux positionnés.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Pourquoi les artisans ont besoin d'une agence spécialisée
            </h3>
            <p>
              Les agences marketing généralistes ne comprennent pas les spécificités de l'artisanat. La saisonnalité des couvreurs n'est pas celle des piscinistes. Le parcours d'achat d'un client en urgence de serrurerie est radicalement différent de celui qui planifie une rénovation de façade. Chez Agence Celexia, nous avons développé une expertise approfondie de chaque corps de métier du bâtiment. Nous connaissons les mots-clés qui convertissent, les périodes de forte demande, les objections courantes des prospects et les arguments qui déclenchent la prise de rendez-vous.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Des résultats concrets et mesurables
            </h3>
            <p>
              Notre approche repose sur la transparence totale et les données mesurables. Chaque euro investi dans votre visibilité en ligne est suivi et analysé : nombre d'appels reçus, coût par lead, taux de conversion, retour sur investissement. Nous ne promettons pas de résultats vagues. Nous déployons des campagnes de publicité locale à la performance où vous ne payez que pour les appels de clients réellement intéressés par vos services. Nos artisans partenaires constatent en moyenne une augmentation de 40 à 60 % de leur volume d'appels entrants dans les trois premiers mois de collaboration.
            </p>

            <h3 className="font-display text-xl font-bold text-gray-900 mt-8">
              Une approche complète en six services intégrés
            </h3>
            <p>
              Notre offre couvre l'ensemble des besoins marketing d'un artisan : de la publicité à la performance pour générer des appels immédiats, à la création de sites web optimisés pour la conversion, en passant par le référencement SEO local pour une visibilité durable, la gestion des avis clients pour bâtir votre réputation, l'email marketing pour fidéliser votre clientèle existante, et l'automatisation de vos processus administratifs pour gagner du temps. Chaque service peut être activé individuellement ou combiné dans une stratégie globale adaptée à vos objectifs et à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* CAL.COM BOOKING */}
      <section ref={calRef} id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Échangeons sur votre projet
            </h2>
            <p className="text-lg text-violet-100 max-w-2xl mx-auto">
              Réservez un appel stratégique gratuit de 30 minutes. Nous analyserons votre situation
              et vous proposerons les solutions adaptées à votre métier.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            {!calLoaded && (
              <div className="flex items-center justify-center" style={{height:'600px'}}>
                <div className="text-center">
                  <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Chargement du calendrier...</p>
                </div>
              </div>
            )}
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          <div className="text-center mt-8 text-violet-100">
            <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:contact@agencecelexia.fr" className="text-lg font-semibold text-white hover:text-violet-100 transition-colors">
              contact@agencecelexia.fr
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
