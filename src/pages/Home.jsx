import ROICalculator from '../components/ROICalculator';

const Home = () => {
  return (
    <div>
      {/* SECTION HERO */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pendant que vos concurrents paient des clics qui ne sonnent jamais,<br />
                <span className="text-primary-purple">vous ne payez que quand votre téléphone sonne.</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                La publicité qui fait sonner votre téléphone.<br />
                Pas votre budget qui s'évapore.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                99% des piscinistes ignorent encore cette méthode.<br />
                C'est exactement pour ça qu'elle fonctionne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-primary-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Réserver un appel stratégique (15 min)
                </a>
                <a
                  href="#calculateur"
                  className="border-2 border-primary-purple text-primary-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-purple hover:text-white transition-all duration-300 text-center"
                >
                  Calculer mon ROI potentiel
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="bg-primary-purple text-white p-6 rounded-xl mb-4">
                  <p className="text-sm font-semibold mb-2">📞 Nouvel appel entrant</p>
                  <p className="text-2xl font-bold">Construction piscine 18x9m</p>
                  <p className="text-3xl font-bold mt-2">Budget 55k€</p>
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
            Vous dépensez en publicité Facebook.<br />
            Vous testez Google Ads.<br />
            Peut-être même des flyers.
          </p>
          <p className="text-2xl md:text-4xl font-bold mb-6">
            Résultat ?
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Des "j'y pense".<br />
            Des "je vous rappelle".<br />
            Des fantômes.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Vous payez pour de l'espoir.<br />
            <span className="font-bold text-2xl">Pas pour des clients.</span>
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Pendant ce temps, un pisciniste —<br />
            celui qui n'a même pas de site web —<br />
            décroche 4 appels par jour.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary-purple mt-12">
            Pourquoi lui ?
          </p>
        </div>
      </section>

      {/* SECTION TRANSITION */}
      <section className="bg-primary-purple text-white section py-16">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Parce qu'il est là où vos clients cherchent.<br />
            Au-dessus de Google Maps.<br />
            Au-dessus des pubs.<br />
            Au-dessus de tout le monde.<br /><br />
            <span className="text-5xl">Littéralement.</span>
          </h2>
        </div>
      </section>

      {/* SECTION SOLUTION */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Local Service Ads : <span className="text-primary-purple">Vous monopolisez les appels de votre zone.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Colonne 1 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Zéro concurrence</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vous êtes le seul pisciniste de votre secteur à utiliser ce canal.<br /><br />
                Pas de guerre des enchères. Pas de surenchère.<br /><br />
                Juste vous, en première position.
              </p>
            </div>

            {/* Colonne 2 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Vous payez uniquement les appels</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Pas d'impression. Pas de clic.<br /><br />
                Si votre téléphone ne sonne pas, vous ne payez rien.<br /><br />
                Si l'appel n'est pas qualifié, Google vous rembourse.
              </p>
            </div>

            {/* Colonne 3 */}
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Vous suivez chaque euro</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Notre dashboard vous montre :<br />
                → Combien d'appels vous recevez<br />
                → Combien de contrats vous signez<br />
                → Combien vous gagnez vraiment<br /><br />
                Transparence totale.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#comment-ca-marche"
              className="bg-primary-purple text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Voir comment ça marche (2 min)
            </a>
          </div>
        </div>
      </section>

      {/* SECTION CALCULATEUR ROI */}
      <section id="calculateur" className="section bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <ROICalculator />
        </div>
      </section>

      {/* SECTION PREUVE SOCIALE */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pourquoi les Local Service Ads écrasent la concurrence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-200">
              <p className="text-lg font-semibold mb-4">📞 Coût par appel qualifié</p>
              <p className="text-5xl font-bold text-green-600 mb-2">30€</p>
              <p className="text-gray-600 text-center my-4">vs</p>
              <p className="text-3xl font-bold text-red-600">90€ par clic</p>
              <p className="text-gray-600 mt-2">Google Ads</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-green-700">Vous payez 3x moins.</p>
                <p className="text-gray-600">Et uniquement quand on vous appelle.</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <p className="text-lg font-semibold mb-4">⚡ Taux de conversion</p>
              <p className="text-5xl font-bold text-blue-600 mb-2">25-40%</p>
              <p className="text-gray-600">appel → RDV</p>
              <p className="text-gray-600 text-center my-4">vs</p>
              <p className="text-3xl font-bold text-red-600">7%</p>
              <p className="text-gray-600 mt-2">pub classique</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-blue-700">Vos prospects sont prêts à acheter.</p>
                <p className="text-gray-600">Pas à "se renseigner".</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-2 border-primary-purple">
              <p className="text-lg font-semibold mb-4">🎯 Position garantie</p>
              <p className="text-6xl font-bold text-primary-purple mb-4">#1</p>
              <p className="text-gray-600 mb-2">Au-dessus de Google Maps.</p>
              <p className="text-gray-600 mb-2">Au-dessus des pubs.</p>
              <p className="text-gray-600 mb-4">Au-dessus de tout.</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-primary-purple text-lg">
                  Vous êtes LE premier pisciniste qu'ils voient.
                </p>
              </div>
            </div>
          </div>

          {/* Badge Google Guarantee */}
          <div className="bg-gradient-to-br from-green-50 to-white p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border-2 border-green-300">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg">
                🛡️ Garanti par Google
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center mb-6">
              Vous ne vendez plus seulement des piscines.<br />
              Vous vendez de la confiance.
            </h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              Quand vous activez les LSA, Google vérifie votre entreprise<br />
              et vous donne le badge "Garanti par Google".
            </p>
            <div className="bg-white p-6 rounded-xl">
              <p className="font-semibold text-lg mb-4">Résultat :</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span className="text-gray-700">Vos prospects vous font confiance AVANT même de vous appeler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span className="text-gray-700">Vous êtes perçu comme plus sérieux que vos concurrents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span className="text-gray-700">Votre taux de conversion explose</span>
                </li>
              </ul>
              <p className="text-xl font-bold text-green-700 text-center mt-6">
                Le badge = la crédibilité instantanée. Et Google vous l'offre gratuitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="section bg-light-gray">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            3 étapes. 7 jours. <span className="text-primary-purple">Des appels.</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Pas de mise en place compliquée. Pas de jargon technique.<br />
            On fait le boulot. Vous décrochez le téléphone.
          </p>

          <div className="space-y-8">
            {/* ÉTAPE 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-primary-purple text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">🔍 On analyse votre marché (gratuit)</h3>
                  <p className="text-gray-700 text-lg mb-4">On regarde :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span className="text-gray-700">Le volume de recherches dans votre secteur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span className="text-gray-700">Si vos concurrents utilisent déjà les LSA (spoiler : non)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">→</span>
                      <span className="text-gray-700">Combien d'appels vous pourriez recevoir par mois</span>
                    </li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg mt-4">
                    <p className="font-bold text-primary-purple">
                      Vous savez EXACTEMENT ce que vous allez gagner avant de dépenser 1€.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ÉTAPE 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-primary-purple text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">⚙️ On configure tout pour vous</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Votre rôle :</strong> nous donner accès à votre compte Google Business.<br />
                    <strong>Notre rôle :</strong> tout le reste.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Optimisation complète de votre profil Google Maps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Création du compte Local Service Ads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Vérification et badge "Garanti par Google"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Paramétrage du tracking en temps réel</span>
                    </li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg mt-4">
                    <p className="font-bold">⏱️ Durée : 7 jours maximum.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ÉTAPE 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-primary-purple text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">📊 Vous suivez tout en direct</h3>
                  <p className="text-gray-700 text-lg mb-4">Notre dashboard vous montre :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">📞</span>
                      <span className="text-gray-700"><strong>Nombre d'appels reçus</strong> aujourd'hui</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">💰</span>
                      <span className="text-gray-700"><strong>Coût total</strong> payé à Google</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">🎯</span>
                      <span className="text-gray-700"><strong>Taux de conversion</strong> appel → client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">💵</span>
                      <span className="text-gray-700"><strong>CA généré</strong> grâce aux LSA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-purple mr-2">✅</span>
                      <span className="text-gray-700"><strong>Bénéfice net</strong> réel</span>
                    </li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg mt-4">
                    <p className="font-bold text-primary-purple">
                      Tout est mesurable. Rien n'est caché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="bg-primary-purple text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Réserver mon audit gratuit
            </a>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Les questions que vous vous posez
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi personne d'autre ne le fait ?",
                r: "Parce que Google vient d'ouvrir les Local Service Ads aux piscinistes.\n\nVous êtes en avance sur le marché.\nDans 6 mois, vos concurrents y seront aussi.\nMais vous aurez déjà 50 clients d'avance."
              },
              {
                q: "C'est quoi le piège ?",
                r: "Il n'y en a pas.\n\nVous payez quand votre téléphone sonne.\nSi l'appel n'est pas qualifié (spam, mauvais secteur), Google vous rembourse.\nAucun engagement. Vous pouvez arrêter quand vous voulez."
              },
              {
                q: "Ça prend combien de temps à mettre en place ?",
                r: "7 jours entre votre inscription et vos premiers appels.\n\nOn s'occupe de tout : optimisation, vérification, configuration.\nVous n'avez rien à faire sauf décrocher le téléphone."
              },
              {
                q: "Combien ça coûte vraiment ?",
                r: "Environ 30€ par appel qualifié (payé directement à Google).\n\nAucun abonnement. Aucun minimum.\nSi vous recevez 20 appels dans le mois, vous payez 600€.\nSi vous n'en recevez aucun, vous payez 0€."
              },
              {
                q: "Est-ce que ça marche vraiment ?",
                r: "Les chiffres parlent d'eux-mêmes :\n\nLe coût par lead des Local Service Ads pour les services à domicile est en moyenne de 30€, contre 90€ pour Google Ads classique.\n\nLe taux de conversion moyen est de 25-40% (appels → clients), contre 7% pour la publicité traditionnelle.\n\nVous payez moins. Vous convertissez plus."
              },
              {
                q: "Je ne suis pas fort en technologie, c'est compliqué ?",
                r: "Non. Vous ne touchez à rien.\n\nOn configure tout. Vous recevez un lien vers votre dashboard.\nVous cliquez. Vous voyez vos stats. C'est tout."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-light-gray p-6 rounded-xl group">
                <summary className="text-xl font-bold cursor-pointer list-none flex justify-between items-center">
                  <span>❓ "{faq.q}"</span>
                  <span className="text-primary-purple group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-lg text-gray-700 whitespace-pre-line border-t border-gray-300 pt-4">
                  → {faq.r}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CTA FINAL */}
      <section id="contact" className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à recevoir des appels qualifiés<br />
            au lieu de payer des clics qui ne convertissent pas ?
          </h2>
          <p className="text-xl mb-8">
            Réservez un appel stratégique de 15 minutes.<br />
            Pas de blabla commercial.<br />
            Juste une analyse de votre marché et une estimation du nombre d'appels<br />
            que vous pourriez recevoir chaque mois.
          </p>
          <p className="text-2xl font-bold mb-8">
            Gratuit. Sans engagement.
          </p>

          <div className="bg-white text-dark-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">📅 Choisissez votre créneau</h3>
            {/* Calendly inline widget begin */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/agence-celexia/decouverte" style={{minWidth:'320px',height:'700px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-xl mb-4">Vous préférez qu'on vous appelle ?</p>
            <p className="text-lg">
              📧 contact@agence-celexia.fr<br />
              📞 +33 X XX XX XX XX
            </p>
            <p className="text-sm mt-4 opacity-90">Réponse sous 24h maximum.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
