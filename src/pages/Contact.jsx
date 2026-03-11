import { useEffect } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Contact = () => {
  // Métadonnées SEO pour la page Contact
  usePageMeta({
    title: 'Réservez votre appel gratuit - Agence Celexia',
    description: '30 minutes pour analyser votre situation et évaluer le potentiel de notre système d\'acquisition client. Sans engagement.',
    canonical: 'https://agencecelexia.fr/contact'
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
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Réservez votre appel stratégique
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            30 minutes d'échange pour comprendre comment nos solutions peuvent développer votre activité.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-5
                           group-hover:bg-violet-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:agence.celexia@gmail.com" className="text-violet-600 hover:text-violet-700 transition-colors font-semibold text-lg">
              agence.celexia@gmail.com
            </a>
            <p className="text-gray-400 text-sm mt-3">Réponse sous 24h</p>
          </div>

          {/* Phone */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5
                           group-hover:bg-emerald-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
            <a href="tel:+33651725756" className="text-emerald-600 hover:text-emerald-700 transition-colors font-semibold text-lg">
              06 51 72 57 56
            </a>
            <p className="text-gray-400 text-sm mt-3">Lun-Ven 9h-18h</p>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 border-gray-200">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi prendre rendez-vous avec Agence Celexia ?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Un audit gratuit et sans engagement</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pendant 30 minutes, nous analysons votre situation actuelle : votre visibilité sur Google,
                  la qualité de vos avis clients, votre positionnement par rapport à la concurrence locale,
                  et les opportunités de croissance dans votre zone d'intervention.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Des recommandations concrètes</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous vous présentons un plan d'action personnalisé avec des projections de résultats réalistes.
                  Nombre d'appels estimés par mois, coût par acquisition client, retour sur investissement prévu.
                  Vous repartez avec une feuille de route claire, même si vous décidez de ne pas travailler avec nous.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expertise spécifique artisans</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous travaillons exclusivement avec les artisans et professionnels du bâtiment depuis la création
                  de l'agence. Plombiers, électriciens, menuisiers, couvreurs, piscinistes, paysagistes — nous
                  connaissons les spécificités de chaque métier et adaptons nos stratégies en conséquence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparence et honnêteté</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si notre solution n'est pas adaptée à votre situation, nous vous le dirons. Notre réputation
                  repose sur des résultats concrets, pas sur des contrats forcés. Chaque collaboration commence
                  par une analyse honnête du potentiel dans votre zone géographique et votre secteur d'activité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Réservation</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Réservez votre appel stratégique
            </h2>
            <p className="text-gray-500 text-lg">
              Un échange sans engagement pour évaluer le potentiel de notre solution.
            </p>
          </div>

          {/* What we'll cover */}
          <div className="card p-6 md:p-8 mb-8">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-6 text-center">
              Ce que nous allons aborder pendant l'appel
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Analyse de votre situation', desc: "Vos objectifs de croissance, votre zone d'intervention, votre positionnement actuel" },
                { num: '02', title: 'Stratégie personnalisée', desc: "Plan d'action concret adapté à votre métier et à votre marché local" },
                { num: '03', title: 'Projection de résultats', desc: "Estimation réaliste du volume d'appels et du ROI potentiel pour votre activité" }
              ].map((item) => (
                <div key={item.num} className="text-center">
                  <span className="font-display text-2xl font-bold text-violet-200 mb-3 block">{item.num}</span>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cal.com Widget */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-soft border border-gray-200/80">
            <div
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
              style={{width:'100%', height:'700px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-gray-400 text-sm">
            <span>Appel de 30 minutes</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <span>Sans engagement</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <span>100% confidentiel</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
