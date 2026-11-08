# Recherche officielle : visibilité dans les moteurs et assistants IA

Vérification documentaire du 7 novembre 2026. Sources primaires uniquement. Ce document ne mesure ni une hausse de trafic Celexia ni une position dans une réponse IA. Aucun compte n'a été créé et aucun réglage externe n'a été modifié.

**Mise à jour du 8 novembre 2026 :** le précédent cas partenaire est retiré à la demande du propriétaire. Ne plus réutiliser ses chiffres, son récit ou sa présentation comme preuve. Les observations d’accès et de configuration de ce rapport restent datées du relevé initial ; elles ne remplacent pas un contrôle du site actuel.

## Ce que l'on peut contrôler

La découverte d'une page, son indexation, sa sélection comme source d'une réponse et la visite d'un artisan sont des étapes différentes. L'entraînement d'un modèle constitue encore un autre usage. Autoriser un robot ne prouve aucune de ces étapes suivantes.

### Google Search : AI Overviews et AI Mode

Google applique les bases habituelles du référencement. Une page doit être indexée et pouvoir apparaître avec un extrait pour être éligible comme lien source. Googlebot contrôle l'exploration de Search, y compris ses fonctions IA. Le contenu important doit être accessible en texte, relié par des liens internes et cohérent avec les données structurées. Aucun fichier IA spécial ni schéma supplémentaire n'est exigé ; `llms.txt` n'est donc pas une condition de présence. L'éligibilité ne garantit pas l'affichage. Les performances de ces fonctions sont incluses dans le type de recherche **Web** de Search Console. [Guide officiel Google](https://developers.google.com/search/docs/appearance/ai-features).

**Pour Celexia :** inspecter l'indexation des pages partenariat, métiers et commission ; conserver leur HTML complet et leurs liens utiles. Mesurer les impressions, clics et candidatures au lieu de déduire une présence IA d'un sitemap accepté. Ne pas créer une variante de chaque page par assistant.

### Gemini : attention au rôle de Google-Extended

`Google-Extended` est un jeton de contrôle dans robots.txt, sans agent HTTP distinct. Il concerne à la fois l'entraînement de futurs modèles Gemini et l'utilisation de contenu de l'index Google comme sources au moment de certaines réponses dans Gemini et Vertex AI. Il ne modifie pas l'inclusion ni le classement dans Google Search. Il serait donc inexact de le présenter uniquement comme un robot d'entraînement, ou comme une condition pour AI Overviews. [Liste officielle des robots Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers).

**Pour Celexia :** l'autorisation explicite existe déjà dans `public/robots.txt`. Aucun besoin d'ajouter un robot inventé « GeminiBot ». La décision d'autoriser l'entraînement doit rester distincte de l'objectif commercial ; ne pas modifier cette préférence silencieusement.

### Bing, Copilot et services de recherche Microsoft

Bing Webmaster Tools permet de vérifier le site, diagnostiquer son exploration, soumettre le sitemap et examiner ses résultats. Sa fonction **AI Performance** mesure notamment des citations de pages dans Copilot, les réponses IA de Bing et certaines intégrations partenaires. Ses données agrégées ne constituent ni un classement universel des assistants, ni une mesure directe des clics ou des conversions. [Présentation officielle AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [aide AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).

**Pour Celexia :** c'est le complément de mesure prioritaire à Search Console. Importer uniquement la propriété Celexia si elle n'existe pas encore, vérifier le sitemap et établir un état initial des pages citées. L'accès au tableau de bord ne promet aucune citation.

**Évolution annoncée, pas encore active au 7 novembre :** Microsoft a annoncé le 30 octobre 2026 des préférences indépendantes **AI Training** et **AI Grounding**, dont l'application commence le **1er février 2027**, au fil des explorations. L'autorisation sera la valeur par défaut. Le grounding pourra être autorisé, limité aux expériences Microsoft ou interdit au niveau de chaque page. Ces préférences d'usage ne remplacent pas les autorisations d'exploration et ne changent pas l'éligibilité à la recherche classique. Ne pas les décrire comme déjà opérationnelles. Le dépôt contrôlé ne contient pas de restriction `noarchive`/`nocache` nécessitant une migration à ce stade. [Annonce Microsoft](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/), [FAQ et calendrier](https://www.bing.com/webmasters/help/new-ai-preferences-2t1cc16d).

### IndexNow : notification des changements

IndexNow permet de signaler des URL créées, modifiées ou supprimées aux moteurs participants. Une implémentation manuelle utilise un fichier texte de vérification hébergé sur le même domaine et une requête HTTP ; elle ne requiert pas de souscription payante ni de compte propre à chaque moteur. Une réponse HTTP 200 signifie que la notification est reçue, pas que la page est indexée. [Protocole officiel](https://www.indexnow.org/documentation).

**Pour Celexia :** préparer une notification après publication des seules pages réellement nouvelles ou modifiées, puis vérifier sa réception. Garder le sitemap pour l'inventaire complet. Éviter les envois répétés sans changement ; une soumission ne garantit pas l'indexation immédiate. Google ne figure pas parmi les destinations participantes listées par cette documentation : ne pas vendre IndexNow comme un envoi à Google, ChatGPT, Claude ou à toutes les IA. [FAQ officielle et participants](https://www.indexnow.org/faq).

### Mistral : Le Chat / Vibe

La documentation distingue désormais trois agents : `MistralAI-Index` indexe pour la recherche Mistral sans entraînement ; `MistralAI-User` récupère des pages à la demande d'un utilisateur, sans exploration automatique ni entraînement ; `MistralAI-Training` collecte pour entraîner des modèles, sans alimenter l'index de recherche ou les réponses en direct. La documentation les rattache aujourd'hui à Vibe. [Robots officiels Mistral](https://docs.mistral.ai/robots). Le changement de nom de Le Chat vers Vibe est documenté dans l'[aide Mistral](https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe).

**Pour Celexia :** la règle générale `User-agent: * / Allow: /` couvre déjà ces agents dans le dépôt. Les nommer explicitement n'est pas une nouvelle ouverture indispensable. Contrôler les éventuels blocages du CDN à partir de requêtes réelles et d'IP officielles si disponibles, puis la lisibilité du contenu. Aucune inscription d'éditeur ou promesse de citation n'est documentée dans ces sources.

### Grok / xAI

La documentation officielle décrit un outil de recherche et de navigation Web en temps réel. Il s'agit d'une capacité du produit/API, pas d'une méthode de référencement réservée aux éditeurs. [Documentation Web Search](https://docs.x.ai/developers/tools/web-search). La FAQ distingue aussi la recherche en temps réel du préentraînement sur des données publiques. [FAQ officielle](https://x.ai/legal/faq).

**Pour Celexia :** maintenir des pages publiques lisibles et des sources originales citables. Aucune procédure officielle de soumission d'un site, aucun agent spécifique à autoriser ni tableau de classement des éditeurs n'ont été établis par cette recherche. Ne pas ajouter un user-agent supposé « GrokBot » à titre de garantie. Un test de réponse avec recherche Web serait une observation ponctuelle à enregistrer avec sa date et sa question, pas une position stable.

### Meta AI

Meta décrit la recherche d'informations Web dans son assistant ; ses expériences récentes intègrent également des contenus publics de ses applications. Cela ne démontre pas qu'une page Facebook ou un site externe sera recommandé pour une requête BTP. [Présentation officielle Meta AI](https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/), [présentation Facebook AI Mode](https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/amp/).

La documentation Meta sur les robots n'a pas pu être lue avec cet outil (réponse 429/accès indisponible). Aucun rôle précis de robot ni prescription de robots.txt n'est donc validé ici pour Meta. Aucune inscription d'éditeur garantissant une présence dans Meta AI n'a été trouvée. Les anciens partenariats de recherche annoncés ne permettent pas de déduire toute l'infrastructure actuelle.

## Actions concrètes et ordre proposé

1. **Établir la mesure.** Exporter Search Console sur deux périodes comparables, avec pays, appareil, requête et page identiques ; séparer requêtes de marque et recherches métier. Faire de même dans Bing dès que des données sont disponibles. Enregistrer les candidatures issues de ces visites. Cette recherche documentaire n'a pas accès à ces mesures privées.
2. **Faire découvrir les changements.** Vérifier les URL publiques et leur indexation, puis préparer IndexNow pour la publication. Conserver le sitemap exact. Contrôler les refus CDN uniquement s'ils sont observés ; le robots.txt local autorise déjà les recherches mentionnées.
3. **Renforcer les sources propres à Celexia.** Publier les informations de méthode, pages métiers et critères pratiques vérifiables, avec périmètre et limites explicites. Toute future preuve de résultat doit reposer sur de nouveaux éléments vérifiables et autorisés ; le cas retiré ne peut pas être réutilisé. Mon conseil éditorial, déduit des recommandations de clarté et de fiabilité, est de développer des éléments que d'autres sites ne peuvent pas documenter à la place de Celexia.
4. **Observer les réponses sans inventer un score.** Conserver un petit jeu de questions B2B constantes par métier et comparer à dates définies la mention de Celexia, l'URL citée, l'exactitude et les concurrents cités. Consigner les questions sans mention de marque séparément des questions qui demandent déjà Celexia. Aucun résultat de ce test n'a été produit pendant cette mission.

## Comptes et accès à traiter à la fin

- **Google Search Console :** la propriété existe déjà d'après la capture fournie ; aucun nouveau compte à créer. Il reste à obtenir/exporter ses données de performance pour conclure sur une progression.
- **Bing Webmaster Tools :** connexion ou création seulement si nécessaire, puis import limité à Celexia depuis Search Console. Cet import demande une autorisation Google ; on peut aussi vérifier manuellement le site. À effectuer avec le propriétaire lors de l'étape finale. [Procédure officielle d'import](https://blogs.bing.com/webmaster/2019/9/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools/).
- **IndexNow :** pas de création de compte requise pour le protocole manuel. Il faut publier le fichier de vérification sur le domaine puis envoyer les URL ; aucune soumission effectuée ici.
- **Mistral, Grok, Meta AI :** aucune inscription de référencement nécessaire n'a été établie. Un abonnement utilisateur ou une clé API sert à utiliser/tester un assistant, pas à acheter sa recommandation. Aucun achat recommandé pour cette étape.
