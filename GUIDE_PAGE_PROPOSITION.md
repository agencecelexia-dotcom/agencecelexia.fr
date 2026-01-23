# 🚀 Guide d'Utilisation - Page de Proposition Celexia

## 📋 Vue d'Ensemble

Une page de proposition complète a été créée pour votre processus de closing post-R1. Elle inclut :
- ✅ Calculatrice ROI interactive
- ✅ Texte ROI dynamique (s'adapte automatiquement)
- ✅ Timeline de rentabilité visuelle
- ✅ Formulaire de génération de contrat
- ✅ Génération PDF automatique
- ✅ Design 100% responsive et professionnel

## 🌐 URLs d'Accès

### Page de démonstration
Vous pouvez voir la page en action ici :
```
https://agencecelexia.fr/proposition/
```

### Exemple personnalisé (Jean Dupont - Piscines Azur)
```
https://agencecelexia.fr/proposition/exemple-prospect/
```

## 📝 Comment Créer une Nouvelle Proposition

### Option 1 : Page Personnalisée (Recommandé pour les prospects importants)

**Étape 1 : Créer le dossier du prospect**
```bash
cd public/proposition
mkdir jean-martin-piscines-bleues
```

**Étape 2 : Copier le template**
```bash
cp index.html jean-martin-piscines-bleues/index.html
```

**Étape 3 : Personnaliser la page**

Ouvrez `public/proposition/jean-martin-piscines-bleues/index.html` et modifiez :

```html
<!-- 1. Le titre de la page -->
<title>Proposition pour Jean Martin - Agence Celexia</title>

<!-- 2. Le nom dans la Hero Section -->
<h1 class="hero-title">Bonjour <span class="highlight">Jean</span> !</h1>
<p class="hero-subtitle">Voici votre proposition personnalisée pour Piscines Bleues</p>

<!-- 3. (Optionnel) Pré-remplir le formulaire -->
<input type="text" id="company-name" value="Piscines Bleues" required>
<input type="text" id="manager-name" value="Jean Martin" required>
<select id="sector">
    <option value="pisciniste" selected>Pisciniste</option>
</select>

<!-- 4. IMPORTANT : Corriger les chemins CSS/JS -->
<link rel="stylesheet" href="../style.css">
<!-- En bas de page : -->
<script src="../script.js"></script>
```

**Étape 4 : Déployer**
```bash
npm run build
# Puis déployer normalement (GitHub Pages, Netlify, etc.)
```

**Étape 5 : Envoyer l'URL au prospect**
```
https://agencecelexia.fr/proposition/jean-martin-piscines-bleues/
```

### Option 2 : Utiliser la Page Générique avec Paramètres URL (Rapide)

Pour gagner du temps, utilisez directement la page générique avec le nom en paramètre :

```
https://agencecelexia.fr/proposition/?nom=Jean&entreprise=Piscines%20Bleues
```

Le JavaScript personnalisera automatiquement le titre avec le nom du prospect.

## 📧 Template d'Email à Envoyer

Après votre R1, envoyez cet email au prospect :

```
Objet : Votre proposition personnalisée - [Nom Entreprise]

Bonjour [Prénom],

Merci pour notre échange de ce matin ! Comme promis, voici le récap
complet de notre discussion + votre simulation personnalisée :

👉 [LIEN DE LA PAGE]

Sur cette page, vous trouverez :

✓ Une calculatrice ROI interactive (ajustez les paramètres selon votre activité)
✓ Le détail complet de notre offre Garantie Inverse 30 jours
✓ Votre timeline de rentabilité
✓ Le formulaire pour générer votre contrat personnalisé en PDF

N'hésitez pas à jouer avec la calculatrice pour voir l'impact sur
votre rentabilité selon différents scénarios.

On se retrouve [DATE ET HEURE] pour le R2 et répondre à toutes vos questions !

Des questions d'ici là ? Répondez simplement à cet email ou appelez-moi
au [VOTRE TÉLÉPHONE].

À très vite,

Thomas
Agence Celexia
[TÉLÉPHONE]
[EMAIL]
```

## 🎯 Fonctionnalités Clés

### 1. Calculatrice ROI
- Sliders pour ajuster : nombre d'appels, taux de conversion, panier moyen
- Calculs automatiques en temps réel
- Affichage du CA mensuel, ROI %, et bénéfice net

### 2. Texte ROI Dynamique
Le texte s'adapte automatiquement selon le ROI calculé :
- **ROI > 500%** → Message ultra-positif sur rentabilité immédiate
- **ROI 200-500%** → Focus sur le risque zéro
- **ROI < 200%** → Rassurant sur la garantie et l'accompagnement

### 3. Timeline Visuelle
- Montre clairement la rentabilité AVANT paiement
- Design moderne avec icônes
- Responsive mobile

### 4. Génération de Contrat PDF
- Le prospect remplit le formulaire
- Clic sur "Générer mon contrat"
- PDF téléchargé automatiquement avec toutes les clauses
- Nom du fichier : `Contrat_Celexia_[Entreprise]_[Date].pdf`

## ⚙️ Personnalisation

### Modifier les Tarifs

Si vous changez vos prix, éditez `public/proposition/script.js` :

```javascript
const CONFIG = {
    setupFee: 2400,      // Votre nouveau prix de setup
    monthlyFee: 220,     // Votre nouvel abonnement mensuel
    defaultCalls: 20,
    defaultConversion: 25,
    defaultBasket: 15000
};
```

### Modifier le Lien de Réservation R2

Dans les fichiers HTML, cherchez :
```html
<a href="https://cal.com/agencecelexia/r2-closing" ...>
```

Et remplacez par votre vrai lien Cal.com (ou Calendly).

### Modifier les Coordonnées de Contact

Cherchez et remplacez dans les fichiers HTML :
```html
<a href="tel:+33612345678">📞 06 12 34 56 78</a>
<a href="mailto:thomas@agencecelexia.fr">✉️ thomas@agencecelexia.fr</a>
```

## 🚨 IMPORTANT : Avant de Lancer en Production

### 1. Compléter les Informations de l'Agence

Dans `public/proposition/script.js`, ligne ~390 (fonction `generateContractPDF`), remplacez :

```javascript
addText('Agence Celexia', 11, 'normal');
addText('SIRET : [À COMPLÉTER]', 10, 'normal');  // ← Ajoutez votre SIRET
addText('Adresse : [À COMPLÉTER]', 10, 'normal'); // ← Ajoutez votre adresse
```

Par vos vraies informations :

```javascript
addText('Agence Celexia', 11, 'normal');
addText('SIRET : 123 456 789 00012', 10, 'normal');
addText('Adresse : 123 Rue Exemple, 34000 Montpellier', 10, 'normal');
```

### 2. Vérifier les Clauses du Contrat

Le contrat PDF généré contient toutes les clauses légales. **Faites-le relire par un juriste** avant de l'envoyer à de vrais clients !

### 3. Tester la Page Localement

Avant de déployer :
```bash
npm run dev
```

Puis ouvrez : `http://localhost:5173/proposition/`

Testez :
- ✅ La calculatrice fonctionne
- ✅ Le texte ROI s'adapte
- ✅ Le formulaire se valide correctement
- ✅ Le PDF se génère et se télécharge
- ✅ Tout est responsive (testez sur mobile)

## 🔒 Sécurité

- **Page non indexée** : `<meta name="robots" content="noindex, nofollow">`
- **Aucun lien** depuis le site principal
- **Accessible uniquement via URL directe**
- **Données du formulaire** : Restent locales (PDF généré côté client, aucune donnée envoyée au serveur)

## 📊 Tracking (Optionnel)

Si vous voulez tracker les visites sur ces pages, ajoutez Google Analytics dans `public/proposition/script.js` (section commentée en bas du fichier).

## 🛠️ Déploiement

Chaque fois que vous créez une nouvelle page personnalisée :

```bash
# 1. Créer la page dans public/proposition/
# 2. Builder le projet
npm run build

# 3. Les fichiers sont dans dist/ et prêts à être déployés
# 4. GitHub Pages, Netlify, Vercel déploieront automatiquement
```

## ❓ FAQ

### Comment supprimer une page de proposition ?
Supprimez simplement le dossier dans `public/proposition/[nom-prospect]/`

### Puis-je modifier les couleurs ?
Oui ! Éditez `public/proposition/style.css` et modifiez les variables CSS en haut du fichier.

### Le PDF ne se génère pas, pourquoi ?
Vérifiez que la librairie jsPDF est bien chargée. Le lien CDN est dans le HTML :
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

### Comment changer le logo ?
Remplacez le fichier `public/logo.png` par votre nouveau logo.

## 📞 Support

Pour toute question sur cette page de proposition :
- Consultez `public/proposition/README.md` (documentation technique)
- Vérifiez l'exemple dans `public/proposition/exemple-prospect/`

---

**Bonne chance pour vos closings ! 🚀**

*Agence Celexia - 2026*
