import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';
import { initCalInline, CAL_INLINE_ID, CAL_URL } from '../lib/cal';

const Contact = () => {
  // Métadonnées SEO pour la page Contact
  usePageMeta({
    title: 'Contact | Agence Celexia',
    description: 'Réservez un appel découverte gratuit de 30 min avec Agence Celexia pour comprendre comment notre apport d\'affaires peut développer votre activité d\'artisan.',
    canonical: 'https://agencecelexia.fr/contact'
  });

  // JSON-LD ContactPage + LocalBusiness schema
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
        'about': { '@id': 'https://agencecelexia.fr/contact#localbusiness' },
        'datePublished': '2024-10-01',
        'dateModified': '2026-05-10'
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
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FR',
          'addressLocality': 'France'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'France'
        },
        'priceRange': '€€',
        'openingHours': 'Mo-Fr 09:00-18:00',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+33651725756',
          'email': 'agence.celexia@gmail.com',
          'contactType': 'customer service',
          'availableLanguage': 'French',
          'areaServed': 'FR'
        }
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="tag mb-6 inline-block">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Réservez votre appel découverte
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            30 minutes pour valider que notre apport d'affaires est adapté à votre activité d'artisan
            et estimer ensemble le volume de chantiers que nous pouvons vous apporter.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-5
                           group-hover:bg-violet-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:agence.celexia@gmail.com" className="text-violet-600 hover:text-violet-700 transition-colors font-semibold text-lg">
              agence.celexia@gmail.com
            </a>
            <p className="text-gray-600 text-sm mt-3">Réponse sous 24h</p>
          </div>

          {/* Phone */}
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5
                           group-hover:bg-emerald-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
            <a href="tel:+33651725756" className="text-emerald-600 hover:text-emerald-700 transition-colors font-semibold text-lg">
              06 51 72 57 56
            </a>
            <p className="text-gray-600 text-sm mt-3">Lun-Ven 9h-18h</p>
          </div>
        </div>
      </section>

      {/* Pourquoi prendre rendez-vous */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Nos engagements</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Pourquoi prendre rendez-vous avec Celexia
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Un appel découverte conçu pour vous apporter de la valeur, que vous deveniez client ou non.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Block 1 */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Un appel gratuit et sans engagement</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Pendant 30 minutes, nous regardons ensemble votre activité, votre zone d'intervention,
                votre panier moyen et votre capacité à absorber des chantiers supplémentaires. On valide
                que notre modèle d'apport d'affaires est adapté à votre situation et on estime un volume
                réaliste d'appels que nous pouvons vous apporter. Vous repartez avec une vision claire,
                même si vous décidez de ne pas aller plus loin avec nous.
              </p>
            </div>

            {/* Block 2 */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Des projections concrètes et chiffrées</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Nous vous présentons une estimation réaliste basée sur les données de votre marché local :
                volume d'appels par mois, taux de conversion attendu en devis signés, montant cible de
                commission, projection sur trois, six et douze mois. Chaque chiffre est explicité et
                contextualisé pour que vous puissiez décider en pleine connaissance de cause.
              </p>
            </div>

            {/* Block 3 */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expertise spécifique artisans</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Nous travaillons exclusivement avec les artisans et les professionnels des services
                à l'habitat. 19 métiers accompagnés, de la plomberie à l'arboriculture, en passant par
                la couverture, les piscines, les fenêtres, les diagnostics immobiliers et les portes
                de garage. Cette spécialisation nous permet de calibrer chaque dispositif en fonction
                des spécificités de votre métier : panier moyen, urgence, saisonnalité, parcours d'achat.
              </p>
            </div>

            {/* Block 4 */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Transparence totale</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Si notre modèle n'est pas adapté à votre situation, nous vous le dirons franchement.
                Notre rémunération étant uniquement liée aux devis effectivement signés, nous n'avons
                aucun intérêt à embarquer un artisan pour qui le dispositif ne fonctionnera pas.
                Cette approche nous permet de construire des partenariats durables fondés sur la confiance
                et le résultat partagé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Réservation</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Réservez votre appel découverte
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Un échange sans engagement pour évaluer si notre apport d'affaires est adapté à votre activité.
            </p>
          </div>

          {/* What we'll cover */}
          <div className="card p-6 md:p-8 mb-8">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-6 text-center">
              Ce que nous allons aborder pendant l'appel
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Votre activité', desc: "Métier, zone d'intervention, panier moyen, capacité à absorber des chantiers supplémentaires" },
                { num: '02', title: 'Adéquation du modèle', desc: 'Validation que l\'apport d\'affaires à 10 % sur devis signés est adapté à votre situation' },
                { num: '03', title: 'Projection chiffrée', desc: 'Estimation réaliste du volume de chantiers que nous pouvons vous apporter' }
              ].map((item) => (
                <div key={item.num} className="text-center">
                  <span className="font-display text-2xl font-bold text-violet-200 mb-3 block">{item.num}</span>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cal.com Widget */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-soft border border-gray-200/80">
            <div
              id={CAL_INLINE_ID}
              style={{width:'100%', height:'700px', overflow:'scroll', borderRadius: '12px'}}
            ></div>
          </div>

          {/* Fallback : lien externe si le widget ne charge pas */}
          <div className="text-center mt-4">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-violet-600 underline underline-offset-2 transition-colors"
            >
              Le calendrier ne charge pas ? Ouvrir directement sur cal.com
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-gray-600 text-sm">
            <span>Appel de 30 minutes</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" aria-hidden="true" />
            <span>Sans engagement</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" aria-hidden="true" />
            <span>100% confidentiel</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
