# 📄 Page de Proposition Personnalisée - Agence Celexia

## 🎯 Objectif

Cette page de proposition est conçue pour être envoyée aux prospects entre le R1 (rendez-vous de découverte) et le R2 (rendez-vous de closing) afin de maximiser les conversions.

## 📁 Structure des Fichiers

```
public/proposition/
├── index.html              # Template de base (générique)
├── style.css              # Styles CSS (partagés par toutes les pages)
├── script.js              # JavaScript (calculatrice ROI + génération PDF)
├── README.md              # Ce fichier
└── exemple-prospect/      # Exemple de page personnalisée
    └── index.html         # Page personnalisée pour "Jean Dupont - Piscines Azur"
```

## 🚀 Comment Créer une Nouvelle Page Personnalisée

### Méthode 1 : Créer un Dossier par Prospect (Recommandé)

1. **Créer un nouveau dossier** dans `public/proposition/` avec le nom du prospect :
   ```bash
   mkdir public/proposition/jean-dupont-piscines-azur
   ```

2. **Copier le template** :
   ```bash
   cp public/proposition/index.html public/proposition/jean-dupont-piscines-azur/index.html
   ```

3. **Personnaliser la page** :
   - Ouvrir `public/proposition/jean-dupont-piscines-azur/index.html`
   - Modifier les éléments suivants :

   ```html
   <!-- Titre de la page -->
   <title>Proposition pour Jean Dupont - Agence Celexia</title>

   <!-- Hero Section -->
   <h1 class="hero-title">Bonjour <span class="highlight">Jean</span> !</h1>
   <p class="hero-subtitle">Voici votre proposition personnalisée pour Piscines Azur</p>

   <!-- Pré-remplir le formulaire (optionnel) -->
   <input type="text" id="company-name" value="Piscines Azur" required>
   <input type="text" id="manager-name" value="Jean Dupont" required>
   <select id="sector">
       <option value="pisciniste" selected>Pisciniste</option>
   </select>
   ```

4. **Corriger les chemins des fichiers CSS/JS** :
   ```html
   <link rel="stylesheet" href="../style.css">
   <script src="../script.js"></script>
   ```

5. **Envoyer l'URL personnalisée au prospect** :
   ```
   https://agencecelexia.fr/proposition/jean-dupont-piscines-azur
   ```

### Méthode 2 : Utiliser des Paramètres URL (Alternative Simple)

Si vous ne voulez pas créer un dossier par prospect, vous pouvez utiliser la page générique avec des paramètres URL :

```
https://agencecelexia.fr/proposition/?nom=Jean&entreprise=Piscines%20Azur
```

Le JavaScript récupérera automatiquement le nom depuis l'URL et personnalisera la page.

## ✨ Fonctionnalités Incluses

### 1. Calculatrice ROI Interactive
- Sliders pour ajuster les paramètres (appels, conversion, panier moyen)
- Calculs en temps réel du CA, ROI, et bénéfice net
- Mise à jour automatique de tous les résultats

### 2. Bloc ROI Dynamique
Génère automatiquement un texte personnalisé selon le ROI calculé :
- **ROI > 500%** : Texte ultra-positif sur la rentabilité immédiate
- **ROI 200-500%** : Texte positif avec focus sur le risque zéro
- **ROI < 200%** : Texte rassurant sur la garantie et l'accompagnement

### 3. Timeline de Rentabilité Visuelle
- Affichage chronologique des étapes (J0, J1-15, J30, Après J30)
- Mise en avant de la rentabilité AVANT paiement
- Design moderne avec icônes

### 4. Formulaire de Génération de Contrat
Champs inclus :
- Nom de l'entreprise
- SIRET (avec validation 14 chiffres)
- Nom & Prénom du dirigeant
- Email
- Téléphone
- Secteur d'activité (dropdown)
- Adresse complète
- Zone géographique d'intervention

### 5. Génération PDF Automatique
- Utilise la librairie **jsPDF**
- Contrat complet pré-rempli avec toutes les clauses légales
- Téléchargement automatique au format PDF
- Nom de fichier personnalisé : `Contrat_Celexia_[Entreprise]_[Date].pdf`

### 6. Design Responsive
- 100% mobile-friendly
- Design moderne et professionnel
- Palette de couleurs cohérente (bleu confiance + touches énergiques)
- Animations et transitions fluides

## 📧 Workflow d'Utilisation

1. **Après le R1**, créer une page personnalisée pour le prospect
2. **Envoyer l'URL** par email ou SMS avec ce template :

```
Bonjour Jean,

Comme promis, voici le récap de notre échange + la simulation
personnalisée pour Piscines Azur :

👉 https://agencecelexia.fr/proposition/jean-dupont-piscines-azur

Vous y trouverez :
✓ La calculatrice ROI avec vos chiffres
✓ Le contrat pré-rempli à télécharger
✓ Tous les détails de l'offre 30 jours

On se voit [date/heure] pour le R2 !

Thomas - Agence Celexia
```

3. **Le prospect** :
   - Explore la page à son rythme
   - Joue avec la calculatrice ROI
   - Voit sa rentabilité projetée
   - Remplit le formulaire
   - Télécharge son contrat

4. **Au R2** :
   - Le prospect arrive préparé
   - Contrat déjà lu et compris
   - Questions précises
   - Closing facilité

## 🔒 Sécurité et Confidentialité

- **Page non indexée** : `<meta name="robots" content="noindex, nofollow">`
- **Aucun lien** depuis le site principal (menu, footer, etc.)
- **Accessible uniquement via URL directe**
- Les données du formulaire restent locales (génération PDF côté client)

## 🎨 Personnalisation Avancée

### Modifier les Tarifs

Si vous changez vos tarifs, modifiez les constantes dans `script.js` :

```javascript
const CONFIG = {
    setupFee: 2400,    // Frais de setup en €
    monthlyFee: 220,   // Abonnement mensuel en €
    defaultCalls: 20,
    defaultConversion: 25,
    defaultBasket: 15000
};
```

### Modifier les Couleurs

Les couleurs sont définies dans `style.css` via les variables CSS :

```css
:root {
    --primary-blue: #2563EB;
    --primary-blue-dark: #1E40AF;
    --accent-purple: #A78BFA;
    --accent-green: #10B981;
    --accent-orange: #F59E0B;
}
```

### Modifier le Lien Cal.com

Dans le fichier HTML, cherchez :

```html
<a href="https://cal.com/agencecelexia/r2-closing" ...>
```

Et remplacez par votre lien de réservation R2.

## 📊 Analytics (Optionnel)

Pour tracker les visites et interactions, décommentez la section Analytics dans `script.js` et ajoutez votre code de suivi Google Analytics.

## 🛠️ Build et Déploiement

Les fichiers dans `public/` sont automatiquement copiés lors du build Vite :

```bash
npm run build
```

Le dossier `dist/proposition/` contiendra alors toutes vos pages de proposition, prêtes à être déployées.

## 🚨 Important : Informations à Compléter

Avant d'envoyer des propositions réelles, pensez à :

1. **Remplacer les placeholders** dans le contrat PDF :
   - SIRET de Agence Celexia
   - Adresse de Agence Celexia
   - Coordonnées bancaires (si nécessaire)

2. **Mettre à jour les coordonnées de contact** :
   - Numéro de téléphone réel
   - Email réel
   - Lien Cal.com configuré

3. **Valider le contrat** avec un juriste si nécessaire

## 📝 Licence

Propriétaire - Tous droits réservés - Agence Celexia © 2026
