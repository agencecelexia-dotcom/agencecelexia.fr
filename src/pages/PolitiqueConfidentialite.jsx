import { usePageMeta } from '../hooks/usePageMeta';

const linkClass = 'text-violet-600 underline underline-offset-2 hover:text-violet-700';

const PolitiqueConfidentialite = () => {
  usePageMeta({
    title: 'Politique de confidentialité | Agence Celexia',
    description:
      'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
    canonical: 'https://agencecelexia.fr/politique-confidentialite',
  });

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto">
        <p className="section-kicker mb-5">Données personnelles</p>
        <h1 className="font-display font-expanded font-black text-encre-900 text-display-sm md:text-display-md">
          Politique de confidentialité
        </h1>
        <hr className="rule-violet mt-8 mb-10" />

        <div className="space-y-10 text-encre-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">1. Introduction</h2>
            <p>
              CELEXIA s’engage à protéger la vie privée des utilisateurs du site
              agencecelexia.fr. La présente politique décrit les informations que nous
              collectons, l’usage que nous en faisons et les droits dont vous disposez au titre
              du Règlement général sur la protection des données (RGPD).
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">2. Responsable du traitement</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-encre-900">Responsable :</strong> CELEXIA, SIREN <span className="tabular">939 306 429</span>, Nogent-sur-Marne</li>
              <li>
                <strong className="text-encre-900">Courriel :</strong>{' '}
                <a href="mailto:agence.celexia@gmail.com" className={linkClass}>agence.celexia@gmail.com</a>
              </li>
              <li>
                <strong className="text-encre-900">Téléphone :</strong>{' '}
                <a href="tel:+33651725756" className={linkClass}>06 51 72 57 56</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">3. Données collectées</h2>
            <p>Nous sommes susceptibles de collecter :</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>
                <strong className="text-encre-900">Données d’inscription :</strong> nom, raison
                sociale, adresse électronique, numéro de téléphone, métier et zone
                d’intervention, saisis dans le formulaire d’inscription au réseau
              </li>
              <li>
                <strong className="text-encre-900">Données de navigation :</strong> adresse IP,
                type de navigateur, pages consultées, durée de visite, via la mesure d’audience
                et uniquement après votre consentement
              </li>
              <li>
                <strong className="text-encre-900">Données d’échange :</strong> informations
                que vous nous communiquez par téléphone ou par courriel
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">4. Finalités du traitement</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Étudier votre candidature au réseau d’artisans partenaires</li>
              <li>Vous transmettre des demandes de chantiers et assurer le suivi associé</li>
              <li>Améliorer le site et son ergonomie</li>
              <li>Respecter nos obligations légales et comptables</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">5. Base légale</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-encre-900">Votre consentement</strong> pour les cookies de mesure d’audience</li>
              <li><strong className="text-encre-900">L’exécution de mesures précontractuelles et du contrat</strong> pour le traitement de votre inscription et de la relation qui en découle</li>
              <li><strong className="text-encre-900">Nos obligations légales</strong> pour la conservation des pièces comptables</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">6. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de trois ans à compter du
              dernier contact. Les données liées à une relation contractuelle sont conservées
              pendant toute sa durée, puis archivées conformément aux obligations légales.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong className="text-encre-900">Accès :</strong> obtenir une copie de vos données</li>
              <li><strong className="text-encre-900">Rectification :</strong> corriger des données inexactes</li>
              <li><strong className="text-encre-900">Effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-encre-900">Limitation :</strong> restreindre le traitement</li>
              <li><strong className="text-encre-900">Portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-encre-900">Opposition :</strong> vous opposer au traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, écrivez-nous à{' '}
              <a href="mailto:agence.celexia@gmail.com" className={linkClass}>agence.celexia@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">8. Cookies</h2>
            <p>
              Le site dépose des cookies de mesure d’audience uniquement après votre accord,
              recueilli via la bannière affichée à votre première visite. Le refus est sans
              conséquence sur le fonctionnement du site. Vous pouvez également configurer votre
              navigateur pour bloquer les cookies.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">9. Sous-traitants</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-encre-900">Vercel Inc.</strong> — hébergement du site</li>
              <li><strong className="text-encre-900">Google Analytics</strong> — mesure d’audience, après consentement</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-encre-900 mb-3">10. Contact et réclamation</h2>
            <p>
              Pour toute question relative à la protection de vos données, écrivez-nous à
              agence.celexia@gmail.com. En cas de désaccord, vous pouvez adresser une réclamation
              à la CNIL :{' '}
              <a href="https://www.cnil.fr" className={linkClass} target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-sm text-encre-600 mt-12 pt-6 border-t border-brume-200">
          Dernière mise à jour : 2 août 2026
        </p>
      </div>
    </section>
  );
};

export default PolitiqueConfidentialite;
