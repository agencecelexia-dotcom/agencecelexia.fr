import { useEffect } from 'react';

/**
 * Hook pour définir les métadonnées de chaque page
 * Utilisé pour le SEO et les partages sociaux
 */
export const usePageMeta = ({
  title,
  description,
  image = 'https://agencecelexia.fr/og-image.png',
  canonical,
  type = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}) => {
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
    if (canonical === null) {
      canonicalLink?.remove();
    } else if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    if (canonical !== null) canonicalLink.href = canonical || 'https://agencecelexia.fr/';

    // Une navigation depuis une page 404 rétablit l’indexabilité de la page
    // suivante au lieu de conserver une directive noindex dans le document.
    updateMetaName('robots', robots);

    // Mise à jour Open Graph
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:type', type);
    updateMetaProperty('og:url', canonical === null ? null : canonical || 'https://agencecelexia.fr/');

    // Mise à jour Twitter Card
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', image);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, image, canonical, type, robots]);
};

/**
 * Utilitaire pour mettre à jour une meta property (Open Graph, etc)
 */
function updateMetaProperty(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (content === null) {
    meta?.remove();
    return;
  }
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
