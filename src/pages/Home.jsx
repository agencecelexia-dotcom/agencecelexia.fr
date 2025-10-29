import { useEffect } from 'react';
import ROICalculator from '../components/ROICalculator';

const Home = () => {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* HERO - SIMPLE ET CLAIR */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-dark-gray leading-tight">
            Calculez votre ROI avec<br />
            <span className="text-primary-purple">Local Service Ads</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 px-2">
            La publicité qui vous fait payer uniquement quand votre téléphone sonne.
          </p>
          <a
            href="#calculateur"
            className="inline-block bg-primary-purple text-white px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold hover:bg-purple-600 transition-all shadow-xl"
          >
            Calculer mon ROI →
          </a>
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
            Les chiffres du marché (2025)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {/* Stat 1 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl text-center border-2 border-green-500">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-3 md:mb-4">30€</div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coût moyen par lead</p>
              <p className="text-sm md:text-base text-gray-600">Local Service Ads</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Source: Media Captain, 2025</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl text-center border-2 border-red-500">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-3 md:mb-4">85€</div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Coût moyen par lead</p>
              <p className="text-sm md:text-base text-gray-600">Google Ads classique</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Source: LocaliQ, 2025</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl text-center border-2 border-primary-purple">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-3 md:mb-4">65%</div>
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">Économies réalisées</p>
              <p className="text-sm md:text-base text-gray-600">en passant aux LSA</p>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">Calcul: (85-30)/85</p>
            </div>
          </div>

          {/* Stat supplémentaire */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Position #1 garantie sur Google
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Les Local Service Ads s'affichent au-dessus de Google Maps<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>et au-dessus des publicités classiques.
            </p>
          </div>
        </div>
      </section>

      {/* CALENDLY - SIMPLE */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-primary-purple">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-white">
            Réservez un appel stratégique
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-center mb-8 md:mb-12 text-white/90 px-2">
            15 minutes pour analyser votre marché et estimer votre potentiel.
          </p>

          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl">
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/agence-celexia/decouverte"
              style={{minWidth:'320px', height:'600px'}}
            ></div>
          </div>

          <div className="text-center mt-8 md:mt-12 text-white">
            <p className="text-sm md:text-base lg:text-lg mb-2">Vous préférez nous écrire ?</p>
            <p className="text-lg md:text-xl font-semibold">
              📧 agence.celexia@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
