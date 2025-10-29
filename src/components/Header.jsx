import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../utils/scrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollToSection = useScrollToSection();

  const handleCalculatorClick = (e) => {
    e.preventDefault();
    scrollToSection('calculateur');
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src="/logo.png" alt="Agence Celexia" className="h-8 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/about"
              className="text-dark-gray hover:text-primary-purple transition-colors font-semibold"
            >
              À Propos
            </Link>
            {isHome && (
              <button
                onClick={handleCalculatorClick}
                className="text-dark-gray hover:text-primary-purple transition-colors font-semibold"
              >
                Calculateur
              </button>
            )}
            <Link
              to="/contact"
              className="bg-primary-purple text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
            >
              Réserver un appel
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dark-gray hover:text-primary-purple transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-dark-gray hover:text-primary-purple transition-colors font-semibold py-2"
                onClick={closeMenu}
              >
                À Propos
              </Link>
              {isHome && (
                <button
                  onClick={handleCalculatorClick}
                  className="text-dark-gray hover:text-primary-purple transition-colors font-semibold py-2 text-left"
                >
                  Calculateur
                </button>
              )}
              <Link
                to="/contact"
                className="bg-primary-purple text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-center"
                onClick={closeMenu}
              >
                Réserver un appel
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
