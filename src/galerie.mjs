// Galeries photo générées depuis src/photos.json (rempli par outils/photos.py).
// Les photos gardent leur format d'origine (pas de recadrage) : mise en page en colonnes.
import { readFileSync, existsSync } from "node:fs";
import { RANG } from "./ordre-photos.mjs";
export const PHOTOS = JSON.parse(readFileSync(new URL("./photos.json", import.meta.url), "utf8"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Crédit photo par catégorie : un seul crédit par photo (demande d'Antoine, 28/10/2026).
// Garde-corps : Kordo ; terrasses et bardage : Grad ; pergolas, carports et stores : MSB.
const CREDITS = {
  "garde-corps": "Kordo",
  "pergola-bioclimatique": "MSB", "pergola-toile-retractable": "MSB", "pergola-toit-fixe": "MSB", carport: "MSB", "store-banne": "MSB",
  "bardage-bois": "Grad", "bardage-aluminium": "Grad", "bardage-pose": "Grad", "lame-bardage": "Grad",
  "terrasse-bois": "Grad", "terrasse-composite": "Grad", "terrasse-aluminium": "Aludeck", "terrasse-carrelage": "Grad",
  "structure-alu": "Grad", schema: "Grad", "structure-trad": null, "lame-trad": null, // schéma créé par Antoine : pas de crédit
  "teinte-alu": "Aludeck", "structure-lame-alu": "Aludeck", "teinte-composite": "Grad", ambiance: "Grad", pilotis: "Grad", "pilotis-hero": "Grad", restaurant: "Grad", accueil: "Grad",
  portrait: null, // photo d'Antoine : pas de crédit fournisseur
};
// Une photo peut porter son propre crédit (champ « credit » du manifeste), qui remplace celui de sa catégorie.
const creditDe = (p) => p.credit ?? CREDITS[p.categorie];
for (const p of PHOTOS) {
  if (!p.credit && !(p.categorie in CREDITS)) throw new Error(`Crédit photo manquant pour la catégorie « ${p.categorie} » (${p.cle}) : compléter CREDITS dans src/galerie.mjs`);
}
// Le crédit est porté par l'attribut data-credit ; build.mjs l'affiche en bas de page (une ligne par page).
export const credit = (c) => (c ? ` data-credit="©${c}"` : "");
export const creditPhoto = (cle) => creditDe(photo(cle));

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
  return `<img${classe ? ` class="${classe}"` : ""} src="${base}-${w}.webp" srcset="${p.largeurs.map((l) => `${base}-${l}.webp ${l}w`).join(", ")}" sizes="${sizes}" alt="${esc(p.alt)}" width="${w}" height="${Math.round(w / p.ratio)}"${prioritaire ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${creditDe(p) ? ` data-credit="©${creditDe(p)}"` : ""}>`;
};

// Galerie filtrable par essence pour une catégorie (ex. "terrasse-bois").
export const galerie = (categorie, { titre, intro, legende = "Illustrations", groupe, types, typesDe, ordre, nuances, limite } = {}) => {
  // categorie : nom de catégorie, ou liste de clés de photos (sélection sans filtres).
  const selection = Array.isArray(categorie);
  // groupe : fonction qui donne le libellé de filtre d'une photo (sinon son essence).
  const liste = (selection ? categorie.map(photo) : PHOTOS.filter((p) => p.categorie === categorie)).map((p) => (groupe ? { ...p, essence: groupe(p) } : p));
  if (!liste.length) return "";
  // types : liste ordonnée de filtres ; une photo peut appartenir à plusieurs (champ « types » du manifeste).
  // typesDe : fonction qui donne les filtres d'une photo (sinon son champ « types »).
  if (types) liste.forEach((p, i) => { const t = typesDe ? typesDe(p) : p.types || []; liste[i] = { ...p, types: t, essence: t.join("|") }; });
  const essences = types ? types.filter((t) => liste.some((p) => (p.types || []).includes(t))) : selection && !groupe ? [] : [...new Set(liste.map((p) => p.essence).filter(Boolean))];
  // ordre : clés des photos à afficher en premier (les plus belles), sans changer l'ordre des filtres.
  // Les plus belles photos d'abord (RANG), sauf ordre imposé.
  const rang = ordre ? (p) => { const i = ordre.indexOf(p.cle); return i < 0 ? ordre.length : i; } : (p) => RANG[p.cle] ?? 0.5;
  liste.sort((a, b) => rang(a) - rang(b));
  if (nuances) essences.sort((a, b) => liste.filter((p) => p.essence === b).length - liste.filter((p) => p.essence === a).length);
  // nuances : catégorie d'échantillons (ex. "teinte-alu") affichés en tête de leur filtre, jamais dans « Tout voir ».
  if (nuances) liste.unshift(...PHOTOS.filter((p) => p.categorie === nuances && essences.includes(p.essence)).map((p) => ({ ...p, nuance: true })));
  // limite : nombre de photos montrées dans « Tout voir » ; les autres derrière « Voir plus de photos » (les filtres montrent tout).
  let n = 0;
  liste.forEach((p, i) => { if (!p.nuance && limite && ++n > limite) liste[i] = { ...p, plus: true }; });
  const enPlus = liste.filter((p) => p.plus).length;
  return `
<div class="galerie-bloc${enPlus ? " plein" : ""}" data-galerie>
  ${titre ? `<h2>${titre}</h2>` : ""}${intro ? `<p class="chapo">${intro}</p>` : ""}
  ${essences.length > 1 ? `<div class="filtres" role="group" aria-label="Filtrer les photos">
    <button type="button" class="filtre" aria-pressed="true" data-filtre="tout">Tout voir</button>
    ${essences.map((e) => `<button type="button" class="filtre" aria-pressed="false" data-filtre="${slug(e)}">${e}</button>`).join("")}
  </div>` : ""}
  <div class="mosaique">
    ${liste.map((p) => `<figure${p.nuance ? " data-nuance hidden" : ""}${p.plus ? " data-plus hidden" : ""} data-essence="${(p.essence || "").split("|").map(slug).join(" ")}" style="--r:${p.ratio}" tabindex="0" aria-label="Agrandir : ${esc(p.alt)}">${imgPhoto(p.cle, { sizes: "(max-width:560px) 100vw, (max-width:1060px) 96vw, 660px" })}${p.essence && essences.length > 1 && !types ? `<figcaption>${p.essence}</figcaption>` : ""}</figure>`).join("")}
  </div>
  ${enPlus ? `<button type="button" class="voir-plus" aria-expanded="false" data-plus-txt="Voir plus de photos (${enPlus})" data-moins-txt="Voir moins de photos">Voir plus de photos (${enPlus})</button>` : ""}
  <p class="legende">${legende}.</p>
</div>`;
};

// Script des filtres (une seule fois par page).
export const SCRIPT_GALERIE = `document.querySelectorAll('[data-galerie]').forEach(g=>{const b=g.querySelectorAll('.filtre'),vp=g.querySelector('.voir-plus');let tout=!vp||matchMedia('(max-width:700px)').matches;if(vp&&tout)g.querySelectorAll('figure[data-plus]').forEach(f=>f.hidden=false);if(vp)vp.addEventListener('click',()=>{tout=!tout;g.querySelectorAll('figure[data-plus]').forEach(f=>f.hidden=!tout);vp.textContent=tout?vp.dataset.moinsTxt:vp.dataset.plusTxt;vp.setAttribute('aria-expanded',tout);g.classList.toggle('plein',!tout);if(!tout)g.scrollIntoView({block:'start'})});b.forEach(x=>x.addEventListener('click',()=>{b.forEach(y=>y.setAttribute('aria-pressed',y===x));const f=x.dataset.filtre;if(vp){vp.hidden=f!=='tout';g.classList.toggle('plein',f==='tout'&&!tout)}g.querySelectorAll('figure').forEach(fig=>fig.hidden=!(f==='tout'?!('nuance' in fig.dataset)&&(tout||!('plus' in fig.dataset)):fig.dataset.essence.split(' ').includes(f)))}))});
(()=>{let d,im,cp,nb,liste=[],i=0;const ouvre=(g,fig)=>{if(!d){d=document.createElement('dialog');d.className='visionneuse';d.setAttribute('aria-label','Photo agrandie');d.innerHTML='<img alt=""><p class="v-legende"></p><span class="v-compte"></span><button class="v-fermer" aria-label="Fermer">×</button><button class="v-prec" aria-label="Photo précédente">‹</button><button class="v-suiv" aria-label="Photo suivante">›</button>';document.body.append(d);im=d.querySelector('img');cp=d.querySelector('.v-legende');nb=d.querySelector('.v-compte');d.querySelector('.v-fermer').onclick=()=>d.close();d.querySelector('.v-prec').onclick=()=>va(-1);d.querySelector('.v-suiv').onclick=()=>va(1);d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')va(-1);if(e.key==='ArrowRight')va(1)});let x0=null;d.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});d.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)va(dx<0?1:-1);x0=null});d.addEventListener('close',()=>document.body.style.overflow='')}liste=[...g.querySelectorAll('.mosaique figure:not([hidden]),.nuancier figure')];i=liste.indexOf(fig);montre();d.showModal();document.body.style.overflow='hidden'};const montre=()=>{const s=liste[i].querySelector('img');im.removeAttribute('src');im.srcset=s.srcset;im.sizes='100vw';im.src=s.src;im.alt=s.alt;const c=liste[i].querySelector('figcaption');cp.textContent=c?c.textContent:'';if(s.dataset.credit){const k=document.createElement('small');k.className='v-credit';k.textContent=s.dataset.credit;cp.append(k)};nb.textContent=(i+1)+' / '+liste.length};const va=n=>{i=(i+n+liste.length)%liste.length;montre()};document.querySelectorAll('[data-galerie]').forEach(g=>g.querySelectorAll('.mosaique figure,.nuancier figure').forEach(f=>{f.addEventListener('click',()=>ouvre(g,f));f.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();ouvre(g,f)}})}))})();`;

// Photo d'en-tête : sur mobile (cadre presque carré), une version recadrée en portrait, légère et nette.
// Les recadrages sont produits par outils/recadrages.py d'après RECADRAGES (écrit par build.mjs).
export const RECADRAGES = new Map();
const LARGEURS_PORTRAIT = [400, 600, 800, 1000, 1200, 1400];
export const imgHero = (cle, position = "50% 50%", sizes = "100vw") => {
  const p = photo(cle);
  RECADRAGES.set(cle, { dossier: p.dossier, position });
  const base = `/assets/img/${p.dossier}/${cle}-p`;
  const dispo = LARGEURS_PORTRAIT.filter((w) => existsSync(new URL(`../public${base}-${w}.webp`, import.meta.url)));
  const img = imgPhoto(cle, { sizes, prioritaire: true, classe: "h-img" }).replace("<img ", `<img style="object-position:${position}" `);
  if (!dispo.length) return img;
  return `<picture class="h-pic"><source media="(max-width:700px)" srcset="${dispo.map((w) => `${base}-${w}.webp ${w}w`).join(", ")}" sizes="100vw">${img}</picture>`;
};
