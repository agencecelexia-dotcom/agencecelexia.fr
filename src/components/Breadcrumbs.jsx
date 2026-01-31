import { Link, useLocation } from 'react-router-dom';
import { useJsonLd } from '../hooks/useJsonLd';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Créer les breadcrumbs
  const breadcrumbs = [
    { name: 'Accueil', path: '/' }
  ];

  // Ajouter les pages enfants basées sur le chemin
  if (pathnames.length > 0) {
    const pageName = pathnames[0];
    const pageNames = {
      'about': 'À propos',
      'contact': 'Contact',
      'sites-artisans': 'Sites Web Artisans',
      'leads-plombier': 'Leads Plombier',
      'leads-electricien': 'Leads Électricien',
      'leads-menuisier': 'Leads Menuisier'
    };
    breadcrumbs.push({
      name: pageNames[pageName] || pageName,
      path: `/${pageName}`
    });
  }

  // Schéma JSON-LD pour les breadcrumbs
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://agencecelexia.fr${crumb.path}`
    }))
  });

  // Ne montrer les breadcrumbs que si on n'est pas à la racine
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gray-50/50 border-b border-gray-200/50 py-3 px-4 md:px-6" aria-label="Breadcrumbs">
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center text-sm gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-600 font-medium">{crumb.name}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
