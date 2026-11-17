// Articles « Conseils » écrits en Markdown (content/conseils/<slug>.md), publiés par la tâche programmée
// du mardi et du vendredi (docs/plan-editorial.md). Lecture pure : aucune dépendance vers contenus.mjs.
//
// En-tête (une clé par ligne, « clé: valeur ») :
//   title       titre SEO complet, 60 caractères au plus (ex. « Quand faire sa terrasse ? | Instant Terrasse »)
//   description 158 caractères au plus
//   h1          deux parties séparées par « | » : la 2e est mise en couleur (ex. « Quand faire | sa terrasse ? »)
//   carte       titre court de la carte dans /conseils/ et « Pour aller plus loin »
//   resume      une phrase sous le titre de la carte
//   chapo       texte d'introduction de l'en-tête
//   photo       clé d'une photo existante (src/galerie.mjs), jamais une image IA de catégorie « ambiance »
//   position    cadrage de la photo d'en-tête (ex. « 50% 50% »), facultatif
//   date        AAAA-MM-JJ (date de publication)
//   modifie     AAAA-MM-JJ (dernière mise à jour), facultatif
//   bouton2     « /adresse/|Texte du bouton » (2e bouton de l'en-tête), facultatif
//   faqtitre    titre de la FAQ
//   faq         « Question ?|Réponse ;; Question ?|Réponse » (2 à 5 questions)
//   suite       « /adresse/|Titre|Texte ;; … » (3 liens « Pour aller plus loin »)
//   cta         titre du formulaire de fin
//   sources     « Libellé|https://… ;; … » (1 à 3 sources officielles vérifiées)
//
// Corps : Markdown simple — « ## » et « ### », paragraphes, listes « - » et « 1. », tableaux « | », citations « > »,
// **gras**, [liens](/adresse/), et une photo par ligne « [photo: cle | légende] » (illustration, jamais « notre chantier »).
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DOSSIER = "content/conseils";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (t) => esc(t)
  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, txt, url) => /^https?:/.test(url)
    ? `<a href="${url}" target="_blank" rel="noopener">${txt}</a>`
    : `<a href="${url}">${txt}</a>`);

// imgPhoto est fourni par l'appelant (contenus.mjs) pour éviter une dépendance circulaire.
export const markdown = (md, imgPhoto) => {
  const L = md.split("\n"), out = [];
  let i = 0;
  while (i < L.length) {
    const l = L[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^\[photo:\s*([a-z0-9-]+)\s*\|\s*(.+)\]$/))) {
      out.push(`<figure class="fig-article">${imgPhoto(m[1], { sizes: "(max-width:760px) 100vw, 760px" })}<figcaption>${inline(m[2])}</figcaption></figure>`); i++; continue;
    }
    if ((m = l.match(/^(#{2,3}) (.+)/))) { out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); i++; continue; }
    if (l.startsWith("|")) {
      const rows = []; while (i < L.length && L[i].startsWith("|")) rows.push(L[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const tete = cells(rows[0]), corps = rows.slice(2).map(cells);
      out.push(`<div class="tableau-defile"><table class="comparatif"><thead><tr>${tete.map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${corps.map((r) => `<tr>${r.map((c, j) => (j === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (/^- /.test(l)) { const it = []; while (i < L.length && /^- /.test(L[i])) it.push(L[i++].slice(2)); out.push(`<ul>${it.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`); continue; }
    if (/^\d+\. /.test(l)) { const it = []; while (i < L.length && /^\d+\. /.test(L[i])) it.push(L[i++].replace(/^\d+\. /, "")); out.push(`<ol>${it.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`); continue; }
    if (l.startsWith("> ")) { const it = []; while (i < L.length && L[i].startsWith("> ")) it.push(L[i++].slice(2)); out.push(`<blockquote><p>${inline(it.join(" "))}</p></blockquote>`); continue; }
    const p = []; while (i < L.length && L[i].trim() && !/^(#|\||- |\d+\. |> |\[photo:)/.test(L[i])) p.push(L[i++]);
    out.push(`<p>${inline(p.join(" "))}</p>`);
  }
  return out.join("\n    ");
};

const liste = (v, n) => (v || "").split(" ;; ").map((x) => x.trim()).filter(Boolean).map((x) => x.split("|").map((y) => y.trim())).filter((x) => x.length >= n);

const lire = (f) => {
  const brut = readFileSync(join(DOSSIER, f), "utf8").replace(/\r\n/g, "\n");
  const m = brut.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Article ${f} : en-tête « --- » introuvable`);
  const meta = {};
  m[1].split("\n").forEach((l) => { const k = l.indexOf(":"); if (k > 0) meta[l.slice(0, k).trim()] = l.slice(k + 1).trim(); });
  const slug = f.replace(/\.md$/, "");
  for (const cle of ["title", "description", "h1", "carte", "resume", "chapo", "photo", "date", "faqtitre", "faq", "suite", "cta"]) {
    if (!meta[cle]) throw new Error(`Article ${f} : champ « ${cle} » manquant`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`Article ${f} : date au format AAAA-MM-JJ attendue`);
  if (meta.title.length > 60) throw new Error(`Article ${f} : title de ${meta.title.length} caractères (60 au plus)`);
  if (meta.description.length > 158) throw new Error(`Article ${f} : description de ${meta.description.length} caractères (158 au plus)`);
  const ia = (c) => /^ambiance-/.test(c) || c === "pilotis-garde-corps-verre-salon";
  if (ia(meta.photo) || [...m[2].matchAll(/\[photo:\s*([a-z0-9-]+)/g)].some((x) => ia(x[1]))) throw new Error(`Article ${f} : photo IA interdite dans un article`);
  return {
    slug, chemin: `/${slug}/`, ...meta,
    h1: meta.h1.split("|").map((x) => x.trim()),
    bouton2: meta.bouton2 ? meta.bouton2.split("|").map((x) => x.trim()) : undefined,
    faq: liste(meta.faq, 2), suite: liste(meta.suite, 3), sources: liste(meta.sources, 2),
    md: m[2],
  };
};

// Les plus récents d'abord.
export const ARTICLES_MD = existsSync(DOSSIER)
  ? readdirSync(DOSSIER).filter((f) => f.endsWith(".md")).map(lire).sort((a, b) => (a.date < b.date ? 1 : -1))
  : [];
