# 🚀 Guide de Démarrage Rapide

## Étape 1 : Récupérer l'API Key N8N

1. **Connectez-vous à votre instance N8N :**
   👉 https://n8n.srv1241880.hstgr.cloud

2. **Naviguez vers Settings → API**

3. **Créez une nouvelle API Key**
   - Cliquez sur "Create API Key"
   - Donnez-lui un nom : "Claude Automation"
   - Copiez la clé générée

4. **Collez la clé dans le fichier de configuration :**
   - Ouvrez `N8N & Claude/config/n8n-server.json`
   - Remplacez `VOTRE_API_KEY_ICI` par votre clé

## Étape 2 : Configurer les Credentials dans N8N

### Google OAuth2 (Calendar, Drive, Docs, Gmail)

1. Allez dans **Credentials** dans N8N
2. Cliquez sur **Create New Credential**
3. Sélectionnez **Google OAuth2 API**
4. Configurez :
   ```
   Client ID: [Votre Google Client ID]
   Client Secret: [Votre Google Client Secret]
   Redirect URL: https://n8n.srv1241880.hstgr.cloud/rest/oauth2-credential/callback
   Scopes: calendar, drive, docs, gmail.modify
   ```
5. Cliquez sur **Connect my account** et autorisez

### Notion API

1. Créez une intégration sur https://www.notion.so/my-integrations
2. Dans N8N, **Credentials** → **Create New**
3. Sélectionnez **Notion API**
4. Collez votre **Internal Integration Token**
5. Partagez vos bases Notion avec l'intégration

### Brevo API

1. Récupérez votre API Key Brevo : https://app.brevo.com/settings/keys/api
2. Dans N8N, **Credentials** → **Create New**
3. Sélectionnez **Brevo API**
4. Collez votre **API Key**

## Étape 3 : Tester un Template

### Option A : Import Manuel

1. Ouvrez un fichier template (ex: `workflows/templates/crm-automation.json`)
2. Copiez tout le contenu
3. Dans N8N, cliquez sur **Import from File**
4. Collez le JSON
5. Configurez les IDs :
   - `VOTRE_BASE_NOTION_ID` → ID de votre base Notion
   - `VOTRE_LISTE_BREVO_ID` → ID de votre liste Brevo
6. Testez avec **Execute Workflow**

### Option B : Création via Claude (RECOMMANDÉ)

Demandez simplement à Claude :

```
"Utilise le template CRM automation et adapte-le pour ma base Notion 'Clients'
et ma liste Brevo 'Leads'"
```

Claude va :
1. ✅ Lire le template
2. ✅ Récupérer vos IDs Notion et Brevo
3. ✅ Créer le workflow personnalisé
4. ✅ Le déployer sur votre serveur N8N
5. ✅ Tester et activer

## Étape 4 : Créer votre Premier Workflow Custom

### Exemple Simple

```
"Crée un workflow qui m'envoie un email tous les matins à 8h
avec ma liste de tâches du jour depuis ma base Notion 'ToDo'"
```

### Exemple Avancé

```
"Crée un workflow qui :
- Surveille ma boîte Gmail
- Quand un email contient 'facture' en pièce jointe
- Extrait la pièce jointe
- L'upload dans Google Drive dans le dossier 'Factures 2026'
- Crée une page dans Notion avec les détails
- M'envoie une notification récapitulative"
```

## 📊 Vérifier que Tout Fonctionne

### Test de Connexion N8N

```bash
# Test API (remplacez YOUR_API_KEY)
curl https://n8n.srv1241880.hstgr.cloud/api/v1/workflows \
  -H "X-N8N-API-KEY: YOUR_API_KEY"
```

Vous devriez voir la liste de vos workflows (ou un tableau vide si aucun).

### Test des Credentials

Dans N8N :
1. **Credentials** → Sélectionnez une credential
2. Cliquez sur **Test Connection**
3. Vous devriez voir "Connection successful"

## 🎯 Workflows Recommandés pour Commencer

### 1. Backup Automatique
```
"Crée un workflow qui sauvegarde mes bases Notion importantes
dans Google Drive tous les jours à minuit"
```

### 2. Résumé Quotidien
```
"Crée un workflow qui m'envoie chaque matin un email avec :
- Mes événements Calendar du jour
- Mes tâches Notion prioritaires
- Le nombre de nouveaux emails"
```

### 3. Lead Capture
```
"Crée un workflow qui capture les nouveaux contacts depuis
mes emails Gmail et les ajoute dans Notion et Brevo"
```

## 🆘 Problèmes Fréquents

### "API Key invalide"
- Vérifiez que vous avez bien copié la clé complète
- Vérifiez qu'elle est bien dans `config/n8n-server.json`
- Régénérez une nouvelle clé si nécessaire

### "Credentials non trouvées"
- Assurez-vous d'avoir créé les credentials dans N8N
- Vérifiez les permissions OAuth (scopes)
- Reconnectez les accounts

### "Base Notion non trouvée"
- Vérifiez que vous avez partagé la base avec votre intégration Notion
- Copiez l'ID de la base depuis l'URL :
  `notion.so/VOTRE_ID_ICI?v=...`

### "Workflow ne se déclenche pas"
- Vérifiez que le workflow est **activé** (toggle en haut à droite)
- Vérifiez les conditions de trigger
- Consultez les logs d'exécution

## 📚 Commandes Utiles

| Ce que vous voulez | Dites à Claude |
|-------------------|----------------|
| Créer un workflow | "Crée un workflow qui..." |
| Modifier un workflow | "Modifie le workflow [nom] pour..." |
| Debugger | "Le workflow [nom] a une erreur : [logs]" |
| Optimiser | "Optimise le workflow [nom]" |
| Lister | "Liste tous mes workflows actifs" |
| Exporter | "Exporte le workflow [nom] en JSON" |

## 🎉 Vous êtes Prêt !

Une fois les credentials configurés, vous pouvez créer n'importe quel workflow simplement en le demandant à Claude en langage naturel !

**Testez maintenant :**
```
"Crée-moi un workflow simple qui teste la connexion à Notion et Gmail"
```

---

**Besoin d'aide ?** Demandez simplement à Claude !

*Instance N8N : https://n8n.srv1241880.hstgr.cloud*
