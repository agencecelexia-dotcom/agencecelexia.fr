---
name: celexia-ui
description: >
  Design system d'agencecelexia.fr et méthode pour créer des sections, des
  composants ou des pages cohérents avec la direction visuelle Celexia.
  À charger avant une refonte visuelle, un changement de typographie,
  un nouveau bloc Tailwind, une animation ou une interface de formulaire.
---

# Design system Celexia

## Stack et portée

React 19, Vite 7, React Router 7 et Tailwind CSS 3.4. Les composants sont du JSX.
Conserver cette architecture, le découpage vendor et le pré-rendu des pages.
Préférer les composants et utilitaires déjà présents aux dépendances UI externes.

La direction visuelle du **7 novembre 2026** associe un papier lavande,
des volumes arrondis, le violet de la marque et des touches citron. L’ensemble
doit rester sobre, lisible et cohérent sur l’accueil, les pages métiers, les
pages de présentation et la candidature.

## Tokens et surfaces

Les valeurs de référence se trouvent dans `tailwind.config.js` et `src/index.css`.
Réutiliser les tokens avant d’introduire une nouvelle couleur ou une nouvelle taille.

- **Papier lavande** : `brume.50` pour le fond principal, `brume.100` pour les
  surfaces secondaires, `brume.200/300` pour les bordures et filets.
  `.surface-paper` ajoute une trame ponctuée légère ; ne pas la dupliquer à la main.
- **Texte** : `encre.600` pour le texte secondaire, `encre.800/900` pour le texte
  principal. Le contraste doit être vérifié sur la surface réelle.
- **Violet** : `violet.600/700` pour les liens et boutons sur fond clair,
  `violet.900/950` pour les sections profondes. `violet.500` reste la couleur
  du logo ; ne pas l’utiliser automatiquement pour les petits textes.
- **Citron** : `citron.100/300` pour les accents et surfaces discrètes,
  `citron.800` pour du texte sur fond citron. Les boutons sur fond profond
  associent `citron.300` et `violet.950`.
- **Sections profondes** : utiliser `.bande` avec `.sur-fonce`, qui adapte
  boutons, filets, libellés et focus. Éviter les longues successions de blocs
  sombres et alterner les compositions selon le contenu.
- **Surfaces** : `.card`, `.card-brume` et `.card-fonce`, angles largement
  arrondis, bordures fines et ombres contenues. Le motif d’arche de l’accueil
  est une signature graphique ; ne pas ajouter des décorations sans fonction.
- **Ombres** : `shadow-soft`, `shadow-card`, `shadow-lift`. La profondeur reste
  secondaire par rapport aux fonds, espacements et filets.

## Typographies et hiérarchie

Deux familles variables **hébergées localement**, en WOFF2 latin et latin-ext,
avec licences OFL dans `public/fonts/` :

- **Space Grotesk**, poids 400–700 : `font-display`, titres et signatures.
- **Manrope**, poids 400–700 : `font-sans`, paragraphes, champs et navigation.
- `font-mono` utilise la pile système pour les petits numéros de section.

Les déclarations `@font-face` sont dans `src/index.css`, avec `font-display: swap`.
Ne pas charger ces polices depuis une origine tierce. Ne pas étirer les lettres :
les anciennes classes `.font-expanded` et `.font-narrow` ne servent qu’à la
compatibilité et appliquent une chasse normale. Ne pas utiliser de graisse
synthétique 800 ou 900 sur ces familles.

Réutiliser les niveaux communs plutôt que d’ajuster chaque page séparément :

- `.hero-title` / `.page-title` : titre principal, Space Grotesk 500, taille
  fluide de 2,75 à 5 rem, interligne proche de 1,04, approche resserrée.
- `.section-title` : titre de section, Space Grotesk 500, taille fluide de
  2,15 à 3,5 rem, interligne proche de 1,08.
- Sous-titres : `font-display font-medium` ou `font-semibold`, échelle adaptée
  au bloc sans concurrencer le titre de section.
- `.section-kicker`, `.section-num`, `.eyebrow` : repères discrets, avec leurs
  tailles et espacements définis dans le CSS partagé.
- Paragraphes : Manrope, interligne confortable, largeur contenue. Un seul
  `<h1>` par page et une hiérarchie `<h2>` / `<h3>` fondée sur le sens.

Le corps de page utilise 16 px et un interligne de 1,7. Les champs de formulaire
conservent au moins 16 px sur mobile. Les classes de titre communes passent
avant les anciennes combinaisons `font-black` et `text-display-*` dispersées.

## Layout et composants partagés

- `.container-custom` : largeur maximale commune de 1 240 px.
- `.section`, `.section-lg`, `.page-hero` : espacements fluides et marges
  latérales partagés. Préserver de vrais espaces entre les niveaux de lecture.
- `.section-label` avec `.section-num` et `.section-kicker` : numéro, libellé
  et filet communs. Le filet s’adapte à `.sur-fonce`.
- **CTAButton** : boutons en pilule, variantes `primary` et `secondary`,
  hauteur tactile d’au moins 54 px. Utiliser `to` pour une navigation interne,
  `href` pour une ressource externe et `onClick` pour une action.
  Le CTA de candidature vient de `CTA_LABEL` et `candidatureUrl('<page>')`
  dans `src/lib/links.js` : « Présenter mon entreprise » mène à `/candidature`.
- **Reveal** : apparitions au défilement sans dépendance lourde, avec respect
  de `prefers-reduced-motion`. Utiliser des délais courts et mesurés.
- **SpotlightCard** : disponible pour un effet de survol ponctuel, sans en
  faire le traitement systématique de toutes les cartes.
- **Header, Footer, Breadcrumbs, ScrollToTop, CookieConsent** : montés une fois
  dans `App.jsx`. Ne pas les dupliquer dans une page.
- Le formulaire de candidature utilise `src/pages/Candidature.css` et doit
  rester visuellement aligné sur les titres, surfaces et boutons partagés.

## Intégration d’un bloc externe

Un bloc Tailwind ou React Bits est une base de code, pas une nouvelle direction
artistique. Remapper ses couleurs, polices, arrondis et espacements vers les
tokens du site. Préférer une version sans dépendance ; ne pas introduire une
librairie d’animation pour un effet couvert par CSS ou Reveal.

Pour convertir du HTML en JSX : `className`, `htmlFor`, balises fermées,
propriétés SVG en camelCase, styles sous forme d’objet, liens internes en `Link`.
Traduire le contenu et vérifier les faits avec `celexia-copy`. Les variantes
sombres peuvent inspirer une section `.sur-fonce`, sans ajouter de bascule de thème.

## Accessibilité et performance

Préserver le lien d’évitement, le `<main id="main-content">` unique, le focus
visible, les libellés associés aux champs, les états d’erreur et la navigation
au clavier. Les éléments décoratifs portent `aria-hidden="true"` ; les images
informatives ont un texte alternatif. Viser des cibles tactiles d’au moins 44 px.
Vérifier les contrastes AA sur chaque combinaison réelle de fond et texte.

Les images ont des dimensions explicites et `loading="lazy"` hors du premier
écran. Ne pas ajouter de bitmap lourd pour un motif réalisable simplement en
SVG ou CSS. Précharger seulement les fontes utiles au premier écran.

Ne jamais introduire `lazy()` ni `<Suspense>` dans l’arbre d’`App.jsx` : les pages
sont importées statiquement pour que le pré-rendu contienne leur contenu visible.
Garder les accès à `window` dans les effets. Ne pas fractionner les titres en
spans qui compromettent la lecture ou le rendu statique.

Reveal masque uniquement lorsque JavaScript est actif (`.js .reveal`) et affiche
immédiatement le contenu avec `prefers-reduced-motion`. Sans JavaScript, le texte
pré-rendu doit rester visible.
