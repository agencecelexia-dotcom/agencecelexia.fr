/**
 * Post-build script: generates static HTML files for each route
 * with proper meta tags (title, description, canonical, OG, Twitter, JSON-LD).
 *
 * This ensures Googlebot sees correct SEO metadata in the HTML source
 * without needing to execute JavaScript.
 *
 * JSON-LD schemas match exactly what each React component injects at runtime.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE_URL = 'https://agencecelexia.fr';

// All routes with their SEO meta data and JSON-LD schemas
const routes = [
  {
    path: '/',
    title: 'Agence Celexia | Marketing Digital pour Artisans',
    description: 'Agence marketing digital pour artisans du bâtiment. Publicité locale, sites web, SEO, avis clients, emailing et automatisation. Résultats mesurables.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://agencecelexia.fr/#website',
          url: 'https://agencecelexia.fr',
          name: 'Agence Celexia',
          description: 'Agence marketing digital spécialisée pour artisans du bâtiment.',
          inLanguage: 'fr-FR',
          publisher: { '@id': 'https://agencecelexia.fr/#organization' }
        },
        {
          '@type': 'WebPage',
          '@id': 'https://agencecelexia.fr/#webpage',
          url: 'https://agencecelexia.fr',
          name: 'Agence Celexia | Marketing Digital pour Artisans',
          isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
          about: { '@id': 'https://agencecelexia.fr/#organization' },
          description: 'Agence marketing digital pour artisans du bâtiment. Publicité locale, sites web, SEO, avis clients, emailing et automatisation.',
          inLanguage: 'fr-FR',
          datePublished: '2024-10-01',
          dateModified: '2026-03-11'
        },
        {
          '@type': ['Organization', 'ProfessionalService'],
          '@id': 'https://agencecelexia.fr/#organization',
          name: 'Agence Celexia',
          url: 'https://agencecelexia.fr',
          logo: { '@type': 'ImageObject', url: 'https://agencecelexia.fr/logo.png', width: 605, height: 98 },
          image: 'https://agencecelexia.fr/logo.png',
          description: 'Agence marketing digital pour artisans du bâtiment. Publicité à la performance, sites web, SEO local, gestion avis clients, email marketing, automatisation.',
          priceRange: '€€',
          serviceType: 'Marketing Digital pour Artisans',
          telephone: '+33651725756',
          email: 'contact@agencecelexia.fr',
          address: { '@type': 'PostalAddress', addressCountry: 'FR', addressRegion: 'France métropolitaine', addressLocality: 'France' },
          foundingDate: '2024',
          areaServed: { '@type': 'Country', name: 'France' },
          knowsLanguage: 'fr',
          sameAs: ['https://www.facebook.com/agencecelexia', 'https://www.linkedin.com/company/agence-celexia'],
          founder: [
            { '@type': 'Person', name: 'Thomas', jobTitle: 'Co-fondateur - Marketing Digital & Acquisition Client' },
            { '@type': 'Person', name: 'Antoine', jobTitle: 'Co-fondateur - Développement Web & Optimisation Technique' }
          ],
          contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'contact@agencecelexia.fr', contactType: 'customer service', availableLanguage: 'French' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services Marketing Digital pour Artisans',
            itemListElement: [
              { '@type': 'OfferCatalog', name: 'Publicité à la Performance', url: 'https://agencecelexia.fr/services/publicite-performance' },
              { '@type': 'OfferCatalog', name: 'Création de Sites Web', url: 'https://agencecelexia.fr/services/site-web' },
              { '@type': 'OfferCatalog', name: 'Référencement SEO', url: 'https://agencecelexia.fr/services/seo' },
              { '@type': 'OfferCatalog', name: 'Gestion Avis Clients', url: 'https://agencecelexia.fr/services/avis-clients' },
              { '@type': 'OfferCatalog', name: 'Email Marketing', url: 'https://agencecelexia.fr/services/emailing' },
              { '@type': 'OfferCatalog', name: 'Automatisation Marketing', url: 'https://agencecelexia.fr/services/automatisation' }
            ]
          }
        }
      ]
    },
  },
  {
    path: '/about',
    title: 'À propos | Agence Celexia – Notre Histoire',
    description: 'Découvrez comment Agence Celexia aide les artisans à générer des leads qualifiés. Transparence, expertise métier, résultats mesurables.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'À propos - Agence Celexia',
      description: "Découvrez comment Agence Celexia aide les artisans à générer des leads qualifiés grâce au marketing digital local.",
      url: 'https://agencecelexia.fr/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Agence Celexia',
        url: 'https://agencecelexia.fr',
        email: 'contact@agencecelexia.fr',
        description: "Agence marketing digital spécialisée dans l'acquisition client pour les artisans et professionnels du bâtiment.",
        foundingDate: '2024',
        areaServed: { '@type': 'Country', name: 'France' },
        knowsAbout: ['Marketing digital', 'Référencement local', 'Google Ads', 'Acquisition client artisans']
      },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/contact',
    title: 'Contact | Agence Celexia – Appel Gratuit',
    description: 'Réservez un appel stratégique gratuit de 30 min avec Agence Celexia. Analyse de visibilité, recommandations et projection de résultats pour artisans.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': 'https://agencecelexia.fr/contact#contactpage',
          name: 'Contactez Agence Celexia',
          description: 'Réservez un appel stratégique gratuit de 30 minutes pour analyser votre potentiel de croissance digitale.',
          url: 'https://agencecelexia.fr/contact',
          inLanguage: 'fr-FR',
          isPartOf: { '@id': 'https://agencecelexia.fr/#website' },
          about: { '@id': 'https://agencecelexia.fr/contact#localbusiness' },
          datePublished: '2024-10-01',
          dateModified: '2026-03-11'
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://agencecelexia.fr/contact#localbusiness',
          name: 'Agence Celexia',
          description: 'Agence marketing digital spécialisée pour artisans et professionnels du bâtiment. SEO local, publicité à la performance, création de sites web.',
          url: 'https://agencecelexia.fr',
          telephone: '+33651725756',
          email: 'contact@agencecelexia.fr',
          image: 'https://agencecelexia.fr/logo.png',
          address: { '@type': 'PostalAddress', addressCountry: 'FR', addressLocality: 'France' },
          areaServed: { '@type': 'Country', name: 'France' },
          priceRange: '€€',
          openingHours: 'Mo-Fr 09:00-18:00',
          contactPoint: { '@type': 'ContactPoint', telephone: '+33651725756', email: 'contact@agencecelexia.fr', contactType: 'customer service', availableLanguage: 'French', areaServed: 'FR' }
        }
      ]
    },
  },
  {
    path: '/reserver',
    title: 'Réserver un audit stratégique | Agence Celexia',
    description: '30 minutes pour analyser votre situation et évaluer le potentiel de croissance de votre activité. Sans engagement. Gratuit.',
  },
  {
    path: '/sites-artisans',
    title: 'Sites Web Artisans | Agence Celexia',
    description: 'Site web professionnel pour artisans livré en 7 jours. Design moderne, optimisé SEO, responsive. Devis gratuit pour plombiers, électriciens, menuisiers.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions Légales - Agence Celexia',
    description: "Mentions légales du site agencecelexia.fr. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de Confidentialité - Agence Celexia',
    description: 'Politique de confidentialité et de protection des données personnelles du site agencecelexia.fr. Conformité RGPD.',
  },
  // Services
  {
    path: '/services/publicite-performance',
    title: 'Publicité Performance | Agence Celexia',
    description: 'Payez uniquement pour des appels de clients réels. Positionnement prioritaire sur Google Local. Paiement par appel qualifié pour artisans.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/publicite-performance/#service',
      name: 'Publicité à la Performance pour Artisans',
      description: "Système de génération d'appels qualifiés pour artisans. Positionnement prioritaire sur Google Local Services Ads avec paiement uniquement à l'appel qualifié.",
      url: 'https://agencecelexia.fr/services/publicite-performance',
      serviceType: 'Publicité digitale à la performance',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/services/site-web',
    title: 'Sites Web Artisans | Agence Celexia',
    description: 'Site web professionnel pour artisans livré en 7 jours. Design moderne, optimisé SEO, responsive. Devis gratuit pour plombiers, électriciens, menuisiers.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/site-web/#service',
      name: 'Création de Sites Web pour Artisans',
      description: 'Conception et développement de sites web professionnels pour artisans, livrés en 7 jours. Design responsive, optimisé SEO et conversion.',
      url: 'https://agencecelexia.fr/services/site-web',
      serviceType: 'Création de site web',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/services/seo',
    title: 'Référencement SEO Local pour Artisans | Agence Celexia',
    description: 'Positionnez votre entreprise en tête des résultats Google locaux. SEO technique, optimisation Google My Business, avis clients. Résultats visibles sous 90 jours.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/seo/#service',
      name: 'Référencement SEO Local pour Artisans',
      description: 'Service de référencement naturel local pour artisans. Optimisation Google My Business, SEO technique, contenu optimisé et backlinks de qualité. Résultats visibles sous 90 jours.',
      url: 'https://agencecelexia.fr/services/seo',
      serviceType: 'Référencement naturel SEO local',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/services/avis-clients',
    title: 'Gestion Automatisée des Avis Clients | Google Reviews | Agence Celexia',
    description: 'Multipliez vos avis Google automatiquement. Système de collecte, réponses automatiques, gestion de réputation. Objectif de forte augmentation en 3 mois.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/avis-clients/#service',
      name: 'Gestion Automatisée des Avis Clients Google',
      description: "Système automatisé de collecte et gestion des avis Google pour artisans. Collecte par SMS et email, réponses IA, alertes avis négatifs et suivi de réputation en temps réel.",
      url: 'https://agencecelexia.fr/services/avis-clients',
      serviceType: 'Gestion de réputation en ligne',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/services/emailing',
    title: 'Campagnes Email Automatisées pour Artisans | Agence Celexia',
    description: "Emails automatiques de relance, newsletters, promotions. Taux d'ouverture optimisé. Reconquête clients inactifs. CRM intégré avec votre activité.",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/emailing/#service',
      name: 'Campagnes Email Automatisées pour Artisans',
      description: 'Service de campagnes email automatisées pour artisans. Relances devis, promotions saisonnières, rappels entretien et reconquête de clients inactifs avec CRM intégré.',
      url: 'https://agencecelexia.fr/services/emailing',
      serviceType: 'Email marketing automatisé',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/services/automatisation',
    title: 'Automatisation Complète pour Artisans | CRM + Workflows | Agence Celexia',
    description: 'Automatisez tout : devis, facturation, relances, rappels RDV, collecte avis. CRM artisan connecté à vos outils. Économisez un temps précieux.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/services/automatisation/#service',
      name: 'Automatisation Complète pour Artisans',
      description: "Service d'automatisation des processus administratifs pour artisans. CRM artisan, devis automatiques, relances intelligentes, rappels RDV, facturation et collecte d'avis automatisés.",
      url: 'https://agencecelexia.fr/services/automatisation',
      serviceType: 'Automatisation de processus métier',
      category: 'Marketing Digital',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Artisans et professionnels du bâtiment' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  // Métiers
  {
    path: '/metiers/pisciniste',
    title: 'Solutions Marketing Digital pour Piscinistes | Agence Celexia',
    description: 'Recommandations personnalisées pour piscinistes : publicité, site web, avis clients. Générez plus de leads qualifiés pour vos projets piscine.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/pisciniste/#service',
      name: 'Marketing Digital pour Piscinistes',
      description: "Solutions de marketing digital sur-mesure pour les piscinistes : génération de leads qualifiés, site web portfolio, gestion des avis clients et campagnes email saisonnières pour maximiser votre chiffre d'affaires.",
      url: 'https://agencecelexia.fr/metiers/pisciniste',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Piscinistes' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/paysagiste',
    title: 'Solutions Marketing Digital pour Paysagistes | Agence Celexia',
    description: 'Recommandations personnalisées pour paysagistes : publicité, site web portfolio, avis clients. Développez votre carnet de commandes.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/paysagiste/#service',
      name: 'Marketing Digital pour Paysagistes',
      description: "Stratégies de marketing digital adaptées aux paysagistes : portfolio visuel en ligne, génération de leads saisonniers, gestion de réputation et campagnes email pour contrats d'entretien récurrents.",
      url: 'https://agencecelexia.fr/metiers/paysagiste',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Paysagistes' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/plombier',
    title: 'Solutions Marketing Digital pour Plombiers | Agence Celexia',
    description: "Recommandations personnalisées pour plombiers : publicité, site web, avis clients. Générez plus d'appels urgents et de chantiers.",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/plombier/#service',
      name: 'Marketing Digital pour Plombiers',
      description: "Marketing digital spécialisé pour plombiers : captation d'appels urgents, visibilité locale maximale, gestion des avis clients et fidélisation par email pour transformer les interventions ponctuelles en contrats récurrents.",
      url: 'https://agencecelexia.fr/metiers/plombier',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Plombiers' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/chauffagiste',
    title: 'Solutions Marketing Digital pour Chauffagistes | Agence Celexia',
    description: "Recommandations personnalisées pour chauffagistes : publicité, site web, avis clients. Générez plus de contrats d'entretien et installations.",
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/chauffagiste/#service',
      name: 'Marketing Digital pour Chauffagistes',
      description: "Accompagnement marketing digital complet pour chauffagistes : visibilité lors des pics hivernaux, promotion des installations pompes à chaleur, automatisation des rappels d'entretien obligatoire et positionnement sur la transition énergétique.",
      url: 'https://agencecelexia.fr/metiers/chauffagiste',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Chauffagistes' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/electricien',
    title: 'Solutions Marketing Digital pour Électriciens | Agence Celexia',
    description: 'Recommandations personnalisées pour électriciens : publicité, site web, avis clients. Générez plus de chantiers et dépannages électriques.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/electricien/#service',
      name: 'Marketing Digital pour Électriciens',
      description: 'Solutions marketing digital pour électriciens : captation de chantiers neufs et rénovations, visibilité sur les nouvelles technologies (bornes de recharge, panneaux solaires, domotique) et gestion de réputation en ligne.',
      url: 'https://agencecelexia.fr/metiers/electricien',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Électriciens' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/menuisier',
    title: 'Solutions Marketing Digital pour Menuisiers | Agence Celexia',
    description: 'Recommandations personnalisées pour menuisiers : site portfolio, publicité, avis clients. Multipliez vos projets menuiserie.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/menuisier/#service',
      name: 'Marketing Digital pour Menuisiers',
      description: 'Marketing digital dédié aux menuisiers et ébénistes : mise en valeur du savoir-faire artisanal, portfolio de réalisations sur-mesure, différenciation face à la grande distribution et génération de projets à forte valeur ajoutée.',
      url: 'https://agencecelexia.fr/metiers/menuisier',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Menuisiers' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/couvreur',
    title: 'Solutions Marketing Digital pour Couvreurs | Agence Celexia',
    description: 'Recommandations personnalisées pour couvreurs : publicité, site web, avis clients. Multipliez vos chantiers toiture et rénovation.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/couvreur/#service',
      name: 'Marketing Digital pour Couvreurs',
      description: "Solutions marketing digital sur-mesure pour couvreurs : publicité à la performance, site web avec galerie avant/après, gestion des avis clients et campagnes saisonnières pour capter les urgences toiture et développer votre carnet de chantiers.",
      url: 'https://agencecelexia.fr/metiers/couvreur',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Couvreurs' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/macon',
    title: 'Solutions Marketing Digital pour Maçons | Agence Celexia',
    description: 'Recommandations personnalisées pour maçons : publicité, site web portfolio, avis clients. Multipliez vos chantiers maçonnerie.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/macon/#service',
      name: 'Marketing Digital pour Maçons',
      description: 'Stratégies marketing digital adaptées aux maçons : génération de leads qualifiés pour chantiers gros oeuvre, site portfolio professionnel, gestion des avis et campagnes ciblées pour le marché de la rénovation et de la construction.',
      url: 'https://agencecelexia.fr/metiers/macon',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Maçons' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/carreleur',
    title: 'Solutions Marketing Digital pour Carreleurs | Agence Celexia',
    description: 'Recommandations personnalisées pour carreleurs : site portfolio, publicité, avis clients. Multipliez vos chantiers carrelage.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/carreleur/#service',
      name: 'Marketing Digital pour Carreleurs',
      description: "Accompagnement marketing digital dédié aux carreleurs : site portfolio visuel, publicité ciblée pour projets salle de bain et cuisine, gestion des avis avec photos de finitions et stratégie de présence sur Google Images.",
      url: 'https://agencecelexia.fr/metiers/carreleur',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Carreleurs' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/peintre',
    title: 'Solutions Marketing Digital pour Peintres | Agence Celexia',
    description: 'Recommandations personnalisées pour peintres : site portfolio, publicité, avis clients. Multipliez vos chantiers peinture.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/peintre/#service',
      name: 'Marketing Digital pour Peintres',
      description: 'Solutions marketing digital conçues pour les peintres en bâtiment : différenciation par la spécialisation, site portfolio avec transformations avant/après, publicité locale et stratégie de marque pour se démarquer dans un marché très concurrentiel.',
      url: 'https://agencecelexia.fr/metiers/peintre',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Peintres' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/serrurier',
    title: 'Solutions Marketing Digital pour Serruriers | Agence Celexia',
    description: 'Recommandations personnalisées pour serruriers : publicité urgence, site web, avis clients. Multipliez vos interventions serrurerie.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/serrurier/#service',
      name: 'Marketing Digital pour Serruriers',
      description: "Marketing digital spécialisé pour serruriers honnêtes : visibilité en urgence 24/7, site web avec tarifs transparents, collecte d'avis vérifiés et stratégie de confiance pour se différencier des arnaques en ligne.",
      url: 'https://agencecelexia.fr/metiers/serrurier',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Serruriers' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
  {
    path: '/metiers/vitrier',
    title: 'Solutions Marketing Digital pour Vitriers | Agence Celexia',
    description: 'Recommandations personnalisées pour vitriers : publicité urgence, site web, avis clients. Multipliez vos interventions vitrerie.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://agencecelexia.fr/metiers/vitrier/#service',
      name: 'Marketing Digital pour Vitriers',
      description: 'Stratégies marketing digital pour vitriers et miroitiers : captation des urgences bris de glace, positionnement sur le marché du vitrage énergétique, site web professionnel et gestion de la réputation en ligne pour développer votre clientèle.',
      url: 'https://agencecelexia.fr/metiers/vitrier',
      serviceType: 'Marketing Digital',
      category: 'Marketing Digital pour Artisans',
      provider: { '@id': 'https://agencecelexia.fr/#organization' },
      areaServed: { '@type': 'Country', name: 'France' },
      audience: { '@type': 'Audience', audienceType: 'Vitriers' },
      datePublished: '2024-10-01',
      dateModified: '2026-03-11'
    },
  },
];

// Breadcrumb segment names (matches Breadcrumbs.jsx)
const pageNames = {
  about: 'À propos',
  contact: 'Contact',
  'sites-artisans': 'Sites Web Artisans',
  reserver: 'Réserver',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
  services: 'Services',
  metiers: 'Métiers',
  'publicite-performance': 'Publicité à la Performance',
  'site-web': 'Création de Site Web',
  seo: 'Référencement SEO',
  'avis-clients': 'Avis Clients',
  emailing: 'Email Marketing',
  automatisation: 'Automatisation',
  pisciniste: 'Pisciniste',
  paysagiste: 'Paysagiste',
  plombier: 'Plombier',
  chauffagiste: 'Chauffagiste',
  electricien: 'Électricien',
  menuisier: 'Menuisier',
  couvreur: 'Couvreur',
  macon: 'Maçon',
  carreleur: 'Carreleur',
  peintre: 'Peintre',
  serrurier: 'Serrurier',
  vitrier: 'Vitrier',
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildBreadcrumbJsonLd(route) {
  if (route.path === '/') return null;

  const segments = route.path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Accueil', path: '/' }];
  let currentPath = '';
  segments.forEach((seg) => {
    currentPath += `/${seg}`;
    breadcrumbs.push({
      name: pageNames[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
      path: currentPath,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function generatePage(template, route) {
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = `${SITE_URL}/logo.png`;

  let html = template;

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" ?\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" ?\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // Replace OG tags
  html = html.replace(/<meta property="og:title" content="[^"]*" ?\/?>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" ?\/?>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" ?\/?>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*" ?\/?>/, `<meta property="og:image" content="${image}" />`);

  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*" ?\/?>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" ?\/?>/, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*" ?\/?>/, `<meta name="twitter:image" content="${image}" />`);

  // Inject JSON-LD schemas before </head>
  let schemas = '';

  // Add breadcrumb schema (matches Breadcrumbs.jsx behavior)
  const breadcrumbLd = buildBreadcrumbJsonLd(route);
  if (breadcrumbLd) {
    schemas += `    <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>\n`;
  }

  // Add page-specific JSON-LD schema
  if (route.jsonLd) {
    schemas += `    <script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>\n`;
  }

  if (schemas) {
    html = html.replace('</head>', `${schemas}  </head>`);
  }

  return html;
}

// Main
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let generated = 0;

for (const route of routes) {
  const html = generatePage(template, route);

  if (route.path === '/') {
    writeFileSync(templatePath, html);
  } else {
    const dir = join(distDir, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  generated++;
}

console.log(`Pre-rendered ${generated} pages with SEO meta tags and JSON-LD schemas.`);
