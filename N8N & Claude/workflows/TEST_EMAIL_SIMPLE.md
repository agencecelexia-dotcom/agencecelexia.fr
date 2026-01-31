# 📧 Test Email Quotidien à 9h

## 🎯 Objectif

Workflow simple pour tester que votre système N8N & Claude fonctionne correctement.

## 📋 Ce que fait le workflow

1. **⏰ Déclenchement** : Tous les jours à 9h00
2. **📊 Préparation** : Récupère la date et l'heure actuelles
3. **✉️ Génération** : Crée un email HTML stylé
4. **📮 Envoi** : Vous envoie l'email via Gmail (ou autre service)

## 🚀 Déploiement

### Option 1 : Via Gmail MCP (Recommandé)

Demandez simplement à Claude :

```
"Utilise le workflow email-quotidien-9h.json et configure-le pour m'envoyer un email tous les jours à 9h à mon adresse : VOTRE_EMAIL@gmail.com"
```

Claude va :
1. ✅ Lire le fichier JSON
2. ✅ Ajouter un node Gmail Send
3. ✅ Configurer votre email de destination
4. ✅ Déployer sur votre serveur N8N
5. ✅ Activer le workflow

### Option 2 : Import Manuel dans N8N

1. Ouvrez https://n8n.srv1241880.hstgr.cloud
2. Cliquez sur **+** → **Import from File**
3. Sélectionnez `email-quotidien-9h.json`
4. Ajoutez un node **Gmail** ou **Send Email**
5. Configurez votre email de destination
6. Activez le workflow

### Option 3 : Via Brevo (Email Marketing)

Si vous préférez utiliser Brevo :

```
"Utilise le workflow email-quotidien-9h.json mais envoie l'email via Brevo à VOTRE_EMAIL@gmail.com"
```

## 📝 Configuration Email

### Structure du Workflow Complet

```
┌─────────────────────┐
│ Schedule Trigger    │
│ (Tous les jours 9h) │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ Préparer les données│
│ (Date, Heure)       │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ Générer Email HTML  │
│ (Code Node)         │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ Envoyer Email       │
│ (Gmail/Brevo)       │
└─────────────────────┘
```

## 🎨 Contenu de l'Email

L'email inclut :
- ✅ En-tête stylé avec gradient violet
- ✅ Date et heure d'exécution
- ✅ Statut du workflow
- ✅ Liste des vérifications effectuées
- ✅ Suggestions de prochaines automatisations
- ✅ Lien vers votre instance N8N

## 🔧 Personnalisation

### Changer l'heure d'envoi

Pour envoyer à 8h au lieu de 9h :

```
"Modifie le workflow email-quotidien pour l'envoyer à 8h au lieu de 9h"
```

### Changer la fréquence

Pour envoyer tous les lundis au lieu de tous les jours :

```
"Modifie le workflow pour l'envoyer seulement les lundis à 9h"
```

### Personnaliser le contenu

```
"Ajoute une section 'Météo du jour' dans l'email quotidien"
```

## ✅ Test Immédiat

Vous ne voulez pas attendre jusqu'à 9h ? Testez maintenant :

```
"Execute le workflow email-quotidien en mode test et envoie-moi l'email maintenant"
```

Ou dans N8N :
1. Ouvrez le workflow
2. Cliquez sur **Execute Workflow**
3. Vérifiez votre boîte mail

## 📊 Vérification

Après déploiement, vérifiez que :

1. **Dans N8N** :
   - Le workflow apparaît dans la liste
   - Il est **activé** (toggle vert)
   - Pas d'erreurs dans les logs

2. **Dans votre email (le lendemain à 9h)** :
   - Vous recevez l'email
   - Le format HTML est correct
   - Les données (date/heure) sont bonnes

## 🆘 Troubleshooting

### Email non reçu

1. Vérifiez que le workflow est **activé**
2. Vérifiez les **logs d'exécution** dans N8N
3. Vérifiez votre dossier **Spam**
4. Vérifiez les **credentials Gmail** ou Brevo

### Erreur de credential

```
"Configure les credentials Gmail pour le workflow email-quotidien"
```

Claude vous guidera dans la configuration.

### Tester manuellement

```
"Execute le workflow email-quotidien maintenant pour tester"
```

## 🎯 Prochaines Étapes

Une fois que ce workflow fonctionne, vous pouvez créer :

1. **📊 Rapport hebdomadaire** : Stats de vos workflows
2. **🔔 Alertes intelligentes** : Notifications sur événements spécifiques
3. **📧 Newsletter automatique** : Depuis vos articles Notion
4. **📈 Dashboard quotidien** : Métriques business par email

## 💡 Commandes Utiles

```bash
# Activer le workflow
"Active le workflow email-quotidien"

# Désactiver
"Désactive le workflow email-quotidien"

# Modifier l'heure
"Change l'heure d'envoi à 8h"

# Voir les logs
"Montre-moi les dernières exécutions du workflow email-quotidien"

# Supprimer
"Supprime le workflow email-quotidien"
```

---

**Créé avec Claude & N8N** 🚀
*Dernière mise à jour : 31 janvier 2026*
