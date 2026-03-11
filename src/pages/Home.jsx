import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const Home = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  usePageMeta({
    title: 'Agence Celexia – Google Local Services Ads pour Artisans | Plombiers, Électriciens, Couvreurs',
    description: 'Agence marketing digital spécialisée en Google Local Services Ads pour artisans du bâtiment : plombiers, électriciens, couvreurs, menuisiers. Paiement à l\'appel qualifié, SEO local, sites web pro. Résultats mesurables garantis.',
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
        'description': 'Agence marketing digital spécialisée en Google Local Services Ads pour artisans du bâtiment : plombiers, électriciens, couvreurs, menuisiers, chauffagistes.',
        'inLanguage': 'fr-FR',
        'publisher': { '@id': 'https://agencecelexia.fr/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://agencecelexia.fr/#webpage',
        'url': 'https://agencecelexia.fr',
        'name': 'Google Local Services Ads pour Artisans | Agence Celexia',
        'isPartOf': { '@id': 'https://agencecelexia.fr/#website' },
        'about': { '@id': 'https://agencecelexia.fr/#organization' },
        'description': 'Agence marketing digital spécialisée en Google Local Services Ads pour artisans. Plombiers, électriciens, couvreurs : recevez des appels qualifiés avec paiement à la performance.',
        'inLanguage': 'fr-FR'
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://agencecelexia.fr/#organization',
        'name': 'Agence Celexia',
        'url': 'https://agencecelexia.fr',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://agencecelexia.fr/logo.png',
          'width': 512,
          'height': 512
        },
        'image': 'https://agencecelexia.fr/logo.png',
        'description': 'Agence marketing digital spécialisée en Google Local Services Ads pour artisans du bâtiment. Publicité à la performance, sites web, SEO local, gestion avis clients, email marketing, automatisation.',
        'priceRange': '€€',
        'serviceType': 'Google Local Services Ads pour artisans',
        'telephone': '+33651725756',
        'email': 'agence.celexia@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FR',
          'addressLocality': 'France'
        },
        'areaServed': { '@type': 'Country', 'name': 'France' },
        'knowsLanguage': 'fr',
        'sameAs': [
          'https://www.facebook.com/agencecelexia',
          'https://www.linkedin.com/company/agence-celexia'
        ],
        'founder': [
          { '@type': 'Person', 'name': 'Thomas', 'jobTitle': 'Co-fondateur - Marketing Digital & Acquisition Client' },
          { '@type': 'Person', 'name': 'Antoine', 'jobTitle': 'Co-fondateur - Développement Web & Optimisation Technique' }
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+33651725756',
          'email': 'agence.celexia@gmail.com',
          'contactType': 'customer service',
          'availableLanguage': 'French'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5',
          'reviewCount': '3',
          'bestRating': '5',
          'worstRating': '1'
        },
        'review': [
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Marc D.' },
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
            'reviewBody': 'Depuis que je travaille avec Celexia, je reçois en moyenne 40 appels qualifiés par mois. Mon carnet de commandes est rempli 3 mois à l\'avance.'
          },
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Sophie L.' },
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
            'reviewBody': 'Le système de paiement à l\'appel est transparent et efficace. Mon chiffre d\'affaires a augmenté de 35% en 6 mois.'
          },
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Pierre M.' },
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
            'reviewBody': 'L\'équipe est réactive et comprend les spécificités de mon métier. Le site web qu\'ils ont créé me génère des demandes de devis chaque semaine.'
          }
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Services Marketing Digital pour Artisans',
          'itemListElement': [
            { '@type': 'OfferCatalog', 'name': 'Publicité à la Performance', 'url': 'https://agencecelexia.fr/services/publicite-performance' },
            { '@type': 'OfferCatalog', 'name': 'Création de Sites Web', 'url': 'https://agencecelexia.fr/services/site-web' },
            { '@type': 'OfferCatalog', 'name': 'Référencement SEO', 'url': 'https://agencecelexia.fr/services/seo' },
            { '@type': 'OfferCatalog', 'name': 'Gestion Avis Clients', 'url': 'https://agencecelexia.fr/services/avis-clients' },
            { '@type': 'OfferCatalog', 'name': 'Email Marketing', 'url': 'https://agencecelexia.fr/services/emailing' },
            { '@type': 'OfferCatalog', 'name': 'Automatisation Marketing', 'url': 'https://agencecelexia.fr/services/automatisation' }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agencecelexia.fr/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Qu\'est-ce que Google Local Services Ads pour les artisans ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Google Local Services Ads (LSA) est un programme publicitaire de Google conçu pour les professionnels locaux. Contrairement aux annonces Google Ads classiques, vous ne payez que lorsqu\'un client potentiel vous appelle directement. Votre annonce apparaît tout en haut des résultats de recherche Google, avec le badge "Garanti par Google".'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quels artisans peuvent utiliser les Google Local Services Ads ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En France, les Google Local Services Ads sont disponibles pour de nombreux corps de métier du bâtiment : plombiers, électriciens, couvreurs, chauffagistes, menuisiers, serruriers, peintres, carreleurs, maçons et bien d\'autres.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Combien coûte une campagne Google Local Services Ads ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Le coût varie selon votre métier et votre zone géographique, mais en moyenne un appel qualifié coûte entre 15€ et 40€. Vous ne payez que pour les appels reçus, pas pour les impressions ou les clics.'
            }
          },
          {
            '@type': 'Question',
            'name': 'En combien de temps puis-je voir des résultats ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les premiers appels arrivent généralement dans les 48 à 72 heures suivant l\'activation de votre campagne Google Local Services Ads.'
            }
          }
        ]
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
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          window.Cal("init", "rdv-decouverte-240-appels-an-garantis", {origin:"https://app.cal.com"});
          window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("inline", {
            elementOrSelector:"#my-cal-inline-rdv-decouverte-240-appels-an-garantis",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "agence-celexia-1qyn93/rdv-decouverte-240-appels-an-garantis",
          });
          window.Cal.ns["rdv-decouverte-240-appels-an-garantis"]("ui", {
            "cssVarsPerTheme":{"light":{"cal-brand":"#7C3AED"},"dark":{"cal-brand":"#7C3AED"}},
            "hideEventTypeDetails":false,
            "layout":"month_view"
          });
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(calRef.current);
    return () => observer.disconnect();
  }, [calLoaded]);

  const services = [
    {
      title: 'Google Local Services Ads',
      category: 'Génération Leads',
      description: 'Payez uniquement pour des appels de clients réels grâce aux Google Local Services Ads. Votre entreprise apparaît en position #1 sur Google avec le badge "Garanti par Google", au-dessus de tous les autres résultats.',
      link: '/services/publicite-performance',
      color: 'blue',
      features: ['Paiement à l\'appel qualifié', 'Badge Google Garantie', 'ROI mesurable en temps réel', 'Filtrage anti-spam intelligent']
    },
    {
      title: 'Sites Web Artisans',
      category: 'Web Design',
      description: 'Site professionnel livré en 7 jours, conçu spécifiquement pour les artisans du bâtiment. Design moderne, optimisé pour le référencement et la conversion des visiteurs en clients.',
      link: '/services/site-web',
      color: 'violet',
      features: ['Livraison en 7 jours', 'Design responsive mobile', 'Optimisé SEO local', 'Galerie photos de réalisations']
    },
    {
      title: 'Référencement SEO Local',
      category: 'Visibilité',
      description: 'Dominez les résultats Google dans votre zone d\'intervention. Optimisation Google Business Profile, création de contenu local, stratégie de backlinks qualifiés.',
      link: '/services/seo',
      color: 'emerald',
      features: ['Position top 3 locale', 'Google Business Profile', 'Backlinks de qualité', 'Résultats sous 90 jours']
    },
    {
      title: 'Gestion des Avis Clients',
      category: 'E-réputation',
      description: 'Automatisez la collecte d\'avis Google après chaque intervention. Répondez aux avis avec l\'aide de l\'IA. Surveillez et améliorez votre réputation en ligne en continu.',
      link: '/services/avis-clients',
      color: 'amber',
      features: ['Collecte automatisée', 'Réponses assistées par IA', 'Objectif note 4.8/5', 'Gestion des avis négatifs']
    },
    {
      title: 'Email Marketing',
      category: 'Fidélisation',
      description: 'Campagnes email automatisées pour fidéliser vos clients existants et réactiver les anciens. Rappels d\'entretien, promotions saisonnières, relances de devis.',
      link: '/services/emailing',
      color: 'cyan',
      features: ['Relances automatiques', 'Taux d\'ouverture de 45%', 'Reconquête clients inactifs', 'ROI moyen de 42:1']
    },
    {
      title: 'Automatisation',
      category: 'Productivité',
      description: 'Automatisez vos processus administratifs : CRM artisan, devis automatiques, facturation, rappels de rendez-vous. Libérez du temps pour votre métier.',
      link: '/services/automatisation',
      color: 'purple',
      features: ['CRM dédié artisans', 'Devis automatiques', 'Rappels de RDV', 'Gain de 15h par semaine']
    }
  ];

  const colorClasses = {
    blue: 'from-blue-400 to-blue-600',
    violet: 'from-violet-400 to-violet-600',
    emerald: 'from-emerald-400 to-emerald-600',
    amber: 'from-amber-400 to-amber-600',
    cyan: 'from-cyan-400 to-cyan-600',
    purple: 'from-purple-400 to-purple-600'
  };

  const testimonials = [
    {
      name: 'Marc D.',
      metier: 'Plombier à Lyon',
      text: 'Depuis que je travaille avec Celexia, je reçois en moyenne 40 appels qualifiés par mois. Mon carnet de commandes est rempli 3 mois à l\'avance.',
      rating: 5
    },
    {
      name: 'Sophie L.',
      metier: 'Électricienne à Marseille',
      text: 'Le système de paiement à l\'appel est transparent et efficace. Je ne paie que pour des vrais prospects. Mon chiffre d\'affaires a augmenté de 35% en 6 mois.',
      rating: 5
    },
    {
      name: 'Pierre M.',
      metier: 'Couvreur à Bordeaux',
      text: 'L\'équipe est réactive et comprend les spécificités de mon métier. Le site web qu\'ils ont créé me génère des demandes de devis chaque semaine.',
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" aria-hidden="true" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Agence Marketing Digital pour Artisans</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Google Local Services Ads
            <span className="block text-violet-600">pour Artisans du Bâtiment</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            Agence Celexia est spécialisée en <strong>Google Local Services Ads</strong> pour les artisans et professionnels du bâtiment.
            Nous aidons les <strong>plombiers, électriciens, couvreurs, menuisiers, chauffagistes</strong> et autres artisans
            à recevoir des appels de clients qualifiés grâce à la publicité locale Google.
          </p>

          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            Avec les annonces Google Local Services, votre entreprise apparaît en <strong>position #1 sur Google</strong>,
            au-dessus de tous les autres résultats. Vous ne payez que lorsqu'un client potentiel vous appelle directement.
            Notre expertise en référencement local et en gestion de campagnes Google Ads garantit un retour sur investissement mesurable.
          </p>

          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Création de sites web professionnels optimisés SEO, gestion de votre fiche Google Business Profile,
            collecte automatisée d'avis clients, email marketing et automatisation des processus administratifs.
            Chaque solution est conçue pour les spécificités de votre métier d'artisan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reserver" className="btn-primary arrow-animate text-base px-8 py-4">
              Réserver un audit gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#services" className="btn-ghost text-base px-8 py-4">
              Découvrir nos 6 services
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-12 px-4 md:px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12', label: 'Métiers accompagnés', desc: 'Du plombier au pisciniste' },
              { value: '6', label: 'Solutions complètes', desc: 'Pub, Web, SEO, Avis, Email, Auto' },
              { value: '100%', label: 'Résultats mesurables', desc: 'Dashboard temps réel' },
              { value: '24/7', label: 'Automatisation active', desc: 'Vos processus tournent non-stop' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-violet-600 mb-1">{stat.value}</div>
                <p className="text-sm font-semibold text-gray-900">{stat.label}</p>
                <p className="text-xs text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Nos 6 Services</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Des Solutions Complètes pour les Artisans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque service est conçu pour répondre aux défis spécifiques des artisans et professionnels du bâtiment.
              De l'acquisition de nouveaux clients à la fidélisation, nous couvrons l'intégralité de votre stratégie digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="card overflow-hidden border-gray-200 group hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
                <div className={`h-48 bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center text-white font-display text-2xl font-bold px-6 text-center relative`}>
                  {service.title}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">{service.category}</span>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-violet-600 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                    En savoir plus
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Témoignages</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Ce que disent nos clients artisans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-8 border-gray-200">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.metier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CELEXIA */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi Celexia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Une agence qui comprend les artisans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous savons que les artisans n'ont pas le temps de s'occuper de leur marketing digital.
              C'est pourquoi nous avons conçu des solutions clés en main, adaptées à chaque corps de métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Spécialistes de l\'artisanat', desc: 'Nous travaillons exclusivement avec les artisans et professionnels du bâtiment. Nous connaissons vos défis, votre saisonnalité et vos clients.' },
              { title: 'Paiement aux résultats', desc: 'Pas de forfait mensuel aveugle. Notre modèle de paiement à l\'appel qualifié aligne nos intérêts avec les vôtres : votre succès est notre succès.' },
              { title: 'Transparence totale', desc: 'Accès en temps réel à vos statistiques : nombre d\'appels, taux de conversion, coût par acquisition. Vous savez exactement où va chaque euro.' },
              { title: 'Accompagnement humain', desc: 'Un interlocuteur dédié qui connaît votre dossier. Pas de chatbot, pas de plateforme impersonnelle. Un vrai partenariat.' }
            ].map((item, i) => (
              <div key={i} className="card p-7 border-gray-200 group hover:border-violet-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Questions Fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Google Local Services Ads : ce qu'il faut savoir
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que les artisans doivent savoir avant de lancer leurs campagnes publicitaires locales sur Google.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Qu\'est-ce que Google Local Services Ads pour les artisans ?',
                a: 'Google Local Services Ads (LSA) est un programme publicitaire de Google conçu pour les professionnels locaux. Contrairement aux annonces Google Ads classiques, vous ne payez que lorsqu\'un client potentiel vous appelle directement. Votre annonce apparaît tout en haut des résultats de recherche Google, avec le badge "Garanti par Google", ce qui inspire immédiatement confiance aux clients qui cherchent un artisan fiable.'
              },
              {
                q: 'Quels artisans peuvent utiliser les Google Local Services Ads ?',
                a: 'En France, les Google Local Services Ads sont disponibles pour de nombreux corps de métier du bâtiment : plombiers, électriciens, couvreurs, chauffagistes, menuisiers, serruriers, peintres, carreleurs, maçons et bien d\'autres. Agence Celexia vous accompagne dans la vérification de votre éligibilité et dans toutes les démarches d\'inscription au programme Google Garantie.'
              },
              {
                q: 'Combien coûte une campagne Google Local Services Ads ?',
                a: 'Le coût varie selon votre métier et votre zone géographique, mais en moyenne un appel qualifié coûte entre 15€ et 40€. L\'avantage majeur est que vous ne payez que pour les appels reçus, pas pour les impressions ou les clics. Agence Celexia optimise vos campagnes pour réduire le coût par appel et maximiser votre retour sur investissement.'
              },
              {
                q: 'En combien de temps puis-je voir des résultats ?',
                a: 'Les premiers appels arrivent généralement dans les 48 à 72 heures suivant l\'activation de votre campagne Google Local Services Ads. Le volume d\'appels augmente ensuite progressivement au cours des premières semaines, à mesure que votre profil gagne en visibilité et en avis clients positifs.'
              }
            ].map((faq, i) => (
              <div key={i} className="card p-7 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
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
              Échangeons sur votre projet
            </h2>
            <p className="text-lg text-violet-100 max-w-2xl mx-auto">
              Réservez un appel stratégique gratuit de 30 minutes. Nous analyserons votre situation
              et évaluerons le potentiel de nos solutions pour développer votre activité d'artisan.
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
              id="my-cal-inline-rdv-decouverte-240-appels-an-garantis"
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
