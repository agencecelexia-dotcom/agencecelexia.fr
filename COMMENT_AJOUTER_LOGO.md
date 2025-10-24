# 🎨 Comment ajouter votre logo

## Option 1 : Fichier image (PNG, JPG, SVG)

### Étape 1 : Ajoutez votre fichier logo
1. Copiez votre fichier logo (ex: `logo.png`) dans le dossier `/public/`
2. Renommez-le simplement `logo.png` (ou gardez le nom que vous voulez)

### Étape 2 : Modifiez le fichier Header.jsx
Ouvrez le fichier : `src/components/Header.jsx`

Remplacez cette ligne (ligne 13-15) :
```jsx
<span className="text-2xl font-bold text-primary-purple">
  Agence Celexia
</span>
```

Par cette ligne :
```jsx
<img src="/logo.png" alt="Agence Celexia" className="h-12" />
```

**Note :** Ajustez `h-12` pour changer la taille (h-8, h-10, h-12, h-16, h-20, etc.)

---

## Option 2 : Logo SVG directement dans le code

Si vous avez un logo SVG, vous pouvez le coller directement dans le Header.

Remplacez le texte "Agence Celexia" par votre code SVG complet.

---

## ✅ Une fois que c'est fait

1. **Testez en local :**
   ```bash
   npm run dev
   ```
   Ouvrez http://localhost:5173 et vérifiez que le logo s'affiche bien

2. **Buildez :**
   ```bash
   npm run build
   ```

3. **Committez et pushez :**
   ```bash
   git add .
   git commit -m "feat: Add Agence Celexia logo"
   git push
   ```

4. **Netlify déploiera automatiquement** dans 2-3 minutes ! 🚀

---

## 📁 Où placer le logo ?

```
Site/
├── public/
│   └── logo.png  ← ICI !
└── src/
    └── components/
        └── Header.jsx  ← Modifier cette ligne
```

---

## ❓ Besoin d'aide ?

Si votre logo ne s'affiche pas, vérifiez :
- ✅ Le fichier est bien dans `/public/`
- ✅ Le nom du fichier correspond (logo.png, logo.svg, etc.)
- ✅ Vous avez rebuild après la modification
