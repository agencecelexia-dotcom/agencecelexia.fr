import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { getMetier, POINTS_QUALIFIES } from '../data/metiers';
import { getLegacyTarget } from '../lib/legacyRoutes';
import { ETAPES, FAQ_COMMUNE } from '../data/offre';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const Check = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Plus = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MetierPage = () => {
  const { slug } = useParams();

  // Anciens slugs de l'offre à 19 métiers. Le vrai 301 est servi par l'hébergeur ;
  // ceci n'est qu'un filet de sécurité côté client.
  const legacyTarget = getLegacyTarget(slug);
  const metier = getMetier(slug);

  usePageMeta({
    title: metier
      ? `Apport d’affaires ${metier.label} | Agence Celexia`
      : 'Métier introuvable | Agence Celexia',
    description: metier
      ? `Chantiers ${metier.labelCourt.toLowerCase()} qualifiés pour votre entreprise. Commission uniquement après signature et acompte.`
      : 'Ce métier n’est pas accompagné par Agence Celexia.',
    canonical: `https://agencecelexia.fr/metiers/${slug}`,
  });

  if (legacyTarget) return <Navigate to={legacyTarget} replace />;
  if (!metier) return <Navigate to="/" replace />;

  const faq = [...FAQ_COMMUNE, metier.faq];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="page-hero surface-paper">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-7">
              <span className="w-2 h-2 rounded-full bg-violet-500" aria-hidden="true" />
              <p className="text-xs font-semibold">{metier.label}</p>
            </div>
            <h1 className="page-title !text-[clamp(2.5rem,4.5vw,4.4rem)]">
              {metier.titre}
            </h1>
            <p className="mt-7 text-lg text-encre-600 leading-relaxed max-w-lg text-pretty">
              {metier.accroche}
            </p>
            <div className="mt-9">
              <CTAButton to={candidatureUrl(`metier-${slug}`)}>{CTA_LABEL}</CTAButton>
            </div>
            <p className="mt-5 text-sm text-encre-600">
              Candidature étudiée par notre équipe · Aucun compte à créer
            </p>
          </div>

          <aside className="rounded-[28px] bg-violet-900 text-white p-8 md:p-10 sur-fonce">
            <p className="section-kicker">Avant de vous transmettre un projet</p>
            <h2 className="mt-8 font-display font-medium text-3xl tracking-tight leading-tight">Un projet concret.<br /><span className="text-citron-100">Un dossier préparé.</span></h2>
            <ul className="mt-7 divide-y divide-white/15">
              {POINTS_QUALIFIES.map((point) => (
                <li key={point.titre} className="flex items-center justify-between py-3.5 gap-5 text-sm">
                  <span>{point.titre}</span>
                  <Check className="w-5 h-5 text-citron-100 shrink-0" />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-violet-200 leading-relaxed">
              Vous gardez la main sur vos devis, vos prix et la relation avec votre client.
            </p>
          </aside>
        </div>
      </section>

      {/* ============ 01 — LES CHANTIERS ============ */}
      <section className="section border-t border-brume-200">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-kicker">Les chantiers concernés</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <Reveal>
              <h2 className="section-title">
                Ce que nous vous transmettons.
              </h2>
              <ul className="mt-10 space-y-5">
                {metier.projets.map((projet) => (
                  <li key={projet} className="flex gap-4 text-encre-700">
                    <Check className="w-5 h-5 shrink-0 mt-1 text-violet-600" />
                    <span className="leading-relaxed">{projet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90}>
              <div className="surface-paper border border-brume-200 rounded-[28px] p-8 md:p-10">
                <p className="section-kicker">Montant des chantiers</p>
                <p className="tabular mt-6 font-display font-medium text-[clamp(2rem,3.5vw,3rem)] leading-tight tracking-tight text-violet-700">
                  {metier.budget}
                </p>
                <p className="mt-6 text-encre-700 leading-relaxed">{metier.budgetNote}</p>
                <p className="mt-8 pt-6 border-t border-brume-200 text-sm text-encre-600 leading-relaxed">
                  Ordre de grandeur constaté sur le marché, donné pour situer le type de
                  chantier. Ce n’est ni une estimation de vos prix, ni une promesse de volume.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 02 — LE FONCTIONNEMENT (bande profonde) ============ */}
      <section className="section bande sur-fonce">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">02</span>
            <span className="section-kicker">Comment ça marche</span>
          </div>
          <Reveal>
            <h2 className="section-title !text-white max-w-2xl">
              De la demande au chantier, chacun son métier.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {ETAPES.map((etape, i) => (
              <li key={etape.titre} className="flex gap-5">
                <span className="section-num pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display font-medium text-xl md:text-2xl text-white leading-snug tracking-tight">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 text-violet-200 text-sm leading-relaxed">{etape.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 03 — FAQ ============ */}
      <section className="section">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">03</span>
            <span className="section-kicker">Les questions qu’on nous pose</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <h2 className="section-title">Les réponses<br />à vos questions.</h2>
            <div>{faq.map((item, i) => (
              <details key={item.q} className="faq-item group" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-display font-medium text-xl text-encre-900">
                  <span>{item.q}</span>
                  <Plus className="w-6 h-6 shrink-0 mt-1 text-violet-600 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-5 text-encre-600 text-sm leading-relaxed max-w-prose text-pretty">{item.a}</p>
              </details>
            ))}</div>
          </div>
        </div>
      </section>

      {/* ============ CONVERSION ============ */}
      <section className="section surface-paper">
        <div className="container-custom application-invite sur-fonce">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="section-title !text-white">
                Parlons de votre prochain chapitre.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-violet-200 leading-relaxed text-pretty">
                Présentez votre entreprise, votre équipe et les chantiers que vous pouvez
                accueillir. L’équipe sélection Celexia analyse votre demande, puis revient
                vers vous pour échanger sur votre activité.
              </p>
              <div className="mt-12">
                <CTAButton to={candidatureUrl(`metier-${slug}-final`)}>{CTA_LABEL}</CTAButton>
              </div>
              <p className="mt-10 text-sm text-violet-200">
                <Link to="/" className="text-white underline underline-offset-4 hover:text-violet-200">
                  Revenir au fonctionnement général
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default MetierPage;
