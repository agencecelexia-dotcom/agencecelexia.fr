# Plan d'Action SEO — agencecelexia.fr

**Score actuel : 38/100**
**Objectif : 75/100 en 3 mois**

---

## Phase 1 — Urgences (Semaine 1)

### 1.1 Activer le tracking
- [ ] Configurer GA4 avec un vrai ID (remplacer `G-XXXXXXXXXX` dans `index.html`)
- [ ] Verifier le site dans Google Search Console (decommenter la meta verification)
- [ ] Soumettre le sitemap dans Search Console

### 1.2 Conformite legale
- [ ] Creer la page `/mentions-legales` (SIRET, RCS, adresse, directeur de publication)
- [ ] Creer la page `/politique-confidentialite` (RGPD)
- [ ] Ajouter les liens dans le footer

### 1.3 Sitemap
- [ ] Remplacer `public/sitemap.xml` avec les 23 URLs reelles
- [ ] Supprimer les 3 URLs mortes (`/leads-*`)
- [ ] Supprimer `<changefreq>` et `<priority>` (ignores par Google)

### 1.4 Schema cleanup
- [ ] Supprimer FAQPage schema de About.jsx et des 3 pages Leads
- [ ] Completer l'adresse dans Organization schema (rue, ville, CP)

---

## Phase 2 — Performance (Semaine 2-3)

### 2.1 Code splitting
- [ ] Remplacer les imports statiques dans `App.jsx` par `React.lazy()`
- [ ] Wrapper `<Routes>` avec `<Suspense fallback={...}>`

### 2.2 Fonts
- [ ] Telecharger Plus Jakarta Sans et Clash Display en WOFF2
- [ ] Self-host avec `@font-face` + `font-display: swap`
- [ ] Supprimer les liens Google Fonts et Fontshare de `index.html`

### 2.3 Cal.com
- [ ] Charger l'embed Cal.com avec Intersection Observer (lazy)
- [ ] Ajouter un skeleton/placeholder pendant le chargement

### 2.4 Images
- [ ] Ajouter `width` et `height` sur les `<img>` du logo (Header + Footer)
- [ ] Convertir `logo.png` en WebP
- [ ] Creer une vraie OG image 1200x630px

### 2.5 Headers Netlify
- [ ] Creer `public/_headers` avec HSTS, CSP, Permissions-Policy
- [ ] Supprimer `.htaccess` (inutile sur Netlify)

### 2.6 Build Vite
- [ ] Ajouter `manualChunks` dans `vite.config.js` (vendor chunk)
- [ ] Supprimer `src/App.css` (boilerplate inutilise)

---

## Phase 3 — Contenu (Semaine 3-6)

### 3.1 Pages services (x6) — objectif 800+ mots chacune
- [ ] `/services/publicite-performance` — ajouter methodologie, processus, exemples
- [ ] `/services/site-web` — ajouter portfolio, technologies, processus
- [ ] `/services/seo` — ajouter strategie, outils, resultats types
- [ ] `/services/avis-clients` — ajouter methode, plateformes, ROI
- [ ] `/services/emailing` — ajouter workflows, segmentation, metrics
- [ ] `/services/automatisation` — ajouter cas d'usage, outils, integration

### 3.2 Pages metiers (x12) — objectif 600+ mots, contenu UNIQUE par metier
- [ ] Chaque page doit avoir : defis specifiques au metier, solutions adaptees, etude de cas, chiffres du secteur, FAQ specifique
- [ ] Eliminer le pattern template-swap (juste changer le nom du metier)

### 3.3 Homepage — objectif 500+ mots
- [ ] Reecrire le H1 avec mots-cles (ex: "Plus de Clients pour Votre Entreprise d'Artisanat")
- [ ] Ajouter section temoignages reels (utiliser DynamicTestimonial.jsx)
- [ ] Ajouter logos clients ou compteur "X artisans accompagnes"
- [ ] Enrichir la section services avec du texte descriptif

### 3.4 Blog
- [ ] Publier au minimum 3 articles de 1,500+ mots OU supprimer la section blog

### 3.5 Trust signals
- [ ] Email pro : `contact@agencecelexia.fr`
- [ ] Photos + noms complets + LinkedIn des fondateurs
- [ ] Certifications / badges (Google Partner si applicable)
- [ ] Vrais temoignages clients avec nom, entreprise, photo

---

## Phase 4 — Schema & Structure (Semaine 4-8)

### 4.1 Schema enrichi
- [ ] Homepage : `@graph` avec `WebSite` + `ProfessionalService` + `ContactPoint`
- [ ] Chaque page service : schema `Service` avec provider `@id`
- [ ] Chaque page metier : schema `Service` specifique au metier
- [ ] About : schema `Person` pour Thomas et Antoine
- [ ] Corriger BreadcrumbList pour chemins multi-niveaux

### 4.2 Accessibilite
- [ ] Corriger contraste : `text-gray-400` -> `text-gray-600` minimum
- [ ] Ajouter `aria-hidden="true"` sur les SVGs decoratifs
- [ ] Ajouter `aria-expanded` sur les boutons FAQ
- [ ] Augmenter touch targets hamburger a 48x48px

### 4.3 Corrections
- [ ] Fixer les accents manquants dans About.jsx et autres pages
- [ ] Supprimer `<meta keywords>` de `index.html`
- [ ] Supprimer les composants orphelins (Blog, Dashboard, HowItWorks, Pricing, WhyLSA)
- [ ] Router ou supprimer les pages `/leads-*`

---

## Phase 5 — SSR Migration (Mois 2-3)

### Option A : Astro (recommande)
- [ ] Migrer vers Astro avec islands React
- [ ] SSG pour les pages statiques, SSR pour les pages dynamiques
- [ ] Meta tags et JSON-LD dans le HTML serveur

### Option B : Next.js
- [ ] Migrer vers Next.js App Router
- [ ] `generateStaticParams` pour metiers et services
- [ ] Metadata API pour les meta tags

### Option C : Prerendering (interim)
- [ ] Installer `vite-plugin-prerender`
- [ ] Prerender les 23 routes principales
- [ ] Configurer les meta tags statiques par route

---

## Metriques de suivi

| Metrique | Actuel | Objectif M+1 | Objectif M+3 |
|----------|--------|-------------|-------------|
| Score SEO global | 38 | 55 | 75 |
| Pages indexees (GSC) | ~2 | 15 | 23+ |
| LCP | 3.5-5.5s | <3.0s | <2.5s |
| CLS | 0.15-0.35 | <0.15 | <0.1 |
| INP | 100-180ms | <150ms | <100ms |
| Mots/page service | ~350 | 600 | 800+ |
| Mots/page metier | ~200 | 400 | 600+ |
| Pages avec schema | 5 | 15 | 23 |

---

*Plan genere le 2026-03-11 — Claude SEO*
