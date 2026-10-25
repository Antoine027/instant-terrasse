// Générateur du site Instant Terrasse — Node pur, sans dépendance.
// `node build.mjs` produit le dossier dist/ que Vercel publie.
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { SITE, POSE, UNIVERS, AUTRES, PAGES } from "./src/pages.mjs";
import { CONTENUS } from "./src/contenus.mjs";
import { carteProduit } from "./src/vignettes.mjs";
import { SCRIPT_GALERIE } from "./src/galerie.mjs";

// Les pages rédigées remplacent leur version « en préparation ».
for (const p of PAGES) if (CONTENUS[p.chemin]) Object.assign(p, CONTENUS[p.chemin], { statut: "redigee" });
for (const c of Object.keys(CONTENUS)) if (!PAGES.some((p) => p.chemin === c)) throw new Error(`Contenu sans page dans le plan : ${c}`);

// Tant que le site est en test, il reste invisible pour les moteurs de recherche.
// À passer à true seulement le jour de la bascule du domaine instantterrasse.com.
const EN_LIGNE = false;

const DIST = "dist";
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
if (existsSync("public")) cpSync("public", DIST, { recursive: true });

const css = readFileSync("src/style.css", "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Contrôle : chaque chemin est unique et se termine par /.
const vus = new Set();
for (const p of PAGES) {
  if (!p.chemin.endsWith("/")) throw new Error(`Chemin sans / final : ${p.chemin}`);
  if (vus.has(p.chemin)) throw new Error(`Chemin en double : ${p.chemin}`);
  vus.add(p.chemin);
}

// ---------- Menu ----------
const lienMenu = ([chemin, titre], actuel) =>
  `<li><a href="${chemin}"${chemin === actuel ? ' aria-current="page"' : ""}>${titre}</a></li>`;

const menuUnivers = (u, actuel) => {
  const pages = u.groupes.flatMap((g) => g.pages);
  const dansUnivers = pages.some(([c]) => c === actuel);
  if (pages.length === 1) {
    return `<li class="menu-item"><a class="menu-lien${dansUnivers ? " actif" : ""}" href="${pages[0][0]}">${u.nom}</a></li>`;
  }
  return `<li class="menu-item">
    <details class="menu-deroulant">
      <summary class="menu-lien${dansUnivers ? " actif" : ""}">${u.nom}</summary>
      <div class="sous-menu${u.groupes.length > 2 ? " sous-menu-large" : ""}">
        ${u.groupes.map((g) => `<div><p class="sous-menu-titre">${g.nom}</p><ul>${g.pages.map((p) => lienMenu(p, actuel)).join("")}</ul></div>`).join("")}
      </div>
    </details>
  </li>`;
};

const entete = (actuel) => `
<header class="entete">
  <div class="conteneur entete-in">
    <a class="logo" href="/" aria-label="Instant Terrasse, accueil"><img src="/assets/img/logo-instant-terrasse-180.webp" srcset="/assets/img/logo-instant-terrasse-180.webp 1x, /assets/img/logo-instant-terrasse-360.webp 2x" alt="Instant Terrasse" width="178" height="62"></a>
    <details class="burger">
      <summary aria-label="Ouvrir le menu"><span></span><span></span><span></span></summary>
    </details>
    <nav class="menu" aria-label="Navigation principale">
      <ul class="menu-liste">
        ${UNIVERS.map((u) => menuUnivers(u, actuel)).join("")}
        <li class="menu-item"><a class="menu-lien${actuel === "/realisations/" ? " actif" : ""}" href="/realisations/">Réalisations</a></li>
        <li class="menu-item"><a class="menu-lien" href="/#methode">Notre méthode</a></li>
      </ul>
    </nav>
    <a class="bouton bouton-petit entete-cta" href="/contact/">Devis gratuit</a>
  </div>
</header>`;

// ---------- Pied de page ----------
const pied = () => `
<footer class="pied">
  <div class="conteneur pied-grille">
    <div>
      <p class="logo"><img src="/assets/img/logo-instant-terrasse-clair-184.webp" srcset="/assets/img/logo-instant-terrasse-clair-184.webp 1x, /assets/img/logo-instant-terrasse-clair-368.webp 2x" alt="Instant Terrasse" width="184" height="64" loading="lazy" decoding="async"></p>
      <p>Terrasses, pergolas et aménagements extérieurs sur mesure — Lyon &amp; sa région.</p>
      <p><a href="tel:${SITE.telLien}">${SITE.tel}</a><br>${SITE.adresse}</p>
    </div>
    ${UNIVERS.slice(0, 2).map((u) => `<div><p class="pied-titre">${u.nom}</p><ul>${u.groupes.flatMap((g) => g.pages).slice(0, 7).map(([c, t]) => `<li><a href="${c}">${t}</a></li>`).join("")}</ul></div>`).join("")}
    <div>
      <p class="pied-titre">Et aussi</p>
      <ul>${[...UNIVERS.slice(2).flatMap((u) => u.groupes.flatMap((g) => g.pages)), ...AUTRES].map(([c, t]) => `<li><a href="${c}">${t}</a></li>`).join("")}</ul>
    </div>
  </div>
  <p class="conteneur mentions">© ${new Date().getFullYear()} Instant Terrasse — une marque d'ESCOM HABITAT</p>
</footer>`;

// ---------- Page « en préparation » ----------
const corpsPreparation = (p) => {
  const u = UNIVERS.find((x) => x.cle === p.univers);
  const voisines = u ? u.groupes.flatMap((g) => g.pages).filter(([c]) => c !== p.chemin).slice(0, 6) : [];
  return `
<section class="hero hero-page">
  <div class="conteneur">
    ${u ? `<p class="fil"><a href="/">Accueil</a> › ${u.nom}</p>` : `<p class="fil"><a href="/">Accueil</a></p>`}
    <h1>${esc(p.h1)}</h1>
    <p class="chapo">${esc(p.intro)}</p>
    <p class="actions"><a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a></p>
  </div>
</section>
<section class="bloc">
  <div class="conteneur">
    <div class="encart-preparation">
      <p><strong>Page en préparation.</strong> Le contenu, les photos et les informations détaillées de cette page sont en cours de rédaction.</p>
    </div>
    ${u ? `<p class="note-pose">${POSE}</p>` : ""}
  </div>
</section>
${voisines.length ? `<section class="bloc bloc-alt"><div class="conteneur"><h2>À voir aussi</h2><div class="grille grille-3">${voisines.map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div></div></section>` : ""}`;
};

// Précharge l'image prioritaire de la page (LCP) dès le <head>.
const preloadLcp = (corps = "") => {
  const m = corps.match(/<img[^>]*fetchpriority="high"[^>]*>/);
  if (!m) return "";
  const srcset = m[0].match(/srcset="([^"]+)"/)?.[1], sizes = m[0].match(/sizes="([^"]+)"/)?.[1];
  return srcset ? `<link rel="preload" as="image" imagesrcset="${srcset}" imagesizes="${sizes ?? "100vw"}" fetchpriority="high">` : "";
};

// ---------- Gabarit ----------
const gabarit = (p) => `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
${EN_LIGNE ? `<link rel="canonical" href="${SITE.url}${p.chemin}">` : `<meta name="robots" content="noindex, nofollow">`}
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:locale" content="fr_FR">
<meta name="theme-color" content="#F8F3EB">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/assets/img/favicon-48.png">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/img/icone-192.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
${p.head ?? preloadLcp(p.corps)}
${p.jsonld ? `<script type="application/ld+json">${JSON.stringify(p.jsonld)}</script>` : ""}
<style>${css}</style>
</head>
<body>
${entete(p.chemin)}
<main id="contenu">
${p.corps ?? corpsPreparation(p)}
</main>
${pied()}
<script>
// Un seul sous-menu ouvert à la fois, fermeture au clic extérieur ou Échap.
const d=[...document.querySelectorAll('.menu-deroulant')];
d.forEach(x=>x.addEventListener('toggle',()=>{if(x.open)d.forEach(y=>y!==x&&(y.open=false))}));
document.addEventListener('click',e=>{if(!e.target.closest('.menu-deroulant'))d.forEach(y=>y.open=false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')d.forEach(y=>y.open=false)});
${SCRIPT_GALERIE}
const b=document.querySelector('.burger');b&&b.addEventListener('toggle',()=>document.body.classList.toggle('menu-ouvert',b.open));
</script>
</body>
</html>`;

for (const p of PAGES) {
  if (p.statut === "preparation") p.corps = corpsPreparation(p);
  if (p.h1 && p.corps && p.chemin !== "/contact/") p.corps = p.corps.replaceAll('href="/contact/"', `href="/contact/?projet=${encodeURIComponent(p.nomProjet ?? p.h1)}"`);
}
for (const p of PAGES) {
  const dossier = join(DIST, p.chemin);
  mkdirSync(dossier, { recursive: true });
  const FLECHE = `<span class="fleche" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span>`;
  writeFileSync(join(dossier, "index.html"), gabarit(p).replaceAll('<span class="fleche" aria-hidden="true">→</span>', FLECHE));
}

writeFileSync(join(DIST, "robots.txt"), EN_LIGNE
  ? `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`
  : `User-agent: *\nDisallow: /\n`);

if (EN_LIGNE) {
  const urls = PAGES.filter((p) => !p.horsPlan).map((p) => `<url><loc>${SITE.url}${p.chemin}</loc></url>`).join("");
  writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
}

const aRediger = PAGES.filter((p) => p.statut === "preparation").length;
console.log(`OK : ${PAGES.length} pages générées (${aRediger} en préparation) — ${EN_LIGNE ? "site EN LIGNE (indexable)" : "site de TEST (non indexé)"}`);
