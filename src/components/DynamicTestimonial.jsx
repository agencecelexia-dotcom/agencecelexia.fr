import { memo } from 'react';
import { getMetierData, hasMetierData } from '../data/metiers';

const DynamicTestimonial = ({ metier }) => {
  // Récupérer les données du métier
  const metierData = getMetierData(metier);

  // Si pas de données pour ce métier, ne rien afficher
  if (!hasMetierData(metier) || !metierData.testimonial) {
    return null;
  }

  const testimonial = metierData.testimonial;

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-block">Témoignage Client</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Ils ont fait confiance à Celexia
          </h2>
        </div>

        <div className="card p-8 md:p-10 border-gray-200 animate-fade-up">
          {/* Citation */}
          <div className="mb-8">
            <svg className="w-10 h-10 text-violet-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
              "{testimonial.text}"
            </p>
          </div>

          {/* Résultats */}
          <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold text-green-700">{testimonial.results}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-sm font-semibold text-violet-700">{testimonial.metric}</span>
            </div>
          </div>

          {/* Auteur */}
          <div className="flex items-center gap-4">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-violet-600
                          flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {testimonial.name.charAt(0)}
            </div>

            {/* Infos */}
            <div>
              <p className="font-bold text-gray-900 text-base">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>

          {/* Badge vérifié */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Client vérifié Agence Celexia</span>
            </div>
          </div>
        </div>

        {/* CTA en dessous du témoignage */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">
            Vous aussi, développez votre activité avec Celexia
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-primary arrow-animate"
          >
            Réserver mon audit gratuit
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Optimisation performance avec React.memo
export default memo(DynamicTestimonial, (prevProps, nextProps) => {
  return prevProps.metier === nextProps.metier;
});
