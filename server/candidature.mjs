import { createHash } from 'node:crypto';
import { INITIAL_APPLICATION, TRADE_OPTIONS, validateApplication } from '../src/lib/candidature.js';

const DESTINATION = 'agence.celexia@gmail.com';
const MAX_BODY_BYTES = 16000;
const HEADERS = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
const failure = (status, message, extra = {}) => ({ status, headers: HEADERS, body: { received: false, message, ...extra } });

export async function handleCandidature({ method, body, contentType = '', origin, host }, { env = process.env, send = fetch, now = new Date() } = {}) {
  if (method !== 'POST') return { ...failure(405, 'Utilisez le formulaire pour envoyer votre demande.'), headers: { ...HEADERS, Allow: 'POST' } };
  if (!/^application\/json(?:;|$)/i.test(contentType)) return failure(415, 'Format de demande non pris en charge.');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return failure(403, 'Veuillez envoyer votre demande depuis le site Celexia.');
    } catch { return failure(403, 'Origine de la demande invalide.'); }
  }
  let input;
  try {
    const raw = typeof body === 'string' ? body : JSON.stringify(body);
    if (!raw || Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) return failure(413, 'Votre demande est trop volumineuse.');
    input = JSON.parse(raw);
  } catch { return failure(400, 'La demande n’a pas pu être lue. Vérifiez vos informations et réessayez.'); }
  if (!input || typeof input !== 'object' || Array.isArray(input)) return failure(400, 'Format de demande invalide.');
  if (input.websiteConfirmation) return failure(400, 'La demande n’a pas pu être validée. Contactez-nous directement.');

  const values = Object.fromEntries(Object.keys(INITIAL_APPLICATION).filter((key) => key !== 'websiteConfirmation').map((key) => [key, typeof input[key] === 'string' ? input[key].trim() : input[key]]));
  const fields = validateApplication(values, undefined, now.getUTCFullYear());
  if (Object.keys(fields).length) return failure(422, 'Vérifiez les informations indiquées dans le formulaire.', { fields });
  if (!env.RESEND_API_KEY || !env.CANDIDATURE_FROM_EMAIL) return failure(503, 'Le formulaire est temporairement indisponible. Votre demande n’a pas été envoyée. Vous pouvez nous contacter par e-mail ou par téléphone.');

  const source = typeof input.source === 'string' ? input.source.slice(0, 100).replace(/[\r\n]/g, '') : 'site';
  const trade = TRADE_OPTIONS.find(({ value }) => value === values.trade).label;
  const submissionDay = now.toISOString().slice(0, 10);
  const applicationId = createHash('sha256').update(JSON.stringify(values) + source + submissionDay).digest('hex');
  const text = [
    'NOUVELLE CANDIDATURE ARTISAN — CELEXIA',
    '',
    'ENTREPRISE',
    `Nom : ${values.company}`, `Métier : ${trade}`, `Zone : ${values.area}`, `Création : ${values.createdYear}`,
    '', 'ACTIVITÉ',
    `Salariés : ${values.employees}`, `Chiffre d’affaires annuel : ${values.revenue}`,
    `Chantiers réalisés par mois : ${values.monthlyProjects}`,
    `Capacité supplémentaire par mois : ${values.additionalProjects}`,
    `Précisions : ${values.details || 'Non renseigné'}`,
    '', 'CONTACT',
    `Prénom : ${values.firstName}`, `Nom : ${values.lastName}`, `Fonction : ${values.role}`,
    `Dans l’entreprise depuis : ${values.joinedYear}`, `E-mail : ${values.email}`, `Téléphone : ${values.phone}`,
    '', `Accord pour étude et prise de contact : oui (${submissionDay})`,
    `Provenance : ${source}`, `Référence : ${applicationId.slice(0, 12)}`,
    '', 'Cette demande est une candidature à analyser. Aucun compte ni contrat n’a été créé.',
  ].join('\n');

  try {
    const response = await send('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `candidature-${applicationId}`,
      },
      body: JSON.stringify({
        from: env.CANDIDATURE_FROM_EMAIL,
        to: [DESTINATION],
        reply_to: values.email,
        subject: `Candidature Celexia — ${values.company.replace(/[\r\n]/g, ' ')}`,
        text,
      }),
      signal: AbortSignal.timeout(12000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || typeof result?.id !== 'string' || !result.id) return failure(502, 'L’envoi n’a pas pu être confirmé. Vos informations sont conservées à l’écran. Réessayez ou contactez-nous directement.');
    return { status: 200, headers: HEADERS, body: { received: true, reference: applicationId.slice(0, 12) } };
  } catch {
    return failure(502, 'Nous n’avons pas pu confirmer la réception de votre demande. Contactez-nous avant de renouveler l’envoi.');
  }
}
