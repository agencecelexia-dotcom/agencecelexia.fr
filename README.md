# Agence Celexia

Site de présentation de Celexia, apporteur d’affaires pour les artisans du bâtiment. React 19, Vite 7, React Router 7 et Tailwind CSS 3.4. Identité visuelle sur papier lavande, structurée par le violet et des accents citron.

## Direction visuelle

Space Grotesk compose les titres ; Manrope porte les paragraphes, la navigation et les champs. Les deux familles variables (poids 400–700) sont hébergées localement en WOFF2, avec leurs licences OFL dans `public/fonts/`.

Les pages partagent les échelles `.page-title` / `.hero-title` et `.section-title`, un fond papier lavande, des surfaces arrondies, des filets fins et des boutons en pilule. Les couleurs sont définies dans `tailwind.config.js` et les composants visuels communs dans `src/index.css`.

## Développement et vérification

```sh
npm install
npm run dev
npm run build
node --test tests/candidature.test.mjs
```

Le build produit le client dans `dist/`, un bundle de rendu dans `dist-ssr/`, puis 10 pages HTML avec leur contenu et leurs métadonnées. Le pré-rendu est défini dans `scripts/prerender-meta.mjs` ; les pages React restent importées statiquement.

## Parcours

- `/` : présentation, valeur apportée, méthode et métiers.
- `/about` : Thomas et Antoine, rôle et principes de Celexia.
- `/contact` : contact direct et orientation vers la candidature.
- `/candidature` : entreprise, activité/capacité, coordonnées, puis récapitulatif modifiable.
- `/metiers/:slug` : piscine, couverture, façade/ITE et maçonnerie.
- Mentions légales et politique de confidentialité.

Le formulaire ne crée aucun compte et ne conduit pas à un contrat. L’équipe sélection analyse les demandes avant de revenir vers le candidat. Les anciens parcours commerciaux redirigent vers `/candidature`.

Les boutons utilisent `CTA_LABEL` et `candidatureUrl()` dans `src/lib/links.js`. Les métiers et les textes partagés se trouvent dans `src/data/`. Le contenu public ne mentionne ni exclusivité des demandes ni taux de rémunération ; les modalités chiffrées sont présentées au téléphone.

## Réception des candidatures

La destination est `agence.celexia@gmail.com`. L’API serveur transmet les dossiers à un workflow n8n qui envoie l’e-mail avec Gmail. Configurer `CANDIDATURE_WEBHOOK_URL` et `CANDIDATURE_WEBHOOK_SECRET` sur l’hébergement Vercel ou Netlify, ou dans `.env.local` en développement. Resend reste une alternative facultative lorsque n8n n’est pas configuré. Voir [CANDIDATURE_SETUP.md](CANDIDATURE_SETUP.md).

La confirmation apparaît seulement après acquittement de l’envoi Gmail par n8n. Les tests utilisent des réponses simulées et n’envoient aucun e-mail réel. Le middleware Vite sert aussi `/api/candidature` en développement ; redémarrer `npm run dev` après une modification des variables serveur.

## Déploiement

Les configurations `vercel.json`, `netlify.toml` et `public/_redirects` conservent l’API avant le repli SPA. Le déploiement doit inclure les fonctions serveur, pas seulement le dossier statique `dist/`, pour permettre l’envoi de candidatures.
