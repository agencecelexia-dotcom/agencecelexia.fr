import { Link } from 'react-router-dom';
import { SEO_PAGES } from '../data/seoPages';
import { METIERS } from '../data/metiers';
import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import CTAButton from '../components/CTAButton';
import ResourceCards from '../components/ResourceCards';
import PartnershipSheet from '../components/PartnershipSheet';
import { CASE_STUDY } from '../data/partnerCase';
import './Resources.css';

export default function ResourcePage({ slug }) {
  const page = SEO_PAGES[slug];
  usePageMeta({ title: page.title, description: page.description, canonical: `https://agencecelexia.fr${page.path}`, type: page.kind === 'article' ? 'article' : 'website' });
  const dateLabel = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${page.updatedAt}T12:00:00Z`));

  return (
    <>
      <article>
        <header className="page-hero surface-paper border-b border-brume-200">
          <div className="container-custom">
            <p className="eyebrow"><span className="brand-spark" aria-hidden="true">✦</span>{page.eyebrow}</p>
            <h1 className="page-title resource-title mt-6">{page.h1}</h1>
            <p className="mt-7 max-w-3xl text-lg text-encre-600 leading-relaxed">{page.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CTAButton to={candidatureUrl(slug)}>{CTA_LABEL}</CTAButton>
              <a href="#reponse" className="text-link">Lire les repères <span aria-hidden="true">↓</span></a>
            </div>
            <p className="mt-7 text-xs text-encre-600"><Link to="/about" className="underline underline-offset-4">L’équipe Celexia</Link><span aria-hidden="true"> · </span>Mis à jour le <time dateTime={page.updatedAt}>{dateLabel}</time></p>
          </div>
        </header>

        <div className="section">
          <div className="container-custom resource-layout">
            <aside className="resource-aside">
              <nav aria-label="Sommaire de la page" className="resource-toc">
                <p className="section-kicker mb-4">Dans cette page</p>
                <a href="#reponse">L’essentiel</a>
                {page.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
                {slug === 'partenariat-artisans-btp' && <a href="#fiche-preparation">La fiche à imprimer</a>}
                <a href="#questions">Vos questions</a>
                {page.sources && <a href="#sources">Sources et périmètre</a>}
              </nav>
            </aside>

            <div className="resource-body">
              <section id="reponse" className="resource-answer">
                <h2>L’essentiel pour votre entreprise</h2>
                <p>{page.summary}</p>
              </section>
              {page.sections.map(section => (
                <section key={section.id} id={section.id} className="resource-section">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  {section.links?.map(link => <p key={link.path} className="mt-5"><Link to={link.path} className="text-violet-700 underline underline-offset-4">{link.label}</Link></p>)}
                  {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                  {section.table && <>
                    <p className="resource-table-hint sm:hidden">Faites défiler le tableau pour lire toutes les colonnes.</p>
                    <div className="resource-table-wrap" role="region" aria-label={section.title} tabIndex="0">
                      <table>
                        <caption className="sr-only">{section.title}</caption>
                        <thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead>
                        <tbody>{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  </>}
                </section>
              ))}
              {slug === 'partenariat-artisans-btp' && <><PartnershipSheet /><section className="resource-section"><h2>Un exemple de partenariat BTP</h2><p>Retrouvez le détail des demandes qualifiées transmises à une entreprise tous corps d’état, travaillant notamment en couverture.</p><Link to={CASE_STUDY.path} className="text-link mt-4">Lire le retour d’expérience anonymisé <span aria-hidden="true">↗</span></Link></section></>}
              <section id="questions" className="resource-section">
                <h2>Vos questions, avant d’aller plus loin</h2>
                <div className="resource-faq">{page.faq.map(item => <details key={item.q} className="faq-item group"><summary><span>{item.q}</span><span aria-hidden="true" className="text-violet-600 text-2xl group-open:rotate-45">+</span></summary><p>{item.a}</p></details>)}</div>
              </section>
              <section className="resource-section">
                <h2>Les projets de votre métier</h2>
                <p>Retrouvez les types de travaux accompagnés par Celexia et les informations utiles pour votre activité.</p>
                <ul className="resource-trades">{Object.entries(METIERS).map(([key, trade]) => <li key={key}><Link to={`/metiers/${key}`}>{trade.labelCourt}<span aria-hidden="true">↗</span></Link></li>)}</ul>
              </section>
              {page.sources && <section id="sources" className="resource-section">
                <h2>Sources et périmètre de ce guide</h2>
                <p>{page.sourceNote}</p>
                <ul>{page.sources.map(source => <li key={source.path}>
                  {source.path.startsWith('https://')
                    ? <a href={source.path} className="text-violet-700 underline underline-offset-4">{source.label}</a>
                    : <Link to={source.path} className="text-violet-700 underline underline-offset-4">{source.label}</Link>}
                </li>)}</ul>
              </section>}
            </div>
          </div>
        </div>
      </article>

      <section className="section surface-paper border-y border-brume-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10"><h2 className="section-title">Pour préparer la suite.</h2><Link className="text-link" to="/guides">Tous les guides <span aria-hidden="true">↗</span></Link></div>
          <ResourceCards paths={page.related} />
        </div>
      </section>
      <section className="section">
        <div className="container-custom application-invite sur-fonce">
          <div className="relative z-10 max-w-2xl">
            <p className="section-kicker mb-5">Parlons de votre activité</p>
            <h2 className="section-title !text-white">Des projets à la mesure de votre entreprise.</h2>
            <p className="mt-6 text-violet-200">Votre métier, votre secteur, vos disponibilités : présentez votre entreprise. L’équipe Celexia étudiera votre candidature et reviendra vers vous.</p>
            <div className="mt-8"><CTAButton to={candidatureUrl(`${slug}-fin`)}>{CTA_LABEL}</CTAButton></div>
            <p className="mt-4 text-violet-200 text-xs">Candidature gratuite. Aucun compte à créer.</p>
          </div>
          <div className="invite-mark" aria-hidden="true">✦</div>
        </div>
      </section>
    </>
  );
}
