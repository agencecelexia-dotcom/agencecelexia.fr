import { Link } from 'react-router-dom';
import { METIERS } from '../context/NicheContext';

const Footer = () => {
  const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, label: data.label }));

  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Agence Celexia - Apport d'affaires pour artisans"
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                width="197"
                height="32"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Apport d'affaires pour artisans. Nous générons les appels qualifiés,
              vous payez 10 % uniquement sur les devis signés. Sans engagement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Accueil</Link>
              <Link to="/about" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">À propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Contact</Link>
              <Link to="/reserver" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Réserver un appel découverte</Link>
            </div>
          </div>

          {/* Services complémentaires */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Services complémentaires</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services/site-web" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Site web</Link>
              <Link to="/services/seo" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">SEO local</Link>
              <Link to="/services/avis-clients" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Avis clients</Link>
              <Link to="/services/emailing" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Email marketing</Link>
              <Link to="/services/automatisation" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Automatisation</Link>
            </div>
          </div>

          {/* Métiers */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Métiers</h4>
            <div className="flex flex-col gap-2">
              {metiers.map((m) => (
                <Link
                  key={m.slug}
                  to={`/metiers/${m.slug}`}
                  className="text-gray-600 hover:text-violet-600 transition-colors text-sm"
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Légal & Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Légal &amp; Contact</h4>
            <div className="flex flex-col gap-3">
              <Link to="/mentions-legales" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Politique de confidentialité</Link>
              <a href="mailto:agence.celexia@gmail.com" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
                agence.celexia@gmail.com
              </a>
              <a href="tel:+33651725756" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
                06 51 72 57 56
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Agence Celexia. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-600 text-xs">Système actif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
