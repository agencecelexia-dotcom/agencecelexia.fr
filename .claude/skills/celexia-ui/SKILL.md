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

- **Couleurs** : échelle `violet.50 → violet.950` (marque, `violet-600 #7C3AED`
  = accent principal), `dark` / `dark.50` / `dark.100` / `dark.200` (sections
  sombres), alias `primary-purple`, `dark-gray`, `light-gray`.
  Chaque métier a en plus une couleur d'accent dans `METIERS`
  ([NicheContext.jsx](src/context/NicheContext.jsx)), lue via `getMetierColor()`.
- **Typo** : `font-display` (Clash Display, titres) et `font-sans`
  (Plus Jakarta Sans, corps). Ne pas introduire de troisième famille.
- **Ombres** : `shadow-soft`, `shadow-card`, `shadow-card-hover`,
  `shadow-violet`, `shadow-violet-lg/xl`, `shadow-glow`, `shadow-glow-lg`,
  `shadow-btn`, `shadow-btn-hover`, `shadow-dark-card`.
- **Dégradés** : `bg-gradient-violet`, `bg-gradient-violet-dark`,
  `bg-gradient-radial`.
- **Animations** : `animate-fade-up`, `fade-in`, `slide-up`, `scale-in`,
  `shimmer`, `float`, `float-slow`, `float-reverse`, `pulse-slow`, `bounce-sm`,
  `wiggle`, `press`, `gradient-x`, `glow-pulse`, `marquee`.

Avant d'écrire une valeur en dur (`#7C3AED`, `shadow-[0_4px...]`), vérifier
qu'un token ne couvre pas déjà le besoin. Si un token manque vraiment,
l'ajouter à `tailwind.config.js` plutôt que de le coder en dur dans un composant.

## Composants partagés à réutiliser

- **[Reveal](src/components/Reveal.jsx)** — apparition au scroll
  (`IntersectionObserver`, `disconnect()` après déclenchement). Props :
  `className`, `delay` (ms). **Respecte déjà `prefers-reduced-motion`** en
  affichant immédiatement. C'est l'alternative zéro-dépendance à
  `framer-motion` : l'utiliser pour tout effet d'entrée, en cascade via `delay`.
- **[CTAButton](src/components/CTAButton.jsx)** — variantes `primary`,
  `secondary`, `white`. Rend un `<Link>` si `to` est fourni, sinon un `<button>`
  avec `onClick`. Ne pas recréer de bouton ad hoc.
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
   Passer sur `violet-*` et les tokens ci-dessus. Un bloc laissé en indigo se
   voit immédiatement.
7. Remplacer les `<a href>` internes par `<Link to>` de `react-router-dom`, et
   les boutons d'action par `CTAButton`.
8. Envelopper la section dans `<Reveal>` si elle doit apparaître au scroll.
9. Traduire tout le texte en français et le faire passer par les règles du skill
   [celexia-copy](.claude/skills/celexia-copy/SKILL.md) — ne jamais laisser du
   lorem ipsum ou de l'anglais en place.

Les variantes `-dark.html` sont utiles comme référence pour les sections
sombres, qui utilisent ici la palette `dark.*` (pas `dark:` de Tailwind : le
site n'a pas de bascule de thème, les sections sombres sont un choix de design).

## Accessibilité — le niveau déjà atteint

Ne pas régresser sur ce qui existe :

- Skip link « Aller au contenu principal » en tête de [App.jsx](src/App.jsx),
  visible au focus.
- `<main id="main-content">` unique.
- Fallback de chargement avec `role="status"`, `aria-label` et texte `sr-only`.
- `aria-hidden="true"` sur les éléments purement décoratifs.
- `prefers-reduced-motion` respecté par `Reveal`.

Pour tout nouveau bloc : contraste suffisant sur fond violet et sur fond `dark`,
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
