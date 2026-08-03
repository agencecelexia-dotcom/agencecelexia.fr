import { usePageMeta } from '../hooks/usePageMeta';
import { registerUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const PRINCIPES = [
  {
    titre: 'Payés seulement si vous signez',
    desc: "Nous aurions pu vendre un abonnement ou des packs de contacts, encaissés d’avance quoi qu’il arrive. Nous avons choisi l’inverse : si votre devis n’est pas signé, nous n’avons rien gagné.",
  },
  {
    titre: 'Une demande, un artisan',
    desc: "Mettre cinq entreprises en concurrence sur le même chantier fait baisser les prix et fait perdre du temps à quatre d’entre elles. Nous ne transmettons jamais deux fois la même demande.",
  },
  {
    titre: 'Un réseau volontairement restreint',
    desc: "Nous accompagnons quatre métiers, pas vingt. Élargir sans limite reviendrait à diluer ce que nous transmettons, et à revenir exactement au modèle que nous refusons.",
  },
  {
    titre: 'Rien d’invérifiable sur ce site',
    desc: "Vous ne trouverez ici ni témoignage, ni logo client, ni compteur de chantiers. Tant que nous ne pouvons pas le prouver, nous préférons ne pas l’écrire.",
  },
];

const About = () => {
  usePageMeta({
    title: 'À propos | Agence Celexia',
    description:
      "Celexia est un apporteur d’affaires pour artisans du bâtiment, fondé par Thomas et Antoine. Notre modèle : payés uniquement sur les devis signés, une demande transmise à un seul artisan.",
    canonical: 'https://agencecelexia.fr/about',
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-kicker mb-6">Qui nous sommes</p>
            <h1 className="font-display font-medium text-encre-900 text-display-sm md:text-display-md text-balance">
              Nous ne vendons rien aux artisans.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-encre-700 leading-relaxed max-w-prose">
              Celexia est un apporteur d’affaires : nous cherchons les chantiers, nous les
              qualifions, et nous les transmettons. Nous ne facturons ni site web, ni
              abonnement, ni prestation. Notre seule rémunération est un pourcentage des devis
              que vous signez.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — L'ORIGINE ============ */}
      <section className="section bg-brume-100 border-y border-brume-300">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-kicker">L’origine</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-display font-medium text-encre-900 text-display-sm md:text-display-md text-balance">
                Thomas et Antoine
              </h2>
              <div className="mt-7 space-y-4 text-encre-700 leading-relaxed">
                <p>
                  Ils se connaissent depuis le collège. Autour d’eux, des artisans au savoir-faire
                  solide passaient leurs soirées à courir après des devis, pendant que des
                  entreprises moins compétentes récupéraient les chantiers grâce à une meilleure
                  visibilité.
                </p>
                <p>
                  Le constat était simple :{' '}
                  <strong className="text-encre-900 font-semibold">
                    un artisan n’a ni le temps ni l’envie de devenir un spécialiste de la
                    prospection
                  </strong>
                  . Il veut recevoir des demandes de gens qui ont un vrai projet, et chiffrer
                  correctement.
                </p>
                <p>
                  Celexia est née de là : nous prenons en charge la recherche des chantiers et
                  nous la finançons, vous prenez en charge le chantier, et nous ne sommes payés
                  que si vous signez.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white border border-brume-200 rounded-lg p-6">
                  <span className="font-display font-medium text-2xl text-violet-500" aria-hidden="true">
                    T
                  </span>
                  <h3 className="mt-3 font-display font-bold text-lg text-encre-900">Thomas</h3>
                  <p className="mt-2 text-sm text-encre-700 leading-relaxed">
                    Co-fondateur. Il s’occupe de la recherche des chantiers et des relations avec
                    les artisans partenaires.
                  </p>
                </div>
                <div className="bg-white border border-brume-200 rounded-lg p-6">
                  <span className="font-display font-medium text-2xl text-violet-500" aria-hidden="true">
                    A
                  </span>
                  <h3 className="mt-3 font-display font-bold text-lg text-encre-900">Antoine</h3>
                  <p className="mt-2 text-sm text-encre-700 leading-relaxed">
                    Co-fondateur. Il s’occupe de la qualification des demandes et des outils qui
                    la rendent régulière.
                  </p>
                </div>
                <div className="sm:col-span-2 bg-white border border-brume-200 rounded-lg p-6">
                  <p className="section-kicker mb-3">La société</p>
                  <p className="text-sm text-encre-700 leading-relaxed">
                    CELEXIA, société par actions simplifiée immatriculée en France sous le SIREN{' '}
                    <span className="tabular font-semibold text-encre-900">939 306 429</span>,
                    dont le siège est à Nogent-sur-Marne. Ces informations sont publiques et
                    vérifiables.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 02 — CE QUI NOUS ENGAGE ============ */}
      <section className="section">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">02</span>
            <span className="section-kicker">Nos partis pris</span>
          </div>
          <Reveal>
            <h2 className="font-display font-medium text-encre-900 text-display-sm md:text-display-md max-w-2xl text-balance">
              Quatre choix, et ce qu’ils nous coûtent.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {PRINCIPES.map((principe, i) => (
              <Reveal key={principe.titre} delay={i * 60}>
                <div className="card h-full p-7">
                  <h3 className="font-display font-bold text-lg text-encre-900">{principe.titre}</h3>
                  <p className="mt-3 text-encre-700 leading-relaxed">{principe.desc}</p>
                </div>
              </Reveal>
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
                Quelques minutes suffisent. Nous vérifions ensuite que nous pouvons vous être
                utiles sur votre secteur, et nous revenons vers vous.
              </p>
              <div className="mt-12">
                <CTAButton href={registerUrl('about')}>{CTA_LABEL}</CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
