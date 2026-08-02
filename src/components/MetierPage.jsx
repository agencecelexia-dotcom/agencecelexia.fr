import { useParams, Link, Navigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { getMetier } from '../data/metiers';
import { getLegacyTarget } from '../lib/legacyRoutes';
import { ETAPES, FAQ_COMMUNE } from '../data/offre';
import { registerUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

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
      ? `Celexia trouve et finance les demandes de chantiers ${metier.labelCourt.toLowerCase()}, les qualifie, puis les transmet à un seul artisan. Vous reversez 10 % sur les devis signés.`
      : 'Ce métier n’est pas accompagné par Agence Celexia.',
    canonical: `https://agencecelexia.fr/metiers/${slug}`,
  });

  if (legacyTarget) return <Navigate to={legacyTarget} replace />;
  if (!metier) return <Navigate to="/" replace />;

  const faq = [...FAQ_COMMUNE, metier.faq];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-8 h-1 rounded-sm"
                style={{ backgroundColor: metier.color }}
                aria-hidden="true"
              />
              <p className="section-kicker">{metier.label}</p>
            </div>
            <h1 className="font-display font-expanded font-black text-ardoise-900 text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl tracking-tight text-balance">
              {metier.titre}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ardoise-700 leading-relaxed max-w-prose">
              {metier.accroche}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <CTAButton href={registerUrl(`metier-${slug}`)}>{CTA_LABEL}</CTAButton>
            </div>
            <p className="mt-5 text-sm text-acier-600">
              Inscription gratuite · Vous ne payez que sur devis signé
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — LES PROJETS ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-kicker">Les chantiers concernés</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight text-balance">
                Ce que nous vous transmettons.
              </h2>
              <ul className="mt-8 space-y-4">
                {metier.projets.map((projet) => (
                  <li key={projet} className="flex gap-3 text-ardoise-700">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-cuivre-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="leading-relaxed">{projet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-white border border-acier-200 rounded-lg p-7 md:p-8">
                <p className="section-kicker">Montant des chantiers</p>
                <p className="tabular mt-4 font-display font-expanded font-black text-3xl md:text-4xl text-ardoise-900">
                  {metier.budget}
                </p>
                <p className="mt-4 text-sm text-ardoise-700 leading-relaxed">
                  {metier.budgetNote}
                </p>
                <p className="mt-6 pt-5 border-t border-acier-200 text-sm text-acier-600 leading-relaxed">
                  Ordre de grandeur constaté sur le marché, donné pour situer le type de
                  chantier. Ce n’est ni une estimation de vos prix, ni une promesse de volume.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 02 — LE FONCTIONNEMENT ============ */}
      <section className="section">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">02</span>
            <span className="section-kicker">Comment ça marche</span>
          </div>
          <Reveal>
            <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight max-w-2xl text-balance">
              Quatre étapes, et une seule facture possible.
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-px bg-acier-200 border border-acier-200 rounded-lg overflow-hidden md:grid-cols-2">
            {ETAPES.map((etape, i) => (
              <li key={etape.titre} className="bg-white p-7 md:p-8">
                <span className="section-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display font-bold text-xl text-ardoise-900 leading-snug">
                  {etape.titre}
                </h3>
                <p className="mt-3 text-ardoise-700 leading-relaxed">{etape.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 03 — FAQ ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">03</span>
            <span className="section-kicker">Les questions qu’on nous pose</span>
          </div>
          <div className="max-w-3xl">
            {faq.map((item, i) => (
              <details key={item.q} className="group border-b border-chaux-300 py-5" open={i === 0}>
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-display font-bold text-lg text-ardoise-900">
                  <span>{item.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-1 text-cuivre-500 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <p className="mt-4 text-ardoise-700 leading-relaxed max-w-prose">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONVERSION ============ */}
      <section className="section">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-2xl">
              <hr className="rule-cuivre mb-10" />
              <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight text-balance">
                Inscrivez votre entreprise.
              </h2>
              <p className="mt-6 text-lg text-ardoise-700 leading-relaxed">
                Quelques minutes : votre métier, votre zone d’intervention et de quoi vous
                joindre. Nous vérifions ensuite que nous pouvons vous être utiles sur votre
                secteur, et nous revenons vers vous.
              </p>
              <div className="mt-9">
                <CTAButton href={registerUrl(`metier-${slug}-final`)}>{CTA_LABEL}</CTAButton>
              </div>
              <p className="mt-8 text-sm text-acier-600">
                <Link to="/" className="text-cuivre-600 underline underline-offset-2 hover:text-cuivre-700">
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
