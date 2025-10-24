import CTAButton from '../components/CTAButton';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Local Service Ads pour piscinistes : le guide complet 2025",
      excerpt: "Tout ce que vous devez savoir pour démarrer avec les Local Service Ads et dominer votre marché local.",
      category: "Guide",
      readTime: "10 min",
      date: "24 Oct 2025"
    },
    {
      id: 2,
      title: "Pourquoi 99% des piscinistes ignorent la publicité la plus rentable",
      excerpt: "Découvrez pourquoi la majorité des professionnels passent à côté d'une opportunité en or.",
      category: "Stratégie",
      readTime: "7 min",
      date: "20 Oct 2025"
    },
    {
      id: 3,
      title: "Google Ads vs Local Service Ads : quelle différence pour les piscinistes ?",
      excerpt: "Comparaison détaillée des deux solutions publicitaires et laquelle choisir pour votre entreprise.",
      category: "Comparaison",
      readTime: "8 min",
      date: "18 Oct 2025"
    },
    {
      id: 4,
      title: "Combien coûte réellement un client en publicité piscine ?",
      excerpt: "Analyse des coûts d'acquisition client selon les différents canaux publicitaires en 2025.",
      category: "ROI",
      readTime: "6 min",
      date: "15 Oct 2025"
    },
    {
      id: 5,
      title: "Comment obtenir le badge Google Garanti pour votre entreprise de piscines",
      excerpt: "Guide étape par étape pour obtenir la certification Google et booster votre crédibilité.",
      category: "Guide",
      readTime: "5 min",
      date: "12 Oct 2025"
    },
    {
      id: 6,
      title: "Taux de conversion publicité piscine : les chiffres réels en 2025",
      excerpt: "Les statistiques que personne ne vous montre sur les vrais taux de conversion dans le secteur.",
      category: "Données",
      readTime: "7 min",
      date: "10 Oct 2025"
    },
    {
      id: 7,
      title: "Pourquoi vos concurrents vont détester que vous lisiez cet article",
      excerpt: "Les secrets que les piscinistes qui réussissent ne veulent pas que vous découvriez.",
      category: "Stratégie",
      readTime: "9 min",
      date: "8 Oct 2025"
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog <span className="text-primary-purple">Local Service Ads</span>
          </h1>
          <p className="text-2xl text-gray-600">
            Guides, stratégies et données pour dominer votre marché local
          </p>
        </div>
      </section>

      {/* SECTION ARTICLES */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-purple hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-primary-purple to-purple-500 h-48 flex items-center justify-center text-white text-4xl font-bold">
                  {article.category}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="bg-primary-purple text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span>📅 {article.date}</span>
                    <span>⏱️ {article.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-dark-gray hover:text-primary-purple transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>

                  <button className="text-primary-purple font-semibold hover:underline">
                    Lire l'article →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Message pour bientôt */}
          <div className="mt-16 text-center bg-light-gray p-12 rounded-2xl">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-3xl font-bold mb-4">Articles à venir très prochainement</h3>
            <p className="text-xl text-gray-600 mb-6">
              Notre équipe rédige actuellement ces articles pour vous fournir
              les meilleures stratégies et données du marché.
            </p>
            <CTAButton to="/contact">
              Réserver un audit en attendant
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SECTION CATÉGORIES */}
      <section className="section bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Parcourir par catégorie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-lg mb-2">Guides</h3>
              <p className="text-gray-600 text-sm">Tutoriels complets</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Stratégie</h3>
              <p className="text-gray-600 text-sm">Conseils d'experts</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">Données</h3>
              <p className="text-gray-600 text-sm">Chiffres & stats</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">ROI</h3>
              <p className="text-gray-600 text-sm">Rentabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-gradient-to-br from-primary-purple to-purple-500 text-white p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-4">
              📬 Restez informé
            </h2>
            <p className="text-xl mb-8">
              Recevez nos nouveaux articles et stratégies directement dans votre boîte mail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 rounded-lg text-dark-gray focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                S'abonner
              </button>
            </div>

            <p className="text-sm mt-4 opacity-90">
              Pas de spam. Désinscription à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Vous préférez passer à l'action ?
          </h2>
          <CTAButton to="/contact" variant="white" className="mb-6">
            Réserver un audit gratuit
          </CTAButton>
          <p className="text-xl">
            15 minutes pour analyser votre marché et estimer votre potentiel
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
