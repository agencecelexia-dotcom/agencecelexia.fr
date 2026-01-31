# N8N & Claude - Système d'Automatisation Intelligent

## 🎯 Objectif

Ce dossier contient un système permettant de créer et gérer des workflows N8N en mode self-hosted directement via des requêtes en langage naturel à Claude. Au lieu de construire manuellement les workflows dans l'interface N8N, vous pouvez simplement décrire ce que vous voulez automatiser, et Claude créera le workflow fonctionnel sur votre serveur N8N.

## 🏗️ Architecture

```
N8N & Claude/
├── CLAUDE.md                 # Ce fichier - Documentation principale
├── workflows/                # Workflows N8N créés automatiquement
│   ├── templates/           # Templates de workflows réutilisables
│   └── active/              # Workflows actifs en production
├── skills/                   # Skills personnalisés pour N8N
│   ├── n8n-workflow-builder/ # Skill principal de création de workflows
│   └── n8n-integrations/    # Skill pour les intégrations tierces
└── config/                   # Configuration N8N et MCP
    ├── n8n-server.json      # Configuration serveur N8N self-hosted
    └── mcp-settings.json    # Paramètres MCP pour Claude
```

## 🛠️ Outils MCP N8N Disponibles

Claude a accès aux outils MCP suivants pour interagir avec N8N :

### Google Calendar
- `Create_an_event_in_Google_Calendar` - Créer des événements
- `Get_many_events_in_Google_Calendar` - Récupérer plusieurs événements
- `Update_an_event_in_Google_Calendar` - Modifier un événement
- `Delete_an_event_in_Google_Calendar` - Supprimer un événement
- `Get_availability_in_a_calendar` - Vérifier les disponibilités

### Notion
- `Create_a_database_page_in_Notion` - Créer des pages dans une base de données
- `Get_many_database_pages_in_Notion` - Récupérer des pages
- `Update_a_database_page_in_Notion` - Mettre à jour des pages
- `Search_a_database_in_Notion` - Rechercher dans une base
- `Create_a_page_in_Notion` - Créer une page
- `Archive_page_in_Notion` - Archiver une page

### Google Drive
- `Create_folder_in_Google_Drive` - Créer des dossiers
- `Upload_file_in_Google_Drive` - Upload de fichiers
- `Download_file_in_Google_Drive` - Télécharger des fichiers
- `Search_files_and_folders_in_Google_Drive` - Rechercher
- `Share_file_in_Google_Drive` - Partager des fichiers
- `Delete_a_file_in_Google_Drive` - Supprimer des fichiers

### Google Docs
- `Create_a_document_in_Google_Docs` - Créer des documents
- `Get_a_document_in_Google_Docs` - Récupérer un document
- `Update_a_document_in_Google_Docs` - Modifier un document

### Gmail
- `Send_a_message_in_Gmail` - Envoyer des emails
- `Get_a_message_in_Gmail` - Récupérer un message
- `Get_many_messages_in_Gmail` - Récupérer plusieurs messages
- `Reply_to_a_message_in_Gmail` - Répondre à un email
- `Create_a_draft_in_Gmail` - Créer un brouillon
- `Delete_a_message_in_Gmail` - Supprimer un message
- `Mark_a_message_as_read_in_Gmail` - Marquer comme lu
- `Create_a_label_in_Gmail` - Créer une étiquette

### Brevo (Email Marketing)
- `brevo_add_or_update_contact` - Gérer les contacts
- `brevo_send_transactional_email` - Envoyer des emails transactionnels
- `brevo_add_or_update_deal` - Gérer les deals CRM
- `brevo_add_or_update_company` - Gérer les entreprises

## 📝 Comment Utiliser

### 1. Créer un Workflow Simple

**Requête :**
```
Crée-moi un workflow N8N qui :
1. Surveille les nouveaux emails Gmail avec le label "Clients"
2. Extrait les informations de contact
3. Crée une nouvelle ligne dans Notion dans ma base "CRM"
4. Envoie une notification par email
```

**Claude va :**
- Analyser votre demande
- Utiliser les outils MCP N8N appropriés
- Créer le workflow fonctionnel
- Tester les connexions
- Déployer sur votre serveur N8N

### 2. Créer un Workflow Multi-Étapes

**Requête :**
```
Je veux automatiser la gestion de mes rendez-vous clients :
1. Quand un nouveau deal est créé dans Notion (base "Prospects")
2. Récupérer les disponibilités de mon calendrier Google
3. Envoyer un email avec Brevo proposant 3 créneaux
4. Quand le client répond, créer l'événement dans Google Calendar
5. Créer un dossier dans Google Drive pour le client
6. Envoyer un email de confirmation
```

### 3. Workflows avec Conditions

**Requête :**
```
Crée un workflow qui :
- Surveille les emails Gmail entrants
- SI l'email contient "facture" ALORS :
  - Extraire la pièce jointe
  - L'uploader dans Google Drive/Factures
  - Créer une page Notion dans "Comptabilité"
- SINON SI l'email contient "devis" ALORS :
  - Créer un deal dans Notion
  - Ajouter le contact dans Brevo
- SINON :
  - Archiver l'email
```

## 🎨 Exemples d'Automatisations Prêtes à l'Emploi

### Marketing & Communication
```
- Auto-réponse intelligente aux emails entrants
- Synchronisation contacts Gmail → Brevo
- Campagnes email déclenchées par événements Notion
- Publication automatique de contenu multi-plateforme
```

### CRM & Ventes
```
- Pipeline de ventes automatisé Notion → Brevo
- Suivi automatique des prospects
- Création automatique de devis et factures
- Relances automatiques par email
```

### Productivité
```
- Synchronisation bi-directionnelle Notion ↔ Google Calendar
- Backup automatique Google Drive → Notion
- Résumés quotidiens par email des tâches
- Génération de rapports hebdomadaires
```

### Gestion de Projet
```
- Création automatique de dossiers clients (Drive + Notion)
- Notifications d'échéances de projet
- Suivi du temps et facturation automatique
- Archivage automatique des projets terminés
```

## 🔧 Configuration Serveur N8N Self-Hosted

### Prérequis
```bash
# Installation N8N
npm install -g n8n

# Démarrer N8N
n8n start

# Ou avec Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

### Variables d'Environnement
```env
# N8N Configuration
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=votre_mot_de_passe
N8N_HOST=localhost
N8N_PORT=5678
N8N_PROTOCOL=http

# MCP Configuration
MCP_SERVER_URL=http://localhost:5678
MCP_API_KEY=votre_api_key_n8n
```

### Connexion des Intégrations

Dans N8N, configurez les credentials pour :
- **Google OAuth2** : Calendar, Drive, Docs, Gmail
- **Notion API** : Token d'intégration
- **Brevo API** : Clé API Brevo

## 💡 Bonnes Pratiques

### 1. Structuration des Workflows
- **Nommage clair** : `[Service] - [Action] - [Description]`
- **Documentation** : Chaque workflow doit avoir une description
- **Tags** : Utiliser des tags pour organiser (CRM, Marketing, Admin...)

### 2. Gestion des Erreurs
```
Claude configurera automatiquement :
- Retry logic sur échecs temporaires
- Notifications d'erreur par email
- Logs détaillés dans Notion
- Webhooks de secours
```

### 3. Sécurité
- Ne jamais hardcoder les API keys dans les workflows
- Utiliser les credentials N8N
- Valider les données entrantes
- Limiter les permissions au minimum nécessaire

### 4. Performance
- Utiliser les filtres pour réduire les exécutions
- Batching des opérations quand possible
- Caching des données fréquemment utilisées
- Monitoring des quotas API

## 🚀 Commandes Rapides

### Créer un Workflow
```
"Crée un workflow qui [description de l'automatisation]"
```

### Modifier un Workflow Existant
```
"Modifie le workflow [nom] pour ajouter [nouvelle fonctionnalité]"
```

### Debugger un Workflow
```
"Le workflow [nom] ne fonctionne pas, peux-tu vérifier ?"
```

### Optimiser un Workflow
```
"Optimise le workflow [nom] pour réduire les appels API"
```

## 📊 Monitoring et Analytics

Claude peut créer des workflows de monitoring qui :
- Trackent le nombre d'exécutions
- Mesurent les temps de réponse
- Détectent les erreurs récurrentes
- Génèrent des rapports dans Notion
- Envoient des alertes par email

## 🔄 Workflows Récurrents

### Quotidiens
- Backup des données importantes
- Résumé des activités du jour
- Vérification des tâches en retard

### Hebdomadaires
- Rapport d'activité clients
- Nettoyage des données obsolètes
- Stats de performance

### Mensuels
- Facturation automatique
- Archivage des projets terminés
- Rapports financiers

## 📚 Ressources

### Documentation
- [N8N Documentation](https://docs.n8n.io/)
- [N8N Community](https://community.n8n.io/)
- [MCP Protocol](https://modelcontextprotocol.io/)

### Support
Pour toute question ou problème :
1. Décrivez l'automatisation souhaitée en langage naturel
2. Claude analysera et créera le workflow
3. Si erreur, fournissez les logs N8N
4. Claude debuggera et corrigera automatiquement

## 🎯 Roadmap

### Phase 1 - Actuelle
- ✅ Intégrations Google (Calendar, Drive, Docs, Gmail)
- ✅ Intégration Notion
- ✅ Intégration Brevo
- ✅ Création de workflows via requêtes naturelles

### Phase 2 - À Venir
- ⏳ Intégration Slack
- ⏳ Intégration Zapier (import de Zaps)
- ⏳ Templates de workflows par industrie
- ⏳ Assistant vocal pour création de workflows

### Phase 3 - Future
- 📋 IA de suggestion d'optimisation
- 📋 Auto-healing des workflows en erreur
- 📋 A/B testing automatique
- 📋 Workflows adaptatifs avec ML

---

## 🎪 Démarrage Rapide

1. **Installez N8N** en mode self-hosted
2. **Configurez les credentials** Google, Notion, Brevo
3. **Décrivez votre automatisation** à Claude en langage naturel
4. **Claude crée le workflow** directement sur votre serveur
5. **Testez et activez** votre automatisation

**C'est aussi simple que ça !** 🎉

---

## 📁 Fichiers du Projet

- **[CLAUDE.md](CLAUDE.md)** - Ce fichier (vue d'ensemble)
- **[N8N & Claude/](N8N & Claude/)** - Dossier principal du système
  - **[README.md](N8N & Claude/README.md)** - Guide d'utilisation
  - **[DEMARRAGE.md](N8N & Claude/DEMARRAGE.md)** - Guide de démarrage rapide
  - **[GUIDE_COMPLET.md](N8N & Claude/GUIDE_COMPLET.md)** - Guide complet et détaillé
  - **[config/](N8N & Claude/config/)** - Fichiers de configuration
  - **[workflows/](N8N & Claude/workflows/)** - Templates et workflows
  - **[skills/](N8N & Claude/skills/)** - Skills N8N (n8n-skills et n8n-mcp)

## 🔗 Liens Utiles

- **Instance N8N** : https://n8n.srv1241880.hstgr.cloud
- **n8n-mcp GitHub** : https://github.com/czlonkowski/n8n-mcp
- **n8n-skills GitHub** : https://github.com/czlonkowski/n8n-skills

---

*Dernière mise à jour : 31 janvier 2026*
*Version : 1.0*
