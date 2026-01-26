import { createContext, useState } from 'react';

// Configuration des prix par niche
export const NICHES = {
  pisciniste: { label: 'Pisciniste', prix: 10 },
  paysagiste: { label: 'Paysagiste', prix: 10 },
  plombier: { label: 'Plombier', prix: 25 },
  chauffagiste: { label: 'Chauffagiste', prix: 25 },
  electricien: { label: 'Électricien', prix: 20 },
  menuisier: { label: 'Menuisier', prix: 20 },
  autre: { label: 'Autre secteur', prix: 15 }
};

export const NicheContext = createContext();

export const NicheProvider = ({ children }) => {
  const [niche, setNiche] = useState('pisciniste');
  const [prixParAppel, setPrixParAppel] = useState(NICHES.pisciniste.prix);

  const handleNicheChange = (newNiche) => {
    setNiche(newNiche);
    setPrixParAppel(NICHES[newNiche].prix);
  };

  return (
    <NicheContext.Provider value={{ niche, prixParAppel, handleNicheChange }}>
      {children}
    </NicheContext.Provider>
  );
};
