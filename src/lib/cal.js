// Constantes Cal.com centralisées.
// IMPORTANT : si le slug de l'event Cal.com côté agence-celexia-1qyn93 change,
// modifier UNIQUEMENT CAL_NAMESPACE ici.
export const CAL_NAMESPACE = 'apport-d-affaires';
export const CAL_USER = 'agence-celexia-1qyn93';
export const CAL_LINK = `${CAL_USER}/${CAL_NAMESPACE}`;
export const CAL_URL = `https://cal.com/${CAL_LINK}`;
export const CAL_BRAND_COLOR = '#7C3AED';
export const CAL_CTA_LABEL = 'Réserver un appel découverte';
export const CAL_INLINE_ID = `my-cal-inline-${CAL_NAMESPACE}`;

export function initCalInline({ elementOrSelector } = {}) {
  if (typeof window === 'undefined') return;
  const target = elementOrSelector || `#${CAL_INLINE_ID}`;

  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal('init', CAL_NAMESPACE, { origin: 'https://app.cal.com' });
  window.Cal.ns[CAL_NAMESPACE]('inline', {
    elementOrSelector: target,
    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
    calLink: CAL_LINK,
  });
  window.Cal.ns[CAL_NAMESPACE]('ui', {
    cssVarsPerTheme: {
      light: { 'cal-brand': CAL_BRAND_COLOR },
      dark: { 'cal-brand': CAL_BRAND_COLOR },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}
