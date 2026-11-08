/** Résumés documentaires issus des mêmes textes que le site, sans contenu caché ajouté pour les IA. */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { DEFINITION, ETAPES, FAQ_COMMUNE } from '../src/data/offre.js';
import { SEO_PAGES } from '../src/data/seoPages.js';
import { METIERS } from '../src/data/metiers.js';

const SITE = 'https://agencecelexia.fr';
const link = (label, path) => `[${label}](${new URL(path, SITE).href})`;
const questions = (items) => items.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n');
const sections = (items) => items.map(section => [
  `### ${section.title}`,
  ...section.paragraphs,
  ...(section.links ? section.links.map(({ label, path }) => link(label, path)) : []),
  ...(section.items ? [section.items.map(item => `- ${item}`).join('\n')] : []),
  ...(section.table ? [
    `| ${section.table.headers.join(' | ')} |\n| ${section.table.headers.map(() => '---').join(' | ')} |\n${section.table.rows.map(row => `| ${row.join(' | ')} |`).join('\n')}`,
  ] : []),
].join('\n\n')).join('\n\n');

export function buildLlmsFiles() {
  const pages = Object.values(SEO_PAGES);
  const short = [
    '# Agence Celexia — Apport d’affaires BTP',
    `> ${DEFINITION}`,
    '## Le partenariat',
    'Entreprises de construction de piscines, de couverture, de façade et isolation extérieure, et de maçonnerie, en France. Qualification sur cinq points : identité, projet, budget, zone et calendrier. L’artisan étudie techniquement le projet, fixe ses prix et garde la relation client.',
    'Aucun frais d’entrée, aucun abonnement et aucun budget de recherche à avancer. La commission intervient uniquement après chantier signé et acompte reçu. Son taux est présenté au téléphone. Le formulaire de candidature ne crée aucun compte et ne comporte aucune signature de contrat.',
    '## Comprendre et candidater',
    ...pages.filter(page => page.kind === 'service').map(page => `- ${link(page.breadcrumbLabel, page.path)} : ${page.description}`),
    `- ${link('Candidature artisan', '/candidature')} : présenter son entreprise à l’équipe Celexia pour analyse.`,
    `- ${link('L’équipe Celexia', '/about')} : Thomas et Antoine, fondateurs, et la méthode.`,
    `- ${link('Contact', '/contact')} : agence.celexia@gmail.com, 06 51 72 57 56.`,
    '## Guides pour les artisans',
    `- ${link('Tous les guides', '/guides')}.`,
    ...pages.filter(page => page.kind === 'article').map(page => `- ${link(page.breadcrumbLabel, page.path)} : ${page.description}`),
    `- ${link('Fiche de préparation à imprimer', '/ressources/fiche-partenariat-artisan.html')} : activité, secteur, capacité et questions avant un échange.`,
    '## Métiers accompagnés',
    ...Object.entries(METIERS).map(([slug, trade]) => `- ${link(trade.label, `/metiers/${slug}`)}.`),
    '## Informations légales',
    `- ${link('Mentions légales', '/mentions-legales')} : identité de l’éditeur et hébergement.`,
    `- ${link('Confidentialité', '/politique-confidentialite')} : formulaire et mesure d’audience.`,
    '## Optional',
    `- ${link('Contenu détaillé', '/llms-full.txt')} : textes publics, dates et sources des guides.`,
  ].join('\n\n') + '\n';

  const full = [
    '# Agence Celexia — Contenu public détaillé',
    `> ${DEFINITION}`,
    'Ces textes reprennent les contenus publics du site. Les pages canoniques liées ci-dessous portent les informations à jour.',
    '## Fonctionnement',
    ...ETAPES.map(step => `### ${step.titre}\n\n${step.desc}`),
    questions(FAQ_COMMUNE),
    ...pages.map(page => [
      `## ${page.h1}`,
      `Page : ${SITE}${page.path}`,
      `Auteur : L’équipe Celexia — ${SITE}/about\nPublication : ${page.publishedAt}. Mise à jour : ${page.updatedAt}.`,
      page.lead, page.summary, sections(page.sections), questions(page.faq),
      ...(page.sources ? [page.sourceNote, ...page.sources.map(source => `- ${link(source.label, source.path)}`)] : []),
    ].join('\n\n')),
    ...Object.entries(METIERS).map(([slug, trade]) => [
      `## ${trade.titre}`, `Page : ${SITE}/metiers/${slug}`, trade.accroche,
      trade.projets.map(project => `- ${project}`).join('\n'),
      `### ${trade.preparation.title}`, trade.preparation.intro,
      ...trade.preparation.points.map(point => `#### ${point.title}\n\n${point.description}`),
      `### ${trade.organisation.title}`, ...trade.organisation.paragraphs,
      questions([trade.faq, ...trade.questions]),
    ].join('\n\n')),
    '## Liens pratiques',
    `- ${link('Candidature', '/candidature')}`, `- ${link('Contact', '/contact')}`,
    `- ${link('Mentions légales', '/mentions-legales')}`, `- ${link('Confidentialité', '/politique-confidentialite')}`,
  ].join('\n\n') + '\n';
  return { 'llms.txt': short, 'llms-full.txt': full };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  for (const [filename, content] of Object.entries(buildLlmsFiles())) {
    writeFileSync(new URL(`../public/${filename}`, import.meta.url), content);
  }
  console.log('Résumé et contenus llms synchronisés avec les données éditoriales publiques.');
}
