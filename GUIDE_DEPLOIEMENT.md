# 🚀 GUIDE SIMPLE : Comment Mettre Votre Site en Ligne

## 📋 Ce dont vous avez besoin :
- Un compte GitHub (gratuit) - si vous n'en avez pas déjà un
- 10 minutes de votre temps
- C'est tout ! 🎉

---

## 🎯 OPTION 1 : Netlify (LE PLUS SIMPLE - RECOMMANDÉ)

### Étape 1 : Créer un compte Netlify
1. Allez sur [netlify.com](https://www.netlify.com/)
2. Cliquez sur **"Sign up"**
3. Choisissez **"Sign up with GitHub"** (le plus simple)

### Étape 2 : Déployer votre site
1. Une fois connecté, cliquez sur **"Add new site"**
2. Choisissez **"Import an existing project"**
3. Sélectionnez **"Deploy with GitHub"**
4. Cherchez votre repository **"Site"** dans la liste
5. Sélectionnez la branche : `claude/local-service-ads-site-011CURiGSioj3AQTUabHbBf9`
6. Netlify va détecter automatiquement que c'est un projet Vite
7. Vérifiez les paramètres :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
8. Cliquez sur **"Deploy site"**

### Étape 3 : Attendre 2-3 minutes
Netlify va :
- Installer les dépendances
- Builder votre site
- Le publier automatiquement

### Étape 4 : Votre site est en ligne ! 🎉
Netlify vous donnera une URL comme : `https://random-name-123456.netlify.app`

### Étape 5 (Optionnel) : Personnaliser l'URL
Dans les settings Netlify :
1. Allez dans **"Site settings"** > **"Domain management"**
2. Cliquez sur **"Change site name"**
3. Choisissez un nom comme `local-service-ads-piscine`
4. Votre site sera sur : `https://local-service-ads-piscine.netlify.app`

---

## 🎯 OPTION 2 : Vercel (Alternative excellente)

### Étape 1 : Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com/)
2. Cliquez sur **"Sign up"**
3. Choisissez **"Continue with GitHub"**

### Étape 2 : Déployer
1. Cliquez sur **"Add New Project"**
2. Cliquez sur **"Import Git Repository"**
3. Sélectionnez votre repo **"Site"**
4. Sélectionnez la branche `claude/local-service-ads-site-011CURiGSioj3AQTUabHbBf9`
5. Vercel détecte automatiquement Vite
6. Cliquez sur **"Deploy"**

### Étape 3 : Site en ligne !
URL : `https://votre-site.vercel.app`

---

## 💻 TESTER LE SITE EN LOCAL (sur votre ordinateur)

Si vous voulez voir le site fonctionner sur votre ordinateur avant de le publier :

### 1. Ouvrir un terminal
- **Windows** : Appuyez sur `Win + R`, tapez `cmd`, Entrée
- **Mac** : Appuyez sur `Cmd + Espace`, tapez "Terminal", Entrée

### 2. Naviguer vers le dossier du site
```bash
cd chemin/vers/Site
```

### 3. Lancer le serveur
```bash
npm run dev
```

### 4. Ouvrir dans votre navigateur
Le terminal va afficher quelque chose comme :
```
Local:   http://localhost:5173/
```

Copiez cette URL dans votre navigateur Chrome/Firefox/Safari.

### 5. Arrêter le serveur
Appuyez sur `Ctrl + C` dans le terminal.

---

## 🆘 PROBLÈMES COURANTS

### "npm : commande introuvable"
➡️ Vous devez installer Node.js :
1. Allez sur [nodejs.org](https://nodejs.org/)
2. Téléchargez la version LTS (recommandée)
3. Installez-la
4. Redémarrez votre terminal
5. Retentez `npm run dev`

### "Le site affiche une page blanche"
➡️ Vérifiez que la branche déployée est bien :
`claude/local-service-ads-site-011CURiGSioj3AQTUabHbBf9`

### "Les liens ne fonctionnent pas sur Netlify"
➡️ C'est déjà configuré ! Le fichier `netlify.toml` gère ça.

### "Je veux changer les textes/couleurs"
➡️ Modifiez les fichiers dans `src/pages/` et `src/components/`
Puis :
```bash
git add .
git commit -m "Personnalisation du site"
git push
```
Netlify/Vercel va automatiquement redéployer.

---

## 📞 BESOIN D'AIDE ?

Si ça ne fonctionne toujours pas :
1. Copiez le message d'erreur
2. Envoyez-le moi avec une capture d'écran
3. Je vous aide à résoudre le problème !

---

## 🎉 APRÈS LE DÉPLOIEMENT

### Ajouter un nom de domaine personnalisé
Une fois que le site fonctionne sur Netlify/Vercel, vous pouvez :
1. Acheter un nom de domaine (ex: `localserviceads-piscine.fr`)
2. Le connecter à votre site Netlify/Vercel
3. Netlify/Vercel gère automatiquement le HTTPS (sécurisé)

### Connecter Calendly
1. Créez votre compte Calendly
2. Installez le package :
   ```bash
   npm install react-calendly
   ```
3. Modifiez `src/pages/Contact.jsx`
4. Committez et pushez

Le site se mettra à jour automatiquement ! 🚀

---

## ✅ CHECKLIST AVANT DE PARTAGER LE SITE

- [ ] Le site fonctionne en ligne
- [ ] J'ai testé tous les liens de navigation
- [ ] J'ai remplacé `contact@localserviceads.fr` par mon vrai email
- [ ] J'ai remplacé le numéro de téléphone placeholder
- [ ] J'ai connecté Calendly (ou désactivé la section)
- [ ] J'ai testé le formulaire de contact
- [ ] Le site s'affiche bien sur mobile
- [ ] Les couleurs correspondent à ma marque

---

**Voilà ! Vous êtes prêt à conquérir le marché des piscinistes ! 💪🏊‍♂️**
