import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID } from '../lib/cal';
import { METIERS } from '../context/NicheContext';

const Home = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  usePageMeta({
    title: 'Agence Celexia | Apport d\'affaires pour artisans',
    description: 'Agence d\'apport d\'affaires pour artisans. Nous générons des appels clients qualifiés. Vous payez 10% uniquement sur les devis signés. Sans engagement, sans frais fixes.',
    canonical: 'https://agencecelexia.fr/'
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://agencecelexia.fr/#website',
        'url': 'https://agencecelexia.fr',
        'name': 'Agence Celexia',
        'description': 'Agence d\'apport d\'affaires pour artisans. Commission 10% sur devis signés.',
        'inLanguage': 'fr-FR',
        'publisher': { '@id': 'https://agencecelexia.fr/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agencecelexia.fr/#webpage',
        'url': 'https://agencecelexia.fr',
        'name': 'Agence Celexia | Apport d\'affaires pour artisans',
        'isPartOf': { '@id': 'https://agencecelexia.fr/#website' },
        'about': { '@id': 'https://agencecelexia.fr/#organization' },
        'description': 'Agence d\'apport d\'affaires pour artisans. Appels clients qualifiés, paiement 10% sur devis signés uniquement.',
        'inLanguage': 'fr-FR',
        'datePublished': '2024-10-01',
        'dateModified': '2026-05-10'
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://agencecelexia.fr/#organization',
        'name': 'Agence Celexia',
        'url': 'https://agencecelexia.fr',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://agencecelexia.fr/logo.png',
          'width': 605,
          'height': 98
        },
        'image': 'https://agencecelexia.fr/logo.png',
        'description': 'Agence d\'apport d\'affaires pour artisans : nous amenons les appels clients qualifiés, vous payez 10% uniquement sur les devis signés.',
        'priceRange': '€€',
        'serviceType': 'Apport d\'affaires pour artisans',
        'telephone': '+33651725756',
        'email': 'agence.celexia@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FR',
          'addressRegion': 'France métropolitaine',
          'addressLocality': 'France'
        },
        'foundingDate': '2024',
        'areaServed': { '@type': 'Country', 'name': 'France' },
        'knowsLanguage': 'fr',
        'sameAs': [
          'https://www.facebook.com/agencecelexia',
          'https://www.linkedin.com/company/agence-celexia'
        ],
        'founder': [
          { '@type': 'Person', 'name': 'Thomas', 'jobTitle': 'Co-fondateur' },
          { '@type': 'Person', 'name': 'Antoine', 'jobTitle': 'Co-fondateur' }
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+33651725756',
          'email': 'agence.celexia@gmail.com',
          'contactType': 'customer service',
          'availableLanguage': 'French'
        }
      }
    ]
  });

  // Lazy load Cal.com with IntersectionObserver
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
      title: 'On vous amène les appels qualifiés',
      desc: 'Nous prenons en charge toute la mécanique d\'acquisition pour faire sonner votre téléphone avec des prospects réellement intéressés par vos services, dans votre zone d\'intervention.'
    },
    {
      num: '02',
      title: 'Vous chiffrez et signez le devis',
      desc: 'Vous gérez votre métier comme d\'habitude : vous échangez avec le client, vous chiffrez, vous proposez un devis. Nous n\'intervenons jamais dans la relation commerciale.'
    },
    {
      num: '03',
      title: 'Vous nous reversez 10% du devis signé',
      desc: 'Notre rémunération est strictement indexée sur votre chiffre d\'affaires généré. Pas de devis signé, pas de facture. Pas de frais fixes, pas d\'engagement, pas de mauvaise surprise.'
    }
  ];

  const pillars = [
    {
      title: '100 % à la performance',
      desc: 'Vous ne nous payez que sur les devis effectivement signés. C\'est un partage de risque honnête : nos intérêts sont parfaitement alignés avec les vôtres.'
    },
    {
      title: 'Sans engagement',
      desc: 'Pas de durée minimale, pas de tarif mensuel, pas de pénalité si vous arrêtez. Vous gardez la main, vous testez, vous décidez.'
    },
    {
      title: 'Spécialiste artisans',
      desc: 'Nous travaillons exclusivement avec les artisans du bâtiment et des services à l\'habitat. Nos méthodes sont calibrées pour vos métiers et vos saisons.'
    },
    {
      title: 'Transparence totale',
      desc: 'Vous voyez les appels arriver, vous suivez vos devis, vous savez exactement ce que vous nous devez et pourquoi. Aucun frais caché.'
    }
  ];

  const stats = [
    { value: '10 %', label: 'de commission, uniquement sur les devis signés' },
    { value: '0 €', label: 'de frais fixes ou d\'abonnement mensuel' },
    { value: '0', label: 'de durée d\'engagement minimum' },
    { value: '19', label: 'métiers d\'artisans déjà accompagnés' }
  ];

  const complementaires = [
    {
      title: 'Site web artisan',
      description: 'Un site rapide, conçu pour convertir les visiteurs en demandes de devis.',
      link: '/services/site-web'
    },
    {
      title: 'Référencement SEO local',
      description: 'Sortir en tête sur Google dans votre zone d\'intervention.',
      link: '/services/seo'
    },
    {
      title: 'Gestion des avis clients',
      description: 'Collecter automatiquement des avis 5 étoiles après chaque chantier.',
      link: '/services/avis-clients'
    },
    {
      title: 'Email marketing',
      description: 'Relancer vos devis et fidéliser votre base clients sans y passer du temps.',
      link: '/services/emailing'
    },
    {
      title: 'Automatisation',
      description: 'Industrialiser vos relances, devis, rappels et factures pour gagner des heures par semaine.',
      link: '/services/automatisation'
    }
  ];

  const faq = [
    {
      q: 'Concrètement, comment vous me trouvez des clients ?',
      a: 'Nous prenons en charge toute la chaîne d\'acquisition locale : campagnes ciblées, optimisation de votre visibilité, qualification des demandes. Vous recevez les appels prêts à être traités, c\'est tout.'
    },
    {
      q: 'Combien je paie exactement ?',
      a: 'Vous payez 10 % du montant TTC de chaque devis signé grâce à un appel apporté par Celexia. Si vous ne signez pas, vous ne payez rien. Pas de frais d\'entrée, pas de mensualité.'
    },
    {
      q: 'Quand est-ce que je vous règle ?',
      a: 'Vous nous reversez la commission une fois le devis effectivement signé par le client. Le rythme est fixé ensemble (mensuel le plus souvent) et tout est tracé dans un suivi partagé.'
    },
    {
      q: 'Et si l\'appel n\'aboutit pas à un devis ?',
      a: 'Vous ne payez rien. Notre métier est justement de filtrer en amont pour vous transmettre des demandes sérieuses, mais quand un appel ne se transforme pas, nous l\'absorbons.'
    },
    {
      q: 'Suis-je engagé sur une durée ?',
      a: 'Non. Aucun contrat de durée minimum. Vous pouvez arrêter à tout moment, sans frais. Notre seule garantie de rester, c\'est de continuer à vous apporter des chantiers rentables.'
    },
    {
      q: 'Vous travaillez avec mon métier ?',
      a: 'Nous accompagnons 19 métiers d\'artisans, de la plomberie à l\'arboriculture en passant par la couverture, les piscines ou les diagnostics immobiliers. Si votre métier ne figure pas dans la liste, parlons-en lors de l\'appel découverte.'
    },
    {
      q: 'Vous travaillez sur toute la France ?',
      a: 'Oui. Nous opérons sur la France métropolitaine et adaptons les zones d\'intervention à votre capacité de déplacement et à votre planning.'
    },
    {
      q: 'Puis-je continuer mes propres canaux d\'acquisition en parallèle ?',
      a: 'Bien sûr. Vous restez 100 % maître de votre activité. Notre rôle est d\'ajouter du flux qualifié, pas de vous remplacer.'
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
            Celexia est une agence d'apport d'affaires dédiée aux artisans.
            Pas de frais fixes, pas d'engagement : si vous ne signez pas, vous ne payez pas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center">
              Réserver un appel découverte
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#comment-ca-marche" className="btn-ghost text-base px-8 py-4 w-full sm:w-auto justify-center">
              Comment ça marche
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Sans engagement · 0 € de frais fixes · Commission sur résultats uniquement
          </p>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Trois étapes, zéro complexité
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un fonctionnement simple, pensé pour les artisans qui n'ont pas de temps à perdre en réunions ou en reportings.
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
        </div>
      </section>

      {/* POURQUOI CELEXIA */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi Celexia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Un modèle aligné sur vos résultats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              On ne gagne que si vous gagnez. C'est aussi simple que ça.
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

      {/* MÉTIERS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos métiers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {metiers.length} métiers d'artisans accompagnés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque dispositif d'apport d'affaires est calibré pour les spécificités de votre métier : panier moyen, urgence, saisonnalité, zone d'intervention.
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
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Nos engagements</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              La transparence chiffrée
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre modèle tient en quatre chiffres. Aucun astérisque, aucune mention en bas de contrat.
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
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Services complémentaires</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Au-delà de l'apport d'affaires
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Notre cœur de métier reste l'apport d'affaires. Si vous voulez aussi structurer votre site, votre référencement, vos avis ou vos relances, nous pouvons aussi vous accompagner sur ces volets, à la carte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {complementaires.map((c) => (
              <Link
                key={c.link}
                to={c.link}
                className="card p-6 border-gray-200 group hover:border-violet-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.description}</p>
                <span className="inline-flex items-center text-violet-600 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Questions fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Tout ce que vous voulez savoir avant l'appel
            </h2>
            <p className="text-lg text-gray-600">
              Si une question n'a pas sa réponse ici, on en parle directement lors de l'appel découverte.
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
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-lg font-bold transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
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
              30 minutes pour comprendre votre activité, valider que notre modèle est adapté
              et estimer ensemble combien de chantiers nous pouvons vous apporter.
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
