import { useEffect, useContext } from 'react';
import ROICalculator from '../components/ROICalculator';
import { NicheContext } from '../context/NicheContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const Home = () => {
  const { prixParAppel } = useContext(NicheContext);

  // Métadonnées SEO pour la page d'accueil
  usePageMeta({
    title: 'Génération de leads qualifiés pour artisans - Agence Celexia',
    description: 'Système de paiement par appel qualifié. ROI garanti pour plombiers, électriciens, menuisiers. Premiers appels sous 10-21 jours.',
    canonical: 'https://agence-celexia.fr/'
  });

  // Schéma JSON-LD pour l'organisation
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Agence Celexia',
    'url': 'https://agence-celexia.fr',
    'logo': 'https://agence-celexia.fr/logo.png',
    'description': 'Agence spécialisée en génération de leads qualifiés pour artisans via Local Service Ads',
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

  // Schéma JSON-LD pour le service
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Génération de Leads Qualifiés pour Artisans',
    'description': 'Système d\'acquisition client basé sur le paiement par appel qualifié. Positionnement en tête des résultats Google locaux.',
    'provider': {
      '@type': 'Organization',
      'name': 'Agence Celexia',
      'url': 'https://agence-celexia.fr'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'FR'
    },
    'priceRange': 'Contact for pricing',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5',
      'ratingCount': '50'
    }
  });

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

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 px-4 md:px-6 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 animate-fade-in">
            <span className="tag">Systeme d'acquisition client</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-[1.05] tracking-tight animate-fade-up">
            Calculez votre ROI avec notre systeme publicitaire
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Un systeme d'acquisition qui vous fait payer uniquement pour les appels qualifies recus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => {
                const el = document.getElementById('calculateur');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-primary text-base px-8 py-4 rounded-xl arrow-animate"
            >
              Calculer mon ROI
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-secondary text-base px-8 py-4 rounded-xl"
            >
              Reserver un appel
            </button>
          </div>

          {/* Social proof bar */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Premiers appels sous 10-21 jours
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Paiement par appel qualifie
            </span>
          </div>
        </div>
      </section>

      {/* CALCULATEUR ROI */}
      <section id="calculateur" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Performances</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Pourquoi choisir notre systeme ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Stat 1 */}
            <div className="card-violet p-8 text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-violet-600 mb-3">~{prixParAppel}€</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Cout moyen par contact</p>
              <p className="text-sm text-gray-500">Avec notre systeme publicitaire</p>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">Varie selon votre secteur d'activite</p>
            </div>

            {/* Stat 2 */}
            <div className="card p-8 text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-red-500 mb-3">~85€</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Cout moyen par contact</p>
              <p className="text-sm text-gray-500">Google Ads classique</p>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">Moyenne marche services a domicile</p>
            </div>

            {/* Stat 3 */}
            <div className="card-violet p-8 text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-violet-600 mb-3">
                {Math.round(((85 - prixParAppel) / 85) * 100)}%
              </div>
              <p className="text-base font-semibold text-gray-900 mb-1">Economies potentielles</p>
              <p className="text-sm text-gray-500">Sur votre cout d'acquisition</p>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">Calcul: (85-{prixParAppel})/85</p>
            </div>
          </div>

          {/* Extra */}
          <div className="card p-8 md:p-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 mb-5">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-2">
              Visibilite maximale sur Google
            </p>
            <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
              Notre systeme vous positionne en tete des resultats de recherche locaux, au-dessus des resultats organiques et des publicites traditionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* CAL.COM BOOKING */}
      <section id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Echangeons sur votre projet
            </h2>
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              30 minutes pour analyser votre situation et evaluer le potentiel de notre solution pour votre activite.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          <div className="text-center mt-8 text-violet-200">
            <p className="text-sm mb-1">Vous preferez nous ecrire ?</p>
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
