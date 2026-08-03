import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { METIERS } from '../data/metiers';
import { registerUrl, CTA_LABEL } from '../lib/links';

const Icon = {
  X: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ChevronDown: (p) => (
    <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

const metiers = Object.entries(METIERS).map(([slug, data]) => ({
  slug,
  label: data.label,
  labelCourt: data.labelCourt,
  color: data.color,
  path: `/metiers/${slug}`,
}));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMetiersOpen, setIsMetiersOpen] = useState(false);
  const metiersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (metiersRef.current && !metiersRef.current.contains(event.target)) {
        setIsMetiersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Verrouille le défilement du corps pendant que l'overlay mobile est ouvert.
  useEffect(() => {
    if (!isMenuOpen) return;
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
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMetiersOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen && !isMetiersOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen, isMetiersOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-brume-200">
        <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between" aria-label="Navigation principale">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Agence Celexia — accueil"
              className="h-8 w-auto"
              width="197"
              height="32"
              loading="eager"
            />
          </Link>

          {/* Navigation bureau */}
          <div className="hidden md:flex items-center gap-1">
            <div className="relative" ref={metiersRef}>
              <button
                type="button"
                onClick={() => setIsMetiersOpen(!isMetiersOpen)}
                className="btn-ghost gap-1.5"
                aria-expanded={isMetiersOpen}
                aria-haspopup="true"
              >
                Métiers
                <Icon.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMetiersOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMetiersOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg border border-brume-300 py-1.5 shadow-card">
                  {metiers.map((metier) => (
                    <Link
                      key={metier.slug}
                      to={metier.path}
                      onClick={() => setIsMetiersOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-brume-100 transition-colors"
                    >
                      <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: metier.color }} aria-hidden="true" />
                      <span className="text-sm font-medium text-encre-800">{metier.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="btn-ghost">À propos</Link>
            <Link to="/contact" className="btn-ghost">Contact</Link>

            <a
              href={registerUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-3 !px-5 !py-2.5 !text-sm"
            >
              {CTA_LABEL}
            </a>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-md hover:bg-brume-100 transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            <span className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span className="w-full h-[2px] bg-encre-800 rounded-full" />
              <span className="w-full h-[2px] bg-encre-800 rounded-full" />
              <span className="w-full h-[2px] bg-encre-800 rounded-full" />
            </span>
          </button>
        </nav>
      </header>

      {/* Overlay mobile plein écran */}
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
          <div className="flex items-center justify-between px-5 h-16 border-b border-brume-200 flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img src="/logo.png" alt="Agence Celexia — accueil" className="h-8 w-auto" width="197" height="32" />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="w-11 h-11 -mr-2 flex items-center justify-center rounded-md hover:bg-brume-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <Icon.X className="w-6 h-6 text-encre-800" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="section-kicker py-3">Métiers</p>
            {metiers.map((metier) => (
              <Link
                key={metier.slug}
                to={metier.path}
                onClick={closeMenu}
                className="flex items-center gap-3 py-4 border-b border-brume-200 text-lg font-semibold text-encre-800"
              >
                <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: metier.color }} aria-hidden="true" />
                <span className="flex-1">{metier.label}</span>
                <Icon.ArrowRight className="w-5 h-5 text-brume-300" />
              </Link>
            ))}

            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 border-b border-brume-200 text-lg font-semibold text-encre-800"
            >
              À propos
              <Icon.ArrowRight className="w-5 h-5 text-brume-300" />
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 border-b border-brume-200 text-lg font-semibold text-encre-800"
            >
              Contact
              <Icon.ArrowRight className="w-5 h-5 text-brume-300" />
            </Link>
          </div>

          <div className="flex-shrink-0 p-5 border-t border-brume-200 bg-white">
            <a
              href={registerUrl('menu-mobile')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              {CTA_LABEL}
              <Icon.ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-3 text-center text-xs text-encre-600">
              Inscription gratuite · Vous ne payez que sur devis signé
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
