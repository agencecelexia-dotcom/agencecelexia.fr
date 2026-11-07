import test, { afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  ANALYTICS_CONSENT_KEY,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  enableAnalytics,
  disableAnalytics,
} from '../src/lib/analytics-loader.js';

const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
afterEach(() => {
  if (originalWindow === undefined) delete globalThis.window;
  else globalThis.window = originalWindow;
  if (originalDocument === undefined) delete globalThis.document;
  else globalThis.document = originalDocument;
});

function fixture({ hostname = 'agencecelexia.fr', consent, storageError = false } = {}) {
  const saved = new Map(consent ? [[ANALYTICS_CONSENT_KEY, consent]] : []);
  const scripts = new Map();
  const appended = [];
  globalThis.window = {
    location: { hostname },
    localStorage: {
      getItem: key => {
        if (storageError) throw new Error('Storage unavailable');
        return saved.get(key) || null;
      },
      setItem: (key, value) => {
        if (storageError) throw new Error('Storage unavailable');
        saved.set(key, value);
      },
    },
  };
  globalThis.document = {
    getElementById: id => scripts.get(id) || null,
    createElement: tag => {
      assert.equal(tag, 'script');
      const script = { remove: () => scripts.delete(script.id) };
      return script;
    },
    head: {
      appendChild: script => {
        scripts.set(script.id, script);
        appended.push(script);
      },
    },
  };
  return { saved, scripts, appended, commands: () => (window.dataLayer || []).map(args => Array.from(args)) };
}

test('no external script or measurement queue before consent, on refusal or outside production', () => {
  for (const options of [
    {}, { consent: 'refused' }, { consent: 'unexpected' },
    { consent: 'accepted', hostname: '127.0.0.1' },
    { consent: 'accepted', hostname: 'preview.vercel.app' },
    { consent: 'accepted', hostname: 'agencecelexia.fr.example.org' },
  ]) {
    const f = fixture(options);
    assert.equal(enableAnalytics(), false);
    assert.equal(f.appended.length, 0);
    assert.equal(window.gtag, undefined);
    assert.equal(window.dataLayer, undefined);
  }
});

test('an accepted choice loads GA once after default consent and keeps advertising denied', () => {
  const f = fixture();
  assert.equal(saveAnalyticsConsent('accepted'), true);
  assert.equal(readAnalyticsConsent(), 'accepted');
  assert.equal(enableAnalytics(), true);
  assert.equal(f.appended.length, 1);
  assert.equal(f.appended[0].async, true);
  assert.equal(f.appended[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-VLJ5E084ES');
  const commands = f.commands();
  assert.deepEqual(commands[0], ['consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  }]);
  assert.deepEqual(commands[1], ['consent', 'update', { analytics_storage: 'granted' }]);
  assert.equal(commands[2][0], 'js');
  assert.equal(commands[3][0], 'config');
  assert.equal(commands[3][1], 'G-VLJ5E084ES');
  assert.equal(commands[3][2].allow_google_signals, false);
  assert.equal(commands[3][2].allow_ad_personalization_signals, false);
  assert.equal(window['ga-disable-G-VLJ5E084ES'], false);
});

test('saved acceptance survives a page load and repeated mounts cannot duplicate the tag or config', () => {
  const f = fixture({ consent: 'accepted', hostname: 'www.agencecelexia.fr' });
  assert.equal(enableAnalytics(), true);
  assert.equal(enableAnalytics(), true);
  assert.equal(f.appended.length, 1);
  assert.equal(f.commands().filter(command => command[0] === 'config').length, 1);
  // Existing application events can queue safely while the external tag loads.
  window.gtag('event', 'generate_lead', { form_id: 'candidature' });
  assert.deepEqual(f.commands().at(-1), ['event', 'generate_lead', { form_id: 'candidature' }]);
});

test('a failed tag request can retry without duplicating the initial page view', () => {
  const f = fixture({ consent: 'accepted' });
  enableAnalytics();
  f.appended[0].onerror();
  assert.equal(f.scripts.size, 0);
  assert.equal(enableAnalytics(), true);
  assert.equal(f.appended.length, 2);
  assert.equal(f.commands().filter(command => command[0] === 'config').length, 1);
});

test('a later refusal disables the loaded tag and reacceptance reuses it', () => {
  const f = fixture({ consent: 'accepted' });
  enableAnalytics();
  saveAnalyticsConsent('refused');
  disableAnalytics();
  assert.equal(window['ga-disable-G-VLJ5E084ES'], true);
  assert.deepEqual(f.commands().at(-1), ['consent', 'update', { analytics_storage: 'denied' }]);
  assert.equal(enableAnalytics(), false);
  assert.equal(f.appended.length, 1);
  saveAnalyticsConsent('accepted');
  assert.equal(enableAnalytics(), true);
  assert.equal(window['ga-disable-G-VLJ5E084ES'], false);
  assert.equal(f.appended.length, 1);
  assert.equal(f.commands().filter(command => command[0] === 'config').length, 1);
});

test('storage and DOM failures never interrupt the website or enable analytics by default', () => {
  const f = fixture({ storageError: true });
  assert.equal(readAnalyticsConsent(), null);
  assert.equal(saveAnalyticsConsent('accepted'), false);
  assert.equal(enableAnalytics(), false);
  assert.equal(f.appended.length, 0);
  assert.doesNotThrow(disableAnalytics);
  fixture({ consent: 'accepted' });
  document.head.appendChild = () => { throw new Error('Blocked'); };
  assert.equal(enableAnalytics(), false);
  assert.equal(saveAnalyticsConsent('unknown'), false);
});

test('the HTML entry point declares no eager Google script, initialization or preconnect', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /googletagmanager|google-analytics|gtag\(/i);
});
