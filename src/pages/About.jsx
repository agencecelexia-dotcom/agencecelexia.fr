import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { REGISTER_URL } from '../lib/links';
import Reveal from '../components/Reveal';

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
      description: 'Apporteur d\'affaires pour artisans du bâtiment. On finance la pub, on qualifie les clients, on vous envoie des chantiers. Vous ne payez 10 % que sur les devis signés.',
      foundingDate: '2024',
      areaServed: { '@type': 'Country', name: 'France' },
      knowsAbout: ['Apport d\'affaires', 'Acquisition client artisans', 'Génération de leads qualifiés']
    },
    datePublished: '2024-10-01',
    dateModified: '2026-06-26'
  }), []);

  useJsonLd(aboutSchema);

  const faqs = [
    { question: 'Comment fonctionne votre apport d\'affaires ?', answer: 'Nous finançons 100 % de la publicité et qualifions chaque demande avant de vous la transmettre. Vous recevez des chantiers prêts à chiffrer. Vous nous reversez 10 % uniquement sur les devis signés.' },
    { question: 'Combien je paie exactement ?', answer: '10 % du montant TTC de chaque devis signé grâce à un appel apporté par Celexia. Pas de frais d\'entrée, pas de mensualité, pas d\'abonnement.' },
    { question: 'Quels artisans accompagnez-vous ?', answer: 'Nous travaillons avec 19 métiers d\'artisans et de services à l\'habitat : plomberie, couverture, menuiserie, chauffagistes, piscines, paysage, fenêtres, portes de garage, diagnostics immobiliers, déménagement, arboriculture, et d\'autres encore.' },
    { question: 'Y a-t-il un engagement de durée ?', answer: 'Non. Aucune durée minimum, aucun frais de sortie. Vous arrêtez quand vous voulez. Notre seule garantie de rester, c\'est de continuer à vous apporter des chantiers rentables.' },
    { question: 'Que se passe-t-il si un appel ne signe pas ?', answer: 'Vous ne payez rien. Notre rôle est justement de filtrer en amont pour ne vous transmettre que des demandes sérieuses. Quand un appel ne se transforme pas, c\'est notre risque.' },
    { question: 'Travaillez-vous partout en France ?', answer: 'Oui, sur toute la France métropolitaine. Nous adaptons les zones d\'intervention à votre capacité de déplacement et à votre planning.' },
    { question: 'Sous combien de temps les premiers chantiers arrivent ?', answer: 'Une fois le dispositif d\'acquisition lancé, les premiers chantiers qualifiés vous sont transmis généralement dans les premières semaines. Le rythme se stabilise sur les 2-3 premiers mois.' },
    { question: 'Puis-je continuer mes propres canaux d\'acquisition en parallèle ?', answer: 'Bien sûr. Vous restez maître de votre activité. Notre rôle est d\'ajouter du flux qualifié, pas de vous remplacer.' }
  ];

  const steps = [
    { num: '01', title: 'Diagnostic et calibrage', desc: 'Nous étudions votre métier, votre zone, votre panier moyen et votre capacité à absorber des chantiers supplémentaires. On calibre le bon volume.' },
    { num: '02', title: 'On finance la pub et on lance l\'acquisition', desc: 'Celexia investit 100 % du budget publicitaire et active les leviers d\'acquisition locaux pour générer des demandes sérieuses dans votre zone.' },
    { num: '03', title: 'On qualifie et on vous transmet les chantiers', desc: 'On reçoit les demandes, on vérifie le besoin, la zone et le budget, puis on vous transmet uniquement les projets prêts à chiffrer.' },
    { num: '04', title: 'Vous reversez 10 % sur signé', desc: 'Sur les devis effectivement signés, vous nous reversez 10 % du montant TTC. Le reste de votre marge est à vous, intégralement.' }
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
        <div className="dots-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px] -translate-y-1/3 -translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-100/30 rounded-full blur-[80px] translate-y-1/4 translate-x-1/4" aria-hidden="true" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="tag-glass mb-8 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            À propos de Celexia
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            On finance la pub, on qualifie,
            <span className="gradient-text block">on vous envoie des chantiers.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Vous ne payez <strong className="text-gray-900">10 % que sur les devis signés</strong>. Sans engagement, sans avance, sans frais fixes.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="tag mb-4 inline-block">Notre histoire</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Thomas &amp; Antoine
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-8 md:p-10 border-gray-200 mb-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Thomas et Antoine se connaissent depuis le collège. Très tôt, ils ont vu leurs proches artisans
                galérer à remplir leur planning malgré un savoir-faire impeccable. À l'inverse, des concurrents moins
                compétents captaient les chantiers grâce à une meilleure visibilité en ligne.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Le constat était simple : <strong className="text-gray-900">les artisans n'ont ni le temps,
                ni l'envie de devenir experts en acquisition client</strong>. Ils veulent juste recevoir des appels
                de gens qui ont un vrai projet, et chiffrer correctement.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Celexia est née de cette idée : <strong className="text-gray-900">on prend en charge la partie acquisition,
                vous prenez en charge la partie chantier, et on partage le résultat</strong>. 10 % uniquement sur les
                devis signés. Sans engagement. Sans frais fixes.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={150}>
              <div className="card p-7 border-gray-200 h-full group hover:border-violet-200">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
                  <span className="text-lg font-bold text-violet-600 group-hover:text-white transition-colors">T</span>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Thomas</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Co-fondateur. Spécialiste de l'acquisition client locale. Sa devise : "Un artisan qui signe est notre meilleure publicité."
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card p-7 border-gray-200 h-full group hover:border-violet-200">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
                  <span className="text-lg font-bold text-violet-600 group-hover:text-white transition-colors">A</span>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Antoine</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Co-fondateur. Expert en automatisation et systèmes de qualification. Son credo : "Si on filtre bien en amont,
                  tout devient plus simple en aval."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MÉTHODE — TIMELINE */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/60">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="tag mb-4 inline-block">Notre méthode</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                Quatre étapes, zéro surprise
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Un process clair, pensé pour des artisans qui n'ont pas de temps à perdre en réunions.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-200 via-violet-400 to-violet-200 hidden md:block" aria-hidden="true" />
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 100}>
                  <div className="relative flex gap-5 md:gap-8">
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-violet-200 flex items-center justify-center shadow-soft">
                        <span className="font-display text-lg md:text-2xl font-bold gradient-text">{step.num}</span>
                      </div>
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="tag mb-4 inline-block">Engagements</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Nos principes de travail
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card p-7 group border-gray-200 hover:border-violet-200 hover:shadow-glow h-full">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-5 group-hover:bg-violet-600 transition-colors duration-300">
                    <span className="text-violet-600 font-bold text-xs group-hover:text-white transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI — DARK SECTION */}
      <section className="section-dark py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div className="dots-bg-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" aria-hidden="true" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 mb-4">
                Pour qui ?
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Notre apport d'affaires est fait pour vous si...
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-dark p-8 md:p-10" style={{ borderColor: 'rgba(124,58,237,0.2)' }}>
              <div className="space-y-5">
                {audience.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-violet-500/15 text-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <p className="text-white/80">
                      <strong className="text-white">{item.bold}</strong> {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-700" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[80px]" aria-hidden="true" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Discutons de votre projet
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
              30 minutes pour valider que notre modèle est adapté à votre activité et estimer ensemble
              le volume de chantiers que nous pouvons vous apporter.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Pas de discours commercial. Une conversation franche entre professionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center"
              >
                Recevoir des chantiers
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <Link
                to="/reserver"
                className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all w-full sm:w-auto"
              >
                Réserver un appel découverte
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-sm text-white/40 mb-1">Vous préférez nous écrire ?</p>
              <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:text-violet-200 transition-colors">
                agence.celexia@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="tag mb-4 inline-block">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Questions fréquentes
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={Math.min(index * 50, 200)}>
                <div className={`card overflow-hidden border-gray-200 transition-all duration-300 ${openFaq === index ? 'border-violet-200 shadow-violet' : ''}`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
