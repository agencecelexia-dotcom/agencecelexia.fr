import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import CookieConsent from './components/CookieConsent';
import { NicheProvider } from './context/NicheContext';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BookingStrategy = lazy(() => import('./pages/BookingStrategy'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Métier (générique, route paramétrée)
const MetierPage = lazy(() => import('./components/MetierPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Chargement en cours">
    <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin" aria-hidden="true" />
    <span className="sr-only">Chargement en cours...</span>
  </div>
);

function App() {
  return (
    <NicheProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
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
                <Route path="/reserver" element={<BookingStrategy />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

                {/* Anciennes URLs de l'ancien modèle (prestation) → redirigées vers l'accueil.
                    Le vrai 301 est servi par l'hébergeur (netlify.toml / vercel.json) ;
                    ces routes sont un filet de sécurité côté client (dev, bundles en cache). */}
                <Route path="/services/*" element={<Navigate to="/" replace />} />
                <Route path="/sites-artisans" element={<Navigate to="/" replace />} />

                {/* Métiers (route générique paramétrée par slug) */}
                <Route path="/metiers/:slug" element={<MetierPage />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </NicheProvider>
  );
}

export default App;
