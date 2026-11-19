import { METIERS } from '../data/metiers.js';

export const REVENUE_OPTIONS = [
  'Moins de 100 000 €', '100 000 à 250 000 €', '250 000 à 500 000 €',
  '500 000 à 1 M€', '1 à 2 M€', 'Plus de 2 M€',
  'Premier exercice en cours', 'À préciser lors de notre échange',
];

// Les quatre métiers qui ont une page dédiée gardent leur identifiant historique (clés de METIERS).
const label = (slug) => METIERS[slug].label;

/** Corps de métier du bâtiment proposés dans le formulaire, par famille. */
export const TRADE_GROUPS = [
  { title: 'Gros œuvre et structure', options: [
    { value: 'maconnerie', label: label('maconnerie') },
    { value: 'terrassement-vrd', label: 'Terrassement et VRD' },
    { value: 'demolition', label: 'Démolition et désamiantage' },
    { value: 'charpente-bois', label: 'Charpente bois' },
    { value: 'charpente-metallique', label: 'Charpente métallique' },
    { value: 'ossature-bois', label: 'Construction ossature bois' },
    { value: 'echafaudage', label: 'Échafaudage' },
  ] },
  { title: 'Toiture et enveloppe', options: [
    { value: 'couverture', label: label('couverture') },
    { value: 'zinguerie', label: 'Zinguerie' },
    { value: 'etancheite', label: 'Étanchéité' },
    { value: 'facade-ite', label: label('facade-ite') },
    { value: 'isolation', label: 'Isolation (combles, murs, planchers)' },
    { value: 'menuiserie-exterieure', label: 'Menuiseries extérieures (fenêtres, portes, volets)' },
  ] },
  { title: 'Second œuvre et finitions', options: [
    { value: 'platrerie', label: 'Plâtrerie, plaque de plâtre, cloisons' },
    { value: 'menuiserie-interieure', label: 'Menuiserie intérieure et agencement' },
    { value: 'carrelage', label: 'Carrelage et faïence' },
    { value: 'revetements-sols', label: 'Parquet et revêtements de sols' },
    { value: 'peinture', label: 'Peinture et revêtements muraux' },
    { value: 'serrurerie-metallerie', label: 'Serrurerie et métallerie' },
    { value: 'renovation-interieure', label: 'Rénovation intérieure (salle de bain, cuisine)' },
  ] },
  { title: 'Plomberie, énergie et confort', options: [
    { value: 'plomberie', label: 'Plomberie' },
    { value: 'chauffage', label: 'Chauffage' },
    { value: 'climatisation-ventilation', label: 'Climatisation et ventilation' },
    { value: 'pompe-a-chaleur', label: 'Pompe à chaleur' },
    { value: 'electricite', label: 'Électricité' },
    { value: 'photovoltaique', label: 'Panneaux photovoltaïques' },
    { value: 'assainissement', label: 'Assainissement' },
  ] },
  { title: 'Extérieur et ensemble', options: [
    { value: 'constructeurs-piscines', label: label('constructeurs-piscines') },
    { value: 'paysagiste', label: 'Aménagement extérieur et paysagisme' },
    { value: 'cloture-portail', label: 'Clôtures et portails' },
    { value: 'renovation-globale', label: 'Rénovation globale' },
    { value: 'entreprise-generale', label: 'Entreprise générale, tous corps d’état' },
    { value: 'autre', label: 'Autre métier du bâtiment' },
  ] },
];

export const TRADE_OPTIONS = TRADE_GROUPS.flatMap(({ options }) => options);
export const OTHER_TRADE = 'autre';
export const MAX_OTHER_TRADE_LENGTH = 150;

/** Libellés lisibles des métiers choisis ; « Autre » est remplacé par la précision saisie. */
export function tradeLabels(trades = [], otherTrade = '') {
  return trades.map((value) => {
    const found = TRADE_OPTIONS.find((option) => option.value === value);
    if (!found) return undefined;
    return value === OTHER_TRADE && otherTrade?.trim() ? `Autre : ${otherTrade.trim()}` : found.label;
  }).filter(Boolean);
}

export const INITIAL_APPLICATION = {
  company: '', trades: [], otherTrade: '', area: '', createdYear: '', employees: '', revenue: '',
  monthlyProjects: '', additionalProjects: '', details: '', firstName: '',
  lastName: '', role: '', joinedYear: '', email: '', phone: '', consent: false,
  websiteConfirmation: '',
};

export const STEP_FIELDS = [
  ['company', 'trades', 'otherTrade', 'area', 'createdYear'],
  ['employees', 'revenue', 'monthlyProjects', 'additionalProjects', 'details'],
  ['firstName', 'lastName', 'role', 'joinedYear', 'email', 'phone'],
  ['consent'],
];

export function validateApplication(input, fields = Object.keys(INITIAL_APPLICATION), year = new Date().getFullYear()) {
  const errors = {};
  const requiredText = { company: 150, area: 300, firstName: 80, lastName: 80, role: 100 };
  for (const [key, max] of Object.entries(requiredText)) {
    if (fields.includes(key) && (typeof input[key] !== 'string' || !input[key].trim() || input[key].length > max)) {
      errors[key] = `Renseignez ce champ (${max} caractères maximum).`;
    }
  }
  if (fields.includes('trades')) {
    const { trades } = input;
    if (!Array.isArray(trades) || !trades.length) errors.trades = 'Sélectionnez au moins un corps de métier.';
    else if (new Set(trades).size !== trades.length || !trades.every((value) => TRADE_OPTIONS.some((option) => option.value === value))) errors.trades = 'Un des métiers sélectionnés n’est pas valide.';
  }
  if (fields.includes('otherTrade')) {
    const needed = Array.isArray(input.trades) && input.trades.includes(OTHER_TRADE);
    const text = typeof input.otherTrade === 'string' ? input.otherTrade : '';
    if (text.length > MAX_OTHER_TRADE_LENGTH || (needed && !text.trim())) errors.otherTrade = `Précisez votre métier (${MAX_OTHER_TRADE_LENGTH} caractères maximum).`;
  }
  if (fields.includes('revenue') && !REVENUE_OPTIONS.includes(input.revenue)) errors.revenue = 'Sélectionnez une fourchette.';
  for (const key of ['createdYear', 'joinedYear']) {
    if (!fields.includes(key)) continue;
    if (!/^\d{4}$/.test(String(input[key])) || Number(input[key]) < 1800 || Number(input[key]) > year) {
      errors[key] = `Indiquez une année entre 1800 et ${year}.`;
    }
  }
  if (fields.includes('joinedYear') && !errors.joinedYear && Number(input.joinedYear) < Number(input.createdYear)) {
    errors.joinedYear = 'Cette année doit être égale ou postérieure à la création de l’entreprise.';
  }
  for (const key of ['employees', 'monthlyProjects', 'additionalProjects']) {
    if (fields.includes(key) && (!/^\d{1,5}$/.test(String(input[key])) || Number(input[key]) > 10000)) {
      errors[key] = 'Indiquez un nombre entier entre 0 et 10 000.';
    }
  }
  if (fields.includes('email') && (typeof input.email !== 'string' || input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))) errors.email = 'Indiquez une adresse e-mail valide.';
  if (fields.includes('phone') && (typeof input.phone !== 'string' || !/^\+?[\d ().-]{8,30}$/.test(input.phone) || input.phone.replace(/\D/g, '').length < 8)) errors.phone = 'Indiquez un numéro de téléphone valide.';
  if (fields.includes('details') && (typeof input.details !== 'string' || input.details.length > 2000)) errors.details = 'Votre message doit contenir au maximum 2 000 caractères.';
  if (fields.includes('consent') && input.consent !== true) errors.consent = 'Votre accord est nécessaire pour étudier votre demande et vous recontacter.';
  return errors;
}

/** A successful result requires the application's API acknowledgement, not just HTTP 200. */
export async function submitApplication(values, source, signal) {
  const response = await fetch('/api/candidature', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...values, source }),
    signal,
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.received !== true) {
    const error = new Error(result?.message || 'Votre demande n’a pas pu être envoyée. Réessayez ou contactez-nous directement.');
    error.fields = result?.fields;
    throw error;
  }
  return result;
}
