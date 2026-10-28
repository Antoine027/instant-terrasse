// Réception du formulaire de devis — fonction Vercel exécutée à Paris (cdg1).
// Envoi par l'API transactionnelle de Brevo (même prestataire que le site Horizon Fenêtre).
// Aucune donnée personnelle n'est stockée ni journalisée par cette fonction.
// Variables d'environnement Vercel : BREVO_API_KEY, CONTACT_TO (destinataire), CONTACT_FROM (expéditeur vérifié dans Brevo).

const CHAMPS = { nom: 120, telephone: 30, email: 160, codepostal: 10, projet: 120, souhait: 60, message: 3000 };
const OBLIGATOIRES = ["nom", "telephone"]; // e-mail facultatif partout (28/10/2026)

const aller = (res, chemin) => { res.statusCode = 303; res.setHeader("Location", chemin); res.setHeader("Cache-Control", "no-store"); res.end(); };
const propre = (v, max) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
const html = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function lireCorps(req) {
  // Les cases « projet » peuvent être cochées plusieurs fois : on les réunit en une seule valeur.
  if (req.body && typeof req.body === "object") {
    const b = { ...req.body };
    if (Array.isArray(b.projet)) b.projet = b.projet.join(", ");
    return b;
  }
  const morceaux = [];
  for await (const m of req) morceaux.push(m);
  const p = new URLSearchParams(Buffer.concat(morceaux).toString("utf8").slice(0, 20000));
  const b = Object.fromEntries(p);
  if (p.getAll("projet").length > 1) b.projet = p.getAll("projet").join(", ");
  return b;
}

export default async function handler(req, res) {
  if (req.method !== "POST") { res.statusCode = 405; res.setHeader("Allow", "POST"); return res.end(); }
  let corps;
  try { corps = await lireCorps(req); } catch { return aller(res, "/erreur-envoi/"); }
  if (propre(corps.site_web, 200)) return aller(res, "/merci/"); // pot de miel anti-robots

  const d = Object.fromEntries(Object.entries(CHAMPS).map(([k, max]) => [k, propre(corps[k], max)]));
  // Formulaire court de l'accueil (rappel) : l'e-mail est facultatif.
  const court = propre(corps.court, 5) === "1";
  const requis = court ? ["nom", "telephone"] : OBLIGATOIRES;
  if (requis.some((k) => !d[k]) || (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email))) return aller(res, "/erreur-envoi/");

  const cle = process.env.BREVO_API_KEY, vers = process.env.CONTACT_TO, de = process.env.CONTACT_FROM;
  if (!cle || !vers || !de) { console.error("contact: variables Brevo manquantes"); return aller(res, "/erreur-envoi/"); }

  const lignes = [["Nom", d.nom], ["Téléphone", d.telephone], ["E-mail", d.email || "(non renseigné)"], ["Code postal", d.codepostal],
    ["Projet", d.projet], ["Souhait", d.souhait], ["Message", d.message || "(aucun)"]];
  try {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": cle, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { name: "Site Instant Terrasse", email: de },
        to: [{ email: vers }],
        ...(d.email ? { replyTo: { email: d.email, name: d.nom } } : {}),
        subject: `Demande Instant Terrasse : ${d.projet || "projet"} – ${d.nom}`,
        textContent: lignes.map(([k, v]) => `${k} : ${v}`).join("\n"),
        htmlContent: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${lignes.map(([k, v]) => `<tr><th align="left" style="background:#F8F3EB;color:#2F3437">${html(k)}</th><td>${html(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`,
      }),
    });
    if (!r.ok) { console.error("contact: échec Brevo", r.status); return aller(res, "/erreur-envoi/"); }
  } catch { console.error("contact: Brevo injoignable"); return aller(res, "/erreur-envoi/"); }
  return aller(res, "/merci/");
}
