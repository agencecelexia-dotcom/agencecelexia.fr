import { useEffect } from 'react';

const Contact = () => {
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre génération de leads ?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Réservez votre appel découverte de 30 minutes et découvrez comment multiplier vos opportunités commerciales tout en réduisant vos coûts d'acquisition.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
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
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
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
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Réservez votre appel découverte
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Un échange sans engagement pour comprendre vos besoins et vous présenter notre approche.
            </p>
          </div>

          {/* Pourquoi réserver un appel */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-xl mb-8 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi réserver un appel ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Analyse personnalisée</h4>
                <p className="text-sm text-gray-600">
                  Nous étudions votre situation actuelle et vos objectifs spécifiques
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-bold text-gray-900 mb-2">Conseils gratuits</h4>
                <p className="text-sm text-gray-600">
                  Repartez avec des recommandations concrètes pour améliorer votre acquisition
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-900 mb-2">Zéro pression</h4>
                <p className="text-sm text-gray-600">
                  Un simple échange pour voir si nous pouvons vous aider
                </p>
              </div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/agence-celexia/decouverte"
              style={{minWidth:'320px', height:'700px'}}
            ></div>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            L'appel dure 30 minutes. Aucun engagement requis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
