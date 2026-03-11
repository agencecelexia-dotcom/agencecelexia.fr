import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const MentionsLegales = () => {
  usePageMeta({
    title: 'Mentions Légales - Agence Celexia',
    description: 'Mentions légales du site agencecelexia.fr. Informations sur l\'éditeur, l\'hébergeur, la propriété intellectuelle et les conditions d\'utilisation.',
    canonical: 'https://agencecelexia.fr/mentions-legales'
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="tag mb-4">Informations légales</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), il est porté à la connaissance des utilisateurs et visiteurs du site agencecelexia.fr les présentes mentions légales.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-12">

            {/* Éditeur du site */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                1. Éditeur du site
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Le site <strong>agencecelexia.fr</strong> est édité par :</p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Dénomination :</strong> Agence Celexia</li>
                  <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
                  <li><strong>Siège social :</strong> France</li>
                  <li><strong>SIRET :</strong> En cours d'immatriculation</li>
                  <li><strong>Téléphone :</strong> <a href="tel:+33651725756" className="text-violet-600 hover:text-violet-700">+33 6 51 72 57 56</a></li>
                  <li><strong>Email :</strong> <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a></li>
                  <li><strong>Directeur de la publication :</strong> Thomas</li>
                </ul>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                2. Hébergeur
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Le site agencecelexia.fr est hébergé par :</p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Raison sociale :</strong> Netlify, Inc.</li>
                  <li><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</li>
                  <li><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">https://www.netlify.com</a></li>
                </ul>
              </div>
            </div>

            {/* Accès au site */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                3. Accès au site
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le site agencecelexia.fr est accessible gratuitement depuis n'importe quel endroit à tout utilisateur disposant d'un accès à Internet. Tous les frais nécessaires pour l'accès aux services (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
                </p>
                <p>
                  L'éditeur du site met tout en œuvre pour offrir aux utilisateurs un accès continu au site. Toutefois, l'éditeur ne saurait être tenu responsable en cas d'interruption du service, que celle-ci soit due à un cas de force majeure, à une maintenance programmée ou imprévue, ou à toute autre cause indépendante de sa volonté.
                </p>
                <p>
                  Le site peut faire l'objet de mises à jour régulières. Dans ce cas, l'accès au site peut être temporairement interrompu. L'éditeur s'efforcera de prévenir les utilisateurs en amont de toute interruption programmée.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                4. Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'ensemble du contenu du site agencecelexia.fr (textes, images, graphismes, logo, icônes, sons, logiciels, mise en page, base de données, code source, etc.) est la propriété exclusive de l'Agence Celexia ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de l'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation écrite préalable de l'Agence Celexia.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
                <p>
                  Les marques et logos figurant sur le site sont des marques déposées ou non par l'Agence Celexia ou par des tiers. Toute reproduction totale ou partielle de ces marques ou logos, effectuée à partir des éléments du site, est prohibée sans l'autorisation expresse de leurs titulaires.
                </p>
              </div>
            </div>

            {/* Limitation de responsabilité */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                5. Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'Agence Celexia ne pourra être tenue pour responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site agencecelexia.fr, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p>
                  L'Agence Celexia ne pourra également être tenue responsable des dommages indirects (tels qu'une perte de marché ou une perte d'opportunité) consécutifs à l'utilisation du site agencecelexia.fr. Les informations présentes sur le site sont fournies à titre indicatif et ne sauraient constituer un engagement contractuel de la part de l'Agence Celexia.
                </p>
                <p>
                  L'Agence Celexia s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                6. Liens hypertextes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le site agencecelexia.fr peut contenir des liens hypertextes vers d'autres sites internet. Les pages web vers lesquelles ces liens renvoient n'engagent en rien la responsabilité de l'Agence Celexia, qui n'a pas le contrôle de ces sites. L'utilisateur navigue sur ces sites sous sa seule et entière responsabilité.
                </p>
                <p>
                  La mise en place de liens hypertextes vers le site agencecelexia.fr est autorisée sans accord préalable, sous réserve que ces liens n'aient pas un caractère illicite ou ne portent pas atteinte aux intérêts de l'Agence Celexia. Le site source ne doit pas comporter de contenus à caractère illicite, violent, polémique, pornographique, xénophobe ou susceptible de porter atteinte à la sensibilité du plus grand nombre.
                </p>
              </div>
            </div>

            {/* Collecte de données */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                7. Collecte de données personnelles
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le site agencecelexia.fr collecte des données personnelles dans le cadre de son activité. Pour toute information relative à la collecte et au traitement de vos données personnelles, veuillez consulter notre{' '}
                  <Link to="/politique-confidentialite" className="text-violet-600 hover:text-violet-700 font-semibold">
                    Politique de Confidentialité
                  </Link>.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition au traitement de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                8. Cookies
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le site agencecelexia.fr peut être amené à utiliser des cookies pour améliorer l'expérience utilisateur et à des fins statistiques. Un cookie est un petit fichier texte stocké sur le disque dur de votre terminal (ordinateur, tablette, smartphone) par le biais de votre navigateur.
                </p>
                <p>
                  L'utilisateur peut configurer son navigateur pour refuser les cookies ou être averti de leur dépôt. Pour plus d'informations sur les cookies utilisés et leur gestion, veuillez consulter notre{' '}
                  <Link to="/politique-confidentialite" className="text-violet-600 hover:text-violet-700 font-semibold">
                    Politique de Confidentialité
                  </Link>.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                9. Droit applicable et juridiction compétente
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
                </p>
                <p>
                  Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, l'utilisateur peut recourir au service de médiation proposé par l'Agence Celexia. Le médiateur tentera, en toute indépendance et impartialité, de rapprocher les parties en vue d'aboutir à une solution amiable. Les parties restent libres d'accepter ou de refuser le recours à la médiation ainsi que, en cas de recours à la médiation, d'accepter ou de refuser la solution proposée par le médiateur.
                </p>
              </div>
            </div>

            {/* Crédits */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                10. Crédits
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Conception et développement :</strong> Agence Celexia
                </p>
                <p>
                  <strong>Photographies et illustrations :</strong> Les visuels utilisés sur le site sont la propriété de l'Agence Celexia ou utilisés sous licence conformément aux droits d'auteur applicables.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center pt-8">
              <p className="text-sm text-gray-400">
                Dernière mise à jour : 11 mars 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-500 mb-6">
            Une question concernant nos mentions légales ?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold
                       hover:bg-violet-700 transition-colors duration-300"
          >
            Contactez-nous
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
