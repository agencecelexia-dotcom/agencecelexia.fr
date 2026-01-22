import { useState } from 'react';
import { useScrollToSection } from '../utils/scrollToSection';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const scrollToSection = useScrollToSection();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  const faqs = [
    {
      question: "Comment fonctionne votre système publicitaire ?",
      answer: "Nous utilisons une stratégie de référencement local optimisée qui place votre entreprise en tête des résultats Google lorsque des clients potentiels recherchent vos services dans votre zone géographique. Vous payez uniquement pour les appels qualifiés reçus."
    },
    {
      question: "Quel est le coût réel du service ?",
      answer: "Le premier mois de gestion est inclus dans notre offre de lancement. Ensuite, nos tarifs dépendent de votre volume d'appels souhaité et de votre zone géographique. Nous établissons un devis personnalisé lors de notre premier échange."
    },
    {
      question: "Sous combien de temps puis-je espérer les premiers résultats ?",
      answer: "Une fois votre compte configuré et validé par Google, les premiers appels arrivent généralement sous 10 à 21 jours. La montée en puissance se fait progressivement sur les 2-3 premiers mois."
    },
    {
      question: "Quels types d'artisans accompagnez-vous ?",
      answer: "Nous travaillons avec tous les corps de métiers du bâtiment et des services à domicile : plombiers, électriciens, menuisiers, couvreurs, serruriers, paysagistes, peintres, maçons, installateurs de piscines, et bien d'autres."
    },
    {
      question: "Dois-je gérer quelque chose techniquement ?",
      answer: "Non. Nous prenons en charge l'intégralité de la partie technique : création de compte, optimisation, gestion quotidienne des campagnes, et reporting. Vous vous concentrez sur votre métier, nous gérons votre visibilité digitale."
    },
    {
      question: "Y a-t-il un engagement de durée ?",
      answer: "Nous privilégions la transparence et la confiance. Nos contrats sont flexibles et nous travaillons sur la base de résultats concrets. Discutons de vos objectifs pour définir ensemble le cadre de collaboration qui vous convient."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Notre approche repose sur la satisfaction client. Si après le premier mois les résultats ne correspondent pas à vos attentes, nous analysons ensemble les axes d'amélioration ou nous arrêtons la collaboration en toute transparence."
    },
    {
      question: "Travaillez-vous avec des artisans partout en France ?",
      answer: "Oui, notre système fonctionne dans toutes les régions françaises. La performance dépend de votre secteur d'activité et de la concurrence locale, que nous analysons lors de notre audit initial."
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-primary-purple to-purple-600 text-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nous aidons les artisans à développer leur activité grâce au digital
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
            Acquisition de clients qualifiés, visibilité locale optimisée, croissance maîtrisée
          </p>
        </div>
      </section>

      {/* SECTION 2: LA RÉALITÉ DU TERRAIN */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark-gray">
            Le constat qui nous a poussés à agir
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Depuis plusieurs années, nous observons un paradoxe dans le secteur de l'artisanat : <strong>des professionnels hautement qualifiés qui peinent à remplir leur carnet de commandes</strong>, non par manque de compétences, mais par manque de visibilité.
            </p>

            <p className="text-lg leading-relaxed">
              Les méthodes traditionnelles d'acquisition client (bouche-à-oreille, annuaires, flyers) ne suffisent plus dans un marché où <strong>87% des recherches de services commencent sur Google</strong>.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-dark-gray mb-4">Les défis quotidiens des artisans</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-3 text-xl font-bold">•</span>
                  <span>Fluctuations d'activité imprévisibles qui compliquent la gestion d'équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-3 text-xl font-bold">•</span>
                  <span>Dépendance à quelques prescripteurs ou à la saisonnalité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-3 text-xl font-bold">•</span>
                  <span>Difficulté à évaluer le retour sur investissement des actions marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-3 text-xl font-bold">•</span>
                  <span>Manque de temps pour maîtriser les outils digitaux</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-center text-primary-purple my-8">
              Nous avons créé Agence Celexia pour résoudre précisément ces problèmes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOTRE APPROCHE */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-dark-gray">
            Notre méthode d'acquisition client
          </h2>

          <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Un système complet qui transforme la visibilité de votre entreprise en flux régulier de demandes qualifiées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-dark-gray">
                  Optimisation de votre présence locale
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Configuration professionnelle de votre fiche Google Business Profile : photos de qualité, description optimisée, catégories pertinentes, horaires à jour. Votre vitrine digitale doit inspirer confiance dès le premier regard.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-dark-gray">
                  Stratégie d'avis clients
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mise en place d'un système automatisé de collecte d'avis positifs. Plus vous avez d'avis vérifiés, plus vous gagnez en crédibilité et en taux de conversion. Nous transformons vos clients satisfaits en ambassadeurs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-dark-gray">
                  Campagnes publicitaires ciblées
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lancement et gestion de vos campagnes sur le réseau Google. Vous apparaissez en première position lorsque des clients potentiels recherchent vos services dans votre zone d'intervention. Vous ne payez que pour les contacts qualifiés.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-dark-gray">
                  Gestion et optimisation continue
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suivi quotidien de vos performances, ajustements stratégiques, et reporting transparent :
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Optimisation des budgets selon les résultats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Extension progressive des zones géographiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Recommandations stratégiques mensuelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Gestion des litiges avec la plateforme publicitaire</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg font-medium text-center mt-12 text-dark-gray">
            Résultat : vous vous concentrez sur votre métier pendant que nous générons vos opportunités commerciales.
          </p>
        </div>
      </section>

      {/* SECTION 4: NOS ENGAGEMENTS */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-dark-gray">
            Nos principes de travail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Valeur 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Transparence totale
              </h3>
              <p className="text-gray-600 text-sm">
                Accès complet à vos statistiques en temps réel. Vous savez exactement combien vous dépensez, combien d'appels vous recevez, et quel est votre retour sur investissement.
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Engagement résultats
              </h3>
              <p className="text-gray-600 text-sm">
                Notre rémunération est directement liée à votre satisfaction. Si les résultats ne sont pas au rendez-vous, nous ajustons notre stratégie jusqu'à atteindre vos objectifs.
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Expertise métier
              </h3>
              <p className="text-gray-600 text-sm">
                Nous connaissons les spécificités de l'artisanat : saisonnalité, zones d'intervention, typologie de clients. Votre stratégie est adaptée à votre réalité terrain.
              </p>
            </div>

            {/* Valeur 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Communication directe
              </h3>
              <p className="text-gray-600 text-sm">
                Un interlocuteur dédié qui connaît votre dossier. Pas de plateforme impersonnelle ni de chatbot. Vous avez une question ? Vous obtenez une réponse claire.
              </p>
            </div>

            {/* Valeur 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Formation incluse
              </h3>
              <p className="text-gray-600 text-sm">
                Nous vous expliquons chaque action, chaque métrique, chaque décision. Vous comprenez ce que nous faisons et pourquoi nous le faisons. Vous montez en compétence avec nous.
              </p>
            </div>

            {/* Valeur 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-dark-gray">
                Réactivité maximum
              </h3>
              <p className="text-gray-600 text-sm">
                Les opportunités ne vous attendent pas. Nous intervenons rapidement sur vos campagnes, ajustons en temps réel, et répondons sous 24h à vos sollicitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LES BÉNÉFICES CONCRETS */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark-gray">
            Ce que vous gagnez concrètement
          </h2>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-2xl flex-shrink-0 font-bold">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark-gray mb-1">Flux régulier de demandes qualifiées</h3>
                  <p className="text-gray-600">
                    Terminé les périodes creuses anxiogènes. Votre téléphone sonne régulièrement avec des prospects intéressés par vos services, dans votre zone d'intervention.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-2xl flex-shrink-0 font-bold">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark-gray mb-1">Prévisibilité financière</h3>
                  <p className="text-gray-600">
                    Vous pouvez projeter votre chiffre d'affaires sur 2-3 mois grâce à un pipeline de prospects constant. Facilite le recrutement, l'investissement, la planification.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-2xl flex-shrink-0 font-bold">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark-gray mb-1">Pouvoir de négociation</h3>
                  <p className="text-gray-600">
                    Quand vous avez le choix entre plusieurs projets, vous pouvez sélectionner les plus rentables et refuser les chantiers compliqués. Vous reprenez le contrôle de votre activité.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-2xl flex-shrink-0 font-bold">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark-gray mb-1">Sérénité d'entrepreneur</h3>
                  <p className="text-gray-600">
                    Vous dormez tranquille en sachant que votre système d'acquisition fonctionne en automatique. Vous pouvez vous concentrer sur la qualité de votre travail et la satisfaction client.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-2xl flex-shrink-0 font-bold">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark-gray mb-1">Développement maîtrisé</h3>
                  <p className="text-gray-600">
                    Vous pouvez envisager sereinement l'embauche, l'achat de matériel, l'extension géographique. La croissance devient un choix stratégique, pas un espoir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: POUR QUI ? */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-dark-gray">
            Ce service est adapté si vous êtes...
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-10 rounded-xl border border-purple-200">
            <div className="space-y-5">
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-xl flex-shrink-0 font-bold">✓</span>
                <p className="text-lg text-gray-700">
                  <strong>Artisan établi</strong> qui souhaite stabiliser et augmenter son volume d'activité
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-xl flex-shrink-0 font-bold">✓</span>
                <p className="text-lg text-gray-700">
                  <strong>Chef d'entreprise du bâtiment</strong> qui veut réduire sa dépendance aux prescripteurs
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-xl flex-shrink-0 font-bold">✓</span>
                <p className="text-lg text-gray-700">
                  <strong>Professionnel des services à domicile</strong> cherchant à remplir son agenda 2-3 mois à l'avance
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-xl flex-shrink-0 font-bold">✓</span>
                <p className="text-lg text-gray-700">
                  <strong>Entrepreneur ambitieux</strong> qui veut développer son activité de manière structurée
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-xl flex-shrink-0 font-bold">✓</span>
                <p className="text-lg text-gray-700">
                  <strong>Artisan pragmatique</strong> qui préfère déléguer le digital à des experts et se concentrer sur son savoir-faire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Discutons de votre projet de développement
          </h2>

          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Chaque entreprise a ses spécificités. Échangeons 30 minutes pour comprendre votre situation, vos objectifs, et déterminer si notre solution correspond à vos besoins.
          </p>

          <p className="text-lg font-medium mb-10 opacity-90">
            Pas de discours commercial. Une conversation franche entre professionnels.
          </p>

          <button
            onClick={handleContactClick}
            className="inline-block bg-white text-primary-purple px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all shadow-xl mb-10"
          >
            Réserver un appel stratégique (30 min)
          </button>

          <div className="border-t border-white/30 pt-8">
            <p className="text-base md:text-lg mb-4 opacity-90">
              Vous préférez nous écrire ?
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              agence.celexia@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark-gray">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-dark-gray pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-primary-purple flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
