import { Link, useLocation } from 'react-router-dom';
import { METIERS } from '../data/metiers';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const metierLabels = Object.fromEntries(
    Object.entries(METIERS).map(([slug, data]) => [slug, data.label])
  );

  const pageNames = {
    about: 'À propos',
    contact: 'Contact',
    'mentions-legales': 'Mentions légales',
    'politique-confidentialite': 'Politique de confidentialité',
    metiers: 'Métiers',
    ...metierLabels,
  };

  const breadcrumbs = [{ name: 'Accueil', path: '/' }];

  // `/metiers` n'est pas une page : le segment s'affiche mais ne se clique pas.
  const nonClickableSegments = ['metiers'];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      path: currentPath,
      clickable: !nonClickableSegments.includes(segment) || pathnames.length === 1,
    });
  });

  // Le JSON-LD BreadcrumbList est émis par scripts/prerender-meta.mjs, directement
  // dans le HTML statique. L'émettre aussi au runtime créerait un doublon dans le
  // <head> après hydratation. Source unique : le script de pré-rendu.

  if (location.pathname === '/') return null;

  return (
    <nav className="border-b border-acier-200 bg-white py-3 px-5 md:px-8" aria-label="Fil d'Ariane">
      <div className="max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-acier-400" aria-hidden="true">
                  /
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-ardoise-800 font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : crumb.clickable !== false ? (
                <Link
                  to={crumb.path}
                  className="text-acier-600 hover:text-cuivre-600 underline-offset-2 hover:underline transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-acier-600">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
