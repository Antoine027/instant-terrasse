// Allège la feuille de style de chaque page : ne garde que les règles dont les classes et id
// apparaissent dans le HTML de la page (scripts en ligne compris). Sans dépendance.
const blocs = (css) => {
  // découpe en blocs de premier niveau : { prelude, corps } ou { brut } pour les @règles sans accolades
  const out = []; let i = 0;
  while (i < css.length) {
    const ouv = css.indexOf("{", i), pv = css.indexOf(";", i);
    if (ouv < 0) break;
    if (pv >= 0 && pv < ouv && css.slice(i, pv).trim().startsWith("@")) { out.push({ brut: css.slice(i, pv + 1) }); i = pv + 1; continue; }
    let prof = 1, j = ouv + 1;
    while (j < css.length && prof) { if (css[j] === "{") prof++; else if (css[j] === "}") prof--; j++; }
    out.push({ prelude: css.slice(i, ouv).trim(), corps: css.slice(ouv + 1, j - 1) });
    i = j;
  }
  return out;
};
const separer = (sel) => { const r = []; let p = 0, d = 0; for (let k = 0; k < sel.length; k++) { const c = sel[k]; if (c === "(" || c === "[") d++; else if (c === ")" || c === "]") d--; else if (c === "," && !d) { r.push(sel.slice(p, k)); p = k + 1; } } r.push(sel.slice(p)); return r.map((s) => s.trim()).filter(Boolean); };
const utile = (sel, mots) => {
  const s = sel.replace(/\[[^\]]*\]/g, "").replace(/:not\([^)]*\)/g, "");
  return [...s.matchAll(/[.#]([A-Za-z_-][\w-]*)/g)].every((m) => mots.has(m[1]));
};
const purger = (css, mots) => blocs(css).map((b) => {
  if (b.brut) return b.brut;
  if (b.prelude.startsWith("@media") || b.prelude.startsWith("@supports")) { const c = purger(b.corps, mots); return c.trim() ? `${b.prelude}{${c}}` : ""; }
  if (b.prelude.startsWith("@")) return `${b.prelude}{${b.corps}}`;
  const garde = separer(b.prelude.replace(/\/\*[\s\S]*?\*\//g, "")).filter((s) => utile(s, mots));
  return garde.length ? `${garde.join(",")}{${b.corps.trim()}}` : "";
}).join("");
export const cssPourPage = (css, html) => {
  const mots = new Set(html.match(/[A-Za-z_][\w-]*/g));
  return purger(css.replace(/\/\*[\s\S]*?\*\//g, ""), mots).replace(/\s*\n\s*/g, "");
};
