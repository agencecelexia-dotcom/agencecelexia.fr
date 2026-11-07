import { Buffer } from 'node:buffer';
import { handleCandidature } from '../server/candidature.mjs';

const MAX_BODY_BYTES = 16000;

function readBody(request) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    function onData(chunk) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        chunks.length = 0;
        request.removeListener('data', onData);
        request.resume();
        reject(new RangeError('Request body too large'));
        return;
      }
      chunks.push(chunk);
    }
    request.on('data', onData);
    request.once('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    request.once('error', reject);
  });
}

// Ce plugin ne tourne que dans Node : les secrets restent dans le serveur Vite.
export function candidatureDevPlugin(env) {
  return {
    name: 'celexia-candidature-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split('?')[0] !== '/api/candidature') return next();

        try {
          const body = request.method === 'POST' ? await readBody(request) : undefined;
          const result = await handleCandidature({
            method: request.method,
            body,
            contentType: request.headers['content-type'],
            origin: request.headers.origin,
            host: request.headers.host,
          }, { env });
          response.writeHead(result.status, result.headers);
          response.end(JSON.stringify(result.body));
        } catch (error) {
          const tooLarge = error instanceof RangeError;
          response.writeHead(tooLarge ? 413 : 500, {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
          });
          response.end(JSON.stringify({
            received: false,
            message: tooLarge
              ? 'Votre demande est trop volumineuse.'
              : 'Le formulaire est temporairement indisponible. Votre demande n’a pas été envoyée.',
          }));
        }
      });
    },
  };
}
