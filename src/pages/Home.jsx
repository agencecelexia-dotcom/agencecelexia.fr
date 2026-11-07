import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import { METIERS, POINTS_QUALIFIES } from '../data/metiers';
import { ETAPES, FAQ_COMMUNE as FAQ } from '../data/offre';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';
import ResourceCards from '../components/ResourceCards';
import PartnerCaseLink from '../components/PartnerCaseLink';

const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, ...data }));
const Arrow = ({ className = 'w-5 h-5' }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
const SectionHead = ({ num, kicker }) => <div className="section-label"><span className="section-num">{num}</span><span className="section-kicker">{kicker}</span></div>;

function ProjectIllustration() {
  return (
    <div className="project-illustration" aria-label="Notre approche : des projets vérifiés pour développer votre activité">
      <div className="flex items-center justify-between gap-3 relative z-10">
        <span className="project-eyebrow">L’avenir se construit.</span>
        <span className="illustration-cross" aria-hidden="true">✦</span>
      </div>
      <div className="project-arch" aria-hidden="true" />
      <span className="project-label">Le bon projet.<br />Le bon savoir-faire.</span>
      <svg viewBox="0 0 480 280" className="project-house" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
          <path d="M46 189 218 102l214 91-172 85Z" opacity=".2" />
          <path d="M104 131v77l143 59 128-65V126M104 131l143 59 128-64M247 190v77" />
          <path d="m83 137 84-113 105 42 123 63-140 74Z" fill="var(--house-fill)" />
          <path d="m83 137 172 66 140-74-123-63-105-42-84 113ZM167 24l88 179M272 66l123 63M139 121l113 44M150 105l128 49M161 88l140 55M173 72l149 60M185 56l157 65" />
          <path d="m267 201 32-16v44l-32 16ZM321 173l30-15v26l-30 15ZM129 162l31 13v28l-31-13ZM185 185l33 14v28l-33-14Z" fill="var(--house-fill)" />
          <path d="M57 221v-16m0 8 162 67M407 154l30 13m-15-7v65M97 90V52m-8 10 16-8m-8 8 55-28" strokeDasharray="4 5" opacity=".45" />
        </g>
      </svg>
      <div className="project-file">
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-xs font-semibold text-encre-600 uppercase tracking-widest">Le dossier Celexia</span>
          <span className="flex gap-1.5 items-center text-xs font-semibold text-violet-700"><span className="w-1.5 h-1.5 bg-violet-600 rounded-full" />Qualifié</span>
        </div>
        <p className="project-file-title">Tout commence par<br />un projet bien préparé.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
          {['Projet', 'Budget', 'Secteur', 'Calendrier'].map(label => <span key={label} className="flex items-center gap-1.5 text-xs text-encre-600"><Check />{label}</span>)}
        </div>
        <div className="mt-6 pt-4 border-t border-brume-200 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold">À vous de donner vie au projet</span>
          <span className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 grid place-items-center"><Arrow className="w-4 h-4" /></span>
        </div>
      </div>
      <p className="project-caption"><span aria-hidden="true">↳</span> Vous chiffrez. Vous signez. Vous réalisez.</p>
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    description: "Celexia accompagne les artisans avec des projets qualifiés. Recherche financée par nos soins, commission après signature et acompte reçu.",
    canonical: 'https://agencecelexia.fr/',
  });

  return (
    <>
      <section className="home-hero surface-paper">
        <div className="container-custom hero-layout">
          <div>
            <p className="eyebrow"><span className="brand-spark" aria-hidden="true">✦</span> L’apport d’affaires, côté artisan</p>
            <h1 className="hero-title mt-7">Votre savoir-faire mérite <span className="hero-highlight">les bons chantiers.</span></h1>
            <p className="hero-description">Vous avez le métier. Nous trouvons les projets, les qualifions et vous aidons à faire grandir votre activité. Pour développer votre entreprise, à votre rythme.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTAButton to={candidatureUrl('accueil-hero')}>{CTA_LABEL}</CTAButton>
              <a href="#methode" className="hero-secondary">Notre méthode <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-reassurance"><Check />Aucun budget à avancer. Commission après signature et acompte.</p>
          </div>
          <ProjectIllustration />
        </div>
      </section>

      <div className="trade-strip">
        <div className="container-custom trade-strip-inner">
          <span className="text-xs font-semibold text-encre-600 md:mr-auto">Aux côtés des artisans du bâtiment</span>
          {metiers.map(m => <Link className="trade-strip-link" key={m.slug} to={`/metiers/${m.slug}`}><span className="w-1 h-1 bg-violet-300 rounded-full" aria-hidden="true" />{m.labelCourt}</Link>)}
        </div>
      </div>

      <section className="section" id="celexia">
        <div className="container-custom">
          <SectionHead num="01" kicker="Un partenaire pour votre développement" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-start">
            <Reveal><h2 className="section-title">Vous construisez.<br />Nous ouvrons <span className="text-violet-600">les bonnes portes.</span></h2></Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-encre-600 leading-relaxed">Celexia est un apporteur d’affaires dédié aux artisans du bâtiment. Notre rôle : faire le lien entre des particuliers qui ont un projet concret et des entreprises qui ont le savoir-faire pour le réaliser.</p>
              <p className="mt-5 text-encre-600">Nous finançons la recherche des projets et prenons le temps de les vérifier. Vous gardez la main sur vos devis, vos prix et votre relation client.</p>
              <Link to="/about" className="text-link mt-6">Rencontrer Thomas et Antoine <Arrow /></Link>
              <p><Link to="/apporteur-affaires-btp" className="text-link mt-2">Comprendre l’apport d’affaires BTP <Arrow /></Link></p>
            </Reveal>
          </div>
          <div className="benefit-grid">
            {[
              ['01', 'Du temps pour votre métier', 'Des demandes vérifiées en amont, avec les informations utiles pour décider de la suite.'],
              ['02', 'Des projets qui vous correspondent', 'Votre métier, votre secteur et vos capacités guident les projets que nous vous présentons.'],
              ['03', 'Des intérêts alignés', 'Notre commission intervient uniquement lorsque votre chantier est signé et l’acompte reçu.'],
            ].map(([n, title, desc]) => <Reveal key={n}><div className="benefit-item"><span className="benefit-number">{n}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm text-encre-600 leading-relaxed">{desc}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="methode" className="section bande sur-fonce method-section scroll-mt-24">
        <div className="container-custom">
          <SectionHead num="02" kicker="Comment nous travaillons" />
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-24">
            <Reveal>
              <h2 className="section-title text-white">Un travail en amont.<br /><span className="text-violet-300">Un projet concret à l’arrivée.</span></h2>
              <p className="mt-7 text-violet-200 leading-relaxed">Notre travail commence bien avant votre premier échange avec le particulier. Nous préparons le terrain pour que vous puissiez vous concentrer sur le chantier.</p>
              <div className="mt-10 pt-7 border-t border-white/20 flex items-center gap-5"><span className="text-5xl font-semibold tracking-tight">0 €</span><p className="text-sm text-violet-200">de frais d’entrée.<br />Aucun abonnement.</p></div>
            </Reveal>
            <ol className="method-list">
              {ETAPES.map((step, i) => <li key={step.titre}><span className="method-number">{String(i + 1).padStart(2, '0')}</span><div><h3 className="text-xl font-semibold text-white">{step.titre}</h3><p className="mt-3 text-sm text-violet-200 leading-relaxed">{step.desc}</p></div></li>)}
            </ol>
          </div>
          <div className="qualification-bar"><p className="text-sm font-semibold text-white">Avant de vous transmettre une demande,<br className="hidden lg:block" /> nous vérifions cinq points.</p><div className="flex flex-wrap gap-3">{POINTS_QUALIFIES.map(point => <span className="qualification-tag" key={point.titre}><Check />{point.titre}</span>)}</div></div>
        </div>
      </section>

      <section id="metiers" className="section trades-section scroll-mt-24">
        <div className="container-custom">
          <SectionHead num="03" kicker="Les métiers que nous accompagnons" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6"><h2 className="section-title max-w-xl">Des projets à la hauteur<br className="hidden md:block" /> de votre savoir-faire.</h2><p className="text-encre-600 text-sm max-w-xs">Quatre métiers, partout en France.<br />Des projets de construction et de rénovation qui correspondent à votre activité.</p></div>
          <div className="trade-grid">
            {metiers.map((m, i) => <Link key={m.slug} to={`/metiers/${m.slug}`} className="trade-card group"><div className="flex items-center justify-between"><span className="section-num">0{i + 1}</span><Arrow className="w-5 h-5 text-encre-600 transition-transform group-hover:translate-x-1" /></div><div className="trade-symbol" aria-hidden="true">{i === 0 ? <svg viewBox="0 0 100 70"><path d="m8 30 42-20 42 20-42 20Z M8 30v15l42 20 42-20V30 M25 38l25 12 25-12" /></svg> : i === 1 ? <svg viewBox="0 0 100 70"><path d="M10 48 50 10l40 38M23 37v25h54V37M50 10v52M34 25h32M21 38h58" /></svg> : i === 2 ? <svg viewBox="0 0 100 70"><path d="M20 10h60v53H20zM20 27h60M20 45h60M40 10v17M60 27v18M40 45v18" /></svg> : <svg viewBox="0 0 100 70"><path d="m15 29 35-18 35 18v28L50 73 15 57ZM15 29l35 17 35-17M50 46v27M15 43l35 17 35-17M32 21l35 17M32 37v14M67 38v14" /></svg>}</div><h3 className="font-semibold text-xl group-hover:text-violet-600 transition-colors">{m.labelCourt}</h3><p className="mt-2 text-sm text-encre-600">{m.projets[0]}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="section surface-paper border-y border-brume-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10"><div><p className="section-kicker mb-5">Les guides pour les artisans</p><h2 className="section-title">Un partenariat,<br />ça se prépare.</h2></div><Link to="/guides" className="text-link">Tous les repères <Arrow /></Link></div>
          <ResourceCards paths={['/guides/commission-apporteur-affaires-btp', '/partenariat-artisans-btp']} />
          <div className="mt-6"><PartnerCaseLink /></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container-custom grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><p className="section-kicker mb-5">Avant de faire connaissance</p><h2 className="section-title">Des réponses<br />en toute clarté.</h2><p className="mt-6 text-encre-600">Une question sur votre entreprise ou votre secteur ? Nous sommes là pour en parler.</p><Link to="/contact" className="text-link mt-6">Échanger avec nous <Arrow /></Link></div>
          <div>{FAQ.map((item, i) => <details key={item.q} className="faq-item group" open={i === 0}><summary><span>{item.q}</span><span className="text-violet-600 text-2xl font-normal transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom application-invite sur-fonce">
          <div className="relative z-10 max-w-2xl"><p className="section-kicker mb-6">Faisons connaissance</p><h2 className="section-title text-white">Et si on faisait avancer<br className="hidden sm:block" /> votre entreprise, ensemble ?</h2><p className="mt-6 text-violet-200 max-w-xl">Parlez-nous de votre activité, de votre équipe et des chantiers que vous souhaitez accueillir. L’équipe Celexia étudiera votre demande et reviendra vers vous.</p><div className="mt-8"><CTAButton to={candidatureUrl('accueil-final')}>{CTA_LABEL}</CTAButton></div><p className="mt-4 text-xs text-violet-200">Une candidature, puis un échange humain.</p></div><div className="invite-mark" aria-hidden="true">✦</div>
        </div>
      </section>
    </>
  );
}
