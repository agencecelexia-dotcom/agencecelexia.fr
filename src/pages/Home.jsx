import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';
import { METIERS } from '../context/NicheContext';

const Home = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  usePageMeta({
    title: "Agence Celexia | Apport d'affaires pour artisans",
    description: "Agence d'apport d'affaires pour artisans. Nous vous amenons les appels de clients. Vous payez 10 % seulement sur les devis signés. Sans frais fixes, sans engagement.",
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
        description: "Agence d'apport d'affaires pour artisans. Commission 10 % sur devis signés.",
        inLanguage: 'fr-FR',
        publisher: { '@id': 'https://agencecelexia.fr/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agencecelexia.fr/#webpage',
        url: 'https://agencecelexia.fr',
        name: "Agence Celexia | Apport d'affaires pour artisans",
        isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
        about: { '@id': 'https://agencecelexia.fr/#organization' },
        description: "Agence d'apport d'affaires pour artisans. Appels de clients qualifiés. 10 % sur devis signés seulement.",
        inLanguage: 'fr-FR',
        datePublished: '2024-10-01',
        dateModified: '2026-05-11'
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://agencecelexia.fr/#organization',
        name: 'Agence Celexia',
        url: 'https://agencecelexia.fr',
        logo: { '@type': 'ImageObject', url: 'https://agencecelexia.fr/logo.png', width: 605, height: 98 },
        image: 'https://agencecelexia.fr/logo.png',
        description: "Agence d'apport d'affaires pour artisans : nous amenons les appels de clients, vous payez 10 % seulement sur les devis signés.",
        priceRange: '€€',
        serviceType: "Apport d'affaires pour artisans",
        telephone: '+33651725756',
        email: 'agence.celexia@gmail.com',
        address: { '@type': 'PostalAddress', addressCountry: 'FR', addressRegion: 'France métropolitaine', addressLocality: 'France' },
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

  // Lazy load Cal.com via IntersectionObserver
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
      title: 'On vous amène les appels',
      desc: "Un particulier cherche un artisan près de chez lui sur Google. Votre entreprise apparaît en premier. Il appelle directement votre numéro. C'est notre travail."
    },
    {
      num: '02',
      title: 'Vous chiffrez et signez le devis',
      desc: "Vous traitez le client comme d'habitude. Vous visitez le chantier. Vous chiffrez. Vous envoyez le devis. Nous n'intervenons jamais dans votre relation commerciale."
    },
    {
      num: '03',
      title: 'Vous nous reversez 10 % sur les devis signés',
      desc: "Quand un devis est signé, vous nous reversez 10 % du montant. Si le client ne signe pas, vous ne nous devez rien. Pas de frais fixes, pas d'abonnement, pas d'engagement."
    }
  ];

  const pillars = [
    {
      title: 'Vous payez seulement quand ça marche',
      desc: "Pas de frais fixes. Pas d'abonnement. Tant que vous ne signez pas de devis, vous ne payez rien. On gagne quand vous gagnez."
    },
    {
      title: 'Vous arrêtez quand vous voulez',
      desc: "Aucun engagement de durée. Vous testez sans risque. Si vous ne signez pas assez de devis, vous arrêtez. Sans frais, sans préavis."
    },
    {
      title: 'Vous savez exactement ce que vous nous devez',
      desc: "Tous les appels, tous les devis, tous les paiements : c'est tracé dans votre outil de suivi personnel. Aucun calcul à faire de votre côté."
    },
    {
      title: 'Nous ne travaillons qu\'avec des artisans',
      desc: "Nous connaissons votre métier, vos saisons, vos clients. Le dispositif est calibré pour votre activité, pas pour un avocat ou une boulangerie."
    }
  ];

  const stats = [
    { value: '10 %', label: 'de commission, uniquement sur les devis signés' },
    { value: '0 €', label: "de frais fixes, pas d'abonnement mensuel" },
    { value: '0', label: 'engagement : vous arrêtez quand vous voulez' },
    { value: '19', label: "métiers d'artisans accompagnés" }
  ];

  const crmPoints = [
    'Tous les appels que nous vous transmettons, datés et tracés',
    'Vos devis envoyés, leur montant et leur statut (en attente, signé, refusé)',
    "Le chiffre d'affaires que vous signez grâce à nous",
    'Le calcul automatique des 10 % de commission',
    'Une vue claire, mois après mois, de ce que ce partenariat vous rapporte'
  ];

  const complementaires = [
    {
      title: 'Site internet',
      description: 'Un site rapide pensé pour transformer un visiteur en demande de devis.',
      link: '/services/site-web',
      icon: (p) => (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      )
    },
    {
      title: 'Référencement local',
      description: 'Apparaître dans les premiers résultats Google de votre ville.',
      link: '/services/seo',
      icon: (p) => (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      )
    },
    {
      title: 'Avis clients',
      description: 'Récolter automatiquement des avis 5 étoiles après chaque chantier.',
      link: '/services/avis-clients',
      icon: (p) => (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      )
    },
    {
      title: 'Emails de relance',
      description: "Relancer vos devis et vos anciens clients sans y passer du temps.",
      link: '/services/emailing',
      icon: (p) => (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      )
    },
    {
      title: 'Automatisation',
      description: 'Vos rappels, vos factures et votre suivi gérés automatiquement.',
      link: '/services/automatisation',
      icon: (p) => (
        <svg {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      )
    }
  ];

  const faq = [
    {
      q: 'Comment vous trouvez les clients pour moi ?',
      a: "Quand un particulier cherche un artisan près de chez lui sur Google (par exemple « plombier Nogent-sur-Marne » ou « couvreur près de chez moi »), notre dispositif fait apparaître votre entreprise en haut des résultats. Le particulier appelle directement votre numéro."
    },
    {
      q: 'Combien je vais vous payer ?',
      a: "10 % du montant TTC de chaque devis que vous signez grâce à un appel apporté par Celexia. Si vous ne signez pas le devis, vous ne payez rien. Aucun frais d'entrée, aucun abonnement mensuel."
    },
    {
      q: "Quand est-ce que je vous règle ?",
      a: "Quand le devis est signé par le client. On définit ensemble un rythme de règlement (mensuel le plus souvent). Tout est tracé dans votre outil de suivi personnel — vous voyez exactement ce que vous nous devez et pourquoi."
    },
    {
      q: "Et si l'appel ne devient pas un devis signé ?",
      a: "Vous ne payez rien. C'est notre risque, pas le vôtre. Notre travail est justement de filtrer les demandes en amont pour ne vous transmettre que des particuliers sérieux."
    },
    {
      q: 'Je suis engagé combien de temps ?',
      a: "Zéro. Aucune durée minimum, aucun préavis, aucun frais de sortie. Vous arrêtez quand vous voulez. Notre seule garantie de rester, c'est de continuer à vous apporter des chantiers rentables."
    },
    {
      q: "Vous travaillez avec mon métier ?",
      a: "Nous accompagnons 19 métiers d'artisans, de la plomberie à l'arboriculture. Si votre métier ne figure pas dans la liste, parlons-en lors de l'appel découverte — on vous dira franchement si on peut vous aider."
    },
    {
      q: 'Vous travaillez sur toute la France ?',
      a: "Oui, sur toute la France métropolitaine. On adapte la zone d'intervention à votre capacité de déplacement et à votre planning."
    },
    {
      q: "Je peux continuer à trouver des clients de mon côté ?",
      a: "Bien sûr. Vous restez 100 % maître de votre activité. Notre rôle est juste d'ajouter du flux qualifié, pas de vous remplacer."
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
            On vous amène les appels.
            <span className="block text-violet-600">Vous payez 10 % uniquement sur les devis signés.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Pour les artisans. Sans engagement, sans frais fixes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center">
              Réserver un appel découverte
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <a href="#comment-ca-marche" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
              Voir comment ça marche
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Sans engagement · 0 € de frais fixes
          </p>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Trois étapes, zéro paperasse
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Pas de réunions interminables, pas de tableaux Excel à remplir. Vous faites votre métier, on s'occupe de la suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card p-7 md:p-8 border-gray-200 group hover:border-violet-200">
                <span className="font-display text-5xl font-bold text-violet-200 block mb-4">{step.num}</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Exemple concret */}
          <div className="mt-12 max-w-3xl mx-auto card p-6 md:p-8 border-violet-200 bg-violet-50/40">
            <p className="text-sm font-semibold text-violet-700 uppercase tracking-wider mb-3">Un exemple concret</p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Marc, plombier à Nogent-sur-Marne, signe avec Celexia. Le lendemain, un particulier tape
              « plombier Nogent-sur-Marne » sur Google. Il tombe sur la fiche de Marc en premier. Il appelle.
              Marc visite, chiffre un remplacement de chauffe-eau à{' '}
              <span className="whitespace-nowrap">1&nbsp;800&nbsp;€ TTC</span>. Le particulier signe.
              <strong className="block mt-3 text-gray-900">
                Marc reverse <span className="whitespace-nowrap">180&nbsp;€</span> à Celexia. Il garde{' '}
                <span className="whitespace-nowrap">1&nbsp;620&nbsp;€</span>. Et c'est tout.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI CELEXIA */}
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
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">CRM</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Vous voyez exactement ce que ce partenariat vous rapporte
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Nous mettons en place un CRM personnalisé pour votre activité. Vous y voyez tout, en direct.
            </p>
          </div>

          <div className="card p-6 md:p-10 border-gray-200 bg-white">
            <ul className="space-y-4">
              {crmPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-base text-gray-800 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-base md:text-lg text-gray-900 font-semibold">
                Vous savez ce que vous gagnez. Vous savez ce que vous nous devez. Aucun calcul de votre côté, aucune discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTIERS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos métiers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {metiers.length} métiers d'artisans accompagnés
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

      {/* CHIFFRES / ENGAGEMENTS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Nos engagements</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Quatre chiffres, zéro astérisque
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Notre modèle tient en quatre chiffres. Aucune mention en bas de contrat, aucune mauvaise surprise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card p-6 md:p-8 text-center border-gray-200">
                <p className="font-display text-4xl md:text-5xl font-bold text-violet-600 mb-2">{s.value}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES COMPLÉMENTAIRES */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Services complémentaires</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Au-delà de l'apport d'affaires
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Notre cœur de métier reste l'apport d'affaires. Si vous voulez aussi un site internet, du référencement,
              de la gestion d'avis ou des emails de relance, on peut aussi vous accompagner sur ces volets, à la carte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {complementaires.map((c) => {
              const CIcon = c.icon;
              return (
                <Link
                  key={c.link}
                  to={c.link}
                  className="card p-6 border-gray-200 group hover:border-violet-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <CIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.description}</p>
                  <span className="inline-flex items-center text-violet-600 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                    En savoir plus
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Questions fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Tout ce que vous voulez savoir avant l'appel
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

      {/* CAL.COM BOOKING */}
      <section ref={calRef} id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-violet-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Réservez votre appel découverte
            </h2>
            <p className="text-base md:text-lg text-violet-100 max-w-2xl mx-auto">
              30 minutes au téléphone pour qu'on comprenne votre activité et qu'on regarde ensemble combien
              de chantiers on peut vous apporter.
            </p>
          </div>

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

          {/* Fallback : lien externe si le widget ne charge pas */}
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
