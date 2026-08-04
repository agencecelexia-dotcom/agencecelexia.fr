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

**Base blanche, rythmée par des bandes violet profond pleine largeur.** Toute la
palette dérive du violet du logo, échantillonné dans `public/logo.png` : **#8C52FF**.

- **Fond** : blanc en majorité, `brume.50/100` pour les sections alternées (blanc
  cassé teinté violet — **jamais de beige**, c'est lui qui faisait ressortir le
  rectangle blanc du logo avant détourage).
- **Texte** : `encre.600→900`, un noir violacé. Jamais de gris neutre.
- **Accent** : `violet.600` pour tout ce qui est texte ou fond de bouton,
  `violet.500` (la marque exacte) réservé aux éléments non textuels.
- **Bandes** : `.bande` (fond `violet-900` + texte blanc) posé sur une section,
  avec `.sur-fonce` qui bascule automatiquement boutons, filets, numéros et
  anneau de focus. Deux ou trois bandes par page, **jamais deux consécutives**.
  Sur bande : texte secondaire en `violet-200`, filets et numéros en `violet-300`.
- **Ombres** : `shadow-soft`, `shadow-card`, `shadow-lift`. Aucune ombre colorée.
- **Dégradés** : aucun. C'est délibéré.
- **Animations** : `animate-fade-in` uniquement, plus `.reveal` (voir plus bas).

**Typographie — deux familles, self-hostées.** `font-display` = **Newsreader**
(serif variable, titres uniquement, `font-medium`/`font-semibold` — la graisse
900 n'existe pas). `font-sans` = **Archivo** (interface et texte courant).
Échelle de titres dédiée : `text-display-sm/md/lg/xl`.

> J'avais écrit ici « ne pas ajouter de seconde famille » pour des raisons de
> performance. La règle a été levée sciemment le 3 août 2026 : Archivo seule
> était industrielle, pas cossue. Coût assumé : 129 ko de plus.

> **Contraintes de contraste, vérifiées au calcul.** `violet-600` sur blanc =
> 6,44:1, blanc sur `violet-600` = 6,44:1, blanc sur `violet-900` = 17,75:1,
> `violet-200` sur `violet-900` = 10,17:1, `violet-300` sur `violet-900` =
> 7,08:1. Tout est AA. **Ne jamais utiliser `violet-500` pour du texte** : il
> n'a pas été validé pour cet usage, il sert de couleur de marque non textuelle.

Avant d'écrire une valeur en dur (`#8C52FF`, `shadow-[0_4px...]`), vérifier
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
   Passer sur `violet-*`, `encre-*` et `brume-*`. Un bloc laissé en indigo se
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
    Le filet est produit par le `::after` de `.section-label`, et bascule tout
    seul en clair si la section porte `.sur-fonce`.

## Accessibilité — le niveau déjà atteint

Ne pas régresser sur ce qui existe :

- Skip link « Aller au contenu principal » en tête de [App.jsx](src/App.jsx),
  visible au focus.
- `<main id="main-content">` unique.
- `aria-hidden="true"` sur les éléments purement décoratifs.
- `prefers-reduced-motion` respecté par `Reveal`.

Pour tout nouveau bloc : contrastes conformes AA selon le tableau ci-dessus,
focus visible au clavier, `alt` réel sur les images informatives (`alt=""` sur
les décoratives), libellés associés aux champs de formulaire, cibles tactiles
≥ 44 px.

## Performance

Le vendor React est isolé via `manualChunks` ([vite.config.js](vite.config.js)) :
le préserver, c'est ce qui garde le cache stable entre déploiements.

- **Les pages sont importées statiquement, pas en `lazy()`** — voir la règle du
  pré-rendu ci-dessous. Une nouvelle page s'ajoute par un `import` en tête
  d'`App.jsx`.
- Pas de librairie d'animation lourde : les keyframes Tailwind + `Reveal`
  couvrent les besoins actuels.
- Images : dimensions explicites (`width`/`height`) pour éviter le CLS,
  `loading="lazy"` hors du premier écran, et jamais de PNG lourd non compressé —
  le repo en contient déjà (`og-image.png`, `logo.png`).
- Chaque dépendance ajoutée se paie sur le LCP mobile, qui est le terrain de jeu
  réel de cette cible.

## Deux règles héritées du pré-rendu

**Ne jamais introduire `lazy()` ni `<Suspense>` dans l'arbre de
[src/App.jsx](src/App.jsx).** La moindre frontière Suspense fait émettre le
contenu par React dans un `<div hidden>` de fin de document, repositionné par un
script au chargement : un robot sans JavaScript n'y verrait que « Chargement… ».
Les pages sont importées statiquement. Coût mesuré : ~10 ko gzip, contre zéro
requête à la navigation.

**`Reveal` masque uniquement si JavaScript est actif.** La règle CSS est
`.js .reveal { opacity: 0 }`, la classe `js` étant posée par un script en tête de
[index.html](index.html). Sans JavaScript, le contenu pré-rendu reste visible au
lieu de rester à opacité 0 — ce que Google déprécie. Ne pas remettre l'opacité
dans le composant.
