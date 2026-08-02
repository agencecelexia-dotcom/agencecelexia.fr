import { Link } from 'react-router-dom';
import { METIERS } from '../data/metiers';
import { registerUrl, CTA_LABEL } from '../lib/links';

const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, label: data.label }));

const linkClass = 'text-acier-600 hover:text-cuivre-600 underline-offset-2 hover:underline transition-colors text-sm';

const Footer = () => (
  <footer className="bg-chaux-100 border-t border-cuivre-200">
    <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-8">
      <div className="grid gap-10 md:grid-cols-5 mb-12">
        {/* Marque */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <img
              src="/logo.png"
              alt="Agence Celexia — accueil"
              className="h-8 w-auto"
              width="197"
              height="32"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-ardoise-700 leading-relaxed max-w-sm">
            Apporteur d’affaires pour les artisans du bâtiment. Nous trouvons et finançons
            les demandes de chantiers, nous les qualifions, et nous les transmettons à un
            seul artisan. Vous reversez 10 % sur les devis signés.
          </p>
          <a
            href={registerUrl('footer')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-cuivre-600 hover:text-cuivre-700 transition-colors"
          >
            {CTA_LABEL}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="section-kicker mb-5">Navigation</h2>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className={linkClass}>Accueil</Link></li>
            <li><Link to="/about" className={linkClass}>À propos</Link></li>
            <li><Link to="/contact" className={linkClass}>Contact</Link></li>
          </ul>
        </div>

        {/* Métiers */}
        <div>
          <h2 className="section-kicker mb-5">Métiers</h2>
          <ul className="flex flex-col gap-3">
            {metiers.map((m) => (
              <li key={m.slug}>
                <Link to={`/metiers/${m.slug}`} className={linkClass}>
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Légal & contact */}
        <div>
          <h2 className="section-kicker mb-5">Légal &amp; contact</h2>
          <ul className="flex flex-col gap-3">
            <li><Link to="/mentions-legales" className={linkClass}>Mentions légales</Link></li>
            <li><Link to="/politique-confidentialite" className={linkClass}>Confidentialité</Link></li>
            <li>
              <a href="mailto:agence.celexia@gmail.com" className={linkClass}>
                agence.celexia@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+33651725756" className={linkClass}>06 51 72 57 56</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-chaux-300">
        <p className="text-xs text-acier-600">
          &copy; {new Date().getFullYear()} CELEXIA SASU &middot; SIREN 939 306 429 &middot;
          Nogent-sur-Marne, France
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
