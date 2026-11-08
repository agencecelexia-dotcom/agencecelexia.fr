# Claude et Perplexity — accès, citations et observations Celexia

Recherche réalisée le 7 novembre 2026. Sources officielles consultées et contrôles HTTP publics, sans connexion à un compte Claude ou Perplexity. Ce document ne mesure aucune citation effective de Celexia dans ces assistants.

**Mise à jour du 8 novembre 2026 :** le précédent cas partenaire est retiré à la demande du propriétaire. Ne plus réutiliser ses chiffres, son récit ou sa présentation comme preuve. L’audit HTTP ci-dessous conserve un historique daté ; il ne décrit pas l’inventaire ou les résultats actuels du site.

## Ce que disent les documentations officielles

### Anthropic / Claude

Anthropic distingue trois fonctions : `Claude-SearchBot` sert la recherche, `Claude-User` les consultations demandées par un utilisateur et `ClaudeBot` la collecte susceptible de contribuer à l’entraînement. Les permissions peuvent être gérées séparément. Le guide indique que les robots respectent `robots.txt` et ne contournent pas les CAPTCHA. Autoriser le robot d’entraînement n’est donc pas équivalent à optimiser l’accès à la recherche. [Guide officiel des robots Anthropic](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).

La recherche web de Claude peut consulter plusieurs sources et fournir des liens de citation. Donner directement l’URL de Celexia à Claude teste sa capacité de lecture, pas sa propension à recommander spontanément Celexia. Les résultats peuvent aussi dépendre du contexte, du mode de recherche et de la localisation. [Aide officielle Claude sur la recherche web](https://support.claude.com/en/articles/10684626-enable-and-use-web-search).

### Perplexity

`PerplexityBot` est destiné à faire apparaître des sites dans la recherche ; il ne sert pas à collecter l’entraînement des modèles de fondation. `Perplexity-User` sert les lectures déclenchées par les utilisateurs et n’est pas un robot d’indexation. La documentation précise que ce dernier ignore généralement `robots.txt` du fait de cette lecture à la demande.

Pour un pare-feu applicatif, Perplexity recommande de vérifier à la fois l’agent déclaré et ses plages IP officielles, et de suivre les journaux d’accès. Un simple en-tête `User-Agent` n’authentifie pas un robot. Le guide actuel est à [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) ; l’ancienne URL `/guides/bots` y redirige.

Le programme éditeurs de Perplexity concerne des partenariats avec des médias et créateurs et des outils de monétisation. Il ne doit pas être présenté comme une inscription obligatoire au référencement, ni comme un moyen d’acheter la première recommandation d’une entreprise. Ce n’est pas une priorité adaptée au site commercial Celexia. [Présentation officielle du programme éditeurs](https://www.perplexity.ai/en-GB/hub/blog/introducing-the-perplexity-publishers-program).

## Audit HTTP public de Celexia

Contrôles historiques effectués le 7 novembre 2026 sur le domaine public, en lecture seule, sans exécution JavaScript :

| Élément | Observation |
| --- | --- |
| `/robots.txt` | HTTP 200 ; accès général autorisé ; règles explicites pour `Claude-SearchBot`, `Claude-User`, `PerplexityBot` et les robots OpenAI. |
| `/sitemap.xml` | HTTP 200 ; XML lisible ; 16 URL à l’heure du contrôle. Cet inventaire historique précède le retrait du cas et les autres changements ; il ne représente pas le sitemap actuel. |
| `/apporteur-affaires-btp` | HTTP 200 ; H1 présent dans le HTML initial ; canonical propre ; directives d’indexation ; graphe Organization, WebSite, WebPage, BreadcrumbList et Service. |
| `/guides/commission-apporteur-affaires-btp` | HTTP 200 ; H1 présent dans le HTML initial ; canonical propre ; directives d’indexation ; graphe incluant Article. |
| `/about` | HTTP 200 ; contenu présent sans JavaScript ; canonical propre ; AboutPage et identité d’organisation. |
| Requête avec agent déclaré `Claude-SearchBot` sur la page apporteur | HTTP 200, avec H1 et métadonnées attendus. |
| Requête avec agent déclaré `PerplexityBot` sur la même page | HTTP 200, avec H1 et métadonnées attendus. |

Ces dernières requêtes sont des tests depuis l’environnement d’audit, **pas des accès provenant des véritables plages IP de Claude ou Perplexity**. Elles excluent un blocage simple lié à ces noms d’agent lors du test ; elles ne prouvent ni une visite réelle, ni l’absence de restrictions portant sur d’autres IP, ni une indexation.

Au moment du contrôle, `Perplexity-User` n’avait pas de bloc dédié, mais bénéficiait déjà de `User-agent: *` avec `Allow: /`. L’ajout d’un bloc explicite était une amélioration de lisibilité, pas la correction d’un blocage constaté.

Les permissions d’entraînement déjà présentes ne doivent pas être modifiées au seul motif de la visibilité commerciale. Les fonctions d’entraînement, d’indexation et de lecture à la demande sont distinctes.

## Ce qui mérite du travail maintenant

Le socle technique testé ne montre pas de blocage évident. Les efforts supplémentaires doivent surtout améliorer les informations que les moteurs pourront retrouver et utiliser.

1. **Rendre les faits de l’entreprise faciles à vérifier.** Garder dans la page de présentation une description nette du rôle, des quatre métiers, de la zone couverte, de la qualification et de la répartition du travail. Ajouter les profils publics officiels seulement après confirmation de leur propriété et de leur actualité. Une mention `sameAs` n’est pas une preuve d’autorité à elle seule.
2. **Documenter la provenance de futures preuves vérifiables.** Le cas retiré ne doit plus être utilisé. Avant toute nouvelle publication, réunir de nouveaux éléments vérifiables et autorisés, puis préciser leur provenance, leur période et leur périmètre. Ne pas ajouter d’avis, identité de client, métrique de résultat ou validation indépendante non établis.
3. **Développer les réponses de métier.** Décrire les informations nécessaires pour étudier une réfection de toiture, une ITE, une extension ou une piscine, et les limites de la qualification avant l’étude technique de l’artisan. Ces différences concrètes sont plus utiles qu’une nouvelle série de pages presque identiques.
4. **Maintenir une version cohérente des faits.** Les pages HTML, les métadonnées, les schémas et les fichiers llms doivent présenter le même modèle. Conserver les taux pour l’appel et ne pas réintroduire d’argument sur l’exclusivité des demandes.
5. **Obtenir des mentions externes réelles.** Vérifier et actualiser les profils professionnels appartenant à Celexia, puis envisager des retours d’expérience avec de vrais partenaires et leur accord. Ne pas fabriquer des pages encyclopédiques, des avis ou des affiliations pour créer artificiellement une apparence d’autorité.

Ces actions sont des recommandations de clarté et de vérifiabilité à partir du site observé. Les sources consultées ne donnent pas de longueur de paragraphe, de schéma ou de fichier qui garantirait une citation. Les fichiers llms restent une documentation complémentaire, pas une preuve de présence dans les réponses.

## Comment mesurer le GEO sans confondre les tests

Trois contrôles répondent à trois questions différentes :

- **Lecture** : l’assistant peut-il ouvrir une URL Celexia fournie explicitement et en restituer correctement les faits ?
- **Découverte** : cite-t-il spontanément Celexia lorsqu’on lui pose une question B2B neutre, sans nommer la marque ?
- **Conversion** : les visites identifiables provenant de ces services aboutissent-elles à des candidatures pertinentes ?

Utiliser des conversations neuves, demander une recherche web, noter la date, le service, le mode, la question et les URL citées. Vérifier les liens sources et le sens des affirmations. Une citation sur un seul essai n’établit pas une première place durable ; une absence sur un seul essai n’établit pas une exclusion du moteur.

Les journaux d’hébergement, lorsqu’ils sont disponibles et vérifiés avec les données IP officielles, peuvent établir des visites de robots. Ils ne permettent pas à eux seuls de conclure que Celexia a été cité dans une réponse.
