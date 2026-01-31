# 🚀 GUIDE DE DÉPLOIEMENT SEO - Agence Celexia

## Changements Effectués

### ✅ Fichiers Créés
- `public/robots.txt` - Guide pour les moteurs de recherche
- `public/sitemap.xml` - Liste de toutes les pages
- `public/manifest.json` - Configuration PWA/App
- `public/.htaccess` - Configuration serveur (Apache)
- `src/hooks/usePageMeta.js` - Hook pour les métadonnées dynamiques
- `src/hooks/useJsonLd.js` - Hook pour schémas JSON-LD
- `src/pages/NotFound.jsx` - Page 404 personnalisée
- `src/components/Breadcrumbs.jsx` - Navigation par miettes de pain

### ✅ Fichiers Modifiés
- `index.html` - Ajout des métadonnées, Open Graph, Twitter Card
- `src/App.jsx` - BrowserRouter au lieu de HashRouter, ajout page 404 et breadcrumbs
- `src/pages/Home.jsx` - Métadonnées + schémas JSON-LD
- `src/pages/About.jsx` - Métadonnées + schéma FAQ
- `src/pages/Contact.jsx` - Métadonnées
- `src/components/Header.jsx` - Optimisation image avec alt text
- `src/components/Footer.jsx` - Optimisation image avec alt text
- `vite.config.js` - Configuration pour production optimisée

---

## 📋 AVANT DE DÉPLOYER

### 1. Vérifier la build locale

```bash
# Installer les dépendances (si pas déjà fait)
npm install

# Build le projet
npm run build

# Test local
npm run preview
```

Puis ouvrir `http://localhost:4173` et vérifier :
- ✅ Les URLs sont `/about`, `/contact` (pas `/#/about`)
- ✅ Les breadcrumbs apparaissent
- ✅ La page 404 marche (`http://localhost:4173/fake-page`)
- ✅ Pas de console errors

### 2. Vérifier les métadonnées

Ouvrir chaque page et faire clic droit > Inspecter :
```html
<!-- Chaque page doit avoir -->
<title>Titre unique</title>
<meta name="description" content="Description unique">
<meta property="og:title" content="Titre">
<meta property="og:description" content="Description">
<link rel="canonical" href="https://agence-celexia.fr/PAGE">
```

### 3. Valider les schémas JSON-LD

Aller sur https://validator.schema.org et copier le code source de chaque page.
Vérifier qu'il y a au moins :
- ✅ Organization schema
- ✅ Service schema
- ✅ BreadcrumbList (sur pages non-home)
- ✅ FAQPage (sur page about)

---

## 🌐 DÉPLOYER SUR VOTRE SERVEUR

### Option A : Serveur Apache (avec SSH)

1. **Build le projet**
```bash
npm run build
```

2. **Uploader les fichiers du dossier `dist/` sur votre serveur**

3. **Assurez-vous que `.htaccess` est uploadé** dans le dossier racine

4. **Vérifier que `mod_rewrite` est activé** :
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```

### Option B : Serveur Node.js (Recommended)

**Installer un serveur static :**
```bash
npm install -g serve
```

**Déployer :**
```bash
npm run build
serve -s dist
```

### Option C : Netlify (Plus facile)

1. Connectez le repo GitHub à Netlify
2. Configuration auto-détectée
3. Push sur main, Netlify déploie automatiquement

---

## 🔍 APRÈS LE DÉPLOIEMENT

### 1. Soumettre le sitemap à Google

1. Aller à https://search.google.com/search-console
2. Ajouter votre domaine
3. Aller à "Sitemaps"
4. Ajouter : `https://agence-celexia.fr/sitemap.xml`

### 2. Tester avec Google Lighthouse

1. Ouvrir chaque page en incognito
2. Ouvrir DevTools > Lighthouse
3. Auditer pour Performance, Accessibility, Best Practices, SEO
4. Corriger les erreurs (cible : 90+ score)

### 3. Tester les URL en Search Console

1. Aller à "URL Inspection"
2. Tester : `https://agence-celexia.fr/`
3. Tester : `https://agence-celexia.fr/about`
4. Tester : `https://agence-celexia.fr/contact`
5. Clicker "Request Indexing" pour chacune

### 4. Vérifier les métadonnées sur réseaux sociaux

**Facebook :** https://developers.facebook.com/tools/debug/
**Twitter :** https://cards-dev.twitter.com/validator
**LinkedIn :** Juste partager le lien

---

## 🚨 CHECKLIST FINALE

- [ ] `npm run build` réussit sans erreurs
- [ ] `npm run preview` fonctionne localement
- [ ] URLs sans `#/` (`/about` pas `/#/about`)
- [ ] Page 404 personnalisée marche
- [ ] Breadcrumbs visibles sur pages non-home
- [ ] Métadonnées différentes par page
- [ ] Schémas JSON-LD valides (validator.schema.org)
- [ ] `.htaccess` uploadé sur serveur
- [ ] HTTP redirige vers HTTPS
- [ ] Sitemap.xml accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] Google Search Console reconnaît le site
- [ ] Lighthouse score > 90 pour SEO
- [ ] Images ont alt text
- [ ] Pas de console errors en production

---

## 📊 RÉSULTATS ATTENDUS

Après déploiement, vous devriez voir :

1. **Immédiat (1-7 jours)**
   - Google reconnaît votre site comme une SPA React
   - Les pages sont crawlées correctement
   - Les schémas JSON-LD s'affichent dans les résultats

2. **Court terme (2-4 semaines)**
   - Amélioration du classement pour vos mots-clés
   - Meilleur taux de clic depuis Google
   - Pages indexées correctement

3. **Long terme (1-3 mois)**
   - Classement #1-3 pour vos mots-clés principaux
   - Augmentation du trafic organique
   - Meilleur positionnement Local Service Ads

---

## 🔧 OPTIMISATIONS FUTURES

### À faire dans les prochaines semaines :

1. **Ajouter un blog**
   - Pages par métier (plombier, électricien, etc.)
   - Pages par région
   - Contenu long-form (> 1500 mots)

2. **Créer des landing pages**
   - `/leads-plombiers`
   - `/leads-electriciens`
   - `/leads-paris` (par région)

3. **Ajouter Google Analytics**
   ```bash
   npm install react-ga4
   ```

4. **Améliorer la performance**
   - Image optimization
   - Code splitting
   - Lazy loading sections

5. **Ajouter des backlinks**
   - Contacter des annuaires d'artisans
   - Partenariats avec sites pertinents
   - Mentions dans les forums/communautés

---

## 📞 BESOIN D'AIDE ?

Si quelque chose ne marche pas :

1. **Vérifier les logs serveur** (panneau de contrôle hébergement)
2. **Tester avec `curl`** : `curl -I https://agence-celexia.fr/about`
3. **Utiliser Google Search Console** pour les erreurs crawl
4. **Valider le HTML** : https://validator.w3.org/

---

**Date de mise à jour :** 31 janvier 2026
**Version SEO :** 1.0
**Score SEO avant :** 52/100
**Score SEO attendu après :** 85-95/100

🎉 Bon déploiement !
