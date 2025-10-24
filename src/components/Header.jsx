const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-primary-purple">
            LSA Calculator
          </a>

          {/* Navigation Simple */}
          <div className="flex items-center gap-6">
            <a
              href="#calculateur"
              className="hidden md:block text-dark-gray hover:text-primary-purple transition-colors font-semibold"
            >
              Calculateur
            </a>
            <a
              href="#contact"
              className="bg-primary-purple text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
            >
              Réserver un appel
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
