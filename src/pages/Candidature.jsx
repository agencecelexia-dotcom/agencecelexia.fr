import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { INITIAL_APPLICATION, REVENUE_OPTIONS, STEP_FIELDS, TRADE_OPTIONS, submitApplication, validateApplication } from '../lib/candidature';
import './Candidature.css';

const STEPS = ['Votre entreprise', 'Votre activité', 'Vos coordonnées', 'Votre demande'];
const TITLES = ['Commençons par votre entreprise.', 'Parlons de votre capacité.', 'Faisons connaissance.', 'Tout est prêt pour nous écrire.'];
const INTROS = [
  'Votre métier et votre secteur nous aident à comprendre où nous pouvons vous être utiles.',
  'Ces repères nous permettent de tenir compte de votre organisation et des chantiers que vous pouvez accueillir.',
  'L’équipe Celexia utilisera ces coordonnées pour échanger avec vous sur votre demande.',
  'Vérifiez vos informations. Vous pourrez les modifier avant de transmettre votre candidature à notre équipe.',
];

function Arrow({ back = false }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" style={back ? { transform: 'rotate(180deg)' } : undefined}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

function Field({ name, label, hint, error, children, ...props }) {
  return <div className={`application-field ${props.wide ? 'application-field-wide' : ''}`}>
    <label htmlFor={`application-${name}`}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>
    {hint && <p className="application-hint" id={`${name}-hint`}>{hint}</p>}
    {children({ id: `application-${name}`, name, 'aria-invalid': error ? 'true' : undefined, 'aria-describedby': [hint && `${name}-hint`, error && `${name}-error`].filter(Boolean).join(' ') || undefined })}
    {error && <p className="application-field-error" id={`${name}-error`}>{error}</p>}
  </div>;
}

export default function Candidature() {
  usePageMeta({
    title: 'Candidature artisan | Agence Celexia',
    description: 'Présentez votre entreprise, votre activité et vos capacités. L’équipe Celexia étudie votre candidature et revient vers vous.',
    canonical: 'https://agencecelexia.fr/candidature',
  });
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(INITIAL_APPLICATION);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [receipt, setReceipt] = useState(null);
  const panelRef = useRef(null);
  const initialRender = useRef(true);
  const sendingRef = useRef(false);
  const controllerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (initialRender.current) { initialRender.current = false; return; }
    panelRef.current?.focus({ preventScroll: true });
    panelRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [step, receipt]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  function change(event) {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setSubmitError('');
  }

  function showErrors(found) {
    setErrors(found);
    const first = Object.keys(found)[0];
    requestAnimationFrame(() => document.getElementById(`application-${first}`)?.focus());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sendingRef.current) return;
    const found = validateApplication(values, step < 3 ? STEP_FIELDS[step] : undefined);
    if (Object.keys(found).length) {
      if (step === 3) {
        const invalidStep = STEP_FIELDS.findIndex((fields) => fields.some((field) => found[field]));
        if (invalidStep >= 0) setStep(invalidStep);
      }
      showErrors(found);
      return;
    }
    if (step < 3) { setStep(step + 1); setErrors({}); return; }
    sendingRef.current = true;
    setStatus('sending');
    setSubmitError('');
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const result = await submitApplication(values, searchParams.get('origine') || 'site', controller.signal);
      setReceipt(result);
      setStatus('success');
    } catch (error) {
      if (error.fields) {
        const invalidStep = STEP_FIELDS.findIndex((fields) => fields.some((field) => error.fields[field]));
        if (invalidStep >= 0) setStep(invalidStep);
        showErrors(error.fields);
      }
      setSubmitError(error.name === 'AbortError'
        ? 'Nous n’avons pas pu confirmer la réception. Vos informations restent affichées. Contactez-nous avant de renouveler l’envoi.'
        : error.message);
      setStatus('error');
    } finally {
      clearTimeout(timeout);
      sendingRef.current = false;
    }
  }

  const input = (name, label, props = {}) => {
    const { hint, wide, required = true, ...inputProps } = props;
    return <Field key={name} name={name} label={label} hint={hint} wide={wide} required={required} error={errors[name]}>{(a11y) =>
      <input {...a11y} {...inputProps} value={values[name]} required={required} onChange={change} />
    }</Field>;
  };
  const select = (name, label, options, hint) => <Field name={name} label={label} hint={hint} required error={errors[name]}>{(a11y) =>
    <select {...a11y} value={values[name]} onChange={change} required><option value="">Sélectionnez une réponse</option>{options.map((option) => <option key={option.value || option} value={option.value || option}>{option.label || option}</option>)}</select>
  }</Field>;
  const summaryGroups = [
    [['Entreprise', values.company], ['Métier', TRADE_OPTIONS.find(({ value }) => value === values.trade)?.label], ['Zone d’intervention', values.area], ['Année de création', values.createdYear]],
    [['Salariés', values.employees], ['Chiffre d’affaires annuel', values.revenue], ['Chantiers par mois', values.monthlyProjects], ['Chantiers supplémentaires possibles / mois', values.additionalProjects], ['Précisions', values.details || 'Non renseigné']],
    [['Contact', `${values.firstName} ${values.lastName}`], ['Fonction', values.role], ['Dans l’entreprise depuis', values.joinedYear], ['E-mail', values.email], ['Téléphone', values.phone]],
  ];

  return <section className="application-page">
    <div className="container-custom application-layout">
      <aside className="application-intro">
        <p className="section-kicker">Candidature partenaire</p>
        <h1>Un partenariat commence par <span>un échange.</span></h1>
        <p className="application-lead">Parlez-nous de votre entreprise. Voyons ensemble comment Celexia peut accompagner votre activité.</p>
        <div className="application-process">
          <p className="section-kicker">Et ensuite ?</p>
          <ol>
            <li><span>01</span><div><strong>Vous présentez votre entreprise</strong><p>Votre métier, votre équipe et vos capacités.</p></div></li>
            <li><span>02</span><div><strong>Nous étudions votre demande</strong><p>L’équipe Celexia examine votre profil et votre secteur.</p></div></li>
            <li><span>03</span><div><strong>Nous revenons vers vous</strong><p>Pour faire connaissance et envisager la suite ensemble.</p></div></li>
          </ol>
        </div>
        <p className="application-intro-note">Candidature gratuite. Ce formulaire permet de prendre contact : il ne crée ni compte ni contrat.</p>
        <a className="application-phone" href="tel:+33651725756">Une question ? 06 51 72 57 56 <Arrow /></a>
      </aside>

      <div className="application-panel" ref={panelRef} tabIndex="-1">
        {receipt ? <div className="application-success" role="status">
          <div className="application-success-icon" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m5 12 4 4L19 6" /></svg></div>
          <p className="section-kicker">Demande bien reçue</p>
          <h2>Merci {values.firstName},<br />à très bientôt.</h2>
          <p>Votre candidature va être analysée par l’équipe Celexia. Nous reviendrons vers vous pour échanger sur votre entreprise et les possibilités de collaboration.</p>
          <div className="application-receipt"><span>Nous vous recontacterons à</span><strong>{values.email}</strong></div>
          <p className="application-signature">L’équipe Celexia</p>
          <Link to="/" className="btn-secondary">Retour à l’accueil <Arrow /></Link>
        </div> : <>
          <div className="application-progress-head"><p className="section-kicker">{STEPS[step]}</p><span>Étape {step + 1} <span className="text-encre-600">/ 4</span></span></div>
          <ol className="application-progress" aria-label="Étapes de votre candidature">{STEPS.map((label, index) => <li key={label} className={index <= step ? 'is-complete' : ''} aria-current={step === index ? 'step' : undefined}><span className="sr-only">{index + 1}. {label}{index < step ? ' — complété' : ''}</span></li>)}</ol>
          <div className="application-step-heading"><h2>{TITLES[step]}</h2><p>{INTROS[step]}</p></div>
          <noscript><p className="application-submit-error">Activez JavaScript pour remplir le formulaire, ou écrivez-nous à <a href="mailto:agence.celexia@gmail.com">agence.celexia@gmail.com</a>.</p></noscript>
          <form onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'}>
            <div className="application-honeypot" aria-hidden="true"><label htmlFor="website-confirmation">Laissez ce champ vide</label><input id="website-confirmation" name="websiteConfirmation" value={values.websiteConfirmation} onChange={change} tabIndex="-1" autoComplete="off" /></div>
            {step < 3 && <p className="application-required">Les champs marqués d’un * sont obligatoires.</p>}
            <div className="application-fields">
              {step === 0 && <>
                {input('company', 'Nom de l’entreprise', { autoComplete: 'organization', maxLength: 150, wide: true, placeholder: 'Le nom de votre entreprise' })}
                {select('trade', 'Votre métier', TRADE_OPTIONS)}
                {input('createdYear', 'Année de création', { type: 'number', min: 1800, max: currentYear, step: 1, inputMode: 'numeric', placeholder: 'Ex. 2018' })}
                {input('area', 'Zone d’intervention', { maxLength: 300, wide: true, placeholder: 'Ex. Lyon et 40 km autour, ou départements 69 et 01', hint: 'Villes, départements ou rayon dans lequel vous travaillez.' })}
              </>}
              {step === 1 && <>
                {input('employees', 'Nombre de salariés', { type: 'number', min: 0, max: 10000, step: 1, inputMode: 'numeric', placeholder: 'Ex. 4', hint: 'Indiquez 0 si vous travaillez seul.' })}
                {select('revenue', 'Chiffre d’affaires annuel', REVENUE_OPTIONS, 'Dernier exercice clos, même approximatif.')}
                {input('monthlyProjects', 'Chantiers réalisés par mois', { type: 'number', min: 0, max: 10000, step: 1, inputMode: 'numeric', placeholder: 'Ex. 3', hint: 'Votre moyenne actuelle.' })}
                {input('additionalProjects', 'Chantiers supplémentaires possibles', { type: 'number', min: 0, max: 10000, step: 1, inputMode: 'numeric', placeholder: 'Ex. 2', hint: 'Le nombre que vous pourriez accepter par mois.' })}
                <Field name="details" label="Votre activité, vos envies" hint="Facultatif · Précisez vos spécialités, vos disponibilités ou ce que vous recherchez." wide error={errors.details}>{(a11y) => <textarea {...a11y} rows="4" maxLength="2000" value={values.details} onChange={change} placeholder="Ce qui nous aiderait à mieux vous connaître…" />}</Field>
              </>}
              {step === 2 && <>
                {input('firstName', 'Prénom', { autoComplete: 'given-name', maxLength: 80 })}
                {input('lastName', 'Nom', { autoComplete: 'family-name', maxLength: 80 })}
                {input('role', 'Fonction dans l’entreprise', { autoComplete: 'organization-title', maxLength: 100, placeholder: 'Ex. Gérant' })}
                {input('joinedYear', 'Dans l’entreprise depuis', { type: 'number', min: values.createdYear || 1800, max: currentYear, step: 1, inputMode: 'numeric', placeholder: 'Ex. 2018' })}
                {input('email', 'E-mail professionnel', { type: 'email', autoComplete: 'email', maxLength: 254, placeholder: 'vous@entreprise.fr' })}
                {input('phone', 'Téléphone', { type: 'tel', autoComplete: 'tel', maxLength: 30, placeholder: '06 00 00 00 00' })}
              </>}
            </div>
            {step === 3 && <>
              <div className="application-summary">{summaryGroups.map((group, index) => <section key={STEPS[index]}><div className="application-summary-title"><h3>{STEPS[index]}</h3><button type="button" onClick={() => { setStep(index); setErrors({}); }} disabled={status === 'sending'}>Modifier<span className="sr-only"> : {STEPS[index]}</span></button></div><dl>{group.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>)}</div>
              <div className="application-consent"><input id="application-consent" type="checkbox" name="consent" checked={values.consent} onChange={change} required aria-invalid={errors.consent ? 'true' : undefined} aria-describedby={errors.consent ? 'consent-error' : undefined} /><label htmlFor="application-consent">J’accepte que Celexia utilise ces informations pour étudier ma candidature et me recontacter. <Link to="/politique-confidentialite" target="_blank" rel="noopener noreferrer">Politique de confidentialité<span className="sr-only"> (nouvel onglet)</span></Link>.</label></div>
              {errors.consent && <p className="application-field-error" id="consent-error">{errors.consent}</p>}
            </>}
            {submitError && <div className="application-submit-error" role="alert"><p>{submitError}</p><a href="mailto:agence.celexia@gmail.com">Écrire à agence.celexia@gmail.com</a></div>}
            <div className="application-actions">
              {step > 0 ? <button className="application-back" type="button" onClick={() => { setStep(step - 1); setErrors({}); }} disabled={status === 'sending'}><Arrow back /> Retour</button> : <span className="application-secure">Vos informations restent confidentielles.</span>}
              <button className="btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : step === 3 ? 'Envoyer ma candidature' : 'Continuer'}{status !== 'sending' && <Arrow />}</button>
            </div>
            <p className="application-bottom-note">{step === 3 ? 'Votre demande sera étudiée par l’équipe Celexia.' : 'Vous pourrez vérifier et modifier vos réponses avant l’envoi.'}</p>
          </form>
        </>}
      </div>
    </div>
  </section>;
}
