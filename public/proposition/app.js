// ========================================
// AGENCE CELEXIA - PROPOSITION APP
// Système de navigation et gestion données
// ========================================

// Configuration globale
const CONFIG = {
    setupFee: 2400,
    monthlyFee: 220,
    callCosts: {
        pisciniste: 10,
        paysagiste: 10,
        plombier: 25,
        chauffagiste: 25,
        electricien: 20,
        menuisier: 20,
        autre: 15
    }
};

// ========================================
// GESTION DU LOCALSTORAGE
// ========================================

// Sauvegarder les données utilisateur
function saveUserData(data) {
    const currentData = getUserData();
    const updatedData = { ...currentData, ...data };
    localStorage.setItem('celexia_prospect', JSON.stringify(updatedData));
}

// Récupérer les données utilisateur
function getUserData() {
    const data = localStorage.getItem('celexia_prospect');
    return data ? JSON.parse(data) : {};
}

// Effacer les données utilisateur
function clearUserData() {
    localStorage.removeItem('celexia_prospect');
}

// Vérifier si l'utilisateur a complété l'identification
function isIdentified() {
    const data = getUserData();
    return data.prenom && data.nom && data.entreprise && data.secteur;
}

// ========================================
// NAVIGATION
// ========================================

// Rediriger vers une page
function goToPage(pageNumber) {
    if (pageNumber === 1) {
        window.location.href = 'index.html';
    } else {
        window.location.href = `etape-${pageNumber}.html`;
    }
}

// Vérifier l'accès à une page (protection)
function checkPageAccess(requiredStep) {
    if (requiredStep > 1 && !isIdentified()) {
        // Si pas identifié et qu'on essaie d'accéder aux autres pages
        goToPage(1);
        return false;
    }
    return true;
}

// ========================================
// PERSONNALISATION DU TEXTE
// ========================================

// Remplacer les placeholders dans le texte
function personalizeText() {
    const data = getUserData();

    // Remplacer [PRENOM]
    document.querySelectorAll('[data-prenom]').forEach(el => {
        el.textContent = data.prenom || '[Prénom]';
    });

    // Remplacer [NOM]
    document.querySelectorAll('[data-nom]').forEach(el => {
        el.textContent = data.nom || '[Nom]';
    });

    // Remplacer [ENTREPRISE]
    document.querySelectorAll('[data-entreprise]').forEach(el => {
        el.textContent = data.entreprise || '[Entreprise]';
    });

    // Remplacer [SECTEUR]
    document.querySelectorAll('[data-secteur]').forEach(el => {
        const secteurLabels = {
            pisciniste: 'pisciniste',
            paysagiste: 'paysagiste',
            plombier: 'plombier',
            chauffagiste: 'chauffagiste',
            electricien: 'électricien',
            menuisier: 'menuisier',
            autre: 'artisan'
        };
        el.textContent = secteurLabels[data.secteur] || '[Secteur]';
    });
}

// ========================================
// CALCULATRICE ROI
// ========================================

function initCalculator() {
    const data = getUserData();
    const secteur = data.secteur || 'autre';
    const coutParAppel = CONFIG.callCosts[secteur] || 15;

    // État de la calculatrice
    let appelsParMois = 30;
    let tauxDevis = 50;
    let tauxClient = 30;
    let valeurContrat = 45000;

    // Éléments du DOM
    const appelsSlider = document.getElementById('appels-slider');
    const tauxDevisSlider = document.getElementById('taux-devis-slider');
    const tauxClientSlider = document.getElementById('taux-client-slider');
    const valeurContratInput = document.getElementById('valeur-contrat');
    const btnCalculer = document.getElementById('btn-calculer');
    const resultsDiv = document.getElementById('results');

    if (!appelsSlider) return; // Pas sur la page calculatrice

    // Update des valeurs affichées
    function updateDisplayValues() {
        document.getElementById('appels-value').textContent = appelsParMois;
        document.getElementById('taux-devis-value').textContent = tauxDevis;
        document.getElementById('taux-client-value').textContent = tauxClient;
    }

    // Event listeners
    appelsSlider.addEventListener('input', (e) => {
        appelsParMois = Number(e.target.value);
        updateDisplayValues();
    });

    tauxDevisSlider.addEventListener('input', (e) => {
        tauxDevis = Number(e.target.value);
        updateDisplayValues();
    });

    tauxClientSlider.addEventListener('input', (e) => {
        tauxClient = Number(e.target.value);
        updateDisplayValues();
    });

    valeurContratInput.addEventListener('input', (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        valeurContrat = parseInt(value) || 0;
        e.target.value = valeurContrat === 0 ? '' : valeurContrat;
    });

    // Calcul ROI
    btnCalculer.addEventListener('click', () => {
        const coutTotal = appelsParMois * coutParAppel;
        const nombreDevis = appelsParMois * (tauxDevis / 100);
        const nombreClients = nombreDevis * (tauxClient / 100);
        const CA = nombreClients * valeurContrat;
        const beneficeNet = CA - coutTotal;
        const ROI = Math.round(beneficeNet / coutTotal);

        // Sauvegarder les résultats
        saveUserData({
            calculROI: {
                appelsParMois,
                tauxDevis,
                tauxClient,
                valeurContrat,
                coutTotal,
                CA,
                beneficeNet,
                ROI
            }
        });

        // Afficher les résultats
        document.getElementById('cout-total').textContent = coutTotal.toLocaleString();
        document.getElementById('nombre-clients').textContent = nombreClients.toFixed(1);
        document.getElementById('ca-genere').textContent = CA.toLocaleString();
        document.getElementById('benefice-net').textContent = beneficeNet.toLocaleString();
        document.getElementById('roi-value').textContent = ROI;

        // Projections 12 mois
        document.getElementById('mois-1').textContent = '+' + beneficeNet.toLocaleString();
        document.getElementById('mois-3').textContent = '+' + (beneficeNet * 3).toLocaleString();
        document.getElementById('mois-6').textContent = '+' + (beneficeNet * 6).toLocaleString();
        document.getElementById('mois-12').textContent = '+' + (beneficeNet * 12).toLocaleString();
        document.getElementById('total-12-mois').textContent = (beneficeNet * 12).toLocaleString();

        // Afficher la section résultats
        resultsDiv.classList.remove('hidden');
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    updateDisplayValues();
}

// ========================================
// GÉNÉRATION PDF CONTRAT
// ========================================

function generateContractPDF() {
    const data = getUserData();

    if (!data.prenom || !data.nom || !data.entreprise) {
        alert('Veuillez compléter le formulaire d\'abord.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuration
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = margin;

    // Helper functions
    function addText(text, fontSize = 11, style = 'normal', align = 'left') {
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', style);

        if (align === 'center') {
            const textWidth = doc.getTextWidth(text);
            doc.text(text, (pageWidth - textWidth) / 2, yPosition);
        } else {
            doc.text(text, margin, yPosition);
        }

        yPosition += 7;
    }

    function addSpace(lines = 1) {
        yPosition += 7 * lines;
    }

    function addLine() {
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 5;
    }

    // En-tête
    doc.setFillColor(167, 139, 250);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('AGENCE CELEXIA', pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Contrat de Prestation - Google Local Service Ads', pageWidth / 2, 30, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    yPosition = 50;

    // Titre
    addText('PROPOSITION COMMERCIALE', 16, 'bold', 'center');
    addSpace(0.5);
    addText(`Générée le ${new Date().toLocaleDateString('fr-FR')}`, 10, 'italic', 'center');
    addSpace(2);
    addLine();
    addSpace();

    // Client
    addText('ÉTABLI POUR :', 14, 'bold');
    addSpace(0.5);
    addText(`${data.entreprise}`, 12, 'bold');
    addText(`${data.prenom} ${data.nom}`, 11);
    if (data.adresse) addText(`${data.adresse}`, 10);
    if (data.email) addText(`Email : ${data.email}`, 10);
    if (data.telephone) addText(`Téléphone : ${data.telephone}`, 10);
    addSpace(2);
    addLine();
    addSpace();

    // Votre proposition
    addText('VOTRE PROPOSITION PERSONNALISÉE', 14, 'bold');
    addSpace();

    addText('GARANTIE INVERSE 30 JOURS', 12, 'bold');
    addText('Nous nous engageons à générer 20 appels qualifiés en 30 jours.', 11);
    addText('Si l\'objectif n\'est pas atteint : vous ne payez rien.', 11, 'bold');
    addSpace(1.5);

    addText('TARIFICATION :', 12, 'bold');
    addText('Si objectif atteint :', 11, 'bold');
    addText('  • Frais de setup (unique) : 2 400€ TTC', 11);
    addText('  • Abonnement mensuel : 220€ TTC/mois', 11);
    addText('  • Sans engagement - Résiliable à tout moment', 10, 'italic');
    addSpace(2);

    addText('PRESTATIONS INCLUSES :', 12, 'bold');
    addText('✓ Configuration complète Google Local Service Ads', 10);
    addText('✓ Système de collecte d\'avis automatisé', 10);
    addText('✓ Dashboard de suivi de vos leads en temps réel', 10);
    addText('✓ Support prioritaire et accompagnement dédié', 10);
    addSpace(2);

    // Résultats calculatrice si disponibles
    if (data.calculROI) {
        doc.addPage();
        yPosition = margin;

        addText('VOS RÉSULTATS CALCULATRICE ROI', 14, 'bold');
        addSpace();

        addText(`Avec ${data.calculROI.appelsParMois} appels par mois :`, 11);
        addSpace();
        addText(`Coût mensuel Google : ${data.calculROI.coutTotal.toLocaleString()}€`, 11);
        addText(`Clients gagnés : ${data.calculROI.appelsParMois * (data.calculROI.tauxDevis / 100) * (data.calculROI.tauxClient / 100).toFixed(1)} clients/mois`, 11);
        addText(`CA généré : ${data.calculROI.CA.toLocaleString()}€/mois`, 11, 'bold');
        addText(`Bénéfice net : ${data.calculROI.beneficeNet.toLocaleString()}€/mois`, 11, 'bold');
        addText(`ROI : ${data.calculROI.ROI}x`, 12, 'bold');
        addSpace(2);

        addText(`Projection 12 mois : +${(data.calculROI.beneficeNet * 12).toLocaleString()}€`, 12, 'bold');
    }

    // Pied de page
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.text('Agence Celexia - 06 51 72 57 56 - thomas@agencecelexia.fr', pageWidth / 2, footerY, { align: 'center' });

    // Télécharger
    const filename = `Proposition_Celexia_${data.entreprise.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Personnaliser le texte
    personalizeText();

    // Initialiser la calculatrice si on est sur la page
    initCalculator();

    // Bouton génération PDF
    const btnPDF = document.getElementById('btn-generate-pdf');
    if (btnPDF) {
        btnPDF.addEventListener('click', generateContractPDF);
    }
});
