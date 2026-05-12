import { createContext, useState, useEffect } from 'react';

// Liste des 19 métiers cibles du modèle apport d'affaires.
// La clé sert de slug d'URL (/metiers/<slug>).
export const METIERS = {
  'amenagement-paysager': { label: 'Aménagement paysager', prix: 15, color: '#16A34A' },
  'bardage': { label: 'Bardage', prix: 18, color: '#78716C' },
  'clotures': { label: 'Clôtures', prix: 10, color: '#A16207' },
  'constructeurs-piscines': { label: 'Constructeurs de piscines', prix: 10, color: '#0EA5E9' },
  'couverture': { label: 'Couverture', prix: 20, color: '#6B7280' },
  'chauffagistes': { label: 'Chauffagistes', prix: 15, color: '#EF4444' },
  'demenagement': { label: 'Déménagement', prix: 12, color: '#F59E0B' },
  'diagnostics-immobiliers': { label: 'Diagnostics immobiliers', prix: 15, color: '#8B5CF6' },
  'entretien-piscine': { label: 'Entretien de piscine', prix: 12, color: '#06B6D4' },
  'fondations': { label: 'Fondations', prix: 22, color: '#52525B' },
  'menuiserie': { label: 'Menuiserie', prix: 18, color: '#92400E' },
  'plomberie': { label: 'Plomberie', prix: 15, color: '#1EA36F' },
  'nettoyage-vitres': { label: 'Nettoyage de vitres', prix: 10, color: '#0891B2' },
  'revetement-sol': { label: 'Revêtement de sol', prix: 15, color: '#A8A29E' },
  'restauration-degat-eaux': { label: 'Restauration après dégât des eaux', prix: 25, color: '#0284C7' },
  'fenetres': { label: 'Fenêtres', prix: 18, color: '#64748B' },
  'plans-de-travail': { label: 'Plans de travail', prix: 18, color: '#374151' },
  'portes-garage': { label: 'Portes de garage', prix: 18, color: '#475569' },
  'arboriculture': { label: 'Arboriculture', prix: 15, color: '#15803D' },
};

// Alias NICHES pour rétrocompatibilité
export const NICHES = METIERS;

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
  const [prixParAppel, setPrixParAppel] = useState(METIERS[initialMetier].prix);

  const handleNicheChange = (newNiche) => {
    if (!METIERS[newNiche]) {
      console.warn(`Métier inconnu: ${newNiche}`);
      return;
    }
    setNiche(newNiche);
    setPrixParAppel(METIERS[newNiche].prix);
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
      prixParAppel,
      handleNicheChange,
      metierColor: getMetierColor(niche),
      metierLabel: getMetierLabel(niche)
    }}>
      {children}
    </NicheContext.Provider>
  );
};
