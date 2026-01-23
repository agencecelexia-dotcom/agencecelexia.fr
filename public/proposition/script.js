// ========================================
// AGENCE CELEXIA - PAGE DE PROPOSITION
// Script principal pour calculatrice ROI et génération PDF
// ========================================

// Configuration globale
const CONFIG = {
    setupFee: 2400,
    monthlyFee: 220,
    defaultCalls: 20,
    defaultConversion: 25,
    defaultBasket: 15000
};

// Variables globales pour stocker les données du formulaire
let contractData = null;

// ========================================
// INITIALISATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Personnalisation du nom du prospect (optionnel)
    personalizeProspectName();

    // Initialiser la calculatrice ROI
    initCalculator();

    // Initialiser le formulaire
    initForm();

    // Calculer les valeurs initiales
    calculateROI();
});

// ========================================
// PERSONNALISATION DU NOM
// ========================================
function personalizeProspectName() {
    // Récupérer le nom du prospect depuis l'URL (si présent)
    const urlParams = new URLSearchParams(window.location.search);
    const prospectName = urlParams.get('nom') || urlParams.get('name');

    if (prospectName) {
        const prospectNameElement = document.getElementById('prospect-name');
        if (prospectNameElement) {
            prospectNameElement.textContent = prospectName;
        }
    }
}

// ========================================
// CALCULATRICE ROI
// ========================================
function initCalculator() {
    const callsSlider = document.getElementById('calls-per-month');
    const conversionSlider = document.getElementById('conversion-rate');
    const basketSlider = document.getElementById('average-basket');

    // Event listeners pour les sliders
    callsSlider.addEventListener('input', updateCalculatorValues);
    conversionSlider.addEventListener('input', updateCalculatorValues);
    basketSlider.addEventListener('input', updateCalculatorValues);
}

function updateCalculatorValues() {
    // Mettre à jour les affichages des valeurs
    const calls = parseInt(document.getElementById('calls-per-month').value);
    const conversion = parseInt(document.getElementById('conversion-rate').value);
    const basket = parseInt(document.getElementById('average-basket').value);

    document.getElementById('calls-value').textContent = calls;
    document.getElementById('conversion-value').textContent = conversion;
    document.getElementById('basket-value').textContent = formatNumber(basket);

    // Recalculer le ROI
    calculateROI();
}

function calculateROI() {
    // Récupérer les valeurs
    const calls = parseInt(document.getElementById('calls-per-month').value);
    const conversionRate = parseInt(document.getElementById('conversion-rate').value);
    const basket = parseInt(document.getElementById('average-basket').value);

    // Calculs
    const numberOfSales = Math.round((calls * conversionRate) / 100);
    const monthlyRevenue = numberOfSales * basket;
    const totalCost = CONFIG.setupFee + CONFIG.monthlyFee;
    const netProfit = monthlyRevenue - totalCost;
    const roi = totalCost > 0 ? ((netProfit / totalCost) * 100) : 0;

    // Calculs supplémentaires pour le texte dynamique
    const revenuePerCall = basket * (conversionRate / 100);
    const callsToBreakEven = Math.ceil(totalCost / revenuePerCall);

    // Mettre à jour l'affichage
    document.getElementById('monthly-revenue').textContent = formatCurrency(monthlyRevenue);
    document.getElementById('roi-percentage').textContent = formatPercentage(roi);
    document.getElementById('net-profit').textContent = formatCurrency(netProfit);
    document.getElementById('total-cost').textContent = formatCurrency(totalCost);

    // Générer le texte ROI dynamique
    generateDynamicROIText(roi, callsToBreakEven, monthlyRevenue, totalCost, calls, conversionRate);

    // Mettre à jour la timeline
    updateTimeline(callsToBreakEven, monthlyRevenue);
}

// ========================================
// GÉNÉRATION DU TEXTE ROI DYNAMIQUE
// ========================================
function generateDynamicROIText(roi, callsToBreakEven, monthlyRevenue, totalCost, calls, conversionRate) {
    const roiContainer = document.getElementById('roi-dynamic-text');
    let content = '';

    if (roi > 500) {
        // ROI > 500% : Texte ultra-positif
        content = `
            <h3>🚀 Un Retour sur Investissement Exceptionnel</h3>
            <p>
                Avec un <strong>ROI de ${formatPercentage(roi)}</strong>, votre rentabilité est immédiate et massive.
                <span class="roi-highlight">${formatPercentage(roi)}</span>
            </p>
            <p>
                <strong>Concrètement :</strong> Vous êtes rentable dès le <strong>${callsToBreakEven}${getOrdinalSuffix(callsToBreakEven)} appel qualifié</strong>.
                Vous aurez généré <strong>${formatCurrency(monthlyRevenue)}</strong> de chiffre d'affaires avant même de nous payer les frais de setup de ${formatCurrency(CONFIG.setupFee)}.
            </p>
            <p>
                <strong>Notre garantie 30 jours fait que vous ne payez QUE si l'objectif de ${calls} appels qualifiés est atteint.</strong>
                En clair : vous encaissez d'abord, vous nous payez ensuite. Zéro risque pour vous.
            </p>
        `;
    } else if (roi >= 200 && roi <= 500) {
        // ROI entre 200-500% : Texte positif avec focus sur le risque zéro
        content = `
            <h3>💰 Une Rentabilité Solide et Sans Risque</h3>
            <p>
                Avec un <strong>ROI de ${formatPercentage(roi)}</strong>, vous multipliez votre investissement par ${Math.round(roi / 100)} en seulement 30 jours.
                <span class="roi-highlight">${formatPercentage(roi)}</span>
            </p>
            <p>
                <strong>Le point de rentabilité :</strong> Vous commencez à être rentable dès le <strong>${callsToBreakEven}${getOrdinalSuffix(callsToBreakEven)} appel qualifié</strong>.
                Avec un taux de conversion de ${conversionRate}%, cela représente seulement quelques jours d'activité.
            </p>
            <p>
                <strong>La garantie qui change tout :</strong> Grâce à notre garantie inverse 30 jours, vous ne prenez AUCUN risque.
                Si nous n'atteignons pas l'objectif de ${calls} appels qualifiés, vous ne payez rien. C'est nous qui prenons le risque, pas vous.
            </p>
        `;
    } else {
        // ROI < 200% : Texte rassurant sur la garantie et l'accompagnement
        content = `
            <h3>🎯 Une Croissance Maîtrisée et Garantie</h3>
            <p>
                Avec un <strong>ROI de ${formatPercentage(roi)}</strong>, vous doublez votre investissement dès le premier mois.
                <span class="roi-highlight">${formatPercentage(roi)}</span>
            </p>
            <p>
                <strong>Pourquoi c'est intéressant :</strong> Vous atteignez votre rentabilité au <strong>${callsToBreakEven}${getOrdinalSuffix(callsToBreakEven)} appel qualifié</strong>,
                et notre système est conçu pour générer ${calls} appels par mois de manière régulière et prévisible.
            </p>
            <p>
                <strong>Notre engagement :</strong> Nous vous accompagnons à chaque étape avec notre CRM Notion, notre système de collecte d'avis automatisé,
                et notre support prioritaire. Et surtout, grâce à notre garantie 30 jours, <strong>vous ne payez que si nous atteignons l'objectif</strong>.
            </p>
            <p>
                <strong>Zéro risque, 100% de résultats.</strong> C'est ça, la différence Celexia.
            </p>
        `;
    }

    roiContainer.innerHTML = content;
}

function getOrdinalSuffix(number) {
    if (number === 1) return 'er';
    return 'ème';
}

// ========================================
// MISE À JOUR DE LA TIMELINE
// ========================================
function updateTimeline(callsToBreakEven, monthlyRevenue) {
    const timelineElement = document.getElementById('timeline-first-revenue');
    if (timelineElement) {
        const estimatedDays = Math.ceil(callsToBreakEven / 2); // Estimation simplifiée
        timelineElement.textContent = `En moyenne ${estimatedDays} jours pour atteindre ${formatCurrency(Math.round(monthlyRevenue / 4))} de CA`;
    }
}

// ========================================
// GESTION DU FORMULAIRE
// ========================================
function initForm() {
    const form = document.getElementById('contract-form');
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Validation du formulaire
    if (!e.target.checkValidity()) {
        alert('Veuillez remplir tous les champs obligatoires correctement.');
        return;
    }

    // Récupérer les données du formulaire
    contractData = {
        companyName: document.getElementById('company-name').value,
        siret: document.getElementById('siret').value,
        managerName: document.getElementById('manager-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        sector: document.getElementById('sector').value,
        address: document.getElementById('address').value,
        serviceArea: document.getElementById('service-area').value,
        date: new Date().toLocaleDateString('fr-FR')
    };

    // Générer le PDF
    generateContractPDF();

    // Activer le bouton de téléchargement
    const downloadBtn = document.getElementById('download-contract');
    downloadBtn.disabled = false;
    downloadBtn.onclick = generateContractPDF;

    // Scroll vers le CTA final
    document.querySelector('.cta-final').scrollIntoView({ behavior: 'smooth' });

    // Message de confirmation
    setTimeout(() => {
        alert('✅ Votre contrat a été généré avec succès ! Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.');
    }, 500);
}

// ========================================
// GÉNÉRATION DU PDF
// ========================================
function generateContractPDF() {
    if (!contractData) {
        alert('Veuillez d\'abord remplir le formulaire.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuration
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const lineHeight = 7;
    let yPosition = margin;

    // Fonction helper pour ajouter du texte
    function addText(text, fontSize = 11, style = 'normal', align = 'left') {
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', style);

        if (align === 'center') {
            const textWidth = doc.getTextWidth(text);
            doc.text(text, (pageWidth - textWidth) / 2, yPosition);
        } else {
            doc.text(text, margin, yPosition);
        }

        yPosition += lineHeight;
    }

    function addSpace(lines = 1) {
        yPosition += lineHeight * lines;
    }

    function addLine() {
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 5;
    }

    function checkPageBreak() {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = margin;
        }
    }

    // ========== CONTENU DU PDF ==========

    // En-tête
    doc.setFillColor(37, 99, 235); // Bleu primaire
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('AGENCE CELEXIA', pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Contrat de Prestation de Services', pageWidth / 2, 30, { align: 'center' });

    // Reset couleur texte
    doc.setTextColor(0, 0, 0);
    yPosition = 50;

    // Titre principal
    addText('CONTRAT DE PRESTATION - LOCAL SERVICE ADS', 16, 'bold', 'center');
    addSpace(0.5);
    addText(`Généré le ${contractData.date}`, 10, 'italic', 'center');
    addSpace(2);

    addLine();
    addSpace();

    // Article 1 : Les Parties
    addText('ARTICLE 1 - LES PARTIES', 14, 'bold');
    addSpace(0.5);

    addText('Entre les soussignés :', 11, 'bold');
    addSpace(0.5);

    addText('LE PRESTATAIRE :', 11, 'bold');
    addText('Agence Celexia', 11, 'normal');
    addText('SIRET : [À COMPLÉTER]', 10, 'normal');
    addText('Adresse : [À COMPLÉTER]', 10, 'normal');
    addText('Email : thomas@agencecelexia.fr', 10, 'normal');
    addSpace();

    addText('Ci-après dénommé « Le Prestataire »', 10, 'italic');
    addSpace(1.5);

    addText('LE CLIENT :', 11, 'bold');
    addText(contractData.companyName, 11, 'normal');
    addText(`SIRET : ${contractData.siret}`, 10, 'normal');
    addText(`Représenté par : ${contractData.managerName}`, 10, 'normal');
    addText(`Adresse : ${contractData.address}`, 10, 'normal');
    addText(`Email : ${contractData.email}`, 10, 'normal');
    addText(`Téléphone : ${contractData.phone}`, 10, 'normal');
    addText(`Secteur d'activité : ${getSectorLabel(contractData.sector)}`, 10, 'normal');
    addText(`Zone d'intervention : ${contractData.serviceArea}`, 10, 'normal');
    addSpace();

    addText('Ci-après dénommé « Le Client »', 10, 'italic');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 2 : Objet de la Prestation
    addText('ARTICLE 2 - OBJET DE LA PRESTATION', 14, 'bold');
    addSpace(0.5);

    addText('Le Prestataire s\'engage à mettre en place et gérer une campagne Google Local Service Ads', 11, 'normal');
    addText('pour le compte du Client, avec pour objectif la génération de leads qualifiés.', 11, 'normal');
    addSpace();

    addText('OBJECTIF CONTRACTUEL :', 11, 'bold');
    addText('• Génération de 20 appels qualifiés en 30 jours calendaires', 11, 'normal');
    addSpace();

    addText('DÉFINITION D\'UN APPEL QUALIFIÉ :', 11, 'bold');
    addText('Un appel est considéré comme qualifié lorsqu\'il remplit TOUS les critères suivants :', 11, 'normal');
    addText('   ✓ Prospect réel (exclusion : spam, erreurs, appels non pertinents)', 10, 'normal');
    addText('   ✓ Situé dans la zone géographique définie ci-dessus', 10, 'normal');
    addText('   ✓ Besoin actif : projet en cours ou prévu dans les 3 mois', 10, 'normal');
    addText('   ✓ Coordonnées complètes récupérées (nom, téléphone, email si possible)', 10, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 3 : Tarification et Garantie
    addText('ARTICLE 3 - TARIFICATION ET GARANTIE INVERSE 30 JOURS', 14, 'bold');
    addSpace(0.5);

    addText('Le présent contrat fonctionne selon une garantie inverse :', 11, 'bold');
    addSpace();

    addText('CAS 1 : OBJECTIF NON ATTEINT', 12, 'bold');
    addText('Si le Prestataire ne génère pas 20 appels qualifiés dans les 30 jours :', 11, 'normal');
    addText('   → Le Client ne paie AUCUN frais', 11, 'bold');
    addText('   → Aucune facturation ne sera émise', 11, 'normal');
    addText('   → Le contrat prend fin sans aucune obligation financière', 11, 'normal');
    addSpace(1.5);

    addText('CAS 2 : OBJECTIF ATTEINT', 12, 'bold');
    addText('Si le Prestataire génère 20 appels qualifiés ou plus dans les 30 jours :', 11, 'normal');
    addSpace(0.5);

    addText('   • Frais de setup (paiement unique) : 2 400,00 € TTC', 11, 'bold');
    addText('     Inclut : Configuration Google LSA, CRM Notion, système d\'avis, formation', 10, 'normal');
    addSpace(0.5);

    addText('   • Abonnement mensuel : 220,00 € TTC / mois', 11, 'bold');
    addText('     Inclut : Gestion campagne, support prioritaire, optimisation continue', 10, 'normal');
    addSpace();

    addText('MODALITÉS DE PAIEMENT :', 11, 'bold');
    addText('• Les frais de setup sont facturés à J+30 si l\'objectif est atteint', 10, 'normal');
    addText('• L\'abonnement mensuel débute à partir du 2ème mois', 10, 'normal');
    addText('• Paiement par virement bancaire sous 30 jours', 10, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 4 : Prestations Incluses
    addText('ARTICLE 4 - PRESTATIONS INCLUSES', 14, 'bold');
    addSpace(0.5);

    addText('Le Prestataire s\'engage à fournir les prestations suivantes :', 11, 'normal');
    addSpace();

    addText('1. CONFIGURATION GOOGLE LOCAL SERVICE ADS', 11, 'bold');
    addText('   • Setup complet du profil Google LSA', 10, 'normal');
    addText('   • Optimisation des paramètres de ciblage', 10, 'normal');
    addText('   • Configuration de la zone géographique', 10, 'normal');
    addSpace();

    addText('2. SYSTÈME DE COLLECTE D\'AVIS AUTOMATISÉ', 11, 'bold');
    addText('   • Mise en place d\'un système d\'envoi automatique de demandes d\'avis', 10, 'normal');
    addText('   • Suivi et relance des clients satisfaits', 10, 'normal');
    addSpace();

    addText('3. CRM NOTION PERSONNALISÉ', 11, 'bold');
    addText('   • Dashboard de suivi en temps réel', 10, 'normal');
    addText('   • Gestion complète des leads', 10, 'normal');
    addText('   • Accès 24/7 via navigateur', 10, 'normal');
    addSpace();

    addText('4. RÉPONSES GOOGLE REVIEWS PAR IA', 11, 'bold');
    addText('   • Gestion automatisée des avis Google', 10, 'normal');
    addText('   • Réponses personnalisées et professionnelles', 10, 'normal');
    addSpace();

    addText('5. SUPPORT PRIORITAIRE', 11, 'bold');
    addText('   • Accompagnement dédié', 10, 'normal');
    addText('   • Réponse sous 24h ouvrées', 10, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 5 : Durée et Résiliation
    addText('ARTICLE 5 - DURÉE ET RÉSILIATION', 14, 'bold');
    addSpace(0.5);

    addText('Le présent contrat est conclu SANS ENGAGEMENT DE DURÉE.', 11, 'bold');
    addSpace();

    addText('• Période initiale : 30 jours (période de garantie)', 11, 'normal');
    addText('• Après validation : reconduction tacite mensuelle', 11, 'normal');
    addText('• Résiliation possible à tout moment avec préavis de 30 jours', 11, 'normal');
    addText('• Notification de résiliation par email recommandé', 11, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 6 : Obligations du Client
    addText('ARTICLE 6 - OBLIGATIONS DU CLIENT', 14, 'bold');
    addSpace(0.5);

    addText('Le Client s\'engage à :', 11, 'normal');
    addText('• Fournir tous les éléments nécessaires à la mise en place de la campagne', 10, 'normal');
    addText('• Répondre aux appels entrants dans les meilleurs délais', 10, 'normal');
    addText('• Traiter professionnellement les leads générés', 10, 'normal');
    addText('• Qualifier les appels reçus selon les critères définis', 10, 'normal');
    addText('• Respecter les règles Google Local Service Ads', 10, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 7 : Responsabilités
    addText('ARTICLE 7 - RESPONSABILITÉS', 14, 'bold');
    addSpace(0.5);

    addText('Le Prestataire s\'engage à mettre en œuvre tous les moyens nécessaires pour atteindre', 11, 'normal');
    addText('l\'objectif fixé. Toutefois, le Prestataire ne peut être tenu responsable de :', 11, 'normal');
    addText('• La qualité du traitement des leads par le Client', 10, 'normal');
    addText('• Le taux de conversion final (devis → vente)', 10, 'normal');
    addText('• Les modifications d\'algorithme de Google', 10, 'normal');
    addText('• Les cas de force majeure', 10, 'normal');
    addSpace(2);

    checkPageBreak();
    addLine();
    addSpace();

    // Article 8 : Confidentialité
    addText('ARTICLE 8 - CONFIDENTIALITÉ', 14, 'bold');
    addSpace(0.5);

    addText('Les parties s\'engagent à garder confidentielles toutes les informations échangées', 11, 'normal');
    addText('dans le cadre de ce contrat, pendant toute sa durée et après sa cessation.', 11, 'normal');
    addSpace(2);

    // Article 9 : Droit applicable
    addText('ARTICLE 9 - DROIT APPLICABLE ET LITIGES', 14, 'bold');
    addSpace(0.5);

    addText('Le présent contrat est soumis au droit français.', 11, 'normal');
    addText('En cas de litige, les parties s\'engagent à rechercher une solution amiable.', 11, 'normal');
    addText('À défaut, le tribunal compétent sera celui du ressort du siège social du Prestataire.', 11, 'normal');
    addSpace(3);

    checkPageBreak();
    addLine();
    addSpace(2);

    // Signatures
    addText('SIGNATURES', 14, 'bold', 'center');
    addSpace(2);

    // Tableau de signatures
    const signatureY = yPosition;

    // Colonne Prestataire
    doc.text('Le Prestataire', margin + 20, signatureY);
    doc.text('Agence Celexia', margin + 20, signatureY + 10);
    doc.rect(margin, signatureY + 20, 80, 40);
    doc.setFontSize(9);
    doc.text('Signature et cachet', margin + 15, signatureY + 45);

    // Colonne Client
    doc.setFontSize(11);
    doc.text('Le Client', pageWidth - margin - 80 + 20, signatureY);
    doc.text(contractData.companyName, pageWidth - margin - 80 + 10, signatureY + 10, { maxWidth: 60 });
    doc.rect(pageWidth - margin - 80, signatureY + 20, 80, 40);
    doc.setFontSize(9);
    doc.text('Signature et mention', pageWidth - margin - 70, signatureY + 45);
    doc.text('"Bon pour accord"', pageWidth - margin - 70, signatureY + 50);

    yPosition = signatureY + 70;

    addSpace(2);

    // Date et lieu
    doc.setFontSize(10);
    doc.text(`Fait à _________________, le ${contractData.date}`, margin, yPosition);
    addSpace(3);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text('Document généré automatiquement - Agence Celexia © 2026', pageWidth / 2, yPosition, { align: 'center' });

    // Sauvegarder le PDF
    const filename = `Contrat_Celexia_${contractData.companyName.replace(/\s+/g, '_')}_${contractData.date.replace(/\//g, '-')}.pdf`;
    doc.save(filename);
}

function getSectorLabel(sector) {
    const sectors = {
        'pisciniste': 'Pisciniste',
        'paysagiste': 'Paysagiste',
        'plombier': 'Plombier',
        'electricien': 'Électricien',
        'menuisier': 'Menuisier',
        'autre': 'Autre artisan'
    };
    return sectors[sector] || sector;
}

// ========================================
// FONCTIONS UTILITAIRES
// ========================================
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function formatCurrency(amount) {
    return formatNumber(Math.round(amount)) + ' €';
}

function formatPercentage(percentage) {
    return Math.round(percentage) + '%';
}

// ========================================
// ANALYTICS (Optionnel)
// ========================================
// Vous pouvez ajouter ici du tracking Google Analytics
// pour suivre les interactions sur la page

// Exemple :
// window.addEventListener('load', function() {
//     if (typeof gtag !== 'undefined') {
//         gtag('event', 'page_view', {
//             page_title: 'Proposition Page',
//             page_location: window.location.href
//         });
//     }
// });
