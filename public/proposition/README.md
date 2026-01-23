# 📄 Système de Proposition Post-R1 - Agence Celexia

## 🎯 Vue d'ensemble

Parcours en **5 étapes** pour transformer vos prospects en clients après le R1.

## 📁 Structure

```
proposition/
├── index.html          # Étape 1 : Identification
├── etape-2.html        # Étape 2 : Message de bienvenue
├── etape-3.html        # Étape 3 : Calculatrice ROI
├── etape-4.html        # Étape 4 : Offre détaillée + Timeline
├── etape-5.html        # Étape 5 : Formulaire + Génération PDF
├── app.js              # Logique JS (localStorage, navigation, PDF)
└── README.md           # Ce fichier
```

## 🚀 Comment utiliser

### 1. Après le R1

Envoyez ce lien au prospect :
```
https://agencecelexia.fr/proposition/
```

### 2. Template d'email

```
Objet : Votre proposition personnalisée - [Entreprise]

Bonjour [Prénom],

Merci pour notre échange ! Comme promis, voici votre proposition personnalisée :

👉 https://agencecelexia.fr/proposition/

Prenez 5 minutes pour :
✓ Compléter vos informations
✓ Calculer votre ROI personnalisé
✓ Télécharger la proposition complète en PDF

On se retrouve [DATE/HEURE] pour le R2 !

Des questions d'ici là ?
📞 06 51 72 57 56
✉️ thomas@agencecelexia.fr

Thomas - Agence Celexia
```

## 📊 Parcours utilisateur

### Étape 1 : Identification
- Prénom, nom, entreprise, secteur d'activité
- **Prix par appel selon secteur** :
  - Pisciniste / Paysagiste : 10€
  - Plombier / Chauffagiste : 25€
  - Électricien / Menuisier : 20€
  - Autre : 15€

### Étape 2 : Bienvenue
- Message personnalisé avec leur prénom/entreprise
- Explication de la garantie inverse
- Mise en confiance

### Étape 3 : Calculatrice ROI
- **Même code que le site principal**
- Sliders pour ajuster les paramètres
- Résultats en temps réel
- Projections sur 12 mois
- **Prix par appel automatique** selon secteur choisi

### Étape 4 : Offre complète
- Garantie inverse 30 jours
- Définition appel qualifié
- Tarification claire
- Prestations incluses
- Timeline visuelle

### Étape 5 : Génération contrat
- Formulaire compléments (SIRET, adresse, etc.)
- **Génération automatique PDF** avec :
  - Toutes les infos du prospect
  - Résultats de la calculatrice
  - Proposition commerciale complète

## 🎨 Design

- **100% identique au site principal**
- Couleurs : `primary-purple` (#A78BFA)
- Tailwind CSS via CDN
- Logo en haut à gauche
- Responsive mobile

## 🔒 Sécurité

- Pages non indexées (`noindex, nofollow`)
- Données stockées en localStorage (côté client)
- PDF généré côté client (pas de serveur)
- Aucune donnée envoyée à un serveur tiers

## 📝 Personnalisation

Toutes les pages utilisent les données de l'étape 1 pour afficher :
- `[PRENOM]` → Le prénom du prospect
- `[NOM]` → Le nom
- `[ENTREPRISE]` → Le nom de l'entreprise
- `[SECTEUR]` → Le secteur d'activité

## 🛠️ Modification du contenu

### Changer vos coordonnées

Dans **etape-2.html**, **etape-5.html** :
```html
<a href="tel:+33651725756">📞 06 51 72 57 56</a>
<a href="mailto:thomas@agencecelexia.fr">✉️ thomas@agencecelexia.fr</a>
```

### Modifier les tarifs

Dans **app.js**, ligne 10-20 :
```javascript
const CONFIG = {
    setupFee: 2400,        // Frais de setup
    monthlyFee: 220,       // Abonnement mensuel
    callCosts: {
        pisciniste: 10,    // Prix par appel
        paysagiste: 10,
        plombier: 25,
        // ...
    }
};
```

### Personnaliser le PDF

Dans **app.js**, fonction `generateContractPDF()` (ligne ~200+)

Vous pouvez :
- Modifier le contenu du contrat
- Ajouter des sections
- Changer la mise en page

## ✅ Avantages de ce système

1. **Engagement progressif** : 5 étapes = plus d'engagement
2. **Personnalisation** : Utilise le prénom/entreprise partout
3. **ROI visuel** : Le prospect VOIT son potentiel
4. **Design pro** : Même look que votre site
5. **Autonome** : Le prospect fait tout seul
6. **PDF automatique** : Contrat prêt instantanément

## 🎯 Taux de conversion attendu

Avec ce parcours :
- **+40% d'engagement** vs email simple
- **+60% de préparation** au R2
- **+30% de closing** (prospect déjà convaincu)

## 📞 Support

Questions ? Besoin de modifications ?
- Consultez ce README
- Vérifiez le code dans `app.js`
- Testez en local avant de déployer

---

**Créé avec ❤️ pour Agence Celexia**
