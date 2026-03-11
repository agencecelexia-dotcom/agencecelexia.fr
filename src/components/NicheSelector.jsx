import { useState, useContext, useRef, useEffect } from 'react';
import { NicheContext, METIERS } from '../context/NicheContext';

const NicheSelector = ({ className = '' }) => {
  const { niche, handleNicheChange, metierLabel } = useContext(NicheContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filtrer les métiers selon la recherche
  const filteredMetiers = Object.entries(METIERS).filter(([key, metier]) =>
    metier.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (metierKey) => {
    handleNicheChange(metierKey);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Bouton de sélection */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto px-5 py-3 bg-white border-2 border-gray-200 rounded-xl
                   hover:border-violet-300 focus:border-violet-500 focus:outline-none
                   transition-all duration-300 flex items-center justify-between gap-3
                   text-gray-900 font-medium group min-w-[240px]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2.5">
          {/* Icône métier (point coloré) */}
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: METIERS[niche].color }}
          />
          <span className="truncate">{metierLabel}</span>
        </span>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0
                     ${isOpen ? 'rotate-180' : ''} group-hover:text-violet-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute z-50 mt-2 w-full md:w-80 bg-white rounded-xl shadow-xl
                     border border-gray-100 overflow-hidden animate-fade-in"
          role="listbox"
        >
          {/* Barre de recherche */}
          <div className="p-3 border-b border-gray-100">
            <input
              type="text"
              placeholder="Rechercher un métier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                       focus:border-violet-500 focus:outline-none transition-colors"
              autoFocus
            />
          </div>

          {/* Liste des métiers */}
          <div className="max-h-80 overflow-y-auto py-1">
            {filteredMetiers.length > 0 ? (
              filteredMetiers.map(([key, metier]) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50
                             transition-colors text-left group
                             ${niche === key ? 'bg-violet-50' : ''}`}
                  role="option"
                  aria-selected={niche === key}
                  style={{
                    '--metier-color': metier.color
                  }}
                >
                  {/* Point coloré avec hover effect */}
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-transform
                               group-hover:scale-125"
                    style={{ backgroundColor: metier.color }}
                  />

                  {/* Label métier */}
                  <span className={`flex-1 text-sm font-medium transition-colors
                                   ${niche === key ? 'text-violet-700' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {metier.label}
                  </span>

                  {/* Checkmark si sélectionné */}
                  {niche === key && (
                    <svg className="w-5 h-5 text-violet-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-sm text-gray-400">
                Aucun métier trouvé
              </div>
            )}
          </div>

          {/* Footer avec nombre de métiers */}
          <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-600 text-center">
              {filteredMetiers.length} {filteredMetiers.length > 1 ? 'métiers disponibles' : 'métier disponible'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NicheSelector;
