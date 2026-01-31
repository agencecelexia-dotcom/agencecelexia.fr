import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const ArtisanWebsites = () => {
  usePageMeta({
    title: 'Sites Web pour Artisans en 7 Jours | Agence Celexia',
    description: 'Site web professionnel pour artisans livré en 7 jours. Design moderne, optimisé SEO, responsive. Devis gratuit pour plombiers, électriciens, menuisiers.',
    canonical: 'https://agence-celexia.fr/sites-artisans'
  });

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Livraison en 7 jours',
      desc: 'Votre site est en ligne une semaine après validation du brief'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Design responsive',
      desc: 'Parfait sur mobile, tablette et ordinateur'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Optimisé SEO',
      desc: 'Structure optimisée pour être bien référencé sur Google'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Formulaire de contact',
      desc: 'Recevez les demandes de devis directement par email'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Galerie photos',
      desc: 'Mettez en valeur vos plus belles réalisations'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance optimale',
      desc: 'Site ultra-rapide pour une meilleure expérience utilisateur'
    }
  ];

  const portfolio = [
    {
      title: 'Plomberie Dupont',
      category: 'Plomberie',
      image: '/examples/plomberie.jpg',
      features: ['Formulaire de contact', 'Galerie photos', 'Zone d\'intervention', 'Avis clients'],
      color: 'blue'
    },
    {
      title: 'Électricité Martin',
      category: 'Électricité',
      image: '/examples/electricite.jpg',
      features: ['Présentation services', 'Urgences 24/7', 'Devis en ligne', 'Certifications'],
      color: 'amber'
    },
    {
      title: 'Menuiserie Artisan',
      category: 'Menuiserie',
      image: '/examples/menuiserie.jpg',
      features: ['Portfolio réalisations', 'Types de bois', 'Sur-mesure', 'Devis gratuit'],
      color: 'emerald'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Brief & Validation',
      desc: 'Échange de 30 minutes pour comprendre vos besoins, votre métier et votre cible',
      duration: 'Jour 1'
    },
    {
      step: '02',
      title: 'Création du site',
      desc: 'Notre équipe design et développe votre site selon vos spécifications',
      duration: 'Jours 2-5'
    },
    {
      step: '03',
      title: 'Révisions',
      desc: 'Vous validez le site et nous effectuons les ajustements nécessaires',
      duration: 'Jour 6'
    },
    {
      step: '04',
      title: 'Mise en ligne',
      desc: 'Votre site est publié, indexé sur Google et prêt à générer des contacts',
      duration: 'Jour 7'
    }
  ];


  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Sites Web Artisans</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Site web professionnel
            <span className="block text-violet-600">livré en 7 jours</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Design moderne, optimisé pour convertir vos visiteurs en clients.
            Spécialement conçu pour les artisans et professionnels du bâtiment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-primary arrow-animate text-base px-8 py-4">
              Demander un devis gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#exemples" className="btn-ghost text-base px-8 py-4">
              Voir des exemples
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Fonctionnalités</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Tout ce dont vous avez besoin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="card p-6 border-gray-200 group hover:border-violet-200">
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center mb-4 text-violet-600
                               group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Le processus</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              De l'idée à la mise en ligne en 7 jours
            </h2>
            <p className="text-gray-500 text-lg">
              Un processus simple et transparent, sans surprise
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={i} className="card p-6 md:p-8 border-gray-200 hover:border-violet-200 group transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-start md:items-center gap-4 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg flex-shrink-0
                                   group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:text-right md:min-w-[100px]">
                    <span className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="exemples" className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Exemples de réalisations
            </h2>
            <p className="text-gray-500 text-lg">
              Des sites web qui convertissent vos visiteurs en clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className="card overflow-hidden border-gray-200 group hover:border-violet-200 transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${
                  item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  item.color === 'amber' ? 'from-amber-400 to-amber-600' :
                  'from-emerald-400 to-emerald-600'
                } flex items-center justify-center text-white font-display text-2xl font-bold`}>
                  {item.title}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                  <div className="space-y-2">
                    {item.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-500">
            <strong className="text-gray-900">Note :</strong> Les captures d'écran réelles de sites clients sont disponibles sur demande pour respecter leur confidentialité.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Pourquoi nous ?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Spécialistes des sites pour artisans
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Expertise métier', desc: 'Nous connaissons les spécificités de l\'artisanat et les attentes de vos clients' },
              { title: 'Conversion optimisée', desc: 'Chaque élément est conçu pour transformer vos visiteurs en demandes de devis' },
              { title: 'Local SEO', desc: 'Votre site est optimisé pour apparaître dans les recherches locales Google' },
              { title: 'Support réactif', desc: 'Une question ? Un problème ? Nous répondons sous 24h maximum' }
            ].map((item, i) => (
              <div key={i} className="card p-6 border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-violet-600 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-[15px]">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Prêt à lancer votre site web ?
          </h2>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Discutons de votre projet et obtenez un devis personnalisé en 24h
          </p>
          <Link to="/contact" className="btn-primary arrow-animate text-base px-8 py-4 inline-flex items-center">
            Démarrer mon projet
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtisanWebsites;
