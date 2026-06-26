import { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NicheContext } from '../context/NicheContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { getMetierLabel } from '../context/NicheContext';
import { initCalInline, CAL_URL } from '../lib/cal';
import Reveal from '../components/Reveal';

const BookingStrategy = () => {
  const [searchParams] = useSearchParams();
  const { niche, handleNicheChange } = useContext(NicheContext);

  useEffect(() => {
    const metierParam = searchParams.get('metier');
    if (metierParam) {
      handleNicheChange(metierParam);
    }
  }, [searchParams]);

  const metierLabel = getMetierLabel(niche);

  usePageMeta({
    title: `Réserver un appel découverte | Agence Celexia${niche ? ` - ${metierLabel}` : ''}`,
    description: '30 minutes pour comprendre votre activité, valider que notre apport d\'affaires est adapté et estimer le volume de chantiers que nous pouvons vous apporter. Gratuit, sans engagement.',
    canonical: 'https://agencecelexia.fr/reserver'
  });

  useEffect(() => {
    initCalInline({ elementOrSelector: '#my-cal-inline-booking' });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="dots-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-300/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="tag-glass mb-8 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            Appel découverte gratuit
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Réservez votre{' '}
            <span className="gradient-text">appel découverte</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            30 minutes pour valider que notre apport d'affaires est adapté à votre activité d'artisan
            et estimer ensemble le volume de chantiers que nous pouvons vous apporter.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            {['100% gratuit', 'Sans engagement', '30 minutes chrono'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'on va voir ensemble */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span className="tag mb-4 inline-block">Notre méthode</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Ce qu'on va voir ensemble
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                color: 'violet',
                title: 'Votre activité aujourd\'hui',
                desc: "Métier, zone d'intervention, panier moyen, capacité à absorber des chantiers supplémentaires"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                color: 'emerald',
                title: 'Potentiel apport d\'affaires',
                desc: "Estimation du volume de chantiers qualifiés que nous pouvons vous transmettre dans votre zone, projection de chiffre d'affaires"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                color: 'amber',
                title: 'Adéquation du modèle',
                desc: "Validation que notre fonctionnement (10 % sur devis signés, sans engagement) est adapté à votre métier et votre cycle commercial"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                color: 'blue',
                title: 'Modèle économique clair',
                desc: "10 % sur devis signés. 0 € de frais fixes. 0 engagement. On répond à toutes vos questions chiffrées."
              }
            ].map((item, i) => {
              const colors = {
                violet: { bg: 'bg-violet-100', text: 'text-violet-600', hoverBg: 'group-hover:bg-violet-600' },
                emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' },
                amber: { bg: 'bg-amber-100', text: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
                blue: { bg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
              };
              const c = colors[item.color];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="card p-8 group hover:shadow-glow h-full">
                    <div className={`icon-box ${c.bg} ${c.text} ${c.hoverBg} group-hover:text-white mb-5`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendrier — DARK section */}
      <section className="section-dark py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div className="dots-bg-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 mb-4">
                Réservation
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Choisissez votre créneau
              </h2>
              <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
                Un échange de 30 minutes, sans engagement, pour valider ensemble votre potentiel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
              <div
                id="my-cal-inline-booking"
                style={{width:'100%', height:'700px', overflow:'scroll', borderRadius: '12px'}}
              ></div>
            </div>

            <div className="text-center mt-4">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors"
              >
                Le calendrier ne charge pas ? Ouvrir directement sur cal.com
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-white/40 mb-2">Vous préférez nous écrire ?</p>
              <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-violet-400 hover:text-violet-300 transition-colors">
                agence.celexia@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-white/40 text-sm">
              <span>Appel de 30 minutes</span>
              <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" aria-hidden="true" />
              <span>Sans engagement</span>
              <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" aria-hidden="true" />
              <span>100% confidentiel</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="gradient-border p-8 md:p-12 rounded-2xl">
              <p className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Vous payez <span className="gradient-text">10 %</span> uniquement sur les devis signés.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Notre rémunération dépend de vos résultats. Pas de signature, pas de facture.
                Zéro frais fixe, zéro abonnement, zéro engagement.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default BookingStrategy;
