# Acquisition organique d’artisans — Celexia

Plan établi le 7 novembre 2026. Objectif : obtenir davantage de candidatures pertinentes d’entreprises du bâtiment, puis de partenariats effectivement conclus. Les visites seules ne constituent pas le résultat métier.

## Ce qui est connu, ce qui reste à mesurer

Le site dispose de pages métier, d’un formulaire de candidature et d’un identifiant GA4 (`G-VLJ5E084ES`). Le code contient une bannière de consentement. La présence du tag ne prouve ni que les données remontent correctement, ni que les conversions sont configurées dans le compte.

Le formulaire émet désormais trois événements sous réserve d’un consentement analytics accepté, uniquement sur `agencecelexia.fr` ou `www.agencecelexia.fr` : `candidature_start` au premier champ renseigné, `candidature_step` lors de l’accès validé aux étapes 2, 3 et 4, puis `generate_lead` après confirmation de réception par l’API. Chaque événement ou étape est compté une fois par ouverture du formulaire. Le honeypot est exclu. Aucun événement manqué avant le consentement n’est rejoué. Les tests locaux utilisent des fonctions simulées et n’envoient rien à GA4.

Dans le compte GA4, il reste à vérifier la réception réelle et à marquer `generate_lead` comme événement clé. Une candidature n’est comptée ni lors d’un simple clic sur « Envoyer », ni lorsque l’envoi échoue. Ces événements transmettent uniquement l’identifiant fixe du formulaire, la page canonique, un titre fixe et, pour la progression, le numéro d’étape autorisé ; aucun contenu saisi ni paramètre d’URL n’est transmis par ce suivi.

Aucun accès aux rapports Search Console, Bing Webmaster Tools ou GA4 n’a été utilisé pour cet audit. Il n’existe donc pas ici de mesure vérifiée du trafic, des positions, du volume des requêtes ou du nombre de candidatures organiques. Relever une base de départ avant de fixer des objectifs chiffrés.

Les recherches publiques consultées montrent des intentions mélangées : « apporteur d’affaires BTP » peut désigner la recherche d’un prestataire ou le souhait de devenir apporteur ; « partenariat artisans » peut aussi désigner la sous-traitance. C’est une analyse d’intention, pas une mesure de position. Les contenus Celexia doivent toujours préciser qu’ils s’adressent aux artisans qui recherchent des clients.

## Rôle de chaque page

| Page | Intention principale | Réponse attendue et suite du parcours |
| --- | --- | --- |
| `/apporteur-affaires-btp` | Trouver un apporteur d’affaires bâtiment | Comprendre le rôle de Celexia, la qualification et la répartition du travail ; consulter le partenariat. |
| `/partenariat-artisans-btp` | Devenir artisan partenaire | Vérifier métier, secteur, capacité et fonctionnement ; présenter son entreprise. |
| `/guides/commission-apporteur-affaires-btp` | Comprendre commission et pourcentage | Évaluer la prestation, la base de calcul et le moment du paiement ; préparer un échange. Aucun taux chiffré public. |
| `/guides/trouver-chantiers-artisans` | Trouver des chantiers, notamment sans abonnement | Comparer les modèles et sélectionner des projets compatibles avec son entreprise ; examiner l’apport d’affaires. |
| `/guides` | Explorer les questions avant de choisir | Accéder aux guides et aux pages commerciales sans créer de pages orphelines. |
| `/metiers/*` | Chercher des chantiers dans son métier | Répondre aux contraintes concrètes de couverture, façade/ITE, piscine et maçonnerie ; candidater. |

Une recherche « sans abonnement » ne signifie pas nécessairement « gratuit ». Les résultats consultés comprennent des services au contact et à la commission. Expliquer ce qui déclenche la rémunération et le travail réellement accompli est plus utile que répéter un mot-clé.

Les règles éditoriales restent applicables : pas de taux publié, pas de promesse d’exclusivité, pas de volumes garantis, pas de preuve inventée. Le CTA est « Présenter mon entreprise » ; le dépôt du formulaire ne crée pas un compte et ne vaut pas acceptation du partenariat.

## SEO et réponses des IA

Le socle est commun : pages accessibles aux robots, texte compréhensible sans exécution JavaScript, liens internes, réponses concrètes et identité cohérente. Google indique qu’aucun fichier IA ou schéma spécial n’est nécessaire pour ses fonctionnalités génératives. L’indexation et l’affichage ne sont jamais garantis. [Documentation Google](https://developers.google.com/search/docs/appearance/ai-features).

Pour ChatGPT Search, le robot pertinent est `OAI-SearchBot`. `GPTBot` concerne l’entraînement ; ses réglages sont indépendants. `ChatGPT-User` sert certaines consultations demandées par l’utilisateur. Autoriser l’entraînement n’est donc pas une condition de visibilité dans Search. [Documentation OpenAI](https://developers.openai.com/api/docs/bots).

Chez Anthropic, `Claude-SearchBot` contribue à la recherche et `Claude-User` aux consultations demandées par l’utilisateur ; `ClaudeBot` concerne l’entraînement. Vérifier aussi que l’hébergement ne bloque pas les accès légitimes. [Documentation Anthropic](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).

`llms.txt` et `llms-full.txt` peuvent rester des résumés utiles et cohérents du site ; leur présence ne prouve aucune indexation ou citation. Ne pas chercher une longueur « magique » de paragraphe. Donner une réponse précise, un exemple réel lorsqu’il est disponible et des informations qui aident effectivement l’artisan à décider.

## Les 90 premiers jours

### Jours 1 à 14 — publier, faire découvrir, mesurer

1. Publier les modifications après validation. Vérifier sur le domaine public les titres, canoniques, textes pré-rendus, réponses HTTP et sitemap.
2. Ouvrir ou retrouver la propriété Search Console d’`agencecelexia.fr`, confirmer son accès et soumettre `https://agencecelexia.fr/sitemap.xml`. Inspecter les nouvelles pages prioritaires et demander leur indexation après publication. Le code seul ne permet pas de confirmer une validation de propriété faite par DNS. [Démarrage Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).
3. Demander également une nouvelle exploration des pages dont les anciens extraits affichent encore une offre dépassée. Une demande ne force ni le délai, ni le texte du futur extrait. Ne pas répéter les soumissions chaque jour. [Nouvelle exploration Google](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
4. Ajouter ou importer la propriété dans Bing Webmaster Tools, soumettre le sitemap et contrôler l’exploration. IndexNow pourra ensuite notifier les mises à jour ; il ne remplace pas le sitemap et ne garantit pas l’indexation. [Sitemaps Bing](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed), [IndexNow](https://www2.bing.com/indexnow/getstarted).
5. Dans GA4, vérifier le parcours et l’événement `generate_lead` après réception confirmée du formulaire. Le marquer comme événement clé. Ne pas inventer de valeur monétaire. Le refus des cookies réduit la couverture analytique ; les candidatures reçues restent le comptage opérationnel de référence. [Événements recommandés GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead).
6. Contrôler les vues de page dans DebugView. Ne pas ajouter un second suivi manuel à celui de l’historique automatique : `send_page_view: false` ne désactive pas à lui seul les vues liées à l’historique. [Mesure des vues GA4](https://developers.google.com/analytics/devguides/collection/ga4/views).

### Jours 15 à 45 — apporter des preuves de terrain

- Recueillir les questions réellement posées pendant les appels. Enrichir d’abord les pages existantes ; créer une nouvelle page seulement si elle répond à une intention différente.
- Préparer un premier retour d’expérience de partenariat, avec accord de l’entreprise : contexte, métier, zone, besoin initial, travail réalisé, limites et résultat vérifiable. Sans données disponibles, ne pas publier de cas fictif.
- Renforcer les pages métier avec les critères utiles au chiffrage : informations reçues avant le contact, visite nécessaire, calendrier et capacité de production. Éviter les pages de villes obtenues en remplaçant seulement un nom.
- Présenter les personnes et la méthode de Celexia avec des éléments vérifiables. Maintenir les coordonnées et la description de l’activité cohérentes sur les profils professionnels réellement utilisés.
- Préparer des collaborations éditoriales avec de vrais partenaires et acteurs du bâtiment : retour d’expérience, entretien ou ressource pratique. Les mentions externes doivent correspondre à des relations réelles ; aucun achat de faux avis ni création de fausse notoriété.

### Jours 46 à 90 — corriger selon les résultats

- Comparer des périodes de même durée, en séparant les recherches de marque et les recherches génériques. Observer les requêtes et pages qui amènent des artisans, puis la qualité des candidatures reçues.
- Si une page reçoit des impressions pertinentes mais peu de clics, revoir son titre et sa promesse. Si elle attire surtout des personnes souhaitant devenir apporteurs, préciser davantage le public artisan.
- Si les visiteurs consultent le partenariat mais ne commencent pas le formulaire, revoir les réponses aux objections. S’ils commencent puis abandonnent, examiner l’étape concernée et le rendu mobile.
- Enrichir les contenus qui répondent à une vraie demande ; fusionner les doublons éventuels avec redirection. Ne pas produire une série de pages pour le seul nombre d’URL.
- Après cette première période, fixer des objectifs de candidatures qualifiées et de partenariats à partir de la base observée, de la capacité de traitement de l’équipe et du temps de conversion réel.

## Tableau de bord à tenir

| Indicateur | Source | Ce qu’il permet de décider |
| --- | --- | --- |
| Pages découvertes, explorées, indexées | Search Console / Bing | Corriger l’accès et le contenu avant de multiplier les pages. |
| Impressions et clics génériques par page | Search Console | Vérifier que le site attire les bonnes intentions B2B. |
| Débuts de formulaire, étapes, candidatures confirmées | GA4, avec consentement | Repérer les abandons et les pages qui contribuent aux candidatures. |
| Candidatures reçues, pertinentes, rappelées, partenariats conclus | Suivi interne Celexia | Juger le résultat commercial et la qualité, au-delà du trafic. |
| Visites identifiables depuis moteurs IA | GA4 / rapports disponibles | Observer une partie du trafic IA, sans prétendre couvrir les réponses sans clic. |
| Mentions et citations sur un échantillon de questions | Contrôle manuel daté | Suivre une tendance indicative, pas un classement universel. |

Échantillon IA mensuel possible, dans de nouvelles conversations avec recherche activée : « Où trouver un apporteur d’affaires BTP pour une entreprise de couverture ? », « Comment choisir un partenariat pour recevoir des chantiers sans abonnement ? », « Quels points vérifier sur la commission d’un apporteur d’affaires bâtiment ? ». Conserver la date, le service utilisé, la formulation, la présence éventuelle de Celexia et les pages citées. Les réponses varient selon le contexte et ne constituent pas une mesure exhaustive.

Les données analytics doivent rester distinctes du dossier de candidature : aucun nom, email, téléphone, chiffre d’affaires saisi, identifiant de dossier ou texte libre dans les événements, titres ou URL transmis. [Recommandations Google sur les données personnelles](https://support.google.com/analytics/answer/6366371).
