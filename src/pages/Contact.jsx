import { usePageMeta } from '../hooks/usePageMeta';
import { candidatureUrl, CTA_LABEL } from '../lib/links';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';

const Arrow = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;

export default function Contact() {
  usePageMeta({
    title: 'Parlons de votre entreprise | Agence Celexia',
    description: 'Contactez l’équipe Celexia ou présentez votre entreprise. Votre candidature est étudiée par l’équipe Celexia avant un premier échange.',
    canonical: 'https://agencecelexia.fr/contact',
  });
  return (
    <>
      <section className="page-hero surface-paper !pb-12 md:!pb-16">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-end">
          <div><p className="eyebrow mb-7"><span className="w-2 h-2 rounded-full bg-violet-600" aria-hidden="true" />Le début d’une conversation</p><h1 className="page-title">Parlons de<br /><span className="text-violet-600">votre entreprise.</span></h1></div>
          <p className="text-lg text-encre-600 leading-relaxed lg:pb-2 max-w-md">Une question sur notre fonctionnement, votre métier ou votre secteur ? Nous sommes là pour en parler avec vous.</p>
        </div>
      </section>
      <section className="surface-paper px-5 md:px-8 pb-20 md:pb-28">
        <div className="container-custom grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          <Reveal><div className="bande sur-fonce rounded-[28px] p-8 md:p-11 h-full flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between gap-5"><p className="section-kicker">01 / Présenter votre activité</p><span className="w-10 h-10 rounded-full bg-citron-100 text-violet-900 grid place-items-center"><Arrow /></span></div>
            <h2 className="mt-10 font-display font-medium text-3xl md:text-4xl tracking-tight leading-tight max-w-sm">Votre prochain chapitre commence ici.</h2>
            <p className="mt-5 text-violet-200 text-sm leading-relaxed max-w-md">Le formulaire nous permet de comprendre votre entreprise : son métier, son équipe, son activité et les chantiers qu’elle peut accueillir.</p>
            <ol className="mt-8 mb-10 space-y-4 text-sm">{['Vous nous présentez votre entreprise.', 'L’équipe Celexia analyse votre demande.', 'Nous revenons vers vous pour échanger.'].map((text, i) => <li key={text} className="flex gap-3 items-center"><span className="w-7 h-7 shrink-0 rounded-full border border-violet-300/50 text-violet-200 flex items-center justify-center text-xs tabular">{i + 1}</span>{text}</li>)}</ol>
            <div className="mt-auto"><CTAButton to={candidatureUrl('contact')}>{CTA_LABEL}</CTAButton></div>
          </div></Reveal>
          <Reveal delay={80}><div className="bg-white border border-brume-200 rounded-[28px] p-8 md:p-11 h-full">
            <div className="flex items-center justify-between gap-5"><p className="section-kicker">02 / Contacter l’équipe</p><span className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 grid place-items-center"><Arrow /></span></div>
            <h2 className="mt-10 font-display font-medium text-3xl md:text-4xl tracking-tight leading-tight text-encre-900">Un échange,<br />tout simplement.</h2>
            <p className="mt-5 text-encre-600 text-sm leading-relaxed">Vous préférez poser une question avant de présenter votre entreprise ? Appelez-nous ou écrivez-nous directement.</p>
            <a href="tel:+33651725756" className="group block py-7 mt-5 border-b border-brume-200"><span className="section-kicker">Par téléphone</span><span className="flex items-center justify-between gap-4 mt-3 text-encre-900 group-hover:text-violet-600 transition-colors"><span className="font-display tabular text-2xl md:text-3xl tracking-tight">06 51 72 57 56</span><Arrow /></span></a>
            <a href="mailto:agence.celexia@gmail.com" className="group block py-7"><span className="section-kicker">Par email</span><span className="flex items-center justify-between gap-3 mt-3 text-encre-900 group-hover:text-violet-600 transition-colors"><span className="font-medium text-base md:text-lg break-all">agence.celexia@gmail.com</span><span className="shrink-0"><Arrow /></span></span></a>
          </div></Reveal>
        </div>
      </section>
      <section className="section border-t border-brume-200">
        <div className="container-custom grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div><p className="section-kicker mb-5">Une entreprise, des interlocuteurs</p><h2 className="section-title">Celexia, en clair.</h2><p className="mt-5 text-encre-600">Thomas et Antoine, fondateurs de Celexia, au service des artisans du bâtiment.</p></div>
          <dl className="grid gap-x-8 sm:grid-cols-2">{[['Raison sociale', 'CELEXIA SASU'], ['Zone d’intervention', 'France entière']].map(([label, value]) => <div key={label} className="py-5 border-b border-brume-200"><dt className="section-kicker">{label}</dt><dd className="mt-3 text-encre-900 font-display text-xl">{value}</dd></div>)}</dl>
        </div>
      </section>
    </>
  );
}
