import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingStrategy from './pages/BookingStrategy';
import ArtisanWebsites from './pages/ArtisanWebsites';
import NotFound from './pages/NotFound';
import { NicheProvider } from './context/NicheContext';

// Services pages
import PublicitePerformance from './pages/services/PublicitePerformance';
import SiteWeb from './pages/services/SiteWeb';
import SEO from './pages/services/SEO';
import AvisClients from './pages/services/AvisClients';
import Emailing from './pages/services/Emailing';
import Automatisation from './pages/services/Automatisation';

function App() {
  return (
    <NicheProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sites-artisans" element={<ArtisanWebsites />} />
              <Route path="/reserver" element={<BookingStrategy />} />

              {/* Services routes */}
              <Route path="/services/publicite-performance" element={<PublicitePerformance />} />
              <Route path="/services/site-web" element={<SiteWeb />} />
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/services/avis-clients" element={<AvisClients />} />
              <Route path="/services/emailing" element={<Emailing />} />
              <Route path="/services/automatisation" element={<Automatisation />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </NicheProvider>
  );
}

export default App;
