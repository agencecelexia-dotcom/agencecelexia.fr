import { Link } from 'react-router-dom';
import { GUIDE_GROUPS, SEO_HUB } from '../data/seoHub';
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
        <p className="mt-7 max-w-2xl text-lg text-encre-600">Choisir un apporteur d’affaires, comparer les plateformes de travaux, suivre vos demandes et vos devis : des repères concrets pour votre activité.</p>
        <nav aria-label="Thèmes des guides" className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
          {GUIDE_GROUPS.map(group => <a key={group.id} href={`#${group.id}`} className="text-link">{group.title}<span aria-hidden="true">↓</span></a>)}
        </nav>
      </div>
    </section>
    <section className="section">
      <div className="container-custom">
        <div className="space-y-16">
          {GUIDE_GROUPS.map((group, index) => <section key={group.id} id={group.id} className="scroll-mt-32">
            <div className="section-label"><span className="section-num">0{index + 1}</span><h2 className="section-kicker">{group.title}</h2></div>
            <p className="mb-8 max-w-2xl text-encre-600">{group.description}</p>
            <ResourceCards paths={group.paths} />
          </section>)}
        </div>
        <div className="mt-16"><h2 className="section-title mb-8">Un partenariat, dans les faits.</h2><PartnerCaseLink /></div>
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
