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
      question: "Combien ça coûte ?",
      answer: "Le premier mois de gestion des campagnes est inclus. Ensuite, une mensualité vous permet de continuer à bénéficier de l'optimisation continue. Parlons-en lors de notre appel."
    },
    {
      question: "Combien de temps avant de voir des résultats ?",
      answer: "Généralement, les premiers appels arrivent dans les 7-15 jours après le lancement des campagnes, une fois votre fiche Maps optimisée."
    },
    {
      question: "Est-ce que ça marche vraiment pour les constructeurs de piscines ?",
      answer: "Absolument. Google Local Services est particulièrement efficace pour les services à domicile comme la construction de piscines."
    },
    {
      question: "Je ne suis pas à l'aise avec le digital, est-ce un problème ?",
      answer: "Au contraire ! C'est justement pour ça que j'existe. Vous n'avez rien à gérer, je m'occupe de tout."
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-primary-purple to-purple-600 text-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Aider les constructeurs de piscines français à ne plus jamais manquer de clients
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
            Parce que chaque artisan mérite un flux régulier de demandes de devis, sans les aléas des périodes creuses
          </p>
        </div>
      </section>

      {/* SECTION 2: L'HISTOIRE */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark-gray">
            Tout a commencé par une passion : résoudre des problèmes
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-base md:text-lg leading-relaxed">
              Depuis tout petit, j'ai toujours été fasciné par les problèmes. Pas pour les complications qu'ils apportent, mais pour une raison simple : <strong>chaque problème cache une solution qui peut changer la vie de quelqu'un</strong>.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Aujourd'hui étudiant en économie-gestion à Paris, j'aurais pu me contenter de suivre le chemin classique. Mais une question me taraudait : <strong>pourquoi tant d'artisans français, excellents dans leur métier, galèrent-ils à trouver des clients régulièrement ?</strong>
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              J'ai vu des constructeurs de piscines incroyablement talentueux, des chefs de famille qui bossent 60 heures par semaine, vivre les montagnes russes :
            </p>

            <ul className="list-none space-y-3 my-6">
              <li className="flex items-start">
                <span className="text-primary-purple mr-3 text-xl">•</span>
                <span className="text-base md:text-lg">Un mois, submergés de demandes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-purple mr-3 text-xl">•</span>
                <span className="text-base md:text-lg">Le mois suivant, plus rien</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-purple mr-3 text-xl">•</span>
                <span className="text-base md:text-lg">Et cette angoisse permanente : "Est-ce que le téléphone va sonner ?"</span>
              </li>
            </ul>

            <p className="text-xl md:text-2xl font-bold text-primary-purple text-center my-8">
              C'était inacceptable.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Pas parce que ces artisans manquent de compétences. Pas parce qu'ils ne méritent pas de réussir. Mais simplement parce qu'ils n'ont pas le temps de maîtriser les outils digitaux qui pourraient transformer leur business.
            </p>

            <p className="text-xl font-semibold text-center text-dark-gray my-8">
              C'est là que j'ai décidé d'agir.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LA MISSION */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-dark-gray">
            Ma mission : vous apporter des appels de clients tous les jours
          </h2>

          <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Je ne vends pas de la magie. Je mets en place un système simple mais ultra-efficace qui fait sonner votre téléphone avec des demandes de devis qualifiées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-gray">
                Optimisation de votre fiche Google Maps
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Votre fiche Google Maps, c'est votre vitrine digitale. Si elle est mal configurée, vous perdez des clients avant même qu'ils ne vous contactent. Je l'optimise pour qu'elle attire l'œil et donne confiance.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-gray">
                Système de collecte d'avis clients
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Plus d'avis = plus de crédibilité = plus de conversions. Je mets en place un système automatisé pour que vos clients satisfaits laissent des avis positifs sans que vous ayez à les relancer constamment.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-gray">
                Campagnes Google Local Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Je lance et gère vos campagnes publicitaires sur Google Local Services. Résultat ? Vous apparaissez en premier quand quelqu'un cherche un constructeur de piscines près de chez vous.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-gray">
                Gestion continue (incluse le 1er mois)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Après le lancement, je ne vous abandonne pas. Je continue de :
              </p>
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Ajuster les budgets selon les résultats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Ouvrir de nouvelles zones géographiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Faire des recommandations stratégiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">✓</span>
                  <span>Contester les appels surfacturés par Google</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xl font-semibold text-center mt-12 text-dark-gray">
            Le but ? Que vous puissiez vous concentrer sur votre métier : construire de magnifiques piscines.
          </p>
        </div>
      </section>

      {/* SECTION 4: LES VALEURS */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-dark-gray">
            Mes engagements envers vous
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Valeur 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-gray">
                Honnêteté totale
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Je ne vous promets pas la lune. Je vous montre des résultats concrets, mesurables, et je suis transparent sur ce qui fonctionne (et ce qui ne fonctionne pas).
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-gray">
                Dévouement sans faille
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Votre succès, c'est mon succès. Quand votre téléphone sonne avec un nouveau client, je suis aussi content que vous.
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-gray">
                Travail acharné
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Pas de demi-mesures. Je mets toute mon énergie pour que vos campagnes performent au maximum.
              </p>
            </div>

            {/* Valeur 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-gray">
                Franchise directe
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Vous aurez toujours mon avis sincère. Si quelque chose ne va pas, je vous le dis. Si une opportunité se présente, je vous la partage immédiatement.
              </p>
            </div>

            {/* Valeur 5 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-gray">
                Esprit de partage
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Je ne garde pas mes connaissances pour moi. Je vous explique ce que je fais, pourquoi je le fais, pour que vous compreniez la valeur de chaque action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LE PROBLÈME RÉSOLU */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark-gray">
            Imaginez : des demandes de devis régulières, tous les jours
          </h2>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl mb-8">
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
              Vous connaissez cette sensation ?
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Le téléphone qui ne sonne plus. Les journées qui s'étirent. L'angoisse de ne pas savoir comment vous allez remplir votre planning le mois prochain.
            </p>

            <p className="text-xl md:text-2xl font-bold text-primary-purple mb-6">
              Mais imaginez maintenant :
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✅</span>
                <p className="text-base md:text-lg text-gray-700">
                  Votre téléphone qui sonne chaque jour avec de vraies demandes de devis
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✅</span>
                <p className="text-base md:text-lg text-gray-700">
                  Un agenda rempli 2-3 mois à l'avance
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✅</span>
                <p className="text-base md:text-lg text-gray-700">
                  La possibilité de <strong>choisir</strong> vos projets au lieu de devoir accepter n'importe quoi
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✅</span>
                <p className="text-base md:text-lg text-gray-700">
                  Dormir tranquille en sachant que les leads arrivent de manière constante
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl flex-shrink-0">✅</span>
                <p className="text-base md:text-lg text-gray-700">
                  Pouvoir enfin vous projeter sereinement, développer votre entreprise, embaucher
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-dark-gray mb-4">
              C'est exactement ce que je mets en place pour vous.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Pas de miracle. Juste une stratégie digitale solide, testée, et optimisée en continu pour votre secteur : la construction de piscines.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: POUR QUI ? */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-dark-gray">
            Ce service est fait pour vous si…
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-10 rounded-2xl shadow-xl">
            <div className="space-y-5">
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous êtes constructeur de piscines et cherchez plus de clients
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous en avez marre des périodes creuses qui vous stressent
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous voulez un flux régulier de demandes de devis qualifiées
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous n'avez pas le temps de gérer le marketing digital vous-même
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous préférez vous concentrer sur votre métier (construire de belles piscines)
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-purple mr-4 text-2xl flex-shrink-0">✔️</span>
                <p className="text-base md:text-lg text-gray-700">
                  Vous recherchez un partenaire honnête, transparent et investi dans votre réussite
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
            Parlons de votre situation
          </h2>

          <p className="text-lg md:text-xl mb-4 opacity-90">
            Vous hésitez encore ? C'est normal.
          </p>

          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Discutons simplement de votre situation actuelle, de vos objectifs, et je vous dirai honnêtement si mon service peut vous aider.
          </p>

          <p className="text-lg md:text-xl font-semibold mb-10">
            Pas de baratin commercial. Juste une conversation franche entre professionnels.
          </p>

          <button
            onClick={handleContactClick}
            className="inline-block bg-white text-primary-purple px-10 py-5 rounded-lg text-lg md:text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl mb-10"
          >
            Réserver un appel gratuit de 30 minutes
          </button>

          <div className="border-t border-white/30 pt-8">
            <p className="text-base md:text-lg mb-4">
              Ou contactez-moi directement :
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              📧 agence.celexia@gmail.com
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
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                  <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
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
