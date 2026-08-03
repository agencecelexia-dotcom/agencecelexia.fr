import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { METIERS } from '../data/metiers';

const NotFound = () => {
  usePageMeta({
    title: 'Page introuvable | Agence Celexia',
    description: 'Cette page n’existe pas ou a été déplacée.',
    canonical: '',
  });

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <section className="section">
      <div className="max-w-2xl mx-auto">
        <p className="section-num">Erreur 404</p>
        <h1 className="mt-5 font-display font-medium text-encre-900 text-display-sm md:text-display-md">
          Cette page n’existe pas.
        </h1>
        <p className="mt-6 text-lg text-encre-700 leading-relaxed">
          L’adresse est peut-être erronée, ou la page a été retirée lors de la refonte du site.
        </p>
        <hr className="rule-violet my-10" />

        <p className="section-kicker mb-5">Où aller</p>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="text-violet-600 underline underline-offset-2 hover:text-violet-700">
              Comment fonctionne Celexia
            </Link>
          </li>
          {Object.entries(METIERS).map(([slug, data]) => (
            <li key={slug}>
              <Link
                to={`/metiers/${slug}`}
                className="text-violet-600 underline underline-offset-2 hover:text-violet-700"
              >
                {data.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="text-violet-600 underline underline-offset-2 hover:text-violet-700">
              Nous contacter
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NotFound;
