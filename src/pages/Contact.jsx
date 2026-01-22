import { useEffect } from 'react';

const Contact = () => {
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Développez votre activité d'artisan
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Réservez 30 minutes d'échange pour comprendre comment notre système d'acquisition peut générer un flux régulier de clients qualifiés pour votre entreprise.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary-purple bg-opacity-10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Email</h3>
            <a
              href="mailto:agence.celexia@gmail.com"
              className="text-primary-purple hover:underline text-center block font-semibold text-lg"
            >
              agence.celexia@gmail.com
            </a>
            <p className="text-center text-gray-600 text-sm mt-3">
              Réponse sous 24h
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-600 bg-opacity-10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Téléphone</h3>
            <a
              href="tel:+33651725756"
              className="text-green-600 hover:underline text-center block font-semibold text-lg"
            >
              06 51 72 57 56
            </a>
            <p className="text-center text-gray-600 text-sm mt-3">
              Lun-Ven 9h-18h
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Réservez votre appel stratégique
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Un échange sans engagement pour évaluer ensemble le potentiel de notre solution pour votre entreprise.
            </p>
          </div>

          {/* Pourquoi réserver un appel */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-xl mb-8 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Ce que nous allons aborder pendant l'appel
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Analyse de votre situation</h4>
                <p className="text-sm text-gray-600">
                  Vos objectifs de croissance, votre zone d'intervention, votre positionnement actuel
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Stratégie personnalisée</h4>
                <p className="text-sm text-gray-600">
                  Plan d'action concret adapté à votre métier et à votre marché local
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Projection de résultats</h4>
                <p className="text-sm text-gray-600">
                  Estimation réaliste du volume d'appels et du ROI potentiel pour votre activité
                </p>
              </div>
            </div>
          </div>

          {/* Cal.com Widget */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'700px', overflow:'scroll'}}
            ></div>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            Appel de 30 minutes • Sans engagement • 100% confidentiel
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
