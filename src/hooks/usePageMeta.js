import { useEffect } from 'react';

/**
 * Hook pour définir les métadonnées de chaque page
 * Utilisé pour le SEO et les partages sociaux
 */
export const usePageMeta = ({ title, description, image = '/logo.png', canonical }) => {
  useEffect(() => {
    // Mise à jour du titre
    document.title = title;

    // Mise à jour de la description meta
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }

    // Mise à jour du canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || 'https://agence-celexia.fr/';

    // Mise à jour Open Graph
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:url', canonical || 'https://agence-celexia.fr/');

    // Mise à jour Twitter Card
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', image);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, image, canonical]);
};

/**
 * Utilitaire pour mettre à jour une meta property (Open Graph, etc)
 */
function updateMetaProperty(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

/**
 * Utilitaire pour mettre à jour une meta name (Twitter, etc)
 */
function updateMetaName(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}
