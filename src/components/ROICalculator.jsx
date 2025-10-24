import { useState } from 'react';

const ROICalculator = () => {
  const [appelsParMois, setAppelsParMois] = useState(30);
  const [tauxDevis, setTauxDevis] = useState(50);
  const [tauxClient, setTauxClient] = useState(30);
  const [valeurContrat, setValeurContrat] = useState(45000);
  const [showResults, setShowResults] = useState(false);

  const coutParAppel = 30;
  const coutTotal = appelsParMois * coutParAppel;
  const nombreDevis = appelsParMois * (tauxDevis / 100);
  const nombreClients = nombreDevis * (tauxClient / 100);
  const CA = nombreClients * valeurContrat;
  const beneficeNet = CA - coutTotal;
  const ROI = Math.round(beneficeNet / coutTotal);

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Combien vous pourriez gagner ?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Calculez votre retour sur investissement en 30 secondes.
        </p>

        {/* Formulaire */}
        <div className="space-y-8">
          {/* Slider 1 */}
          <div>
            <label className="flex items-center text-lg font-semibold mb-4">
              <span className="text-2xl mr-3">📞</span>
              Combien d'appels par mois souhaitez-vous recevoir ?
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={appelsParMois}
              onChange={(e) => setAppelsParMois(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-purple"
            />
            <div className="text-center mt-2">
              <span className="text-3xl font-bold text-primary-purple">{appelsParMois}</span>
              <span className="text-gray-600 ml-2">appels/mois</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <label className="flex items-center text-lg font-semibold mb-4">
              <span className="text-2xl mr-3">📋</span>
              Sur 10 appels, combien deviennent des devis ?
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={tauxDevis}
              onChange={(e) => setTauxDevis(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-purple"
            />
            <div className="text-center mt-2">
              <span className="text-3xl font-bold text-primary-purple">{Math.round(tauxDevis / 10)}</span>
              <span className="text-gray-600 ml-2">devis ({tauxDevis}%)</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <label className="flex items-center text-lg font-semibold mb-4">
              <span className="text-2xl mr-3">✅</span>
              Sur 10 devis, combien deviennent des clients ?
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={tauxClient}
              onChange={(e) => setTauxClient(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-purple"
            />
            <div className="text-center mt-2">
              <span className="text-3xl font-bold text-primary-purple">{Math.round(tauxClient / 10)}</span>
              <span className="text-gray-600 ml-2">clients ({tauxClient}%)</span>
            </div>
          </div>

          {/* Input 4 */}
          <div>
            <label className="flex items-center text-lg font-semibold mb-4">
              <span className="text-2xl mr-3">💵</span>
              Valeur moyenne d'un contrat piscine ?
            </label>
            <div className="relative">
              <input
                type="number"
                value={valeurContrat}
                onChange={(e) => setValeurContrat(Number(e.target.value))}
                className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">€</span>
            </div>
          </div>

          {/* Bouton Calculer */}
          <button
            onClick={handleCalculate}
            className="w-full bg-primary-purple text-white py-5 rounded-lg text-xl font-bold hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Calculer mon ROI
          </button>
        </div>

        {/* Résultats */}
        {showResults && (
          <div className="mt-12 animate-fadeIn">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-primary-purple">
              <h3 className="text-2xl font-bold mb-6 text-center">📊 VOS RÉSULTATS</h3>

              <p className="text-center text-lg mb-6 text-gray-700">
                Avec <span className="font-bold text-primary-purple">{appelsParMois} appels par mois</span> :
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="text-gray-700">💰 Coût total Google :</span>
                  <span className="text-2xl font-bold">{coutTotal.toLocaleString()}€/mois</span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="text-gray-700">✅ Clients gagnés :</span>
                  <span className="text-2xl font-bold text-green-600">{nombreClients.toFixed(1)} clients/mois</span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="text-gray-700">💵 Chiffre d'affaires généré :</span>
                  <span className="text-2xl font-bold text-blue-600">{CA.toLocaleString()}€/mois</span>
                </div>

                <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">🚀 Bénéfice net :</span>
                    <span className="text-3xl font-bold">{beneficeNet.toLocaleString()}€/mois</span>
                  </div>
                  <div className="text-center mt-4 pt-4 border-t border-white/30">
                    <p className="text-sm opacity-90 mb-2">ROI (Retour sur investissement)</p>
                    <p className="text-5xl font-bold">{ROI}x</p>
                    <p className="text-sm opacity-90 mt-2">Pour chaque euro dépensé, vous gagnez {ROI}€</p>
                  </div>
                </div>
              </div>

              {/* Projection 12 mois */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4 text-center">📈 Projection sur 12 mois</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Mois 1</p>
                    <p className="text-xl font-bold text-primary-purple">
                      +{beneficeNet.toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Mois 3</p>
                    <p className="text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 3).toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Mois 6</p>
                    <p className="text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 6).toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Mois 12</p>
                    <p className="text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 12).toLocaleString()}€
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA après résultats */}
            <div className="text-center mt-8">
              <p className="text-xl font-semibold mb-4">Ces chiffres vous parlent ?</p>
              <a
                href="#contact"
                className="inline-block bg-primary-purple text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Réserver un audit gratuit de mon marché
              </a>
              <p className="text-sm text-gray-600 mt-3">
                On vous montre le potentiel réel de votre zone
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
