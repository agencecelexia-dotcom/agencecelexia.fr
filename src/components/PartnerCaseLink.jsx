import { Link } from 'react-router-dom';
import { CASE_STUDY } from '../data/partnerCase';

export default function PartnerCaseLink() {
  return <div className="card p-6 sm:p-9 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-12 items-center">
    <div><p className="section-kicker mb-5">Retour d’expérience · Entreprise anonymisée</p><h3 className="font-display text-3xl sm:text-4xl leading-tight tracking-tight"><span className="text-violet-700">{CASE_STUDY.total} demandes qualifiées</span><br />transmises sur quatre mois.</h3></div>
    <div><p className="text-encre-600 leading-relaxed">Une entreprise du bâtiment tous corps d’état, travaillant notamment en couverture. Découvrez le détail des demandes transmises et ce que ces chiffres permettent de mesurer.</p><Link to={CASE_STUDY.path} className="text-link mt-5">Lire le retour d’expérience <span aria-hidden="true">↗</span></Link><p className="mt-3 text-xs text-encre-600">Données communiquées par Celexia. Ce volume concerne ce partenariat ; il ne constitue pas une promesse de chantiers signés.</p></div>
  </div>;
}
