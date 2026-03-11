import { Link, useLocation } from 'react-router-dom';
import { useJsonLd } from '../hooks/useJsonLd';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const pageNames = {
    'about': 'À propos',
    'contact': 'Contact',
    'sites-artisans': 'Sites Web Artisans',
    'reserver': 'Réserver',
    'mentions-legales': 'Mentions légales',
    'politique-confidentialite': 'Politique de confidentialité',
    'services': 'Services',
    'metiers': 'Métiers',
    'publicite-performance': 'Publicité à la Performance',
    'site-web': 'Création de Site Web',
    'seo': 'Référencement SEO',
    'avis-clients': 'Avis Clients',
    'emailing': 'Email Marketing',
    'automatisation': 'Automatisation',
    'pisciniste': 'Pisciniste',
    'paysagiste': 'Paysagiste',
    'plombier': 'Plombier',
    'chauffagiste': 'Chauffagiste',
    'electricien': 'Électricien',
    'menuisier': 'Menuisier',
    'couvreur': 'Couvreur',
    'macon': 'Maçon',
    'carreleur': 'Carreleur',
    'peintre': 'Peintre',
    'serrurier': 'Serrurier',
    'vitrier': 'Vitrier'
  };

  const breadcrumbs = [{ name: 'Accueil', path: '/' }];

  const nonClickableSegments = ['services', 'metiers'];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      path: currentPath,
      clickable: !nonClickableSegments.includes(segment) || pathnames.length === 1
    });
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs
      .filter(crumb => crumb.clickable !== false || crumb.path === '/' || breadcrumbs.indexOf(crumb) === breadcrumbs.length - 1)
      .map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': `https://agencecelexia.fr${crumb.path}`
      }))
  });

  if (location.pathname === '/') return null;

  return (
    <nav className="bg-gray-50/50 border-b border-gray-200/50 py-3 px-4 md:px-6" aria-label="Fil d'Ariane">
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center text-sm gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-600 font-medium">{crumb.name}</span>
              ) : crumb.clickable !== false ? (
                <Link to={crumb.path} className="text-violet-600 hover:text-violet-700 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gray-500">{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
