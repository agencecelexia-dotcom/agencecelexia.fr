---
name: celexia-ui
description: >
  Design system d'agencecelexia.fr et méthode pour intégrer des blocs Tailwind
  externes (HyperUI) dans ce codebase React. À charger avant de créer une
  section, un composant ou une page, et avant de coller du HTML Tailwind trouvé
  ailleurs. Se déclenche sur « nouvelle section », « nouveau composant »,
  « refonte visuelle », « hero », « pricing », « FAQ », « bloc Tailwind »,
  « HyperUI », « animation », « dark mode ».
---

# Design system & blocs UI — agencecelexia.fr

## Stack réelle

**React 19 + Vite 7 + react-router-dom 7 + Tailwind CSS 3.4**, en SPA.
Ce n'est **pas** un projet Astro : tout composant est du `.jsx`, il n'y a ni
`.astro`, ni îlots, ni zéro-JS par défaut. Ignorer toute documentation qui
suppose Astro (`astro-seo`, `@astrojs/sitemap`, `client:load`…).

Corollaire utile : les bibliothèques **React** (shadcn/ui, Magic UI, Aceternity)
sont techniquement compatibles ici. Elles restent à éviter par défaut — elles
tirent Radix, `framer-motion`, `class-variance-authority` et alourdissent un
bundle déjà chargé — mais ce n'est pas une incompatibilité de principe.
Demander avant d'ajouter une dépendance UI.

## Tokens — utiliser ceux-ci, ne pas en inventer

Définis dans [tailwind.config.js](tailwind.config.js) :

**Le site est clair de bout en bout. Aucune section à fond sombre, footer
compris.** Le rythme vient de l'alternance blanc / `chaux-100` et des filets de
cuivre, jamais de blocs sombres. Bordures fines plutôt qu'ombres portées.

- **Couleurs** : fond de base **blanc**. `chaux.50/100/200/300` (sections
  alternées, blanc cassé chaud), `ardoise.600→900` (texte, **jamais en fond de
  section**), `cuivre.50→700` (**accent unique** : filets, numéros, boutons),
  `patine` (états positifs), `acier.200→600` (texte secondaire, bordures).
  Chaque métier a une teinte matière désaturée dans `METIERS`
  ([src/data/metiers.js](src/data/metiers.js)), utilisée par petites touches
  seulement — elle ne concurrence jamais le cuivre.
- **Typo** : une seule superfamille, **Archivo variable** self-hostée
  (`public/fonts/`), axes `wght` 100-900 et `wdth` 62-125 %. `font-display` et
  `font-sans` pointent tous deux dessus. Les chasses passent par les utilitaires
  `.font-narrow` (78 %), `.font-normal-width`, `.font-expanded` (112 %).
  **Ne pas ajouter de seconde famille** : c'est un fichier de plus au chargement.
- **Ombres** : `shadow-soft`, `shadow-card`, `shadow-card-hover`, volontairement
  discrètes. Pas d'ombre colorée, pas de halo.
- **Dégradés** : aucun. C'est délibéré.
- **Animations** : `animate-fade-up`, `fade-in`, `slide-up`. Les quinze autres
  ont été supprimées lors de la refonte — ne pas les réintroduire.

> **Contraintes de contraste, vérifiées au calcul.** `cuivre-500` sur blanc
> plafonne à **4,45:1**, sous le seuil AA. Donc : `cuivre-600` pour tout texte
> et tout fond de bouton (5,88:1), `cuivre-500` réservé aux éléments non
> textuels (icônes décoratives, filets, anneau de focus). `acier-500` sur blanc
> ne vaut que 3,22:1 : **jamais de texte en `acier-500`**, utiliser `acier-600`
> (4,93:1). Texte de lecture toujours en `ardoise-700`/`800`.

Avant d'écrire une valeur en dur (`#7C3AED`, `shadow-[0_4px...]`), vérifier
qu'un token ne couvre pas déjà le besoin. Si un token manque vraiment,
l'ajouter à `tailwind.config.js` plutôt que de le coder en dur dans un composant.

## Composants partagés à réutiliser

- **[Reveal](src/components/Reveal.jsx)** — apparition au scroll
  (`IntersectionObserver`, `disconnect()` après déclenchement). Props :
  `className`, `delay` (ms). **Respecte déjà `prefers-reduced-motion`** en
  affichant immédiatement. C'est l'alternative zéro-dépendance à
  `framer-motion` : l'utiliser pour tout effet d'entrée, en cascade via `delay`.
- **[CTAButton](src/components/CTAButton.jsx)** — variantes `primary` et
  `secondary`. Rend un `<a target="_blank">` si `href` est fourni (c'est le cas
  du bouton d'inscription), un `<Link>` si `to`, sinon un `<button>` avec
  `onClick`. Props utiles : `withArrow`, `full`. Ne pas recréer de bouton ad hoc.
  Le libellé vient toujours de `CTA_LABEL` et l'URL de `registerUrl('<page>')`
  ([src/lib/links.js](src/lib/links.js)) — jamais d'URL en dur.
- **[Breadcrumbs](src/components/Breadcrumbs.jsx)**, [Header](src/components/Header.jsx),
  [Footer](src/components/Footer.jsx), [ScrollToTop](src/components/ScrollToTop.jsx),
  [CookieConsent](src/components/CookieConsent.jsx) sont montés globalement dans
  [App.jsx](src/App.jsx) — ne pas les réinstancier dans une page.

## Intégrer un bloc HyperUI

Les blocs sont clonés en local (dossier gitignoré) :

```
references/hyperui/public/examples/marketing/<catégorie>/<n>.html
references/hyperui/public/examples/marketing/<catégorie>/<n>-dark.html
```

Catégories disponibles : `announcements`, `banners`, `blog-cards`, `buttons`,
`cards`, `carts`, `contact-forms`, `ctas`, `empty-content`, `faqs`,
`feature-grids`, `footers`, `headers`, `logo-clouds`, `newsletter-signup`,
`polls`, `pricing`, `product-cards`, `product-collections`, `sections`, `stats`,
`team-sections`. Les sources MDX (avec notes) sont dans
`references/hyperui/src/content/collection/marketing/`.

C'est du **HTML Tailwind pur**. Conversion en JSX, systématiquement :

1. `class=` → `className=`, `for=` → `htmlFor=`.
2. Fermer les balises orphelines : `<img>`, `<input>`, `<br>` → `… />`.
3. `style="a: b"` → `style={{ a: 'b' }}` (propriétés en camelCase).
4. Attributs SVG en camelCase : `stroke-width` → `strokeWidth`,
   `stroke-linecap` → `strokeLinecap`, `fill-rule` → `fillRule`.
5. `<!-- … -->` → `{/* … */}`.
6. **Remapper les couleurs** : HyperUI sort en `indigo-*`/`blue-*`/`gray-*`.
   Passer sur `cuivre-*`, `ardoise-*` et `chaux-*`. Un bloc laissé en indigo se
   voit immédiatement.
7. Remplacer les `<a href>` internes par `<Link to>` de `react-router-dom`, et
   les boutons d'action par `CTAButton`.
8. Envelopper la section dans `<Reveal>` si elle doit apparaître au scroll.
9. Traduire tout le texte en français et le faire passer par les règles du skill
   [celexia-copy](.claude/skills/celexia-copy/SKILL.md) — ne jamais laisser du
   lorem ipsum ou de l'anglais en place.

**Ignorer les variantes `-dark.html`** : le site n'a aucune section sombre et
pas de bascule de thème. Partir systématiquement de la version claire.

10. Ajouter l'en-tête de section signature si le bloc devient une section à part
    entière : un `<div className="section-label">` contenant un
    `<span className="section-num">` et un `<span className="section-kicker">`.
    Le filet de cuivre est produit par le `::after` de `.section-label`.

## Accessibilité — le niveau déjà atteint

Ne pas régresser sur ce qui existe :

- Skip link « Aller au contenu principal » en tête de [App.jsx](src/App.jsx),
  visible au focus.
- `<main id="main-content">` unique.
- Fallback de chargement avec `role="status"`, `aria-label` et texte `sr-only`.
- `aria-hidden="true"` sur les éléments purement décoratifs.
- `prefers-reduced-motion` respecté par `Reveal`.

Pour tout nouveau bloc : contrastes conformes AA selon le tableau ci-dessus,
focus visible au clavier, `alt` réel sur les images informatives (`alt=""` sur
les décoratives), libellés associés aux champs de formulaire, cibles tactiles
≥ 44 px.

## Performance

Les pages sont **lazy-loadées** dans `App.jsx` et le vendor React est isolé via
`manualChunks` ([vite.config.js](vite.config.js)). Préserver ces deux choix.

- Toute nouvelle page passe par `lazy(() => import(...))`.
- Pas de librairie d'animation lourde : les keyframes Tailwind + `Reveal`
  couvrent les besoins actuels.
- Images : dimensions explicites (`width`/`height`) pour éviter le CLS,
  `loading="lazy"` hors du premier écran, et jamais de PNG lourd non compressé —
  le repo en contient déjà (`og-image.png`, `logo.png`).
- Chaque dépendance ajoutée se paie sur le LCP mobile, qui est le terrain de jeu
  réel de cette cible.
