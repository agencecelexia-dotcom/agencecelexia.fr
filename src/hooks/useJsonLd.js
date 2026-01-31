import { useEffect } from 'react';

/**
 * Hook pour ajouter des schémas JSON-LD
 * Aide Google à comprendre le contenu de la page
 */
export const useJsonLd = (schema) => {
  useEffect(() => {
    if (!schema) return;

    // Créer un script avec le schéma JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup : supprimer le script quand le composant se démonte
    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
};
