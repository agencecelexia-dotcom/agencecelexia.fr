import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';
import { REGISTER_URL } from '../lib/links';
import { METIERS } from '../context/NicheContext';

const Home = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  usePageMeta({
    title: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
    description: "Recevez des chantiers qualifiés sans avancer un centime. Celexia finance la publicité, qualifie les clients et vous transmet des projets prêts à chiffrer. Vous ne payez que 10 % sur les devis signés. Sans engagement.",
    canonical: 'https://agencecelexia.fr/'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://agencecelexia.fr/#website',
        url: 'https://agencecelexia.fr',
        name: 'Agence Celexia',
        description: "Apport d'affaires pour artisans du bâtiment. Commission 10 % sur devis signés uniquement.",
        inLanguage: 'fr-FR',
        publisher: { '@id': 'https://agencecelexia.fr/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agencecelexia.fr/#webpage',
        url: 'https://agencecelexia.fr',
        name: "Agence Celexia | Apport d'affaires pour artisans du bâtiment",
        isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
        about: { '@id': 'https://agencecelexia.fr/#organization' },
        description: "Celexia finance la publicité, qualifie les clients et transmet des chantiers prêts à chiffrer aux artisans partenaires. 10 % sur devis signés, sans avance, sans engagement.",
        inLanguage: 'fr-FR',
        datePublished: '2024-10-01',
        dateModified: '2026-06-26'
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://agencecelexia.fr/#organization',
        name: 'Agence Celexia',
        url: 'https://agencecelexia.fr',
        logo: { '@type': 'ImageObject', url: 'https://agencecelexia.fr/logo.png', width: 605, height: 98 },
        image: 'https://agencecelexia.fr/logo.png',
        description: "Apporteur d'affaires pour artisans du bâtiment. Celexia finance la publicité, qualifie les clients et transmet des chantiers qualifiés. Commission 10 % sur devis signés uniquement.",
        priceRange: '€€',
        serviceType: "Apport d'affaires pour artisans",
        telephone: '+33651725756',
        email: 'agence.celexia@gmail.com',
        address: { '@type': 'PostalAddress', addressCountry: 'FR', addressRegion: 'Île-de-France', addressLocality: 'Nogent-sur-Marne' },
        foundingDate: '2024',
        areaServed: { '@type': 'Country', name: 'France' },
        knowsLanguage: 'fr',
        sameAs: ['https://www.facebook.com/agencecelexia', 'https://www.linkedin.com/company/agence-celexia'],
        founder: [
          { '@type': 'Person', name: 'Thomas', jobTitle: 'Co-fondateur' },
          { '@type': 'Person', name: 'Antoine', jobTitle: 'Co-fondateur' }
        ],
        contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'agence.celexia@gmail.com', contactType: 'customer service', availableLanguage: 'French' }
      }
    ]
  });

  useEffect(() => {
    if (!calRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !calLoaded) {
          setCalLoaded(true);
          initCalInline();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(calRef.current);
    return () => observer.disconnect();
  }, [calLoaded]);

  const metiers = Object.entries(METIERS).map(([slug, data]) => ({ slug, ...data }));

  const steps = [
    {
      num: '01',
      title: 'On finance et on lance la publicité',
      desc: "Celexia investit 100 % du budget publicitaire. On positionne votre métier en tête des résultats Google dans votre zone. Vous n'avancez rien."
    },
    {
      num: '02',
      title: 'On reçoit et on qualifie les appels',
      desc: "Les particuliers appellent. Avant de vous transmettre un projet, on vérifie le besoin, la zone, le budget et le sérieux de la demande."
    },
    {
      num: '03',
      title: 'On vous transmet le chantier qualifié',
      desc: "Vous recevez uniquement des projets qui correspondent à votre métier, votre zone et votre capacité. Pas de démarcheurs, pas de curieux."
    },
    {
      num: '04',
      title: 'Vous chiffrez, vous signez, vous payez 10 %',
      desc: "Vous gérez la relation commerciale comme d'habitude. Vous ne nous reversez 10 % que sur les devis effectivement signés. Pas de signature = pas de facture."
    }
  ];

  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Aucune avance de budget',
      desc: "C'est nous qui finançons la publicité, pas vous. Vous n'avancez pas un centime. Le risque est 100 % de notre côté."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
      title: 'Paiement au résultat uniquement',
      desc: "10 % sur les devis signés. Pas de devis signé = pas de facture. On gagne quand vous gagnez."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      ),
      title: 'Sans engagement',
      desc: "Aucune durée minimum, aucun préavis, aucun frais de sortie. Vous testez, vous arrêtez quand vous voulez."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Des chantiers qualifiés, pas des leads froids',
      desc: "On qualifie chaque appel avant de vous le transmettre : besoin réel, zone, budget. Vous ne perdez pas de temps avec des curieux."
    }
  ];

  const noPay = [
    { label: 'Pas de frais fixe', icon: '✕' },
    { label: "Pas d'abonnement", icon: '✕' },
    { label: 'Pas de budget pub à avancer', icon: '✕' },
    { label: "Pas d'engagement", icon: '✕' },
  ];

  const faq = [
    {
      q: 'Combien ça coûte ?',
      a: "10 % du montant TTC de chaque devis signé grâce à un chantier transmis par Celexia. C'est tout. Aucun frais d'entrée, aucun abonnement, aucun budget pub à votre charge."
    },
    {
      q: "Et si je ne signe pas le chantier ?",
      a: "Vous ne payez rien. La facturation ne se déclenche que sur devis signé. C'est notre risque, pas le vôtre."
    },
    {
      q: 'Dois-je avancer un budget publicitaire ?',
      a: "Non. Celexia finance 100 % de la publicité. Vous n'avancez rien, jamais."
    },
    {
      q: "Y a-t-il un engagement de durée ?",
      a: "Aucun. Pas de durée minimum, pas de préavis, pas de frais de sortie. Vous arrêtez quand vous voulez."
    },
    {
      q: 'Les chantiers sont-ils qualifiés ?',
      a: "Oui. Chaque appel est qualifié avant de vous être transmis : on vérifie le besoin, la zone d'intervention, le budget et le sérieux de la demande."
    },
    {
      q: 'Comment se passe le paiement de la commission ?',
      a: "Quand un devis est signé par le client, vous nous reversez 10 % du montant. On définit ensemble un rythme de règlement, le plus souvent mensuel. Tout est tracé dans un outil de suivi — vous voyez exactement ce que vous devez et pourquoi."
    },
    {
      q: 'Quels métiers acceptez-vous ?',
      a: "Nous accompagnons 19 métiers d'artisans du bâtiment, de la plomberie aux piscines en passant par la couverture, la maçonnerie et le paysage. Si votre métier ne figure pas dans la liste, parlons-en — on vous dira franchement si on peut vous aider."
    },
    {
      q: "Je peux continuer à trouver des clients de mon côté ?",
      a: "Bien sûr. Vous restez 100 % maître de votre activité. Notre rôle est d'ajouter du flux qualifié, pas de vous remplacer."
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" aria-hidden="true" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Apport d'affaires pour artisans</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Recevez des chantiers qualifiés
            <span className="block text-violet-600">sans avancer un centime</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            On finance la pub, on qualifie les clients, on vous envoie des chantiers.
            Vous ne payez 10 % que sur ce que vous signez. Sans engagement, sans avance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              Recevoir des chantiers
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#comment-ca-marche" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
              Comment ça marche
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Sans engagement · Aucune avance · Réponse sous 24 h
          </p>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
            Trop d'agences vous font payer la publicité <span className="text-violet-600">sans aucun résultat garanti</span>.
            Vous avancez le budget, vous prenez le risque, et quand ça ne marche pas,
            c'est votre argent qui est parti.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Chez Celexia, c'est l'inverse : <strong className="text-gray-900">c'est nous qui finançons, c'est nous qui prenons le risque.</strong> Vous ne payez que lorsque vous avez déjà gagné l'affaire.
          </p>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Quatre étapes, zéro paperasse
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Vous faites votre métier, on s'occupe de vous trouver des chantiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card p-7 md:p-8 border-gray-200 group hover:border-violet-200">
                <span className="font-display text-5xl font-bold text-violet-200 block mb-4">{step.num}</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI CELEXIA — 4 PILIERS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi Celexia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              On gagne quand vous gagnez
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Notre rémunération dépend uniquement de vos devis signés. Nos intérêts sont les mêmes que les vôtres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card p-7 md:p-8 border-gray-200 group hover:border-violet-200">
                <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI — GRILLE MÉTIERS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pour qui</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {metiers.length} métiers du bâtiment accompagnés
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque dispositif est calibré pour votre métier : urgence, panier moyen, saisonnalité, zone d'intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {metiers.map((m) => (
              <Link
                key={m.slug}
                to={`/metiers/${m.slug}`}
                className="card p-5 border-gray-200 hover:border-violet-200 group flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: m.color }}
                  aria-hidden="true"
                />
                <p className="text-base font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                  {m.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE VOUS NE PAYEZ PAS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Transparence totale</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Ce que vous ne payez pas
            </h2>
          </div>

          <div className="card p-8 md:p-10 border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {noPay.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-red-50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-sm">
                    {item.icon}
                  </span>
                  <span className="text-base font-semibold text-gray-900">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span className="text-lg font-bold text-gray-900">
                Uniquement 10 % sur les devis signés
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES (placeholder) */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Ils nous font confiance</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Ce que disent nos partenaires
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-7 md:p-8 border-gray-200 border-dashed">
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-600 leading-relaxed italic mb-4">
                "Témoignage à venir — espace réservé pour un artisan partenaire."
              </p>
              <p className="text-sm font-semibold text-gray-900">Partenaire artisan</p>
              <p className="text-sm text-gray-500">Métier · Ville</p>
            </div>
            <div className="card p-7 md:p-8 border-gray-200 border-dashed">
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-600 leading-relaxed italic mb-4">
                "Témoignage à venir — espace réservé pour un artisan partenaire."
              </p>
              <p className="text-sm font-semibold text-gray-900">Partenaire artisan</p>
              <p className="text-sm text-gray-500">Métier · Ville</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Questions fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Tout ce que vous voulez savoir
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Si une question n'a pas sa réponse ici, on en parle directement.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group card p-5 md:p-6 border-gray-200 [&[open]]:border-violet-200"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {item.q}
                  </h3>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL + CAL.COM */}
      <section ref={calRef} id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Prêt à recevoir des chantiers ?
            </h2>
            <p className="text-base md:text-lg text-violet-100 max-w-2xl mx-auto mb-8">
              Inscrivez-vous pour rejoindre le réseau, ou réservez un appel pour en discuter.
              Sans engagement, réponse sous 24 h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-violet-600 font-semibold px-8 py-4 rounded-xl text-base hover:bg-violet-50 transition-colors w-full sm:w-auto"
              >
                Recevoir des chantiers
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <Link
                to="/reserver"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Réserver un appel découverte
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-violet-200 mb-6">Ou choisissez directement un créneau :</p>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            {!calLoaded && (
              <div className="flex items-center justify-center" style={{height:'600px'}}>
                <div className="text-center">
                  <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Chargement du calendrier...</p>
                </div>
              </div>
            )}
            <div
              id={CAL_INLINE_ID}
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          <div className="text-center mt-6">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-violet-100 hover:text-white underline underline-offset-2 transition-colors"
            >
              Le calendrier ne charge pas ? Ouvrir directement sur cal.com
            </a>
          </div>

          <div className="text-center mt-8 text-violet-100">
            <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:text-violet-100 transition-colors">
              agence.celexia@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
