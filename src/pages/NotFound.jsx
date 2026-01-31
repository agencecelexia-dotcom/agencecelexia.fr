import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  // Métadonnées SEO pour la page 404
  usePageMeta({
    title: 'Page non trouvée - Agence Celexia',
    description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil pour continuer.',
    canonical: 'https://agencecelexia.fr/404'
  });

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-9xl font-bold text-violet-600/20 mb-4">404</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oups ! Page non trouvée
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold
                       hover:bg-violet-700 transition-colors duration-300 arrow-animate"
          >
            Retour à l'accueil
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <p className="text-gray-400 text-sm">
            Vous pouvez aussi <Link to="/contact" className="text-violet-600 hover:text-violet-700 font-semibold">nous contacter</Link> si vous avez des questions.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Pages disponibles : <br />
            <Link to="/" className="text-violet-600 hover:text-violet-700 text-sm">Accueil</Link>
            {' • '}
            <Link to="/about" className="text-violet-600 hover:text-violet-700 text-sm">À propos</Link>
            {' • '}
            <Link to="/contact" className="text-violet-600 hover:text-violet-700 text-sm">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
