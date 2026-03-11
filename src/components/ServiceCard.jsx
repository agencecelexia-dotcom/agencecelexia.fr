import { memo } from 'react';
import { getServiceData } from '../data/services';
import { getMetierData } from '../data/metiers';

// Mapping des icônes SVG
const SERVICE_ICONS = {
  phone: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  globe: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  star: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  mail: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  cog: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

const ServiceCard = ({ service, metier, accentColor = '#7C3AED' }) => {
  // Récupérer les données du métier
  const metierData = getMetierData(metier);

  // Fusionner config service + données métier
  const serviceData = getServiceData(service, metierData);

  if (!serviceData) {
    console.warn(`Service ${service} non trouvé`);
    return null;
  }

  const icon = SERVICE_ICONS[serviceData.icon] || SERVICE_ICONS.phone;

  return (
    <div className="card p-6 md:p-8 border-gray-200 group hover:border-violet-200 transition-all duration-300">
      {/* Icône avec couleur accent au hover */}
      <div
        className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5 text-violet-600
                   group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300"
        style={{
          '--hover-bg': accentColor,
          '--hover-text': '#ffffff'
        }}
      >
        <div className="w-6 h-6">{icon}</div>
      </div>

      {/* Titre */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
        {serviceData.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
        {serviceData.description}
      </p>

      {/* Liste de bénéfices */}
      {serviceData.benefits && serviceData.benefits.length > 0 && (
        <ul className="space-y-2.5">
          {serviceData.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 mr-2.5 flex-shrink-0
                             group-hover:bg-violet-600 transition-colors duration-300" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      {/* Animation subtle au hover */}
      <style jsx>{`
        .card {
          transform: translateY(0);
        }
        .card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

// Optimisation performance avec React.memo
// Le composant ne se re-render que si service, metier ou accentColor changent
export default memo(ServiceCard, (prevProps, nextProps) => {
  return (
    prevProps.service === nextProps.service &&
    prevProps.metier === nextProps.metier &&
    prevProps.accentColor === nextProps.accentColor
  );
});
