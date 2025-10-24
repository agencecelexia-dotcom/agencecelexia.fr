import ROICalculator from '../components/ROICalculator';

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO - SIMPLE ET CLAIR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-dark-gray">
            Calculez votre ROI avec<br />
            <span className="text-primary-purple">Local Service Ads</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            La publicité qui vous fait payer uniquement quand votre téléphone sonne.
          </p>
          <a
            href="#calculateur"
            className="inline-block bg-primary-purple text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-purple-600 transition-all shadow-xl"
          >
            Calculer mon ROI →
          </a>
        </div>
      </section>

      {/* CALCULATEUR ROI */}
      <section id="calculateur" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* PREUVES DE MARCHÉ - STATS RÉELLES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Les chiffres du marché (2025)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Stat 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-2 border-green-500">
              <div className="text-6xl font-bold text-green-600 mb-4">22€</div>
              <p className="text-xl font-semibold mb-2">Coût moyen par lead</p>
              <p className="text-gray-600">Local Service Ads</p>
              <p className="text-sm text-gray-500 mt-4">Source: Media Captain, 2025</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-2 border-red-500">
              <div className="text-6xl font-bold text-red-600 mb-4">85€</div>
              <p className="text-xl font-semibold mb-2">Coût moyen par lead</p>
              <p className="text-gray-600">Google Ads classique</p>
              <p className="text-sm text-gray-500 mt-4">Source: LocaliQ, 2025</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-2 border-primary-purple">
              <div className="text-6xl font-bold text-primary-purple mb-4">74%</div>
              <p className="text-xl font-semibold mb-2">Économies réalisées</p>
              <p className="text-gray-600">en passant aux LSA</p>
              <p className="text-sm text-gray-500 mt-4">Calcul: (85-22)/85</p>
            </div>
          </div>

          {/* Stat supplémentaire */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Position #1 garantie sur Google
            </p>
            <p className="text-lg text-gray-600">
              Les Local Service Ads s'affichent au-dessus de Google Maps<br />
              et au-dessus des publicités classiques.
            </p>
          </div>
        </div>
      </section>

      {/* CALENDLY - SIMPLE */}
      <section id="contact" className="py-20 px-6 bg-primary-purple">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Réservez un appel stratégique
          </h2>
          <p className="text-xl text-center mb-12 text-white/90">
            15 minutes pour analyser votre marché et estimer votre potentiel.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {/* Calendly inline widget begin */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/agence-celexia/decouverte" style={{minWidth:'320px',height:'700px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
          </div>

          <div className="text-center mt-12 text-white">
            <p className="text-lg mb-2">Vous préférez nous écrire ?</p>
            <p className="text-xl font-semibold">
              📧 contact@agence-celexia.fr
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
