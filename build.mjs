// Générateur du site Instant Terrasse — Node pur, sans dépendance.
// `node build.mjs` produit le dossier dist/ que Vercel publie.
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { SITE, PAGES } from "./src/pages.mjs";

// Tant que le site est en test, il reste invisible pour les moteurs de recherche.
// À passer à true seulement le jour de la bascule du domaine instantterrasse.com.
const EN_LIGNE = false;

const DIST = "dist";
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
if (existsSync("public")) cpSync("public", DIST, { recursive: true });

const css = readFileSync("src/style.css", "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const entete = () => `
<header class="entete">
  <div class="conteneur entete-in">
    <a class="logo" href="/">Instant <span>Terrasse</span></a>
    <nav aria-label="Navigation principale">
      <a href="/#materiaux">Revêtements</a>
      <a href="/#projets">Projets</a>
      <a href="/#etapes">Notre méthode</a>
    </nav>
    <a class="bouton bouton-petit" href="tel:${SITE.telLien}">${SITE.tel}</a>
  </div>
</header>`;

const pied = () => `
<footer class="pied">
  <div class="conteneur pied-in">
    <div>
      <p class="logo">Instant <span>Terrasse</span></p>
      <p>Concepteur de terrasses sur mesure — Lyon &amp; sa région</p>
    </div>
    <div>
      <p><a href="tel:${SITE.telLien}">${SITE.tel}</a></p>
      <p>${SITE.adresse}</p>
    </div>
  </div>
  <p class="conteneur mentions">© ${new Date().getFullYear()} Instant Terrasse — une marque d'ESCOM HABITAT</p>
</footer>`;

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
<meta name="theme-color" content="#F0E8DA">
<style>${css}</style>
</head>
<body>
${entete()}
<main id="contenu">
${p.corps}
</main>
${pied()}
</body>
</html>`;

for (const p of PAGES) {
  const dossier = join(DIST, p.chemin);
  mkdirSync(dossier, { recursive: true });
  writeFileSync(join(dossier, "index.html"), gabarit(p));
}

writeFileSync(join(DIST, "robots.txt"), EN_LIGNE
  ? `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`
  : `User-agent: *\nDisallow: /\n`);

if (EN_LIGNE) {
  const urls = PAGES.map((p) => `<url><loc>${SITE.url}${p.chemin}</loc></url>`).join("");
  writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
}

console.log(`OK : ${PAGES.length} page(s) générée(s) — ${EN_LIGNE ? "site EN LIGNE (indexable)" : "site de TEST (non indexé)"}`);
