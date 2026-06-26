import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { METIERS } from '../context/NicheContext';
import { getMetierContent } from '../data/metiers';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';
import { REGISTER_URL } from '../lib/links';

const STEPS = [
  {
    num: '01',
    title: 'On finance la pub et on génère les demandes',
    desc: 'Celexia investit 100 % du budget publicitaire et positionne votre métier en tête des résultats Google dans votre zone. Vous n\'avancez rien.'
  },
  {
    num: '02',
    title: 'On qualifie et on vous transmet le chantier',
    desc: 'On reçoit les appels, on vérifie le besoin, la zone et le budget, puis on vous transmet uniquement les projets prêts à chiffrer.'
  },
  {
    num: '03',
    title: 'Vous signez, vous payez 10 %',
    desc: 'Vous gérez la relation commerciale comme d\'habitude. Pas de devis signé = pas de facture. Pas de frais fixes, pas d\'engagement.'
  }
];

const COMMON_FAQ = [
  {
    q: 'Combien je paie exactement ?',
    a: 'Vous payez 10 % du montant TTC de chaque devis signé grâce à un appel apporté par Celexia. Si vous ne signez pas, vous ne payez rien.'
  },
  {
    q: 'Suis-je engagé sur une durée ?',
    a: 'Non. Aucun engagement minimum. Vous arrêtez quand vous voulez, sans frais.'
  },
  {
    q: 'Et si l\'appel n\'aboutit pas à un devis ?',
    a: 'Vous ne payez rien. Notre rôle est de filtrer en amont pour ne vous transmettre que des demandes sérieuses.'
  }
];

const MetierPage = () => {
  const { slug } = useParams();
  const metier = METIERS[slug];
  const content = getMetierContent(slug);
  const [calLoaded, setCalLoaded] = useState(false);
  const calRef = useRef(null);

  const label = metier?.label || '';
  const color = metier?.color || '#7C3AED';

  usePageMeta({
    title: metier ? `Apport d'affaires ${label} | Agence Celexia` : 'Métier | Agence Celexia',
    description: metier
      ? `Agence d'apport d'affaires pour ${label.toLowerCase()}. On finance la pub, on qualifie les clients, on vous transmet les chantiers. Vous payez 10 % uniquement sur les devis signés.`
      : '',
    canonical: metier ? `https://agencecelexia.fr/metiers/${slug}` : 'https://agencecelexia.fr/'
  });

  useJsonLd(metier ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://agencecelexia.fr/metiers/${slug}/#service`,
    'name': `Apport d'affaires pour ${label}`,
    'description': `Service d'apport d'affaires dédié au métier ${label.toLowerCase()}. Commission 10 % sur devis signés, sans frais fixes ni engagement.`,
    'url': `https://agencecelexia.fr/metiers/${slug}`,
    'serviceType': 'Apport d\'affaires',
    'provider': { '@id': 'https://agencecelexia.fr/#organization' },
    'areaServed': { '@type': 'Country', 'name': 'France' },
    'audience': { '@type': 'Audience', 'audienceType': label }
  } : null);

  useEffect(() => {
    if (!calRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !calLoaded) {
          setCalLoaded(true);
          initCalInline();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(calRef.current);
    return () => observer.disconnect();
  }, [calLoaded]);

  if (!metier) {
    return <Navigate to="/" replace />;
  }

  const accroche = content?.accroche || `Agence d'apport d'affaires pour ${label.toLowerCase()}.`;
  const audience = content?.audience || [];
  const faqExtra = content?.faqExtra || [];
  const faq = [...COMMON_FAQ, ...faqExtra];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-6 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 opacity-20"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="tag mb-6 inline-block"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {label}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Apport d'affaires
            <span className="block" style={{ color }}>{label}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            {accroche}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              Recevoir des chantiers
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link to="/reserver" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto justify-center">
              Réserver un appel découverte
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            10 % sur devis signés · Sans engagement · 0 € de frais fixes
          </p>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Trois étapes, zéro complexité
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="card p-7 md:p-8 border-gray-200 group hover:border-violet-200">
                <span className="font-display text-5xl font-bold text-violet-200 block mb-4">{s.num}</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE / TYPES DE CHANTIERS */}
      {audience.length > 0 && (
        <section className="py-20 md:py-28 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="tag mb-4 inline-block"
                style={{ backgroundColor: `${color}20`, color }}
              >
                Pour qui
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Les chantiers qu'on vous apporte
              </h2>
              <p className="text-lg text-gray-600">
                Des demandes calibrées aux spécificités du métier {label.toLowerCase()}.
              </p>
            </div>

            <div className="card p-6 md:p-10 border-gray-200">
              <ul className="space-y-4">
                {audience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Questions fréquentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Vos questions, nos réponses
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={i} className="group card p-5 md:p-6 border-gray-200 [&[open]]:border-violet-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {item.q}
                  </h3>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-lg font-bold transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CAL.COM BOOKING */}
      <section
        ref={calRef}
        id="contact"
        className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Réservez votre appel découverte {label.toLowerCase()}
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              30 minutes pour valider que notre modèle est adapté à votre activité et estimer
              ensemble le volume de chantiers que nous pouvons vous apporter.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
            {!calLoaded && (
              <div className="flex items-center justify-center" style={{height:'600px'}}>
                <div className="text-center">
                  <div className="w-8 h-8 border-3 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Chargement du calendrier...</p>
                </div>
              </div>
            )}
            <div
              id={CAL_INLINE_ID}
              style={{width:'100%', height:'600px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          {/* Fallback : lien externe si le widget ne charge pas */}
          <div className="text-center mt-6">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 hover:text-white underline underline-offset-2 transition-colors"
            >
              Le calendrier ne charge pas ? Ouvrir directement sur cal.com
            </a>
          </div>

          <div className="text-center mt-8 text-white/90">
            <p className="text-sm mb-1">Vous préférez nous écrire ?</p>
            <a href="mailto:agence.celexia@gmail.com" className="text-lg font-semibold text-white hover:underline transition-colors">
              agence.celexia@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetierPage;
