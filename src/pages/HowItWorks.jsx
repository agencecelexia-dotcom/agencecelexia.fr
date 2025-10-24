import CTAButton from '../components/CTAButton';

const HowItWorks = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            3 étapes. 7 jours. <span className="text-primary-purple">Des appels.</span>
          </h1>
          <p className="text-2xl text-gray-600">
            Pas de mise en place compliquée. Pas de jargon technique.<br />
            On fait le boulot. Vous décrochez le téléphone.
          </p>
        </div>
      </section>

      {/* ÉTAPE 1 */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-purple text-white text-2xl font-bold px-6 py-3 rounded-full mb-6">
                ÉTAPE 1
              </div>
              <h2 className="text-4xl font-bold mb-6">
                🔍 On analyse votre zone
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-semibold text-xl">On regarde :</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">•</span>
                    <span>Le volume de recherches "pisciniste" dans votre secteur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">•</span>
                    <span>Si vos concurrents utilisent déjà les LSA (spoiler : probablement pas)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">•</span>
                    <span>Le potentiel d'appels mensuels estimé</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-6 rounded-xl mt-6">
                  <p className="text-xl font-bold text-primary-purple">
                    Résultat : vous savez EXACTEMENT combien d'appels vous pourriez recevoir
                    avant même de dépenser 1€.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-4">📍 Analyse de marché - Votre Ville</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Recherches mensuelles</span>
                    <span className="font-bold text-2xl text-primary-purple">820</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Concurrents utilisant LSA</span>
                    <span className="font-bold text-2xl text-green-600">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Appels estimés/mois</span>
                    <span className="font-bold text-2xl text-primary-purple">25-35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTAPE 2 */}
      <section className="section bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4">✅ Checklist de configuration</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Optimisation Google Maps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Création compte LSA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Vérification Google</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Configuration tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Paramétrage zone géographique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                    <span>Activation alertes d'appel</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-primary-purple text-white text-2xl font-bold px-6 py-3 rounded-full mb-6">
                ÉTAPE 2
              </div>
              <h2 className="text-4xl font-bold mb-6">
                ⚙️ On configure tout pour vous
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-semibold text-xl">Votre rôle :</p>
                <p>Nous donner accès à votre compte Google Business.</p>

                <p className="font-semibold text-xl mt-6">Notre rôle :</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span>Optimisation complète de votre profil Google Maps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span>Création et vérification de votre compte Local Service Ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span>Configuration du tracking (pour que vous voyiez tout en temps réel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span>Paramétrage de votre zone géographique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span>Activation des alertes d'appel</span>
                  </li>
                </ul>

                <div className="bg-purple-50 p-6 rounded-xl mt-6">
                  <p className="font-bold">⏱️ Durée : 7 jours maximum</p>
                  <p className="font-bold mt-2">💰 Coût : Frais de mise en place uniquement (200€)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTAPE 3 */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-purple text-white text-2xl font-bold px-6 py-3 rounded-full mb-6">
                ÉTAPE 3
              </div>
              <h2 className="text-4xl font-bold mb-6">
                📊 Vous suivez chaque euro
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-semibold text-xl">Notre dashboard vous montre :</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">📞</span>
                    <span><strong>Nombre d'appels reçus</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">💰</span>
                    <span><strong>Montant facturé par Google</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">🎯</span>
                    <span><strong>Taux de conversion appel → client</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">💵</span>
                    <span><strong>CA généré</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-purple mr-2">✅</span>
                    <span><strong>Bénéfice net</strong> (CA - coût Google)</span>
                  </li>
                </ul>

                <div className="bg-purple-50 p-6 rounded-xl mt-6">
                  <p className="text-xl font-bold text-primary-purple">
                    Tout est transparent. Tout est mesurable.<br />
                    Vous savez toujours si c'est rentable.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-purple to-purple-500 p-8 rounded-xl text-white">
              <h3 className="font-bold text-2xl mb-6">📈 Dashboard en temps réel</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-sm opacity-90">Appels ce mois</p>
                  <p className="text-4xl font-bold">28</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-sm opacity-90">Coût Google</p>
                  <p className="text-4xl font-bold">840€</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-sm opacity-90">Clients signés</p>
                  <p className="text-4xl font-bold">11</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
                  <p className="text-sm opacity-90">CA généré</p>
                  <p className="text-4xl font-bold">385k€</p>
                </div>
              </div>
              <div className="bg-green-500 p-6 rounded-lg mt-6 text-center">
                <p className="text-sm opacity-90">ROI</p>
                <p className="text-5xl font-bold">457x</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à démarrer ?
          </h2>
          <CTAButton to="/contact" variant="white">
            Je veux commencer maintenant
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
