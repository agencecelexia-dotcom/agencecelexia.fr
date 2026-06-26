import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';
import { REGISTER_URL } from '../lib/links';
import Reveal from '../components/Reveal';

const Contact = () => {
  usePageMeta({
    title: 'Contact | Agence Celexia',
    description: 'Réservez un appel découverte gratuit de 30 min avec Agence Celexia pour comprendre comment notre apport d\'affaires peut développer votre activité d\'artisan.',
    canonical: 'https://agencecelexia.fr/contact'
  });

  const jsonLdSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://agencecelexia.fr/contact#contactpage',
        'name': 'Contactez Agence Celexia',
        'description': 'Réservez un appel découverte gratuit de 30 minutes pour évaluer ensemble votre potentiel d\'apport d\'affaires.',
        'url': 'https://agencecelexia.fr/contact',
        'inLanguage': 'fr-FR',
        'isPartOf': { '@id': 'https://agencecelexia.fr/#website' },
        'datePublished': '2024-10-01',
        'dateModified': '2026-06-26'
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://agencecelexia.fr/contact#localbusiness',
        'name': 'Agence Celexia',
        'description': 'Agence d\'apport d\'affaires pour artisans. Commission 10 % sur devis signés.',
        'url': 'https://agencecelexia.fr',
        'telephone': '+33651725756',
        'email': 'agence.celexia@gmail.com',
        'image': 'https://agencecelexia.fr/logo.png',
        'address': { '@type': 'PostalAddress', addressCountry: 'FR', addressLocality: 'France' },
        'areaServed': { '@type': 'Country', name: 'France' },
        'priceRange': '€€',
        'openingHours': 'Mo-Fr 09:00-18:00',
        'contactPoint': { '@type': 'ContactPoint', telephone: '+33651725756', email: 'agence.celexia@gmail.com', contactType: 'customer service', availableLanguage: 'French', areaServed: 'FR' }
      }
    ]
  }), []);

  useJsonLd(jsonLdSchema);

  useEffect(() => {
    initCalInline();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="dots-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" aria-hidden="true" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="tag-glass mb-8 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            Contact
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Réservez votre{' '}
            <span className="gradient-text">appel découverte</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            30 minutes pour valider que notre apport d'affaires est adapté à votre activité d'artisan
            et estimer ensemble le volume de chantiers que nous pouvons vous apporter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary arrow-animate text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              Devenir partenaire
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400 font-medium">Sans engagement · 10 % uniquement sur devis signés · Aucune avance</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          <Reveal>
            <div className="card p-8 text-center group hover:shadow-glow h-full">
              <div className="icon-box bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white mx-auto mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:agence.celexia@gmail.com" className="text-violet-600 hover:text-violet-700 transition-colors font-semibold text-lg">
                agence.celexia@gmail.com
              </a>
              <p className="text-gray-500 text-sm mt-3">Réponse sous 24h</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-8 text-center group hover:shadow-glow h-full">
              <div className="icon-box bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white mx-auto mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
              <a href="tel:+33651725756" className="text-emerald-600 hover:text-emerald-700 transition-colors font-semibold text-lg">
                06 51 72 57 56
              </a>
              <p className="text-gray-500 text-sm mt-3">Lun-Ven 9h-18h</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi prendre rendez-vous */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span className="tag mb-4 inline-block">Nos engagements</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Pourquoi prendre rendez-vous
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Un appel découverte conçu pour vous apporter de la valeur, que vous deveniez partenaire ou non.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                color: 'violet',
                title: 'Gratuit et sans engagement',
                desc: "30 minutes pour étudier ensemble votre activité, votre zone, votre panier moyen et valider que notre modèle d'apport d'affaires est adapté à votre situation."
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                color: 'emerald',
                title: 'Projections concrètes',
                desc: "Nombre de chantiers qualifiés transmis par mois, taux de conversion attendu en devis signés, montant cible de commission, projection sur trois, six et douze mois."
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                color: 'amber',
                title: 'Expertise artisans',
                desc: "19 métiers accompagnés, de la plomberie à l'arboriculture. Cette spécialisation nous permet de calibrer chaque dispositif en fonction des spécificités de votre métier."
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                color: 'blue',
                title: 'Transparence totale',
                desc: "Si notre modèle n'est pas adapté à votre situation, nous vous le dirons franchement. Notre rémunération étant liée aux devis signés, nous n'avons aucun intérêt à embarquer un artisan pour qui le dispositif ne fonctionnera pas."
              }
            ].map((item, i) => {
              const colors = {
                violet: { bg: 'bg-violet-100', text: 'text-violet-600', hoverBg: 'group-hover:bg-violet-600' },
                emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' },
                amber: { bg: 'bg-amber-100', text: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
                blue: { bg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
              };
              const c = colors[item.color];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="card p-8 group hover:shadow-glow h-full">
                    <div className={`icon-box ${c.bg} ${c.text} ${c.hoverBg} group-hover:text-white mb-5`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking section — DARK */}
      <section className="section-dark py-20 md:py-28 mt-12 px-4 md:px-6 relative overflow-hidden">
        <div className="dots-bg-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 mb-4">
                Réservation
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Choisissez votre créneau
              </h2>
              <p className="text-base md:text-lg text-white/50">
                Un échange sans engagement pour évaluer si notre apport d'affaires est adapté à votre activité.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-dark p-6 md:p-8 mb-8" style={{ borderColor: 'rgba(124,58,237,0.2)' }}>
              <h3 className="font-display text-lg font-bold text-white mb-6 text-center">
                Ce que nous allons aborder
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { num: '01', title: 'Votre activité', desc: "Métier, zone d'intervention, panier moyen, capacité à absorber des chantiers supplémentaires" },
                  { num: '02', title: 'Adéquation du modèle', desc: 'Validation que l\'apport d\'affaires à 10 % sur devis signés est adapté à votre situation' },
                  { num: '03', title: 'Projection chiffrée', desc: 'Estimation réaliste du volume de chantiers que nous pouvons vous apporter' }
                ].map((item) => (
                  <div key={item.num} className="text-center">
                    <span className="font-display text-2xl font-bold gradient-text-light mb-3 block">{item.num}</span>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
              <div
                id={CAL_INLINE_ID}
                style={{width:'100%', height:'700px', overflow:'scroll', borderRadius: '12px'}}
              ></div>
            </div>

            <div className="text-center mt-4">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors"
              >
                Le calendrier ne charge pas ? Ouvrir directement sur cal.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-white/40 text-sm">
              <span>Appel de 30 minutes</span>
              <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" aria-hidden="true" />
              <span>Sans engagement</span>
              <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" aria-hidden="true" />
              <span>100% confidentiel</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
