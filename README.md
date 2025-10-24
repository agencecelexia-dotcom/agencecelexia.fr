# Site Vitrine Local Service Ads pour Piscinistes

Site vitrine ultra-performant pour promouvoir l'offre Local Service Ads destinée aux professionnels de la piscine.

## 🎯 Description

Ce site a été conçu avec un copywriting percutant et une structure optimisée pour convertir les visiteurs en clients. Il explique les avantages des Local Service Ads par rapport à la publicité traditionnelle et guide les prospects vers la prise de rendez-vous.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v3** - Framework CSS utility-first
- **React Router** - Navigation multi-pages
- **Inter Font** - Typographie moderne de Google Fonts

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx      # Navigation principale
│   ├── Footer.jsx      # Pied de page
│   └── CTAButton.jsx   # Bouton d'appel à l'action
├── pages/              # Pages du site
│   ├── Home.jsx        # Page d'accueil
│   ├── HowItWorks.jsx  # Comment ça marche (3 étapes)
│   ├── WhyLSA.jsx      # Pourquoi les LSA
│   ├── Dashboard.jsx   # Dashboard de suivi
│   ├── Pricing.jsx     # Tarifs
│   ├── Blog.jsx        # Blog
│   └── Contact.jsx     # Contact + Calendly
├── App.jsx             # Composant principal avec Router
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux + Tailwind
```

## 🎨 Pages Principales

### 1. **Page d'accueil** (`/`)
- Hero section percutant
- Présentation du problème
- Solution avec Local Service Ads
- Preuves sociales et statistiques
- FAQ (gestion des objections)
- CTA final

### 2. **Comment ça marche** (`/comment-ca-marche`)
- 3 étapes détaillées :
  1. Audit de marché (gratuit)
  2. Configuration complète
  3. Suivi en temps réel

### 3. **Pourquoi les LSA** (`/pourquoi-les-lsa`)
- Tableau comparatif Pub traditionnelle vs LSA
- Badge Google Garanti
- Chiffres clés

### 4. **Dashboard** (`/dashboard`)
- Mockup du tableau de bord
- Explication des métriques
- Exemple concret de ROI

### 5. **Tarifs** (`/tarifs`)
- Frais de mise en place : 200€ HT
- Coût par appel : ~30€
- Exemple de calcul ROI

### 6. **Blog** (`/blog`)
- 7 articles suggérés (structure SEO)
- Catégories
- Newsletter

### 7. **Contact** (`/contact`)
- Intégration Calendly (placeholder)
- Formulaire de contact
- Informations de contact

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Configuration Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

- **primary-purple** : `#A78BFA` (violet clair)
- **dark-gray** : `#2D2D2D`
- **light-gray** : `#F5F5F5`

## 📝 Prochaines Étapes

### Intégration Calendly
Pour intégrer votre calendrier Calendly sur la page Contact :

1. Créez un compte sur [calendly.com](https://calendly.com)
2. Configurez un événement "Audit gratuit LSA" de 15 minutes
3. Installez le package Calendly pour React :
   ```bash
   npm install react-calendly
   ```
4. Remplacez le placeholder dans `src/pages/Contact.jsx` par :
   ```jsx
   import { InlineWidget } from 'react-calendly';

   <InlineWidget url="https://calendly.com/votre-lien" />
   ```

### Formulaire de Contact
Le formulaire actuel est statique. Pour le rendre fonctionnel :
- Intégrez un service comme [Formspree](https://formspree.io/)
- Ou configurez un backend avec [Netlify Forms](https://www.netlify.com/products/forms/)

### Analytics & SEO
- Ajoutez Google Analytics 4
- Configurez les meta tags pour le SEO
- Ajoutez un sitemap.xml
- Implémentez Schema markup

## 🌐 Déploiement

Le site peut être déployé sur :
- **Netlify** (recommandé, gratuit)
- **Vercel**
- **GitHub Pages**
- **Any static hosting**

```bash
# Builder le site
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

## 📞 Support

Pour toute question ou modification, contactez l'équipe de développement.

## 📄 Licence

Projet propriétaire - Tous droits réservés
