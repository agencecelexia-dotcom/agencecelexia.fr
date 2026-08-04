import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const conteneur = document.getElementById('root');

const arbre = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// En production, scripts/prerender-meta.mjs a déjà injecté le HTML de la page
// dans #root : on hydrate au lieu de tout reconstruire. En dev, le conteneur
// est vide et on monte normalement.
if (conteneur.hasChildNodes()) {
  hydrateRoot(conteneur, arbre);
} else {
  createRoot(conteneur).render(arbre);
}
