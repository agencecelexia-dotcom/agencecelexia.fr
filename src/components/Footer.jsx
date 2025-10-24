const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-purple mb-4">
            LSA Calculator
          </h3>
          <p className="text-gray-300 mb-6">
            Calculez votre ROI avec Local Service Ads
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#calculateur" className="text-gray-300 hover:text-primary-purple transition-colors">
              Calculateur
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-purple transition-colors">
              Contact
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Agence Celexia • contact@agence-celexia.fr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
