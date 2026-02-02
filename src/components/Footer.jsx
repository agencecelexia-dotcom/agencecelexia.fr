import { Link } from 'react-router-dom';
import { useScrollToSection } from '../utils/scrollToSection';

const Footer = () => {
  const scrollToSection = useScrollToSection();

  const handleCalculatorClick = (e) => {
    e.preventDefault();
    scrollToSection('calculateur');
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Agence Celexia - Spécialiste en Local Service Ads pour artisans"
                className="h-8 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Votre partenaire pour la génération de leads qualifiés.
              Acquisition client optimisée pour artisans.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Accueil</Link>
              <Link to="/about" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">A Propos</Link>
              <Link to="/sites-artisans" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Sites Web</Link>
              <button onClick={handleCalculatorClick} className="text-gray-500 hover:text-violet-600 transition-colors text-sm text-left">Calculateur</button>
              <Link to="/contact" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Nos Services */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Nos Services</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services/publicite-performance" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Publicité Performance</Link>
              <Link to="/services/site-web" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Sites Web</Link>
              <Link to="/services/seo" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">SEO</Link>
              <Link to="/services/avis-clients" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Avis Clients</Link>
              <Link to="/services/emailing" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">Email Marketing</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:agence.celexia@gmail.com" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">
                agence.celexia@gmail.com
              </a>
              <a href="tel:+33651725756" className="text-gray-500 hover:text-violet-600 transition-colors text-sm">
                06 51 72 57 56
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Agence Celexia. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-400 text-xs">Système actif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
