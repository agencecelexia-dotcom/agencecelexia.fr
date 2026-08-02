import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  // gtag est défini par le script Google Analytics chargé dans index.html.
  const enableAnalytics = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
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
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5"
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className="max-w-4xl mx-auto bg-white border border-ardoise-800 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="flex-1 text-sm text-ardoise-700 leading-relaxed">
          Nous utilisons des cookies de mesure d’audience pour savoir combien de personnes
          consultent le site. Aucune donnée n’est utilisée à des fins publicitaires.{' '}
          <Link
            to="/politique-confidentialite"
            className="text-cuivre-600 underline underline-offset-2 hover:text-cuivre-700"
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={refuse}
            className="px-4 py-2.5 text-sm font-semibold text-ardoise-700 border border-acier-300 rounded-md hover:border-ardoise-800 hover:bg-chaux-50 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-cuivre-500 border border-cuivre-500 rounded-md hover:bg-cuivre-600 hover:border-cuivre-600 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
