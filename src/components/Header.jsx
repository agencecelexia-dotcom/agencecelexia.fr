import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { METIERS } from '../data/metiers';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import CTAButton from './CTAButton';

const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, ...data }));
const navClass = ({ isActive }) => `btn-ghost ${isActive ? 'text-violet-600 bg-violet-50' : ''}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMetiersOpen, setIsMetiersOpen] = useState(false);
  const metiersRef = useRef(null);
  const metiersButtonRef = useRef(null);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const closeDropdown = e => {
      if (e.key === 'Escape' && metiersRef.current?.contains(document.activeElement)) metiersButtonRef.current?.focus();
      if (!metiersRef.current?.contains(e.target) || e.key === 'Escape') setIsMetiersOpen(false);
    };
    document.addEventListener('click', closeDropdown);
    document.addEventListener('keydown', closeDropdown);
    return () => { document.removeEventListener('click', closeDropdown); document.removeEventListener('keydown', closeDropdown); };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) { menuRef.current?.close(); return; }
    menuRef.current?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = oldOverflow; };
  }, [isMenuOpen]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = e => { if (e.matches) setIsMenuOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  const closeMenu = () => { setIsMenuOpen(false); setIsMetiersOpen(false); };
  return (
    <>
      <header className="site-header">
        <nav className="container-custom header-inner" aria-label="Navigation principale">
          <Link to="/" onClick={closeMenu} className="header-brand"><img src="/logo.png" alt="Agence Celexia — accueil" className="h-7 md:h-8 w-auto" width="197" height="32" /></Link>
          <div className="hidden xl:flex items-center gap-1">
            <NavLink to="/about" className={navClass}>Qui sommes-nous ?</NavLink>
            <Link to="/#methode" className="btn-ghost">Notre méthode</Link>
            <div className="relative" ref={metiersRef}>
              <button ref={metiersButtonRef} type="button" onClick={() => setIsMetiersOpen(!isMetiersOpen)} className="btn-ghost gap-2" aria-expanded={isMetiersOpen} aria-controls="metiers-menu">Les métiers <span aria-hidden="true" className="text-xs">⌄</span></button>
              {isMetiersOpen && <div id="metiers-menu" className="absolute top-full left-0 mt-3 w-72 bg-white border border-brume-200 p-2 rounded-xl shadow-lift">{metiers.map(m => <Link key={m.slug} to={`/metiers/${m.slug}`} onClick={closeMenu} className="block px-4 py-3 rounded-lg text-sm hover:bg-brume-100">{m.label}</Link>)}</div>}
            </div>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>
          <div className="hidden xl:block"><CTAButton to={candidatureUrl('header')} className="!px-5 !py-3.5 !text-sm">{CTA_LABEL}</CTAButton></div>
          <button type="button" onClick={() => setIsMenuOpen(true)} className="mobile-menu-button" aria-label="Ouvrir le menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu"><span className="w-5 h-px bg-encre-900" /><span className="w-5 h-px bg-encre-900" /></button>
        </nav>
      </header>
      <dialog id="mobile-menu" ref={menuRef} onCancel={closeMenu} onClose={closeMenu} className="m-0 max-w-none max-h-none w-full h-dvh bg-brume-50 p-0 text-encre-900" aria-label="Navigation principale">
        <div className="flex flex-col min-h-full p-5">
          <div className="flex justify-between items-center pb-6 border-b border-brume-200"><Link to="/" onClick={closeMenu}><img src="/logo.png" alt="Agence Celexia — accueil" width="172" height="28" /></Link><button autoFocus type="button" onClick={closeMenu} aria-label="Fermer le menu" className="w-11 h-11 rounded-lg border border-brume-200 text-2xl">×</button></div>
          <nav className="flex flex-col py-6" aria-label="Navigation mobile">
            {[['/about', 'Qui sommes-nous ?'], ['/#methode', 'Notre méthode'], ['/contact', 'Contact']].map(([to, label]) => <Link key={to} to={to} onClick={closeMenu} className={`py-3 text-xl font-semibold ${pathname === to ? 'text-violet-600' : ''}`}>{label}</Link>)}
            <p className="section-kicker mt-7 mb-3">Les métiers</p>
            {metiers.map(m => <Link key={m.slug} to={`/metiers/${m.slug}`} onClick={closeMenu} className="py-3 text-encre-600 border-b border-brume-200">{m.label}</Link>)}
          </nav>
          <div className="mt-auto py-4"><CTAButton to={candidatureUrl('menu-mobile')} onClick={closeMenu} full>{CTA_LABEL}</CTAButton><p className="mt-3 text-xs text-center text-encre-600">Une candidature étudiée par notre équipe.</p></div>
        </div>
      </dialog>
    </>
  );
}
