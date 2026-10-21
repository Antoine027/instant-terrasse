// Galeries photo générées depuis src/photos.json (rempli par outils/photos.py).
// Les photos gardent leur format d'origine (pas de recadrage) : mise en page en colonnes.
import { readFileSync } from "node:fs";
export const PHOTOS = JSON.parse(readFileSync(new URL("./photos.json", import.meta.url), "utf8"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const photo = (cle) => {
  const p = PHOTOS.find((x) => x.cle === cle);
  if (!p) throw new Error(`Photo inconnue : ${cle}`);
  return p;
};

// <img> responsive pour une photo du manifeste.
export const imgPhoto = (cle, { sizes = "(max-width:760px) 100vw, 400px", prioritaire = false, classe = "" } = {}) => {
  const p = photo(cle);
  const base = `/assets/img/${p.dossier}/${p.cle}`;
  const w = p.largeurs.includes(1000) ? 1000 : p.largeurs[p.largeurs.length - 1];
  return `<img${classe ? ` class="${classe}"` : ""} src="${base}-${w}.webp" srcset="${p.largeurs.map((l) => `${base}-${l}.webp ${l}w`).join(", ")}" sizes="${sizes}" alt="${esc(p.alt)}" width="${w}" height="${Math.round(w / p.ratio)}"${prioritaire ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
};

// Galerie filtrable par essence pour une catégorie (ex. "terrasse-bois").
export const galerie = (categorie, { titre, intro, legende = "Illustrations" } = {}) => {
  const liste = PHOTOS.filter((p) => p.categorie === categorie);
  if (!liste.length) return "";
  const essences = [...new Set(liste.map((p) => p.essence).filter(Boolean))];
  return `
<div class="galerie-bloc" data-galerie>
  ${titre ? `<h2>${titre}</h2>` : ""}${intro ? `<p class="chapo">${intro}</p>` : ""}
  ${essences.length > 1 ? `<div class="filtres" role="group" aria-label="Filtrer par essence">
    <button type="button" class="filtre" aria-pressed="true" data-filtre="tout">Toutes</button>
    ${essences.map((e) => `<button type="button" class="filtre" aria-pressed="false" data-filtre="${slug(e)}">${e}</button>`).join("")}
  </div>` : ""}
  <div class="mosaique">
    ${liste.map((p) => `<figure data-essence="${slug(p.essence || "")}">${imgPhoto(p.cle, { sizes: "(max-width:560px) 100vw, (max-width:1060px) 50vw, 380px" })}${p.essence ? `<figcaption>${p.essence}</figcaption>` : ""}</figure>`).join("")}
  </div>
  <p class="legende">${legende}.</p>
</div>`;
};

// Script des filtres (une seule fois par page).
export const SCRIPT_GALERIE = `document.querySelectorAll('[data-galerie]').forEach(g=>{const b=g.querySelectorAll('.filtre');b.forEach(x=>x.addEventListener('click',()=>{b.forEach(y=>y.setAttribute('aria-pressed',y===x));const f=x.dataset.filtre;g.querySelectorAll('figure').forEach(fig=>fig.hidden=!(f==='tout'||fig.dataset.essence===f))}))});`;
