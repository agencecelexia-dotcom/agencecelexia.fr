import { Link } from 'react-router-dom';
import { CASE_STUDY } from '../data/partnerCase';
import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import CTAButton from '../components/CTAButton';
import './CaseStudy.css';

export default function CaseStudy() {
  usePageMeta({
    title: CASE_STUDY.title,
    description: CASE_STUDY.description,
    canonical: `https://agencecelexia.fr${CASE_STUDY.path}`,
    type: 'article',
  });
  const dateLabel = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' })
    .format(new Date(`${CASE_STUDY.publishedAt}T12:00:00Z`));

  return <>
    <article>
      <header className="page-hero surface-paper border-b border-brume-200">
        <div className="container-custom">
          <p className="eyebrow"><span className="brand-spark" aria-hidden="true">✦</span>{CASE_STUDY.eyebrow}</p>
          <h1 className="page-title case-title mt-6">{CASE_STUDY.h1}</h1>
          <p className="mt-7 text-lg text-encre-600 leading-relaxed max-w-3xl">{CASE_STUDY.lead}</p>
          <p className="mt-7 text-xs text-encre-600"><Link to="/about" className="underline underline-offset-4">{CASE_STUDY.author}</Link><span aria-hidden="true"> · </span>Publié le <time dateTime={CASE_STUDY.publishedAt}>{dateLabel}</time></p>
        </div>
      </header>

      <section className="section" aria-labelledby="case-results">
        <div className="container-custom case-results-layout">
          <div className="case-total bande sur-fonce">
            <h2 id="case-results" className="section-kicker">Les demandes transmises</h2>
            <p className="case-total-value">{CASE_STUDY.total}</p>
            <p className="text-lg text-violet-200 leading-relaxed max-w-xs">{CASE_STUDY.totalLabel}</p>
            <p className="mt-8 pt-6 border-t border-white/20 text-xs text-violet-200">{CASE_STUDY.calculation}</p>
          </div>
          <div className="min-w-0">
            <p className="text-lg text-encre-700 leading-relaxed">{CASE_STUDY.summary}</p>
            <ol className="case-periods" aria-label="Demandes qualifiées transmises par mois">
              {CASE_STUDY.periods.map(period => <li key={period.label}>
                <h3 className="section-kicker">{period.label}</h3>
                <p className="case-period-value">{period.count}</p>
                <p className="text-xs text-encre-600">demandes qualifiées</p>
              </li>)}
            </ol>
            <p className="mt-6 text-sm text-encre-600 leading-relaxed">{CASE_STUDY.source}</p>
          </div>
        </div>
      </section>

      <div className="section !pt-0">
        <div className="container-custom case-story-layout">
          <aside className="case-related">
            <p className="section-kicker mb-4">Pour situer ce retour</p>
            <Link to="/metiers/couverture" className="text-link">Les projets de couverture <span aria-hidden="true">↗</span></Link>
            <Link to="/apporteur-affaires-btp" className="text-link mt-2">L’apport d’affaires BTP <span aria-hidden="true">↗</span></Link>
            <Link to="/partenariat-artisans-btp" className="text-link mt-2">Le partenariat artisan <span aria-hidden="true">↗</span></Link>
          </aside>
          <div className="case-story">
            {CASE_STUDY.sections.map(section => <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>)}
            <p className="case-limitation">{CASE_STUDY.limitation}</p>
          </div>
        </div>
      </div>
    </article>

    <section className="section surface-paper border-t border-brume-200">
      <div className="container-custom application-invite sur-fonce grid lg:grid-cols-2 gap-8 items-center">
        <div><p className="section-kicker mb-5">Parlons de votre entreprise</p><h2 className="section-title !text-white">Votre métier.<br />Votre capacité.<br />Notre point de départ.</h2></div>
        <div><p className="mb-7 text-violet-200 leading-relaxed">Présentez votre activité, votre secteur et les chantiers que votre équipe peut accueillir. L’équipe Celexia étudiera votre candidature et reviendra vers vous.</p><CTAButton to={candidatureUrl('retour-experience-partenaire-btp')}>{CTA_LABEL}</CTAButton><p className="mt-4 text-xs text-violet-200">Candidature gratuite. Aucun compte à créer.</p></div>
      </div>
    </section>
  </>;
}
