import test from 'node:test';
import assert from 'node:assert/strict';
import { handleCandidature } from '../server/candidature.mjs';
import { renderCandidatureEmail } from '../server/candidature-email.mjs';
import { submitApplication, validateApplication } from '../src/lib/candidature.js';

const values = {
  company: 'Entreprise de test', trade: 'couverture', area: 'Lyon', createdYear: '2018',
  employees: '0', revenue: '100 000 à 250 000 €', monthlyProjects: '3', additionalProjects: '2',
  details: '', firstName: 'Test', lastName: 'Exemple', role: 'Gérant', joinedYear: '2018',
  email: 'test@example.com', phone: '06 00 00 00 00', consent: true, websiteConfirmation: '',
};
const request = (body = values) => ({ method: 'POST', contentType: 'application/json', body, origin: 'https://agencecelexia.fr', host: 'agencecelexia.fr' });
const env = { RESEND_API_KEY: 'dummy-test-key', CANDIDATURE_FROM_EMAIL: 'test@example.com' };
const webhookEnv = { CANDIDATURE_WEBHOOK_URL: 'https://automation.example/webhook/candidature', CANDIDATURE_WEBHOOK_SECRET: 'dummy-webhook-secret' };
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
  assert.match(sent[0].payload.html, /<!doctype html>/);
  assert.match(sent[0].payload.html, /Répondre au candidat/);
  assert.match(sent[0].payload.html, /Entreprise de test/);
  await handleCandidature(request(), { env, now: new Date('2026-11-07T14:00:00Z'), send });
  assert.equal(sent[0].headers['Idempotency-Key'], sent[1].headers['Idempotency-Key']);
  assert.equal(sent[0].body, sent[1].body);
});

test('n8n takes priority and receives the validated application with a fixed email destination', async () => {
  const sent = [];
  const send = async (url, options) => {
    const payload = JSON.parse(options.body);
    sent.push({ url, ...options, payload });
    return new Response(JSON.stringify({ received: true, reference: payload.reference, messageId: 'gmail-test-id' }), { status: 200 });
  };
  const result = await handleCandidature(request({ ...values, company: ` ${values.company} `, source: 'contact\r\n\u0000', to: 'attacker@example.com', emailPayload: 'ignored' }), { env: { ...env, ...webhookEnv }, now, send });
  assert.equal(result.status, 200);
  assert.equal(result.body.received, true);
  assert.equal(sent.length, 1);
  const outbound = sent[0];
  assert.equal(outbound.url, webhookEnv.CANDIDATURE_WEBHOOK_URL);
  assert.equal(outbound.method, 'POST');
  assert.equal(outbound.headers['X-Celexia-Webhook-Secret'], webhookEnv.CANDIDATURE_WEBHOOK_SECRET);
  assert.equal(outbound.headers.Authorization, undefined);
  assert.equal(outbound.redirect, 'error');
  assert.ok(outbound.signal instanceof AbortSignal);
  assert.match(outbound.payload.reference, /^[a-f0-9]{64}$/);
  assert.equal(outbound.headers['Idempotency-Key'], `candidature-${outbound.payload.reference}`);
  assert.equal(result.body.reference, outbound.payload.reference.slice(0, 12));
  const { websiteConfirmation, ...application } = values;
  assert.deepEqual(outbound.payload.application, application);
  assert.equal(outbound.payload.source, 'contact');
  assert.equal(outbound.payload.email.to, 'agence.celexia@gmail.com');
  assert.equal(outbound.payload.email.replyTo, values.email);
  assert.equal(outbound.payload.email.subject, `Candidature Celexia — ${values.company}`);
  assert.match(outbound.payload.email.text, /Chiffre d’affaires annuel : 100 000 à 250 000 €/);
  assert.match(outbound.payload.email.text, /Capacité supplémentaire par mois : 2/);
  assert.match(outbound.payload.email.text, /Dans l’entreprise depuis : 2018/);
  assert.match(outbound.payload.email.html, /<!doctype html>/);
  assert.match(outbound.payload.email.html, /Entreprise de test/);
  assert.match(outbound.payload.email.html, /mailto:test@example.com/);
  assert.ok(!outbound.body.includes(webhookEnv.CANDIDATURE_WEBHOOK_SECRET));
  await handleCandidature(request({ ...values, source: 'contact' }), { env: webhookEnv, now: new Date('2026-11-07T14:00:00Z'), send });
  assert.equal(sent[0].payload.reference, sent[1].payload.reference);
});

test('incomplete or unsafe n8n configuration does not send or fall back to Resend', async () => {
  for (const overrides of [
    { CANDIDATURE_WEBHOOK_SECRET: '' },
    { CANDIDATURE_WEBHOOK_SECRET: '   ' },
    { CANDIDATURE_WEBHOOK_SECRET: 'invalid\r\nheader' },
    { CANDIDATURE_WEBHOOK_URL: '' },
    { CANDIDATURE_WEBHOOK_URL: 'not-a-url' },
    { CANDIDATURE_WEBHOOK_URL: 'http://automation.example/webhook/candidature' },
    { CANDIDATURE_WEBHOOK_URL: 'https://username:password@automation.example/webhook/candidature' },
    { CANDIDATURE_WEBHOOK_URL: 'https://automation.example/webhook/candidature#fragment' },
  ]) {
    let sends = 0;
    const result = await handleCandidature(request(), { env: { ...env, ...webhookEnv, ...overrides }, now, send: () => { sends++; return neverSend(); } });
    assert.equal(result.status, 503);
    assert.equal(result.body.received, false);
    assert.equal(sends, 0);
  }
});

test('n8n failures and ambiguous acknowledgements cannot confirm receipt or trigger a second provider', async () => {
  for (const response of [
    () => new Response(JSON.stringify({ received: false }), { status: 403 }),
    () => new Response('<html>fallback</html>', { status: 200 }),
    () => new Response('{}', { status: 200 }),
    () => new Response(JSON.stringify({ received: true, messageId: 'gmail-test-id' }), { status: 200 }),
    () => new Response(JSON.stringify({ received: true, reference: 'wrong-reference', messageId: 'gmail-test-id' }), { status: 200 }),
    (payload) => new Response(JSON.stringify({ received: true, reference: payload.reference }), { status: 200 }),
    (payload) => new Response(JSON.stringify({ received: true, reference: payload.reference, messageId: '   ' }), { status: 200 }),
    (payload) => new Response(JSON.stringify({ received: 'true', reference: payload.reference, messageId: 'gmail-test-id' }), { status: 200 }),
    (payload) => new Response(JSON.stringify({ received: true, reference: payload.reference, messageId: 'gmail-test-id' }), { status: 500 }),
    () => { throw new Error('timeout'); },
  ]) {
    const calls = [];
    const send = async (url, options) => { calls.push(url); return response(JSON.parse(options.body)); };
    const result = await handleCandidature(request(), { env: { ...env, ...webhookEnv }, now, send });
    assert.equal(result.status, 502);
    assert.equal(result.body.received, false);
    assert.deepEqual(calls, [webhookEnv.CANDIDATURE_WEBHOOK_URL]);
  }
});

test('invalid submissions never reach n8n', async () => {
  let sends = 0;
  const result = await handleCandidature(request({ ...values, consent: false }), { env: webhookEnv, now, send: () => { sends++; return neverSend(); } });
  assert.equal(result.status, 422);
  assert.equal(result.body.received, false);
  assert.equal(sends, 0);
});

test('HTML email escapes every user-provided field and preserves message paragraphs safely', () => {
  const dangerous = `<script>alert("x")</script> & 'fin'`;
  const escaped = '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;fin&#39;';
  const application = Object.fromEntries(Object.keys(values).map((key) => [key, dangerous]));
  application.consent = true;
  application.details = `${dangerous}\nDeuxième ligne\r\n\r\nDernier paragraphe`;
  const html = renderCandidatureEmail({ application, trade: dangerous, source: dangerous, reference: '0123456789abcdef', submissionDay: '2026-11-07' });
  assert.ok(!html.includes('<script>'));
  assert.ok(!html.includes(dangerous));
  assert.ok(html.split(escaped).length > 15, 'All dynamic text fields should contain HTML-escaped values');
  assert.ok(html.includes(`${escaped}<br>Deuxième ligne<br><br>Dernier paragraphe`));
  assert.match(html, /7 novembre 2026/);
  assert.match(html, /Référence 0123456789ab/);
  assert.ok(!html.includes('href="tel:'), 'Unsafe phone values must not become telephone links');
  assert.ok(!/<(?:script|img|iframe|object)\b/i.test(html));
});

test('email links cannot inject HTML attributes or mail headers', () => {
  const email = `name?bcc=other@example.com`.replace('@example.com', `&subject="'><svg>+tag@example.com`);
  const html = renderCandidatureEmail({ application: { ...values, email, phone: '+33 (0)6 12 34 56 78' }, trade: 'Couverture', source: 'contact', reference: 'a'.repeat(64), submissionDay: '2026-11-07' });
  const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  const expectedAddress = 'mailto:name%3Fbcc%3Dother%26subject%3D%22%27%3E%3Csvg%3E%2Btag@example.com';
  assert.deepEqual(links, [expectedAddress, 'tel:+33612345678', expectedAddress]);
  assert.equal(decodeURIComponent(links[0].slice('mailto:'.length)), email);
  assert.ok(!html.includes('<svg>'));
  assert.ok(!links.some((link) => /[?&"'<>\r\n]/.test(link)));
});

test('HTML email includes all application data without an empty optional-message section', () => {
  const html = renderCandidatureEmail({ application: values, trade: 'Couverture', source: 'page-contact', reference: 'a'.repeat(64), submissionDay: '2026-11-07' });
  for (const value of ['Entreprise de test', 'Couverture', 'Lyon', '2018', '100 000 à 250 000 €', 'Test Exemple', 'Gérant', 'test@example.com', '06 00 00 00 00', 'page-contact']) assert.ok(html.includes(value));
  for (const label of ['Nombre de salariés', 'Chiffre d’affaires annuel', 'Chantiers réalisés', 'Chantiers supplémentaires', 'Dans l’entreprise depuis', 'Accord pour l’étude']) assert.ok(html.includes(label));
  assert.ok(!html.includes('Le mot du candidat'));
  assert.match(html, /max-width:640px/);
  assert.ok(!/https?:\/\//.test(html), 'The email must not load remote images or fonts');
});

test('HTML rendering tolerates an isolated Unicode surrogate in an email address', () => {
  const html = renderCandidatureEmail({ application: { ...values, email: 'test\ud800@example.com' }, trade: 'Couverture', source: 'contact', reference: 'a'.repeat(64), submissionDay: '2026-11-07' });
  assert.match(html, /href="mailto:test%EF%BF%BD@example.com"/);
});

test('the browser rejects an HTTP 200 SPA fallback instead of displaying false success', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response('<html>Vite fallback</html>', { status: 200 }));
  await assert.rejects(submitApplication(values, 'test'), /pas pu être envoyée/);
});

test('the browser only accepts the explicit API receipt', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ received: true, reference: 'test' }), { status: 200 }));
  assert.deepEqual(await submitApplication(values, 'test'), { received: true, reference: 'test' });
});
