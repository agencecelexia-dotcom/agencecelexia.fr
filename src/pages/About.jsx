import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const PRINCIPES = [
  {
    titre: 'Partir de votre réalité.',
    desc: 'Votre métier, votre secteur et votre capacité à réaliser les travaux sont notre point de départ. Un dossier doit correspondre à votre activité avant de vous être transmis.',
  },
  {
    titre: 'Vous laisser la main.',
    desc: 'Vous échangez avec le particulier, établissez votre devis et gardez la main sur vos prix comme sur la relation client. Votre savoir-faire reste au centre du projet.',
  },
  {
    titre: 'Avancer dans le même sens.',
    desc: 'Nous finançons la recherche des projets. Notre rémunération intervient uniquement lorsque votre chantier est signé et que vous avez reçu l’acompte.',
  },
];

export default function About() {
  usePageMeta({
    title: 'Qui sommes-nous ? | Agence Celexia',
    description: 'Thomas et Antoine, fondateurs de Celexia. Des projets qualifiés pour les artisans, une commission uniquement après signature et acompte reçu.',
    canonical: 'https://agencecelexia.fr/about',
  });

  return (
    <>
      <section className="page-hero surface-paper">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-7"><span className="w-2 h-2 rounded-full bg-violet-600" aria-hidden="true" />L’équipe Celexia</p>
            <h1 className="page-title">Le goût du travail<br /><span className="text-violet-600">bien fait.</span></h1>
            <p className="mt-8 max-w-lg text-lg text-encre-700 leading-relaxed">Nous sommes Thomas et Antoine. Avec Celexia, nous faisons le lien entre des projets de travaux sérieux et des entreprises qui ont le savoir-faire pour les réaliser.</p>
            <p className="mt-5 max-w-lg text-encre-600 leading-relaxed">Vous vous concentrez sur votre métier. Nous prenons en charge la recherche et la qualification des demandes.</p>
            <div className="mt-8"><CTAButton to={candidatureUrl('about-hero')} variant="secondary">{CTA_LABEL}</CTAButton></div>
          </div>
          <div className="bande sur-fonce relative overflow-hidden rounded-[28px] p-8 md:p-11">
            <div className="flex items-center justify-between gap-4">
              <span className="section-kicker">Une conviction commune</span>
              <svg viewBox="0 0 32 32" className="w-9 h-9 text-citron-100" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M16 2v28M2 16h28M6 6l20 20M6 26 26 6" /></svg>
            </div>
            <p className="py-14 md:py-20 font-display font-medium text-[clamp(2.75rem,5vw,4.25rem)] leading-[1.03] tracking-[-0.05em]">On gagne<br />quand vous<br /><span className="text-citron-100">gagnez.</span></p>
            <div className="border-t border-white/20 pt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2" aria-hidden="true"><span className="w-12 h-12 rounded-full bg-violet-200 text-violet-900 border-2 border-violet-900 flex items-center justify-center font-display text-lg">T</span><span className="w-12 h-12 rounded-full bg-citron-100 text-violet-900 border-2 border-violet-900 flex items-center justify-center font-display text-lg">A</span></div>
              <p className="text-sm"><strong className="block font-semibold">Thomas &amp; Antoine</strong><span className="text-violet-200">Fondateurs de Celexia</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-label"><span className="section-num">01</span><span className="section-kicker">Notre rôle</span></div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <Reveal><h2 className="section-title">Les bons projets.<br />Le bon savoir-faire.<br /><span className="text-violet-600">Le lien entre les deux.</span></h2></Reveal>
            <Reveal delay={80}><div className="space-y-5 text-encre-600 leading-relaxed"><p>Un chantier commence bien avant le premier coup de pelle. Il faut trouver le projet, comprendre le besoin, vérifier le budget et savoir si le calendrier est réaliste. C’est cette partie du travail que nous prenons en charge.</p><p>Celexia est un <strong className="font-semibold text-encre-900">apporteur d’affaires pour les artisans du bâtiment</strong>. Nous finançons la recherche des projets et vérifions chaque demande avant de vous la transmettre.</p><p>Nous accompagnons les entreprises de construction de piscines, de couverture, de façade et d’isolation extérieure, et de maçonnerie, partout en France.</p></div></Reveal>
          </div>
          <dl className="mt-14 grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brume-200 bg-brume-200">
            {[['Notre entreprise', 'CELEXIA SASU'], ['Notre terrain', 'La France entière']].map(([label, value]) => <div key={label} className="p-6 md:p-8 bg-brume-50"><dt className="section-kicker">{label}</dt><dd className="mt-3 font-display text-xl text-encre-900">{value}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section surface-paper border-y border-brume-200">
        <div className="container-custom">
          <div className="section-label"><span className="section-num">02</span><span className="section-kicker">Notre manière de travailler</span></div>
          <Reveal><h2 className="section-title max-w-2xl">Une collaboration<br />à taille humaine.</h2></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {PRINCIPES.map((principe, i) => <Reveal key={principe.titre} delay={i * 60}><div className="h-full bg-white rounded-[24px] p-7 md:p-8 border border-brume-200"><span className="font-display text-sm text-violet-600" aria-hidden="true">/ 0{i + 1}</span><h3 className="mt-10 font-display font-medium text-2xl tracking-tight leading-tight text-encre-900">{principe.titre}</h3><p className="mt-5 text-sm text-encre-600 leading-relaxed">{principe.desc}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom application-invite sur-fonce grid gap-9 lg:grid-cols-[1.3fr_1fr] items-center">
          <div><p className="section-kicker mb-5">Faisons connaissance</p><h2 className="section-title !text-white">Et si nous parlions<br />de votre entreprise ?</h2></div>
          <div><p className="text-violet-200 leading-relaxed mb-7">Présentez votre activité, votre équipe et vos capacités. L’équipe Celexia étudiera votre demande et reviendra vers vous pour la suite.</p><CTAButton to={candidatureUrl('about')}>{CTA_LABEL}</CTAButton></div>
        </div>
      </section>
    </>
  );
}
