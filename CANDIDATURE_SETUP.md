# Réception des candidatures Celexia

Le parcours `/candidature` collecte les informations de l’entreprise et du contact, présente un récapitulatif modifiable, puis appelle `POST /api/candidature`. Il ne crée aucun compte ni contrat. Les données restent uniquement en mémoire dans le navigateur jusqu’à l’envoi ; quitter ou recharger la page efface la saisie.

## Configuration de l’envoi avec n8n

La destination est **agence.celexia@gmail.com**. Le serveur envoie le dossier complet à un workflow n8n dédié, qui utilise la connexion Gmail de Celexia. Le champ « Répondre à » contient l’adresse du candidat. Aucun e-mail de test n’est envoyé automatiquement.

### Installation Celexia

Le workflow [Celexia — candidatures du site](https://n8n.srv1241880.hstgr.cloud/workflow/FHLvylAkTtYFXLh7) est actif. Les deux variables ci-dessous sont configurées dans le projet Vercel `site` pour les prévisualisations et la production, ainsi que dans `.env.local` pour le développement. Elles sont prises en compte au prochain déploiement. La correction n8n doit être déployée pour remplacer le gestionnaire d’envoi précédent. Le test complet du 7 novembre 2026 a été accepté par Gmail après reconnexion du compte : l’API du formulaire a renvoyé HTTP 200 et la référence `29f1a7ad2798`. Un seul e-mail de test a été envoyé à `agence.celexia@gmail.com`.

Le modèle sans secrets est conservé dans `n8n/candidature.workflow.json`. Pour le réinstaller ailleurs, associer un credential `httpHeaderAuth` au nœud Webhook (nom de l’en-tête : `X-Celexia-Webhook-Secret`) et la connexion `gmailOAuth2` au nœud Gmail. Les données d’exécution ne sont pas conservées dans ce workflow ; les candidatures restent dans la messagerie destinataire.

La clé d’administration historique a été déplacée dans `.env.local` sous `N8N_API_KEY`. Les fichiers de configuration versionnés contiennent uniquement son nom de variable ; les outils d’administration doivent la charger depuis l’environnement. Une ancienne valeur ayant figuré dans Git, la renouveler dans n8n : son retrait des fichiers actuels ne l’efface pas de l’historique.

Configurer ces deux variables **serveur** dans Vercel ou Netlify, puis redéployer le site :

- `CANDIDATURE_WEBHOOK_URL` : URL HTTPS du webhook de **production** du workflow n8n actif.
- `CANDIDATURE_WEBHOOK_SECRET` : secret partagé avec l’authentification du webhook, reçu dans l’en-tête `X-Celexia-Webhook-Secret`.

La clé d’administration de l’API n8n n’est pas nécessaire au site. Ne pas utiliser le préfixe `VITE_`, ni placer de secret dans le code public, le navigateur ou Git. En local, copier `.env.example` vers `.env.local`, renseigner les deux variables n8n, puis démarrer ou redémarrer `npm run dev`.

Le workflow doit vérifier le secret, envoyer un message en texte brut avec Gmail à la destination fixe ci-dessus, puis répondre seulement lorsque Gmail a retourné un identifiant de message. Un webhook qui répond immédiatement au démarrage ne convient pas. Le site attend au maximum 12 secondes et refuse les redirections du webhook.

### Contrat du webhook

Le serveur effectue un `POST` JSON avec les propriétés suivantes :

- `reference` : SHA-256 complet, soit 64 caractères hexadécimaux, calculé à partir des réponses validées, de la provenance et du jour UTC.
- `application` : champs validés du formulaire, sans le champ anti-robot ni les propriétés supplémentaires envoyées par le navigateur.
- `source` : provenance limitée à 100 caractères, sans caractères de contrôle.
- `email` : `{ to, replyTo, subject, text }`, où `to` vaut toujours `agence.celexia@gmail.com`.

Le workflow doit conserver ce destinataire fixe dans le nœud Gmail. Après un envoi réussi, répondre avec un statut HTTP 2xx et ce JSON :

```json
{
  "received": true,
  "reference": "LA_REFERENCE_COMPLETE_RECUE",
  "messageId": "IDENTIFIANT_DU_MESSAGE_GMAIL"
}
```

Le site exige la même référence et un identifiant de message non vide. Il présente au candidat les 12 premiers caractères de la référence. Un statut HTTP 200 seul, une référence différente ou un corps HTML ne confirme jamais la réception.

L’en-tête `Idempotency-Key` vaut `candidature-` suivi de la référence complète. Des réponses identiques envoyées le même jour produisent la même référence ; cela ne remplace pas une déduplication dans le workflow n8n. Après un délai dépassé, un e-mail peut avoir été envoyé sans que le site ait reçu sa confirmation : vérifier l’exécution n8n avant de renouveler l’envoi.

## Alternative facultative : Resend

Si **les deux variables n8n sont absentes ou vides**, le serveur peut utiliser Resend avec ces variables :

- `RESEND_API_KEY` : clé d’envoi Resend.
- `CANDIDATURE_FROM_EMAIL` : expéditeur autorisé sur un domaine vérifié dans Resend, par exemple `Celexia <candidatures@votre-domaine-verifie.fr>`.

Une configuration n8n partielle ou invalide bloque l’envoi. Une erreur n8n ne déclenche jamais un deuxième envoi via Resend. Un compte Gmail destinataire ne peut pas servir automatiquement d’expéditeur Resend : il faut un domaine d’envoi vérifié. En cas d’activation de cette alternative, adapter aussi la liste des prestataires dans la politique de confidentialité.

## Comportement du serveur

Les adaptateurs serveur sont `api/candidature.js` pour Vercel et `netlify/functions/candidature.mjs` pour Netlify ; les deux utilisent `server/candidature.mjs`. Les règles de routage doivent conserver `/api/candidature` avant le repli SPA.

Le serveur valide les champs, le consentement et la taille du corps de requête. Il filtre un champ anti-robot, refuse les requêtes intersites et transmet une référence stable pour les réponses identiques dans la journée. Resend utilise cette référence comme clé d’idempotence. Le serveur ne journalise ni les dossiers ni les secrets.

La confirmation n’apparaît que lorsque le prestataire d’envoi a accepté l’e-mail et retourné son identifiant. Cela confirme la prise en charge, pas la remise finale dans la boîte destinataire ; vérifier la réception dans Gmail et l’exécution n8n. En cas de configuration manquante, de refus ou de réponse ambiguë, le formulaire affiche une erreur et conserve les réponses à l’écran.

## Vérification locale

`node --test tests/candidature.test.mjs` couvre la validation, le refus des demandes invalides, la configuration n8n incomplète ou non sécurisée, les erreurs des prestataires, la priorité n8n, l’absence de bascule après erreur et l’acquittement de succès. Tous les envois y sont simulés ; aucun e-mail réel n’est transmis.

`npm run dev` sert le parcours et `/api/candidature` via le même gestionnaire serveur que les hébergeurs. Les variables de `.env.local` sont chargées au démarrage. Pour vérifier le flux complet, utiliser le site local ou la prévisualisation de l’hébergeur avec les variables configurées et le workflow actif. Un envoi réel de validation transmet un e-mail à Celexia.
