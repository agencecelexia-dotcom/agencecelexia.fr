import { Buffer } from 'node:buffer';

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]));

// UTF-8 normalization prevents an isolated UTF-16 surrogate from throwing during URI encoding.
const encodeAddress = (value) => encodeURIComponent(Buffer.from(String(value), 'utf8').toString('utf8')).replace(/[!'()*]/g, (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
const linkStyle = 'color:#5620C4;text-decoration:underline;word-break:break-word;overflow-wrap:anywhere;';

function field(label, value, href) {
  const content = href ? `<a href="${escapeHtml(href)}" style="${linkStyle}">${escapeHtml(value)}</a>` : escapeHtml(value);
  return `<tr>
    <td valign="top" width="42%" style="padding:10px 16px 10px 0;border-bottom:1px solid #E4DFED;color:#6B6480;font-size:13px;line-height:20px;">${escapeHtml(label)}</td>
    <td valign="top" style="padding:10px 0;border-bottom:1px solid #E4DFED;color:#2A2340;font-size:14px;line-height:20px;font-weight:600;word-break:break-word;overflow-wrap:anywhere;">${content}</td>
  </tr>`;
}

function sectionTitle(number, title) {
  return `<p style="margin:0 0 16px;color:#1F0D3D;font-size:12px;line-height:18px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;"><span style="color:#8C52FF;">${number}</span>&nbsp;&nbsp; ${title}</p>`;
}

/** The template accepts server-validated fields; all user-provided content is escaped again for HTML. */
export function renderCandidatureEmail({ application, trade, source, reference, submissionDay }) {
  const dateLabel = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${submissionDay}T12:00:00Z`));
  const mailto = `mailto:${encodeAddress(application.email).replace('%40', '@')}`;
  const phone = String(application.phone);
  const telephone = (phone.startsWith('+') ? phone.replace(/\(0\)/g, '') : phone).replace(/[ ().-]/g, '');
  const tel = /^\+?\d{8,30}$/.test(telephone) ? `tel:${telephone}` : undefined;
  const contactName = `${application.firstName} ${application.lastName}`;
  const details = application.details?.trim() ? `<tr><td class="content-padding" style="padding:0 32px 24px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;background-color:#F4EFFF;border:1px solid #E7DCFF;border-radius:12px;">
      <tr><td class="section-cell" style="padding:24px;">
        <p style="margin:0 0 12px;color:#5620C4;font-size:12px;line-height:18px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Le mot du candidat</p>
        <p style="margin:0;color:#2A2340;font-size:14px;line-height:23px;word-break:break-word;overflow-wrap:anywhere;">${escapeHtml(application.details).replace(/\r\n|\r|\n/g, '<br>')}</p>
      </td></tr>
    </table>
  </td></tr>` : '';

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Nouvelle candidature — Celexia</title>
  <style>
    @media only screen and (max-width:480px) {
      .content-padding { padding-left:20px !important; padding-right:20px !important; }
      .section-cell { padding:20px !important; }
      .company-name { font-size:30px !important; line-height:35px !important; }
      .metric-cell { display:block !important; width:auto !important; border-left:0 !important; border-right:0 !important; border-radius:8px !important; }
      .metric-cell + .metric-cell { border-top:8px solid #FFFFFF !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F0EDF6;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;color:#2A2340;">
  <div style="display:none;font-size:1px;line-height:1px;color:#F0EDF6;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(application.company)} · ${escapeHtml(trade)} — une nouvelle candidature à étudier.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#F0EDF6" style="width:100%;background-color:#F0EDF6;border-collapse:collapse;">
    <tr><td align="center" style="padding:32px 12px;">
      <!--[if mso]><table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FAF9FC" style="width:100%;max-width:640px;background-color:#FAF9FC;border-collapse:separate;border-spacing:0;border-radius:20px;overflow:hidden;">
        <tr><td class="content-padding" bgcolor="#1F0D3D" style="padding:30px 32px 28px;background-color:#1F0D3D;border-radius:20px 20px 0 0;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td style="color:#FFFFFF;font-size:26px;line-height:30px;font-weight:700;letter-spacing:-1px;">Celexia<span style="color:#DDE7A3;">.</span></td>
              <td align="right" style="color:#CFB9FF;font-size:10px;line-height:15px;letter-spacing:1.4px;">L’ÉQUIPE<br>CELEXIA</td>
            </tr>
          </table>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:32px;border-collapse:separate;">
            <tr><td bgcolor="#DDE7A3" style="padding:7px 11px;background-color:#DDE7A3;border-radius:5px;color:#1F0D3D;font-size:10px;line-height:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Nouvelle candidature</td></tr>
          </table>
          <h1 class="company-name" style="margin:18px 0 10px;color:#FFFFFF;font-size:38px;line-height:43px;font-weight:700;letter-spacing:-1.3px;word-break:break-word;overflow-wrap:anywhere;">${escapeHtml(application.company)}</h1>
          <p style="margin:0;color:#CFB9FF;font-size:16px;line-height:24px;">${escapeHtml(trade)}</p>
        </td></tr>

        <tr><td class="content-padding" style="padding:24px 32px;">
          <p style="margin:0 0 6px;color:#1F0D3D;font-size:17px;line-height:25px;font-weight:700;">Une entreprise souhaite échanger avec nous.</p>
          <p style="margin:0;color:#6B6480;font-size:13px;line-height:21px;">Voici son dossier, à étudier par l’équipe Celexia.<br>Demande reçue le ${escapeHtml(dateLabel)}.</p>
        </td></tr>

        <tr><td class="content-padding" style="padding:0 32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate;background-color:#FFFFFF;border:1px solid #E4DFED;border-radius:12px;">
            <tr><td class="section-cell" style="padding:24px;">
              ${sectionTitle('01', 'L’entreprise')}
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;">
                ${field('Entreprise', application.company)}
                ${field('Métier', trade)}
                ${field('Zone d’intervention', application.area)}
                ${field('Année de création', application.createdYear)}
              </table>
            </td></tr>
          </table>
        </td></tr>

        <tr><td class="content-padding" style="padding:0 32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate;background-color:#FFFFFF;border:1px solid #E4DFED;border-radius:12px;">
            <tr><td class="section-cell" style="padding:24px;">
              ${sectionTitle('02', 'L’activité &amp; les capacités')}
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:separate;border-spacing:0;">
                <tr>
                  <td class="metric-cell" width="50%" valign="top" bgcolor="#F0EDF6" style="padding:18px 14px;background-color:#F0EDF6;border-radius:8px 0 0 8px;border-right:4px solid #FFFFFF;">
                    <p style="margin:0 0 8px;color:#1F0D3D;font-size:32px;line-height:36px;font-weight:700;letter-spacing:-1px;word-break:break-word;">${escapeHtml(application.monthlyProjects)}</p>
                    <p style="margin:0;color:#514A66;font-size:12px;line-height:18px;word-break:break-word;overflow-wrap:anywhere;">Chantiers réalisés<br>par mois</p>
                  </td>
                  <td class="metric-cell" width="50%" valign="top" bgcolor="#F0F3D7" style="padding:18px 14px;background-color:#F0F3D7;border-radius:0 8px 8px 0;border-left:4px solid #FFFFFF;">
                    <p style="margin:0 0 8px;color:#404A21;font-size:32px;line-height:36px;font-weight:700;letter-spacing:-1px;word-break:break-word;">${escapeHtml(application.additionalProjects)}</p>
                    <p style="margin:0;color:#404A21;font-size:12px;line-height:18px;word-break:break-word;overflow-wrap:anywhere;">Chantiers supplémentaires<br>possibles par mois</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:12px;table-layout:fixed;border-collapse:collapse;">
                ${field('Nombre de salariés', application.employees)}
                ${field('Chiffre d’affaires annuel', application.revenue)}
              </table>
            </td></tr>
          </table>
        </td></tr>

        <tr><td class="content-padding" style="padding:0 32px 24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" style="border-collapse:separate;background-color:#FFFFFF;border:1px solid #E4DFED;border-radius:12px;">
            <tr><td class="section-cell" style="padding:24px;">
              ${sectionTitle('03', 'Votre interlocuteur')}
              <p style="margin:0 0 4px;color:#1F0D3D;font-size:21px;line-height:27px;font-weight:700;word-break:break-word;overflow-wrap:anywhere;">${escapeHtml(contactName)}</p>
              <p style="margin:0 0 12px;color:#6B6480;font-size:14px;line-height:21px;word-break:break-word;overflow-wrap:anywhere;">${escapeHtml(application.role)}</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;border-collapse:collapse;">
                ${field('Dans l’entreprise depuis', application.joinedYear)}
                ${field('E-mail', application.email, mailto)}
                ${field('Téléphone', application.phone, tel)}
              </table>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;border-collapse:separate;">
                <tr><td align="center" bgcolor="#5620C4" style="border-radius:8px;background-color:#5620C4;mso-padding-alt:15px 20px;">
                  <a href="${escapeHtml(mailto)}" style="display:inline-block;padding:15px 20px;border:1px solid #5620C4;border-radius:8px;color:#FFFFFF;font-size:14px;line-height:20px;font-weight:700;text-align:center;text-decoration:none;">Répondre au candidat&nbsp; ↗</a>
                </td></tr>
              </table>
              <p style="margin:12px 0 0;color:#6B6480;font-size:12px;line-height:19px;">Vous pouvez aussi répondre directement à cet e-mail.</p>
            </td></tr>
          </table>
        </td></tr>

        ${details}

        <tr><td class="content-padding" style="padding:0 32px 28px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;border-top:1px solid #E4DFED;">
            <tr><td style="padding-top:20px;">
              <p style="margin:0 0 8px;color:#514A66;font-size:12px;line-height:19px;">Accord pour l’étude de la candidature et la prise de contact : <strong>${application.consent === true ? 'oui' : 'non'}</strong>, le ${escapeHtml(dateLabel)}.</p>
              <p style="margin:0;color:#6B6480;font-size:11px;line-height:18px;word-break:break-word;overflow-wrap:anywhere;">Référence ${escapeHtml(String(reference).slice(0, 12))}<br>Provenance : ${escapeHtml(source)}</p>
            </td></tr>
          </table>
        </td></tr>
      </table>
      <!--[if mso]></td></tr></table><![endif]-->
      <p style="max-width:540px;margin:20px auto 0;padding:0 12px;color:#6B6480;font-size:11px;line-height:18px;text-align:center;">L’équipe Celexia<br>Cette demande est une candidature à analyser.<br>Aucun compte ni contrat n’a été créé.</p>
    </td></tr>
  </table>
</body>
</html>`;
}
