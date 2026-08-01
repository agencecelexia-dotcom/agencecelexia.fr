---
name: celexia-routes
description: >
  Contrat de synchronisation des routes et du SEO pour agencecelexia.fr.
  À lire AVANT d'ajouter, renommer ou supprimer une route, une page ou un
  métier. Le site est une SPA React dont le SEO dépend d'un pré-rendu
  post-build : une route ajoutée au seul routeur React est invisible pour
  Google. Se déclenche sur « ajouter une page », « nouveau métier »,
  « nouvelle route », « changer une URL », « supprimer une page »,
  « sitemap », « redirection », « 301 ».
---

# Contrat de routes & SEO — agencecelexia.fr

## Le piège central

Ce site est une **SPA React (Vite + react-router-dom)**, pas un framework SSG.
Le HTML servi est le même `index.html` pour toutes les routes. Le SEO ne tient
qu'au script post-build [scripts/prerender-meta.mjs](scripts/prerender-meta.mjs),
lancé par `npm run build` (`vite build && node scripts/prerender-meta.mjs`).

Ce script génère **un dossier + un `index.html` statique par route**, avec les
bonnes balises `title`/`description`/`canonical`/OG/Twitter et le JSON-LD injecté
dans le `<head>`.

> **Conséquence :** une route déclarée uniquement dans
> [src/App.jsx](src/App.jsx) fonctionne au clic mais est **invisible pour
> Googlebot et les crawlers IA** — pas de title propre, pas de canonical, pas de
> JSON-LD, et un accès direct à l'URL renvoie le HTML générique.

Les hooks [usePageMeta](src/hooks/usePageMeta.js) et
[useJsonLd](src/hooks/useJsonLd.js) ne corrigent rien côté crawler : ils
s'exécutent au runtime, après hydratation. Ils servent l'UX (onglet, partages
après navigation client), pas l'indexation. **Ne jamais les considérer comme
suffisants.**

## Checklist — ajouter une route « simple »

Pour toute page non-métier (ex. `/tarifs`), modifier **les 4** :

1. **[src/App.jsx](src/App.jsx)** — `const X = lazy(() => import('./pages/X'))`
   puis `<Route path="/x" element={<X />} />`. Placer avant le `path="*"`.
2. **[scripts/prerender-meta.mjs](scripts/prerender-meta.mjs)** — ajouter une
   entrée dans `baseRoutes` avec `path`, `title`, `description`, et `jsonLd`
   si la page mérite un schéma. Sans ça : aucun pré-rendu.
3. **[public/sitemap.xml](public/sitemap.xml)** — ajouter le `<url>` (`<loc>`,
   `<lastmod>`, `<changefreq>`, `<priority>`). Fichier écrit à la main, aucune
   génération automatique.
4. **[public/llms.txt](public/llms.txt)** — référencer la page si elle porte de
   l'information utile aux moteurs IA (offre, prix, process). Mettre à jour
   `public/llms-full.txt` en parallèle.

Ajouter aussi un lien interne réel depuis [Header](src/components/Header.jsx) ou
[Footer](src/components/Footer.jsx) — une page orpheline n'est pas explorée.

## Checklist — ajouter un métier

Les 19 métiers partagent une route paramétrée `/metiers/:slug` rendue par
[src/components/MetierPage.jsx](src/components/MetierPage.jsx). Le slug est la
clé de l'objet. Il faut modifier **les 3 listes, qui sont dupliquées** :

1. **[src/context/NicheContext.jsx](src/context/NicheContext.jsx)** → `METIERS`
   (format `'slug': { label, color }`) — source de vérité runtime.
2. **[scripts/prerender-meta.mjs](scripts/prerender-meta.mjs)** → `METIERS`
   (format `'slug': 'Label'`) — le commentaire du fichier dit explicitement
   « À garder synchronisé avec NicheContext.METIERS ». Le `metierRoutes` en
   dérive et génère `title`, `description` et un JSON-LD `Service`.
3. **[public/sitemap.xml](public/sitemap.xml)** → une `<url>`
   `/metiers/<slug>`.

> **Vérification obligatoire après coup :** le nombre d'entrées doit être
> identique dans les trois. Aujourd'hui : 19 métiers, et
> `grep -c "<url>" public/sitemap.xml` doit valoir **6 + nombre de métiers**
> (25 actuellement).

Le pré-rendu ne connaît pas `color` ; l'inverse est vrai pour les meta. Ne pas
supposer qu'un seul fichier suffit.

## Checklist — renommer ou supprimer une URL

Une URL déjà indexée ne disparaît jamais silencieusement.

1. Créer la **redirection 301 chez l'hébergeur** : [vercel.json](vercel.json)
   **et** [netlify.toml](netlify.toml) (les deux sont présents dans le repo).
   C'est la seule vraie 301.
2. Ajouter un filet de sécurité client dans [src/App.jsx](src/App.jsx) :
   `<Route path="/ancienne" element={<Navigate to="/nouvelle" replace />} />`.
   Le repo suit déjà ce motif pour `/services/*` et `/sites-artisans`, avec un
   commentaire qui rappelle que le vrai 301 est côté hébergeur. **Reproduire ce
   commentaire**, pour que personne ne prenne le `Navigate` pour une 301.
3. Retirer l'URL de `public/sitemap.xml` et de `prerender-meta.mjs`.
4. Retirer les liens internes qui pointent encore dessus.

## Cohérence du JSON-LD

Le graphe est centralisé dans `prerender-meta.mjs` : `ORG_LD`, `FAQ_LD`,
`HOWTO_LD`, plus un `WebSite`/`WebPage` et un `BreadcrumbList` calculé par
`buildBreadcrumbJsonLd`. Les `@id` sont des ancres stables
(`https://agencecelexia.fr/#organization`) référencées par d'autres nœuds.

- **Ne jamais changer un `@id` existant** sans mettre à jour toutes les
  références (`provider`, `publisher`, `about`, `worksFor`, `isPartOf`).
- Les faits d'entreprise (SIREN 939 306 429, téléphone, email, fondateurs,
  Nogent-sur-Marne) apparaissent aussi dans `public/llms.txt`, les mentions
  légales et le footer. Un changement doit être propagé partout.
- Mettre à jour `dateModified` lors d'une refonte de contenu réelle.
- Toute FAQ visible ajoutée à l'écran doit exister dans `FAQ_LD`, et
  inversement : un `FAQPage` sans FAQ visible est une non-conformité Google.

## Validation avant de déclarer terminé

```bash
npm run build
# doit afficher : "Pre-rendered N pages with SEO meta tags and JSON-LD schemas."
```

Puis contrôler qu'une route ajoutée existe réellement en statique et porte ses
propres meta :

```bash
ls dist/<ma-route>/index.html
grep -o "<title>[^<]*</title>" dist/<ma-route>/index.html
grep -c "application/ld+json" dist/<ma-route>/index.html
```

Si `dist/<ma-route>/index.html` n'existe pas, l'étape 2 a été oubliée.

Contrôle croisé sitemap ↔ pré-rendu, à lancer après toute modification de route :

```bash
grep -o "<loc>https://agencecelexia.fr[^<]*</loc>" public/sitemap.xml \
  | sed 's|<loc>https://agencecelexia.fr||; s|</loc>||; s|^$|/|' | sort > /tmp/sm.txt
find dist -name index.html | sed 's|^dist||; s|/index.html$||; s|^$|/|' | sort > /tmp/gen.txt
comm -23 /tmp/sm.txt /tmp/gen.txt   # dans le sitemap mais pas pré-rendu -> à corriger
comm -13 /tmp/sm.txt /tmp/gen.txt   # pré-rendu mais absent du sitemap -> à corriger
```

Référence actuelle (build validé) : 25 URLs au sitemap, 25 routes pré-rendues,
zéro écart. La seule sortie attendue de la seconde commande est `/proposition`
— page statique de `public/`, en `noindex, nofollow`, volontairement hors
sitemap. Toute autre ligne est un bug.
