# N8N & Claude - Automatisations Intelligentes

## 🌐 Votre Instance N8N

**URL :** https://n8n.srv1241880.hstgr.cloud
**API Base :** https://n8n.srv1241880.hstgr.cloud/api/v1
**Webhook Base :** https://n8n.srv1241880.hstgr.cloud/webhook

## 🚀 Démarrage Rapide

### 1. Configuration Initiale

Avant de commencer, récupérez votre **API Key** depuis N8N :

1. Connectez-vous à https://n8n.srv1241880.hstgr.cloud
2. Allez dans **Settings** → **API**
3. Créez une nouvelle API Key
4. Copiez-la dans `config/n8n-server.json`

```json
{
  "authentication": {
    "apiKey": "COLLEZ_VOTRE_API_KEY_ICI"
  }
}
```

### 2. Connectez vos Services

Dans N8N, configurez les credentials pour :

#### Google OAuth2
- **Services :** Calendar, Drive, Docs, Gmail
- **URL de redirection :** `https://n8n.srv1241880.hstgr.cloud/rest/oauth2-credential/callback`

#### Notion
- **Type :** Internal Integration
- **Permissions :** Read, Update, Insert

#### Brevo
- **API Key :** Depuis votre compte Brevo

### 3. Créez votre Premier Workflow

Demandez simplement à Claude :

```
"Crée un workflow qui envoie un email de bienvenue
quand un nouveau contact est ajouté dans Notion"
```

Claude va :
✅ Analyser votre demande
✅ Créer le workflow sur votre serveur
✅ Configurer les connexions
✅ Tester et activer

## 📁 Structure du Projet

```
N8N & Claude/
├── README.md                    # Ce fichier
├── config/
│   ├── n8n-server.json         # Configuration serveur N8N
│   └── mcp-settings.json       # Paramètres MCP & intégrations
├── workflows/
│   ├── templates/              # Templates réutilisables
│   │   ├── crm-automation.json
│   │   ├── email-marketing.json
│   │   └── calendar-sync.json
│   └── active/                 # Workflows déployés
│       └── .gitkeep
└── skills/
    ├── n8n-workflow-builder/   # Skill de création de workflows
    └── n8n-integrations/       # Skill pour intégrations

```

## 🎯 Exemples d'Automatisations

### CRM Automatique
```
"Crée un workflow qui :
- Surveille les nouveaux emails Gmail avec le tag 'Lead'
- Extrait nom, email, entreprise
- Crée un contact dans Brevo
- Crée une page dans Notion (base 'Prospects')
- Programme un rappel dans Google Calendar dans 2 jours"
```

### Newsletter Automatisée
```
"Crée un workflow qui :
- Tous les lundis à 9h
- Récupère les 5 derniers articles de Notion (base 'Blog')
- Génère un email récapitulatif
- L'envoie à la liste Brevo 'Newsletter'"
```

### Gestion de Projets
```
"Crée un workflow qui :
- Quand une nouvelle page est créée dans Notion (base 'Projets')
- Crée un dossier Google Drive avec la structure projet
- Crée un événement de kickoff dans Calendar
- Envoie un email d'annonce à l'équipe"
```

## 🔧 Configuration Avancée

### Webhooks

Vos webhooks N8N sont accessibles via :
```
https://n8n.srv1241880.hstgr.cloud/webhook/NOM_DU_WEBHOOK
```

### API Endpoints

```bash
# Lister les workflows
curl https://n8n.srv1241880.hstgr.cloud/api/v1/workflows \
  -H "X-N8N-API-KEY: VOTRE_API_KEY"

# Exécuter un workflow
curl -X POST https://n8n.srv1241880.hstgr.cloud/api/v1/workflows/ID/execute \
  -H "X-N8N-API-KEY: VOTRE_API_KEY"
```

## 📊 Monitoring

Claude peut créer des workflows de monitoring automatiques :

```
"Crée un dashboard de monitoring qui :
- Tracke les exécutions de tous mes workflows
- Détecte les erreurs
- M'envoie un rapport quotidien par email
- Alerte en temps réel si un workflow échoue"
```

## 🛠️ Commandes Claude Utiles

| Commande | Action |
|----------|--------|
| `"Crée un workflow qui..."` | Création d'un nouveau workflow |
| `"Modifie le workflow [nom]..."` | Modification d'un workflow existant |
| `"Liste mes workflows actifs"` | Affiche tous les workflows |
| `"Debug le workflow [nom]"` | Analyse et corrige les erreurs |
| `"Optimise le workflow [nom]"` | Améliore les performances |
| `"Exporte le workflow [nom]"` | Télécharge le JSON du workflow |

## 🔐 Sécurité

### Bonnes Pratiques

- ✅ Utilisez toujours les credentials N8N (jamais de hardcoding)
- ✅ Activez l'authentification sur votre instance N8N
- ✅ Utilisez HTTPS (déjà configuré)
- ✅ Limitez les permissions API au minimum nécessaire
- ✅ Sauvegardez régulièrement vos workflows

### Backup Automatique

```
"Crée un workflow qui :
- Tous les jours à minuit
- Exporte tous mes workflows actifs
- Les sauvegarde dans Google Drive/Backups/N8N
- Archive les backups de plus de 30 jours"
```

## 📈 Performance

### Optimisations Automatiques

Claude optimise automatiquement :
- ⚡ Batching des opérations
- ⚡ Caching des données fréquentes
- ⚡ Gestion intelligente des quotas API
- ⚡ Retry logic sur échecs temporaires

## 🆘 Dépannage

### Workflow ne démarre pas
```
"Le workflow [nom] ne se déclenche pas, peux-tu vérifier ?"
```

### Erreurs d'exécution
```
"J'ai une erreur sur le workflow [nom], voici le log : [coller le log]"
```

### Performance lente
```
"Le workflow [nom] est très lent, peux-tu l'optimiser ?"
```

## 📚 Ressources

- [Documentation N8N](https://docs.n8n.io/)
- [N8N Community](https://community.n8n.io/)
- [Votre instance](https://n8n.srv1241880.hstgr.cloud)

## 🎉 C'est Parti !

Vous êtes prêt à automatiser tout ce que vous voulez !

Dites simplement à Claude ce que vous voulez automatiser,
et il créera le workflow sur votre serveur N8N.

**Exemple pour commencer :**
```
"Crée-moi un workflow simple qui m'envoie un email
tous les matins à 8h avec ma liste de tâches du jour depuis Notion"
```

---

*Instance N8N : https://n8n.srv1241880.hstgr.cloud*
*Dernière mise à jour : 31 janvier 2026*
