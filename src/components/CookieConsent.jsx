import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ANALYTICS_CONSENT_KEY, readAnalyticsConsent, saveAnalyticsConsent, enableAnalytics, disableAnalytics } from '../lib/analytics-loader';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = readAnalyticsConsent();
      setVisible(!['accepted', 'refused'].includes(consent));
      if (consent === 'accepted') enableAnalytics();
      else disableAnalytics();
    };
    syncConsent();
    const onStorage = (event) => {
      if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) syncConsent();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const accept = () => {
    saveAnalyticsConsent('accepted');
    enableAnalytics();
    setVisible(false);
  };

  const refuse = () => {
    saveAnalyticsConsent('refused');
    disableAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5"
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className="max-w-4xl mx-auto bg-white border border-encre-800 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="flex-1 text-sm text-encre-700 leading-relaxed">
          Nous utilisons des cookies de mesure d’audience pour savoir combien de personnes
          consultent le site et mesurer le parcours de candidature. Vos réponses au formulaire
          ne sont pas transmises à cet outil. Aucune donnée n’est utilisée à des fins publicitaires.{' '}
          <Link
            to="/politique-confidentialite"
            className="text-violet-600 underline underline-offset-2 hover:text-violet-700"
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={refuse}
            className="px-4 py-2.5 text-sm font-semibold text-encre-700 border border-brume-300 rounded-md hover:border-encre-800 hover:bg-brume-50 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 border border-violet-600 rounded-md hover:bg-violet-700 hover:border-violet-700 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
