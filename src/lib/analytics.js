import { STEP_FIELDS } from './candidature.js';

const EVENTS = new Set(['candidature_start', 'candidature_step', 'generate_lead']);
const PRODUCTION_HOSTS = new Set(['agencecelexia.fr', 'www.agencecelexia.fr']);
const FORM_FIELDS = new Set(STEP_FIELDS.flat());
const VALID_STEPS = new Set([2, 3, 4]);

/** Only fixed metadata and an allowed step number can reach analytics. */
export function trackCandidatureEvent(event, step) {
  try {
    if (!EVENTS.has(event) || typeof window === 'undefined') return false;
    if (event === 'candidature_step' && !VALID_STEPS.has(step)) return false;
    if (!PRODUCTION_HOSTS.has(window.location.hostname)) return false;
    if (window.localStorage.getItem('celexia_cookie_consent') !== 'accepted') return false;
    if (typeof window.gtag !== 'function') return false;

    const parameters = {
      form_id: 'candidature',
      page_location: 'https://agencecelexia.fr/candidature',
      page_title: 'Candidature artisan | Agence Celexia',
      page_referrer: '',
    };
    if (event === 'candidature_step') parameters.step = step;
    window.gtag('event', event, parameters);
    return true;
  } catch {
    // Storage restrictions or an analytics failure must never stop the form.
    return false;
  }
}

/** One tracker per mounted form; skipped events are never replayed later. */
export function createCandidatureTracker() {
  let started = false;
  let completed = false;
  const steps = new Set();

  return {
    change(fieldName) {
      // The honeypot and unknown fields cannot count as user interaction.
      if (started || !FORM_FIELDS.has(fieldName)) return false;
      started = true;
      return trackCandidatureEvent('candidature_start');
    },
    advance(step) {
      if (!VALID_STEPS.has(step) || steps.has(step)) return false;
      steps.add(step);
      return trackCandidatureEvent('candidature_step', step);
    },
    complete() {
      if (completed) return false;
      completed = true;
      return trackCandidatureEvent('generate_lead');
    },
  };
}
