# Audit SEO Complet — agencecelexia.fr

**Date :** 2026-03-11
**Outil :** Claude SEO (6 agents paralleles)
**Type de site :** Agence marketing digital pour artisans (React SPA)

---

## Score Global SEO : 38/100

| Categorie | Score | Poids | Pondere |
|-----------|-------|-------|---------|
| Technical SEO | 34/100 | 25% | 8.5 |
| Content Quality | 34/100 | 25% | 8.5 |
| On-Page SEO | 45/100 | 20% | 9.0 |
| Schema / Structured Data | 30/100 | 10% | 3.0 |
| Performance (CWV) | 48/100 | 10% | 4.8 |
| Images | 35/100 | 5% | 1.75 |
| AI Search Readiness | 30/100 | 5% | 1.5 |
| **TOTAL** | | **100%** | **37.05** |

---

## Resume Executif

### Top 5 Problemes Critiques

1. **Site 100% Client-Side Rendering (CSR)** — Le HTML envoye aux crawlers est un `<div id="root"></div>` vide. Tout le contenu, les meta tags, les canonicals et le JSON-LD sont invisibles sans execution JavaScript. Google indexe le JS mais avec des delais et limitations majeures.

2. **Canonical hardcode sur la homepage** — Toutes les pages ont `<link rel="canonical" href="https://agencecelexia.fr/">` dans le HTML statique, disant a Google que chaque page est un doublon de la homepage.

3. **Contenu extremement mince** — 11 pages sur 13 analysees sont sous le minimum de mots requis. Les pages metiers (~200 mots) et services (~350 mots) sont a 35-65% sous les seuils.

4. **Zero analytics/Search Console** — GA4 et la verification Search Console sont commentes avec des placeholders. Aucune donnee de performance n'est collectee.

5. **Sitemap incomplet** — 6 URLs au lieu de 23. 17 pages manquantes, 3 URLs mortes (`/leads-*`).

### Top 5 Quick Wins

1. Activer GA4 et Search Console (decommenter + configurer les vrais IDs)
2. Mettre a jour le sitemap.xml avec les 23 pages reelles
3. Ajouter `React.lazy()` + `Suspense` pour le code splitting
4. Supprimer le schema FAQPage (ignore par Google depuis aout 2023)
5. Ajouter `width`/`height` sur les `<img>` du logo pour reduire le CLS

---

## 1. Technical SEO (34/100)

### Crawlability & Indexability

| Check | Status |
|-------|--------|
| HTTPS | PASS |
| Viewport meta | PASS |
| robots.txt | PASS (sitemap reference) |
| HTML lang="fr" | PASS |
| Rendu serveur (SSR/SSG) | **CRITICAL FAIL** — CSR pur |
| Canonical dynamique | **CRITICAL FAIL** — Hardcode homepage |
| Code splitting | **FAIL** — 28+ composants en un seul bundle |
| Sitemap complet | **FAIL** — 6/23 pages |
| GA4 / Search Console | **FAIL** — Commente |
| HTTP 404 reel | **FAIL** — SPA retourne 200 pour toutes les URLs |
| Headers securite (Netlify) | **FAIL** — .htaccess ignore par Netlify |
| HSTS | **FAIL** — Non configure |
| CSP | **FAIL** — Non configure |
| IndexNow | **FAIL** — Non implemente |

### Problemes identifies

- **Architecture SPA fatale pour le SEO** : React 19 + Vite sans SSR. Le `<title>`, `<meta description>`, canonical, OG tags et JSON-LD sont tous statiques dans le HTML jusqu'a ce que JavaScript s'execute. Chaque page sert un HTML identique aux crawlers.

- **robots.txt** : Bloque AhrefsBot, SemrushBot, MJ12bot — empeche l'analyse competitive. `Crawl-delay: 0` pour Googlebot est ignore.

- **Sitemap** : Contient `/leads-plombier`, `/leads-electricien`, `/leads-menuisier` qui n'ont aucune route dans App.jsx (servent le composant NotFound). Manque les 6 pages `/services/*`, les 12 pages `/metiers/*`, et `/reserver`.

- **Headers securite** : Le fichier `.htaccess` configure X-Content-Type-Options, X-Frame-Options, etc. mais est **completement ignore par Netlify**. Aucun fichier `_headers` ni configuration dans `netlify.toml`.

### Recommandations

1. **Migrer vers SSR/SSG** : Astro (reutilise les composants React), Next.js, ou au minimum `vite-plugin-ssr` / prerendering
2. **Creer un fichier `_headers`** dans `/public/` pour Netlify avec HSTS, CSP, Permissions-Policy
3. **Ajouter `noindex` au composant NotFound** pour eviter l'indexation des pages 404
4. **Configurer GA4 et Search Console** immediatement

---

## 2. Content Quality (34/100)

### E-E-A-T (20.5/100)

| Facteur | Score | Poids | Constats |
|---------|-------|-------|----------|
| Experience | 15/100 | 20% | Zero case studies, pas de temoignages reels, stats non sourcees |
| Expertise | 25/100 | 25% | Fondateurs sans noms de famille, sans certifications, blog vide |
| Authoritativeness | 15/100 | 25% | Email Gmail, pas de Google Partner, site:agencecelexia.fr = 2 pages indexees |
| Trustworthiness | 25/100 | 30% | Pas de mentions legales, pas de RGPD, pas d'adresse physique, pas de SIRET |

### Comptage de mots vs. minimums

| Page | Mots | Minimum | Status |
|------|------|---------|--------|
| Homepage | ~285 | 500 | FAIL (-43%) |
| About | ~1,263 | 500 | PASS |
| Contact | ~166 | 300 | FAIL (-45%) |
| 6 pages Services | ~304-400 | 800 | FAIL (-50 a -62%) |
| 12 pages Metiers | ~186-199 | 500 | FAIL (-65 a -69%) |
| Blog | ~350 | N/A | FAIL (0 articles, "a venir") |

### Problemes critiques

- **Pas de mentions legales** : Obligation legale en France (LCEN). Pas de SIRET, pas d'adresse.
- **Email Gmail** : `agence.celexia@gmail.com` au lieu de `contact@agencecelexia.fr`
- **Pages metiers quasi-identiques** : Template duplique avec juste le nom du metier change. Google penalise ce pattern via le Helpful Content System.
- **Blog vide** : 7 stubs d'articles "a venir" depuis oct. 2025. Pire qu'aucun blog.
- **Accents manquants** : "Benefices", "adapte si vous etes", "Echangeons", "determiner" — contenu mal relu.
- **Garanties non etayees** : "Position top 3 garantie en 90 jours", "ROI garanti" sans methodo ni conditions.

---

## 3. Schema / Donnees Structurees (30/100)

### Detection

| Page | Schema | Status |
|------|--------|--------|
| Homepage | Organization | Partiel (adresse incomplete, pas de ContactPoint) |
| About | FAQPage | **A SUPPRIMER** (ignore depuis aout 2023) |
| Leads Plombier/Electricien/Menuisier | Service + FAQPage | FAQPage a supprimer, Service minimal |
| Toutes les pages non-root | BreadcrumbList | Partiel (ne gere pas les chemins multi-niveaux) |
| **6 pages Services** | **AUCUN** | FAIL |
| **12 pages Metiers** | **AUCUN** | FAIL |

### Problemes

- **FAQPage sur 4 pages** : Google a restreint les rich results FAQPage aux sites gouvernementaux/sante depuis aout 2023. A supprimer.
- **18 pages sans aucun schema** : Les 6 services et 12 metiers n'ont aucune donnee structuree.
- **Organization incomplet** : Adresse = seulement `addressCountry: "FR"`. Manque rue, ville, code postal, ContactPoint.
- **Pas de WebSite schema** : Manque le schema WebSite avec SearchAction pour le sitelinks search box.
- **BreadcrumbList casse** : Ne mappe que 6 chemins. `/services/seo` affiche "services" au lieu de "Services > Referencement SEO".
- **JSON-LD injecte cote client** : Depend du rendu JS, risque de non-detection par les crawlers.

### Schema recommande

- Ajouter `@graph` avec `WebSite` + `ProfessionalService` + `ContactPoint` sur la homepage
- Ajouter `Service` schema sur chaque page service et metier
- Ajouter `Person` schema pour les fondateurs (Thomas & Antoine)
- Corriger BreadcrumbList pour les chemins multi-niveaux

---

## 4. Sitemap (55/100)

### Validation

| Check | Status |
|-------|--------|
| XML valide | PASS |
| Namespace correct | PASS |
| Reference dans robots.txt | PASS |
| Sous 50,000 URLs | PASS |
| Pas d'URLs noindex | PASS |
| changefreq/priority deprecated | FAIL (present sur toutes les URLs) |
| lastmod precis | FAIL (toutes identiques : 2026-01-31) |
| Toutes les URLs retournent 200 | FAIL (3 URLs mortes /leads-*) |
| Couvre toutes les routes | **CRITICAL FAIL** (6/23 pages) |
| Canonical par page | FAIL (hardcode homepage) |

### Pages manquantes (17)

`/reserver`, 6x `/services/*`, 12x `/metiers/*`

### URLs mortes dans le sitemap (3)

`/leads-plombier`, `/leads-electricien`, `/leads-menuisier` — pas de route dans App.jsx

### Sitemap recommande : 23 URLs

Voir la section recommandations pour le XML complet.

---

## 5. Performance / Core Web Vitals (48/100)

### Metriques estimees

| Metrique | Estime | Seuil "Good" | Status |
|----------|--------|-------------|--------|
| LCP | 3.5-5.5s | <= 2.5s | **FAIL** |
| INP | 100-180ms | <= 200ms | PASS (borderline) |
| CLS | 0.15-0.35 | <= 0.1 | **FAIL** |

### Causes principales

**LCP (FAIL)** :
- CSR pur — tout le contenu attend l'execution JS
- Zero code splitting — 28+ composants en un seul bundle (~150-250KB gzip)
- 2 providers de fonts externes (Google Fonts + Fontshare) = 2 DNS + 2 TLS
- Cal.com embed charge eagerly sur la homepage (~300KB JS)
- Pas de `vite-plugin-imagemin`, pas de WebP/AVIF

**CLS (FAIL)** :
- Logo `<img>` sans `width`/`height` (Header.jsx:68)
- Double font swap (Plus Jakarta Sans + Clash Display) = 2 reflows
- Cal.com embed injecte post-mount dans un conteneur 600px

**INP (PASS borderline)** :
- Scroll listener sans throttle (Header.jsx:32)
- `smooth-scroll` global peut causer du jank

### Recommandations prioritaires

1. **React.lazy() + Suspense** pour code splitting (~-60-70% bundle initial)
2. **Lazy-load Cal.com** avec Intersection Observer
3. **Self-host les fonts** (elimine 2 DNS lookups + 2 TLS)
4. **Ajouter width/height** sur toutes les images
5. **Configurer Vite manualChunks** (vendor: react, react-dom, react-router-dom)

---

## 6. Visual / UX SEO (62/100)

| Categorie | Score |
|-----------|-------|
| Above-the-fold | 10/20 |
| Mobile responsiveness | 16/20 |
| Heading hierarchy | 8/10 |
| Contraste / Accessibilite | 5/15 |
| Trust signals & conversion | 3/15 |
| Navigation / internal linking | 12/10 |
| Compatibilite SEO technique | 8/10 |

### Problemes cles

- **H1 trop generique** : "Votre Partenaire de Croissance Digitale" — pas de mots-cles cibles (artisans, leads, marketing digital)
- **Aucune image hero** : Section hero = texte + cercle decoratif flou
- **Zero signaux de confiance** sur la homepage : pas de temoignages (composant DynamicTestimonial existe mais n'est PAS utilise), pas de logos clients, pas de badges
- **Contraste insuffisant** : `text-gray-400` (ratio ~3:1) et `text-gray-500` (ratio ~4.6:1) en dessous du WCAG AA
- **Bouton hamburger 40x40px** : En dessous du minimum 48x48px recommande
- **SVGs sans `aria-hidden`** : Les lecteurs d'ecran tentent de lire les paths SVG
- **Accents manquants** dans About.jsx : 7+ chaines non accentuees

---

## 7. AI Search Readiness (30/100)

- Pas de faits citables avec sources
- Pas de donnees originales ni recherche unique
- Schema manquant sur 18 pages
- Pas de markup auteur (Person schema)
- Pas de `datePublished`/`dateModified`
- Blog vide = zero contenu indexable pour l'IA

---

## Plan d'Action Priorise

### CRITIQUE — Corriger immediatement

| # | Action | Impact |
|---|--------|--------|
| 1 | **Migrer vers SSR/SSG** (Astro, Next.js, ou vite-plugin-ssr) | Fixe le CSR, les canonicals, les meta tags, le JSON-LD |
| 2 | **Ajouter mentions legales + politique RGPD** | Obligation legale LCEN |
| 3 | **Activer GA4 + Search Console** | Visibility sur le trafic et l'indexation |
| 4 | **Mettre a jour sitemap.xml** (23 URLs, supprimer /leads-*) | +17 pages decouvrables |
| 5 | **Supprimer FAQPage schema** (4 pages) | Nettoyage donnees structurees |

### HAUTE PRIORITE — Semaine 1-2

| # | Action | Impact |
|---|--------|--------|
| 6 | **React.lazy() + Suspense** pour code splitting | -60-70% bundle, LCP ameliore |
| 7 | **Lazy-load Cal.com** avec IntersectionObserver | -300KB sur le chemin critique |
| 8 | **Self-host les fonts** (Plus Jakarta Sans + Clash Display) | -2 DNS, CLS reduit |
| 9 | **Creer `_headers` Netlify** avec HSTS, CSP | Securite + trust signal |
| 10 | **Email pro** : `contact@agencecelexia.fr` | Credibilite |
| 11 | **Enrichir les 6 pages services** a 800+ mots | Contenu substantial |
| 12 | **Reecrire les 12 pages metiers** avec contenu unique 600+ mots | Anti-duplicate |

### MOYENNE PRIORITE — Mois 1

| # | Action | Impact |
|---|--------|--------|
| 13 | Ajouter schema Service sur les 18 pages | Rich results |
| 14 | Ajouter WebSite + ProfessionalService schema | Sitelinks search box |
| 15 | Corriger BreadcrumbList multi-niveaux | Navigation structuree |
| 16 | Ajouter width/height sur img + convertir en WebP | CLS + vitesse |
| 17 | Reecrire H1 homepage avec mots-cles | Pertinence SEO |
| 18 | Ajouter temoignages reels + logos clients | E-E-A-T |
| 19 | Ajouter photos + credentials fondateurs | Expertise |
| 20 | Fixer les accents manquants | Qualite contenu |

### BASSE PRIORITE — Backlog

| # | Action |
|---|--------|
| 21 | Publier de vrais articles de blog (1,500+ mots) ou supprimer la section |
| 22 | Corriger le contraste couleur (gray-400 -> gray-600) |
| 23 | Ajouter aria-hidden sur les SVGs decoratifs |
| 24 | Implementer IndexNow |
| 25 | Configurer manualChunks dans Vite |
| 26 | Supprimer les composants orphelins (Blog, Dashboard, HowItWorks, Pricing, WhyLSA) |
| 27 | Supprimer `<meta keywords>` (ignore depuis 2009) |

---

## Fichiers Cles References

| Fichier | Problemes |
|---------|-----------|
| `index.html` | Canonical hardcode, GA4 commente, meta keywords inutile |
| `src/App.jsx` | Zero code splitting, imports statiques de 28+ composants |
| `src/pages/Home.jsx` | Cal.com eager, H1 generique, pas de temoignages |
| `src/components/Header.jsx` | Logo sans width/height, scroll listener sans throttle |
| `src/components/Breadcrumbs.jsx` | Ne mappe que 6 chemins sur 23 |
| `src/hooks/useJsonLd.js` | Injection client-side = invisible sans JS |
| `src/hooks/usePageMeta.js` | Meta tags client-side = invisible sans JS |
| `src/pages/About.jsx` | FAQPage a supprimer, accents manquants |
| `public/sitemap.xml` | 6 URLs au lieu de 23, 3 URLs mortes |
| `public/robots.txt` | Bloque Ahrefs/Semrush, Crawl-delay inutile |
| `.htaccess` | Ignore par Netlify — headers non fonctionnels |
| `vite.config.js` | Pas de manualChunks, pas d'optimisation build |

---

*Rapport genere par Claude SEO — 6 agents paralleles*
*agencecelexia.fr | 2026-03-11*
