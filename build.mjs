// Générateur du site Instant Terrasse — Node pur, sans dépendance.
// `node build.mjs` produit le dossier dist/ que Vercel publie.
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { SITE, POSE, UNIVERS, AUTRES, PAGES } from "./src/pages.mjs";
import { CONTENUS } from "./src/contenus.mjs";
import { carteProduit, VIGNETTES } from "./src/vignettes.mjs";
import { SCRIPT_GALERIE, imgPhoto, photo } from "./src/galerie.mjs";

// Les pages rédigées remplacent leur version « en préparation ».
for (const p of PAGES) if (CONTENUS[p.chemin]) Object.assign(p, CONTENUS[p.chemin], { statut: "redigee" });
for (const c of Object.keys(CONTENUS)) if (!PAGES.some((p) => p.chemin === c)) throw new Error(`Contenu sans page dans le plan : ${c}`);

// Pages « en préparation » : absentes des menus et du pied de page tant qu'elles ne sont pas rédigées.
const PREP = new Set(PAGES.filter((p) => p.statut === "preparation").map((p) => p.chemin));
const visible = ([c]) => !PREP.has(c);

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
// Lien de sous-menu : vignette photo et description courte (visibles seulement dans le menu mobile).
const vignetteMenu = (chemin) => {
  const cle = VIGNETTES[chemin];
  if (!cle) return `<span class="mm-vig mm-vig-vide" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 3 20h18L12 4z"/><path d="M12 4v16"/><path d="M12 20l-3.5-6M12 20l3.5-6"/><path d="M10 3.5l2 .5 2-.5"/></svg></span>`;
  const p = photo(cle);
  return `<span class="mm-vig" aria-hidden="true"><img src="/assets/img/${p.dossier}/${p.cle}-400.webp" alt="" width="52" height="52" loading="lazy" decoding="async"></span>`;
};
const lienMenu = ([chemin, titre, desc, court], actuel) =>
  `<li><a href="${chemin}"${chemin === actuel ? ' aria-current="page"' : ""}>${vignetteMenu(chemin)}<span class="mm-txt"><b>${court ?? titre}</b>${desc ? `<small>${desc}</small>` : ""}</span></a></li>`;

// Pictos des rubriques (menu mobile).
const ic = (d) => `<svg class="mm-ic" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONES_MENU = {
  // Terrasse : platelage en perspective ; aménagements : pergola à lames ; types de projets : maison et piscine
  terrasses: ic('<path d="M7 9h10l4 11H3z"/><path d="M5.2 14h13.6"/><path d="M10 9l-1.3 11M14 9l1.3 11"/>'),
  amenagements: ic('<path d="M3 5h18M3 8h18"/><path d="M6.5 5v3M10 5v3M14 5v3M17.5 5v3"/><path d="M5 8v12M19 8v12"/><path d="M2 20h20"/>'),
  projets: ic('<path d="M3 11l9-7 9 7"/><path d="M5.5 9.5V15h13V9.5"/><path d="M10.5 15v-3.5h3V15"/><path d="M2 19c1.7 0 1.7-1.3 3.3-1.3S7 19 8.7 19s1.7-1.3 3.3-1.3 1.7 1.3 3.3 1.3 1.7-1.3 3.3-1.3S20.3 19 22 19"/>'),
  galerie: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 9"/>'),
  methode: ic('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.5"/><circle cx="4.5" cy="12" r="1.5"/><circle cx="4.5" cy="18" r="1.5"/>'),
  professionnels: ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>'),
};

const menuUnivers = (u0, actuel) => {
  const u = { ...u0, groupes: u0.groupes.map((g) => ({ ...g, pages: u0.menuToujours ? g.pages : g.pages.filter(visible) })).filter((g) => g.pages.length) };
  if (!u.groupes.length) return "";
  const pages = u.groupes.flatMap((g) => g.pages);
  const dansUnivers = pages.some(([c]) => c === actuel);
  if (pages.length === 1) {
    return `<li class="menu-item"><a class="menu-lien${dansUnivers ? " actif" : ""}" href="${pages[0][0]}">${u.nom}</a></li>`;
  }
  return `<li class="menu-item">
    <details class="menu-deroulant">
      <summary class="menu-lien${dansUnivers ? " actif" : ""}">${ICONES_MENU[u.cle] ?? ""}<span class="mm-nom">${u.nom}</span></summary>
      ${u.cascade ? `<div class="sous-menu sous-menu-cascade">
        <ul class="cascade">${u.groupes.map((g) => `<li class="cascade-item${g.pages.some(([c]) => c === actuel) ? " cascade-actif" : ""}"><button type="button" class="cascade-titre">${g.nom}</button><div class="cascade-panneau"><div><p class="sous-menu-titre">${g.nom}</p><ul class="cascade-liste">${g.pages.map((p) => lienMenu(p, actuel)).join("")}</ul></div>${g.photo ? `<a class="cascade-photo" href="${g.pages[0][0]}" tabindex="-1" aria-hidden="true">${imgPhoto(g.photo, { sizes: "220px" })}</a>` : ""}</div></li>`).join("")}</ul>
      </div>` : `<div class="sous-menu${u.groupes.length > 2 ? " sous-menu-large" : ""}${u.cle === "professionnels" ? " sous-menu-droite" : ""}">
        ${(() => {
          const groupe = (g) => `<div>${g.nom ? `<p class="sous-menu-titre">${g.nom}</p>` : ""}<ul${g.pages.length > 4 && u.groupes.length === 1 ? ' class="sm-2col"' : ""}>${g.pages.map((p) => lienMenu(p, actuel)).join("")}</ul></div>`;
          // Plus de deux groupes : le premier en colonne de gauche, les autres empilés à droite (ordinateur).
          return u.groupes.length > 2 ? `<div class="sm-col">${groupe(u.groupes[0])}</div><div class="sm-col">${u.groupes.slice(1).map(groupe).join("")}</div>` : u.groupes.map(groupe).join("");
        })()}
      </div>`}
    </details>
  </li>`;
};

const entete = (actuel) => `
<header class="entete">
  <div class="conteneur entete-in">
    <a class="logo" href="/" aria-label="Instant Terrasse, accueil"><img src="/assets/img/logo-instant-terrasse-180.webp" srcset="/assets/img/logo-instant-terrasse-180.webp 1x, /assets/img/logo-instant-terrasse-360.webp 2x" alt="Instant Terrasse" width="178" height="62"></a>
    <div class="entete-contact">
      <a href="tel:${SITE.telLien}" aria-label="Appeler le ${SITE.tel}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></a>
      <a href="${SITE.whatsapp}" aria-label="Écrire sur WhatsApp"><svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z"/></svg></a>
      <a href="mailto:${SITE.email}" aria-label="Écrire à ${SITE.email}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
    </div>
    <details class="burger">
      <summary aria-label="Ouvrir le menu"><span></span><span></span><span></span></summary>
    </details>
    <nav class="menu" aria-label="Navigation principale">
      <ul class="menu-liste">
        ${UNIVERS.filter((u) => u.cle !== "professionnels").map((u) => menuUnivers(u, actuel)).join("")}
        <li class="menu-item"><a class="menu-lien${actuel === "/realisations/" ? " actif" : ""}" href="/realisations/">${ICONES_MENU.galerie}<span class="mm-nom">Galerie</span></a></li>
        <li class="menu-item"><a class="menu-lien" href="/#methode">${ICONES_MENU.methode}<span class="mm-nom">Notre méthode</span></a></li>
        ${menuUnivers(UNIVERS.find((u) => u.cle === "professionnels"), actuel)}
        <li class="menu-cta"><a class="bouton" href="/contact/">Demander une visite gratuite</a><a class="menu-tel" href="tel:${SITE.telLien}">ou appelez le ${SITE.tel}</a></li>
      </ul>
    </nav>
    <a class="bouton bouton-petit entete-cta" href="/contact/">Devis gratuit</a>
  </div>
</header>`;

// ---------- Pied de page ----------
const univ = (cle) => UNIVERS.find((u) => u.cle === cle).groupes.flatMap((g) => g.pages);
const pied = (corps = "") => {
  const credits = [...new Set([...corps.matchAll(/data-credit="(©[^"]+)"/g)].map((m) => m[1]))];
  return `
<footer class="pied">
  <div class="conteneur pied-grille">
    <div>
      <p class="logo"><img src="/assets/img/logo-instant-terrasse-clair-184.webp" srcset="/assets/img/logo-instant-terrasse-clair-184.webp 1x, /assets/img/logo-instant-terrasse-clair-368.webp 2x" alt="Instant Terrasse" width="184" height="64" loading="lazy" decoding="async"></p>
      <p>Terrasses, pergolas et aménagements extérieurs sur mesure — Lyon &amp; sa région.</p>
      <p><a href="tel:${SITE.telLien}">${SITE.tel}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a><br>${SITE.adresse}</p>
    </div>
    ${[
      ["Terrasses", univ("terrasses")],
      ["Types de projets", [...univ("projets"), ...univ("professionnels")]],
      ["Aménagements", univ("amenagements")],
      ["Instant Terrasse", AUTRES],
    ].map(([nom, pages]) => `<details class="pied-groupe" open><summary class="pied-titre">${nom}</summary><ul>${pages.filter(visible).map(([c, t, , court]) => `<li><a href="${c}">${court ?? t}</a></li>`).join("")}</ul></details>`).join("")}
  </div>
  <p class="conteneur mentions">© ${new Date().getFullYear()} Instant Terrasse — une marque d'ESCOM HABITAT · <a href="/mentions-legales/">Mentions légales</a> · <a href="/confidentialite/">Confidentialité et cookies</a>${credits.length ? ` · Crédits photo : ${credits.join(", ")}` : ""}</p>
</footer>`;
};

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

// Pages exclues du sitemap et non indexées : pages techniques et pages encore « en préparation »
// (contenu trop mince pour Google ; elles rejoignent le sitemap dès qu'elles sont rédigées).
const horsSitemap = (p) => p.horsPlan || p.statut === "preparation";

// ---------- Gabarit ----------
const gabarit = (p) => `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
${!EN_LIGNE ? `<meta name="robots" content="noindex, nofollow">` : horsSitemap(p) ? `<meta name="robots" content="noindex, follow">` : `<link rel="canonical" href="${SITE.url}${p.chemin}">`}
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
${pied(p.corps ?? "")}
<a class="appel-flottant" href="tel:${SITE.telLien}" aria-label="Appeler Instant Terrasse au ${SITE.tel}"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></a>
<script>
// Un seul sous-menu ouvert à la fois, fermeture au clic extérieur ou Échap.
const d=[...document.querySelectorAll('.menu-deroulant')];
d.forEach(x=>x.addEventListener('toggle',()=>{if(x.open)d.forEach(y=>y!==x&&(y.open=false))}));
document.addEventListener('click',e=>{if(!e.target.closest('.menu-deroulant'))d.forEach(y=>y.open=false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')d.forEach(y=>y.open=false)});
${SCRIPT_GALERIE}
const af=document.querySelector('.appel-flottant');if(af){let cache=false;const f=document.querySelectorAll('form,.pied');if('IntersectionObserver' in window){const vus=new Set();const io=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vus.add(e.target):vus.delete(e.target));cache=vus.size>0;m()});f.forEach(x=>io.observe(x))}const m=()=>af.classList.toggle('visible',scrollY>innerHeight*.8&&!cache);addEventListener('scroll',m,{passive:true});m()}
(()=>{const e=document.querySelector('.entete'),l=e&&e.querySelector('.menu-liste'),c=e&&e.querySelector('.entete-cta');if(!l||!c)return;const f=()=>{e.classList.remove('serre','serre2');if(innerWidth<1241)return;const ko=()=>{const a=l.firstElementChild.getBoundingClientRect(),z=l.lastElementChild.previousElementSibling.getBoundingClientRect();return z.right>c.getBoundingClientRect().left-12||a.left<e.querySelector('.logo').getBoundingClientRect().right+12};if(ko()){e.classList.add('serre');if(ko())e.classList.add('serre2')}};f();addEventListener('resize',f);document.fonts&&document.fonts.ready.then(f)})();
const en=document.querySelector('.entete');if(en){let y0=scrollY;const r=()=>{const y=scrollY;en.classList.toggle('reduit',y>60);if(Math.abs(y-y0)>6){en.classList.toggle('cache',y>y0&&y>160&&!document.body.classList.contains('menu-ouvert'));y0=y}};addEventListener('scroll',r,{passive:true});r()}
if(matchMedia('(max-width:700px)').matches)document.querySelectorAll('.pt-materiaux,.projets-car,.pieces-4,.grille-avis,.grille-essences').forEach(c=>{const n=c.children.length,d=document.createElement('div');d.className='points';d.setAttribute('aria-hidden','true');d.innerHTML='<span></span>'.repeat(n);c.after(d);const ps=d.children;const u=()=>{const w=c.firstElementChild.getBoundingClientRect().width+14;const i=Math.min(n-1,Math.round(c.scrollLeft/w));[...ps].forEach((p,j)=>p.classList.toggle('on',j===i))};c.addEventListener('scroll',u,{passive:true});u()});
if(matchMedia('(max-width:700px)').matches)document.querySelectorAll('.pied-groupe').forEach(d=>d.open=false);
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

// Sitemap toujours généré (pour contrôle), mais annoncé dans robots.txt seulement une fois en ligne.
const urls = PAGES.filter((p) => !horsSitemap(p)).map((p) => `<url><loc>${SITE.url}${p.chemin}</loc></url>`).join("\n");
writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

const aRediger = PAGES.filter((p) => p.statut === "preparation").length;
console.log(`OK : ${PAGES.length} pages générées (${aRediger} en préparation) — ${EN_LIGNE ? "site EN LIGNE (indexable)" : "site de TEST (non indexé)"}`);
