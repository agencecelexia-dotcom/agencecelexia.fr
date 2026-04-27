import { createContext, useState, useEffect } from 'react';

// Configuration complète des 12 métiers avec prix et couleurs accent
export const METIERS = {
  pisciniste: { label: 'Pisciniste', prix: 10, color: '#1E88E5' },
  paysagiste: { label: 'Paysagiste', prix: 10, color: '#4CAF50' },
  plombier: { label: 'Plombier', prix: 25, color: '#1EA36F' },
  chauffagiste: { label: 'Chauffagiste', prix: 15, color: '#E05024' },
  electricien: { label: 'Électricien', prix: 20, color: '#F4C20D' },
  menuisier: { label: 'Menuisier', prix: 20, color: '#BF6C2E' },
  couvreur: { label: 'Couvreur', prix: 20, color: '#6D4C41' },
  macon: { label: 'Maçon', prix: 18, color: '#9E9E9E' },
  carreleur: { label: 'Carreleur', prix: 18, color: '#795548' },
  peintre: { label: 'Peintre', prix: 15, color: '#E91E63' },
  serrurier: { label: 'Serrurier', prix: 22, color: '#607D8B' },
  vitrier: { label: 'Vitrier', prix: 22, color: '#00BCD4' }
};

// Alias NICHES pour rétrocompatibilité
export const NICHES = METIERS;

// Fonction utilitaire pour récupérer la couleur accent d'un métier
export const getMetierColor = (metier) => {
  return METIERS[metier]?.color || '#7C3AED'; // Fallback sur violet principal
};

// Fonction utilitaire pour récupérer le label d'un métier
export const getMetierLabel = (metier) => {
  return METIERS[metier]?.label || 'Artisan';
};

export const NicheContext = createContext();

export const NicheProvider = ({ children }) => {
  // Récupérer le métier depuis localStorage ou URL params au chargement
  const getInitialMetier = () => {
    // 1. Vérifier URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlMetier = urlParams.get('metier');
    if (urlMetier && METIERS[urlMetier]) {
      return urlMetier;
    }

    // 2. Vérifier localStorage
    const storedMetier = localStorage.getItem('selectedMetier');
    if (storedMetier && METIERS[storedMetier]) {
      return storedMetier;
    }

    // 3. Défaut: pisciniste
    return 'pisciniste';
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

    // Sauvegarder dans localStorage pour persistance
    localStorage.setItem('selectedMetier', newNiche);
  };

  // Synchroniser avec URL params au chargement
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
