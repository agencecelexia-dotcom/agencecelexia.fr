#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { parseArgs, runIndexNow, IndexNowError } from './lib/indexnow.mjs';

const usage = `IndexNow Celexia — notification des pages publiques modifiées

node scripts/indexnow.mjs [--dry-run] [/chemin ...]
node scripts/indexnow.mjs --submit [/chemin ...]

Sans --submit : lit le sitemap public et contrôle les pages, sans notification.
Sans chemin : sélectionne tout le sitemap public ; réserver l’envoi complet à
une mise à jour réellement globale. Préférer les seuls chemins modifiés.
Les chemins doivent déjà figurer dans le sitemap de production.

Avant --submit, publier le fichier de vérification fourni dans public/.
Le script refuse les redirections, URL étrangères, paramètres, pages non
indexables ou canonical incorrectes. Il ne relance jamais un envoi.
HTTP 200 = notification reçue ; 202 = validation de clé en cours.
Aucun de ces statuts ne signifie que les pages sont indexées ou bien classées.

Documentation : https://www.indexnow.org/documentation
Endpoint unique : https://api.indexnow.org/indexnow
`;

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage);
  } else {
    const config = JSON.parse(await readFile(new URL('../config/indexnow.json', import.meta.url), 'utf8'));
    const result = await runIndexNow({ config, paths: args.paths, submit: args.submit });
    if (result.mode === 'dry-run') {
      console.log(`Simulation : ${result.urls.length} URL contrôlée(s). Aucun POST envoyé.`);
      console.log('La vérification de la clé publique sera effectuée uniquement avec --submit.');
    } else {
      console.log(result.status === 200
        ? `IndexNow HTTP 200 : notification reçue pour ${result.urls.length} URL. Indexation non confirmée.`
        : `IndexNow HTTP 202 : ${result.urls.length} URL reçue(s), validation de clé en cours. Indexation non confirmée.`);
    }
    for (const url of result.urls) console.log(`- ${url}`);
  }
} catch (error) {
  // Never dump a payload, key, response body or raw network exception into logs.
  console.error(error instanceof IndexNowError ? error.message : 'Configuration IndexNow illisible. Aucun envoi confirmé.');
  process.exitCode = 1;
}
