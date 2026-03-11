import { usePageMeta } from '../hooks/usePageMeta';

const PolitiqueConfidentialite = () => {
  usePageMeta({
    title: 'Politique de Confidentialité - Agence Celexia',
    description: 'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
    canonical: 'https://agencecelexia.fr/politique-confidentialite'
  });

  return (
    <div className="bg-white">
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>

          <div className="space-y-8 text-gray-600 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                Agence Celexia s'engage à protéger la vie privée des utilisateurs de son site internet
                agencecelexia.fr. La présente politique de confidentialité décrit les informations que nous
                collectons, comment nous les utilisons et les droits dont vous disposez conformément au
                Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Responsable du traitement</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Responsable :</strong> Agence Celexia</li>
                <li><strong>Email :</strong> contact@agencecelexia.fr</li>
                <li><strong>Téléphone :</strong> 06 51 72 57 56</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Données collectées</h2>
              <p>Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Données de contact :</strong> nom, prénom, adresse email, numéro de téléphone (lors de la prise de rendez-vous via Cal.com)</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite (via Google Analytics, si activé)</li>
                <li><strong>Données professionnelles :</strong> métier, zone d'intervention, besoins exprimés (lors de nos échanges)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Finalités du traitement</h2>
              <p>Vos données sont traitées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Gestion des prises de rendez-vous et suivi commercial</li>
                <li>Fourniture de nos services de marketing digital</li>
                <li>Amélioration de notre site internet et de l'expérience utilisateur</li>
                <li>Envoi de communications commerciales (avec votre consentement)</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. Base légale du traitement</h2>
              <p>Le traitement de vos données repose sur :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Votre consentement</strong> pour les cookies et les communications marketing</li>
                <li><strong>L'exécution d'un contrat</strong> pour la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et la prospection commerciale</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter du
                dernier contact. Les données relatives aux clients sont conservées pendant la durée de la
                relation contractuelle, puis archivées conformément aux obligations légales.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">7. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
              <p>
                Notre site utilise des cookies techniques nécessaires au fonctionnement du site et des cookies
                d'analyse (Google Analytics) pour mesurer l'audience. Vous pouvez à tout moment modifier vos
                préférences en matière de cookies via les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">9. Sous-traitants</h2>
              <p>Nous faisons appel aux sous-traitants suivants pour le traitement de vos données :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Vercel</strong> — hébergement du site</li>
                <li><strong>Cal.com</strong> — gestion des rendez-vous</li>
                <li><strong>Google Analytics</strong> — mesure d'audience (si activé)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">10. Contact et réclamation</h2>
              <p>
                Pour toute question relative à la protection de vos données, vous pouvez nous contacter à
                l'adresse contact@agencecelexia.fr. En cas de différend, vous pouvez adresser une réclamation
                à la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-12">Dernière mise à jour : 11 mars 2026</p>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
