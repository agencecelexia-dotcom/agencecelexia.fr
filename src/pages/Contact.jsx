import { usePageMeta } from '../hooks/usePageMeta';
import { registerUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const Contact = () => {
  usePageMeta({
    title: 'Contact | Agence Celexia',
    description:
      "Joindre Agence Celexia : téléphone, courriel et informations de la société (CELEXIA, SIREN 939 306 429, Nogent-sur-Marne). Pour rejoindre le réseau, l’inscription se fait en ligne.",
    canonical: 'https://agencecelexia.fr/contact',
  });

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="px-5 md:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-kicker mb-6">Nous joindre</p>
            <h1 className="font-display font-expanded font-black text-ardoise-900 text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl tracking-tight text-balance">
              Une question avant de vous inscrire ?
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ardoise-700 leading-relaxed max-w-prose">
              Vous pouvez nous appeler ou nous écrire. Si vous voulez simplement rejoindre le
              réseau, l’inscription en ligne va plus vite — nous vous rappelons ensuite.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 01 — COORDONNÉES ============ */}
      <section className="section bg-chaux-100 border-y border-chaux-300">
        <div className="container-custom">
          <div className="section-label">
            <span className="section-num">01</span>
            <span className="section-kicker">Coordonnées</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <a
                href="tel:+33651725756"
                className="card block h-full p-7 md:p-8 group"
              >
                <p className="section-kicker">Téléphone</p>
                <p className="tabular mt-4 font-display font-bold text-2xl text-ardoise-900 group-hover:text-cuivre-600 transition-colors">
                  06 51 72 57 56
                </p>
                <p className="mt-3 text-sm text-ardoise-700">
                  Du lundi au vendredi, aux heures de bureau.
                </p>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a
                href="mailto:agence.celexia@gmail.com"
                className="card block h-full p-7 md:p-8 group"
              >
                <p className="section-kicker">Courriel</p>
                <p className="mt-4 font-display font-bold text-xl text-ardoise-900 break-all group-hover:text-cuivre-600 transition-colors">
                  agence.celexia@gmail.com
                </p>
                <p className="mt-3 text-sm text-ardoise-700">
                  Pour toute question sur le fonctionnement ou votre secteur.
                </p>
              </a>
            </Reveal>
          </div>

          {/* Identité vérifiable — le seul « gage » que nous pouvons donner sans preuve sociale */}
          <Reveal delay={140}>
            <div className="mt-5 bg-white border border-acier-200 rounded-lg p-7 md:p-8">
              <p className="section-kicker mb-5">La société, en clair</p>
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">Raison sociale</dt>
                  <dd className="text-ardoise-900 font-semibold text-sm text-right">CELEXIA</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">Forme juridique</dt>
                  <dd className="text-ardoise-900 font-semibold text-sm text-right">SASU</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">SIREN</dt>
                  <dd className="tabular text-ardoise-900 font-semibold text-sm text-right">939 306 429</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">Siège</dt>
                  <dd className="text-ardoise-900 font-semibold text-sm text-right">Nogent-sur-Marne</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">Dirigeants</dt>
                  <dd className="text-ardoise-900 font-semibold text-sm text-right">Thomas et Antoine</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-acier-200 pb-3">
                  <dt className="text-acier-600 text-sm">Zone d’intervention</dt>
                  <dd className="text-ardoise-900 font-semibold text-sm text-right">France</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-acier-600 leading-relaxed">
                Ces informations sont publiques : vous pouvez les vérifier auprès du registre du
                commerce avant de nous confier quoi que ce soit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CONVERSION ============ */}
      <section className="section">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-2xl">
              <hr className="rule-cuivre mb-10" />
              <h2 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight text-balance">
                Ou inscrivez-vous directement.
              </h2>
              <p className="mt-6 text-lg text-ardoise-700 leading-relaxed">
                Votre métier, votre zone d’intervention et de quoi vous joindre. Nous vérifions
                que nous pouvons vous être utiles sur votre secteur, et nous revenons vers vous.
              </p>
              <div className="mt-9">
                <CTAButton href={registerUrl('contact')}>{CTA_LABEL}</CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
