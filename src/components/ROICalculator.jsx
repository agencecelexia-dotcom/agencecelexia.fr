import { useState, useContext } from 'react';
import { NicheContext, NICHES } from '../context/NicheContext';

const ROICalculator = () => {
  const { niche, handleNicheChange } = useContext(NicheContext);
  const [appelsParMois, setAppelsParMois] = useState(20);
  const [tauxDevis, setTauxDevis] = useState(50);
  const [tauxClient, setTauxClient] = useState(30);
  const [valeurContrat, setValeurContrat] = useState(10000);
  const [showResults, setShowResults] = useState(false);

  const coutParAppel = NICHES[niche].prix;
  const coutTotal = appelsParMois * coutParAppel;
  const nombreDevis = appelsParMois * (tauxDevis / 100);
  const nombreClients = nombreDevis * (tauxClient / 100);
  const CA = nombreClients * valeurContrat;
  const beneficeNet = CA - coutTotal;
  const ROI = Math.round(beneficeNet / coutTotal);

  const handleCalculate = () => setShowResults(true);

  const handleContratChange = (e) => {
    const value = e.target.value;
    if (value === '') { setValeurContrat(0); return; }
    const numericValue = value.replace(/[^0-9]/g, '');
    const numberValue = parseInt(numericValue, 10);
    if (!isNaN(numberValue)) { setValeurContrat(numberValue); } else { setValeurContrat(0); }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card p-6 md:p-10 lg:p-14 border-gray-200">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="tag mb-4 inline-block">Simulateur</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Combien vous pourriez gagner ?
          </h2>
          <p className="text-gray-600 text-lg">
            Calculez votre retour sur investissement en 30 secondes.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8 md:space-y-10">
          {/* Niche selector */}
          <div>
            <label className="flex items-center text-sm font-semibold mb-3 text-gray-700">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-600 mr-3 text-xs font-bold">1</span>
              Quel est votre secteur d'activité ?
            </label>
            <select
              value={niche}
              onChange={(e) => handleNicheChange(e.target.value)}
              className="w-full px-4 py-3.5 text-[15px] bg-white border border-gray-200 rounded-xl
                         text-gray-900 font-medium
                         focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100
                         transition-all duration-200 cursor-pointer"
            >
              {Object.entries(NICHES).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label} - {value.prix}€ par appel
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-2">
              Prix par appel : <span className="font-bold text-violet-600">{coutParAppel}€</span>
            </p>
          </div>

          {/* Slider 1 */}
          <div>
            <label className="flex items-center text-sm font-semibold mb-3 text-gray-700">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-600 mr-3 text-xs font-bold">2</span>
              Combien d'appels par mois souhaitez-vous recevoir ?
            </label>
            <input
              type="range" min="10" max="100" value={appelsParMois}
              onChange={(e) => setAppelsParMois(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2">
              <span className="font-display text-3xl font-bold text-violet-600">{appelsParMois}</span>
              <span className="text-sm text-gray-500 ml-2">appels/mois</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <label className="flex items-center text-sm font-semibold mb-3 text-gray-700">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-600 mr-3 text-xs font-bold">3</span>
              Sur 100 appels, combien deviennent des devis ?
            </label>
            <input
              type="range" min="10" max="100" value={tauxDevis}
              onChange={(e) => setTauxDevis(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2">
              <span className="font-display text-3xl font-bold text-violet-600">{tauxDevis}</span>
              <span className="text-sm text-gray-500 ml-2">devis ({tauxDevis}%)</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <label className="flex items-center text-sm font-semibold mb-3 text-gray-700">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-600 mr-3 text-xs font-bold">4</span>
              Sur 100 devis, combien deviennent des clients ?
            </label>
            <input
              type="range" min="10" max="100" value={tauxClient}
              onChange={(e) => setTauxClient(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2">
              <span className="font-display text-3xl font-bold text-violet-600">{tauxClient}</span>
              <span className="text-sm text-gray-500 ml-2">clients ({tauxClient}%)</span>
            </div>
          </div>

          {/* Contract value */}
          <div>
            <label className="flex items-center text-sm font-semibold mb-3 text-gray-700">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-600 mr-3 text-xs font-bold">5</span>
              Valeur moyenne d'un contrat ?
            </label>
            <div className="relative">
              <input
                type="text" inputMode="numeric"
                value={valeurContrat === 0 ? '' : valeurContrat}
                onChange={handleContratChange}
                placeholder="45000"
                className="w-full px-4 py-3.5 text-2xl font-bold text-center bg-white border border-gray-200 rounded-xl
                           text-gray-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100
                           transition-all duration-200"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500 font-bold">€</span>
            </div>
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            className="w-full btn-primary py-4 rounded-xl text-base"
          >
            Calculer mon ROI
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="mt-12 animate-fade-up">
            <div className="rounded-2xl border border-violet-200 bg-violet-50/30 p-6 md:p-8">
              <div className="text-center mb-6">
                <span className="tag mb-3 inline-block">Résultats</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900">Vos résultats</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Secteur : <span className="text-violet-600 font-semibold">{NICHES[niche].label}</span> |
                  <span className="text-violet-600 font-semibold"> {appelsParMois} appels/mois</span>
                </p>
              </div>

              <div className="space-y-2.5 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5
                               bg-violet-100/50 border border-violet-200/60 p-4 rounded-xl">
                  <span className="text-sm text-gray-600">Prix par appel</span>
                  <span className="text-lg font-bold text-violet-600">{coutParAppel}€</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5
                               bg-white p-4 rounded-xl border border-gray-200/80">
                  <span className="text-sm text-gray-600">Coût total Google</span>
                  <span className="text-lg font-bold text-gray-900">{coutTotal.toLocaleString()}€/mois</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5
                               bg-white p-4 rounded-xl border border-gray-200/80">
                  <span className="text-sm text-gray-600">Clients gagnés</span>
                  <span className="text-lg font-bold text-emerald-600">{nombreClients.toFixed(1)} clients/mois</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5
                               bg-white p-4 rounded-xl border border-gray-200/80">
                  <span className="text-sm text-gray-600">Chiffre d'affaires généré</span>
                  <span className="text-lg font-bold text-blue-600">{CA.toLocaleString()}€/mois</span>
                </div>

                {/* Net benefit */}
                <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                    <span className="font-medium">Bénéfice net</span>
                    <span className="text-2xl md:text-3xl font-bold">{beneficeNet.toLocaleString()}€/mois</span>
                  </div>
                  <div className="text-center pt-4 border-t border-white/20">
                    <p className="text-xs text-emerald-200 mb-1 uppercase tracking-wider">Retour sur investissement</p>
                    <p className="font-display text-5xl font-bold">{ROI}x</p>
                    <p className="text-sm text-emerald-200 mt-1">Pour chaque euro dépensé, vous gagnez {ROI}€</p>
                  </div>
                </div>
              </div>

              {/* Projection */}
              <div className="bg-white p-5 rounded-xl border border-gray-200/80">
                <h4 className="font-semibold text-sm mb-4 text-center text-gray-900">
                  Projection sur 12 mois
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[1, 3, 6, 12].map((month) => (
                    <div key={month} className="text-center p-3 bg-gray-50 rounded-xl">
                      <p className="text-xs text-gray-500 mb-1">Mois {month}</p>
                      <p className="font-display text-lg font-bold text-violet-600">
                        +{(beneficeNet * month).toLocaleString()}€
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-5 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs text-gray-500 mb-3 text-center uppercase tracking-wider font-medium">
                    Évolution des bénéfices cumulés
                  </p>
                  <div className="relative h-48 md:h-60">
                    <svg className="w-full h-full" viewBox="0 0 600 260" preserveAspectRatio="xMidYMid meet">
                      {[230, 185, 140, 95, 50].map((y) => (
                        <line key={y} x1="50" y1={y} x2="580" y2={y} stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4,4" />
                      ))}
                      <line x1="50" y1="230" x2="580" y2="230" stroke="#D1D5DB" strokeWidth="1" />
                      <text x="40" y="235" textAnchor="end" fill="#9CA3AF" fontSize="10">0€</text>
                      <text x="40" y="55" textAnchor="end" fill="#9CA3AF" fontSize="10">{Math.round(beneficeNet * 12 / 1000)}k€</text>

                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
                        const maxValue = beneficeNet * 12;
                        const currentValue = beneficeNet * month;
                        const barHeight = (currentValue / maxValue) * 180;
                        const x = 65 + (month - 1) * 43;
                        const y = 230 - barHeight;

                        return (
                          <g key={month}>
                            <defs>
                              <linearGradient id={`vbar-${month}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#7C3AED" />
                              </linearGradient>
                            </defs>
                            <rect
                              x={x} y={y} width="32" height={barHeight}
                              fill={`url(#vbar-${month})`}
                              rx="4"
                              style={{ opacity: 0.6 + (month / 12) * 0.4 }}
                            />
                            <text x={x + 16} y="248" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                              M{month}
                            </text>
                            {month % 3 === 0 && (
                              <text x={x + 16} y={y - 6} textAnchor="middle" fill="#7C3AED" fontSize="10" fontWeight="600">
                                {Math.round(currentValue / 1000)}k
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Bénéfice cumulé sur 12 mois : <span className="font-bold text-violet-600">{(beneficeNet * 12).toLocaleString()}€</span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <p className="text-base font-semibold text-gray-900 mb-4">Ces chiffres vous parlent ?</p>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="btn-primary px-8 py-4 rounded-xl text-base arrow-animate"
                >
                  Réserver un audit gratuit
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  On vous montre le potentiel réel de votre zone
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
