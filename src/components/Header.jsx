import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-purple">
            Local Service Ads
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/comment-ca-marche" className="text-dark-gray hover:text-primary-purple transition-colors">
              Comment ça marche
            </Link>
            <Link to="/pourquoi-les-lsa" className="text-dark-gray hover:text-primary-purple transition-colors">
              Pourquoi les LSA
            </Link>
            <Link to="/tarifs" className="text-dark-gray hover:text-primary-purple transition-colors">
              Tarifs
            </Link>
            <Link to="/blog" className="text-dark-gray hover:text-primary-purple transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="bg-primary-purple text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-colors">
              Réserver un audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/comment-ca-marche"
              className="block text-dark-gray hover:text-primary-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link
              to="/pourquoi-les-lsa"
              className="block text-dark-gray hover:text-primary-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pourquoi les LSA
            </Link>
            <Link
              to="/tarifs"
              className="block text-dark-gray hover:text-primary-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              to="/blog"
              className="block text-dark-gray hover:text-primary-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block bg-primary-purple text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver un audit
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
