import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-primary-purple mb-4">
              Local Service Ads
            </h3>
            <p className="text-gray-300">
              La seule publicité qui vous fait payer à la conversion.
              Pas au clic. À l'appel qualifié.
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/comment-ca-marche" className="text-gray-300 hover:text-primary-purple transition-colors">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-les-lsa" className="text-gray-300 hover:text-primary-purple transition-colors">
                  Pourquoi les LSA
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-300 hover:text-primary-purple transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-purple transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 contact@localserviceads.fr</li>
              <li>📞 +33 X XX XX XX XX</li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Local Service Ads. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-primary-purple text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgv" className="text-gray-400 hover:text-primary-purple text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
