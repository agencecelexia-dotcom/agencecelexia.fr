import { useRef, useEffect } from 'react';

/**
 * Apparition au défilement, sans dépendance.
 *
 * Le HTML reste visible par défaut, même si le bundle ne charge pas. Seuls les
 * blocs sous la fenêtre sont préparés pour l’animation, après la mise en place
 * de leur observateur. Le contenu déjà à l’écran n’est jamais masqué au montage.
 *
 * Respecte `prefers-reduced-motion` en affichant immédiatement.
 */
const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    if (motion?.matches || typeof window.IntersectionObserver !== 'function') return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let observer;
    let disposed = false;
    const reveal = () => {
      if (disposed) return;
      el.classList.remove('reveal-pending');
      observer?.disconnect();
    };
    const onMotionChange = (event) => { if (event.matches) reveal(); };

    try {
      observer = new window.IntersectionObserver(
        (entries) => {
          if (entries.some(entry => entry.isIntersecting)) reveal();
        },
        // Le premier croisement suffit, y compris pour un bloc plus haut que l’écran.
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      );
      observer.observe(el);
      el.classList.add('reveal-pending');
      motion?.addEventListener?.('change', onMotionChange);
    } catch {
      // Un observateur indisponible ou défaillant ne doit pas cacher le contenu.
      reveal();
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      el.classList.remove('reveal-pending');
      motion?.removeEventListener?.('change', onMotionChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
