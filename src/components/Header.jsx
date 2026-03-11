import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { METIERS } from '../context/NicheContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMetiersOpen, setIsMetiersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const metiersRef = useRef(null);

  // Liste des 6 services
  const services = [
    { name: 'Publicité à la Performance', path: '/services/publicite-performance', icon: '📞' },
    { name: 'Sites Web Artisans', path: '/services/site-web', icon: '🌐' },
    { name: 'Référencement SEO', path: '/services/seo', icon: '🔍' },
    { name: 'Avis Clients', path: '/services/avis-clients', icon: '⭐' },
    { name: 'Email Marketing', path: '/services/emailing', icon: '📧' },
    { name: 'Automatisation', path: '/services/automatisation', icon: '⚙️' }
  ];

  // Liste des 12 métiers
  const metiers = Object.entries(METIERS).map(([key, data]) => ({
    key,
    label: data.label,
    color: data.color,
    path: `/metiers/${key}`
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMetiersOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-soft border-b border-gray-100' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between" aria-label="Navigation principale">
        {/* Logo */}
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Agence Celexia - Marketing Digital pour Artisans"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            width="197"
            height="32"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/about" className="btn-ghost">
            À propos
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="btn-ghost flex items-center gap-1"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Services */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-up">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    to={service.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors group"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Métiers Dropdown */}
          <div className="relative" ref={metiersRef}>
            <button
              onClick={() => setIsMetiersOpen(!isMetiersOpen)}
              className="btn-ghost flex items-center gap-1"
              aria-expanded={isMetiersOpen}
              aria-haspopup="true"
            >
              Métiers
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMetiersOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Métiers */}
            {isMetiersOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-up max-h-96 overflow-y-auto">
                {metiers.map((metier) => (
                  <Link
                    key={metier.key}
                    to={metier.path}
                    onClick={() => setIsMetiersOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-violet-50 transition-colors group"
                  >
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: metier.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                      {metier.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="btn-ghost">
            Contact
          </Link>

          <Link to="/reserver" className="btn-primary ml-3 arrow-animate">
            Réserver un appel
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between relative">
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 flex flex-col gap-1 border-t border-gray-100 pt-3 bg-white">
          <Link to="/about" className="btn-ghost justify-start" onClick={closeMenu}>
            À propos
          </Link>

          {/* Services Mobile */}
          <div className="py-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Services</p>
            <div className="space-y-1">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={service.path}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors"
                >
                  <span className="text-lg">{service.icon}</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Métiers Mobile */}
          <div className="py-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Métiers</p>
            <div className="space-y-1 max-h-60 overflow-y-auto">
              {metiers.map((metier) => (
                <Link
                  key={metier.key}
                  to={metier.path}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: metier.color }}
                  />
                  {metier.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="btn-ghost justify-start" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/reserver"
            className="btn-primary mt-2 arrow-animate justify-center"
            onClick={closeMenu}
          >
            Réserver un appel
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
