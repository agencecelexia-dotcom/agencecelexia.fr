import { Link } from 'react-router-dom';
import { METIERS } from '../context/NicheContext';
import { REGISTER_URL } from '../lib/links';

const Footer = () => {
  const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, label: data.label }));

  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
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
              Apporteur d'affaires pour artisans du bâtiment. On finance la publicité,
              on qualifie les clients, on vous envoie des chantiers. Vous ne payez 10 %
              que sur les devis signés. Sans avance, sans engagement.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              Devenir partenaire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Accueil</Link>
              <Link to="/about" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">À propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Contact</Link>
              <Link to="/reserver" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Réserver un appel</Link>
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
            &copy; {new Date().getFullYear()} CELEXIA SASU · SIREN 939 306 429 · Nogent-sur-Marne. Tous droits réservés.
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
