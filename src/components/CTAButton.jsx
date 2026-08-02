import { Link } from 'react-router-dom';

const ArrowRight = ({ className = '' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * Bouton unique du site. À réutiliser partout plutôt que de recréer un bouton.
 *
 * - `href` → lien externe (l'inscription), ouvert dans un nouvel onglet
 * - `to`   → navigation interne
 * - sinon  → <button> avec onClick
 */
const CTAButton = ({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  withArrow = true,
  full = false,
}) => {
  const classes = [
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    full ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CTAButton;
