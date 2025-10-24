import CTAButton from '../components/CTAButton';

const Home = () => {
  return (
    <div>
      {/* SECTION HERO */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Vos concurrents attendent que le téléphone sonne.
                <span className="text-primary-purple"> Vous, vous payez uniquement quand il sonne.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                La seule publicité en ligne qui vous fait payer à la conversion.
                <br />
                Pas au clic. Pas à l'impression. À l'appel qualifié.
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Local Service Ads : la méthode que 99% des piscinistes ignorent encore.
                Et c'est exactement pour ça qu'elle fonctionne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/comment-ca-marche">
                  Voir comment ça marche en 2 min
                </CTAButton>
                <CTAButton to="/contact" variant="secondary">
                  Réserver un audit gratuit
                </CTAButton>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="bg-primary-purple text-white p-6 rounded-xl mb-4">
                  <p className="text-sm font-semibold mb-2">📞 Nouvel appel entrant</p>
                  <p className="text-2xl font-bold">Construction piscine</p>
                  <p className="text-3xl font-bold mt-2">45 000€</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">+340%</p>
                    <p className="text-sm text-gray-600">ROI</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">28</p>
                    <p className="text-sm text-gray-600">Appels/mois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROBLÈME */}
      <section className="bg-dark-gray text-white section">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Vous dépensez en publicité Facebook, Google Ads, peut-être même des flyers.
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-6">
            Résultat ?
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Des clics. Des impressions. Des "j'y pense". Des fantômes.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Vous payez pour de l'espoir.<br />
            <span className="font-bold">Pas pour des clients.</span>
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Et pendant ce temps, votre concurrent —celui qui n'a même pas de site web—
            décroche son téléphone toute la journée.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary-purple mt-12">
            Pourquoi ?
          </p>
        </div>
      </section>

      {/* SECTION TRANSITION */}
      <section className="bg-primary-purple text-white section py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Parce qu'il est là où vos clients cherchent.<br />
            Au-dessus de tout le monde. <span className="underline">Littéralement.</span>
          </h2>
        </div>
      </section>

      {/* SECTION SOLUTION */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Local Service Ads : Vous êtes en première position. <span className="text-primary-purple">Toujours.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne 1 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Zéro concurrence</h3>
              <p className="text-gray-700 text-lg">
                Vous êtes le seul pisciniste de votre zone à utiliser ce canal.
                Résultat : vous monopolisez les appels qualifiés.
              </p>
            </div>

            {/* Colonne 2 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Vous payez à la performance</h3>
              <p className="text-gray-700 text-lg">
                ~30€ par appel entrant. Pas de budget gaspillé.
                Si votre téléphone ne sonne pas, vous ne payez rien.
              </p>
            </div>

            {/* Colonne 3 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Vous suivez tout en temps réel</h3>
              <p className="text-gray-700 text-lg">
                Chaque appel, chaque euro dépensé, chaque contrat signé.
                Notre dashboard vous montre exactement d'où vient votre argent.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton to="/contact">
              Je veux monopoliser mon marché
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SECTION PREUVE SOCIALE */}
      <section className="section bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pendant que vos concurrents dépensent 90€ par clic...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">📞 Coût moyen par appel qualifié</p>
              <p className="text-5xl font-bold text-green-600 mb-2">30€</p>
              <p className="text-gray-600">avec Local Service Ads</p>
              <p className="text-gray-400 mt-2">vs</p>
              <p className="text-3xl font-bold text-red-600 mt-2">90€</p>
              <p className="text-gray-600">par clic Google Ads traditionnel</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">⚡ Taux de conversion moyen</p>
              <p className="text-5xl font-bold text-green-600 mb-2">25-40%</p>
              <p className="text-gray-600">des appels → RDV</p>
              <p className="text-gray-400 mt-2">vs</p>
              <p className="text-3xl font-bold text-red-600 mt-2">7%</p>
              <p className="text-gray-600">pour la pub classique</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">🎯 Positionnement garanti</p>
              <p className="text-5xl font-bold text-primary-purple mb-2">#1</p>
              <p className="text-gray-600">sur Google</p>
              <p className="text-lg font-bold text-primary-purple mt-4">
                Au-dessus de TOUT.
              </p>
              <p className="text-gray-600">Même au-dessus des pubs classiques.</p>
            </div>
          </div>

          {/* Témoignage */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-xl italic text-gray-700 mb-4">
                  "J'ai installé 12 piscines en 3 mois grâce aux LSA.
                  Avant, j'en faisais 15 par AN avec Facebook Ads.
                  Et je dépensais 3x plus."
                </p>
                <p className="font-bold">— Marc D., Piscines Premium [Ville]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION OBJECTIONS (FAQ) */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Les questions que vous vous posez <span className="text-primary-purple">(et leurs réponses)</span>
          </h2>

          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                ❓ "Pourquoi personne d'autre ne le fait ?"
              </h3>
              <p className="text-xl text-gray-700">
                → Parce que Google vient à peine d'ouvrir les LSA aux piscinistes.
                Vous êtes en avance. Profitez-en avant que le marché se sature.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                ❓ "C'est quoi le piège ?"
              </h3>
              <p className="text-xl text-gray-700">
                → Il n'y en a pas. Vous payez quand on vous appelle. Point.
                Si l'appel n'est pas qualifié, Google vous rembourse.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                ❓ "Ça prend combien de temps ?"
              </h3>
              <p className="text-xl text-gray-700">
                → 7 jours entre votre inscription et vos premiers appels.
                On s'occupe de tout : optimisation Google Maps, vérification, configuration.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                ❓ "Je dois signer un contrat longue durée ?"
              </h3>
              <p className="text-xl text-gray-700">
                → Non. Aucun engagement.
                Vous testez sur 1 mois. Si ça ne marche pas, vous arrêtez. Simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à recevoir des appels au lieu de payer des clics ?
          </h2>
          <CTAButton to="/contact" variant="white" className="mb-6">
            Réserver mon audit gratuit (15 min)
          </CTAButton>
          <p className="text-xl">
            Pas de blabla commercial. Juste une analyse de votre marché
            et une estimation du nombre d'appels que vous pourriez recevoir.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
