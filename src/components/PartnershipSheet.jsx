export default function PartnershipSheet() {
  return (
    <section id="fiche-preparation" className="resource-section rounded-3xl border border-brume-300 bg-white p-6 sm:p-8">
      <p className="section-kicker mb-4">Votre fiche pratique</p>
      <h2>Préparer votre échange avec un apporteur d’affaires</h2>
      <p>Une fiche à imprimer pour noter votre activité, votre secteur, votre capacité disponible et les questions à poser sur la qualification et la commission.</p>
      <ul>
        <li>Les types de chantiers que vous souhaitez réaliser.</li>
        <li>Les moyens disponibles pour les visites, les devis et les travaux.</li>
        <li>Les points à clarifier avant d’envisager un partenariat.</li>
      </ul>
      <a href="/ressources/fiche-partenariat-artisan.html" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-2">Ouvrir la fiche à imprimer <span aria-hidden="true">↗</span><span className="sr-only"> (nouvel onglet)</span></a>
      <p className="!mt-4 !text-sm">Accès libre. La fiche ne transmet aucune information à Celexia.</p>
    </section>
  );
}
