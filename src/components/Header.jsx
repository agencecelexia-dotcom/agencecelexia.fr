const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Agence Celexia" className="h-8 md:h-12" />
          </a>

          {/* Navigation Simple */}
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="#calculateur"
              className="hidden md:block text-dark-gray hover:text-primary-purple transition-colors font-semibold"
            >
              Calculateur
            </a>
            <a
              href="#contact"
              className="bg-primary-purple text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm md:text-base"
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
