const Contact = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-white section">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à recevoir <span className="text-primary-purple">vos premiers appels ?</span>
          </h1>
          <p className="text-2xl text-gray-600">
            Réservez votre audit gratuit. 15 minutes. Zéro engagement.<br />
            On analyse votre marché et on vous dit exactement ce que vous pourriez gagner.
          </p>
        </div>
      </section>

      {/* SECTION CALENDLY + INFO */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne gauche - Calendly */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                📅 Choisissez un créneau qui vous arrange
              </h2>

              {/* Calendly Embed Placeholder */}
              <div className="bg-light-gray border-2 border-primary-purple rounded-xl p-12 text-center min-h-[600px] flex items-center justify-center">
                <div>
                  <div className="text-6xl mb-6">📆</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-purple">
                    Widget Calendly
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Intégrez votre lien Calendly ici pour permettre<br />
                    aux clients de réserver directement un créneau.
                  </p>
                  <div className="bg-white p-6 rounded-lg text-left max-w-md mx-auto">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Pour intégrer Calendly :</strong>
                    </p>
                    <ol className="text-sm text-gray-600 list-decimal list-inside space-y-2">
                      <li>Créez un compte sur calendly.com</li>
                      <li>Configurez votre événement (15 min audit)</li>
                      <li>Copiez le code d'intégration</li>
                      <li>Remplacez cette div par le widget</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Instructions pour intégrer Calendly - À supprimer après intégration */}
              <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Note technique :</strong> Pour intégrer votre vrai calendrier Calendly,
                  remplacez la div ci-dessus par le code d'intégration fourni par Calendly.
                  Exemple : <code className="bg-white px-2 py-1 rounded">{'<InlineWidget url="https://calendly.com/votre-lien" />'}</code>
                </p>
              </div>
            </div>

            {/* Colonne droite - Informations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ce qui va se passer :
              </h2>

              <div className="space-y-6">
                {/* Étape 1 */}
                <div className="bg-light-gray p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Analyse de votre zone</h3>
                      <p className="text-gray-700">
                        On vérifie le volume de recherches "pisciniste" dans votre secteur
                        et si vos concurrents utilisent déjà les LSA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-light-gray p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Estimation du potentiel</h3>
                      <p className="text-gray-700">
                        On vous donne une estimation du nombre d'appels qualifiés
                        que vous pourriez recevoir chaque mois.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-light-gray p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Plan d'action personnalisé</h3>
                      <p className="text-gray-700">
                        Si le potentiel est là, on vous explique comment on peut
                        mettre en place votre campagne en 7 jours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="mt-8 bg-green-50 border-2 border-green-500 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-green-700">✅ Nos garanties :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Audit 100% gratuit, sans engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Pas de blabla commercial, que des chiffres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Durée : 15 minutes maximum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Résultats concrets et mesurables</span>
                  </li>
                </ul>
              </div>

              {/* Témoignage */}
              <div className="mt-8 bg-white border-2 border-gray-200 p-6 rounded-xl">
                <p className="text-lg italic text-gray-700 mb-4">
                  "L'audit m'a ouvert les yeux sur le potentiel de ma zone.
                  J'ai signé le jour même."
                </p>
                <p className="font-bold">— Pierre M., Piscines & Spa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT ALTERNATIF */}
      <section className="section bg-light-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Pas disponible pour un appel maintenant ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <a
                href="mailto:contact@localserviceads.fr"
                className="text-primary-purple text-xl hover:underline"
              >
                contact@localserviceads.fr
              </a>
              <p className="text-gray-600 mt-4">
                Envoyez-nous un message,<br />on vous répond dans les 24h.
              </p>
            </div>

            {/* Téléphone */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Téléphone</h3>
              <a
                href="tel:+33XXXXXXXXX"
                className="text-primary-purple text-xl hover:underline"
              >
                +33 X XX XX XX XX
              </a>
              <p className="text-gray-600 mt-4">
                Laissez-nous un message,<br />on vous rappelle rapidement.
              </p>
            </div>
          </div>

          {/* Formulaire de contact simple */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Ou remplissez ce formulaire rapide
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ville *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
                    placeholder="Paris"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-purple text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Envoyer ma demande
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section bg-primary-purple text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions avant de réserver ?
          </h2>
          <p className="text-xl mb-8">
            Consultez notre FAQ ou contactez-nous directement.
            On est là pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#faq"
              className="bg-white text-primary-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Voir la FAQ
            </a>
            <a
              href="mailto:contact@localserviceads.fr"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-purple transition-colors"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
