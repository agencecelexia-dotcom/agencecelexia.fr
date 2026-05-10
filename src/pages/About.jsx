import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  usePageMeta({
    title: 'À propos | Agence Celexia',
    description: 'Découvrez Agence Celexia, agence d\'apport d\'affaires pour artisans. Modèle 100 % à la performance, 10 % sur devis signés, sans engagement.',
    canonical: 'https://agencecelexia.fr/about'
  });

  const aboutSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À propos - Agence Celexia',
    description: 'Découvrez Agence Celexia, agence d\'apport d\'affaires pour artisans.',
    url: 'https://agencecelexia.fr/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Agence Celexia',
      url: 'https://agencecelexia.fr',
      email: 'agence.celexia@gmail.com',
      description: 'Agence d\'apport d\'affaires pour artisans : nous générons les appels qualifiés, les artisans payent 10 % uniquement sur les devis signés.',
      foundingDate: '2024',
      areaServed: { '@type': 'Country', name: 'France' },
      knowsAbout: ['Apport d\'affaires', 'Acquisition client artisans', 'Génération de leads qualifiés']
    },
    datePublished: '2024-10-01',
    dateModified: '2026-05-10'
  }), []);

  useJsonLd(aboutSchema);

  const faqs = [
    {
      question: 'Comment fonctionne votre apport d\'affaires ?',
      answer: 'Nous prenons en charge toute la mécanique d\'acquisition locale pour faire sonner votre téléphone avec des prospects sérieux. Vous chiffrez et signez. Vous nous reversez 10 % du devis signé.'
    },
    {
      question: 'Combien je paie exactement ?',
      answer: '10 % du montant TTC de chaque devis signé grâce à un appel apporté par Celexia. Pas de frais d\'entrée, pas de mensualité, pas d\'abonnement.'
    },
    {
      question: 'Quels artisans accompagnez-vous ?',
      answer: 'Nous travaillons avec 19 métiers d\'artisans et de services à l\'habitat : plomberie, couverture, menuiserie, chauffagistes, piscines, paysage, fenêtres, portes de garage, diagnostics immobiliers, déménagement, arboriculture, et d\'autres encore.'
    },
    {
      question: 'Y a-t-il un engagement de durée ?',
      answer: 'Non. Aucune durée minimum, aucun frais de sortie. Vous arrêtez quand vous voulez. Notre seule garantie de rester, c\'est de continuer à vous apporter des chantiers rentables.'
    },
    {
      question: 'Que se passe-t-il si un appel ne signe pas ?',
      answer: 'Vous ne payez rien. Notre rôle est justement de filtrer en amont pour ne vous transmettre que des demandes sérieuses. Quand un appel ne se transforme pas, c\'est notre risque.'
    },
    {
      question: 'Travaillez-vous partout en France ?',
      answer: 'Oui, sur toute la France métropolitaine. Nous adaptons les zones d\'intervention à votre capacité de déplacement et à votre planning.'
    },
    {
      question: 'Sous combien de temps les premiers appels arrivent ?',
      answer: 'Une fois le dispositif d\'acquisition lancé, les premiers appels arrivent généralement dans les premières semaines. Le rythme se stabilise sur les 2-3 premiers mois.'
    },
    {
      question: 'Puis-je continuer mes propres canaux d\'acquisition en parallèle ?',
      answer: 'Bien sûr. Vous restez maître de votre activité. Notre rôle est d\'ajouter du flux qualifié, pas de vous remplacer.'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Diagnostic et calibrage',
      desc: 'Nous étudions votre métier, votre zone, votre panier moyen et votre capacité à absorber des chantiers supplémentaires. On calibre le bon volume.'
    },
    {
      num: '02',
      title: 'Lancement du dispositif d\'acquisition',
      desc: 'Nous activons les leviers d\'acquisition locaux nécessaires pour faire sonner votre téléphone avec des prospects sérieux dans votre zone.'
    },
    {
      num: '03',
      title: 'Vous traitez les appels',
      desc: 'Les appels arrivent directement chez vous. Vous prenez le rendez-vous, vous chiffrez le devis, vous signez. Nous n\'intervenons jamais dans votre relation client.'
    },
    {
      num: '04',
      title: 'Vous reversez 10 % sur signé',
      desc: 'Sur les devis effectivement signés, vous nous reversez 10 % du montant TTC. Le reste de votre marge est à vous, intégralement.'
    }
  ];

  const values = [
    { title: 'Transparence totale', desc: 'Vous voyez les appels arriver, vous suivez vos signatures, vous savez exactement ce que vous nous devez et pourquoi.' },
    { title: 'Engagement résultats', desc: 'Notre rémunération dépend uniquement des chantiers signés. Pas de signature, pas de facture.' },
    { title: 'Expertise artisans', desc: 'Nous travaillons exclusivement avec les artisans : nous connaissons saisons, parcours d\'achat et objections.' },
    { title: 'Communication directe', desc: 'Un interlocuteur dédié qui connaît votre dossier. Pas de plateforme impersonnelle.' },
    { title: 'Sans engagement', desc: 'Aucune durée minimum, aucun frais de sortie. Vous arrêtez quand vous voulez.' },
    { title: 'Réactivité', desc: 'Réponse sous 24 h ouvrées et ajustement rapide du dispositif quand votre activité évolue.' }
  ];

  const audience = [
    { bold: 'Artisan établi', rest: 'qui souhaite stabiliser et augmenter son volume d\'activité' },
    { bold: 'Chef d\'entreprise du bâtiment', rest: 'qui veut réduire sa dépendance aux prescripteurs' },
    { bold: 'Professionnel des services à l\'habitat', rest: 'cherchant à remplir son planning sur plusieurs semaines' },
    { bold: 'Entrepreneur', rest: 'qui veut développer son activité sans investir en frais fixes' },
    { bold: 'Artisan pragmatique', rest: 'qui préfère payer uniquement quand ça signe' }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">À propos</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Agence d'apport d'affaires
            <span className="block text-violet-600">pour artisans</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Nous amenons les appels qualifiés. Vous payez 10 % uniquement sur les devis signés.
            Pas de frais fixes, pas d'engagement, pas de mauvaise surprise.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Notre histoire</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Thomas &amp; Antoine, au service des artisans
            </h2>
          </div>

          <div className="card p-8 md:p-10 border-gray-200 mb-8">
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Thomas et Antoine se connaissent depuis le collège. Très tôt, ils ont vu leurs proches artisans
              galérer à remplir leur planning malgré un savoir-faire impeccable. À l'inverse, des concurrents moins
              compétents captaient les chantiers grâce à une meilleure visibilité en ligne.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Le constat était simple : <strong className="text-gray-900">les artisans n'ont ni le temps,
              ni l'envie de devenir experts en acquisition client</strong>. Ils veulent juste recevoir des appels
              de gens qui ont un vrai projet, et chiffrer correctement.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Celexia est née de cette idée : <strong className="text-gray-900">on prend en charge la partie acquisition,
              vous prenez en charge la partie chantier, et on partage le résultat</strong>. 10 % uniquement sur les
              devis signés. Sans engagement. Sans frais fixes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 border-gray-200">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Thomas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Co-fondateur. Spécialiste de l'acquisition client locale. Sa devise : "Un artisan qui signe est notre meilleure publicité."
              </p>
            </div>
            <div className="card p-7 border-gray-200">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Antoine</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Co-fondateur. Expert en automatisation et systèmes de qualification. Son credo : "Si on filtre bien en amont,
                tout devient plus simple en aval."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Notre méthode</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Quatre étapes, zéro surprise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un process clair, pensé pour des artisans qui n'ont pas de temps à perdre en réunions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step) => (
              <div key={step.num} className="card p-7 group border-gray-200 hover:border-violet-200">
                <span className="font-display text-4xl font-bold text-violet-200 block mb-3">{step.num}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Engagements</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Nos principes de travail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <div key={i} className="card p-6 group border-gray-200 hover:border-violet-200">
                <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors duration-300">
                  <span className="text-violet-600 font-bold text-xs group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Pour qui ?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Notre apport d'affaires est adapté si vous êtes...
            </h2>
          </div>

          <div className="card-violet p-7 md:p-9">
            <div className="space-y-4">
              {audience.map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2.5 mr-3.5 flex-shrink-0" />
                  <p className="text-white">
                    <strong className="text-white">{item.bold}</strong> {item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Discutons de votre projet
          </h2>
          <p className="text-base md:text-lg text-violet-100 mb-4 max-w-xl mx-auto leading-relaxed">
            30 minutes pour valider que notre modèle est adapté à votre activité et estimer ensemble
            le volume de chantiers que nous pouvons vous apporter.
          </p>
          <p className="text-violet-200 text-sm mb-8">
            Pas de discours commercial. Une conversation franche entre professionnels.
          </p>

          <Link
            to="/reserver"
            className="inline-flex items-center justify-center bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 arrow-animate"
          >
            Réserver un appel découverte
            <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <div className="mt-10 pt-6 border-t border-white/20">
            <p className="text-sm text-violet-200 mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:text-violet-100 transition-colors">
              agence.celexia@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className={`text-violet-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
