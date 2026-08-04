import { useRef, useState, useEffect } from 'react';

/**
 * Apparition au défilement, sans dépendance.
 *
 * L'état masqué n'est appliqué que si la classe `js` est présente sur <html>
 * (posée par un script en tête de index.html). Conséquence : dans le HTML
 * pré-rendu servi sans JavaScript, le contenu reste pleinement visible au lieu
 * de rester à opacité 0 — ce qui importe pour les moteurs et pour les visiteurs
 * dont le script n'a pas chargé.
 *
 * Respecte `prefers-reduced-motion` en affichant immédiatement.
 */
const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduit =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduit) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''}${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
