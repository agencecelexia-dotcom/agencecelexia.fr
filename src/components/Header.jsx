import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { METIERS } from '../context/NicheContext';

// Icônes inline (style Lucide / shadcn), monochrome, currentColor
const Icon = {
  Phone: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Globe: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Search: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Star: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Mail: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Settings: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  X: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  ChevronDown: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
};

const services = [
  { name: 'Site internet', path: '/services/site-web', Icon: Icon.Globe },
  { name: 'Référencement local', path: '/services/seo', Icon: Icon.Search },
  { name: 'Avis clients', path: '/services/avis-clients', Icon: Icon.Star },
  { name: 'Emails de relance', path: '/services/emailing', Icon: Icon.Mail },
  { name: 'Automatisation', path: '/services/automatisation', Icon: Icon.Settings },
  { name: 'Publicité à la performance', path: '/services/publicite-performance', Icon: Icon.Phone },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMetiersOpen, setIsMetiersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const metiersRef = useRef(null);

  const metiers = Object.entries(METIERS).map(([key, data]) => ({
    key,
    label: data.label,
    color: data.color,
    path: `/metiers/${key}`,
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (metiersRef.current && !metiersRef.current.contains(event.target)) {
        setIsMetiersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      return () => {
        const top = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(top || '0', 10) * -1);
      };
    }
  }, [isMenuOpen]);

  // Close mobile menu when route changes (best-effort: close on link click)
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMetiersOpen(false);
  };

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
          scrolled ? 'shadow-soft border-b border-gray-100' : ''
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between" aria-label="Navigation principale">
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Agence Celexia - Apport d'affaires pour artisans"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              width="197"
              height="32"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/about" className="btn-ghost">À propos</Link>

            {/* Services Dropdown (desktop) */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="btn-ghost flex items-center gap-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <Icon.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-up">
                  {services.map((service) => {
                    const ServiceIcon = service.Icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors group"
                      >
                        <ServiceIcon className="w-5 h-5 text-violet-600" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Métiers Dropdown (desktop) */}
            <div className="relative" ref={metiersRef}>
              <button
                onClick={() => setIsMetiersOpen(!isMetiersOpen)}
                className="btn-ghost flex items-center gap-1"
                aria-expanded={isMetiersOpen}
                aria-haspopup="true"
              >
                Métiers
                <Icon.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMetiersOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMetiersOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-up max-h-96 overflow-y-auto">
                  {metiers.map((metier) => (
                    <Link
                      key={metier.key}
                      to={metier.path}
                      onClick={() => setIsMetiersOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-violet-50 transition-colors group"
                    >
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: metier.color }} />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                        {metier.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-ghost">Contact</Link>

            <Link to="/reserver" className="btn-primary ml-3 arrow-animate">
              Réserver un appel découverte
              <Icon.ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button (burger) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-[2px] bg-gray-900 rounded-full" />
              <span className="w-full h-[2px] bg-gray-900 rounded-full" />
              <span className="w-full h-[2px] bg-gray-900 rounded-full" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay (plein écran) */}
      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`md:hidden fixed inset-0 z-[60] bg-white transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="flex flex-col h-full">
          {/* Header overlay : logo + croix */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img src="/logo.png" alt="Agence Celexia" className="h-8 w-auto" width="197" height="32" />
            </Link>
            <button
              onClick={closeMenu}
              className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <Icon.X className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Liens (scrollable interne) */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 text-lg font-semibold text-gray-900 border-b border-gray-100"
            >
              À propos
              <Icon.ArrowRight className="w-5 h-5 text-gray-400" />
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 text-lg font-semibold text-gray-900 border-b border-gray-100"
            >
              Contact
              <Icon.ArrowRight className="w-5 h-5 text-gray-400" />
            </Link>

            <div className="py-4 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Nos métiers</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {metiers.map((metier) => (
                  <Link
                    key={metier.key}
                    to={metier.path}
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-3 text-base text-gray-800 active:bg-gray-100 rounded-lg px-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: metier.color }} />
                    <span className="leading-tight">{metier.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Services complémentaires</p>
              <div className="space-y-1">
                {services.map((service) => {
                  const ServiceIcon = service.Icon;
                  return (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={closeMenu}
                      className="flex items-center gap-3 py-3 px-2 text-base text-gray-800 active:bg-gray-100 rounded-lg"
                    >
                      <ServiceIcon className="w-5 h-5 text-violet-600 flex-shrink-0" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA bas (sticky) */}
          <div className="flex-shrink-0 p-5 border-t border-gray-100 bg-white">
            <Link
              to="/reserver"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-4 rounded-xl text-base transition-colors"
            >
              Réserver un appel découverte
              <Icon.ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="mt-3 text-center text-xs text-gray-500">
              Sans engagement · 10 % uniquement sur les devis signés
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
