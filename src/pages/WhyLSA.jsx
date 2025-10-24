import CTAButton from '../components/CTAButton';

const WhyLSA = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Publicité traditionnelle vs <span className="text-primary-purple">Local Service Ads</span>
          </h1>
          <p className="text-2xl text-gray-600">
            (Ou pourquoi vous gaspillez votre argent)
          </p>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Le match de la décennie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colonne Pub Traditionnelle */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
                ❌ Google Ads / Facebook Ads
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">Paiement au clic</p>
                  <p className="text-gray-700">Vous payez même si la personne ne vous appelle jamais</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">~90€ par clic</p>
                  <p className="text-gray-700">Coût élevé sans garantie de résultat</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">Position variable</p>
                  <p className="text-gray-700">Vous pouvez être 3e, 5e, invisible...</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">Concurrence saturée</p>
                  <p className="text-gray-700">Vos concurrents y sont déjà tous</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">Complexité technique</p>
                  <p className="text-gray-700">Créer des annonces, choisir des mots-clés, optimiser...</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-600 mb-2">ROI incertain</p>
                  <p className="text-gray-700">Difficile de mesurer le vrai retour sur investissement</p>
                </div>
              </div>
            </div>

            {/* Colonne Local Service Ads */}
            <div className="bg-green-50 border-2 border-green-400 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                ✅ Local Service Ads
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Paiement à l'appel</p>
                  <p className="text-gray-700">Vous payez uniquement quand on vous appelle</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">~30€ par appel qualifié</p>
                  <p className="text-gray-700">3x moins cher avec une meilleure qualité</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Position #1 garantie</p>
                  <p className="text-gray-700">Au-dessus de TOUT, même des pubs classiques</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Vous êtes seul</p>
                  <p className="text-gray-700">Profitez-en avant la saturation du marché</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">Zéro difficulté</p>
                  <p className="text-gray-700">On fait tout pour vous. Vous décrochez juste le téléphone.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-600 mb-2">ROI mesurable</p>
                  <p className="text-gray-700">Chaque euro dépensé est tracké au centime près</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton to="/contact">
              Je veux passer aux Local Service Ads
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SECTION BADGE GOOGLE GUARANTEE */}
      <section className="section bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-green-500">
                  <div className="text-center">
                    <div className="text-6xl mb-2">✓</div>
                    <p className="font-bold text-green-600">Google</p>
                    <p className="font-bold text-green-600">Garanti</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                🛡️ Vous devenez <span className="text-primary-purple">"Google Garanti"</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Quand vous activez les LSA, Google vous donne un badge de confiance.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-semibold text-xl mb-4">Résultat :</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span>Vos clients potentiels savent que Google vous a vérifié</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span>Vous êtes perçu comme plus fiable que vos concurrents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span>Votre taux de conversion explose</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl mt-6">
                  <p className="text-xl font-bold text-primary-purple">
                    Le badge = la crédibilité instantanée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CHIFFRES CLÉS */}
      <section className="section bg-dark-gray text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Les chiffres qui parlent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-purple mb-4">3x</div>
              <p className="text-xl">moins cher qu'une pub Google Ads classique</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-purple mb-4">25-40%</div>
              <p className="text-xl">de taux de conversion appel → client</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-purple mb-4">7 jours</div>
              <p className="text-xl">entre votre inscription et vos premiers appels</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à obtenir le badge Google Garanti ?
          </h2>
          <CTAButton to="/contact" variant="white" className="mb-6">
            Je veux le badge Google Garanti
          </CTAButton>
          <p className="text-xl">
            Audit gratuit • Sans engagement • Résultats en 7 jours
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyLSA;
