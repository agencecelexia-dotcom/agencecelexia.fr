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
    let appelsParMois = 20;
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
// GÉNÉRATION PDF CONTRAT COMPLET
// ========================================

async function generateContractPDF() {
    try {
        const data = getUserData();

        if (!data.prenom || !data.nom || !data.entreprise || !data.siret) {
            throw new Error('Données incomplètes');
        }

        // Vérifier que jsPDF est chargé
        if (typeof window.jspdf === 'undefined') {
            throw new Error('jsPDF non chargé');
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

    // Configuration
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = margin;

    // Helper functions
    function addText(text, fontSize = 10, style = 'normal', align = 'left') {
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', style);

        const maxWidth = pageWidth - (2 * margin);

        if (align === 'center') {
            const lines = doc.splitTextToSize(text, maxWidth);
            lines.forEach(line => {
                const textWidth = doc.getTextWidth(line);
                doc.text(line, (pageWidth - textWidth) / 2, yPosition);
                yPosition += fontSize * 0.5;
            });
        } else {
            const lines = doc.splitTextToSize(text, maxWidth);
            lines.forEach(line => {
                doc.text(line, margin, yPosition);
                yPosition += fontSize * 0.5;
            });
        }
    }

    function addSpace(lines = 1) {
        yPosition += 5 * lines;
    }

    function addLine() {
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 5;
    }

    function checkPageBreak(spaceNeeded = 40) {
        if (yPosition > pageHeight - spaceNeeded) {
            doc.addPage();
            yPosition = margin;
        }
    }

    // Secteur d'activité en français
    const secteurLabels = {
        pisciniste: 'construction et installation de piscines',
        paysagiste: 'paysagisme et aménagement extérieur',
        plombier: 'plomberie',
        chauffagiste: 'chauffage et climatisation',
        electricien: 'électricité',
        menuisier: 'menuiserie',
        autre: 'artisanat'
    };
    const secteurActivite = secteurLabels[data.secteur] || 'artisanat';

    // ========== EN-TÊTE ==========
    doc.setFillColor(167, 139, 250);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('CELEXIA', pageWidth / 2, 15, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Contrat de Prestation de Services', pageWidth / 2, 25, { align: 'center' });
    doc.text('Gestion publicitaire - Positionnement et optimisation digitale', pageWidth / 2, 32, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    yPosition = 50;

    // ========== TITRE ==========
    addText('CONTRAT DE PRESTATION DE SERVICES', 14, 'bold', 'center');
    addSpace(2);

    // ========== ENTRE LES SOUSSIGNÉS ==========
    addText('ENTRE LES SOUSSIGNÉS :', 12, 'bold');
    addSpace(1);

    // Le Prestataire
    addText('Le Prestataire :', 11, 'bold');
    addSpace(0.5);
    addText('CELEXIA, SASU, société par actions simplifiée unipersonnelle', 10);
    addText('Immatriculée au RCS de CRETEIL sous le numéro 939 306 429 R.C.S.', 9);
    addText('Numéro de TVA intracommunautaire : FR 41939306429', 9);
    addText('Siège social : 27 BIS RUE FRANCOIS ROLLAND, 94130 NOGENT-SUR-MARNE', 9);
    addText('Représentée par AUBIGEON THOMAS, en qualité de PRÉSIDENT', 9);
    addText('Ci-après dénommée « le Prestataire »', 9, 'italic');
    addSpace(1);
    addText('D\'une part,', 10);
    addSpace(2);

    checkPageBreak();

    // Le Client
    addText('Le Client :', 11, 'bold');
    addSpace(0.5);
    addText(`${data.entreprise}`, 10, 'bold');
    addText(`Immatriculée au RCS sous le numéro ${data.siret}`, 9);
    addText(`Siège social : ${data.adresse}`, 9);
    addText(`Représenté par ${data.prenom} ${data.nom}`, 9);
    if (data.email) addText(`Email : ${data.email}`, 9);
    if (data.telephone) addText(`Téléphone : ${data.telephone}`, 9);
    addText('Ci-après dénommée « le Client »', 9, 'italic');
    addSpace(1);
    addText('D\'autre part,', 10);
    addSpace(1);
    addText('Ci-après ensemble dénommées « les Parties »', 10, 'italic');
    addSpace(3);

    checkPageBreak();

    // ========== PRÉAMBULE ==========
    addText('PRÉAMBULE', 12, 'bold');
    addSpace(1);
    addText(`Le Client exerce une activité dans le secteur ${secteurActivite}. Il souhaite développer son activité commerciale en bénéficiant d'une solution de génération de prospects qualifiés, ainsi que d'outils digitaux permettant d'optimiser sa gestion d'entreprise.`, 10);
    addSpace(1);
    addText('Le Prestataire dispose de l\'expertise technique et des compétences nécessaires pour déployer cette solution globale incluant la gestion publicitaire et les automatisations marketing.', 10);
    addSpace(1);
    addText('Le Prestataire propose au Client une offre avec garantie de résultats inversée : le Client ne paye les frais de mise en place que si les objectifs définis sont atteints.', 10);
    addSpace(1);
    addText('Les Parties ont donc décidé de conclure le présent contrat aux conditions suivantes.', 10);
    addSpace(3);

    checkPageBreak(80);

    // ========== ARTICLE 1 ==========
    addText('ARTICLE 1 - OBJET DU CONTRAT', 12, 'bold');
    addSpace(1);
    addText('Le présent contrat a pour objet de définir les conditions dans lesquelles le Prestataire s\'engage à fournir au Client un service complet de génération de prospects et d\'optimisation digitale comprenant les prestations suivantes :', 10);
    addSpace(1);

    addText('1.1 Gestion publicitaire Google', 10, 'bold');
    addText('Le Prestataire s\'engage à :', 10);
    addText('• Créer et paramétrer un compte publicitaire Google dont le Prestataire sera le gestionnaire principal', 9);
    addText('• Accorder au Client un accès partagé au compte pour consultation', 9);
    addText('• Gérer et optimiser quotidiennement les campagnes publicitaires', 9);
    addText('• Allouer le budget publicitaire fourni par le Client selon les meilleures pratiques', 9);
    addText('• Optimiser le ciblage géographique et démographique', 9);
    addText('• Effectuer le suivi et le reporting des performances', 9);
    addText('• Signaler à Google les appels non qualifiés pour obtenir des remboursements au bénéfice du Client', 9);
    addSpace(1);

    addText('1.2 Système de collecte d\'avis Google automatisé', 10, 'bold');
    addText('Le Prestataire met en place :', 10);
    addText('• Campagne email initiale : Envoi d\'une campagne de récupération d\'avis auprès de la liste de clients existants fournie par le Client', 9);
    addText('• Automatisation continue : Mise en place d\'une séquence email automatique déclenchée lors de la finalisation de chaque chantier pour solliciter un avis Google', 9);
    addSpace(1);

    addText('1.3 Évolutions et support continu', 10, 'bold');
    addText('Durant toute la durée du contrat, le Prestataire s\'engage à répondre aux demandes du Client afin d\'assurer un support technique et opérationnel.', 10);
    addSpace(3);

    doc.addPage();
    yPosition = margin;

    // ========== ARTICLE 2 ==========
    addText('ARTICLE 2 - DURÉE DU CONTRAT ET PÉRIODE D\'ESSAI', 12, 'bold');
    addSpace(1);

    addText('2.1 Durée du contrat', 10, 'bold');
    addText('Le présent contrat est conclu pour une durée indéterminée à compter de sa signature, organisé sous forme de périodes mensuelles successives.', 10);
    addSpace(1);

    addText('2.2 Première période - Période d\'essai avec garantie', 10, 'bold');
    addText('La première période contractuelle constitue une période d\'essai de trente (30) jours calendaires décomptés à partir de la date de mise en ligne effective de la campagne publicitaire.', 10);
    addSpace(1);
    addText('Durant cette période d\'essai, le Prestataire s\'engage sur un objectif garanti de vingt (20) appels qualifiés facturés par Google.', 10, 'bold');
    addSpace(1);

    addText('Un appel qualifié est défini comme suit :', 10, 'bold');
    addSpace(0.5);

    addText('Cas 1 - Appel avec réponse du Client :', 10, 'bold');
    addText(`Un contact téléphonique entrant généré par la campagne publicitaire, facturé par Google au compte publicitaire, auquel le Client a répondu, et qui entre dans le cadre de son activité professionnelle (demande de devis, demande d'information sur les services, demande de rendez-vous, etc.), même si cet appel ne se convertit pas en contrat.`, 9);
    addSpace(0.5);
    addText('Ne sont pas considérés comme qualifiés, uniquement, les appels suivants :', 9);
    addText('• Demandes de stage ou d\'emploi', 9);
    addText('• Démarchage commercial ou appels d\'agences', 9);
    addText('• Appels sans rapport avec l\'activité professionnelle du Client', 9);
    addSpace(1);

    addText('Cas 2 - Appel sans réponse du Client :', 10, 'bold');
    addText('Tout contact téléphonique entrant généré par la campagne publicitaire, non facturé par Google, auquel le Client n\'a pas répondu, est automatiquement considéré comme qualifié, la non-réponse relevant de la responsabilité du Client.', 9);
    addSpace(1);

    addText('Procédure de contestation :', 10, 'bold');
    addText('Le Client dispose d\'un délai de sept (7) jours calendaires après réception d\'un appel pour le signaler au Prestataire comme non qualifié selon les critères ci-dessus. Le Prestataire demandera alors le remboursement auprès de Google. Les appels non contestés dans ce délai sont définitivement comptabilisés comme qualifiés.', 9);
    addSpace(3);

    doc.addPage();
    yPosition = margin;

    // ========== ARTICLE 3 ==========
    addText('ARTICLE 3 - PROPRIÉTÉ ET ACCÈS AUX COMPTES', 12, 'bold');
    addSpace(1);

    addText('3.1 Compte publicitaire Google', 10, 'bold');
    addText('Le compte publicitaire Google est créé et géré par le Prestataire via son compte gestionnaire Google Ads Manager. Le Prestataire demeure gestionnaire principal du compte pendant toute la durée du contrat.', 10);
    addSpace(1);

    addText('3.2 Fin du contrat', 10, 'bold');
    addText('En cas de cessation du contrat pour quelque raison que ce soit, le Prestataire s\'engage à fermer le compte publicitaire Google et à désactiver toutes les automatisations mises en place. Le Client ne conserve aucun droit sur les outils et systèmes développés par le Prestataire.', 10);
    addSpace(3);

    // ========== ARTICLE 4 ==========
    addText('ARTICLE 4 - OBLIGATIONS DU CLIENT', 12, 'bold');
    addSpace(1);
    addText('Pour permettre la bonne exécution des prestations, le Client s\'engage à :', 10);
    addSpace(1);

    addText('4.1 Fourniture des éléments nécessaires', 10, 'bold');
    addText('1. Fournir tous les documents et informations requis pour la création du compte publicitaire Google', 9);
    addText('2. Transmettre la liste des adresses email de ses clients existants pour la campagne initiale de collecte d\'avis', 9);
    addText('3. Informer le Prestataire de tout changement susceptible d\'affecter la prestation', 9);
    addSpace(1);

    addText('4.2 Versement du budget publicitaire mensuel', 10, 'bold');
    addText('Le Client s\'engage à verser au Prestataire un budget publicitaire mensuel destiné à financer les campagnes Google.', 10);
    addSpace(0.5);
    addText('Le budget mensuel initial est fixé à trois cents euros TTC (300,00 €). Ce montant peut être modifié par le Client pour les périodes suivantes selon ses objectifs de volume d\'appels.', 10);
    addSpace(0.5);
    addText('Le budget publicitaire doit être versé au plus tard le 29 de chaque mois pour le mois suivant.', 10);
    addSpace(0.5);
    addText('Ce budget publicitaire est distinct des frais de service du Prestataire. Il est intégralement alloué par le Prestataire au compte publicitaire Google du Client.', 10);
    addSpace(1);

    addText('4.3 Collaboration et réactivité', 10, 'bold');
    addText('• Répondre aux sollicitations du Prestataire dans des délais raisonnables', 9);
    addText('• Participer au bilan de fin de première période pour valider l\'atteinte des objectifs', 9);
    addText('• Respecter les échéances de paiement définies à l\'article 5', 9);
    addSpace(3);

    doc.addPage();
    yPosition = margin;

    // ========== ARTICLE 5 ==========
    addText('ARTICLE 5 - CONDITIONS FINANCIÈRES', 12, 'bold');
    addSpace(1);

    addText('5.1 Première période - Garantie inversée', 11, 'bold');
    addSpace(0.5);

    addText('Principe de la garantie inversée', 10, 'bold');
    addText('Durant la première période de trente (30) jours, le Client ne paye aucun frais de service par avance. Le paiement des prestations du Prestataire est conditionné à l\'atteinte de l\'objectif garanti de vingt (20) appels qualifiés.', 10);
    addSpace(1);

    addText('Budget publicitaire', 10, 'bold');
    addText('Le Client verse uniquement le budget publicitaire de 300,00 € TTC avant le lancement de la campagne. Ce montant n\'est pas un paiement au Prestataire mais le budget alloué aux dépenses publicitaires Google.', 10);
    addSpace(1);

    addText('Cas n°1 : Objectif atteint (20 appels qualifiés ou plus)', 10, 'bold');
    addText('Si l\'objectif de vingt (20) appels qualifiés est atteint ou dépassé durant les trente (30) premiers jours, le Client doit régler au Prestataire :', 10);
    addText('• Frais de mise en place et d\'installation : 2 400,00 € TTC', 9);
    addText('• Frais de gestion mensuelle du premier mois : 220,00 € TTC', 9);
    addText('• Budget publicitaire du deuxième mois : 300,00 € TTC (ou montant choisi par le Client)', 9);
    addSpace(0.5);
    addText('Total dû à l\'issue du premier mois si objectif atteint : 2 620,00 € TTC + budget publicitaire du mois suivant', 10, 'bold');
    addSpace(1);

    addText('Cas n°2 : Objectif non atteint (moins de 20 appels qualifiés)', 10, 'bold');
    addText('Si l\'objectif de vingt (20) appels qualifiés n\'est pas atteint, le Client a le choix entre deux options :', 10);
    addSpace(0.5);

    addText('Option A - Arrêt de la collaboration sans frais', 10, 'bold');
    addText('Le Client peut mettre fin au contrat sans aucun frais de manière unilatérale. Il ne doit rien au Prestataire (ni frais d\'installation, ni frais de gestion).', 9);
    addSpace(0.5);

    addText('Option B - Poursuite de la collaboration', 10, 'bold');
    addText('Le Client peut choisir de poursuivre la collaboration malgré l\'objectif non atteint. Dans ce cas, il doit régler :', 9);
    addText('• Frais de mise en place et d\'installation : 2 400,00 € TTC', 9);
    addText('• Frais de gestion mensuelle : 220,00 € TTC', 9);
    addText('• Budget publicitaire du mois suivant : 300,00 € TTC', 9);
    addSpace(0.5);
    addText('Précision importante : Les frais de mise en place de 2 400,00 € TTC sont facturés une seule et unique fois.', 9, 'italic');
    addSpace(2);

    addText('5.2 Périodes mensuelles suivantes', 11, 'bold');
    addText('À partir du deuxième mois et pour chaque mois suivant, le Client règle au Prestataire :', 10);
    addText('• Frais de gestion mensuelle : 220,00 € TTC', 9);
    addText('• Budget publicitaire mensuel : 300,00 € TTC minimum', 9);
    addSpace(1);
    addText('Le budget publicitaire mensuel est modulable selon les besoins du Client.', 9);
    addSpace(2);

    doc.addPage();
    yPosition = margin;

    addText('5.3 Modalités et délais de paiement', 11, 'bold');
    addSpace(0.5);

    addText('Paiement de fin de première période', 10, 'bold');
    addText('À l\'issue des trente (30) premiers jours, les Parties organisent un bilan pour constater l\'atteinte ou non de l\'objectif garanti. Si le Client doit régler des sommes au Prestataire, le paiement doit être effectué sous cinq (5) jours calendaires.', 10);
    addSpace(1);

    addText('Paiements mensuels récurrents', 10, 'bold');
    addText('Pour les mois suivants, le Client règle :', 10);
    addText('• Les frais de gestion mensuelle (220,00 € TTC) : au début de chaque période mensuelle', 9);
    addText('• Le budget publicitaire du mois suivant : au plus tard le 29 de chaque mois', 9);
    addSpace(1);

    addText('5.4 Moyens de paiement', 10, 'bold');
    addText('Les paiements s\'effectuent par :', 10);
    addText('• Virement bancaire aux coordonnées fournies par le Prestataire', 9);
    addText('• Lien de paiement sécurisé envoyé par le Prestataire', 9);
    addText('• Prélèvement SEPA automatique après autorisation du Client (recommandé)', 9);
    addSpace(1);

    addText('5.5 Retard de paiement', 10, 'bold');
    addText('En cas de retard de paiement :', 10);
    addText('• Le Prestataire se réserve le droit de suspendre immédiatement les campagnes publicitaires', 9);
    addText('• Des pénalités de retard sont appliquées au taux de trois (3) fois le taux d\'intérêt légal', 9);
    addText('• Une indemnité forfaitaire de quarante euros (40 €) pour frais de recouvrement est due', 9);
    addSpace(3);

    // ========== ARTICLE 6 ==========
    addText('ARTICLE 6 - DÉLAI DE MISE EN PLACE', 12, 'bold');
    addSpace(1);
    addText('Le Prestataire s\'engage à mettre en place l\'intégralité des prestations dans un délai maximum de quatorze (14) jours calendaires à compter de la réception de tous les éléments nécessaires fournis par le Client.', 10);
    addSpace(0.5);
    addText('Le décompte de la période d\'essai de trente (30) jours ne commence qu\'à partir de la mise en ligne effective de la campagne publicitaire.', 10, 'bold');
    addSpace(3);

    // ========== ARTICLE 7 ==========
    addText('ARTICLE 7 - OBLIGATIONS ET RESPONSABILITÉS', 12, 'bold');
    addSpace(1);

    addText('7.1 Obligation de moyens', 10, 'bold');
    addText('Le Prestataire s\'engage à mettre en œuvre tous les moyens nécessaires pour atteindre l\'objectif de vingt (20) appels qualifiés durant la première période. En dehors de la garantie de la première période, le Prestataire est tenu d\'une obligation de moyens et non d\'une obligation de résultat.', 10);
    addSpace(1);

    addText('7.2 Remboursements Google', 10, 'bold');
    addText('Le Prestataire s\'engage à signaler à Google les appels non qualifiés dont le Client l\'informe, afin d\'obtenir des remboursements. Ces remboursements bénéficient exclusivement au Client sous forme de budget publicitaire supplémentaire.', 10);
    addSpace(1);

    addText('7.3 Abonnements et licences', 10, 'bold');
    addText('Le Prestataire prend en charge le coût des abonnements et licences nécessaires au fonctionnement des outils. Ces coûts sont inclus dans les frais de gestion mensuelle de 220,00 € TTC.', 10);
    addSpace(3);

    doc.addPage();
    yPosition = margin;

    // ========== ARTICLE 8 ==========
    addText('ARTICLE 8 - RÉSILIATION', 12, 'bold');
    addSpace(1);

    addText('8.1 Résiliation libre sans préavis', 10, 'bold');
    addText('Le Client peut résilier le présent contrat à tout moment et sans préavis. La résiliation prend effet le jour d\'envoi de la notification. En cas de résiliation en cours de période mensuelle, aucun remboursement prorata temporis n\'est dû au Client.', 10);
    addSpace(1);

    addText('8.2 Résiliation en fin de première période', 10, 'bold');
    addText('À l\'issue de la première période de trente (30) jours, si l\'objectif de vingt (20) appels qualifiés n\'est pas atteint, le Client peut mettre fin au contrat sans aucun frais ni aucune pénalité.', 10);
    addSpace(1);

    addText('8.3 Résiliation pour manquement grave', 10, 'bold');
    addText('En cas de manquement grave de l\'une des Parties, l\'autre Partie pourra mettre fin au contrat après mise en demeure restée sans effet pendant quinze (15) jours.', 10);
    addSpace(1);

    addText('8.4 Conséquences de la résiliation', 10, 'bold');
    addText('Quelle que soit la cause de résiliation, le Prestataire procède à la fermeture du compte publicitaire Google et à la désactivation de toutes les automatisations. Le Client ne conserve aucun droit sur les outils développés par le Prestataire.', 10);
    addSpace(3);

    // ========== ARTICLES SUIVANTS (résumés) ==========
    addText('ARTICLE 9 - CONFIDENTIALITÉ', 12, 'bold');
    addSpace(0.5);
    addText('Chaque Partie s\'engage à garder confidentielles toutes les informations échangées pendant la durée du contrat et pour trois (3) ans après son terme.', 10);
    addSpace(2);

    addText('ARTICLE 10 - PROPRIÉTÉ INTELLECTUELLE', 12, 'bold');
    addSpace(0.5);
    addText('Le Prestataire demeure l\'unique propriétaire de tous les outils, systèmes et méthodologies. Le Client bénéficie d\'une licence d\'utilisation temporaire limitée à la durée du contrat.', 10);
    addSpace(2);

    addText('ARTICLE 11 - DONNÉES PERSONNELLES ET RGPD', 12, 'bold');
    addSpace(0.5);
    addText('Le Client agit en qualité de responsable de traitement. Le Prestataire agit en qualité de sous-traitant au sens du RGPD.', 10);
    addSpace(2);

    addText('ARTICLE 12 - FORCE MAJEURE', 12, 'bold');
    addSpace(0.5);
    addText('Les Parties ne pourront être tenues responsables en cas de force majeure au sens de l\'article 1218 du Code civil.', 10);
    addSpace(2);

    addText('ARTICLE 13 - MODIFICATION DES SERVICES TIERS', 12, 'bold');
    addSpace(0.5);
    addText('En cas de modification substantielle des services Google rendant impossible l\'exécution, les Parties se rapprocheront pour convenir d\'une solution alternative ou de la rupture du contrat sans pénalité.', 10);
    addSpace(2);

    doc.addPage();
    yPosition = margin;

    addText('ARTICLE 14 - LIMITATION DE RESPONSABILITÉ', 12, 'bold');
    addSpace(0.5);
    addText('La responsabilité du Prestataire ne saurait être engagée notamment pour : dysfonctionnements Google, modifications d\'algorithmes, défaut de fourniture d\'éléments par le Client. En dehors de toute faute lourde, la responsabilité financière du Prestataire est limitée au montant des six (6) derniers mois.', 10);
    addSpace(2);

    addText('ARTICLE 15 - INTÉGRALITÉ DU CONTRAT', 12, 'bold');
    addSpace(0.5);
    addText('Le présent contrat constitue l\'intégralité de l\'accord entre les Parties. Aucune modification ne sera valable sans accord écrit et signé des deux Parties.', 10);
    addSpace(2);

    addText('ARTICLE 16 - CESSION DU CONTRAT', 12, 'bold');
    addSpace(0.5);
    addText('Le présent contrat est conclu intuitu personae. Aucune des Parties ne pourra céder ses droits sans l\'accord préalable écrit de l\'autre.', 10);
    addSpace(2);

    addText('ARTICLE 17 - NULLITÉ PARTIELLE', 12, 'bold');
    addSpace(0.5);
    addText('Si une stipulation est déclarée non valide, les autres stipulations gardent leur force. Les Parties s\'efforceront de remplacer la clause annulée.', 10);
    addSpace(2);

    addText('ARTICLE 18 - LOI APPLICABLE ET JURIDICTION', 12, 'bold');
    addSpace(0.5);
    addText('Le présent contrat est soumis au droit français. En cas de litige, les Parties s\'engagent à rechercher une solution amiable pendant trente (30) jours. À défaut, compétence est attribuée aux tribunaux de Créteil.', 10);
    addSpace(2);

    addText('ARTICLE 19 - NOTIFICATIONS', 12, 'bold');
    addSpace(0.5);
    addText('Toutes les notifications devront être effectuées par écrit par email ou lettre recommandée.', 10);
    addSpace(4);

    // ========== SIGNATURES ==========
    checkPageBreak(60);
    addLine();
    addSpace(2);

    addText('SIGNATURES', 14, 'bold', 'center');
    addSpace(2);

    addText('Après avoir pris connaissance de l\'intégralité du présent contrat, lu et approuvé l\'ensemble de ses clauses, les Parties ont signé le présent contrat en deux exemplaires originaux.', 10, 'normal', 'center');
    addSpace(3);

    const signatureY = yPosition;

    // Prestataire
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Pour CELEXIA', margin + 10, signatureY);
    doc.setFont('helvetica', 'normal');
    doc.text('Le Prestataire', margin + 10, signatureY + 7);
    doc.text('Aubigeon Thomas, Président', margin + 10, signatureY + 14);
    doc.text(`Date : ${new Date().toLocaleDateString('fr-FR')}`, margin + 10, signatureY + 21);
    doc.text('Fait à : Nogent-sur-Marne', margin + 10, signatureY + 28);
    doc.rect(margin, signatureY + 35, 80, 30);
    doc.setFontSize(9);
    doc.text('Signature', margin + 25, signatureY + 52);

    // Client
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Pour ${data.entreprise}`, pageWidth - margin - 80 + 10, signatureY);
    doc.setFont('helvetica', 'normal');
    doc.text('Le Client', pageWidth - margin - 80 + 10, signatureY + 7);
    doc.text(`${data.prenom} ${data.nom}`, pageWidth - margin - 80 + 10, signatureY + 14);
    doc.text('Date : _____________', pageWidth - margin - 80 + 10, signatureY + 21);
    doc.text('Fait à : _____________', pageWidth - margin - 80 + 10, signatureY + 28);
    doc.rect(pageWidth - margin - 80, signatureY + 35, 80, 30);
    doc.setFontSize(9);
    doc.text('Signature', pageWidth - margin - 60, signatureY + 52);
    doc.text('(Précédée de la mention', pageWidth - margin - 75, signatureY + 58);
    doc.text('"Lu et approuvé")', pageWidth - margin - 70, signatureY + 63);

        // Pied de page
        doc.setFontSize(8);
        doc.setFont('helvetica', 'italic');
        doc.text(`Document généré le ${new Date().toLocaleDateString('fr-FR')} - Celexia © 2026`, pageWidth / 2, pageHeight - 10, { align: 'center' });

        // Sauvegarder
        const filename = `Contrat_Celexia_${data.entreprise.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);

        console.log('PDF généré:', filename);
        return true;
    } catch (error) {
        console.error('Erreur dans generateContractPDF:', error);
        throw error;
    }
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
