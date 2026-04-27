import { useState, useEffect } from 'react';

const CONSENT_KEY = 'celexia_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    enableAnalytics();
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            Nous utilisons des cookies analytiques (Google Analytics) pour mesurer la fréquentation du site et améliorer votre expérience.
            Aucune donnée personnelle n'est partagée à des fins publicitaires.{' '}
            <a href="/politique-confidentialite" className="text-violet-600 hover:text-violet-700 underline">
              En savoir plus
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
