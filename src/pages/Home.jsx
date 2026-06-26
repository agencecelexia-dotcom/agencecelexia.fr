import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';
import { REGISTER_URL } from '../lib/links';
import { METIERS } from '../context/NicheContext';
import Reveal from '../components/Reveal';

const STATS = [
  { value: '0 €', label: "D'avance de frais" },
  { value: '10 %', label: 'Commission sur signé' },
  { value: '100 %', label: 'De la pub financée' },
  { value: '19', label: 'Métiers accompagnés' },
];

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
      desc: "Celexia investit 100 % du budget publicitaire. On positionne votre métier en tête des résultats Google dans votre zone. Vous n'avancez rien.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'On reçoit et on qualifie les appels',
      desc: "Les particuliers appellent. Avant de vous transmettre un projet, on vérifie le besoin, la zone, le budget et le sérieux de la demande.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'On vous transmet le chantier qualifié',
      desc: "Vous recevez uniquement des projets qui correspondent à votre métier, votre zone et votre capacité. Pas de démarcheurs, pas de curieux.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Vous chiffrez, vous signez, vous payez 10 %',
      desc: "Vous gérez la relation commerciale comme d'habitude. Vous ne nous reversez 10 % que sur les devis effectivement signés. Pas de signature = pas de facture.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    }
  ];

  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Aucune avance de budget',
      desc: "C'est nous qui finançons la publicité, pas vous. Vous n'avancez pas un centime. Le risque est 100 % de notre côté.",
      color: 'violet'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
      title: 'Paiement au résultat uniquement',
      desc: "10 % sur les devis signés. Pas de devis signé = pas de facture. On gagne quand vous gagnez.",
      color: 'emerald'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      ),
      title: 'Zéro engagement',
      desc: "Aucune durée minimum, aucun préavis, aucun frais de sortie. Vous testez, vous arrêtez quand vous voulez.",
      color: 'amber'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: 'Chantiers qualifiés, pas des leads froids',
      desc: "On qualifie chaque appel avant de vous le transmettre : besoin réel, zone, budget. Vous ne perdez pas de temps.",
      color: 'blue'
    }
  ];

  const pillarColors = {
    violet: { bg: 'bg-violet-100', text: 'text-violet-600', hoverBg: 'group-hover:bg-violet-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
  };

  const noPay = [
    'Pas de frais fixe',
    "Pas d'abonnement",
    'Pas de budget pub à avancer',
    "Pas d'engagement minimum",
  ];

  const testimonials = [
    {
      text: "Depuis que je travaille avec Celexia, je n'ai plus besoin de courir après les clients. Les chantiers arrivent qualifiés, je chiffre, je signe. Simple et efficace.",
      name: 'Marc D.',
      role: 'Plombier',
      location: 'Île-de-France',
    },
    {
      text: "J'étais sceptique — pas d'avance, pas d'engagement, ça semblait trop beau. Après 3 mois, j'ai ajouté 45 000 euros de devis signés à mon activité.",
      name: 'Sophie R.',
      role: 'Couvreur',
      location: 'Lyon',
    },
    {
      text: "Le fait de ne payer que sur les devis signés change tout. Avant, je dépensais en pub sans garantie. Avec Celexia, le risque est de leur côté.",
      name: 'Julien T.',
      role: 'Paysagiste',
      location: 'Bordeaux',
    },
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

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 px-4 md:px-6 overflow-hidden">
        <div className="dots-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4" aria-hidden="true" />

        {/* Floating badges - desktop only */}
        <div className="absolute top-40 left-6 xl:left-16 glass px-4 py-2.5 rounded-xl animate-float hidden lg:flex items-center gap-2.5 shadow-soft" aria-hidden="true">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700">Places disponibles</span>
        </div>
        <div className="absolute bottom-32 right-6 xl:right-16 glass px-4 py-2.5 rounded-xl animate-float-reverse hidden lg:flex items-center gap-2.5 shadow-soft" aria-hidden="true">
          <span className="text-sm font-medium text-gray-700">0 € d'avance</span>
          <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <div className="tag-glass mb-8 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            Apport d'affaires pour artisans du bâtiment
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Recevez des chantiers qualifiés
            <span className="gradient-text block">sans avancer un centime</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            On finance la pub, on qualifie les clients, on vous envoie des chantiers.
            Vous ne payez <strong className="text-gray-900">10 % que sur ce que vous signez</strong>. Sans engagement, sans avance.
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
            <a href="#comment-ca-marche" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto justify-center">
              Découvrir le modèle
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400 font-medium">
            Sans engagement · Aucune avance · Réponse sous 24 h
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 md:px-6 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LE PROBLÈME — DARK SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-dark py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div className="dots-bg-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[80px]" aria-hidden="true" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 mb-4">
                Le constat
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Les agences classiques vous font{' '}
                <span className="gradient-text-light">payer sans garantie</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal delay={100}>
              <div className="card-dark p-8 md:p-10 h-full">
                <p className="text-red-400 font-semibold text-xs uppercase tracking-wider mb-6">Chez les autres</p>
                <ul className="space-y-5">
                  {[
                    'Vous avancez le budget publicitaire',
                    'Vous payez même sans résultat',
                    'Engagement 6 ou 12 mois minimum',
                    'Des leads non qualifiés, des curieux',
                    'Aucune visibilité sur le retour',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">&#x2715;</span>
                      <span className="text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-dark p-8 md:p-10 h-full" style={{ borderColor: 'rgba(124,58,237,0.25)' }}>
                <p className="text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-6">Chez Celexia</p>
                <ul className="space-y-5">
                  {[
                    'On finance 100 % de la publicité',
                    'Vous ne payez que sur devis signé',
                    'Aucun engagement, aucune durée minimum',
                    'Chaque chantier est qualifié avant transmission',
                    'Suivi transparent, chiffres à l\'appui',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="text-white/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMMENT ÇA MARCHE — TIMELINE
          ═══════════════════════════════════════════ */}
      <section id="comment-ca-marche" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="tag mb-4 inline-block">Comment ça marche</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Quatre étapes, zéro paperasse
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Vous faites votre métier, on s'occupe de vous trouver des chantiers.
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

      {/* ═══════════════════════════════════════════
          POURQUOI CELEXIA — 4 PILIERS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/60">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="tag mb-4 inline-block">Nos engagements</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                On gagne quand vous gagnez
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Notre rémunération dépend uniquement de vos devis signés. Nos intérêts sont alignés sur les vôtres.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {pillars.map((p, i) => {
              const c = pillarColors[p.color];
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="card p-7 md:p-9 border-gray-200 group hover:border-violet-200 hover:shadow-glow h-full">
                    <div className={`icon-box ${c.bg} ${c.text} ${c.hoverBg} group-hover:text-white mb-6`}>
                      {p.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          POUR QUI — GRILLE MÉTIERS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="tag mb-4 inline-block">Pour qui</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                {metiers.length} métiers du bâtiment accompagnés
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Chaque dispositif est calibré pour votre métier : urgence, panier moyen, saisonnalité, zone d'intervention.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {metiers.map((m, i) => (
              <Reveal key={m.slug} delay={Math.min(i * 30, 300)}>
                <Link
                  to={`/metiers/${m.slug}`}
                  className="group flex items-center gap-3 p-4 md:p-5 rounded-xl border border-gray-100 bg-white hover:border-violet-200 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: m.color }}
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">
                    {m.label}
                  </span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-violet-400 ml-auto flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CE QUE VOUS NE PAYEZ PAS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/60">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="tag mb-4 inline-block">Transparence totale</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Ce que vous ne payez pas
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
                Notre modèle est simple. Voici ce qu'il n'inclut pas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="gradient-border">
              <div className="bg-white rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {noPay.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-red-50/80 border border-red-100/50">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">&#x2715;</span>
                      <span className="text-base font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-5 md:p-6 rounded-xl bg-emerald-50 border border-emerald-100">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-gray-900">Uniquement 10 % sur les devis signés</p>
                    <p className="text-sm text-gray-500 mt-0.5">Pas de devis signé = pas de facture</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TÉMOIGNAGES
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="tag mb-4 inline-block">Témoignages</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Ce que disent nos partenaires
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="card p-7 md:p-8 border-gray-200 h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-5 text-amber-400">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed flex-1 mb-6">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-violet-600">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="tag mb-4 inline-block">Questions fréquentes</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Tout ce que vous voulez savoir
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Si une question n'a pas sa réponse ici, on en parle directement.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <Reveal key={i} delay={Math.min(i * 50, 200)}>
                <details className="group card p-5 md:p-6 border-gray-200 [&[open]]:border-violet-200 [&[open]]:shadow-violet">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                      {item.q}
                    </h3>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL + CAL.COM
          ═══════════════════════════════════════════ */}
      <section ref={calRef} id="contact" className="section-dark py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div className="dots-bg-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Prêt à recevoir{' '}
                <span className="gradient-text-light">des chantiers ?</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Inscrivez-vous pour rejoindre le réseau, ou réservez un appel découverte pour en discuter.
                Sans engagement, réponse sous 24 h.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
                  className="inline-flex items-center justify-center border-2 border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/5 hover:border-white/25 transition-all w-full sm:w-auto"
                >
                  Réserver un appel découverte
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-center text-sm text-white/40 mb-6 font-medium">Ou choisissez directement un créneau</p>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
              {!calLoaded && (
                <div className="flex items-center justify-center" style={{height:'600px'}}>
                  <div className="text-center">
                    <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-500 text-sm">Chargement du calendrier...</p>
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
                className="text-sm text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors"
              >
                Le calendrier ne charge pas ? Ouvrir directement sur cal.com
              </a>
            </div>

            <div className="text-center mt-8 text-white/50">
              <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
              <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:text-violet-300 transition-colors">
                agence.celexia@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
