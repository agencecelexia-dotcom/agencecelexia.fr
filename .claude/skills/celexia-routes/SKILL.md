---
name: celexia-routes
description: Contrat des routes, du pré-rendu et du SEO d’agencecelexia.fr. À lire avant d’ajouter, modifier ou supprimer une page.
---

# Routes et SEO — Celexia

État du 7 novembre 2026 : **17 pages indexables et une page 404**. Le site reste sur React/Vite. Le build client, le bundle SSR puis `scripts/prerender-meta.mjs` génèrent un HTML complet par URL. Ne pas utiliser `lazy()`/Suspense dans l’arbre des pages : le contenu doit être lisible sans JavaScript.

## Sources des routes

- `src/App.jsx` déclare le routeur React et importe les pages statiquement.
- `src/data/metiers.js` définit les quatre métiers, importés par le routeur métier et le pré-rendu.
- `src/data/seoPages.js` définit les ressources commerciales et éditoriales (chemin, métadonnées, contenu, dates, liens associés). Ces données alimentent `ResourcePage` et le pré-rendu.
- `src/data/seoHub.js` définit le hub `/guides`, rendu par `Guides` et importé par le pré-rendu.
- `src/data/partnerCase.js` définit le retour d’expérience anonymisé, rendu par `CaseStudy` et importé par le pré-rendu comme Article. La fiche HTML dans `public/ressources/` est un support imprimable en noindex, hors sitemap.
- Les autres pages sont déclarées dans `baseRoutes` de `scripts/prerender-meta.mjs`.
- `public/sitemap.xml` reste à synchroniser explicitement. `public/llms.txt` et `public/llms-full.txt` sont générés par `scripts/generate-llms.mjs` avant le build, depuis les contenus partagés. Ne pas les modifier à la main.

## Ajouter une page

1. Déclarer son contenu et ses métadonnées dans la source adaptée. Pour une ressource `SEO_PAGES`, `App.jsx` et le pré-rendu parcourent déjà cette liste. Pour une page autonome, ajouter son import statique et sa Route dans App, puis son entrée dans baseRoutes.
2. Synchroniser les métadonnées du hook client `usePageMeta` avec celles du pré-rendu. Le hook seul ne suffit pas pour le HTML livré aux robots. Les articles utilisent `type: 'article'`.
3. Ajouter l’URL canonique au sitemap. La date `lastmod` doit correspondre à un changement réel ; ne pas la renouveler automatiquement à chaque build.
4. Vérifier les fichiers llms générés (`npm run geo:sync`). Ce sont des résumés documentaires, pas une garantie de visibilité dans les moteurs IA. Les nouvelles ressources de SEO_PAGES y sont reprises automatiquement.
5. Ajouter des liens internes réels depuis des pages pertinentes. Vérifier aussi `Breadcrumbs.jsx` : libellé et liste des chemins connus. Ne pas créer de lien vers `/metiers`, qui n’est pas une page.
6. Pour les articles, afficher auteur et date cohérents avec le JSON-LD. Ne pas inventer de qualifications, date de fondation ou preuve commerciale.

## Hébergement et erreurs

Les pages sont générées dans `dist/<chemin>/index.html`. Vercel et Netlify servent ces fichiers. **Ne pas réintroduire de fallback global `/* → /index.html` en HTTP 200** : il transforme les URL inexistantes en copies de l’accueil et crée des soft 404.

Le build génère `dist/404.html`, non indexable et sans canonical. Les hébergeurs le servent avec un statut 404. `NotFound` gère aussi les navigations client, y compris les métiers inconnus. `usePageMeta` accepte `canonical: null` et remet les directives robots par défaut en quittant la 404.

`/api/candidature` reste une fonction serveur indépendante. Sur Netlify, sa réécriture explicite vers la fonction doit être conservée.

## Renommer ou retirer une URL

Créer une redirection permanente explicite dans `vercel.json` et `netlify.toml` (et vérifier `public/_redirects`). Ajouter le filet de sécurité client si nécessaire, mais un Navigate React ne remplace pas une redirection HTTP. Retirer l’ancienne URL du sitemap et mettre à jour tous les liens.

## Données structurées

Le pré-rendu est la source unique du JSON-LD : Organization, WebSite, WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Service sur les pages concernées, Article sur les guides. Ne pas émettre un second graphe au runtime.

Les FAQ restent visibles dans les pages sans FAQPage ; ne pas réintroduire les anciens HowTo, horaires ou dates historiques non corroborés. Les références à ces schémas dans d’anciennes notes sont obsolètes. Chaque fait et chaque propriété doivent correspondre au contenu réel. Les taux, l’exclusivité et la ville du siège restent absents selon les règles de `celexia-copy`.

## Validation

`npm run check` lance le lint, le build et tous les tests. Les tests SEO vérifient la correspondance sitemap/pré-rendu, les métadonnées, le contenu sans JS, le graphe, les liens et la 404. Les tests analytics et candidature utilisent des doublures sans envoi réel.

Après déploiement d’un aperçu, vérifier également les réponses HTTP de vraies URL, les redirections, les assets, une URL inexistante et `/api/candidature` avec une méthode qui ne soumet rien. `vite preview` applique son propre fallback : ses codes de réponse ne prouvent pas le comportement de production.
