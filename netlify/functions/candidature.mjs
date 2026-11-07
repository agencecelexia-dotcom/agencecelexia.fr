import { handleCandidature } from '../../server/candidature.mjs';

export async function handler(event) {
  const result = await handleCandidature({
    method: event.httpMethod,
    body: event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body,
    contentType: event.headers['content-type'],
    origin: event.headers.origin,
    host: event.headers.host,
  });
  return { statusCode: result.status, headers: result.headers, body: JSON.stringify(result.body) };
}
