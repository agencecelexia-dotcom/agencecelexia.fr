import { handleCandidature } from '../server/candidature.mjs';

export default async function candidature(request, response) {
  const result = await handleCandidature({
    method: request.method,
    body: request.body,
    contentType: request.headers['content-type'],
    origin: request.headers.origin,
    host: request.headers.host,
  });
  for (const [name, value] of Object.entries(result.headers)) response.setHeader(name, value);
  response.status(result.status).json(result.body);
}
