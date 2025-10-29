import { Link } from 'react-router-dom';
import { useScrollToSection } from '../utils/scrollToSection';

const Footer = () => {
  const scrollToSection = useScrollToSection();

  const handleCalculatorClick = (e) => {
    e.preventDefault();
    scrollToSection('calculateur');
  };

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-purple mb-4">
            Agence Celexia
          </h3>
          <p className="text-gray-300 mb-6">
            Votre partenaire pour la génération de leads qualifiés
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <Link to="/" className="text-gray-300 hover:text-primary-purple transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-primary-purple transition-colors">
              À Propos
            </Link>
            <button
              onClick={handleCalculatorClick}
              className="text-gray-300 hover:text-primary-purple transition-colors"
            >
              Calculateur
            </button>
            <Link to="/contact" className="text-gray-300 hover:text-primary-purple transition-colors">
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Agence Celexia • agence.celexia@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
