import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import CookieConsent from './components/CookieConsent';

// Pages chargées à la demande. Toute nouvelle page doit passer par lazy().
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Métier : route générique paramétrée par slug.
const MetierPage = lazy(() => import('./components/MetierPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Chargement en cours">
    <div className="w-8 h-8 border-2 border-acier-200 border-t-cuivre-500 rounded-full animate-spin" aria-hidden="true" />
    <span className="sr-only">Chargement en cours…</span>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cuivre-500 focus:text-white focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <Header />
        <Breadcrumbs />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
