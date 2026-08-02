import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { registerUrl, CTA_LABEL } from '../lib/links';
import { METIERS, POINTS_QUALIFIES } from '../data/metiers';
import { ETAPES, PAS_NOTRE_METIER, FAQ_COMMUNE as FAQ } from '../data/offre';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, ...data }));

const SectionHead = ({ num, kicker }) => (
  <div className="section-label">
    <span className="section-num">{num}</span>
    <span className="section-kicker">{kicker}</span>
  </div>
);

const Home = () => {
  usePageMeta({
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    description:
      "Celexia trouve et finance les demandes de chantiers, les qualifie, puis les transmet à un seul artisan. Vous chiffrez, vous signez, vous reversez 10 %. Rien à avancer.",
    canonical: 'https://agencecelexia.fr/',
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-kicker mb-6">Apport d’affaires · Artisans du bâtiment</p>
            <h1 className="font-display font-expanded font-black text-ardoise-900 text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl tracking-tight text-balance">
              Des chantiers qualifiés, transmis à un seul artisan.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ardoise-700 leading-relaxed max-w-prose">
              Nous trouvons les particuliers qui ont un vrai projet, nous vérifions qu’il tient
              debout, puis nous vous le transmettons — à vous seul. Vous chiffrez, vous signez,
              vous nous reversez 10 %.{' '}
              <strong className="text-ardoise-900 font-semibold">
                Si vous ne signez pas, vous ne payez rien.
              </strong>
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <CTAButton href={registerUrl('accueil-hero')}>{CTA_LABEL}</CTAButton>
              <a href="#metiers" className="btn-secondary">
                Voir les 4 métiers
              </a>
            </div>

            <p className="mt-5 text-sm text-acier-600">
              Inscription gratuite · Aucun budget à avancer
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — COMMENT ÇA MARCHE ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <SectionHead num="01" kicker="Comment ça marche" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight max-w-2xl text-balance">
              Quatre étapes, et une seule facture possible.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-chaux-300 border border-chaux-300 rounded-lg overflow-hidden md:grid-cols-2">
            {ETAPES.map((etape, i) => (
              <Reveal key={etape.titre} delay={i * 60}>
                <div className="bg-chaux-50 p-7 md:p-8 h-full">
                  <span className="section-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display font-bold text-xl text-ardoise-900 leading-snug">
                    {etape.titre}
                  </h3>
                  <p className="mt-3 text-ardoise-700 leading-relaxed">{etape.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Les cinq points de qualification */}
          <Reveal>
            <div className="mt-12 bg-white border border-acier-200 rounded-lg p-7 md:p-9">
              <h3 className="font-display font-bold text-xl text-ardoise-900">
                Ce que nous vérifions avant de vous transmettre quoi que ce soit
              </h3>
              <dl className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {POINTS_QUALIFIES.map((point) => (
                  <div key={point.titre} className="border-l-2 border-cuivre-300 pl-4">
                    <dt className="font-semibold text-ardoise-900">{point.titre}</dt>
                    <dd className="mt-1.5 text-sm text-ardoise-700 leading-relaxed">{point.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 — UN SEUL ARTISAN ============ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead num="02" kicker="Exclusivité" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight text-balance">
                Une demande, un artisan. Jamais cinq.
              </h2>
              <p className="mt-6 text-lg text-ardoise-700 leading-relaxed">
                C’est la différence avec un vendeur de contacts, et ce n’est pas une question
                de bonne volonté : c’est de l’arithmétique.
              </p>
              <p className="mt-4 text-ardoise-700 leading-relaxed">
                Nous ne sommes rémunérés qu’en cas de devis signé. Envoyer le même chantier à
                cinq entreprises diviserait donc nos propres chances par cinq — tout en vous
                obligeant à casser votre prix pour l’emporter. Nous avons exactement le même
                intérêt que vous : que ce soit vous qui signiez.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-chaux p-7 md:p-8">
                <h3 className="font-display font-bold text-lg text-ardoise-900">
                  Ce que nous ne faisons pas
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {PAS_NOTRE_METIER.map((item) => (
                    <li key={item} className="flex gap-3 text-ardoise-700">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-cuivre-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-chaux-300 text-sm text-ardoise-700 leading-relaxed">
                  Sur l’origine des demandes, nous restons volontairement discrets : c’est notre
                  métier, et c’est ce que nous finançons à votre place. En revanche nous sommes
                  précis sur ce que vous recevez, et c’est là-dessus que vous nous jugerez.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 03 — CE QUE ÇA COÛTE ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <SectionHead num="03" kicker="Rémunération" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight text-balance">
                10 %, et seulement si vous signez.
              </h2>
              <p className="mt-6 text-lg text-ardoise-700 leading-relaxed">
                Pas de frais d’inscription, pas d’abonnement, pas de budget publicitaire à
                avancer. Notre rémunération est un pourcentage des devis que vous avez
                effectivement signés grâce à un chantier que nous vous avons transmis.
              </p>
              <p className="mt-4 text-ardoise-700 leading-relaxed">
                Un budget de publicité, vous le dépensez que ça marche ou non. Un lot de
                contacts, vous le payez d’avance et il part souvent chez vos concurrents en même
                temps. Ici, tant qu’il n’y a pas de signature, il n’y a pas de facture.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-white border border-acier-200 rounded-lg p-7 md:p-8">
                <p className="section-kicker">Un exemple</p>
                <dl className="mt-6 space-y-4">
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-acier-200">
                    <dt className="text-ardoise-700">Devis signé par votre client</dt>
                    <dd className="tabular font-display font-bold text-xl text-ardoise-900">15 000 €</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-acier-200">
                    <dt className="text-ardoise-700">Notre commission (10 %)</dt>
                    <dd className="tabular font-display font-bold text-xl text-cuivre-600">1 500 €</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-semibold text-ardoise-900">Ce qui vous reste</dt>
                    <dd className="tabular font-display font-black text-2xl text-ardoise-900">13 500 €</dd>
                  </div>
                </dl>
                <p className="mt-6 pt-5 border-t border-acier-200 text-sm text-acier-600 leading-relaxed">
                  Devis non signé : commission de 0 €. Le montant est un exemple, pas une
                  estimation de votre activité.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 — LES MÉTIERS ============ */}
      <section id="metiers" className="section scroll-mt-20">
        <div className="container-custom">
          <SectionHead num="04" kicker="Les métiers accompagnés" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight max-w-2xl text-balance">
              Quatre métiers, choisis pour la taille des chantiers.
            </h2>
            <p className="mt-6 text-lg text-ardoise-700 leading-relaxed max-w-prose">
              Notre modèle n’a de sens que sur des chantiers d’un certain montant : c’est ce qui
              permet de financer la recherche des projets sans rien vous facturer. Nous nous
              concentrons donc sur quatre métiers.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {metiers.map((metier, i) => (
              <Reveal key={metier.slug} delay={i * 60}>
                <Link
                  to={`/metiers/${metier.slug}`}
                  className="card group flex flex-col h-full p-7 md:p-8"
                >
                  <span
                    className="w-8 h-1 rounded-sm"
                    style={{ backgroundColor: metier.color }}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-display font-bold text-xl text-ardoise-900 group-hover:text-cuivre-600 transition-colors">
                    {metier.label}
                  </h3>
                  <p className="mt-3 text-ardoise-700 leading-relaxed flex-grow">
                    {metier.accroche}
                  </p>
                  <p className="mt-5 pt-5 border-t border-acier-200 text-sm text-acier-600">
                    Chantiers de <span className="tabular text-ardoise-800 font-semibold">{metier.budget}</span> en moyenne sur le marché
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <SectionHead num="05" kicker="Les questions qu’on nous pose" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight max-w-2xl text-balance">
              Ce que vous êtes en train de vous demander.
            </h2>
          </Reveal>

          <div className="mt-12 max-w-3xl">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group border-b border-chaux-300 py-5" open={i === 0}>
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
              </Reveal>
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
                Le formulaire prend quelques minutes : votre métier, votre zone d’intervention et
                de quoi vous joindre. Nous vérifions ensuite que nous pouvons vous être utiles
                sur votre secteur, et nous revenons vers vous. Tant que rien n’est signé de votre
                côté, vous n’avez rien à payer.
              </p>
              <div className="mt-9">
                <CTAButton href={registerUrl('accueil-final')}>{CTA_LABEL}</CTAButton>
              </div>
              <p className="mt-5 text-sm text-acier-600">
                Une question avant de vous inscrire ?{' '}
                <Link to="/contact" className="text-cuivre-600 underline underline-offset-2 hover:text-cuivre-700">
                  Écrivez-nous
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
