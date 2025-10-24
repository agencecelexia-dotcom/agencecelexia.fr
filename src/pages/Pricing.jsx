import CTAButton from '../components/CTAButton';

const Pricing = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pas d'abonnement. Pas de surprise.<br />
            <span className="text-primary-purple">Juste des résultats.</span>
          </h1>
          <p className="text-2xl text-gray-600">
            Transparence totale sur nos tarifs
          </p>
        </div>
      </section>

      {/* SECTION TARIFS */}
      <section className="section bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TARIF 1 - Frais de mise en place */}
            <div className="bg-gradient-to-br from-primary-purple to-purple-500 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">💰 Frais de mise en place</h2>
                <div className="text-6xl font-bold mb-2">200€</div>
                <p className="text-xl opacity-90">HT (paiement unique)</p>
              </div>

              <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Ce qui est inclus :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Audit complet de votre marché</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Optimisation Google Maps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Configuration Local Service Ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Vérification et badge Google Garanti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Paramétrage du dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Formation 15 min sur le suivi</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg font-semibold">⏱️ Durée d'installation : 7 jours max.</p>
              </div>
            </div>

            {/* TARIF 2 - Coût des appels */}
            <div className="bg-white border-4 border-primary-purple p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-primary-purple">💵 Coût des appels</h2>
                <div className="text-6xl font-bold mb-2 text-dark-gray">~30€</div>
                <p className="text-xl text-gray-600">par appel qualifié</p>
              </div>

              <div className="bg-light-gray p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Vous payez uniquement quand votre téléphone sonne.
                </p>
                <p className="text-lg font-semibold text-primary-purple">
                  Si l'appel n'est pas qualifié → Google vous rembourse.
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-500 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-green-700">🎯 Avantages :</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Aucun engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Aucun minimum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Vous pouvez arrêter quand vous voulez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Facturé directement par Google</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 italic">
                  Paiement géré directement par Google Ads
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton to="/contact">
              Réserver mon audit gratuit
            </CTAButton>
            <p className="text-gray-600 mt-4">
              L'audit est gratuit. Sans engagement.<br />
              On vous montre le potentiel. Vous décidez.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION OPTION FUTURE */}
      <section className="section bg-light-gray">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">🚀</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Gestion complète</h2>
                <p className="text-gray-600 text-lg">(disponible après 3 mois)</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Pour les piscinistes qui veulent déléguer à 100% :
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary-purple mr-2">•</span>
                <span className="text-gray-700">Optimisation continue des annonces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-purple mr-2">•</span>
                <span className="text-gray-700">Ajustement des zones géographiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-purple mr-2">•</span>
                <span className="text-gray-700">Suivi avancé et reporting mensuel</span>
              </li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-lg font-semibold text-primary-purple">
                → Sur devis après évaluation de vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION COMPARAISON PRIX */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Combien ça coûte vraiment ?
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Exemple concret sur 1 mois :</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-lg font-semibold">Frais de mise en place (une fois)</span>
                <span className="text-2xl font-bold text-primary-purple">200€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-lg font-semibold">28 appels × 30€</span>
                <span className="text-2xl font-bold text-primary-purple">840€</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-400 pb-3">
                <span className="text-lg font-semibold">Coût total mois 1</span>
                <span className="text-2xl font-bold text-gray-700">1 040€</span>
              </div>
              <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg mt-6">
                <span className="text-xl font-bold">CA généré</span>
                <span className="text-3xl font-bold text-green-600">385 000€</span>
              </div>
              <div className="flex justify-between items-center bg-green-500 text-white p-6 rounded-lg">
                <span className="text-xl font-bold">Bénéfice net</span>
                <span className="text-4xl font-bold">383 960€</span>
              </div>
            </div>

            <div className="bg-primary-purple text-white p-6 rounded-xl text-center">
              <p className="text-lg mb-2">ROI</p>
              <p className="text-5xl font-bold mb-2">369x</p>
              <p className="text-lg">Pour chaque euro investi, vous gagnez 369€</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              💡 À partir du mois 2, il n'y a plus que le coût des appels (~840€/mois).
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à investir 200€ pour gagner 380 000€ ?
          </h2>
          <CTAButton to="/contact" variant="white" className="mb-6">
            Réserver mon audit gratuit
          </CTAButton>
          <p className="text-xl">
            Pas de frais cachés • Pas d'abonnement • Pas de surprise
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
