import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const PolitiqueConfidentialite = () => {
  usePageMeta({
    title: 'Politique de Confidentialité - Agence Celexia',
    description: 'Politique de confidentialité et protection des données personnelles du site agencecelexia.fr. Conformité RGPD, droits des utilisateurs et gestion des cookies.',
    canonical: 'https://agencecelexia.fr/politique-confidentialite'
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="tag mb-4">Protection des données</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              L'Agence Celexia s'engage à protéger la vie privée des utilisateurs de son site agencecelexia.fr. La présente politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-12">

            {/* Responsable du traitement */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                1. Responsable du traitement des données
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p>Le responsable du traitement des données personnelles collectées sur le site agencecelexia.fr est :</p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Dénomination :</strong> Agence Celexia</li>
                  <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
                  <li><strong>Adresse :</strong> France</li>
                  <li><strong>Email :</strong> <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a></li>
                  <li><strong>Téléphone :</strong> <a href="tel:+33651725756" className="text-violet-600 hover:text-violet-700">+33 6 51 72 57 56</a></li>
                </ul>
              </div>
            </div>

            {/* Données collectées */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                2. Données personnelles collectées
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dans le cadre de l'utilisation du site agencecelexia.fr et de nos services, nous sommes amenés à collecter les données personnelles suivantes :
                </p>

                <h3 className="font-display text-lg font-semibold text-gray-800 mt-6">2.1 Données fournies directement par l'utilisateur</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Nom et prénom :</strong> collectés via le formulaire de contact et la prise de rendez-vous</li>
                  <li><strong>Adresse email :</strong> collectée via le formulaire de contact, la prise de rendez-vous Cal.com et les demandes de devis</li>
                  <li><strong>Numéro de téléphone :</strong> collecté via le formulaire de contact et la prise de rendez-vous</li>
                  <li><strong>Nom de l'entreprise :</strong> collecté dans le cadre des échanges commerciaux</li>
                  <li><strong>Message :</strong> contenu des demandes envoyées via le formulaire de contact</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-gray-800 mt-6">2.2 Données collectées automatiquement</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, système d'exploitation, pages visitées, durée de la visite, pages de référence</li>
                  <li><strong>Données techniques :</strong> résolution d'écran, langue du navigateur, fournisseur d'accès Internet</li>
                  <li><strong>Cookies et traceurs :</strong> identifiants de session, préférences de navigation (voir section Cookies ci-dessous)</li>
                </ul>
              </div>
            </div>

            {/* Finalités */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                3. Finalités du traitement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Les données personnelles collectées sont utilisées pour les finalités suivantes :</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Gestion des demandes de contact :</strong> répondre à vos messages et demandes d'information envoyés via le formulaire de contact du site</li>
                  <li><strong>Prise de rendez-vous :</strong> permettre la planification de rendez-vous stratégiques via notre système de réservation Cal.com</li>
                  <li><strong>Prospection commerciale :</strong> vous recontacter dans le cadre d'une demande de devis ou d'information sur nos services</li>
                  <li><strong>Amélioration du site :</strong> analyser l'utilisation du site pour en améliorer le contenu, la navigation et les performances</li>
                  <li><strong>Statistiques :</strong> établir des statistiques anonymes de fréquentation et d'utilisation du site</li>
                  <li><strong>Obligations légales :</strong> respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                4. Base légale du traitement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Votre consentement :</strong> lorsque vous remplissez le formulaire de contact, prenez un rendez-vous ou acceptez les cookies non essentiels, vous consentez au traitement de vos données pour les finalités décrites</li>
                  <li><strong>L'intérêt légitime :</strong> l'Agence Celexia a un intérêt légitime à analyser l'utilisation de son site pour en améliorer les performances et à recontacter les prospects dans le cadre de son activité commerciale</li>
                  <li><strong>L'exécution d'un contrat :</strong> le traitement de certaines données est nécessaire à l'exécution des services proposés par l'Agence Celexia</li>
                  <li><strong>Le respect d'une obligation légale :</strong> certaines données sont traitées pour se conformer aux obligations légales en vigueur</li>
                </ul>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                5. Durée de conservation des données
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Vos données personnelles sont conservées pendant une durée proportionnelle à la finalité pour laquelle elles ont été collectées :</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Données de contact (formulaire, rendez-vous) :</strong> 3 ans à compter du dernier contact avec la personne concernée</li>
                  <li><strong>Données de prospection commerciale :</strong> 3 ans à compter du dernier contact actif</li>
                  <li><strong>Données de navigation et cookies :</strong> 13 mois maximum conformément aux recommandations de la CNIL</li>
                  <li><strong>Données contractuelles :</strong> pendant la durée de la relation contractuelle, puis archivées pendant la durée de prescription légale (5 ans)</li>
                </ul>
                <p>
                  Au-delà de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
                </p>
              </div>
            </div>

            {/* Destinataires */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                6. Destinataires des données et sous-traitants
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vos données personnelles peuvent être communiquées aux tiers suivants dans le cadre strict des finalités décrites ci-dessus :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Cal.com :</strong> plateforme de prise de rendez-vous en ligne utilisée pour planifier vos sessions stratégiques. Cal.com traite vos nom, email et créneau horaire choisi. <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">Politique de confidentialité de Cal.com</a></li>
                  <li><strong>Google Analytics :</strong> outil d'analyse statistique permettant de mesurer l'audience du site. Les données collectées sont anonymisées. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">Politique de confidentialité de Google</a></li>
                  <li><strong>Netlify :</strong> hébergeur du site web. Netlify peut avoir accès à certaines données techniques (adresse IP, logs de connexion) dans le cadre de l'hébergement. <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">Politique de confidentialité de Netlify</a></li>
                </ul>
                <p>
                  L'Agence Celexia s'assure que ses sous-traitants présentent des garanties suffisantes quant à la mise en œuvre de mesures techniques et organisationnelles appropriées de manière à ce que le traitement réponde aux exigences du RGPD.
                </p>
                <p>
                  Vos données ne sont en aucun cas vendues, échangées ou louées à des tiers à des fins de prospection commerciale sans votre consentement explicite.
                </p>
              </div>
            </div>

            {/* Transferts hors UE */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                7. Transferts de données hors de l'Union Européenne
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Certains de nos sous-traitants (Netlify, Google Analytics, Cal.com) sont établis aux États-Unis. Les transferts de données vers les États-Unis sont encadrés par le Data Privacy Framework (DPF) UE-États-Unis, qui garantit un niveau de protection adéquat des données personnelles conformément aux exigences du RGPD.
                </p>
                <p>
                  En l'absence de décision d'adéquation, l'Agence Celexia s'assure que des garanties appropriées sont mises en place (clauses contractuelles types adoptées par la Commission Européenne) pour encadrer tout transfert de données hors de l'Espace Économique Européen.
                </p>
              </div>
            </div>

            {/* Droits des utilisateurs */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                8. Vos droits
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Droit d'accès :</strong> vous pouvez obtenir la confirmation que des données vous concernant sont ou ne sont pas traitées, et en obtenir une copie</li>
                  <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de données inexactes ou incomplètes vous concernant</li>
                  <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données personnelles dans les cas prévus par la réglementation</li>
                  <li><strong>Droit à la portabilité :</strong> vous pouvez recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, et les transmettre à un autre responsable de traitement</li>
                  <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données pour des motifs liés à votre situation particulière, notamment en ce qui concerne la prospection commerciale</li>
                  <li><strong>Droit à la limitation du traitement :</strong> vous pouvez demander la limitation du traitement de vos données dans certains cas prévus par le RGPD</li>
                  <li><strong>Droit de retirer votre consentement :</strong> lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment sans que cela ne compromette la licéité du traitement effectué avant le retrait</li>
                  <li><strong>Droit de définir des directives post-mortem :</strong> vous pouvez définir des directives relatives à la conservation, l'effacement et la communication de vos données après votre décès</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-gray-800 mt-6">Comment exercer vos droits</h3>
                <p>
                  Pour exercer l'un de ces droits, vous pouvez nous contacter par :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Email :</strong> <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a></li>
                  <li><strong>Téléphone :</strong> <a href="tel:+33651725756" className="text-violet-600 hover:text-violet-700">+33 6 51 72 57 56</a></li>
                  <li><strong>Courrier :</strong> Agence Celexia, France</li>
                </ul>
                <p>
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois à compter de sa réception. Ce délai peut être prolongé de deux mois en cas de complexité de la demande ou du nombre de demandes reçues. Vous serez informé de cette prolongation dans le mois suivant la réception de votre demande.
                </p>
                <p>
                  Une pièce d'identité pourra vous être demandée pour vérifier votre identité en cas de doute raisonnable.
                </p>
                <p>
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">www.cnil.fr</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                9. Politique relative aux cookies
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="font-display text-lg font-semibold text-gray-800">9.1 Qu'est-ce qu'un cookie ?</h3>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site internet. Il permet de stocker des informations relatives à votre navigation et de vous reconnaître lors de vos visites ultérieures.
                </p>

                <h3 className="font-display text-lg font-semibold text-gray-800 mt-6">9.2 Types de cookies utilisés</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement du site, ils ne peuvent pas être désactivés. Ils permettent notamment la navigation sur le site et l'utilisation de ses fonctionnalités essentielles</li>
                  <li><strong>Cookies analytiques (Google Analytics) :</strong> ils nous permettent de mesurer l'audience du site, de comprendre comment les visiteurs interagissent avec le contenu et d'améliorer nos services. Ces cookies collectent des informations de manière anonyme</li>
                  <li><strong>Cookies de fonctionnalité :</strong> ils permettent de mémoriser vos préférences et de personnaliser votre expérience de navigation</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-gray-800 mt-6">9.3 Gestion des cookies</h3>
                <p>
                  Vous pouvez à tout moment choisir de désactiver les cookies en paramétrant votre navigateur. La plupart des navigateurs acceptent les cookies par défaut. Voici comment les gérer sur les principaux navigateurs :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                  <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
                  <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                  <li><strong>Microsoft Edge :</strong> Paramètres &gt; Cookies et autorisations de site</li>
                </ul>
                <p>
                  La désactivation des cookies peut affecter votre expérience de navigation et limiter l'accès à certaines fonctionnalités du site.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                10. Sécurité des données
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'Agence Celexia met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction. Ces mesures comprennent notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Le chiffrement des données en transit via le protocole HTTPS/TLS</li>
                  <li>L'accès restreint aux données personnelles aux seules personnes habilitées</li>
                  <li>La mise à jour régulière des systèmes et logiciels</li>
                  <li>La sauvegarde régulière des données</li>
                </ul>
              </div>
            </div>

            {/* Modification */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                11. Modification de la politique de confidentialité
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'Agence Celexia se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                </p>
                <p>
                  En cas de modification substantielle affectant vos droits, nous nous efforcerons de vous en informer par un moyen approprié (notification sur le site, email si disponible).
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                12. Nous contacter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pour toute question relative à la présente politique de confidentialité ou au traitement de vos données personnelles, n'hésitez pas à nous contacter :
                </p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Email :</strong> <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a></li>
                  <li><strong>Téléphone :</strong> <a href="tel:+33651725756" className="text-violet-600 hover:text-violet-700">+33 6 51 72 57 56</a></li>
                </ul>
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
            Une question sur la gestion de vos données personnelles ?
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

export default PolitiqueConfidentialite;
