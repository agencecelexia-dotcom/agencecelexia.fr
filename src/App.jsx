import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import NotFound from './pages/NotFound';
import MetierPage from './components/MetierPage';

/**
 * Arbre de l'application, sans routeur : il est fourni par l'entrée —
 * BrowserRouter côté client (entry-client.jsx), StaticRouter au build
 * (entry-server.jsx).
 *
 * Les pages sont importées STATIQUEMENT, sans `lazy()` ni `Suspense`, et c'est
 * délibéré. Au pré-rendu, la moindre frontière Suspense fait émettre le contenu
 * dans un `<div hidden>` de fin de page qu'un script repositionne au
 * chargement : un robot qui n'exécute pas JavaScript n'y verrait que
 * « Chargement… ». Serveur et client partagent donc exactement le même arbre,
 * ce qui garantit aussi une hydratation sans désaccord de structure.
 *
 * Coût mesuré : environ 10 ko gzip de plus au premier chargement, contre sept
 * requêtes en moins à la navigation. Pour un site de neuf pages, l'échange est
 * favorable. À réexaminer si le site grossit beaucoup.
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <Header />
        <Breadcrumbs />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

            {/* Métiers. Les anciens slugs sont redirigés dans MetierPage
                via src/lib/legacyRoutes.js. */}
            <Route path="/metiers/:slug" element={<MetierPage />} />

            {/* Anciennes URLs des offres précédentes → accueil.
                Le vrai 301 est servi par l'hébergeur (netlify.toml / vercel.json) ;
                ces routes sont un filet de sécurité côté client (dev, bundles en cache). */}
            <Route path="/services/*" element={<Navigate to="/" replace />} />
            <Route path="/sites-artisans" element={<Navigate to="/" replace />} />
            <Route path="/reserver" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}

export default App;
