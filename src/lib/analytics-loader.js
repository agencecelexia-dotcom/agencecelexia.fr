export const ANALYTICS_CONSENT_KEY = 'celexia_cookie_consent';
const MEASUREMENT_ID = 'G-VLJ5E084ES';
const SCRIPT_ID = 'celexia-google-analytics';
const PRODUCTION_HOSTS = new Set(['agencecelexia.fr', 'www.agencecelexia.fr']);
const initializedWindows = new WeakSet();

export function readAnalyticsConsent() {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(choice) {
  if (!['accepted', 'refused'].includes(choice)) return false;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
    return true;
  } catch {
    return false;
  }
}

/** Basic consent mode: no Google script or request before an accepted choice. */
export function enableAnalytics() {
  try {
    if (typeof window === 'undefined' || typeof document === 'undefined') return false;
    if (!PRODUCTION_HOSTS.has(window.location.hostname) || readAnalyticsConsent() !== 'accepted') return false;

    window[`ga-disable-${MEASUREMENT_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    if (!initializedWindows.has(window)) {
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
      window.gtag('js', new Date());
      window.gtag('config', MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      initializedWindows.add(window);
    } else {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }

    // StrictMode, repeated clicks and route changes must not load/configure twice.
    if (document.getElementById(SCRIPT_ID)) return true;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    // A failed request can be retried on a later explicit enable without
    // queuing a second config/page view. Failure never interrupts the website.
    script.onerror = () => script.remove();
    document.head.appendChild(script);
    return true;
  } catch {
    return false;
  }
}

/** Also respects a refusal made in another tab after this page loaded GA. */
export function disableAnalytics() {
  try {
    if (typeof window === 'undefined') return;
    window[`ga-disable-${MEASUREMENT_ID}`] = true;
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  } catch {
    // Consent storage or tag failures must not affect navigation or forms.
  }
}
