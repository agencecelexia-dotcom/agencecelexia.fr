# ⚡ QUICK START - Déployer ton site SEO optimisé

## 3 commandes pour tester en local

```bash
# 1. Build
npm run build

# 2. Preview
npm run preview

# 3. Ouvre http://localhost:4173 et vérifie :
# ✅ URLs: /about (pas /#/about)
# ✅ Page 404: Va sur /fake-page
# ✅ Breadcrumbs: Visibles sur /about et /contact
# ✅ Pas d'erreurs console
```

---

## 🚀 Déployer sur ton serveur

### Si tu as un serveur Apache:

```bash
# 1. Build
npm run build

# 2. Uploader le dossier dist/ via FTP
# 3. Uploader le fichier dist/.htaccess aussi
# 4. Vérifier que mod_rewrite est activé
```

### Si tu utilises Netlify (plus facile):

```bash
# 1. Connecte ton repo à Netlify
# 2. C'est tout! Netlify fait le reste automatiquement
```

---

## ✅ Après déploiement

1. **Google Search Console**
   - Va sur: https://search.google.com/search-console
   - Ajoute ton domaine
   - Soumets le sitemap: https://agence-celexia.fr/sitemap.xml

2. **Test chaque page**
   - https://agence-celexia.fr/
   - https://agence-celexia.fr/about
   - https://agence-celexia.fr/contact
   - Clique "Request Indexing"

3. **Valide les schémas**
   - Va sur: https://validator.schema.org
   - Copie le code source de chaque page
   - Vérifie qu'il y a des schémas JSON-LD

4. **Test Lighthouse**
   - Ouvre chaque page
   - F12 > Lighthouse > Audit
   - Cible: SEO score > 90

---

## 📊 Score attendu après déploiement

```
Avant:  52/100
Après: 85-95/100  🎉
```

---

**C'est tout! Ton site est SEO-optimisé! 🚀**

Besoin d'aide? Regarde les fichiers:
- `SEO_DEPLOYMENT_GUIDE.md` - Guide complet
- `SEO_CHANGES_SUMMARY.md` - Tous les changements
- `SEO_AUDIT_REPORT.md` - L'audit initial
