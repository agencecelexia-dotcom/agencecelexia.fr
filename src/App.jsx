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

// Métiers pages
const Pisciniste = lazy(() => import('./pages/metiers/Pisciniste'));
const Paysagiste = lazy(() => import('./pages/metiers/Paysagiste'));
const Plombier = lazy(() => import('./pages/metiers/Plombier'));
const Chauffagiste = lazy(() => import('./pages/metiers/Chauffagiste'));
const Electricien = lazy(() => import('./pages/metiers/Electricien'));
const Menuisier = lazy(() => import('./pages/metiers/Menuisier'));
const Couvreur = lazy(() => import('./pages/metiers/Couvreur'));
const Macon = lazy(() => import('./pages/metiers/Macon'));
const Carreleur = lazy(() => import('./pages/metiers/Carreleur'));
const Peintre = lazy(() => import('./pages/metiers/Peintre'));
const Serrurier = lazy(() => import('./pages/metiers/Serrurier'));
const Vitrier = lazy(() => import('./pages/metiers/Vitrier'));

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

                {/* Métiers routes */}
                <Route path="/metiers/pisciniste" element={<Pisciniste />} />
                <Route path="/metiers/paysagiste" element={<Paysagiste />} />
                <Route path="/metiers/plombier" element={<Plombier />} />
                <Route path="/metiers/chauffagiste" element={<Chauffagiste />} />
                <Route path="/metiers/electricien" element={<Electricien />} />
                <Route path="/metiers/menuisier" element={<Menuisier />} />
                <Route path="/metiers/couvreur" element={<Couvreur />} />
                <Route path="/metiers/macon" element={<Macon />} />
                <Route path="/metiers/carreleur" element={<Carreleur />} />
                <Route path="/metiers/peintre" element={<Peintre />} />
                <Route path="/metiers/serrurier" element={<Serrurier />} />
                <Route path="/metiers/vitrier" element={<Vitrier />} />

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
