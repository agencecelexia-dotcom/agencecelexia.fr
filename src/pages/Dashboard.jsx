import CTAButton from '../components/CTAButton';

const Dashboard = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fini le flou. <span className="text-primary-purple">Vous savez exactement où va votre argent.</span>
          </h1>
          <p className="text-2xl text-gray-600">
            Notre tableau de bord suit chaque appel, chaque euro, chaque contrat.<br />
            En temps réel. Sans jargon.
          </p>
        </div>
      </section>

      {/* SECTION MOCKUP DASHBOARD */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            📊 Métriques en direct
          </h2>

          {/* Dashboard Mockup */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl">
            {/* Header Dashboard */}
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Tableau de bord - Mars 2025</h3>
              <div className="text-green-400 font-bold">● En direct</div>
            </div>

            {/* Grille de métriques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Métrique 1 */}
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Appels reçus ce mois</span>
                  <span className="text-3xl">📞</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">28</div>
                <div className="text-green-400 text-sm">↗ +18% vs mois dernier</div>
              </div>

              {/* Métrique 2 */}
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Coût total Google</span>
                  <span className="text-3xl">💰</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">840€</div>
                <div className="text-gray-400 text-sm">28 appels × 30€ moyen</div>
              </div>

              {/* Métrique 3 */}
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Appels convertis</span>
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">11</div>
                <div className="text-purple-400 text-sm">Taux de conversion : 39%</div>
              </div>

              {/* Métrique 4 */}
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">CA généré</span>
                  <span className="text-3xl">💵</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">385k€</div>
                <div className="text-gray-400 text-sm">11 contrats signés</div>
              </div>

              {/* Métrique 5 - ROI (Grande) */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold text-xl">Bénéfice net</span>
                  <span className="text-4xl">✅</span>
                </div>
                <div className="text-6xl font-bold text-white mb-2">384 160€</div>
                <div className="text-white/90 text-lg mb-4">CA (385 000€) - Coût Google (840€)</div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <div className="text-white/90 text-sm mb-1">ROI (Retour sur investissement)</div>
                  <div className="text-4xl font-bold text-white">457x</div>
                  <div className="text-white/90 text-sm mt-2">Pour chaque euro dépensé, vous gagnez 457€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EXPLICATIONS */}
      <section className="section bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comment lire votre dashboard
          </h2>

          <div className="space-y-6">
            {/* Explication 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">📞 Appels reçus ce mois</h3>
                <p className="text-gray-700">
                  Combien de fois votre téléphone a sonné grâce aux Local Service Ads.
                  Chaque appel est tracké automatiquement.
                </p>
              </div>
            </div>

            {/* Explication 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">💰 Coût total Google</h3>
                <p className="text-gray-700">
                  Ce que Google vous a facturé pour tous vos appels reçus.
                  Environ 30€ par appel en moyenne pour les piscinistes.
                </p>
              </div>
            </div>

            {/* Explication 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">🎯 Appels convertis en clients</h3>
                <p className="text-gray-700">
                  Combien de ces appels sont devenus des contrats signés.
                  Le taux de conversion moyen dans le secteur piscine est de 25-40%.
                </p>
              </div>
            </div>

            {/* Explication 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">💵 CA généré</h3>
                <p className="text-gray-700">
                  Le chiffre d'affaires total généré par tous les contrats signés
                  grâce aux appels des Local Service Ads.
                </p>
              </div>
            </div>

            {/* Explication 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">✅ Bénéfice net & ROI</h3>
                <p className="text-gray-700">
                  Votre CA moins ce que vous avez payé à Google.
                  C'est ÇA votre vrai ROI. Vous voyez immédiatement si c'est rentable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EXEMPLE CONCRET */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            📈 Exemple réel
          </h2>

          <div className="bg-gradient-to-br from-primary-purple to-purple-500 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Mois de mars 2025</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-lg">Appels reçus :</span>
                <span className="text-2xl font-bold">28</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-lg">Payé à Google :</span>
                <span className="text-2xl font-bold">840€ (28 × 30€)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-lg">Contrats signés :</span>
                <span className="text-2xl font-bold">11 (taux : 39%)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="text-lg">CA généré :</span>
                <span className="text-2xl font-bold">385 000€</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-bold">Bénéfice net :</span>
                <span className="text-3xl font-bold">384 160€</span>
              </div>
            </div>

            <div className="bg-green-500 p-6 rounded-xl mt-8 text-center">
              <p className="text-sm opacity-90 mb-2">ROI</p>
              <p className="text-6xl font-bold mb-2">457x</p>
              <p className="text-lg">Pour chaque euro dépensé, vous gagnez 457€.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à accéder à votre dashboard ?
          </h2>
          <CTAButton to="/contact" variant="white" className="mb-6">
            Je veux accéder au dashboard
          </CTAButton>
          <p className="text-xl">
            Transparence totale • Suivi en temps réel • ROI mesurable
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
