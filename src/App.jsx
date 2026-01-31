import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtisanWebsites from './pages/ArtisanWebsites';
import LeadsPlombier from './pages/LeadsPlombier';
import LeadsElectricien from './pages/LeadsElectricien';
import LeadsMenuisier from './pages/LeadsMenuisier';
import NotFound from './pages/NotFound';
import { NicheProvider } from './context/NicheContext';

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
              <Route path="/leads-plombier" element={<LeadsPlombier />} />
              <Route path="/leads-electricien" element={<LeadsElectricien />} />
              <Route path="/leads-menuisier" element={<LeadsMenuisier />} />
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
