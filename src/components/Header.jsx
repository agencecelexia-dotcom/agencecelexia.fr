import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { METIERS } from '../context/NicheContext';
import { REGISTER_URL } from '../lib/links';

const Icon = {
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMetiersOpen, setIsMetiersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (metiersRef.current && !metiersRef.current.contains(event.target)) {
        setIsMetiersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMetiersOpen(false);
  };

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

            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-3 arrow-animate"
            >
              Recevoir des chantiers
              <Icon.ArrowRight className="ml-2 w-4 h-4" />
            </a>
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

            <div className="py-4">
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
          </div>

          {/* CTA bas (sticky) */}
          <div className="flex-shrink-0 p-5 border-t border-gray-100 bg-white">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-4 rounded-xl text-base transition-colors"
            >
              Recevoir des chantiers
              <Icon.ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="mt-3 text-center text-xs text-gray-500">
              Sans engagement · 10 % uniquement sur devis signés · Aucune avance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
