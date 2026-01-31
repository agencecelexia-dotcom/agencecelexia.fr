import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../utils/scrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalculatorClick = (e) => {
    e.preventDefault();
    scrollToSection('calculateur');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-soft border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Agence Celexia - Génération de leads pour artisans"
            className="h-8 transition-transform duration-300 group-hover:scale-[1.02]"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/about" className="btn-ghost">
            A propos
          </Link>
          {isHome && (
            <button onClick={handleCalculatorClick} className="btn-ghost">
              Calculateur
            </button>
          )}
          <Link
            to="/contact"
            className="btn-primary ml-3 arrow-animate"
          >
            Reserver un appel
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between relative">
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-full h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 flex flex-col gap-1 border-t border-gray-100 pt-3 bg-white">
          <Link to="/about" className="btn-ghost justify-start" onClick={closeMenu}>
            A propos
          </Link>
          {isHome && (
            <button onClick={handleCalculatorClick} className="btn-ghost justify-start">
              Calculateur
            </button>
          )}
          <Link
            to="/contact"
            className="btn-primary mt-2 arrow-animate"
            onClick={closeMenu}
          >
            Reserver un appel
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
