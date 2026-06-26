import { createContext, useState, useEffect } from 'react';

// Liste des 19 métiers cibles du modèle apport d'affaires.
// La clé sert de slug d'URL (/metiers/<slug>).
export const METIERS = {
  'amenagement-paysager': { label: 'Aménagement paysager', color: '#16A34A' },
  'bardage': { label: 'Bardage', color: '#78716C' },
  'clotures': { label: 'Clôtures', color: '#A16207' },
  'constructeurs-piscines': { label: 'Constructeurs de piscines', color: '#0EA5E9' },
  'couverture': { label: 'Couverture', color: '#6B7280' },
  'chauffagistes': { label: 'Chauffagistes', color: '#EF4444' },
  'demenagement': { label: 'Déménagement', color: '#F59E0B' },
  'diagnostics-immobiliers': { label: 'Diagnostics immobiliers', color: '#8B5CF6' },
  'entretien-piscine': { label: 'Entretien de piscine', color: '#06B6D4' },
  'fondations': { label: 'Fondations', color: '#52525B' },
  'menuiserie': { label: 'Menuiserie', color: '#92400E' },
  'plomberie': { label: 'Plomberie', color: '#1EA36F' },
  'nettoyage-vitres': { label: 'Nettoyage de vitres', color: '#0891B2' },
  'revetement-sol': { label: 'Revêtement de sol', color: '#A8A29E' },
  'restauration-degat-eaux': { label: 'Restauration après dégât des eaux', color: '#0284C7' },
  'fenetres': { label: 'Fenêtres', color: '#64748B' },
  'plans-de-travail': { label: 'Plans de travail', color: '#374151' },
  'portes-garage': { label: 'Portes de garage', color: '#475569' },
  'arboriculture': { label: 'Arboriculture', color: '#15803D' },
};

export const getMetierColor = (metier) => METIERS[metier]?.color || '#7C3AED';
export const getMetierLabel = (metier) => METIERS[metier]?.label || 'Artisan';

const DEFAULT_METIER = 'plomberie';

export const NicheContext = createContext();

export const NicheProvider = ({ children }) => {
  const getInitialMetier = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlMetier = urlParams.get('metier');
    if (urlMetier && METIERS[urlMetier]) return urlMetier;

    const storedMetier = localStorage.getItem('selectedMetier');
    if (storedMetier && METIERS[storedMetier]) return storedMetier;

    return DEFAULT_METIER;
  };

  const initialMetier = getInitialMetier();
  const [niche, setNiche] = useState(initialMetier);

  const handleNicheChange = (newNiche) => {
    if (!METIERS[newNiche]) {
      console.warn(`Métier inconnu: ${newNiche}`);
      return;
    }
    setNiche(newNiche);
    localStorage.setItem('selectedMetier', newNiche);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlMetier = urlParams.get('metier');
    if (urlMetier && METIERS[urlMetier] && urlMetier !== niche) {
      handleNicheChange(urlMetier);
    }
  }, []);

  return (
    <NicheContext.Provider value={{
      niche,
      handleNicheChange,
      metierColor: getMetierColor(niche),
      metierLabel: getMetierLabel(niche)
    }}>
      {children}
    </NicheContext.Provider>
  );
};
