import { METIERS } from '../data/metiers.js';

export const REVENUE_OPTIONS = [
  'Moins de 100 000 €', '100 000 à 250 000 €', '250 000 à 500 000 €',
  '500 000 à 1 M€', '1 à 2 M€', 'Plus de 2 M€',
  'Premier exercice en cours', 'À préciser lors de notre échange',
];

export const TRADE_OPTIONS = [
  ...Object.entries(METIERS).map(([value, trade]) => ({ value, label: trade.label })),
  { value: 'autre', label: 'Autre métier du bâtiment' },
];

export const INITIAL_APPLICATION = {
  company: '', trade: '', area: '', createdYear: '', employees: '', revenue: '',
  monthlyProjects: '', additionalProjects: '', details: '', firstName: '',
  lastName: '', role: '', joinedYear: '', email: '', phone: '', consent: false,
  websiteConfirmation: '',
};

export const STEP_FIELDS = [
  ['company', 'trade', 'area', 'createdYear'],
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
  if (fields.includes('trade') && !TRADE_OPTIONS.some(({ value }) => value === input.trade)) errors.trade = 'Sélectionnez votre métier.';
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
