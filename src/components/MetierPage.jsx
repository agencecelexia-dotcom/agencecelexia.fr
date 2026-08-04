import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { getMetier } from '../data/metiers';
import { getLegacyTarget } from '../lib/legacyRoutes';
import { ETAPES, FAQ_COMMUNE } from '../data/offre';
import { registerUrl, CTA_LABEL, TAUX } from '../lib/links';
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
      ? `Nous finançons et qualifions les demandes de chantiers ${metier.labelCourt.toLowerCase()}, puis les transmettons à un seul artisan. ${TAUX} % sur devis signé.`
      : 'Ce métier n’est pas accompagné par Agence Celexia.',
    canonical: `https://agencecelexia.fr/metiers/${slug}`,
  });

  if (legacyTarget) return <Navigate to={legacyTarget} replace />;
  if (!metier) return <Navigate to="/" replace />;

  const faq = [...FAQ_COMMUNE, metier.faq];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="w-10 h-1 rounded-full"
                style={{ backgroundColor: metier.color }}
                aria-hidden="true"
              />
              <p className="section-kicker">{metier.label}</p>
            </div>
            <h1 className="font-display font-medium text-encre-900 text-display-sm md:text-display-md text-balance">
              {metier.titre}
            </h1>
            <p className="mt-10 text-lg md:text-xl text-encre-700 leading-relaxed max-w-prose text-pretty">
              {metier.accroche}
            </p>
            <div className="mt-12">
              <CTAButton href={registerUrl(`metier-${slug}`)}>{CTA_LABEL}</CTAButton>
            </div>
            <p className="mt-6 text-sm text-encre-600">
              Inscription gratuite · Vous ne payez que sur devis signé
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — LES CHANTIERS ============ */}
      <section className="section bg-brume-50 border-y border-brume-200">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-kicker">Les chantiers concernés</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <Reveal>
              <h2 className="font-display font-medium text-encre-900 text-display-sm md:text-display-md text-balance">
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
              <div className="bg-white border border-brume-300 rounded-xl p-8 md:p-10">
                <p className="section-kicker">Montant des chantiers</p>
                <p className="tabular mt-6 font-display font-medium text-display-sm md:text-display-md text-encre-900">
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
      <section className="section-lg bande sur-fonce">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">02</span>
            <span className="section-kicker">Comment ça marche</span>
          </div>
          <Reveal>
            <h2 className="font-display font-medium text-white text-display-sm md:text-display-md max-w-2xl text-balance">
              Quatre étapes, et une seule facture possible.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {ETAPES.map((etape, i) => (
              <li key={etape.titre} className="flex gap-5">
                <span className="section-num pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-white leading-snug">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 text-white/85 leading-relaxed">{etape.desc}</p>
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
          <div className="max-w-3xl">
            {faq.map((item, i) => (
              <details key={item.q} className="group border-b border-brume-300 py-7" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-display font-semibold text-xl md:text-2xl text-encre-900">
                  <span>{item.q}</span>
                  <Plus className="w-6 h-6 shrink-0 mt-1 text-violet-600 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-5 text-encre-700 leading-relaxed max-w-prose text-pretty">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONVERSION (bande profonde) ============ */}
      <section className="section-lg bande sur-fonce">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display font-medium text-white text-display-sm md:text-display-md text-balance">
                Inscrivez votre entreprise.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-violet-200 leading-relaxed text-pretty">
                Quelques minutes : votre métier, votre zone d’intervention et de quoi vous
                joindre. Nous vérifions ensuite que nous pouvons vous être utiles sur votre
                secteur, et nous revenons vers vous.
              </p>
              <div className="mt-12">
                <CTAButton href={registerUrl(`metier-${slug}-final`)}>{CTA_LABEL}</CTAButton>
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
