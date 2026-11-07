import { Link } from 'react-router-dom';
import { SEO_PAGES } from '../data/seoPages';

export default function ResourceCards({ paths = Object.values(SEO_PAGES).map(page => page.path) }) {
  const pages = paths.map(path => Object.values(SEO_PAGES).find(page => page.path === path)).filter(Boolean);
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {pages.map(page => (
        <Link key={page.path} to={page.path} className="card group flex flex-col p-6 sm:p-8">
          <p className="section-kicker">{page.eyebrow}</p>
          <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight group-hover:text-violet-700">{page.breadcrumbLabel}</h3>
          <p className="mt-4 text-sm text-encre-600 leading-relaxed">{page.description}</p>
          <span className="mt-auto pt-6 text-sm font-semibold text-violet-700">Lire la suite <span className="ml-2" aria-hidden="true">↗</span></span>
        </Link>
      ))}
    </div>
  );
}
