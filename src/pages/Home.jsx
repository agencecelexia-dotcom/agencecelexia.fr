import { useEffect, useContext } from 'react';
import ROICalculator from '../components/ROICalculator';
import { NicheContext, NICHES } from '../context/NicheContext';

const Home = () => {
  const { prixParAppel } = useContext(NicheContext);

  useEffect(() => {
    // Fonction Cal.com loader (du code embed officiel)
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

    // Initialisation Cal.com
    window.Cal("init", "rdv-decouverte-240-appels-an-garantis", {origin:"https://app.cal.com"});

    window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("inline", {
      elementOrSelector:"#my-cal-inline-rdv-decouverte-240-appels-an-garantis",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: "agence-celexia-1qyn93/rdv-decouverte-240-appels-an-garantis",
    });

    window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("ui", {
      "cssVarsPerTheme":{"light":{"cal-brand":"#5050ff"},"dark":{"cal-brand":"#fafafa"}},
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  }, []);

  return (
    <div className="bg-white">
      {/* HERO - SIMPLE ET CLAIR */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-dark-gray leading-tight">
            Calculez votre ROI avec<br />
            <span className="text-primary-purple">notre système publicitaire</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 px-2">
            Un système d'acquisition qui vous fait payer uniquement pour les appels qualifiés reçus.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('calculateur');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-block bg-primary-purple text-white px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold hover:bg-purple-600 transition-all shadow-lg"
          >
            Calculer mon ROI →
          </button>
        </div>
      </section>

      {/* CALCULATEUR ROI */}
      <section id="calculateur" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* PREUVES DE MARCHÉ - STATS RÉELLES */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            Pourquoi choisir notre système ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {/* Stat 1 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-3 md:mb-4">~{prixParAppel}€</div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coût moyen par contact</p>
              <p className="text-sm md:text-base text-gray-600">Avec notre système publicitaire</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Varie selon votre secteur d'activité</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-3 md:mb-4">~85€</div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coût moyen par contact</p>
              <p className="text-sm md:text-base text-gray-600">Google Ads classique</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Moyenne marché services à domicile</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md text-center border border-primary-purple">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-3 md:mb-4">
                {Math.round(((85 - prixParAppel) / 85) * 100)}%
              </div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Économies potentielles</p>
              <p className="text-sm md:text-base text-gray-600">sur votre coût d'acquisition</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Calcul: (85-{prixParAppel})/85</p>
            </div>
          </div>

          {/* Stat supplémentaire */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 lg:p-12 rounded-xl shadow-md max-w-3xl mx-auto text-center border border-blue-100">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Visibilité maximale sur Google
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Notre système vous positionne en tête des résultats de recherche locaux,<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>au-dessus des résultats organiques et des publicités traditionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* CAL.COM - SIMPLE */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-primary-purple">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-white">
            Échangeons sur votre projet
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-center mb-8 md:mb-12 text-white/90 px-2">
            30 minutes pour analyser votre situation et évaluer le potentiel de notre solution pour votre activité.
          </p>

          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl">
            {/* Cal.com inline widget */}
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'600px', overflow:'scroll'}}
            ></div>
          </div>

          <div className="text-center mt-8 md:mt-12 text-white">
            <p className="text-sm md:text-base lg:text-lg mb-2 opacity-90">Vous préférez nous écrire ?</p>
            <p className="text-lg md:text-xl font-semibold">
              agence.celexia@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
