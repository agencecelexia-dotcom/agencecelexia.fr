# 🚀 Guide Complet - N8N & Claude

## 📖 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Installation et Configuration](#installation-et-configuration)
3. [Utilisation des MCP Tools](#utilisation-des-mcp-tools)
4. [Utilisation des Skills](#utilisation-des-skills)
5. [Créer votre Premier Workflow](#créer-votre-premier-workflow)
6. [Exemples Pratiques](#exemples-pratiques)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Vue d'ensemble

Vous avez maintenant accès à un système complet pour créer des workflows N8N via des requêtes en langage naturel :

### Architecture du Système

```
┌─────────────────────────────────────────────────────────┐
│                     VOUS (Requête)                      │
│          "Crée un workflow qui fait X et Y"             │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────▼───────────┐
         │    CLAUDE + SKILLS    │
         │  7 Skills Experts     │
         │  - Expression Syntax  │
         │  - MCP Tools Expert   │
         │  - Workflow Patterns  │
         │  - etc.               │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────┐
         │     N8N-MCP SERVER    │
         │  - 1,084 nodes        │
         │  - 2,709 templates    │
         │  - Validation tools   │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────┐
         │   VOTRE SERVEUR N8N   │
         │ n8n.srv1241880.       │
         │ hstgr.cloud           │
         └───────────────────────┘
```

---

## ⚙️ Installation et Configuration

### Étape 1 : Configuration MCP Server

Le serveur MCP N8N doit être configuré pour se connecter à votre instance N8N.

**Option A : npx (Recommandé - Plus Simple)**

Créez ou éditez votre fichier de configuration Claude :
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": ["n8n-mcp"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "https://n8n.srv1241880.hstgr.cloud",
        "N8N_API_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWVkMDA1MS1lODhiLTQyZDEtYTg4Ny1hYjdkMjc3OGEzZTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY5ODcyNzQ2fQ.7iWLWSV5tBExD6CiZ7k63y_zqy-wKOziTPKvcldEKsk"
      }
    }
  }
}
```

**Option B : Docker**

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm", "--init",
        "-e", "MCP_MODE=stdio",
        "-e", "LOG_LEVEL=error",
        "-e", "DISABLE_CONSOLE_OUTPUT=true",
        "-e", "N8N_API_URL=https://n8n.srv1241880.hstgr.cloud",
        "-e", "N8N_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OWVkMDA1MS1lODhiLTQyZDEtYTg4Ny1hYjdkMjc3OGEzZTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY5ODcyNzQ2fQ.7iWLWSV5tBExD6CiZ7k63y_zqy-wKOziTPKvcldEKsk",
        "ghcr.io/czlonkowski/n8n-mcp:latest"
      ]
    }
  }
}
```

### Étape 2 : Installation des Skills

**Méthode Automatique (Recommandée)**

Dans Claude Code :
```bash
/plugin install czlonkowski/n8n-skills
```

**Méthode Manuelle**

Les skills sont déjà dans : `N8N & Claude/skills/n8n-skills/`

Copiez-les dans le dossier Claude :
```bash
cp -r "N8N & Claude/skills/n8n-skills/skills/"* ~/.claude/skills/
```

### Étape 3 : Redémarrer Claude

- **Claude Desktop** : Redémarrez l'application
- **Claude Code** : Rechargez la fenêtre

---

## 🛠️ Utilisation des MCP Tools

Une fois configuré, Claude a accès à ces outils :

### 🔍 Recherche de Nodes

```
"Trouve-moi tous les nodes qui peuvent envoyer des emails"
```

**Ce qui se passe :**
1. Claude utilise `search_nodes({query: 'send email'})`
2. Reçoit la liste des nodes pertinents
3. Vous présente les options

### 📖 Documentation des Nodes

```
"Montre-moi comment utiliser le node Gmail"
```

**Ce qui se passe :**
1. Claude utilise `get_node({nodeType: 'n8n-nodes-base.gmail', detail: 'standard'})`
2. Reçoit la documentation complète
3. Vous explique les paramètres importants

### ✅ Validation de Configuration

```
"Vérifie si cette configuration Slack est correcte : {...}"
```

**Ce qui se passe :**
1. Claude utilise `validate_node({nodeType: 'n8n-nodes-base.slack', config: {...}})`
2. Identifie les erreurs
3. Propose des corrections

### 🎯 Recherche de Templates

```
"Trouve-moi des templates de workflow pour automatiser mes emails"
```

**Ce qui se passe :**
1. Claude utilise `search_templates({searchMode: 'by_task', task: 'email_automation'})`
2. Trouve les meilleurs templates
3. Peut les déployer directement sur votre serveur

---

## 🎓 Utilisation des Skills

Les 7 skills s'activent **automatiquement** quand nécessaire :

### 1. n8n Expression Syntax

**S'active quand :** Vous utilisez des expressions `{{ }}` dans les nodes

**Exemple :**
```
"Comment accéder aux données du webhook dans un Code node ?"
```

**Skill activé :** Vous explique que les données webhook sont sous `$json.body`

### 2. n8n MCP Tools Expert (PRIORITÉ)

**S'active quand :** Vous cherchez des nodes ou configurez des workflows

**Exemple :**
```
"Trouve le node pour envoyer des messages Slack"
```

**Skill activé :** Utilise les bons outils MCP pour chercher efficacement

### 3. n8n Workflow Patterns

**S'active quand :** Vous créez un nouveau workflow

**Exemple :**
```
"Crée un workflow webhook qui envoie des notifications"
```

**Skill activé :** Applique le pattern "Webhook Processing" éprouvé

### 4. n8n Validation Expert

**S'active quand :** Une validation échoue

**Exemple :**
```
"Mon workflow a une erreur de validation"
```

**Skill activé :** Analyse l'erreur et propose des corrections

### 5-7. Code & Configuration Skills

S'activent automatiquement quand vous écrivez du code JavaScript/Python ou configurez des nodes complexes.

---

## 🚀 Créer votre Premier Workflow

### Exemple Simple : Email de Bienvenue

**Votre requête :**
```
"Crée un workflow qui m'envoie un email de test avec Gmail"
```

**Ce que Claude fait automatiquement :**

1. **Recherche de nodes** (Skill MCP Tools Expert)
   ```javascript
   search_nodes({query: 'gmail send', includeExamples: true})
   ```

2. **Récupération de la config** (Skill MCP Tools Expert)
   ```javascript
   get_node({nodeType: 'n8n-nodes-base.gmail', detail: 'standard', includeExamples: true})
   ```

3. **Construction du workflow** (Skill Workflow Patterns)
   - Manual Trigger → Gmail Send

4. **Validation** (Skill Validation Expert)
   ```javascript
   validate_workflow(workflowJson)
   ```

5. **Déploiement** (MCP Tool)
   ```javascript
   n8n_create_workflow(workflow)
   ```

**Résultat :** Workflow fonctionnel créé sur votre serveur N8N !

---

## 💡 Exemples Pratiques

### Exemple 1 : CRM Automatique

**Requête :**
```
"Crée un workflow qui :
- Surveille les nouveaux emails Gmail avec le label 'Prospects'
- Extrait le nom et email
- Crée un contact dans Notion
- Ajoute le contact dans Brevo
- Programme un rappel dans Calendar dans 2 jours"
```

**Skills activés :**
- ✅ MCP Tools Expert : Recherche Gmail, Notion, Brevo, Calendar nodes
- ✅ Workflow Patterns : Applique le pattern "Webhook Processing"
- ✅ Expression Syntax : Configure les mappings de données
- ✅ Validation Expert : Valide chaque node

**Claude va :**
1. Chercher les templates existants
2. Si aucun template parfait, construire depuis zéro
3. Configurer chaque node avec les bons paramètres
4. Valider le tout
5. Déployer sur votre serveur

### Exemple 2 : Newsletter Automatisée

**Requête :**
```
"Crée un workflow qui tous les lundis à 9h :
- Récupère les 5 derniers articles de ma base Notion 'Blog'
- Génère un email HTML
- L'envoie à ma liste Brevo 'Newsletter'
- Log le résultat dans Notion"
```

**Claude va :**
1. Utiliser un Schedule Trigger (lundis 9h)
2. Configurer Notion Database Query
3. Utiliser un Code Node pour générer le HTML (Skill Code JavaScript)
4. Configurer Brevo Email Send
5. Logger dans Notion
6. Valider et déployer

### Exemple 3 : Sync Bidirectionnel

**Requête :**
```
"Synchronise mes tâches Notion avec Google Calendar toutes les 15 minutes"
```

**Claude va :**
1. Chercher des templates de sync
2. Configurer un Schedule Trigger (15 min)
3. Récupérer tâches Notion
4. Matcher avec événements Calendar
5. Créer/Mettre à jour selon besoin
6. Gérer les conflits

---

## 🔧 Troubleshooting

### Problème : "MCP tools not available"

**Solution :**
1. Vérifiez que le fichier config Claude est bien placé
2. Vérifiez la syntaxe JSON
3. Redémarrez Claude Desktop

### Problème : "API Key invalid"

**Solution :**
1. Vérifiez l'API key dans `config/n8n-server.json`
2. Vérifiez qu'elle est identique dans la config Claude
3. Générez une nouvelle clé si nécessaire

### Problème : "Skills not activated"

**Solution :**
1. Vérifiez que les skills sont dans `~/.claude/skills/`
2. Rechargez Claude Code
3. Essayez une requête explicite : "Use n8n skills to create a workflow"

### Problème : "Workflow validation failed"

**Demandez à Claude :**
```
"Le workflow a échoué la validation. Voici l'erreur : [coller l'erreur]
Peux-tu corriger ?"
```

**Claude va :**
- Analyser l'erreur (Skill Validation Expert)
- Identifier le problème
- Corriger automatiquement
- Re-valider

---

## 🎯 Commandes Utiles

| Objectif | Commande |
|----------|----------|
| **Créer un workflow** | "Crée un workflow qui..." |
| **Modifier** | "Modifie le workflow [nom] pour..." |
| **Optimiser** | "Optimise le workflow [nom]" |
| **Debugger** | "Le workflow [nom] a une erreur : [logs]" |
| **Chercher templates** | "Trouve des templates pour..." |
| **Lister workflows** | "Liste tous mes workflows actifs" |
| **Tester** | "Teste le workflow [nom] avec ces données : {...}" |
| **Documentation** | "Comment utiliser le node [nom] ?" |

---

## 📚 Ressources

### Documentation N8N MCP
- [n8n-mcp GitHub](https://github.com/czlonkowski/n8n-mcp)
- [n8n-skills GitHub](https://github.com/czlonkowski/n8n-skills)

### Votre Instance
- **N8N Interface** : https://n8n.srv1241880.hstgr.cloud
- **API Base** : https://n8n.srv1241880.hstgr.cloud/api/v1

### Skills Locaux
- **Location** : `N8N & Claude/skills/n8n-skills/`
- **Documentation** : Chaque skill a son propre README

---

## 🎉 Prêt à Créer !

Vous avez maintenant tout ce qu'il faut pour créer n'importe quel workflow N8N simplement en le demandant à Claude !

**Testez maintenant :**
```
"Crée-moi un workflow simple qui :
- Se déclenche manuellement
- Envoie un email de test via Gmail
- Log le résultat dans la console"
```

Claude va :
1. ✅ Activer les skills appropriés
2. ✅ Utiliser les MCP tools pour chercher et configurer
3. ✅ Construire le workflow
4. ✅ Valider
5. ✅ Déployer sur https://n8n.srv1241880.hstgr.cloud

---

**Dernière mise à jour : 31 janvier 2026**
*Version : 1.0*
