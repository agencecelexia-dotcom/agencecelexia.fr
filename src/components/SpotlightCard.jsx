import { useRef } from 'react';

/**
 * Halo qui suit le curseur sur une carte.
 *
 * Origine : composant `SpotlightCard` de la registry @react-bits, déclarée dans
 * [components.json] et installable par `npx shadcn add @react-bits/<nom>-JS-TW`.
 * Quatre écarts assumés avec la version d'origine :
 *
 *  1. Aucune couleur ni arrondi imposés. L'original arrive habillé en
 *     `rounded-3xl border-neutral-800 bg-neutral-900 p-8` ; ici l'habillage vient
 *     entièrement de `className`, donc des tokens du site (`.card`, `.card-fonce`).
 *  2. Le halo est posé **sous** le texte (`isolate` + `-z-10`) au lieu d'être une
 *     surcouche : sur fond blanc, une surcouche violette teinterait le texte.
 *  3. La position du halo s'écrit dans le style de l'élément via une ref. La
 *     version d'origine passe par un `setState` à chaque `mousemove`, ce qui
 *     re-rendait la carte des dizaines de fois par seconde.
 *  4. `as` permet de rendre autre chose qu'un `<div>` — un `<Link>` pour les
 *     cartes métiers, qui restent ainsi un vrai lien dans le HTML pré-rendu.
 *
 * L'effet est décoratif : il n'apparaît qu'au survol ou au focus clavier, et le
 * fondu est neutralisé par la règle `prefers-reduced-motion` globale de index.css.
 */
const SpotlightCard = ({
  as = 'div',
  children,
  className = '',
  // violet-500 (#8C52FF), la couleur de marque, en voile très dilué.
  spotlightColor = 'rgba(140, 82, 255, 0.14)',
  ...rest
}) => {
  // Variable locale plutôt que renommage dans la signature : ESLint ne voit pas
  // l'usage en JSX et signalerait un paramètre inutilisé.
  const Composant = as;
  const haloRef = useRef(null);

  const placerHalo = (x, y) => {
    const halo = haloRef.current;
    if (!halo) return;
    halo.style.setProperty('--halo-x', x);
    halo.style.setProperty('--halo-y', y);
  };

  const suivreCurseur = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    placerHalo(`${e.clientX - rect.left}px`, `${e.clientY - rect.top}px`);
  };

  const afficher = (visible) => () => {
    // Au focus clavier il n'y a pas de curseur : le halo se centre.
    if (visible) placerHalo('50%', '50%');
    if (haloRef.current) haloRef.current.style.opacity = visible ? 1 : 0;
  };

  return (
    <Composant
      onMouseMove={suivreCurseur}
      onMouseEnter={afficher(true)}
      onMouseLeave={afficher(false)}
      onFocus={afficher(true)}
      onBlur={afficher(false)}
      className={`relative isolate overflow-hidden ${className}`}
      {...rest}
    >
      <span
        ref={haloRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background: `radial-gradient(circle at var(--halo-x, 50%) var(--halo-y, 50%), ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </Composant>
  );
};

export default SpotlightCard;
