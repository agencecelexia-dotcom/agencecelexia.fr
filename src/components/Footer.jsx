import { Link } from 'react-router-dom';
import { METIERS } from '../data/metiers';
import { candidatureUrl, CTA_LABEL } from '../lib/links';

export default function Footer() {
  return (
    <footer className="site-footer sur-fonce">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 pb-12 border-b border-white/15">
          <p className="footer-signature">On gagne quand<br /><span className="text-violet-300">vous gagnez.</span></p>
          <Link to={candidatureUrl('footer')} className="inline-flex items-center gap-5 text-sm text-citron-300 font-medium min-h-11 self-start md:self-end">
            {CTA_LABEL}<span className="w-10 h-10 rounded-full border border-citron-300/40 grid place-items-center" aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 py-12">
          <div className="md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block"><img src="/logo-blanc.png" alt="Agence Celexia — accueil" className="h-8 w-auto" width="197" height="32" loading="lazy" /></Link>
            <p className="mt-5 text-xs leading-loose max-w-xs text-violet-200">L’apport d’affaires, côté artisan.<br />Des projets qualifiés, une équipe à vos côtés et la liberté d’exercer votre métier.</p>
          </div>
          <div>
            <h2 className="footer-kicker">Celexia</h2>
            <ul className="space-y-3">
              {[['/about', 'Qui sommes-nous ?'], ['/#methode', 'Notre méthode'], ['/contact', 'Contact'], ['/candidature', 'Votre candidature']].map(([to, text]) => <li key={to}><Link to={to} className="footer-link">{text}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="footer-kicker">Vos métiers</h2>
            <ul className="space-y-3">{Object.entries(METIERS).map(([slug, m]) => <li key={slug}><Link to={`/metiers/${slug}`} className="footer-link">{m.labelCourt}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-kicker">Parlons de votre entreprise</h2>
            <a href="mailto:agence.celexia@gmail.com" className="footer-link break-all">agence.celexia@gmail.com</a>
            <a href="tel:+33651725756" className="block text-white font-display text-xl mt-4 tracking-tight">06 51 72 57 56</a>
            <p className="mt-4 text-xs text-violet-200">France entière</p>
          </div>
        </div>
        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-violet-200">
          <p>© {new Date().getFullYear()} CELEXIA SASU · SIREN 939 306 429</p>
          <div className="flex gap-6"><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link><Link to="/politique-confidentialite" className="hover:text-white">Confidentialité</Link></div>
        </div>
      </div>
    </footer>
  );
}
