import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
const ArtisanWebsites = lazy(() => import('./pages/ArtisanWebsites'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Services pages
const PublicitePerformance = lazy(() => import('./pages/services/PublicitePerformance'));
const SiteWeb = lazy(() => import('./pages/services/SiteWeb'));
const SEO = lazy(() => import('./pages/services/SEO'));
const AvisClients = lazy(() => import('./pages/services/AvisClients'));
const Emailing = lazy(() => import('./pages/services/Emailing'));
const Automatisation = lazy(() => import('./pages/services/Automatisation'));

// Métier (générique, route paramétrée)
const MetierPage = lazy(() => import('./components/MetierPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <NicheProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sites-artisans" element={<ArtisanWebsites />} />
                <Route path="/reserver" element={<BookingStrategy />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

                {/* Services routes */}
                <Route path="/services/publicite-performance" element={<PublicitePerformance />} />
                <Route path="/services/site-web" element={<SiteWeb />} />
                <Route path="/services/seo" element={<SEO />} />
                <Route path="/services/avis-clients" element={<AvisClients />} />
                <Route path="/services/emailing" element={<Emailing />} />
                <Route path="/services/automatisation" element={<Automatisation />} />

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
