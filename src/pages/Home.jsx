import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { registerUrl, CTA_LABEL, TAUX } from '../lib/links';
import { METIERS, POINTS_QUALIFIES } from '../data/metiers';
import { DEFINITION, ETAPES, PAS_NOTRE_METIER, FAQ_COMMUNE as FAQ } from '../data/offre';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, ...data }));

const EXEMPLE = 15000;
const commission = Math.round((EXEMPLE * TAUX) / 100);
const euro = (n) => n.toLocaleString('fr-FR') + ' €';

const SectionHead = ({ num, kicker }) => (
  <div className="section-label">
    <span className="section-num">{num}</span>
    <span className="section-kicker">{kicker}</span>
  </div>
);

const Croix = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Plus = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Home = () => {
  usePageMeta({
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    description:
      `Apporteur d'affaires pour artisans. Nous finançons et qualifions les demandes de chantiers, puis les transmettons à un seul artisan. ${TAUX} % sur devis signé.`,
    canonical: 'https://agencecelexia.fr/',
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="section-kicker mb-8">Apport d’affaires · Artisans du bâtiment</p>
            <h1 className="font-display font-expanded font-black text-encre-900 text-display-sm sm:text-display-md md:text-display-lg text-balance">
              Des chantiers qualifiés,
              <br className="hidden sm:block" />{' '}
              <span className="text-violet-600">transmis à un seul artisan.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-encre-700 leading-relaxed max-w-prose text-pretty">
              Nous trouvons les particuliers qui ont un vrai projet, nous vérifions qu’il tient
              debout, puis nous vous le transmettons — à vous seul. Vous chiffrez, vous signez,
              vous nous reversez {TAUX} %.{' '}
              <strong className="text-encre-900 font-semibold">
                Si vous ne signez pas, vous ne payez rien.
              </strong>
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CTAButton href={registerUrl('accueil-hero')}>{CTA_LABEL}</CTAButton>
              <a href="#metiers" className="btn-secondary">Voir les 4 métiers</a>
            </div>

            <p className="mt-6 text-sm text-encre-600">
              Inscription gratuite · Aucun budget à avancer
            </p>
          </div>
        </div>
      </section>

      {/* ============ DÉFINITION — bloc court, autonome, pensé pour être cité ============ */}
      <section className="px-5 md:px-8 pb-20 md:pb-28">
        <div className="container-custom">
          <div className="border-l-2 border-violet-500 pl-6 md:pl-8 max-w-3xl">
            <h2 className="section-kicker mb-4">Qu’est-ce qu’Agence Celexia ?</h2>
            <p className="text-lg md:text-xl text-encre-700 leading-relaxed text-pretty">
              {DEFINITION}
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — COMMENT ÇA MARCHE ============ */}
      <section className="section bg-brume-50 border-y border-brume-200">
        <div className="container-custom">
          <SectionHead num="01" kicker="Comment ça marche" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-encre-900 text-display-sm md:text-display-md max-w-2xl text-balance">
              Quatre étapes, et une seule facture possible.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {ETAPES.map((etape, i) => (
              <Reveal key={etape.titre} delay={i * 70}>
                <li className="flex gap-5">
                  <span className="section-num pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-encre-900 leading-snug">
                      {etape.titre}
                    </h3>
                    <p className="mt-3 text-encre-700 leading-relaxed">{etape.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="mt-20 bg-white border border-brume-300 rounded-xl p-8 md:p-12">
              <h3 className="font-display font-semibold text-xl md:text-2xl text-encre-900">
                Ce que nous vérifions avant de vous transmettre quoi que ce soit
              </h3>
              <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {POINTS_QUALIFIES.map((point) => (
                  <div key={point.titre} className="border-t border-violet-200 pt-4">
                    <dt className="font-sans font-semibold text-encre-900">{point.titre}</dt>
                    <dd className="mt-2 text-sm text-encre-700 leading-relaxed">{point.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 — UN SEUL ARTISAN (bande profonde) ============ */}
      <section className="section-lg bande sur-fonce">
        <div className="container-custom">
          <SectionHead num="02" kicker="Exclusivité" />
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <h2 className="font-display font-expanded font-black text-white text-display-sm md:text-display-md text-balance">
                Une demande, un artisan. Jamais cinq.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-violet-200 leading-relaxed text-pretty">
                C’est la différence avec un vendeur de contacts, et ce n’est pas une question
                de bonne volonté : c’est de l’arithmétique.
              </p>
              <p className="mt-5 text-white/85 leading-relaxed">
                Nous ne sommes rémunérés qu’en cas de devis signé. Envoyer le même chantier à
                cinq entreprises diviserait donc nos propres chances par cinq — tout en vous
                obligeant à casser votre prix pour l’emporter. Nous avons exactement le même
                intérêt que vous : que ce soit vous qui signiez.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="card-fonce p-8 md:p-10">
                <h3 className="font-display font-semibold text-xl text-white">
                  Ce que nous ne faisons pas
                </h3>
                <ul className="mt-8 space-y-5">
                  {PAS_NOTRE_METIER.map((item) => (
                    <li key={item} className="flex gap-4 text-white/85">
                      <Croix className="w-5 h-5 shrink-0 mt-0.5 text-violet-300" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 pt-8 border-t border-white/15 text-sm text-violet-200 leading-relaxed">
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
      <section className="section">
        <div className="container-custom">
          <SectionHead num="03" kicker="Rémunération" />
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <Reveal>
              <h2 className="font-display font-expanded font-black text-encre-900 text-display-sm md:text-display-md text-balance">
                {TAUX} %, et seulement si vous signez.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-encre-700 leading-relaxed text-pretty">
                Pas de frais d’inscription, pas d’abonnement, pas de budget publicitaire à
                avancer. Notre rémunération est un pourcentage des devis que vous avez
                effectivement signés grâce à un chantier que nous vous avons transmis.
              </p>
              <p className="mt-5 text-encre-700 leading-relaxed">
                Un budget de publicité, vous le dépensez que ça marche ou non. Un lot de
                contacts, vous le payez d’avance et il part souvent chez vos concurrents en même
                temps. Ici, tant qu’il n’y a pas de signature, il n’y a pas de facture.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="bg-brume-50 border border-brume-200 rounded-xl p-8 md:p-10">
                <p className="section-kicker">Un exemple</p>
                <dl className="mt-8 space-y-5">
                  <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-brume-300">
                    <dt className="text-encre-700">Devis signé par votre client</dt>
                    <dd className="tabular font-display font-semibold text-2xl text-encre-900">{euro(EXEMPLE)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-brume-300">
                    <dt className="text-encre-700">Notre commission ({TAUX} %)</dt>
                    <dd className="tabular font-display font-semibold text-2xl text-violet-600">{euro(commission)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-semibold text-encre-900">Ce qui vous reste</dt>
                    <dd className="tabular font-display font-semibold text-3xl text-encre-900">{euro(EXEMPLE - commission)}</dd>
                  </div>
                </dl>
                <p className="mt-8 pt-6 border-t border-brume-300 text-sm text-encre-600 leading-relaxed">
                  Devis non signé : commission de 0 €. Le montant est un exemple, pas une
                  estimation de votre activité.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 — LES MÉTIERS ============ */}
      <section id="metiers" className="section bg-brume-50 border-y border-brume-200 scroll-mt-20">
        <div className="container-custom">
          <SectionHead num="04" kicker="Les métiers accompagnés" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-encre-900 text-display-sm md:text-display-md max-w-2xl text-balance">
              Quatre métiers, choisis pour la taille des chantiers.
            </h2>
            <p className="mt-8 text-lg text-encre-700 leading-relaxed max-w-prose text-pretty">
              Notre modèle n’a de sens que sur des chantiers d’un certain montant : c’est ce qui
              permet de financer la recherche des projets sans rien vous facturer.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {metiers.map((metier, i) => (
              <Reveal key={metier.slug} delay={i * 70}>
                <Link
                  to={`/metiers/${metier.slug}`}
                  className="card group flex flex-col h-full p-8 md:p-10"
                >
                  <span
                    className="w-10 h-1 rounded-full"
                    style={{ backgroundColor: metier.color }}
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 font-display font-semibold text-2xl text-encre-900 group-hover:text-violet-600 transition-colors">
                    {metier.label}
                  </h3>
                  <p className="mt-4 text-encre-700 leading-relaxed grow">{metier.accroche}</p>
                  <p className="mt-8 pt-6 border-t border-brume-200 text-sm text-encre-600">
                    Chantiers de{' '}
                    <span className="tabular text-encre-900 font-semibold">{metier.budget}</span>{' '}
                    en moyenne sur le marché
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead num="05" kicker="Les questions qu’on nous pose" />
          <Reveal>
            <h2 className="font-display font-expanded font-black text-encre-900 text-display-sm md:text-display-md max-w-2xl text-balance">
              Ce que vous êtes en train de vous demander.
            </h2>
          </Reveal>

          <div className="mt-16 max-w-3xl">
            {FAQ.map((item, i) => (
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
              <h2 className="font-display font-expanded font-black text-white text-display-sm md:text-display-md text-balance">
                Inscrivez votre entreprise.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-violet-200 leading-relaxed text-pretty">
                Le formulaire prend quelques minutes : votre métier, votre zone d’intervention et
                de quoi vous joindre. Nous vérifions ensuite que nous pouvons vous être utiles
                sur votre secteur, et nous revenons vers vous. Tant que rien n’est signé de votre
                côté, vous n’avez rien à payer.
              </p>
              <div className="mt-12">
                <CTAButton href={registerUrl('accueil-final')}>{CTA_LABEL}</CTAButton>
              </div>
              <p className="mt-8 text-sm text-violet-200">
                Une question avant de vous inscrire ?{' '}
                <Link to="/contact" className="text-white underline underline-offset-4 hover:text-violet-200">
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
