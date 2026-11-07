import { Link } from 'react-router-dom';
import { SEO_HUB } from '../data/seoHub';
import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import CTAButton from '../components/CTAButton';
import ResourceCards from '../components/ResourceCards';
import PartnerCaseLink from '../components/PartnerCaseLink';
import './Resources.css';

export default function Guides() {
  usePageMeta({ title: SEO_HUB.title, description: SEO_HUB.description, canonical: `https://agencecelexia.fr${SEO_HUB.path}` });
  return <>
    <section className="page-hero surface-paper border-b border-brume-200">
      <div className="container-custom">
        <p className="eyebrow"><span className="brand-spark" aria-hidden="true">✦</span>Les guides Celexia · Artisans du bâtiment</p>
        <h1 className="page-title resource-title mt-6">{SEO_HUB.h1}</h1>
        <p className="mt-7 max-w-2xl text-lg text-encre-600">Comprendre l’apport d’affaires, évaluer une commission, choisir un partenariat : des réponses concrètes pour organiser votre recherche de chantiers.</p>
      </div>
    </section>
    <section className="section">
      <div className="container-custom">
        <div className="section-label"><span className="section-num">01</span><h2 className="section-kicker">Votre prochain chantier commence ici</h2></div>
        <ResourceCards />
        <div className="mt-10"><h2 className="section-title mb-8">Un partenariat, dans les faits.</h2><PartnerCaseLink /></div>
        <p className="mt-8 text-sm text-encre-600">Ces repères sont rédigés par <Link to="/about" className="text-violet-700 underline underline-offset-4">L’équipe Celexia</Link>, pour les entreprises de piscine, couverture, façade et isolation extérieure, et maçonnerie.</p>
      </div>
    </section>
    <section className="section !pt-0">
      <div className="container-custom application-invite sur-fonce grid lg:grid-cols-2 gap-8 items-center">
        <div><p className="section-kicker mb-5">Passons à votre entreprise</p><h2 className="section-title !text-white">Votre métier.<br />Vos projets de développement.</h2></div>
        <div><p className="text-violet-200 mb-7">Décrivez votre activité, votre équipe et les chantiers que vous pouvez accueillir. Nous prendrons le temps d’étudier votre demande.</p><CTAButton to={candidatureUrl('guides')}>{CTA_LABEL}</CTAButton></div>
      </div>
    </section>
  </>;
}
