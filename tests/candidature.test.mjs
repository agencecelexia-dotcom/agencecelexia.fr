import test from 'node:test';
import assert from 'node:assert/strict';
import { handleCandidature } from '../server/candidature.mjs';
import { submitApplication, validateApplication } from '../src/lib/candidature.js';

const values = {
  company: 'Entreprise de test', trade: 'couverture', area: 'Lyon', createdYear: '2018',
  employees: '0', revenue: '100 000 à 250 000 €', monthlyProjects: '3', additionalProjects: '2',
  details: '', firstName: 'Test', lastName: 'Exemple', role: 'Gérant', joinedYear: '2018',
  email: 'test@example.com', phone: '06 00 00 00 00', consent: true, websiteConfirmation: '',
};
const request = (body = values) => ({ method: 'POST', contentType: 'application/json', body, origin: 'https://agencecelexia.fr', host: 'agencecelexia.fr' });
const env = { RESEND_API_KEY: 'dummy-test-key', CANDIDATURE_FROM_EMAIL: 'test@example.com' };
const now = new Date('2026-11-07T12:00:00Z');
const neverSend = () => { throw new Error('An invalid request must not send an email'); };

test('accepts a complete application with zero employees and no optional message', () => {
  assert.deepEqual(validateApplication(values), {});
});

test('rejects missing consent, fractional capacity, future dates and inconsistent tenure', () => {
  const errors = validateApplication({ ...values, consent: false, additionalProjects: '1.5', createdYear: '2027', joinedYear: '2010' }, undefined, 2026);
  for (const key of ['consent', 'additionalProjects', 'createdYear', 'joinedYear']) assert.ok(errors[key]);
});

test('invalid submissions never reach the email provider', async () => {
  for (const invalid of [null, [], '{bad json', { ...values, email: 'invalid' }, { ...values, websiteConfirmation: 'bot' }]) {
    const result = await handleCandidature(request(invalid), { env, now, send: neverSend });
    assert.equal(result.body.received, false);
    assert.ok(result.status >= 400);
  }
});

test('rejects unsupported methods, content types, cross-origin and oversized input', async () => {
  for (const [overrides, expected] of [
    [{ method: 'GET' }, 405], [{ contentType: 'text/plain' }, 415],
    [{ origin: 'https://another.example' }, 403], [{ body: 'x'.repeat(16001) }, 413],
  ]) {
    const result = await handleCandidature({ ...request(), ...overrides }, { env, now, send: neverSend });
    assert.equal(result.status, expected);
    assert.equal(result.body.received, false);
  }
});

test('missing server configuration returns an explicit unavailable result', async () => {
  const result = await handleCandidature(request(), { env: {}, now, send: neverSend });
  assert.equal(result.status, 503);
  assert.equal(result.body.received, false);
});

test('provider failures and ambiguous responses never become success', async () => {
  for (const send of [
    async () => new Response(JSON.stringify({ message: 'refused' }), { status: 403 }),
    async () => new Response('<html>fallback</html>', { status: 200 }),
    async () => new Response('{}', { status: 200 }),
    async () => { throw new Error('timeout'); },
  ]) {
    const result = await handleCandidature(request(), { env, now, send });
    assert.equal(result.status, 502);
    assert.equal(result.body.received, false);
  }
});

test('acknowledged email contains all business fields and a fixed destination', async () => {
  const sent = [];
  const send = async (url, options) => {
    sent.push({ url, ...options, payload: JSON.parse(options.body) });
    return new Response(JSON.stringify({ id: 'provider-test-id' }), { status: 200 });
  };
  const result = await handleCandidature(request({ ...values, to: 'attacker@example.com' }), { env, now, send });
  assert.equal(result.body.received, true);
  assert.equal(result.status, 200);
  assert.deepEqual(sent[0].payload.to, ['agence.celexia@gmail.com']);
  assert.equal(sent[0].payload.reply_to, values.email);
  assert.match(sent[0].payload.text, /Chiffre d’affaires annuel : 100 000 à 250 000 €/);
  assert.match(sent[0].payload.text, /Capacité supplémentaire par mois : 2/);
  assert.match(sent[0].payload.text, /Dans l’entreprise depuis : 2018/);
  await handleCandidature(request(), { env, now: new Date('2026-11-07T14:00:00Z'), send });
  assert.equal(sent[0].headers['Idempotency-Key'], sent[1].headers['Idempotency-Key']);
  assert.equal(sent[0].body, sent[1].body);
});

test('the browser rejects an HTTP 200 SPA fallback instead of displaying false success', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response('<html>Vite fallback</html>', { status: 200 }));
  await assert.rejects(submitApplication(values, 'test'), /pas pu être envoyée/);
});

test('the browser only accepts the explicit API receipt', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ received: true, reference: 'test' }), { status: 200 }));
  assert.deepEqual(await submitApplication(values, 'test'), { received: true, reference: 'test' });
});
