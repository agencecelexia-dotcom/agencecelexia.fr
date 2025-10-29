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

  const handleContratChange = (e) => {
    const value = e.target.value;

    // Si vide, mettre 0
    if (value === '') {
      setValeurContrat(0);
      return;
    }

    // Filtrer pour garder seulement les chiffres
    const numericValue = value.replace(/[^0-9]/g, '');

    // Convertir en nombre (supprime automatiquement les zéros en préfixe)
    const numberValue = parseInt(numericValue, 10);

    // Si c'est un nombre valide, l'utiliser, sinon mettre 0
    if (!isNaN(numberValue)) {
      setValeurContrat(numberValue);
    } else {
      setValeurContrat(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Combien vous pourriez gagner ?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-8 md:mb-12">
          Calculez votre retour sur investissement en 30 secondes.
        </p>

        {/* Formulaire */}
        <div className="space-y-6 md:space-y-8">
          {/* Slider 1 */}
          <div>
            <label className="flex items-start md:items-center text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4">
              <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">📞</span>
              <span>Combien d'appels par mois souhaitez-vous recevoir ?</span>
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
              <span className="text-2xl md:text-3xl font-bold text-primary-purple">{appelsParMois}</span>
              <span className="text-sm md:text-base text-gray-600 ml-2">appels/mois</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <label className="flex items-start md:items-center text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4">
              <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">📋</span>
              <span>Sur 100 appels, combien deviennent des devis ?</span>
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
              <span className="text-2xl md:text-3xl font-bold text-primary-purple">{tauxDevis}</span>
              <span className="text-sm md:text-base text-gray-600 ml-2">devis ({tauxDevis}%)</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <label className="flex items-start md:items-center text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4">
              <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">✅</span>
              <span>Sur 100 devis, combien deviennent des clients ?</span>
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
              <span className="text-2xl md:text-3xl font-bold text-primary-purple">{tauxClient}</span>
              <span className="text-sm md:text-base text-gray-600 ml-2">clients ({tauxClient}%)</span>
            </div>
          </div>

          {/* Input 4 */}
          <div>
            <label className="flex items-start md:items-center text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4">
              <span className="text-xl md:text-2xl mr-2 md:mr-3 flex-shrink-0">💵</span>
              <span>Valeur moyenne d'un contrat piscine ?</span>
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={valeurContrat === 0 ? '' : valeurContrat}
                onChange={handleContratChange}
                placeholder="45000"
                className="w-full px-4 md:px-6 py-3 md:py-4 text-xl md:text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
              />
              <span className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl text-gray-600">€</span>
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
          <div className="mt-8 md:mt-12 animate-fadeIn">
            <div className="bg-gradient-to-br from-purple-50 to-white p-4 md:p-6 lg:p-8 rounded-xl border-2 border-primary-purple">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">📊 VOS RÉSULTATS</h3>

              <p className="text-center text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-gray-700">
                Avec <span className="font-bold text-primary-purple">{appelsParMois} appels par mois</span> :
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-sm md:text-base text-gray-700">💰 Coût total Google :</span>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">{coutTotal.toLocaleString()}€/mois</span>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-sm md:text-base text-gray-700">✅ Clients gagnés :</span>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">{nombreClients.toFixed(1)} clients/mois</span>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-sm md:text-base text-gray-700">💵 Chiffre d'affaires généré :</span>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">{CA.toLocaleString()}€/mois</span>
                </div>

                <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 md:mb-2">
                    <span className="text-base md:text-lg font-semibold">🚀 Bénéfice net :</span>
                    <span className="text-2xl md:text-3xl font-bold">{beneficeNet.toLocaleString()}€/mois</span>
                  </div>
                  <div className="text-center mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/30">
                    <p className="text-xs md:text-sm opacity-90 mb-2">ROI (Retour sur investissement)</p>
                    <p className="text-4xl md:text-5xl font-bold">{ROI}x</p>
                    <p className="text-xs md:text-sm opacity-90 mt-2">Pour chaque euro dépensé, vous gagnez {ROI}€</p>
                  </div>
                </div>
              </div>

              {/* Projection 12 mois */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-center">📈 Projection sur 12 mois</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  <div className="text-center p-2 md:p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Mois 1</p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-primary-purple">
                      +{beneficeNet.toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Mois 3</p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 3).toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Mois 6</p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 6).toLocaleString()}€
                    </p>
                  </div>
                  <div className="text-center p-2 md:p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Mois 12</p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-primary-purple">
                      +{(beneficeNet * 12).toLocaleString()}€
                    </p>
                  </div>
                </div>

                {/* Graphique de projection */}
                <div className="mt-6 bg-gradient-to-br from-purple-50 to-white p-4 md:p-6 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-base md:text-lg mb-4 text-center text-gray-800">
                    📊 Évolution de vos bénéfices cumulés
                  </h4>

                  <div className="relative h-64 md:h-80">
                    {/* Graphique SVG */}
                    <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
                      {/* Grille horizontale */}
                      <line x1="50" y1="250" x2="580" y2="250" stroke="#E5E7EB" strokeWidth="1"/>
                      <line x1="50" y1="200" x2="580" y2="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5"/>
                      <line x1="50" y1="150" x2="580" y2="150" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5"/>
                      <line x1="50" y1="100" x2="580" y2="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5"/>
                      <line x1="50" y1="50" x2="580" y2="50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5"/>

                      {/* Axe Y */}
                      <line x1="50" y1="20" x2="50" y2="250" stroke="#9CA3AF" strokeWidth="2"/>
                      {/* Axe X */}
                      <line x1="50" y1="250" x2="580" y2="250" stroke="#9CA3AF" strokeWidth="2"/>

                      {/* Labels Y */}
                      <text x="40" y="255" textAnchor="end" className="text-xs fill-gray-600">0€</text>
                      <text x="40" y="55" textAnchor="end" className="text-xs fill-gray-600">{Math.round(beneficeNet * 12 / 1000)}k€</text>

                      {/* Barres */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
                        const maxValue = beneficeNet * 12;
                        const currentValue = beneficeNet * month;
                        const barHeight = (currentValue / maxValue) * 200;
                        const x = 70 + (month - 1) * 42;
                        const y = 250 - barHeight;

                        return (
                          <g key={month}>
                            {/* Barre */}
                            <rect
                              x={x}
                              y={y}
                              width="35"
                              height={barHeight}
                              fill="#A78BFA"
                              className="hover:opacity-80 transition-opacity"
                              rx="4"
                            />
                            {/* Label mois */}
                            <text
                              x={x + 17.5}
                              y="270"
                              textAnchor="middle"
                              className="text-xs fill-gray-600"
                              fontSize="11"
                            >
                              M{month}
                            </text>
                            {/* Valeur au-dessus */}
                            {month % 3 === 0 && (
                              <text
                                x={x + 17.5}
                                y={y - 5}
                                textAnchor="middle"
                                className="text-xs fill-primary-purple font-semibold"
                                fontSize="10"
                              >
                                {Math.round(currentValue / 1000)}k
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <p className="text-center text-xs md:text-sm text-gray-600 mt-4">
                    💰 Bénéfice cumulé total sur 12 mois : <span className="font-bold text-primary-purple text-sm md:text-base">{(beneficeNet * 12).toLocaleString()}€</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA après résultats */}
            <div className="text-center mt-6 md:mt-8">
              <p className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4">Ces chiffres vous parlent ?</p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-block bg-primary-purple text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Réserver un audit gratuit de mon marché
              </button>
              <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3">
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
