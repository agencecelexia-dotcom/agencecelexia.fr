---
name: celexia-copy
description: >
  Règles de copywriting de conversion pour agencecelexia.fr (apport d'affaires
  auprès d'artisans du bâtiment). Contient les faits d'offre vérifiés à ne pas
  déformer et l'interdiction des promesses chiffrées inventées. À charger avant
  d'écrire ou réécrire tout texte visible : hero, section, CTA, FAQ, meta
  description, page métier, email. Se déclenche sur « copywriting », « rédiger »,
  « réécrire le texte », « accroche », « CTA », « FAQ », « argumentaire »,
  « landing », « conversion ».
---

# Copywriting Celexia — artisans du bâtiment

## L'offre, telle qu'elle est réellement

Ces faits sont cohérents entre [public/llms.txt](public/llms.txt), le JSON-LD de
[scripts/prerender-meta.mjs](scripts/prerender-meta.mjs) et les pages. **Toute
nouvelle formulation doit rester compatible avec eux, et un changement d'offre
doit être répercuté dans les trois.**

- Celexia est **apporteur d'affaires**, pas une agence de prestation. Elle ne
  vend ni site web, ni abonnement, ni prestation SEO à l'artisan.
- Celexia **finance 100 % de la publicité** (Google Local Services Ads).
  L'artisan n'avance aucun budget pub.
- Celexia **reçoit et qualifie les appels** : besoin, zone d'intervention,
  budget, sérieux de la demande.
- Les chantiers qualifiés sont transmis à l'artisan, qui **chiffre et signe
  lui-même**. Celexia ne gère pas la relation commerciale.
- Rémunération : **10 % du montant TTC des devis effectivement signés**.
  Pas de signature = pas de facture.
- **Zéro** frais d'entrée, abonnement, engagement de durée, préavis, pénalité de
  sortie.
- Périmètre : **4 métiers** à chantiers ≥ 10 000 € — construction de piscines,
  couverture, façade/ITE, maçonnerie. France entière. Liste faisant foi :
  `METIERS` dans [src/data/metiers.js](src/data/metiers.js).
- Entité : CELEXIA SASU, SIREN 939 306 429, Nogent-sur-Marne (Île-de-France).
  Fondateurs : Rayan Music et Ilyes Music. Slogan : « On gagne quand vous
  gagnez ».
- Contact : 06 51 72 57 56 — agence.celexia@gmail.com. **Conversion unique :
  l'inscription en ligne** (`registerUrl()` dans [src/lib/links.js](src/lib/links.js)),
  au libellé `CTA_LABEL`, identique partout. Il n'y a plus de prise de
  rendez-vous ni d'embed Cal.com.

## Deux interdictions absolues, propres à ce site

**1. Ne jamais décrire les canaux d'acquisition.** Ni « Google », ni « Ads », ni
« campagnes », ni « référencement ». C'est le métier de Celexia et c'est ce
qu'elle finance à la place de l'artisan. La formulation retenue assume le refus
(« on ne dira pas comment on les trouve ») et compense par une précision totale
sur ce qui est transmis. Esquiver mollement ferait passer Celexia pour un
revendeur de leads, exactement ce qu'elle n'est pas.

**2. Ne jamais publier de terme contractuel.** Ni durée, ni préavis, ni clause
de non-contournement, ni délai de paiement. Et surtout ne pas écrire l'inverse :
les mentions « sans engagement » et « aucun préavis » ont été retirées de tout
le site parce qu'elles contredisaient le contrat réel. Le site ne dit plus rien
sur la durée. Seul chiffre contractuel autorisé : **10 %**.

## Interdiction : les promesses chiffrées inventées

Le repo porte une trace explicite de cette dérive
([CORRECTIONS_PROMESSES.md](CORRECTIONS_PROMESSES.md), écrit pour l'ancien
modèle de prestation). Les pages citées n'existent plus, **mais la règle reste
la règle** et s'applique au modèle actuel.

Ne jamais écrire, sauf donnée réelle fournie par le client et sourcée :

| Interdit | Pourquoi | Remplacer par |
|---|---|---|
| « Résultats garantis », « ou remboursé » | Promesse contractuelle non tenue par l'offre | « Vous ne payez que sur devis signé » |
| « Position #1 sur Google » | Non maîtrisable, trompeur | « Positionnement prioritaire dans votre zone » |
| « +300 % de trafic », « ROI 42:1 », « 4,8/5 » | Chiffres inventés | Bénéfice qualitatif, ou rien |
| « 15 h gagnées par semaine » | Statistique fabriquée | « Vous ne courez plus après les devis » |
| Avis, notes, logos clients fictifs | Faux témoignage | Preuve réelle uniquement |

Formulations sûres : « objectif de… », « potentiel de… », « selon votre
activité… », « jusqu'à… » (si un plafond réel existe).

**La bonne nouvelle : l'offre n'a pas besoin de gonfler les chiffres.** Le seul
argument nécessaire est le renversement du risque — Celexia avance l'argent de
la pub et n'est payée que si l'artisan signe. C'est concret, vérifiable, et plus
fort qu'un pourcentage inventé. Construire la copy là-dessus.

## Le lecteur

Artisan, patron de TPE, 1 à 10 salariés. Lit sur mobile, souvent entre deux
chantiers, avec les mains sales et peu de patience. Il a déjà été démarché par
des agences web et des plateformes de mise en relation, et il en est sorti
échaudé (leads revendus 5 fois, abonnements qui courent, engagements 12 mois).

Ce qu'il se demande, dans l'ordre :
1. Combien ça me coûte si ça ne marche pas ? → **zéro**, le dire tôt.
2. C'est encore un abonnement ? → **non**, le dire explicitement.
3. Les demandes sont sérieuses ou c'est du tout-venant ? → qualification.
4. Je suis coincé combien de temps ? → **aucun engagement**.
5. Qui je dois appeler et quand ? → CTA unique.

Écrire pour cette liste, dans cet ordre. Toute section qui ne répond à aucune de
ces questions est candidate à la suppression.

## Ton

- **Vouvoiement**, français courant, phrases courtes. Un artisan, pas un CMO.
- **Bannir le jargon marketing** : « scalable », « funnel », « growth »,
  « ROI », « lead nurturing », « acquisition omnicanale ». Dire « chantier »,
  « devis », « appel », « client », « zone ».
- Concret plutôt qu'abstrait : « on vous transmet un chantier prêt à chiffrer »
  bat « nous générons des opportunités qualifiées ».
- Pas de superlatifs empilés, pas de ponctuation excitée, pas d'emoji dans les
  textes de page.
- Nommer le prix tôt et sans détour. Cacher le prix fait fuir cette cible.

## Structure d'une section qui convertit

1. **Accroche** — un bénéfice concret ou le renversement de risque.
2. **Preuve ou mécanique** — comment ça marche, en une phrase vérifiable.
3. **Levée d'objection** — celle qui correspond à la position dans la page.
4. **CTA** — verbe d'action + absence de risque.

CTA : « Réserver un appel de 30 min », « Voir si mon métier est couvert ».
Éviter « En savoir plus », « Découvrir », « Soumettre ». Préciser la gratuité et
l'absence d'engagement à côté du bouton, pas dedans.

## Cohérence technique du texte

- Une **FAQ visible ajoutée à l'écran doit être ajoutée à `FAQ_LD`** dans
  `scripts/prerender-meta.mjs`, et inversement — voir le skill
  [celexia-routes](.claude/skills/celexia-routes/SKILL.md).
- Une `description` de page se change **aussi** dans `prerender-meta.mjs`
  (c'est elle que Google lit), pas seulement dans le composant React.
- Meta description : ~155 caractères, avec le prix ou le « sans engagement ».
- Un seul `<h1>` par page ; la hiérarchie `h2`/`h3` doit suivre le sens, pas la
  taille voulue à l'écran.
- Pages métiers : le texte est générique et paramétré par le label du métier.
  Écrire des tournures qui restent correctes pour les 19 labels, y compris les
  plus longs (« Restauration après dégât des eaux »).
