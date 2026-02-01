import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { useContext } from 'react';
import { NicheContext } from '../context/NicheContext';

const LeadsMenuisier = () => {
  const { prixParAppel } = useContext(NicheContext);

  // Métadonnées SEO pour la page Menuisier
  usePageMeta({
    title: 'Génération de Leads Menuisier | Clients Qualifiés pour Menuisiers',
    description: 'Obtenez des appels de clients qualifiés pour votre entreprise de menuiserie. Système de paiement par lead. Dès les premiers jours de publication des campagnes publicitaires. Agence Celexia.',
    canonical: 'https://agencecelexia.fr/leads-menuisier'
  });

  // Schéma JSON-LD pour le service spécifique menuiserie
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Génération de Leads pour Menuisiers',
    'description': 'Service d\'acquisition de clients qualifiés spécialisé pour les menuisiers. Paiement au lead qualifié uniquement.',
    'provider': {
      '@type': 'Organization',
      'name': 'Agence Celexia'
    },
    'serviceType': 'Lead Generation',
    'areaServed': {
      '@type': 'Country',
      'name': 'France'
    }
  });

  const benefits = [
    {
      title: 'Fenêtres et portes sur mesure',
      desc: 'Projets haute valeur (8 000€ - 25 000€) avec forte marge et récurrence',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
    },
    {
      title: 'Aménagement intérieur',
      desc: 'Placards, dressings, bibliothèques sur mesure - clientèle premium exigeante',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: 'Escaliers bois sur mesure',
      desc: 'Créations d\'exception avec expertise technique - projets 5 000€ à 15 000€',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: 'Parquet et sols bois',
      desc: 'Pose traditionnelle ou moderne, rénovation - marché stable et rentable',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  const testimonial = {
    name: 'Menuisier de Bordeaux',
    company: '',
    text: 'En 5 mois, j\'ai multiplié mes projets sur mesure par 3. Je reçois principalement des demandes de fenêtres haut de gamme et d\'aménagements intérieurs. La qualité des leads est excellente.',
    rating: 5,
    results: 'x3 projets en 5 mois'
  };

  const faqs = [
    {
      question: 'Quel type de clients vais-je obtenir ?',
      answer: 'Majoritairement des particuliers propriétaires avec des projets de rénovation (fenêtres, portes), d\'aménagement sur mesure (dressing, bibliothèque) ou de décoration (escaliers, parquet). Clientèle avec budget moyen à élevé.'
    },
    {
      question: 'Combien de leads par mois puis-je espérer ?',
      answer: 'Cela dépend de votre zone et de votre budget. En moyenne, nos menuisiers reçoivent entre 10 et 35 appels qualifiés par mois. Les zones pavillonnaires et résidentielles fonctionnent particulièrement bien.'
    },
    {
      question: 'Est-ce adapté pour un menuisier spécialisé ?',
      answer: 'Absolument. Que vous soyez spécialisé en fenêtres PVC/alu, en ébénisterie, en agencement ou en pose de parquet, nous adaptons les campagnes à votre spécialité pour attirer exactement vos clients idéaux.'
    },
    {
      question: 'Quelle est la valeur moyenne des projets ?',
      answer: 'Cela varie énormément selon le type de prestation. En moyenne, nos menuisiers constatent un panier moyen entre 3 500€ et 12 000€ par projet, avec des pics à 25 000€+ pour des aménagements complexes.'
    }
  ];

  // Schéma FAQ
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  });

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Menuisiers</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Génération de Leads Menuisier
            <span className="block text-emerald-600">Clients Qualifiés Garantis</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Remplissez votre agenda avec des projets fenêtres sur mesure, aménagements intérieurs et escaliers bois.
            Payez uniquement pour les appels de clients réels prêts à engager un menuisier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-primary arrow-animate text-base px-8 py-4">
              Obtenir mes premiers leads
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Dès les premiers jours de publication des campagnes publicitaires
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              ~{prixParAppel}€ par appel qualifié
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Sans engagement
            </span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Services ciblés</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Les types de chantiers que vous allez recevoir
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="card p-7 border-gray-200 group hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0
                                 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Témoignage</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Un menuisier qui a réussi avec notre système
            </h2>
          </div>

          <div className="card-violet p-8 md:p-10">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-lg leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white font-bold mb-1">{testimonial.name}</p>
              <p className="text-violet-200 text-sm mb-3">{testimonial.company}</p>
              <div className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-semibold">
                {testimonial.results}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Questions fréquentes des menuisiers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-base">{faq.question}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Prêt à remplir votre agenda de chantiers ?
          </h2>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Réservez 30 minutes pour analyser votre zone et estimer votre volume de leads mensuel
          </p>
          <Link to="/contact" className="btn-primary arrow-animate text-base px-8 py-4 inline-flex items-center">
            Réserver mon appel stratégique
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadsMenuisier;
