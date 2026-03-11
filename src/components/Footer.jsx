import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Agence Celexia - Marketing Digital pour Artisans"
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                width="197"
                height="32"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Votre partenaire pour la génération de leads qualifiés.
              Acquisition client optimisée pour artisans.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Accueil</Link>
              <Link to="/about" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">A Propos</Link>
              <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Contact</Link>
              <Link to="/reserver" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Réserver un audit</Link>
            </div>
          </div>

          {/* Nos Services */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Nos Services</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services/publicite-performance" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Publicité Performance</Link>
              <Link to="/services/site-web" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Sites Web</Link>
              <Link to="/services/seo" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">SEO</Link>
              <Link to="/services/avis-clients" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Avis Clients</Link>
              <Link to="/services/emailing" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Email Marketing</Link>
              <Link to="/services/automatisation" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Automatisation</Link>
            </div>
          </div>

          {/* Métiers */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Métiers</h4>
            <div className="flex flex-col gap-2">
              <Link to="/metiers/plombier" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Plombier</Link>
              <Link to="/metiers/electricien" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Électricien</Link>
              <Link to="/metiers/chauffagiste" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Chauffagiste</Link>
              <Link to="/metiers/couvreur" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Couvreur</Link>
              <Link to="/metiers/menuisier" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Menuisier</Link>
              <Link to="/metiers/paysagiste" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Paysagiste</Link>
            </div>
          </div>

          {/* Légal & Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Légal</h4>
            <div className="flex flex-col gap-3">
              <Link to="/mentions-legales" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Mentions Légales</Link>
              <Link to="/politique-confidentialite" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">Politique de Confidentialité</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
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
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="text-gray-500 hover:text-violet-600 transition-colors text-xs">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="text-gray-500 hover:text-violet-600 transition-colors text-xs">Politique de confidentialité</Link>
          </div>
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
