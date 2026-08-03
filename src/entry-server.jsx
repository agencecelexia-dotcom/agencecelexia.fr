import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

/**
 * Rend une route en HTML statique, au moment du build.
 *
 * L'arbre est strictement celui du client : mêmes imports statiques, aucune
 * frontière Suspense. C'est ce qui garantit que le contenu est écrit
 * directement dans <main>, dans l'ordre du document, et non relégué dans un
 * `<div hidden>` que seul JavaScript sait remettre en place.
 *
 * @param {string} url - chemin de la route, ex. '/metiers/couverture'
 * @returns {Promise<string>} le HTML du contenu, à injecter dans #root
 */
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const decodeur = new TextDecoder();
  let html = '';
  for await (const morceau of prelude) {
    html += decodeur.decode(morceau, { stream: true });
  }
  return html + decodeur.decode();
}
