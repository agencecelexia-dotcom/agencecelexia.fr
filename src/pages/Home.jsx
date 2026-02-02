import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const Home = () => {
  // Métadonnées SEO pour la page d'accueil
  usePageMeta({
    title: 'Agence Celexia – Expert en Marketing Digital pour Artisans | SEO, Pub, Sites Web',
    description: 'Agence marketing digital spécialisée artisans. Publicité performance, sites web, SEO local, avis clients, emailing, automatisation. Résultats garantis.',
    canonical: 'https://agencecelexia.fr/'
  });

  // Schéma JSON-LD pour l'organisation
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Agence Celexia',
    'url': 'https://agencecelexia.fr',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://agencecelexia.fr/logo.png',
      'width': '512',
      'height': '512'
    },
    'description': 'Agence marketing digital spécialisée pour artisans. Publicité performance, sites web, SEO, avis clients.',
    'telephone': '+33651725756',
    'email': 'agence.celexia@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'FR'
    },
    'sameAs': [
      'https://www.facebook.com/agencecelexia',
      'https://www.linkedin.com/company/agence-celexia'
    ]
  });

  // Initialisation Cal.com
  useEffect(() => {
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
  }, []);

  const services = [
    {
      title: 'Publicité à la Performance',
      category: 'Génération Leads',
      description: 'Payez uniquement pour des appels de clients réels. Position #1 Google Local.',
      link: '/services/publicite-performance',
      color: 'blue',
      features: ['Paiement à l\'appel', 'Position #1 Google', 'ROI garanti', 'Filtrage anti-spam']
    },
    {
      title: 'Sites Web Artisans',
      category: 'Web Design',
      description: 'Site professionnel livré en 7 jours. Design moderne, optimisé SEO.',
      link: '/services/site-web',
      color: 'violet',
      features: ['Livraison 7 jours', 'Design responsive', 'Optimisé SEO', 'Galerie photos']
    },
    {
      title: 'Référencement SEO',
      category: 'Visibilité',
      description: 'Dominez Google dans votre zone. Position top 3 garantie en 90 jours.',
      link: '/services/seo',
      color: 'emerald',
      features: ['Position #1 locale', 'Google My Business', 'Backlinks qualité', 'Résultats 90j']
    },
    {
      title: 'Avis Clients',
      category: 'E-réputation',
      description: 'Multipliez vos avis Google automatiquement. +50% d\'avis garantis.',
      link: '/services/avis-clients',
      color: 'amber',
      features: ['Collecte auto', 'Réponses IA', 'Note 4.8/5', 'Gestion négatifs']
    },
    {
      title: 'Email Marketing',
      category: 'Fidélisation',
      description: 'Campagnes email automatisées. Relances, promotions, rappels.',
      link: '/services/emailing',
      color: 'cyan',
      features: ['Relances auto', 'Taux 45%', 'Reconquête clients', 'ROI 42:1']
    },
    {
      title: 'Automatisation',
      category: 'Productivité',
      description: 'Automatisez tout : CRM, devis, facturation, relances. Gagnez 15h/semaine.',
      link: '/services/automatisation',
      color: 'purple',
      features: ['CRM artisan', 'Devis auto', 'Rappels RDV', '15h/semaine']
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
      {/* HERO SIMPLE */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Agence Marketing Digital</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Votre Partenaire de
            <span className="block text-violet-600">Croissance Digitale</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Agence spécialisée pour artisans et professionnels du bâtiment.
            Publicité performance, sites web, SEO, avis clients, email marketing, automatisation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un audit gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#services" className="btn-ghost text-base px-8 py-4">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES - GRID STYLE PORTFOLIO */}
      <section id="services" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos Services</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Des Solutions Complètes
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour développer votre activité en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="card overflow-hidden border-gray-200 group hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header avec gradient */}
                <div className={`h-48 bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center text-white font-display text-2xl font-bold px-6 text-center relative`}>
                  {service.title}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">
                    {service.category}
                  </span>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-violet-600 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                    En savoir plus
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Performances</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Des Résultats Concrets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: '240+', label: 'Clients actifs' },
              { value: '10-25€', label: 'Coût par appel qualifié' },
              { value: '4.8/5', label: 'Satisfaction client' },
              { value: '+300%', label: 'ROI moyen' }
            ].map((stat, i) => (
              <div key={i} className="card p-8 text-center border-gray-200">
                <div className="font-display text-5xl md:text-6xl font-bold text-violet-600 mb-3">
                  {stat.value}
                </div>
                <p className="text-base font-semibold text-gray-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAL.COM BOOKING */}
      <section id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Échangeons sur votre projet
            </h2>
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              30 minutes pour analyser votre situation et évaluer le potentiel de nos solutions pour votre activité.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          <div className="text-center mt-8 text-violet-200">
            <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:text-violet-100 transition-colors">
              agence.celexia@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
