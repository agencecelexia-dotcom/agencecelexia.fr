# Réception des candidatures Celexia

Le parcours `/candidature` collecte les informations de l’entreprise et du contact, présente un récapitulatif modifiable, puis appelle `POST /api/candidature`. Il ne crée aucun compte ni contrat. Les données restent uniquement en mémoire dans le navigateur jusqu’à l’envoi ; quitter ou recharger la page efface la saisie.

## Configuration de l’envoi

La destination est **agence.celexia@gmail.com**. Le serveur envoie le dossier complet en texte via l’API Resend ; le champ « Répondre à » contient l’adresse du candidat. Aucun e-mail de test n’est envoyé automatiquement.

Configurer ces deux variables **serveur** dans Vercel ou Netlify :

- `RESEND_API_KEY` : clé d’envoi Resend.
- `CANDIDATURE_FROM_EMAIL` : expéditeur autorisé sur un domaine vérifié dans Resend, par exemple `Celexia <candidatures@votre-domaine-verifie.fr>`.

Ne pas préfixer ces variables par `VITE_`, ni les placer dans du code public. Un compte Gmail destinataire ne peut pas servir automatiquement d’expéditeur Resend : il faut un domaine d’envoi vérifié. Documentation officielle : [envoi d’e-mails Resend](https://resend.com/docs/api-reference/emails/send-email).

Les adaptateurs serveur sont `api/candidature.js` pour Vercel et `netlify/functions/candidature.mjs` pour Netlify ; les deux utilisent `server/candidature.mjs`. Les règles de routage doivent conserver `/api/candidature` avant le repli SPA.

Le serveur valide les champs, le consentement et la taille du corps de requête. Il filtre un champ anti-robot, refuse les requêtes intersites et utilise une clé d’idempotence pour éviter les doubles e-mails correspondant aux mêmes réponses dans la journée. Il ne journalise ni les dossiers ni la clé d’API.

La confirmation n’apparaît que lorsque le prestataire d’envoi a accepté l’e-mail et retourné son identifiant. Cela confirme la prise en charge, pas la remise finale dans la boîte destinataire ; celle-ci se vérifie dans les journaux de livraison Resend. En cas de configuration manquante, de refus ou de réponse ambiguë, le formulaire affiche une erreur et conserve les réponses à l’écran.

## Vérification locale

`node --test tests/candidature.test.mjs` couvre la validation, le refus des demandes invalides, la configuration manquante, les erreurs du prestataire et l’acquittement de succès. Tous les envois y sont simulés ; aucun e-mail réel n’est transmis.

`npm run dev` sert le parcours et le design, mais pas les fonctions de l’hébergeur. Un envoi depuis Vite seul doit donc afficher une erreur, jamais un succès fictif. Pour vérifier le flux serveur complet, utiliser l’environnement de prévisualisation de l’hébergeur après configuration des variables. Un envoi réel de validation reste une action explicite.
