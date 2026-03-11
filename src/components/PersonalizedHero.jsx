import { useContext } from 'react';
import { NicheContext } from '../context/NicheContext';
import { getMetierData, hasMetierData } from '../data/metiers';
import { getActiveSlogan } from '../data/slogans';
import NicheSelector from './NicheSelector';

const PersonalizedHero = () => {
  const { niche } = useContext(NicheContext);

  // Récupérer les données du métier (avec fallback)
  const metierData = getMetierData(niche);
  const heroData = hasMetierData(niche) ? metierData.hero : null;

  // Slogan principal
  const slogan = getActiveSlogan();

  // Contenu par défaut si pas de données métier
  const defaultHero = {
    tag: 'Génération de leads qualifiés',
    title: 'Développez votre activité d\'artisan',
    subtitle: 'Paiement uniquement aux appels qualifiés',
    description: 'Recevez des appels de clients réels prêts à investir dans vos services. Paiement uniquement aux résultats.'
  };

  const hero = heroData || defaultHero;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 px-4 md:px-6 overflow-hidden">
      {/* Blobs background (conservés du design existant) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sélecteur de métier */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <NicheSelector />
        </div>

        {/* Tag */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="tag">{hero.tag}</span>
        </div>

        {/* Titre principal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-[1.05] tracking-tight animate-fade-up">
          {hero.title}
        </h1>

        {/* Subtitle */}
        {hero.subtitle && (
          <p className="text-xl md:text-2xl font-semibold text-violet-600 mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {hero.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => {
              const el = document.getElementById('calculateur');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-primary text-base px-8 py-4 rounded-xl arrow-animate"
          >
            Calculer mon ROI
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-secondary text-base px-8 py-4 rounded-xl"
          >
            Réserver un appel
          </button>
        </div>

        {/* Social proof bar avec slogan */}
        <div className="border-t border-gray-200 pt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm font-bold text-gray-900 mb-4 tracking-wide uppercase">
            {slogan}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Dès les premiers jours de publication
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Paiement par appel qualifié
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedHero;
