import test from 'node:test';
import assert from 'node:assert/strict';
import { createCandidatureTracker, trackCandidatureEvent } from '../src/lib/analytics.js';

function browser(context, { consent = 'accepted', hostname = 'agencecelexia.fr', ...overrides } = {}) {
  const calls = [];
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    writable: true,
    value: {
      location: { hostname, href: 'https://agencecelexia.fr/candidature?origine=person@example.com' },
      localStorage: { getItem: (key) => key === 'celexia_cookie_consent' ? consent : null },
      gtag: (...args) => calls.push(args),
      ...overrides,
    },
  });
  context.after(() => {
    if (previous) Object.defineProperty(globalThis, 'window', previous);
    else delete globalThis.window;
  });
  return calls;
}

test('form events require explicit analytics consent on an exact production hostname', (context) => {
  const calls = browser(context);
  for (const consent of [null, '', 'refused', 'true', 'Accepted', true]) {
    window.localStorage.getItem = () => consent;
    assert.equal(trackCandidatureEvent('candidature_start'), false);
  }
  window.localStorage.getItem = () => 'accepted';
  for (const hostname of ['localhost', '127.0.0.1', 'preview.vercel.app', 'agencecelexia.fr.evil.example', 'other.agencecelexia.fr']) {
    window.location.hostname = hostname;
    assert.equal(trackCandidatureEvent('generate_lead'), false);
  }
  assert.equal(calls.length, 0);
  for (const hostname of ['agencecelexia.fr', 'www.agencecelexia.fr']) {
    window.location.hostname = hostname;
    assert.equal(trackCandidatureEvent('generate_lead'), true);
  }
  assert.equal(calls.length, 2);
});

test('events never forward form values, references, URL parameters or arbitrary event names', (context) => {
  const calls = browser(context);
  const privateData = { email: 'person@example.com', company: 'Private company', reference: 'secret-reference', error: 'private error' };
  assert.equal(trackCandidatureEvent('generate_lead', privateData), true);
  for (const event of ['page_view', 'form_submit', 'person@example.com', '', undefined, privateData]) {
    assert.equal(trackCandidatureEvent(event, privateData), false);
  }
  assert.deepEqual(calls, [['event', 'generate_lead', {
    form_id: 'candidature',
    page_location: 'https://agencecelexia.fr/candidature',
    page_title: 'Candidature artisan | Agence Celexia',
    page_referrer: '',
  }]]);
});

test('only numeric steps two through four are allowed', (context) => {
  const calls = browser(context);
  for (const step of [undefined, null, 0, 1, 5, 2.5, '2', 'person@example.com', { step: 2 }]) {
    assert.equal(trackCandidatureEvent('candidature_step', step), false);
  }
  for (const step of [2, 3, 4]) assert.equal(trackCandidatureEvent('candidature_step', step), true);
  assert.deepEqual(calls.map(([, , parameters]) => parameters.step), [2, 3, 4]);
});

test('unavailable storage or analytics never throws into the form', (context) => {
  const calls = browser(context);
  const originalStorage = window.localStorage;
  window.localStorage = { getItem() { throw new Error('Storage blocked'); } };
  assert.equal(trackCandidatureEvent('candidature_start'), false);
  window.localStorage = originalStorage;
  window.gtag = undefined;
  assert.equal(trackCandidatureEvent('candidature_start'), false);
  window.gtag = () => { throw new Error('Analytics unavailable'); };
  assert.equal(trackCandidatureEvent('candidature_start'), false);
  assert.equal(calls.length, 0);
  delete globalThis.window;
  assert.equal(trackCandidatureEvent('candidature_start'), false);
});

test('one form visit counts the first real change, each reached step and a confirmed lead once', (context) => {
  const calls = browser(context);
  const tracker = createCandidatureTracker();
  assert.equal(tracker.change('websiteConfirmation'), false);
  assert.equal(tracker.change('unknown'), false);
  assert.equal(calls.length, 0);
  tracker.change('company');
  tracker.change('email');
  tracker.advance(2);
  tracker.advance(3);
  tracker.advance(2); // Returning to edit a previous step does not count it twice.
  tracker.advance(4);
  assert.equal(calls.some(([, event]) => event === 'generate_lead'), false);
  tracker.complete();
  tracker.complete();
  assert.deepEqual(calls.map(([, event, params]) => [event, params.step]), [
    ['candidature_start', undefined],
    ['candidature_step', 2],
    ['candidature_step', 3],
    ['candidature_step', 4],
    ['generate_lead', undefined],
  ]);
});

test('events skipped before consent are not replayed after consent', (context) => {
  const calls = browser(context, { consent: 'refused' });
  const tracker = createCandidatureTracker();
  tracker.change('company');
  tracker.advance(2);
  window.localStorage.getItem = () => 'accepted';
  tracker.change('area');
  tracker.advance(2);
  tracker.advance(3);
  assert.deepEqual(calls.map(([, event, params]) => [event, params.step]), [['candidature_step', 3]]);
});
