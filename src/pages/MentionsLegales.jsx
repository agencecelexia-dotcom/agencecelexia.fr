import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const linkClass = 'text-cuivre-600 underline underline-offset-2 hover:text-cuivre-700';

const MentionsLegales = () => {
  usePageMeta({
    title: 'Mentions légales | Agence Celexia',
    description:
      'Mentions légales du site agencecelexia.fr : éditeur, hébergeur, propriété intellectuelle et droit applicable.',
    canonical: 'https://agencecelexia.fr/mentions-legales',
  });

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto">
        <p className="section-kicker mb-5">Informations légales</p>
        <h1 className="font-display font-expanded font-black text-ardoise-900 text-3xl md:text-4xl tracking-tight">
          Mentions légales
        </h1>
        <hr className="rule-cuivre mt-8 mb-10" />

        <div className="space-y-10 text-ardoise-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-ardoise-900">agencecelexia.fr</strong> est édité par :
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong className="text-ardoise-900">Raison sociale :</strong> CELEXIA</li>
              <li><strong className="text-ardoise-900">Forme juridique :</strong> Société par actions simplifiée unipersonnelle (SASU)</li>
              <li><strong className="text-ardoise-900">SIREN :</strong> <span className="tabular">939 306 429</span></li>
              <li><strong className="text-ardoise-900">Siège social :</strong> Nogent-sur-Marne, France</li>
              <li>
                <strong className="text-ardoise-900">Téléphone :</strong>{' '}
                <a href="tel:+33651725756" className={linkClass}>06 51 72 57 56</a>
              </li>
              <li>
                <strong className="text-ardoise-900">Courriel :</strong>{' '}
                <a href="mailto:agence.celexia@gmail.com" className={linkClass}>agence.celexia@gmail.com</a>
              </li>
              <li><strong className="text-ardoise-900">Directeurs de la publication :</strong> Thomas et Antoine, co-fondateurs</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">2. Hébergeur</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-ardoise-900">Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>
                <a href="https://vercel.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">3. Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur le site agencecelexia.fr (textes, images,
              graphismes, logo, icônes, logiciels) est protégé par le droit d’auteur et le droit
              de la propriété intellectuelle. Toute reproduction, représentation, modification,
              publication ou adaptation de tout ou partie des éléments du site est interdite sans
              l’accord préalable écrit de CELEXIA.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">4. Limitation de responsabilité</h2>
            <p>
              CELEXIA s’efforce de fournir des informations aussi précises que possible sur le
              site. Elle ne peut toutefois être tenue responsable des omissions, des inexactitudes
              ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait de tiers.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">5. Cookies</h2>
            <p>
              Le site utilise des cookies de mesure d’audience, soumis à votre consentement. Vous
              pouvez également configurer votre navigateur pour les refuser. Pour en savoir plus,
              consultez notre{' '}
              <Link to="/politique-confidentialite" className={linkClass}>
                politique de confidentialité
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-ardoise-900 mb-3">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français sont compétents.
            </p>
          </div>
        </div>

        <p className="text-sm text-acier-600 mt-12 pt-6 border-t border-acier-200">
          Dernière mise à jour : 2 août 2026
        </p>
      </div>
    </section>
  );
};

export default MentionsLegales;
