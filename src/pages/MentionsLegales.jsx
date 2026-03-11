import { usePageMeta } from '../hooks/usePageMeta';

const MentionsLegales = () => {
  usePageMeta({
    title: 'Mentions Légales - Agence Celexia',
    description: 'Mentions légales du site agencecelexia.fr. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
    canonical: 'https://agencecelexia.fr/mentions-legales'
  });

  return (
    <div className="bg-white">
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>

          <div className="space-y-8 text-gray-600 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Éditeur du site</h2>
              <p>Le site <strong>agencecelexia.fr</strong> est édité par :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Raison sociale :</strong> Agence Celexia</li>
                <li><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</li>
                <li><strong>Siège social :</strong> France</li>
                <li><strong>Téléphone :</strong> <a href="tel:+33651725756" className="text-violet-600 hover:text-violet-700">06 51 72 57 56</a></li>
                <li><strong>Email :</strong> <a href="mailto:contact@agencecelexia.fr" className="text-violet-600 hover:text-violet-700">contact@agencecelexia.fr</a></li>
                <li><strong>Directeurs de la publication :</strong> Thomas et Antoine, co-fondateurs</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Hébergeur</h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Netlify, Inc.</strong></li>
                <li>512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</li>
                <li>Site web : <a href="https://www.netlify.com" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">www.netlify.com</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur le site agencecelexia.fr (textes, images, graphismes, logo,
                icônes, vidéos, logiciels, etc.) est protégé par le droit d'auteur et le droit de la propriété
                intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout
                ou partie des éléments du site est interdite sans l'accord préalable écrit d'Agence Celexia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Limitation de responsabilité</h2>
              <p>
                Agence Celexia s'efforce de fournir des informations aussi précises que possible sur le site.
                Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences
                dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent
                ces informations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
              <p>
                Le site agencecelexia.fr peut être amené à utiliser des cookies pour améliorer l'expérience
                utilisateur et mesurer l'audience. Vous pouvez configurer votre navigateur pour refuser les cookies.
                Pour en savoir plus, consultez notre <a href="/politique-confidentialite" className="text-violet-600 hover:text-violet-700">politique de confidentialité</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                français seront compétents.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-12">Dernière mise à jour : 11 mars 2026</p>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
