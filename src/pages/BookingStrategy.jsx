import { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NicheContext } from '../context/NicheContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { getMetierLabel } from '../context/NicheContext';
import { initCalInline, CAL_URL } from '../lib/cal';

const BookingStrategy = () => {
  const [searchParams] = useSearchParams();
  const { niche, handleNicheChange } = useContext(NicheContext);

  // Pré-sélectionner le métier depuis l'URL si fourni
  useEffect(() => {
    const metierParam = searchParams.get('metier');
    if (metierParam) {
      handleNicheChange(metierParam);
    }
  }, [searchParams]);

  const metierLabel = getMetierLabel(niche);

  // Métadonnées SEO
  usePageMeta({
    title: `Réserver un appel découverte | Agence Celexia${niche ? ` - ${metierLabel}` : ''}`,
    description: '30 minutes pour comprendre votre activité, valider que notre apport d\'affaires est adapté et estimer le volume de chantiers que nous pouvons vous apporter. Gratuit, sans engagement.',
    canonical: 'https://agencecelexia.fr/reserver'
  });

  // Initialisation Cal.com
  useEffect(() => {
    initCalInline({ elementOrSelector: '#my-cal-inline-booking' });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Appel découverte gratuit</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Réservez votre appel découverte
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            30 minutes pour valider que notre apport d'affaires est adapté à votre activité d'artisan
            et estimer ensemble le volume de chantiers que nous pouvons vous apporter.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% gratuit
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30 minutes chrono
            </span>
          </div>
        </div>
      </section>

      {/* Ce qu'on va voir ensemble */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Ce qu'on va voir ensemble
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Votre activité aujourd'hui</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Métier, zone d'intervention, panier moyen, capacité à absorber des chantiers supplémentaires
              </p>
            </div>

            <div className="card p-6 border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Potentiel apport d'affaires</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Estimation du volume de chantiers qualifiés que nous pouvons vous transmettre dans votre zone, projection de chiffre d'affaires
              </p>
            </div>

            <div className="card p-6 border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Adéquation du modèle</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Validation que notre fonctionnement (10 % sur devis signés, sans engagement) est adapté à votre métier et votre cycle commercial
              </p>
            </div>

            <div className="card p-6 border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Modèle économique clair</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                10 % sur devis signés. 0 € de frais fixes. 0 engagement. On répond à toutes vos questions chiffrées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Choisissez votre créneau
          </h2>

          <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-card">
            <div
              id="my-cal-inline-booking"
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          {/* Fallback : lien externe si le widget ne charge pas */}
          <div className="text-center mt-4">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-violet-600 underline underline-offset-2 transition-colors"
            >
              Le calendrier ne charge pas ? Ouvrir directement sur cal.com
            </a>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-violet-600 hover:text-violet-700 transition-colors">
              agence.celexia@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold text-gray-900 mb-4 tracking-wide uppercase">
            Vous payez 10 % uniquement sur les devis signés. Sinon, vous ne payez rien.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Notre rémunération dépend de vos résultats. Pas de signature, pas de facture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookingStrategy;
