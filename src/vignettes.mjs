// Vignettes photo des cartes de liens. Une page sans photo affiche une vignette unie avec une icône,
// remplacée automatiquement dès qu'une clé de photo est ajoutée ici.
import { imgPhoto } from "./galerie.mjs";

export const VIGNETTES = {
  "/terrasse-bois-lyon/": "terrasse-kebony-piscine-debordement",
  "/terrasse-composite-lyon/": "composite-gris-piscine",
  "/terrasse-carrelage-lyon/": null,
  "/terrasse-aluminium-lyon/": "alu-piscine-aspect-teck",
  "/structure-terrasse-lyon/": "structure-plot-rail-lame",
  "/nos-terrasses/": "terrasse-accoya-gris-piscine",
  "/terrasse-piscine-lyon/": "terrasse-bambou-ndurance-piscine-pierre",
  "/terrasse-balcon-lyon/": "gc-maison-verre-depoli",
  "/toit-terrasse-lyon/": "terrasse-bambou-xtreme-toit",
  "/terrasse-sur-pilotis-lyon/": "gc-maison-pilotis-lames",
  "/terrasse-sur-plots-lyon/": null,
  "/terrasse-restaurant-chr-lyon/": "terrasse-kebony-restaurant",
  "/terrasse-camping-hpa/": null,
  "/pergola-bioclimatique-lyon/": "pergola-bioclimatique-autoportee",
  "/pergola-toile-retractable-lyon/": "pergola-toile-retractable-facade",
  "/pergola-toile-tendue-lyon/": null,
  "/pergola-toit-fixe-lyon/": "pergola-toit-fixe-piscine",
  "/carport-lyon/": "carport-garage-gravier",
  "/garde-corps-aluminium-lyon/": "gc-maison-terrasse-vue",
  "/store-banne-lyon/": "store-banne-beige-maison",
  "/bardage-bois-lyon/": "bardage-thermofrene-maison",
  "/bardage-aluminium-lyon/": "bardage-alu-horizontal-gris",
  // cartes « univers » de l'accueil
  "#terrasses": "terrasse-thermofrene-bord-de-loire",
  "#pergolas": "pergola-bioclimatique-salon-piscine",
  "#bardage": "bardage-thermofrene-maison",
};

const svg = (d) => `<svg aria-hidden="true" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONES = {
  terrasse: svg('<path d="M3 15h18M3 18h18M3 21h18"/><path d="M6 15V9M18 15V9"/><path d="M4 9h16"/>'),
  pergola: svg('<path d="M3 6h18"/><path d="M5 6v15M19 6v15"/><path d="M7 9h10M7 12h10"/>'),
  carport: svg('<path d="M2 8l10-4 10 4"/><path d="M4 8v13M20 8v13"/><path d="M7 17h10l-1-4H8l-1 4z"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>'),
  store: svg('<path d="M3 5h18"/><path d="M4 5l-1 7h18l-1-7"/><path d="M3 12c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/>'),
  bardage: svg('<path d="M5 3v18M9 3v18M13 3v18M17 3v18M21 3v18"/>'),
};
const icone = (chemin) =>
  /carport/.test(chemin) ? ICONES.carport : /pergola/.test(chemin) ? ICONES.pergola : /store/.test(chemin) ? ICONES.store : /bardage/.test(chemin) ? ICONES.bardage : ICONES.terrasse;

export const vignette = (chemin) => {
  const cle = VIGNETTES[chemin];
  return cle
    ? `<div class="vignette">${imgPhoto(cle, { sizes: "(max-width:560px) 92vw, (max-width:1060px) 45vw, 290px" })}</div>`
    : `<div class="vignette vignette-vide">${icone(chemin)}</div>`;
};

// Carte de lien avec vignette : chemin de la page, titre, texte (et clé de vignette facultative).
export const carteProduit = (chemin, titre, texte, cleVignette = chemin) =>
  `<a class="carte carte-lien carte-photo" href="${chemin}">${vignette(cleVignette)}<div class="carte-corps"><h3>${titre}</h3><p>${texte}</p><span class="fleche" aria-hidden="true">→</span></div></a>`;
