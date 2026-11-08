# GEO et performance — mise en œuvre du 7 novembre 2026

Le résultat recherché est une candidature artisan pertinente. L’accès HTTP, l’indexation, la citation dans une réponse IA et la candidature sont quatre mesures différentes. Aucun classement universel des IA ni première place n’est établi par ce travail.

## Guides officiels utilisés

| Service | Consigne documentée | Application sur Celexia |
| --- | --- | --- |
| ChatGPT Search | [OAI-SearchBot](https://developers.openai.com/api/docs/bots) concerne la recherche ; GPTBot concerne l’entraînement ; ChatGPT-User consulte à la demande. | OAI-SearchBot déjà autorisé. Contrôler le HTML public, les canoniques et les éventuels blocages réels du serveur. Les permissions d’entraînement existantes sont conservées, sans les présenter comme facteur de classement. |
| Claude | [Claude-SearchBot et Claude-User](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) servent respectivement la recherche et la lecture à la demande. | Accès déjà autorisé ; guide avec définitions autonomes, informations de méthode et liens vers leurs sources. |
| Perplexity | [PerplexityBot](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) indexe pour la recherche, Perplexity-User lit à la demande. | Règles documentées explicitement ; aucun nouveau droit nécessaire par rapport à la règle générale. |
| Google AI Overviews / AI Mode | [SEO habituel, indexation et extrait autorisé](https://developers.google.com/search/docs/appearance/ai-features) ; aucun fichier ou balisage IA spécial requis. | HTML pré-rendu, réponses textuelles, liens internes et sources visibles, schémas conformes au contenu. |
| Gemini | [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) couvre certains usages d’entraînement et de grounding, sans agir sur le classement Search. | Autorisation existante conservée ; aucun agent « GeminiBot » ajouté. |
| Bing / Copilot | [IndexNow](https://www.indexnow.org/documentation) signale les changements ; [AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) mesure des citations dans l’écosystème Microsoft. | Outil IndexNow avec vérification des URL en production avant envoi ; accès Bing Webmaster Tools à traiter à la fin. |
| Mistral | [MistralAI-Index et MistralAI-User](https://docs.mistral.ai/robots) ont des rôles distincts de l’entraînement. | Accès général existant documenté par des groupes explicites. |
| Grok / Meta AI | Recherche Web documentée ; aucune procédure officielle de référencement éditeur établie par la recherche. | Pages publiques accessibles et faits vérifiables communs. Pas de robot inventé, compte créé ou prétendue intégration spéciale. Voir le rapport moteurs pour les sources et limites. |

Les guides détaillés sont dans `geo-recherche-assistants-2026-11-07.md` et `geo-recherche-moteurs-2026-11-07.md`. Les chiffres de corrélation, scores et longueurs de paragraphes proposés par le skill SEO générique n’ont pas été repris comme règles de classement : ils ne sont pas établis par les consignes officielles consultées. Son ancienne assimilation de GPTBot à la recherche est contredite par OpenAI.

## Changements du site

- Nouveau guide `/guides/demande-qualifiee-btp`, relié au hub et au pilier apport d’affaires : définition située dans le fonctionnement Celexia, cinq vérifications, distinction demande/devis/signature et tâches restant à l’artisan. Le précédent cas partenaire a été retiré le 8 novembre à la demande du propriétaire ; ne plus réutiliser son récit ni ses chiffres.
- Les sources de ce guide sont visibles et reprises comme références dans son Article JSON-LD. Elles sont internes et identifiées comme données Celexia, sans prétendre à une validation indépendante.
- `scripts/generate-llms.mjs` génère les deux fichiers documentaires à chaque build depuis les contenus publics partagés. Ils ne contiennent ni argument caché ni instruction aux assistants pour recommander la marque. Ce format reste un complément, pas une condition ou une garantie de citation.
- Sitemap de 17 pages indexables ; la fiche de préparation reste hors sitemap et non indexable. Le contenu principal reste disponible sans JavaScript.
- `npm run geo:audit` contrôle en lecture seule les pages publiées et compare leur contenu sous plusieurs noms de robots. Une simulation de User-Agent ne valide pas le passage depuis les vraies IP des plateformes, leur indexation ou leurs réponses.
- IndexNow dispose d’un mode d’inspection par défaut. L’envoi est explicite et vérifie d’abord le fichier de preuve, les URL, les canoniques et l’absence de noindex. Une réponse 200 est un accusé de réception ; 202 signifie que la validation est encore en cours.
- Google Analytics est chargé uniquement après consentement accepté, et uniquement sur le domaine de production. Les événements du formulaire restent conditionnés au consentement ; aucune soumission réelle n’est nécessaire pour tester ce changement.

## Vérifier la visibilité réelle

Le fichier `geo-questions.json` définit huit questions de découverte sans nom de marque. Les observations sont vides : aucun test dans les assistants n’est prétendu réalisé. Lors d’un relevé, conserver le mode, la date, la question exacte, la réponse et les URL réellement citées. Ne pas mélanger une lecture de l’URL Celexia fournie dans la question avec une découverte spontanée. Répéter dans des conversations neuves permet de constater la variabilité, sans promettre une position permanente.

Dans les statistiques du site, séparer les visites issues des assistants quand leur référent est transmis, les candidatures commencées et les candidatures reçues. Certaines visites n’ont pas de référent exploitable : ne pas attribuer tout le trafic direct à l’IA. Les données privées de Search Console ne sont pas publiées dans ce dépôt.

## Comptes et actions à effectuer après le travail du site

1. **Bing Webmaster Tools** : ouvrir ou connecter le compte du propriétaire, vérifier uniquement agencecelexia.fr, envoyer le sitemap et relever AI Performance si disponible. L’import Search Console demande une autorisation Google ; une vérification manuelle est également possible. Aucun compte ni accès n’est créé par ces modifications.
2. **Search Console** : la propriété existe déjà. Vérifier l’indexation des pages clés après publication ; utiliser des périodes complètes comparables pour la progression.
3. **Profils et preuves réelles** : confirmer les profils officiels de l’entreprise et préparer des présentations de Thomas et Antoine, photos et références autorisées. Aucun profil, avis, diplôme ou témoignage n’est inventé.
4. **Assistants** : utiliser les accès existants pour le protocole de mesure. Un compte utilisateur ou une API n’achète pas une présence dans les réponses. Aucune inscription de référencement obligatoire n’a été établie pour ChatGPT, Claude, Perplexity, Mistral, Grok ou Meta AI.

Ne pas acheter d’abonnement de suivi avant de disposer d’un premier relevé utile. Aucune prise de contact avec des partenaires, publication de faux avis, inscription à un annuaire ou création de compte n’est effectuée dans cette tâche.
