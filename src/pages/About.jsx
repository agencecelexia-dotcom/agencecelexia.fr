import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { question: "Comment fonctionne votre systeme publicitaire ?", answer: "Nous utilisons une strategie de referencement local optimisee qui place votre entreprise en tete des resultats Google lorsque des clients potentiels recherchent vos services dans votre zone geographique. Vous payez uniquement pour les appels qualifies recus." },
    { question: "Quel est le cout reel du service ?", answer: "Le premier mois de gestion est inclus dans notre offre de lancement. Ensuite, nos tarifs dependent de votre volume d'appels souhaite et de votre zone geographique. Nous etablissons un devis personnalise lors de notre premier echange." },
    { question: "Sous combien de temps puis-je esperer les premiers resultats ?", answer: "Une fois votre compte configure et valide par Google, les premiers appels arrivent generalement sous 10 a 21 jours. La montee en puissance se fait progressivement sur les 2-3 premiers mois." },
    { question: "Quels types d'artisans accompagnez-vous ?", answer: "Nous travaillons avec tous les corps de metiers du batiment et des services a domicile : plombiers, electriciens, menuisiers, couvreurs, serruriers, paysagistes, peintres, macons, installateurs de piscines, et bien d'autres." },
    { question: "Dois-je gerer quelque chose techniquement ?", answer: "Non. Nous prenons en charge l'integralite de la partie technique : creation de compte, optimisation, gestion quotidienne des campagnes, et reporting. Vous vous concentrez sur votre metier, nous gerons votre visibilite digitale." },
    { question: "Y a-t-il un engagement de duree ?", answer: "Nous privilegions la transparence et la confiance. Nos contrats sont flexibles et nous travaillons sur la base de resultats concrets. Discutons de vos objectifs pour definir ensemble le cadre de collaboration qui vous convient." },
    { question: "Que se passe-t-il si je ne suis pas satisfait ?", answer: "Notre approche repose sur la satisfaction client. Si apres le premier mois les resultats ne correspondent pas a vos attentes, nous analysons ensemble les axes d'amelioration ou nous arretons la collaboration en toute transparence." },
    { question: "Travaillez-vous avec des artisans partout en France ?", answer: "Oui, notre systeme fonctionne dans toutes les regions francaises. La performance depend de votre secteur d'activite et de la concurrence locale, que nous analysons lors de notre audit initial." }
  ];

  const services = [
    { num: '01', title: 'Optimisation de votre presence locale', desc: "Configuration professionnelle de votre fiche Google Business Profile : photos de qualite, description optimisee, categories pertinentes, horaires a jour.", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )},
    { num: '02', title: "Strategie d'avis clients", desc: "Mise en place d'un systeme automatise de collecte d'avis positifs. Nous transformons vos clients satisfaits en ambassadeurs.", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    )},
    { num: '03', title: 'Campagnes publicitaires ciblees', desc: "Vous apparaissez en premiere position lorsque des clients potentiels recherchent vos services. Vous ne payez que pour les contacts qualifies.", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )},
    { num: '04', title: 'Gestion et optimisation continue', desc: "Suivi quotidien de vos performances, ajustements strategiques, reporting transparent et recommandations mensuelles.", icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )}
  ];

  const values = [
    { title: 'Transparence totale', desc: "Acces complet a vos statistiques en temps reel. Vous savez exactement combien vous depensez et quel est votre ROI." },
    { title: 'Engagement resultats', desc: "Notre remuneration est liee a votre satisfaction. Pas de resultats, on ajuste jusqu'a y arriver." },
    { title: 'Expertise metier', desc: "Nous connaissons les specificites de l'artisanat : saisonnalite, zones d'intervention, typologie de clients." },
    { title: 'Communication directe', desc: "Un interlocuteur dedie qui connait votre dossier. Pas de plateforme impersonnelle." },
    { title: 'Formation incluse', desc: "Nous vous expliquons chaque action et chaque metrique. Vous montez en competence avec nous." },
    { title: 'Reactivite maximum', desc: "Ajustements en temps reel sur vos campagnes. Reponse sous 24h a vos sollicitations." }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">A propos</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Nous aidons les artisans a developper leur activite
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Acquisition de clients qualifies, visibilite locale optimisee, croissance maitrisee.
          </p>
        </div>
      </section>

      {/* CONSTAT */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Le constat</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Ce qui nous a pousse a agir
            </h2>
          </div>

          <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
            <p>
              Depuis plusieurs annees, nous observons un paradoxe dans le secteur de l'artisanat :
              <strong className="text-gray-900"> des professionnels hautement qualifies qui peinent a remplir leur carnet de commandes</strong>,
              non par manque de competences, mais par manque de visibilite.
            </p>
            <p>
              Les methodes traditionnelles (bouche-a-oreille, annuaires, flyers) ne suffisent plus quand
              <span className="text-violet-600 font-semibold"> 87% des recherches de services commencent sur Google</span>.
            </p>
          </div>

          <div className="card p-6 md:p-8 mt-10 border-gray-200">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-5">Les defis quotidiens des artisans</h3>
            <div className="space-y-3">
              {[
                "Fluctuations d'activite imprevisibles",
                "Dependance aux prescripteurs ou a la saisonnalite",
                "Difficulte a mesurer le ROI des actions marketing",
                "Manque de temps pour le digital"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-3 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg font-semibold text-center text-violet-600 mt-10">
            Nous avons cree Agence Celexia pour resoudre ces problemes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Notre methode</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Notre methode d'acquisition client
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Un systeme complet qui transforme votre visibilite en flux regulier de demandes qualifiees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <div key={service.num} className="card p-7 group border-gray-200 hover:border-violet-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0
                                 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-300">{service.num}</span>
                    <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed ml-14">{service.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-base font-medium text-center mt-12 text-gray-500">
            <span className="text-gray-900 font-semibold">Resultat :</span> vous vous concentrez sur votre metier pendant que nous generons vos opportunites.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
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
                <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center mb-4
                               group-hover:bg-violet-600 transition-colors duration-300">
                  <span className="text-violet-600 font-bold text-xs group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Benefices</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Ce que vous gagnez concretement
            </h2>
          </div>

          <div className="card p-7 md:p-9 border-gray-200">
            <div className="space-y-5">
              {[
                { title: 'Flux regulier de demandes qualifiees', desc: "Votre telephone sonne regulierement avec des prospects interesses." },
                { title: 'Previsibilite financiere', desc: "Projetez votre CA sur 2-3 mois grace a un pipeline constant." },
                { title: 'Pouvoir de negociation', desc: "Selectionnez les projets les plus rentables." },
                { title: "Serenite d'entrepreneur", desc: "Votre systeme d'acquisition fonctionne en automatique." },
                { title: 'Developpement maitrise', desc: "Embauche, materiel, expansion : la croissance devient un choix." }
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center mr-3.5 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Pour qui ?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Ce service est adapte si vous etes...
            </h2>
          </div>

          <div className="card-violet p-7 md:p-9">
            <div className="space-y-4">
              {[
                { bold: 'Artisan etabli', rest: "qui souhaite stabiliser et augmenter son volume d'activite" },
                { bold: "Chef d'entreprise du batiment", rest: 'qui veut reduire sa dependance aux prescripteurs' },
                { bold: 'Professionnel des services a domicile', rest: "cherchant a remplir son agenda 2-3 mois a l'avance" },
                { bold: 'Entrepreneur ambitieux', rest: "qui veut developper son activite de maniere structuree" },
                { bold: 'Artisan pragmatique', rest: "qui prefere deleguer le digital a des experts" }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2.5 mr-3.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong className="text-gray-900">{item.bold}</strong> {item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-violet-200 mb-4 max-w-xl mx-auto leading-relaxed">
            Echangeons 30 minutes pour comprendre votre situation et determiner si notre solution correspond a vos besoins.
          </p>
          <p className="text-violet-300 text-sm mb-8">
            Pas de discours commercial. Une conversation franche entre professionnels.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold text-base
                       shadow-lg hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]
                       transition-all duration-300 arrow-animate"
          >
            Reserver un appel strategique
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <div className="mt-10 pt-6 border-t border-white/20">
            <p className="text-sm text-violet-300 mb-1">Vous preferez nous ecrire ?</p>
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
              Questions frequentes
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center
                             hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[15px] font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className={`text-violet-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
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
