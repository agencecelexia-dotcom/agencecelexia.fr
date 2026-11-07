# Mesure du chargement — 7 novembre 2026

Le script Google Analytics était téléchargé dès l’ouverture de chaque page, avant le choix de cookies. Il est désormais chargé uniquement après acceptation, sur le domaine de production. Un accord mémorisé est repris au chargement suivant. Les polices, les images et la direction artistique restent identiques.

## Comparaison du premier chargement

Mesure sur la page d’accueil issue du build local, sans cache. Les tailles HTML/JS/CSS ci-dessous sont des estimations gzip locales ; les polices WOFF2 et le PNG sont comptés à leur taille de fichier. La version finale comprend aussi le nouveau guide éditorial et les changements GEO de cette livraison.

| Ressource | Avant, octets transférables estimés | Après, octets transférables estimés |
| --- | ---: | ---: |
| HTML de l’accueil | 8 660 | 8 464 |
| JavaScript de l’application | 39 479 | 41 764 |
| JavaScript des dépendances | 72 803 | 72 803 |
| CSS | 11 061 | 11 087 |
| Deux polices préchargées | 46 820 | 46 820 |
| Logo | 20 802 | 20 802 |
| **Total des ressources du site** | **199 625** | **201 740** |

Le JavaScript applicatif passe de 150 381 à 158 996 octets bruts ; celui des dépendances reste à 227 528 octets bruts. L’ensemble des ressources du site augmente de 2 115 octets estimés, avec les ajouts éditoriaux et le chargeur de consentement. Il ne faut donc pas présenter cette livraison comme une réduction du bundle applicatif.

Une lecture HTTP indépendante du script public `gtag.js` a retourné **181 088 octets gzip**, soit **540 672 octets de JavaScript décompressé**. Ce téléchargement et son exécution sont maintenant évités tant que le visiteur n’a pas accepté les cookies. Les autres requêtes éventuellement déclenchées par Google n’ont pas été comptées. Après acceptation, le script reste nécessaire à la mesure consentie.

À titre d’ordre de grandeur, additionner cet échantillon du script tiers aux estimations du site donne 380 713 octets avant, contre 201 740 octets après pour un nouveau visiteur qui n’a pas accepté : **178 973 octets évités sur ce périmètre**. Ce calcul mélange des tailles gzip locales et une réponse HTTP mesurée ; il ne constitue ni une trace réseau navigateur complète ni un gain de temps de chargement mesuré. Le script tiers peut également évoluer.

## Vérification et limites

Les 13 tests ciblés de consentement et d’événements passent : absence de chargement avant accord, reprise d’un accord enregistré, absence de double configuration, nouvelle tentative après erreur réseau, refus ultérieur, erreurs de stockage, événements autorisés et exclusion des données du formulaire. Le lint ciblé et `git diff --check` passent également. Le chargement suit le [mode de consentement basique documenté par Google](https://developers.google.com/tag-platform/security/concepts/consent-mode) : la couverture de mesure avant acceptation change volontairement, puisqu’aucun ping Google n’est envoyé.

L’appel public PageSpeed Insights mobile a répondu **HTTP 429 — quota épuisé**. Aucun résultat Lighthouse, LCP, INP, CLS ou gain de classement n’est déduit de ces tailles. Une mesure mobile réelle après publication reste nécessaire pour évaluer les temps de chargement.

Reproduire l’inventaire après un build :

```sh
node scripts/measure-payload.mjs
node scripts/measure-payload.mjs /guides/demande-qualifiee-btp
node --test tests/analytics-loader.test.mjs tests/analytics.test.mjs
```
