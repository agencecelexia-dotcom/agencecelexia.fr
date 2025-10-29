import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../utils/scrollToSection';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollToSection = useScrollToSection();

  const handleCalculatorClick = (e) => {
    e.preventDefault();
    scrollToSection('calculateur');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Agence Celexia" className="h-8 md:h-12" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link
              to="/about"
              className="hidden sm:block text-dark-gray hover:text-primary-purple transition-colors font-semibold text-sm md:text-base"
            >
              À Propos
            </Link>
            {isHome && (
              <button
                onClick={handleCalculatorClick}
                className="hidden md:block text-dark-gray hover:text-primary-purple transition-colors font-semibold"
              >
                Calculateur
              </button>
            )}
            <button
              onClick={handleContactClick}
              className="bg-primary-purple text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm md:text-base"
            >
              Réserver un appel
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
