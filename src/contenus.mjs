// Contenus rédigés des pages. Une page présente ici remplace sa version « en préparation ».
// Règles : pas de chiffre, garantie, certification ou chantier inventé ; pas de nom de fournisseur.
import { SITE, POSE, TRIO, BADGE_AVIS, blocRappel } from "./pages.mjs";
import { galerie, imgPhoto, imgHero, PHOTOS, credit } from "./galerie.mjs";
import { carteProduit } from "./vignettes.mjs";
import { RANG } from "./ordre-photos.mjs";

const img = (nom, alt, ratio) =>
  `<img src="/assets/img/bois/${nom}-400.webp" srcset="/assets/img/bois/${nom}-400.webp 400w, /assets/img/bois/${nom}-800.webp 800w" sizes="(max-width:700px) 82vw, 460px" alt="${alt}" width="400" height="${ratio}" loading="lazy" decoding="async"${credit("Grad")}>`;

// Évolution de la teinte (photos fabricant ©Grad) : curseur à la pose → patine.
const evolution = (nom, cle, etapes) => `<div class="evol-ligne" role="group" aria-label="Évolution de la teinte"><div class="evol-pastilles">${etapes.map((t, i) => `<figure><img src="/assets/img/bois/evol-${cle}-${i}-v3-200.webp" srcset="/assets/img/bois/evol-${cle}-${i}-v3-200.webp 200w, /assets/img/bois/evol-${cle}-${i}-v3-400.webp 400w" sizes="(max-width:700px) 30vw, 110px" alt="${nom} : ${t.toLowerCase()}" width="200" height="400" loading="lazy" decoding="async"${credit("Grad")}><figcaption>${t}</figcaption></figure>`).join("")}</div></div>`;

// Bandeau photo plein écran (même style que l'accueil)
const heroPlein = ({ fil, h1, kicker, chapo, photo, position = "65% 50%", actions }) => `
<section class="hero-plein hero-produit">
  ${imgHero(photo, position)}
  <div class="conteneur h-txt">
    <p class="fil"><a href="/">Accueil</a> › ${fil}</p>
    <p class="kicker">${kicker}</p>
    <h1><span class="fin">${h1[0]}</span> <span class="fort">${h1[1]}</span></h1>
    <p class="chapo">${chapo}</p>
    <p class="actions">${actions ?? `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#galerie">Voir les photos</a>`}</p>
    <p class="hero-avis hero-avis-mobile">${BADGE_AVIS}</p>
    ${TRIO}
  </div>
</section>`;

// Bas de page produit : formulaire de rappel court (projet pré-coché selon la page).
const cta = (titre = "Un projet de terrasse en bois ?", texte = "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.") =>
  blocRappel(titre, texte.replace(/^Devis gratuit et sans engagement\. /, "Laissez votre numéro, nous vous rappelons. "), true);

// ---------- Terrasse bois ----------
// Point commençant par « ~ » : affiché sur ordinateur seulement.
const essencesAlu = [
  {
    nom: "Thermofrêne", evol: ["thermofrene", ["À la pose", "6 mois", "1 an"]], photo: ["thermofrene", "Lame de terrasse en thermofrêne, teinte brun chaud au veinage marqué", 358],
    texte: "Le frêne, bois dur européen, chauffé à cœur à 215 °C sans produit chimique. Il prend une belle teinte brun chaud et garde un veinage très marqué, proche des bois exotiques.",
    points: ["Bois thermo-traité", "Veinage prononcé", "Garantie 20 ans*"],
  },
  {
    nom: "Kebony", evol: ["kebony", ["À la pose", "6 mois", "1 an"]], photo: ["kebony", "Lame de terrasse en Kebony, teinte brune", 402],
    texte: "Du pin radiata certifié FSC, modifié par furfurylation : un procédé d'origine végétale qui renforce ses fibres. Brun profond à la pose, il évolue vers un gris argenté homogène.",
    points: ["Traitement par injection d'origine végétale", "Patine gris argenté", "Garantie 30 ans*"],
  },
  {
    nom: "Thermopin", evol: ["thermopin", ["À la pose", "6 mois", "1 an"]], photo: ["thermopin", "Lame de terrasse en thermopin, teinte miel avec nœuds apparents", 378],
    texte: "Un pin européen chauffé à 215 °C, sans produit chimique, pour le rendre plus stable et plus résistant. Teinte miel à la pose, nœuds apparents : le bois au naturel.",
    points: ["Bois thermo-traité", "Aspect bois naturel", "Garantie 15 ans*"],
  },
  {
    nom: "Accoya naturel", evol: ["accoya-naturel", ["À la pose", "6 mois", "2 ans"]], photo: ["accoya-naturel-lame-3", "Lame de terrasse en accoya naturel, teinte claire", 266],
    texte: "Du pin radiata certifié FSC, acétylé à cœur : il bouge très peu avec l'humidité, ce qui limite les déformations. Teinte claire à la pose, qui grise naturellement avec le temps.",
    points: ["Bois acétylé", "Très grande stabilité", "Garantie jusqu'à 50 ans*"],
  },
  {
    nom: "Bambou X-treme", evol: ["bambou-xtreme", ["À la pose", "6 mois", "2 ans"]], photo: ["bambou-xtreme-lame-2", "Lame de terrasse en bambou X-treme brun foncé", 338],
    texte: "Des fibres de bambou compressées et thermo-traitées pour en faire des lames très dures. Brun foncé, à la surface finement texturée. Le bambou repousse en quelques années.",
    points: ["Bambou compressé et thermo-traité", "Très dur et dense", "Garantie 25 ans*"],
  },
  {
    nom: "Bambou N-Durance", evol: ["bambou-ndurance", ["À la pose", "3 ans"]], photo: ["bambou-ndurance-lame-2", "Lame de terrasse en bambou N-Durance brun-rouge", 267],
    texte: "Le même bambou compressé, en teinte brun-rouge à l'allure d'un bois exotique. Une alternative aux bois tropicaux, issue d'une ressource qui repousse en quelques années.",
    points: ["Bambou compressé et thermo-traité", "Très dur et dense", "Garantie 25 ans*"],
  },
  {
    nom: "Accoya gris", evol: ["accoya-gris", ["À la pose", "3 ans"]], photo: ["accoya-gris-lame-3", "Lame de terrasse en accoya gris", 325],
    texte: "Le même pin radiata acétylé, teinté gris dans la masse : la terrasse a son aspect patiné dès la pose, sans attendre que le bois grise, et le garde en vieillissant.",
    points: ["Bois acétylé", "Très grande stabilité", "Garantie jusqu'à 50 ans*"],
  },
];

// Ordre : du plus recherché au moins recherché (Google Trends, France, 5 ans, « terrasse <essence> », relevé le 05/11/2026).
const essencesTrad = [
  ["Pin", "Résineux traité, économique, pour les projets simples."],
  ["Ipé", "Bois exotique très dense, brun foncé, d'une grande longévité."],
  ["Douglas", "Résineux à la teinte rosée, naturellement plus durable que le pin."],
  ["Cumaru", "Bois exotique dur, brun-jaune à brun-rouge, alternative à l'ipé."],
  ["Mélèze", "Résineux dense et chaleureux, apprécié pour sa tenue en extérieur."],
  ["Garapa", "Bois exotique clair, jaune doré, pour une terrasse lumineuse."],
  ["Itauba", "Bois exotique très stable, brun-jaune à brun olive, au toucher naturellement gras."],
  ["Jatoba", "Bois exotique dur aux reflets brun-rouge."],
  ["Muiracatiara (tigerwood)", "Bois exotique dur, veiné de brun foncé sur fond doré : un aspect tigré très décoratif."],
];

// « Découvrez aussi » : liens internes entre les pages de revêtement, en bas de page.
const REVETEMENTS = [
  ["/terrasse-bois-lyon/", "Terrasse bois", "terrasse-kebony-piscine-debordement", "Accoya, kebony, bambou : la chaleur du vrai bois."],
  ["/terrasse-composite-lyon/", "Terrasse composite", "composite-gris-piscine", "L'aspect du bois, sans saturateur ni ponçage."],
  ["/terrasse-aluminium-lyon/", "Terrasse aluminium", "alu-piscine-aspect-teck", "Ne pourrit pas, ne bouge pas, en 6 teintes."],
  ["/terrasse-carrelage-lyon/", "Terrasse carrelage", "carrelage-bh-aspect-bois-gris-jardin", "Grès cérame posé sans colle, sur plots."],
];
const decouvrir = (ici) => `
<section class="bloc decouvrir">
  <div class="conteneur">
    <h2>Découvrez aussi nos autres terrasses</h2>
    <div class="grille grille-3 decouvrir-grille">${REVETEMENTS.filter(([c]) => c !== ici).map(([c, t, ph, x]) => `<a class="carte carte-lien carte-photo" href="${c}"><div class="vignette">${imgPhoto(ph, { sizes: "(max-width:700px) 40vw, (max-width:1060px) 31vw, 360px" })}</div><div class="carte-corps"><h3>${t}</h3><p>${x}</p><span class="fleche" aria-hidden="true">→</span></div></a>`).join("")}</div>
    <p class="decouvrir-comp"><a href="/nos-terrasses/">Comparer tous les matériaux <span aria-hidden="true">→</span></a></p>
  </div>
</section>`;

const terrasseBois = {
  title: "Terrasse bois sur mesure à Lyon | Instant Terrasse",
  description: "Terrasse bois à Lyon : thermopin, thermofrêne, kebony, accoya, bambou sur structure aluminium, ou ipé, mélèze, douglas sur structure traditionnelle.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Terrasse bois", 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses bois à Lyon et dans sa région", photo: "terrasse-kebony-piscine-debordement", position: "60% 55%",
  chapo: `<span class="en-long">Nos essences phares sur structure aluminium, et d'autres essences sur structure traditionnelle.</span><span class="en-court">Thermofrêne, kebony, accoya, ipé… Nous vous aidons à choisir le bois fait pour votre extérieur.</span>`,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#essences-aluminium">Voir les essences</a>` })}

<section id="essences-aluminium" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Sur structure aluminium</p>
    <h2>Nos essences phares</h2>
    <p class="chapo">Des bois traités pour gagner en stabilité et en durabilité, posés sur une ossature qui ne pourrit pas.</p>
    <div class="grille grille-essences">
      ${essencesAlu.map((e) => `
      <article class="essence">
        <div class="essence-photo${e.photos ? " essence-photo-duo" : ""}">${e.photos ? e.photos.map(([n, a, r, l]) => `<figure>${img(n, a, r)}<figcaption>${l}</figcaption></figure>`).join("") : img(...e.photo)}</div>
        <div class="essence-texte">
          <h3>${e.nom}</h3>
          <p>${e.texte}</p>
          <ul class="puces">${e.points.map((p) => (p.startsWith("~") ? `<li class="pc-seul">${p.slice(1)}</li>` : `<li>${p}</li>`)).join("")}</ul>
        </div>
        ${e.evol ? evolution(e.nom, ...e.evol) : ""}
      </article>`).join("")}
    </div>
    <p class="evol-note"><span class="en-long">Teintes indicatives : le rendu dépend de l'exposition. Un saturateur prolonge la teinte d'origine. *Garanties fabricants, sous conditions.</span><span class="en-court">Teintes indicatives. Un saturateur prolonge la teinte d'origine.<br>*Garanties fabricants, sous conditions.</span></p>
    <div class="structure-bandeau"><a class="carte carte-structure" href="/structure-terrasse-lyon/#comparatif-bois"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur structure aluminium</h3><p><span class="cs-long">Nos essences phares sont posées sur plots réglables, rails aluminium et fixations invisibles. Rien ne pourrit sous les lames, l'air circule, la terrasse reste plane. Structure garantie 20 ans.</span><span class="cs-court">Rails alu et fixations invisibles. Structure garantie 20 ans.</span><span class="cs-lien">Comparer les deux structures&nbsp;→</span></p></div><span class="cs-img">${img("structure-aluminium", "Structure aluminium : plot réglable, rail aluminium et clip sous une lame de terrasse", 404)}</span></a></div>
</div>
</section>

<section id="galerie" class="bloc bloc-alt galerie-bois">
  <div class="conteneur">
    ${galerie("terrasse-bois", { titre: "Nos bois en situation", intro: "Choisissez une essence pour voir son rendu en terrasse.", legende: "Illustrations de terrasses dans nos essences", limite: 11 })}
  </div>
</section>

<section id="essences-traditionnelles" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Sur structure traditionnelle</p>
    <h2>D'autres essences</h2>
    <p class="chapo">Les grands classiques de la terrasse en bois, posés sur lambourdes. Selon disponibilité : nous vous confirmons les essences et les sections en stock au moment du devis.</p>
    <div class="grille grille-3 trad-car">
      ${essencesTrad.map(([n, t]) => { const cle = "lame-trad-v2-" + n.split(" (")[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); const ph = PHOTOS.some((x) => x.cle === cle); return `<div class="carte carte-trad${ph ? " avec-photo" : ""}">${ph ? `<div class="trad-photo">${imgPhoto(cle, { sizes: "(max-width:700px) 80vw, 360px" })}</div>` : ""}<h3>${n}</h3><p>${t}</p></div>`; }).join("")}
    </div>
    <div class="structure-bandeau"><a class="carte carte-structure" href="/structure-terrasse-lyon/#structure-traditionnelle"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur structure traditionnelle</h3><p><span class="cs-long">Ces essences sont posées sur des lambourdes en bois et des plots réglables : la technique classique et éprouvée. Nos essences phares peuvent aussi être posées de cette façon.</span><span class="cs-court">Lambourdes en bois sur plots. Possible aussi pour nos essences phares.</span><span class="cs-lien">Comparer les deux structures&nbsp;→</span></p></div><span class="cs-img"><img src="/assets/img/structures/structure-traditionnelle-carte-300.webp" srcset="/assets/img/structures/structure-traditionnelle-carte-300.webp 300w, /assets/img/structures/structure-traditionnelle-carte-600.webp 600w" sizes="(max-width:700px) 120px, 300px" alt="Structure traditionnelle : plot réglable, lambourde en bois et lame vissée" width="300" height="291" loading="lazy" decoding="async"></span></a></div>
  </div>
</section>

<section id="faq-bois" class="bloc bloc-alt">
  <div class="conteneur lyon-faq">
  <div id="lyon" class="lyon-texte">
    <h2>Votre terrasse bois à Lyon et dans sa région</h2>
    <div class="en-long"><p>Instant Terrasse est basée à Rillieux-la-Pape, au nord de Lyon. Nous venons chez vous, à Lyon et dans sa région, avec les échantillons de bois : vous les comparez à la lumière de votre extérieur, à côté de votre façade, et nous prenons les mesures pour votre plan 3D.</p>
    <p>Étés chauds, hivers humides, orages : une terrasse lyonnaise passe par tous les temps. C'est pour cela que nous sélectionnons des bois très stables, et que nous privilégions une structure aluminium qui laisse l'air circuler sous les lames.</p></div>
    <p class="en-court">Depuis Rillieux-la-Pape, nous venons chez vous, à Lyon et dans sa région, avec les échantillons. Face aux étés chauds et aux hivers humides, nous sélectionnons des bois très stables, posés sur une structure aluminium ventilée.</p>
    <p class="lien-methode"><a href="/#methode">Découvrir notre méthode →</a></p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le bois</h2>
    <details class="faq"><summary>Comment entretenir une terrasse en bois ?</summary><div><p>Nous conseillons un nettoyage au minimum deux fois par an, et plus souvent à l'ombre et sous les arbres, où la saleté s'accumule le plus. Il existe des nettoyeurs spécifiques pour terrasses, bien plus pratiques qu'un balai-brosse. Le nettoyeur haute pression est en revanche fortement déconseillé : il abîme les fibres du bois.</p></div></details>
    <details class="faq"><summary>Un saturateur est-il obligatoire ?</summary><div><p>Pas pour le thermofrêne, le thermopin, le kebony et l'accoya. Il est en revanche conseillé pour le bambou. Dans tous les cas, le saturateur aide le bois à garder une teinte proche de celle d'origine.</p></div></details>
    <details class="faq"><summary>Le bois va-t-il changer de couleur ?</summary><div><p>Oui : au soleil et à la pluie, le bois prend une patine grise. C'est naturel et ce n'est pas un défaut. Les pastilles de chaque essence, plus haut sur cette page, montrent cette évolution. Un saturateur limite ce changement et garde une teinte très proche de celle d'origine.</p></div></details>
    <details class="faq"><summary>Une terrasse en bois est-elle glissante ?</summary><div><p>Le bois offre naturellement une très bonne résistance à la glissance. Mais sur une terrasse mouillée, la fine couche noire de saleté qui se dépose avec le temps (pollution, végétation) peut rendre la surface glissante. D'où l'importance d'un nettoyage régulier.</p></div></details>
    <details class="faq"><summary>Vos bois font-ils des échardes ?</summary><div><p>Non. Avec le temps, des gerces (petites fentes dans le sens du bois) peuvent apparaître, car le bois reste un matériau naturel. Une gerce ne rend pas la lame impropre à l'utilisation. Seul un relevé de fibres impose de changer la lame concernée. C'est pour limiter ces phénomènes que nous sélectionnons des bois très stables.</p></div></details>
  </div>
  </div>
</section>
${cta()}`,
};

// ---------- Tableaux comparatifs ----------
const tableau = (id, titre, intro, colonnes, lignes, verdicts) => `
<section id="${id}" class="bloc comp">
  <div class="conteneur">
    <h2>${titre}</h2>
    <p class="chapo">${intro}</p>
    <div class="tableau-defile">
      <table class="comparatif">
        <thead><tr><th scope="col"><span class="vh">Critère</span></th>${colonnes.map((c, i) => `<th scope="col"${i === 1 ? ' class="col-accent"' : ""}>${c}</th>`).join("")}</tr></thead>
        <tbody>${lignes.map(([crit, a, b]) => `<tr><th scope="row">${crit}</th><td>${a}</td><td class="col-accent">${b}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <div class="grille verdicts">${verdicts.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
    <div class="comp-mobile">
      <p class="comp-aide">Faites glisser pour comparer, critère par critère</p>
      <div class="comp-car">${lignes.map(([crit, a, b], i) => `<div class="comp-carte"><p class="comp-num">${i + 1} / ${lignes.length}</p><h3>${crit}</h3><div class="comp-duo"><div><p class="comp-col">${colonnes[0]}</p><p>${a}</p></div><div class="acc"><p class="comp-col">${colonnes[1]}</p><p>${b}</p></div></div></div>`).join("")}</div>
    </div>
  </div>
</section>`;

// Galerie de la page Structures : photo et filtres auxquels elle appartient.
const GALERIE_STRUCTURES = [
  ["structure-clips-lame-bois", ["Structure pour bois et composite"]],
  ["structure-lames-clipsees-vue-haut", ["Structure pour bois et composite"]],
  ["structure-clips-lame-brune", ["Structure pour bois et composite"]],
  ["structure-plot-rail-lame", ["Structure pour bois et composite"]],
  ["structure-plot-reglable", ["Structure pour bois et composite"]],
  ["structure-rails-vue-ensemble", ["Structure pour bois et composite"]],
  ["structure-rails-plots-detail", ["Structure pour bois et composite"]],
  ["structure-rails-dalle", ["Structure pour bois et composite"]],
  ["structure-lames-a-clipser", ["Structure pour bois et composite"]],
  ["structure-schema-bordure", ["Structure pour bois et composite"]],
  ["structure-traditionnelle-plot-lambourde", ["Structure pour bois et composite"]],
  ["carrelage-structure-aluminium-schema", ["Structure pour carrelage"]],
  ["carrelage-plots-schema", ["Structure pour carrelage"]],
  ["carrelage-structure-alu-rails-plots", ["Structure pour carrelage"]],
  ["carrelage-structure-alu-calepinage", ["Structure pour carrelage"]],
  ["ambiance-dalles-sur-plots", ["Structure pour carrelage"]],
  ["structure-lames-alu-piscine", ["Structure pour lames aluminium"]],
  ["structure-lames-alu-restaurant-chantier", ["Structure pour lames aluminium"]],
  ["structure-lames-alu-pose", ["Structure pour lames aluminium"]],
  ["structure-lames-alu-balcon-dessous", ["Structure pour lames aluminium"]],
  ["structure-lames-alu-assemblage", ["Structure pour lames aluminium"]],
  ["structure-lames-alu-equerre", ["Structure pour lames aluminium"]],
];

// « Tout voir » : structures bois et composite d'abord, puis carrelage, puis lames aluminium ; les plus belles en tête de chaque groupe.
const GROUPES_STRUCTURES = ["Structure pour bois et composite", "Structure pour carrelage", "Structure pour lames aluminium"];
// Ordre (Antoine, 11/11/2026) : les plus belles structures aluminium d'abord, structure traditionnelle et plots simples à la fin.
const ORDRE_STRUCTURES = ["structure-clips-lame-bois", "structure-lames-a-clipser", "structure-schema-bordure", "structure-plot-rail-lame", "carrelage-structure-alu-rails-plots", "structure-clips-lame-brune", "structure-lames-alu-balcon-dessous", "structure-rails-plots-detail", "structure-lames-alu-pose", "structure-rails-vue-ensemble", "structure-lames-clipsees-vue-haut", "carrelage-structure-aluminium-schema", "structure-plot-reglable", "structure-lames-alu-piscine", "structure-rails-dalle", "carrelage-structure-alu-calepinage", "structure-lames-alu-restaurant-chantier", "structure-lames-alu-assemblage", "structure-lames-alu-equerre", "structure-traditionnelle-plot-lambourde", "carrelage-plots-schema", "ambiance-dalles-sur-plots"];


// ---------- Nos structures ----------
// Comparatif replié : tableau sur ordinateur, liste critère par critère sur téléphone (fermé par défaut).
const comparatifPlie = (id, titre, colonnes, lignes, courts = ["Alu", "Trad."]) => `
    <details class="comp-plie" id="${id}">
      <summary><h3>${titre}</h3><span class="comp-ouvrir">Voir le comparatif</span><span class="comp-fermer">Masquer le comparatif</span></summary>
      <table class="comparatif comp-table">
        <thead><tr><th scope="col"><span class="vh">Critère</span></th><th scope="col" class="col-accent">${colonnes[0]}</th><th scope="col">${colonnes[1]}</th></tr></thead>
        <tbody>${lignes.map(([c, alu, autre]) => `<tr><th scope="row">${c}</th><td class="col-accent">${alu}</td><td>${autre}</td></tr>`).join("")}</tbody>
      </table>
      <dl class="comp-liste">${lignes.map(([c, alu, autre]) => `<div><dt>${c}</dt><dd><span class="comp-tag comp-tag-alu">${courts[0]}</span>${alu}</dd><dd><span class="comp-tag">${courts[1]}</span>${autre}</dd></div>`).join("")}</dl>
    </details>`;
const LIGNES_BOIS = [
  ["Ossature", "Rails aluminium sur plots réglables", "Lambourdes bois sur plots réglables"],
  ["Humidité", "Ne pourrit pas", "Lambourdes sensibles à l'eau stagnante"],
  ["Stabilité", "Rails rectilignes : la terrasse reste plane", "Le bois de l'ossature peut travailler"],
  ["Fixation", "Clips invisibles, aucune vis apparente", "Lames vissées"],
  ["Ventilation", "6&nbsp;mm entre lames et rails", "Selon la hauteur disponible"],
  ["Essences", "Essences compatibles uniquement", "Toutes les essences"],
  ["Garantie", "20 ans (plots, rails et clips)", "Pas de garantie"],
];
const LIGNES_CARR = [
  ["Principe", "Dalles sur rails aluminium posés sur plots", "Chaque dalle sur des plots à ses angles"],
  ["Support", "Sols durs ou stabilisés, supports irréguliers, grandes hauteurs", "Support stable existant : dalle béton, toit-terrasse"],
  ["Sous le pied", "Cales amortissantes : rien ne bouge ni ne claque", "Une dalle peut bouger si un plot travaille"],
  ["Formats", "Grands formats, joints décalés, bois et carrelage mélangés", "Formats courants, joints alignés"],
  ["Garantie", "20 ans (plots, rails et clips)", "Pas de garantie"],
];
const REVETEMENTS_STRUCT = [
  ["/terrasse-bois-lyon/", "Bois", "structure-clips-lame-bois"],
  ["/terrasse-composite-lyon/", "Composite", "structure-clips-lame-brune"],
  ["/terrasse-aluminium-lyon/", "Lames aluminium", "structure-lames-alu-pose"],
  ["/terrasse-carrelage-lyon/", "Carrelage", "carrelage-structure-alu-rails-plots"],
];

const structures = {
  title: "Structure de terrasse aluminium | Instant Terrasse",
  description: "Nos terrasses se posent sur structure aluminium garantie 20 ans : bois, composite, lames alu, carrelage. Structure traditionnelle ou plots possibles.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Structure aluminium</span>', "pour toutes nos terrasses"], kicker: "Structures de terrasse à Lyon et dans sa région", photo: "structure-rails-plots-entete", position: "50% 50%",
  chapo: "Bois, composite, lames aluminium ou carrelage : tout se pose sur notre structure aluminium, garantie 20 ans.",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#comparatif">Comparer</a>` })}

<section id="structure-aluminium" class="bloc">
  <div class="conteneur">
    <div class="deux-colonnes deux-colonnes-image">
      <div class="photo-produit">${img("structure-aluminium", "Système de structure aluminium : plot réglable, rail aluminium, clip et pattes de fixation sous une lame de terrasse", 404)}</div>
      <div>
        <p class="sous-titre">Notre solution</p>
        <h2>Notre structure aluminium</h2>
        <p>Des plots réglables posés sur le support, des rails en aluminium, et le revêtement fixé dessus. Rien ne pourrit sous la terrasse, et elle reste plane dans le temps.</p>
        <ul class="puces">
          <li><strong>Garantie 20 ans</strong> (plots, rails et clips).</li>
          <li><strong>Ne pourrit pas,</strong> grâce à l'aluminium.</li>
          <li><strong>Ventilation optimale :</strong> 6&nbsp;mm entre lames et rails.</li>
          <li><strong>Fixation invisible :</strong> aucune vis apparente.</li>
          <li><strong>Conforme au DTU 51-4,</strong> testée par le FCBA.</li>
          <li><strong>Fabriquée en France.</strong></li>
        </ul>
      </div>
    </div>
    <h3 class="struct-rev-titre">Pour tous nos revêtements</h3>
    <div class="struct-rev">${REVETEMENTS_STRUCT.map(([h, n, c]) => `<a href="${h}" class="struct-rev-item">${imgPhoto(c, { sizes: "(max-width:700px) 45vw, 270px" })}<span>${n}&nbsp;→</span></a>`).join("")}</div>
  </div>
</section>

<section id="autres-poses" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les autres possibilités</h2>
    <p class="chapo">Pour le bois et le carrelage, une autre technique est possible selon votre projet.</p>
    <div class="grille grille-2 autres-poses">
      <article class="carte autre-pose" id="structure-traditionnelle">
        <div class="ap-img">${imgPhoto("structure-traditionnelle-plot-lambourde", { sizes: "(max-width:700px) 40vw, 200px" })}</div>
        <div><p class="sous-titre">Terrasse bois</p><h3>Structure traditionnelle</h3><p>Des lambourdes en bois sur plots réglables, et des lames vissées : la technique classique.</p><p class="ap-si"><strong>La choisir si…</strong> vous voulez une essence comme l'ipé, le cumaru ou le mélèze, avec un budget maîtrisé.</p></div>
      </article>
      <article class="carte autre-pose" id="carrelage-plots">
        <div class="ap-img">${imgPhoto("carrelage-plots-schema", { sizes: "(max-width:700px) 40vw, 240px" })}</div>
        <div><p class="sous-titre">Terrasse carrelage</p><h3>Carrelage sur plots</h3><p>Chaque dalle repose directement sur des plots réglables placés à ses angles, sans rail.</p><p class="ap-si"><strong>La choisir si…</strong> vous avez déjà une dalle béton ou un toit-terrasse en bon état.</p></div>
      </article>
    </div>
  </div>
</section>

<section id="comparatif" class="bloc">
  <div class="conteneur">
    <h2>Comparatif détaillé</h2>
    ${comparatifPlie("comparatif-bois", "Terrasse bois", ["Structure aluminium", "Structure traditionnelle"], LIGNES_BOIS)}
    ${comparatifPlie("comparatif-carrelage", "Terrasse carrelage", ["Structure aluminium", "Plots simples"], LIGNES_CARR, ["Alu", "Plots"])}
    <script>const ouvreComp=()=>{const d=location.hash&&document.querySelector('.comp-plie'+location.hash);if(d)d.open=true};ouvreComp();addEventListener('hashchange',ouvreComp)</script>
  </div>
</section>

<section id="terrains" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Quelle structure pour votre terrain&nbsp;?</h2>
    <p class="chapo">Nous vérifions votre support dès le rendez-vous.</p>
    <ul class="terrains-liste">
      <li><strong>Sol dur</strong><span>Dalle béton, ancienne terrasse : la structure se pose directement, sur cales, ou sur plots pour rattraper une hauteur.</span></li>
      <li><strong>Sol stabilisé</strong><span>Sur concassé : les plots réglables reprennent les écarts, sans couler de béton.</span></li>
      <li><strong>Toit-terrasse</strong><span>La structure repose sur l'étanchéité sans la percer. Voir le <a href="/toit-terrasse-lyon/">toit-terrasse</a>.</span></li>
      <li><strong>Terrasse surélevée</strong><span>Avec des réhausses, les plots montent jusqu'à environ 40&nbsp;cm. Au-delà, poutres et poteaux. C'est la <a href="/terrasse-sur-pilotis-lyon/">terrasse sur pilotis</a>.</span></li>
      <li><strong>Terrain en pente</strong><span>Les plots permettent de régler la hauteur de la terrasse et de s'adapter au terrain en pente et aux différences de niveau.</span></li>
    </ul>
  </div>
</section>

<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie(GALERIE_STRUCTURES.map(([cle]) => cle), { titre: "Nos structures en images", intro: "Choisissez un type de structure pour n'afficher que celui qui vous intéresse.", legende: "Illustrations", types: ["Structure pour bois et composite", "Structure pour carrelage", "Structure pour lames aluminium"], typesDe: (p) => GALERIE_STRUCTURES.find(([c]) => c === p.cle)[1], ordre: ORDRE_STRUCTURES })}
  </div>
</section>
${cta("Un projet de terrasse ?")}`,
};

// ---------- Bardage bois ----------
// ---------- Gabarit de page produit (pergolas, etc.) ----------
const pageProduit = ({ typesGalerie, nuancesGalerie, limiteGalerie, extra = "", introGalerie = "", fil, h1, kicker, position, chapo, photo, atouts, galerieCat, titreGalerie, details, voisins, ctaTitre, complement = "Une pergola se pense avec la terrasse qu'elle couvre : hauteurs, fixations, écoulement des eaux. Nous pouvons étudier les deux ensemble.", titreVoisins = "Les autres solutions" }) => `
${heroPlein({ fil, h1, kicker, chapo, photo, position })}

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les points forts</h2>
    <div class="grille grille-3">${atouts.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>
${extra}
${galerieCat ? `<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie(galerieCat, { titre: titreGalerie, intro: introGalerie, legende: "Illustrations", types: typesGalerie, nuances: nuancesGalerie, limite: limiteGalerie })}
  </div>
</section>` : ""}

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>${details}</div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>${complement}</p>
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur">
    <h2>${titreVoisins}</h2>
    <div class="grille grille-3">${voisins.map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div>
  </div>
</section>
${cta(ctaTitre, "Devis gratuit et sans engagement. Nous venons sur place pour prendre les mesures et vous conseiller la solution la plus adaptée.")}`;

const PERGOLAS = [
  ["/pergolas-lyon/", "Comparer les pergolas", "Bioclimatique, toile ou toit fixe : laquelle choisir ?"],
  ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Lames orientables : soleil, ombre ou pluie, vous choisissez."],
  ["/pergola-toile-retractable-lyon/", "Pergola à toile rétractable", "Une toile qui se déploie et se replie à la demande."],
  ["/pergola-toile-tendue-lyon/", "Pergola à toile tendue", "Une ombre légère et un style contemporain."],
  ["/pergola-toit-fixe-lyon/", "Pergola à toit fixe", "Un abri permanent, à l'épreuve de la pluie."],
  ["/carport-lyon/", "Carport", "Un abri voiture élégant, sans construire de garage."],
];
const autresPergolas = (moi) => PERGOLAS.filter(([c]) => c !== moi);


// ---------- Garde-corps aluminium ----------
// ---------- Terrasse en lames aluminium ----------
// Galerie Lames aluminium : 12 premières photos de « Tout voir » = les plus belles, teintes mélangées, disposition proche de la galerie Bois (demande d'Antoine, 05/11/2026).
const ORDRE_GALERIE_ALU = ["alu-piscine-carbet", "alu-pontons-lac", "alu-restaurant-vue-mer", "alu-piscine-haricot", "alu-piscine-cour", "alu-restaurant-canal-vignes", "alu-piscine-blanche-vue", "alu-piscine-debordement-baie", "alu-piscine-debordement-mer", "alu-piscine-jardin-tropical", "alu-piscine-grise", "alu-terrasse-banc-courbe"];

// Ordre du nuancier de la page Lames aluminium (demande d'Antoine, 05/11/2026).
const ORDRE_TEINTES_ALU = ["Simili bois", "Teck", "Teck vieilli", "Bois de grange", "Blanc veiné", "Gris uni"];

// Types de projets mis en avant sur la page Lames aluminium : lien, titre, texte, photo.
const PROJETS_ALU = [
  ["/terrasse-piscine-lyon/", "Plage de piscine", "Une surface saine au contact de l'eau.", "alu-piscine-debordement-baie"],
  ["/terrasse-balcon-lyon/", "Balcon", "Un sol neuf, stable et sans entretien.", "alu-salon-garde-corps"],
  ["/toit-terrasse-lyon/", "Toit-terrasse", "Une terrasse plane sur une toiture.", "alu-piscine-toit-terrasse"],
  ["/terrasse-restaurant-chr-lyon/", "Restaurant", "Une terrasse robuste pour l'accueil du public.", "alu-restaurant-vue-mer"],
  ["/terrasse-camping-hpa/", "Camping", "Decks et pontons qui ne craignent pas l'eau.", "alu-pontons-lac"],
  ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "Légère et étanche : idéale pour une terrasse surélevée.", "structure-lames-alu-balcon-dessous"],
];

const terrasseAluminium = {
  title: "Terrasse en lames aluminium à Lyon | Instant Terrasse",
  description: "Terrasse en lames aluminium à Lyon : imputrescible, stable, sans entretien, décor bois ou teinte unie. Piscines, balcons, restaurants. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Terrasse aluminium</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses aluminium à Lyon et dans sa région", photo: "alu-piscine-aspect-teck", position: "60% 50%",
  chapo: `<span class="en-long">L'aspect du bois, sans ses contraintes : des lames aluminium qui ne pourrissent pas, ne se déforment pas et ne se traitent pas.</span><span class="en-court">Décor bois ou teinte unie : des lames qui ne pourrissent pas et ne demandent aucun traitement.</span>`,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#teintes">Voir les teintes</a>` })}

<section id="teintes" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Décor bois ou teinte unie</p>
    <h2>Nos teintes</h2>
    <p class="chapo">Décors bois ou gris uni, en lames garanties 20 ans par le fabricant. Vous voyez les échantillons chez vous, lors du rendez-vous.</p>
    <div class="nuancier nuancier-car" data-galerie>${PHOTOS.filter((p) => p.categorie === "teinte-alu").sort((a, b) => ORDRE_TEINTES_ALU.indexOf(a.essence) - ORDRE_TEINTES_ALU.indexOf(b.essence)).map((p) => `<figure tabindex="0" aria-label="Agrandir : ${p.essence}">${imgPhoto(p.cle, { sizes: "(max-width:560px) 45vw, 230px" })}<figcaption>${p.essence}</figcaption></figure>`).join("")}</div>
    <div class="structure-bandeau"><a class="carte carte-structure" href="/structure-terrasse-lyon/"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur structure aluminium</h3><p><span class="cs-long">Les lames aluminium sont posées sur une ossature aluminium et des plots réglables : rien ne pourrit, et la terrasse reste plane même sur un sol irrégulier.</span><span class="cs-court">Ossature aluminium sur plots réglables : rien ne pourrit.</span><span class="cs-lien">Voir la structure&nbsp;→</span></p></div><span class="cs-img cs-photo-grand">${imgPhoto("structure-lames-alu-assemblage", { sizes: "(max-width:700px) 120px, 300px" })}</span></a></div>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les atouts de l'aluminium</h2>
    <div class="grille grille-3 atouts-car">
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></span><h3>Le revêtement qui chauffe le moins</h3><p>Moins que le composite et moins que les bois durs : l'aluminium dissipe la chaleur au lieu de la stocker. Agréable pieds nus, même en été.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></span><h3>Inerte et inaltérable</h3><p>Il ne pourrit pas, ne moisit pas et ne bouge pas : pas de fente, pas de vrillage, pas d'écharde. Un nettoyage à l'eau suffit.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg></span><h3>Durable et 100 % recyclable</h3><p>Lames et structure en aluminium : une terrasse faite pour durer, entièrement recyclable en fin de vie.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M5 8h14"/><path d="m5 8-3 7a3 3 0 0 0 6 0z"/><path d="m19 8-3 7a3 3 0 0 0 6 0z"/></svg></span><h3>Léger</h3><p>Lames et structure tout aluminium : un ensemble léger, idéal pour un balcon, une terrasse suspendue ou un toit-terrasse sur étanchéité.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M4 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M12 3v7"/><path d="m9 7 3 3 3-3"/></svg></span><h3>Antidérapant</h3><p>Un revêtement spécial limite la glissance, autour d'une piscine comme sous la pluie.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10h18"/><path d="M12 4 3 10"/><path d="m12 4 9 6"/><path d="M12 14s-3 3.2-3 5a3 3 0 0 0 6 0c0-1.8-3-5-3-5z"/></svg></span><h3>Étanche</h3><p>Les lames forment un revêtement étanche : l'espace en dessous reste au sec. Idéal pour une terrasse surélevée.</p></div>
    </div>
  </div>
</section>

<section id="galerie" class="bloc galerie-alu">
  <div class="conteneur">
    ${galerie("terrasse-aluminium", { titre: "Nos terrasses aluminium en situation", intro: "Choisissez une teinte pour voir son rendu en terrasse.", legende: "Illustrations", nuances: "teinte-alu", limite: 12, ordre: ORDRE_GALERIE_ALU })}
  </div>
</section>

<section id="projets" class="bloc bloc-alt">
  <div class="conteneur">
    <p class="sous-titre">Pour quels projets ?</p>
    <h2>Partout où l'on veut une terrasse facile à vivre</h2>
    <p class="chapo">Plages de piscine, balcons, toits-terrasses, escaliers extérieurs, terrasses de restaurants : la lame aluminium s'adapte à chaque projet.</p>
    <div class="grille projets-alu trad-car">
      ${PROJETS_ALU.map(([lien, titre, texte, cle]) => `<a class="carte carte-trad avec-photo carte-lien projet-alu" href="${lien}"><div class="trad-photo">${imgPhoto(cle, { sizes: "(max-width:700px) 80vw, 200px" })}</div><div><h3>${titre}</h3><p>${texte}</p></div></a>`).join("")}
    </div>
  </div>
</section>

<section id="faq-alu" class="bloc">
  <div class="conteneur lyon-faq">
  <div id="lyon" class="lyon-texte">
    <h2>Votre terrasse aluminium à Lyon et dans sa région</h2>
    <div class="en-long"><p>Instant Terrasse est basée à Rillieux-la-Pape, au nord de Lyon. Nous venons chez vous, à Lyon et dans sa région, avec les échantillons de lames : vous comparez les teintes à la lumière de votre extérieur, et nous prenons les mesures pour votre plan 3D.</p>
    <p>Étés chauds, hivers humides, orages : l'aluminium ne craint ni l'eau ni les écarts de saison. Les lames ne pourrissent pas, ne se fendent pas et restent droites.</p></div>
    <p class="en-court">Depuis Rillieux-la-Pape, nous venons chez vous, à Lyon et dans sa région, avec les échantillons. Été comme hiver, les lames aluminium ne pourrissent pas et restent droites.</p>
    <p class="lien-methode"><a href="/#methode">Découvrir notre méthode →</a></p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur l'aluminium</h2>
    <details class="faq"><summary>Comment entretenir une terrasse aluminium ?</summary><div><p>Un nettoyage à l'eau suffit. Il n'y a aucun traitement à refaire : ni saturateur, ni ponçage, ni lasure.</p></div></details>
    <details class="faq"><summary>Une terrasse aluminium chauffe-t-elle au soleil ?</summary><div><p>C'est le revêtement qui chauffe le moins, moins que le composite et moins que les bois durs. L'aluminium dissipe la chaleur au lieu de la stocker : la lame reste fraîche en plein soleil, et vous marchez dessus pieds nus l'été.</p></div></details>
    <details class="faq"><summary>Les lames peuvent-elles se déformer ?</summary><div><p>Non. L'aluminium ne gonfle pas avec l'humidité : pas de fente, pas de vrillage, pas d'écharde. Les lames restent droites dans le temps.</p></div></details>
    <details class="faq"><summary>Peut-on garder l'accès sous la terrasse ?</summary><div><p>Oui. Des trappes de visite peuvent être intégrées pour accéder à un regard, à un local technique ou à une vanne, sans démonter la terrasse.</p></div></details>
    <details class="faq"><summary>Quelle garantie pour une terrasse aluminium ?</summary><div><p>Les lames sont garanties 20 ans par le fabricant, sous conditions. Elles sont posées sur une ossature aluminium et plots réglables, elle aussi garantie 20 ans.</p></div></details>
  </div>
  </div>
</section>
${cta("Un projet de terrasse aluminium ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Terrasse carrelage ----------
// Dalles de grès cérame (Antoine, 05/11/2026) : 2 cm, très large choix de références (exemples ci-dessous), pas de garantie affichée sur les dalles.
// Visuels : ©Rondine, sauf 5 aspect pierre ©Novoceram (champ credit du manifeste).
const FORMATS_CARR = [[60, 60], [80, 80], [90, 90], [100, 100], [120, 120], [60, 120], [40, 120]];
const GALERIE_CARR = ["carrelage-beige-pergola-toit-fixe", "carrelage-toit-terrasse-montagnes", "carrelage-bh-pergola-cour", "carrelage-aspect-bois-garde-corps-feuilles", "carrelage-bh-aspect-bois-clair-pergola", "carrelage-gris-garde-corps-verre-depoli", "carrelage-bh-aspect-bois-gris-vue", "carrelage-bh-grand-format-baie", "carrelage-bh-aspect-bois-clair-transats", "carrelage-bh-sureleve-gazon", "carrelage-bh-aspect-bois-gris-table", "carrelage-bh-pergola-salon"];
const nuancierCarr = (aspect, classe, sizes) => `<div class="nuancier nuancier-carr ${classe}" data-galerie>${PHOTOS.filter((p) => p.categorie === "teinte-carrelage" && p.essence === aspect).sort((a, b) => a.cle.localeCompare(b.cle)).map((p) => `<figure tabindex="0" aria-label="Agrandir : ${p.alt}">${imgPhoto(p.cle, { sizes })}</figure>`).join("")}</div>`;

const terrasseCarrelage = {
  title: "Terrasse carrelage sur plots à Lyon | Instant Terrasse",
  description: "Terrasse carrelage à Lyon : dalles de grès cérame 2 cm aspect pierre ou bois, posées sur plots ou sur structure aluminium. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Terrasse carrelage</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses carrelage à Lyon et dans sa région", photo: "carrelage-bh-aspect-bois-gris-jardin", position: "55% 70%",
  chapo: `<span class="en-long">Grès cérame de 2 cm posé à sec, sur plots ou sur structure aluminium : ni colle, ni dalle béton. Aspect pierre ou bois.</span><span class="en-court">Grès cérame de 2 cm posé à sec, sans colle ni dalle béton : aspect pierre ou bois, jusqu'au 120 × 120.</span>`,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#teintes">Voir les teintes</a>` })}

<section id="teintes" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Aspect pierre ou aspect bois</p>
    <h2>Nos dalles en grès cérame</h2>
    <p class="chapo">Quelques teintes parmi un très large choix de références : si vous cherchez un aspect ou une couleur précise, nous la trouvons. Vous voyez les échantillons chez vous, lors du rendez-vous.</p>
    <h3 class="nuancier-titre">Aspect pierre</h3>
    ${nuancierCarr("Aspect pierre", "nuancier-pierre", "(max-width:700px) 28vw, 150px")}
    <h3 class="nuancier-titre">Aspect bois</h3>
    ${nuancierCarr("Aspect bois", "nuancier-bois", "(max-width:700px) 18vw, 150px")}
    <h3 class="nuancier-titre">7 formats, 2 cm d'épaisseur</h3>
    <div class="formats-carr" role="list">${FORMATS_CARR.map(([l, h]) => `<div class="fmt" role="listitem"><span class="fmt-dalle" style="--l:${l};--h:${h}"></span><span class="fmt-nom">${l} × ${h}</span></div>`).join("")}</div>
    <p class="evol-note">Teintes indicatives. Dessins des formats à l'échelle.</p>
    <div class="structure-bandeau structure-duo"><p class="cs-kicker">Comment c'est posé</p><div class="duo-grille"><a class="carte carte-structure" href="/terrasse-sur-plots-lyon/"><div><h3>Sur plots</h3><p><span class="cs-long">Sur une dalle béton ou un toit-terrasse en bon état, les dalles reposent sur des plots réglables placés sous leurs angles : la solution la plus simple.</span><span class="cs-court">Sur une dalle béton ou un toit-terrasse existant.</span><span class="cs-lien">Voir la pose sur plots&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("carrelage-plots-schema", { sizes: "(max-width:700px) 120px, 300px" })}</span></a><a class="carte carte-structure" href="/structure-terrasse-lyon/#comparatif-carrelage"><div><h3>Sur structure aluminium</h3><p><span class="cs-long">Sur un sol stabilisé, des rails aluminium sur plots réglables et des cales amortissantes remplacent la dalle béton : surface parfaitement plane. Structure garantie 20 ans.</span><span class="cs-court">Sans dalle béton, surface parfaitement plane.</span><span class="cs-lien">Voir la structure&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("structure-aluminium-carrelage", { sizes: "(max-width:700px) 120px, 300px" })}</span></a></div></div>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les atouts du grès cérame</h2>
    <div class="grille grille-3 atouts-car">
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></span><h3>Rien ne l'atteint, peu d'entretien</h3><p>Taches, humidité, écarts de température : rien ne marque. Un coup de balai et de l'eau suffisent, sans saturateur ni traitement.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M4 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M12 3v7"/><path d="m9 7 3 3 3-3"/></svg></span><h3>Antidérapant</h3><p>Des dalles antidérapantes, autour d'une piscine comme sous la pluie.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h18v5H3z"/><path d="M6 12v6M18 12v6M4 18h4M16 18h4"/></svg></span><h3>Posé à sec</h3><p>Ni colle, ni joint, ni dalle béton à couler : les dalles reposent sur des plots ou sur la structure.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg></span><h3>Démontable dalle par dalle</h3><p>Une dalle se soulève pour accéder dessous, ou se remplace sans toucher au reste de la terrasse.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V10l9-6 9 6v11"/><path d="M3 21h18"/><path d="M9 21v-6h6v6"/></svg></span><h3>Dans la continuité de l'intérieur</h3><p>Aspect pierre ou bois, du très clair au très foncé : le sol de votre séjour se prolonge jusque dans le jardin.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h8v6H3zM13 9h8v6h-8z"/><path d="M4 9v6M7 9v6M10 9v6"/></svg></span><h3>Bois et carrelage au même niveau</h3><p>Sur structure aluminium, dalles et lames de bois se raccordent sans marche ni décalage.</p></div>
    </div>
  </div>
</section>

<section id="galerie" class="bloc galerie-carr">
  <div class="conteneur">
    ${galerie(GALERIE_CARR, { titre: "Nos terrasses carrelage en situation", legende: "Illustrations" })}
  </div>
</section>

<section id="faq-carr" class="bloc bloc-alt">
  <div class="conteneur lyon-faq">
  <div id="lyon" class="lyon-texte">
    <h2>Votre terrasse carrelage à Lyon et dans sa région</h2>
    <div class="en-long"><p>Instant Terrasse est basée à Rillieux-la-Pape, au nord de Lyon. Nous venons chez vous, à Lyon et dans sa région, avec les échantillons de dalles : vous comparez les teintes à la lumière de votre extérieur, et nous prenons les mesures pour votre plan 3D.</p>
    <p>Jardin, toit-terrasse, balcon ou tour de piscine : nous regardons votre support pour choisir entre plots et structure aluminium. Vous hésitez avec le bois ? Les deux se combinent sur la même terrasse, la zone repas en carrelage et le coin salon en bois.</p></div>
    <p class="en-court">Depuis Rillieux-la-Pape, nous venons chez vous, à Lyon et dans sa région, avec les échantillons. Jardin, toit-terrasse, balcon ou piscine : nous choisissons avec vous entre plots et structure aluminium.</p>
    <p class="lien-methode"><a href="/#methode">Découvrir notre méthode →</a></p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur la terrasse carrelage</h2>
    <details class="faq"><summary>Faut-il une dalle béton pour une terrasse carrelage ?</summary><div><p>Non. Sur une dalle béton ou un toit-terrasse existant, les dalles se posent sur des plots réglables. Sur un sol stabilisé, la structure aluminium remplace la dalle béton : il n'y a rien à couler.</p></div></details>
    <details class="faq"><summary>Quelle épaisseur pour des dalles sur plots ?</summary><div><p>Nos dalles de grès cérame font 2 cm d'épaisseur : elles sont conçues pour l'extérieur et pour la pose à sec, sans colle.</p></div></details>
    <details class="faq"><summary>Quels formats de dalles proposez-vous ?</summary><div><p>60 × 60, 80 × 80, 90 × 90, 100 × 100, 120 × 120, 60 × 120 et 40 × 120 cm. On peut aussi décaler les joints ou associer deux formats sur une même terrasse.</p></div></details>
    <details class="faq"><summary>Les dalles sont-elles glissantes ?</summary><div><p>Non. Nos dalles de grès cérame sont antidérapantes : elles conviennent autour d'une piscine et restent sûres sous la pluie.</p></div></details>
    <details class="faq"><summary>Les dalles bougent-elles sous le pied ?</summary><div><p>Non. Sur structure aluminium, chaque dalle repose sur des cales amortissantes : elle ne bouge pas et ne claque pas quand on marche dessus.</p></div></details>
    <details class="faq"><summary>Comment entretenir une terrasse carrelage ?</summary><div><p>Un coup de balai et un lavage à l'eau suffisent. Le grès cérame ne demande ni saturateur, ni ponçage, ni traitement.</p></div></details>
    <details class="faq"><summary>Peut-on mélanger bois et carrelage ?</summary><div><p>Oui. Sur structure aluminium, les dalles et les lames de bois se raccordent au même niveau, sans marche. Découvrez nos <a href="/terrasse-bois-lyon/">essences de bois</a>.</p></div></details>
  </div>
  </div>
</section>
${cta("Un projet de terrasse carrelage ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Bardage aluminium ----------
const bardageAluminium = {
  title: "Bardage aluminium à Lyon, sans entretien | Instant Terrasse",
  description: "Bardage aluminium sur mesure à Lyon : lames thermolaquées, nombreuses teintes RAL, fixation invisible, sans entretien. Façades, murs, plafonds. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ["Bardage aluminium", "sur mesure"], kicker: "Façades sans entretien à Lyon et dans sa région", photo: "bardage-alu-vertical-brun-escalier", position: "60% 50%",
  chapo: "Des lames aluminium thermolaquées, unies ou aspect bois, sur ossature aluminium : une façade qui ne se repeint jamais." })}

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les points forts</h2>
    <div class="grille grille-3">
      <div class="carte"><h3>Aucun entretien</h3><p>Pas de lasure, pas de saturateur : un nettoyage à l'eau de temps en temps suffit.</p></div>
      <div class="carte"><h3>Unie ou aspect bois</h3><p>Des teintes RAL unies, ou des décors bois du gris clair au brun chaud, que l'on peut associer sur une même façade.</p></div>
      <div class="carte"><h3>Léger et robuste</h3><p>Un ensemble léger, très stable, qui résiste aux environnements difficiles.</p></div>
      <div class="carte"><h3>Fixation invisible</h3><p>Les lames se clipsent sur les rails : aucune vis en façade, des lignes parfaitement régulières.</p></div>
      <div class="carte"><h3>Design libre</h3><p>Pose verticale ou horizontale, jointive ou à claire-voie, avec des largeurs et des espacements à composer.</p></div>
      <div class="carte"><h3>Aussi en plafond</h3><p>Les mêmes profils habillent les sous-faces d'avancée de toit, de pergola ou de préau.</p></div>
    </div>
  </div>
</section>

<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie("bardage-aluminium", { titre: "Bardages aluminium en situation", legende: "Illustrations" })}
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Aluminium ou bois ?</h2>
      <p>Le bardage aluminium vise le zéro entretien et une couleur qui ne bouge pas. Le <a href="/bardage-bois-lyon/">bardage bois</a> apporte la chaleur d'un matériau naturel qui évolue avec le temps. Les deux se posent sur la même ossature et peuvent se combiner sur une façade.</p>
    </div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Nous venons chez vous avec des échantillons de teintes, et vous recevez un plan 3D offert de votre façade.</p>
    </div>
  </div>
</section>
${cta("Un projet de bardage aluminium ?", "Devis gratuit et sans engagement. Nous venons voir votre façade avec les échantillons de teintes.")}`,
};

// ---------- Terrasse composite ----------
// Lames composite (infos de l'ancien site, validées par Antoine le 05/11/2026 ; les deux gammes sont haut de gamme). Évolution : visuels fabricant.
const LAMES_COMP = [
  { nom: "Nekko Brun", cle: "teinte-composite-brun-t", evol: ["brun", ["À la pose", "6 mois", "1 an"]],
    texte: "Lame co-extrudée : un cœur et une coque de deux matériaux différents. Une teinte brune aux nuances marquées, au veinage très proche du bois.",
    points: ["Composite co-extrudé", "Nuances et veinage proches du bois", "Garantie 15 ans*"] },
  { nom: "Nekko Gris", cle: "teinte-composite-gris-t", evol: ["gris", ["À la pose", "6 mois", "1 an"]],
    texte: "Lame co-extrudée : un cœur et une coque de deux matériaux différents. Une teinte grise nuancée, au veinage très proche du bois.",
    points: ["Composite co-extrudé", "Nuances et veinage proches du bois", "Garantie 15 ans*"] },
  { nom: "Anise", cle: "teinte-composite-miel-t", evol: ["anise", ["À la pose", "1-2 mois", "6-8 mois"]],
    texte: "Lame pleine à 75 % de fibres de bois PEFC, sans PVC ni plastifiant : ni l'eau ni les insectes n'y pénètrent. Teinte miel lumineuse, qui se patine avec le temps.",
    points: ["Pleine masse, 75 % de fibres de bois PEFC", "Chauffe peu, proche du bois", "Garantie 10 ans*"] },
  { nom: "Varia Brun foncé", cle: "teinte-composite-brun-fonce-t", evol: ["varia-brun-fonce", ["À la pose", "1-2 mois", "6-8 mois"]],
    texte: "Lame pleine à 75 % de fibres de bois PEFC, sans PVC ni plastifiant : ni l'eau ni les insectes n'y pénètrent. Teinte brun foncé, qui se patine avec le temps.",
    points: ["Pleine masse, 75 % de fibres de bois PEFC", "Chauffe peu, proche du bois", "Garantie 10 ans*"] },
  { nom: "Mentha Nigra", cle: "teinte-composite-vert-olive-t", evol: ["mentha-nigra", ["À la pose", "1-2 mois", "6-8 mois"]],
    texte: "Lame pleine à 75 % de fibres de bois PEFC, sans PVC ni plastifiant : ni l'eau ni les insectes n'y pénètrent. Teinte vert sombre originale, qui se patine avec le temps.",
    points: ["Pleine masse, 75 % de fibres de bois PEFC", "Chauffe peu, proche du bois", "Garantie 10 ans*"] },
  { nom: "Malui Gris", cle: "teinte-composite-gris-anthracite-t", evol: ["malui-gris", ["À la pose", "1-2 mois", "6-8 mois"]],
    texte: "Lame pleine à 75 % de fibres de bois PEFC, sans PVC ni plastifiant : ni l'eau ni les insectes n'y pénètrent. Teinte gris profond, qui se patine avec le temps.",
    points: ["Pleine masse, 75 % de fibres de bois PEFC", "Chauffe peu, proche du bois", "Garantie 10 ans*"] },
];

const terrasseComposite = {
  title: "Terrasse composite à Lyon | Instant Terrasse",
  description: "Terrasse composite sur mesure à Lyon, posée sur structure aluminium garantie 20 ans : lames sans écharde, sans saturateur, en 6 teintes. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Terrasse composite</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses composite à Lyon et dans sa région", photo: "composite-gris-piscine", position: "50% 60%",
  chapo: `<span class="en-long">Des lames qui gardent leur aspect sans saturateur ni ponçage, posées sur notre structure aluminium.</span><span class="en-court">Sans saturateur ni ponçage : la terrasse pour profiter de l'extérieur sans y passer ses week-ends.</span>`,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#teintes">Voir les teintes</a>` })}

<section id="teintes" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Deux gammes, six teintes</p>
    <h2>Nos lames composite</h2>
    <p class="chapo">Deux composites haut de gamme, sélectionnés pour leur durabilité et leur stabilité : une gamme co-extrudée et une gamme pleine masse. Vous voyez les échantillons chez vous, lors du rendez-vous.</p>
    <div class="grille grille-essences grille-comp">
      ${LAMES_COMP.map((e) => `
      <article class="essence">
        <div class="essence-photo">${imgPhoto(e.cle, { sizes: "(max-width:700px) 82vw, 460px" })}</div>
        <div class="essence-texte">
          <h3>${e.nom}</h3>
          <p>${e.texte}</p>
          <ul class="puces">${e.points.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
        ${evolution(e.nom, "comp-" + e.evol[0], e.evol[1])}
      </article>`).join("")}
    </div>
    <p class="evol-note"><span class="en-long">Teintes indicatives : la teinte s'éclaircit les premiers mois, puis se stabilise. *Garanties fabricants, sous conditions.</span><span class="en-court">Teintes indicatives.<br>*Garanties fabricants, sous conditions.</span></p>
    <div class="structure-bandeau"><a class="carte carte-structure" href="/structure-terrasse-lyon/"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur structure aluminium</h3><p><span class="cs-long">Nos lames composite sont posées sur plots réglables, rails aluminium et fixations invisibles. Rien ne pourrit sous les lames, l'air circule, la terrasse reste plane. Structure garantie 20 ans.</span><span class="cs-court">Rails alu et fixations invisibles. Structure garantie 20 ans.</span><span class="cs-lien">Voir la structure&nbsp;→</span></p></div><span class="cs-img">${img("structure-aluminium", "Structure aluminium : plot réglable, rail aluminium et clip sous une lame de terrasse", 404)}</span></a></div>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les atouts du composite</h2>
    <div class="grille grille-3 atouts-car">
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg></span><h3>Sans entretien lourd</h3><p>Ni saturateur, ni ponçage, ni lasure : un nettoyage à l'eau savonneuse suffit.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3c1.5 0 2.5 2 2.5 5S9.5 13 8 13s-2.5-2-2.5-5S6.5 3 8 3z"/><path d="M16 9c1.5 0 2.5 2 2.5 5s-1 5-2.5 5-2.5-2-2.5-5 1-5 2.5-5z"/></svg></span><h3>Confortable pieds nus</h3><p>Pas d'écharde ni de fente : idéal autour d'une piscine et pour les enfants.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg></span><h3>Une teinte qui tient</h3><p>La couleur se stabilise après quelques mois, sans virer au gris comme le bois.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 6c1 2 1 4 0 6M15 12c1 2 1 4 0 6"/></svg></span><h3>L'aspect du bois</h3><p>Des lames veinées comme du bois, en 6 teintes et deux gammes : co-extrudée ou pleine masse.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18v6H3z"/><path d="M8 9v6M16 9v6"/></svg></span><h3>Fixation invisible</h3><p>Aucune vis en surface : les lames, rainurées sur les chants, se clipsent sur la structure.</p></div>
      <div class="carte atout-carte"><span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg></span><h3>Une lame se remplace</h3><p>Une lame abîmée se change sans démonter toute la terrasse.</p></div>
    </div>
  </div>
</section>

<section id="galerie" class="bloc galerie-comp">
  <div class="conteneur">
    ${galerie("terrasse-composite", { titre: "Nos terrasses composite en situation", legende: "Illustrations" })}
  </div>
</section>

<section id="faq-comp" class="bloc bloc-alt">
  <div class="conteneur lyon-faq">
  <div id="lyon" class="lyon-texte">
    <h2>Votre terrasse composite à Lyon et dans sa région</h2>
    <div class="en-long"><p>Instant Terrasse est basée à Rillieux-la-Pape, au nord de Lyon. Nous venons chez vous, à Lyon et dans sa région, avec les échantillons de lames : vous comparez les teintes à la lumière de votre extérieur, et nous prenons les mesures pour votre plan 3D.</p>
    <p>Étés chauds, hivers humides, orages : posées sur une structure aluminium ventilée, les lames composite restent droites et gardent leur teinte d'une saison à l'autre. Jardin, balcon, toit-terrasse ou tour de piscine : les plots réglables de la structure s'adaptent à votre support. Vous hésitez avec le bois ? Nous apportons aussi ses échantillons.</p></div>
    <p class="en-court">Depuis Rillieux-la-Pape, nous venons chez vous, à Lyon et dans sa région, avec les échantillons. Jardin, balcon, toit-terrasse ou piscine : sur structure aluminium ventilée, les lames restent droites saison après saison.</p>
    <p class="lien-methode"><a href="/#methode">Découvrir notre méthode →</a></p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le composite</h2>
    <details class="faq"><summary>Comment entretenir une terrasse composite ?</summary><div><p>Un nettoyage à l'eau savonneuse suffit. Il n'y a ni saturateur, ni ponçage, ni lasure à prévoir.</p></div></details>
    <details class="faq"><summary>La couleur du composite change-t-elle ?</summary><div><p>La teinte s'éclaircit légèrement pendant les premiers mois, puis se stabilise, selon les teintes entre 6 mois et 1 an. Les pastilles sous chaque teinte, plus haut sur cette page, montrent cette évolution. Contrairement au bois, le composite ne vire pas au gris.</p></div></details>
    <details class="faq"><summary>Le composite fait-il des échardes ?</summary><div><p>Non. Les lames ne font ni écharde ni fente : la terrasse reste agréable pieds nus, autour d'une piscine comme pour les enfants.</p></div></details>
    <details class="faq"><summary>Le composite est-il écologique ?</summary><div><p>Nos lames pleine masse contiennent 75 % de fibres de bois issues de forêts gérées durablement (PEFC), sans PVC ni plastifiant. Elles sont certifiées Cradle to Cradle niveau Gold, qui évalue la santé des matériaux et leur recyclage.</p></div></details>
    <details class="faq"><summary>Peut-on remplacer une lame abîmée ?</summary><div><p>Oui. Les lames sont clipsées sur la structure, sans vis en surface : une lame se change sans démonter toute la terrasse.</p></div></details>
    <details class="faq"><summary>Quelle garantie pour une terrasse composite ?</summary><div><p>Les lames sont garanties par le fabricant, sous conditions : 15 ans pour la gamme co-extrudée (Nekko), 10 ans pour la gamme pleine masse. La structure aluminium est garantie 20 ans.</p></div></details>
  </div>
  </div>
</section>
${cta("Un projet de terrasse composite ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Store banne ----------
// ---------- Carport ----------
// ---------- Terrasse sur pilotis ----------

// ---------- Comparatif des matériaux ----------
const MATERIAUX = ["Bois", "Composite", "Aluminium", "Carrelage"];
const LIGNES_MATERIAUX = [
  ["Entretien",
    "Deux nettoyages par an au minimum. Pas de saturateur pour nos essences phares ; conseillé pour le bambou.",
    "De l'eau savonneuse, sans saturateur ni ponçage.",
    "Un nettoyage à l'eau, aucun traitement à refaire.",
    "Balai et eau : les taches ne pénètrent pas."],
  ["Résistance à la chaleur",
    "Un bois tendre reste le plus agréable sous le pied en plein été.",
    "La gamme pleine masse chauffe peu, proche du bois.",
    "Le revêtement qui chauffe le moins : moins que le composite et les bois durs.",
    "Insensible à la chaleur ; une teinte claire reste la plus confortable."],
  ["Adhérence",
    "Bonne sur une lame propre ; une lame verdie, faute d'entretien, devient glissante.",
    "La gamme pleine masse reste antidérapante, même mouillée.",
    "Antidérapantes grâce à un revêtement spécial, idéales autour d'une piscine.",
    "Nos dalles de grès cérame sont antidérapantes."],
  ["Durabilité",
    "Selon l'essence : l'accoya, le kebony, les bois thermo-traités, l'ipé ou le cumaru durent plusieurs décennies, les résineux moins longtemps.",
    "Ne pourrit pas ; la teinte se stabilise après quelques mois.",
    "Imputrescible et indéformable : ni fente, ni vrillage.",
    "Le grès cérame ne vieillit pour ainsi dire pas, et une dalle abîmée se remplace seule."],
  ["Aspect",
    "Une matière vivante, différente sur chaque lame, qui évolue avec le temps.",
    "L'aspect du bois, plus régulier.",
    "Décors bois ou teintes unies.",
    "Pierre, béton ou bois, en grands formats."],
];
// Comparateur (Antoine, 11/11/2026) : notes par critère et par matériau, données par Antoine (2e grille, 11/11/2026).
// Chaque réponse donne un poids à des critères ; compatibilité = somme(poids × note) / (4 × somme des poids).
const QUIZ_MAT = [
  ["bois", "Bois", "/terrasse-bois-lyon/", "terrasse-kebony-piscine-debordement"],
  ["composite", "Composite", "/terrasse-composite-lyon/", "composite-gris-piscine"],
  ["aluminium", "Lames aluminium", "/terrasse-aluminium-lyon/", "alu-piscine-aspect-teck"],
  ["carrelage", "Carrelage", "/terrasse-carrelage-lyon/", "carrelage-bh-aspect-bois-gris-jardin"],
];
// [bois, composite, aluminium, carrelage]
const QUIZ_NOTES = {
  adherence: [1, 1, 2, 3], chaleur: [3, 2, 3, 1], entretien: [1, 2, 2, 2], aspectBois: [2, 1, 1, 1], aspectPierre: [0, 0, 0, 1],
  legerete: [3, 2, 4, 1], chaleureux: [4, 3, 1, 2], durabilite: [1, 1, 2, 2], rayures: [1, 1, 2, 3], taches: [1, 3, 3, 2],
};
// Raisons affichées (faits validés) : critère → texte par matériau.
const QUIZ_RAISONS = {
  adherence: { aluminium: "Antidérapantes grâce à un revêtement spécial.", carrelage: "Nos dalles de grès cérame sont antidérapantes." },
  chaleur: { bois: "Un bois tendre reste le plus agréable sous le pied en plein été.", composite: "La gamme pleine masse chauffe peu, proche du bois.", aluminium: "Le revêtement qui chauffe le moins." },
  entretien: { composite: "Ni saturateur ni ponçage : un simple nettoyage suffit.", aluminium: "Inerte et inaltérable : rien à traiter, il ne moisit pas.", carrelage: "Ni saturateur, ni ponçage, ni traitement." },
  aspectBois: { bois: "Une matière naturelle, différente sur chaque lame.", composite: "L'aspect du bois, sans ses contraintes." },
  aspectPierre: { carrelage: "Aspect pierre ou béton, en grands formats jusqu'au 120 × 120." },
  legerete: { aluminium: "Lames et structure tout aluminium : un ensemble léger." },
  chaleureux: { bois: "Une matière vivante et chaleureuse, qui évolue avec le temps.", composite: "Un aspect chaleureux, proche du bois." },
  durabilite: { aluminium: "Imputrescible et indéformable : il ne bouge pas.", carrelage: "Le grès cérame est l'un des revêtements les plus durables." },
  rayures: { carrelage: "Le grès cérame est très résistant aux rayures." },
  taches: { composite: "Le composite a une bonne résistance aux taches.", aluminium: "Les taches ne marquent pas." },
};
// Questions : [id, intitulé, [[valeur, libellé, {critère: poids}]]]
const QUIZ_Q = [
  ["aspect", "Quel aspect recherchez-vous ?", [
    ["bois", "Le bois, chaleureux", { aspectBois: 3, chaleureux: 3 }],
    ["mineral", "La pierre, minéral", { aspectPierre: 8 }],
    ["egal", "Peu importe", {}],
  ]],
  ["lieu", "Où sera votre terrasse ?", [
    ["jardin", "Dans le jardin", {}],
    ["piscine", "Autour d'une piscine", { adherence: 2, chaleur: 2 }],
    ["balcon", "Sur un balcon ou un toit-terrasse", { legerete: 2 }],
    ["sureleve", "En hauteur, terrasse surélevée", { legerete: 1 }],
  ]],
  ["usage", "Comment allez-vous la vivre ?", [
    ["pieds", "Pieds nus, en été", { chaleur: 2, adherence: 1 }],
    ["repas", "Repas, barbecue, enfants", { taches: 2, rayures: 1 }],
    ["passage", "Beaucoup de passage, mobilier déplacé", { rayures: 2, durabilite: 1 }],
    ["calme", "Un usage tranquille", {}],
  ]],
  ["entretien", "L'entretien que vous acceptez ?", [
    ["aucun", "Aucun nettoyage", { entretien: 3, _sans: ["bois"] }],
    ["balai", "Un nettoyage au balai-brosse", { entretien: 1 }],
    ["saturateur", "Balai-brosse et saturateur", {}],
  ]],
  ["expo", "Votre terrasse est plutôt…", [
    ["soleil", "En plein soleil", { chaleur: 2 }],
    ["ombre", "À l'ombre ou humide", { adherence: 1, entretien: 1, durabilite: 1 }],
    ["mixte", "Les deux selon l'heure", {}],
  ]],
];
const QUIZ_BASE = {}; // la durabilité ne compte que si une réponse la déclenche (Antoine, 11/11/2026)
const QUIZ_RESUME = {
  bois: "Une matière vivante, en essences phares sur structure aluminium ou en essences classiques sur lambourdes.",
  composite: "L'aspect du bois, sans saturateur ni ponçage, sur structure aluminium.",
  aluminium: "Imputrescible, léger et antidérapant, en 6 teintes, garanti 20 ans.",
  carrelage: "Du grès cérame de 2 cm posé à sec, aspect pierre ou bois.",
};
const quizHtml = () => `
<section id="trouver" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">${QUIZ_Q.length} questions, 30 secondes</p>
    <h2>Trouvez le revêtement qui vous correspond</h2>
    <div class="quiz" data-quiz>
      <div class="quiz-barre" aria-hidden="true"><span></span></div>
      ${QUIZ_Q.map(([id, q, opts], n) => `<fieldset class="quiz-etape" data-etape="${n}"${n ? " hidden" : ""}>
        <legend><span class="quiz-num">${n + 1} / ${QUIZ_Q.length}</span>${q}</legend>
        <div class="quiz-choix">${opts.map(([v, l]) => `<button type="button" class="quiz-opt" data-q="${id}" data-v="${v}">${l}</button>`).join("")}</div>
        ${n ? `<button type="button" class="quiz-retour">← Retour</button>` : ""}
      </fieldset>`).join("")}
      <div class="quiz-resultat" hidden>
        <p class="sous-titre">Votre résultat</p>
        <div class="quiz-liste">${QUIZ_MAT.map(([k, nom, url, ph]) => `<article class="quiz-carte" data-mat="${k}">
          <div class="quiz-photo">${imgPhoto(ph, { sizes: "(max-width:700px) 92vw, 420px" })}</div>
          <div class="quiz-texte">
            <p class="quiz-rang"></p>
            <h3>${nom}</h3>
                        <p class="quiz-resume">${QUIZ_RESUME[k]}</p>
            <ul class="puces quiz-raisons"></ul>
            <p class="quiz-actions"><a class="bouton" href="#rappel" data-devis="${nom}">Demander un devis</a> <a class="bouton bouton-blanc" href="${url}">Découvrir</a></p>
          </div>
        </article>`).join("")}</div>
        <p class="quiz-note">Un conseil indicatif : lors du rendez-vous, nous vérifions votre support et apportons les échantillons.</p>
        <button type="button" class="quiz-recommencer">↺ Recommencer</button>
      </div>
    </div>
    <script>(()=>{const Q=${JSON.stringify(QUIZ_Q.map(([id, , o]) => [id, Object.fromEntries(o.map(([v, , w]) => [v, w]))]))},N=${JSON.stringify(QUIZ_NOTES)},T=${JSON.stringify(QUIZ_RAISONS)},BASE=${JSON.stringify(QUIZ_BASE)},M=${JSON.stringify(QUIZ_MAT.map(([k]) => k))},Z=document.querySelector('[data-quiz]'),E=[...Z.querySelectorAll('.quiz-etape')],R=Z.querySelector('.quiz-resultat'),L=Z.querySelector('.quiz-liste'),B=Z.querySelector('.quiz-barre span');let rep={},n=0;
const voir=i=>{n=i;E.forEach((e,j)=>e.hidden=j!==i);R.hidden=i<E.length;B.style.width=Math.min(i,E.length)/E.length*100+'%'};
const calc=()=>{const w=Object.assign({},BASE),sans=[];Q.forEach(([id,o])=>{const a=o[rep[id]]||{};for(const c in a){if(c==='_sans')sans.push(...a[c]);else w[c]=(w[c]||0)+a[c]}});const tot=(Object.values(w).reduce((x,y)=>x+y,0)||1)*4;
const pct=M.map((m,i)=>Math.round(Object.keys(w).reduce((s,c)=>s+w[c]*N[c][i],0)/tot*100));
const ordre=M.map((m,i)=>i).sort((a,b)=>sans.includes(M[a])-sans.includes(M[b])||pct[b]-pct[a]||a-b);
ordre.forEach((m,rang)=>{const c=Z.querySelector('.quiz-carte[data-mat="'+M[m]+'"]');L.append(c);c.classList.toggle('quiz-top',rang===0);const IC=[['#FFE08A','#E3A62A','#9C6B12'],['#F4F6F8','#B9C0C7','#6F7780'],['#F2C49B','#C07A45','#7A4520']],cup=(r)=>{const [a,b,c]=IC[r],g='qg'+r;return '<svg class="quiz-coupe" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="'+g+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+a+'"/><stop offset=".55" stop-color="'+b+'"/><stop offset="1" stop-color="'+c+'"/></linearGradient></defs><path d="M14 9H8.5a1.5 1.5 0 0 0-1.5 1.6c.4 6.2 3.6 10 8.6 10.9M34 9h5.5a1.5 1.5 0 0 1 1.5 1.6c-.4 6.2-3.6 10-8.6 10.9" fill="none" stroke="'+c+'" stroke-width="2.6" stroke-linecap="round"/><path d="M13 6h22v9.5C35 22.4 30.1 28 24 28s-11-5.6-11-12.5z" fill="url(#'+g+')" stroke="'+c+'" stroke-width="1.3"/><path d="M16.5 9v6.5c0 3.2 1.6 6.1 4 7.7" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.8" stroke-linecap="round"/><path d="M21 28h6l1 6h-8z" fill="url(#'+g+')" stroke="'+c+'" stroke-width="1.2"/><rect x="15" y="34" width="18" height="4" rx="1.2" fill="url(#'+g+')" stroke="'+c+'" stroke-width="1.2"/><rect x="12" y="38" width="24" height="5" rx="1.6" fill="#3A3F42"/><text x="24" y="20.5" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="10" fill="'+c+'">'+(r+1)+'</text></svg>'},med='<svg class="quiz-coupe" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="qgm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6F1E8"/><stop offset="1" stop-color="#B9AE9C"/></linearGradient></defs><path d="M15 3h7l4 15-7 3zM33 3h-7l-4 15 7 3z" fill="#D79A3A"/><path d="M22 3h4l-2 9z" fill="#B57A22"/><circle cx="24" cy="31" r="12" fill="url(#qgm)" stroke="#8E8474" stroke-width="1.4"/><circle cx="24" cy="31" r="8.6" fill="none" stroke="#8E8474" stroke-width="1" stroke-dasharray="2 1.6"/><text x="24" y="35" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="11" fill="#6F6556">4</text></svg>',lib=['1er · Le plus adapté à votre projet','2e','3e','4e'];c.querySelector('.quiz-rang').innerHTML=(rang<3?cup(rang):med)+'<span>'+lib[rang]+'</span>';
const ul=c.querySelector('.quiz-raisons');ul.innerHTML='';if(!rang){Object.keys(w).filter(k=>T[k]&&T[k][M[m]]&&N[k][m]>0&&N[k][m]===Math.max(...N[k])).sort((a,b)=>w[b]*N[b][m]-w[a]*N[a][m]).slice(0,3).forEach(k=>{const li=document.createElement('li');li.textContent=T[k][M[m]];ul.append(li)})}ul.hidden=!ul.children.length})};
Z.addEventListener('click',e=>{const o=e.target.closest('.quiz-opt');if(o){rep[o.dataset.q]=o.dataset.v;o.parentNode.querySelectorAll('.quiz-opt').forEach(b=>b.classList.toggle('choisi',b===o));if(n===E.length-1){calc();voir(E.length);R.scrollIntoView({behavior:'smooth',block:'start'})}else voir(n+1);return}
if(e.target.closest('.quiz-retour'))voir(n-1);if(e.target.closest('.quiz-recommencer')){rep={};Z.querySelectorAll('.choisi').forEach(b=>b.classList.remove('choisi'));voir(0);Z.scrollIntoView({behavior:'smooth',block:'start'})}
const d=e.target.closest('[data-devis]');if(d){const t=document.querySelector('#rappel textarea[name=message]');if(t&&!t.value)t.value='Bonjour, le comparateur m\\'oriente vers une terrasse en '+d.dataset.devis.toLowerCase()+'.';const c=document.querySelector('#rappel .choix input[value="Terrasse"]');if(c)c.checked=true}})})()</script>
  </div>
</section>`;

const nosTerrasses = {
  title: "Quel revêtement de terrasse choisir ? | Instant Terrasse",
  description: "Bois, composite, aluminium ou carrelage : trouvez en 5 questions le revêtement de terrasse adapté à votre projet et comparez entretien, chaleur, adhérence.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Bois, composite, aluminium", "ou carrelage ?"], kicker: "Comparatif des revêtements de terrasse",
  chapo: "Répondez à 5 questions : nous classons les quatre revêtements selon votre projet.",
  photo: "terrasse-accoya-naturel-piscine-vue-haut", position: "60% 50%",
  actions: `<a class="bouton" href="#trouver">Faire le test</a> <a class="bouton bouton-blanc" href="#comparatif">Voir le comparatif</a>` })}
${quizHtml()}

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>En résumé</h2>
    <div class="grille grille-4">
      ${carteProduit("/terrasse-bois-lyon/", "Bois", "Pour le charme d'une matière naturelle ; un bois tendre reste le plus agréable en été.")}
      ${carteProduit("/terrasse-composite-lyon/", "Composite", "Pour l'aspect bois avec un entretien réduit au minimum.")}
      ${carteProduit("/terrasse-aluminium-lyon/", "Aluminium", "Le revêtement qui chauffe le moins, léger et antidérapant.")}
      ${carteProduit("/terrasse-carrelage-lyon/", "Carrelage", "Pour un style minéral, dans la continuité du sol intérieur.")}
    </div>
  </div>
</section>

<section id="comparatif" class="bloc">
  <div class="conteneur">
    <h2>Le comparatif complet</h2>
    <p class="chapo">Cinq critères, matériau par matériau. Lors du rendez-vous, nous apportons les échantillons pour les toucher, au soleil comme à l'ombre.</p>
    <details class="comp-plie comp-materiaux">
      <summary><h3>Bois, composite, aluminium, carrelage</h3><span class="comp-ouvrir">Voir le comparatif</span><span class="comp-fermer">Masquer le comparatif</span></summary>
      <div class="tableau-defile">
        <table class="comparatif comparatif-4">
          <thead><tr><th scope="col"><span class="vh">Critère</span></th>${MATERIAUX.map((m) => `<th scope="col">${m}</th>`).join("")}</tr></thead>
          <tbody>${LIGNES_MATERIAUX.map(([crit, ...v]) => `<tr><th scope="row">${crit}</th>${v.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
      <dl class="comp-liste">${LIGNES_MATERIAUX.map(([crit, ...v]) => `<div><dt>${crit}</dt>${v.map((x, i) => `<dd><b>${MATERIAUX[i]} :</b> ${x}</dd>`).join("")}</div>`).join("")}</dl>
    </details>
    <script>if(location.hash==='#comparatif')document.querySelector('.comp-materiaux').open=true;addEventListener('hashchange',()=>{if(location.hash==='#comparatif')document.querySelector('.comp-materiaux').open=true})</script>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Et ce qu'il y a dessous</h2>
      <p>Le revêtement ne fait pas tout : c'est la structure qui fait durer une terrasse. Tous nos revêtements se posent sur notre <a href="/structure-terrasse-lyon/">structure aluminium</a>, garantie 20 ans ; pour le bois et le carrelage, d'autres poses sont possibles.</p>
    </div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Le plan 3D de votre terrasse est offert : vous voyez le matériau et la teinte en situation avant de vous décider.</p>
    </div>
  </div>
</section>
${cta("Vous hésitez encore ?", "Nous venons chez vous avec les échantillons et nous vous orientons vers le revêtement le plus adapté à votre usage.")}`,
};

// ---------- Terrasse sur plots ----------

// ---------- Balcon ----------



// ---------- Pages « Types de projets » (refonte 11/11/2026, modèle des pages matériaux) ----------
const ICO = {
  bouclier: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  goutte: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  soleil: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  pied: '<path d="M8 20c-2 0-3-2-3-4 0-3 1-5 3-5s3 2 3 5c0 2-1 4-3 4z"/><path d="M16 14c-2 0-3-2-3-4 0-3 1-5 3-5s3 2 3 5c0 2-1 4-3 4z"/>',
  trappe: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',
  ombre: '<path d="M3 10 12 4l9 6"/><path d="M5 10v10M19 10v10"/><path d="M3 20h18"/>',
  niveau: '<path d="M3 17h18"/><path d="M6 17v-5M12 17V8M18 17v-3"/>',
  plume: '<path d="M20 4C10 4 5 9 5 19"/><path d="M5 19c5 0 10-2 12-8"/><path d="M9 15h5"/>',
  couches: '<path d="M12 3 3 8l9 5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  garde: '<path d="M3 20h18M4 20V9M20 20V9M3 9h18"/><path d="M8 9v11M12 9v11M16 9v11"/>',
  maison: '<path d="M3 21V10l9-6 9 6v11"/><path d="M3 21h18"/><path d="M9 21v-6h6v6"/>',
  demonte: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  plan: '<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  pente: '<path d="M3 20 21 8"/><path d="M6 18v-3M10 16v-5M14 13v-5M18 11V7"/>',
  abri: '<path d="M3 10h18"/><path d="M5 10v10M19 10v10"/><path d="M8 20v-5h8v5"/>',
  vent: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
  etanche: '<path d="M4 15h16"/><path d="M12 3s4 4.5 4 7.5a4 4 0 0 1-8 0C8 7.5 12 3 12 3z"/><path d="M4 19h16"/>',
};
const ico = (k) => `<span class="atout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[k]}</svg></span>`;
const NOM_MAT = { bois: ["/terrasse-bois-lyon/", "Bois"], composite: ["/terrasse-composite-lyon/", "Composite"], aluminium: ["/terrasse-aluminium-lyon/", "Lames aluminium"], carrelage: ["/terrasse-carrelage-lyon/", "Carrelage"] };
const PROJETS = [
  ["/terrasse-piscine-lyon/", "Terrasse de piscine", "alu-piscine-aspect-teck", "Une plage agréable pieds nus et sûre au bord de l'eau."],
  ["/terrasse-balcon-lyon/", "Terrasse de balcon", "ambiance-balcon-lames", "Un vrai sol sur votre balcon, sans travaux lourds."],
  ["/toit-terrasse-lyon/", "Toit-terrasse", "carrelage-toit-terrasse-montagnes", "Une toiture plate devenue pièce à vivre."],
  ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "pilotis-garde-corps-verre-salon", "De plain-pied avec la maison, malgré la pente."],
  ["/terrasse-sur-plots-lyon/", "Terrasse sur plots", "ambiance-dalles-sur-plots", "Une terrasse de niveau, sans couler de béton."],
];
const autresProjets = (ici) => `
<section class="bloc decouvrir">
  <div class="conteneur">
    <h2>Découvrez aussi nos autres projets</h2>
    <div class="grille grille-4 decouvrir-grille projets-grille">${PROJETS.filter(([c]) => c !== ici).map(([c, t, ph, x]) => `<a class="carte carte-lien carte-photo" href="${c}"><div class="vignette">${imgPhoto(ph, { sizes: "(max-width:700px) 40vw, (max-width:1060px) 23vw, 270px" })}</div><div class="carte-corps"><h3>${t}</h3><p>${x}</p><span class="fleche" aria-hidden="true">→</span></div></a>`).join("")}</div>
  </div>
</section>`;
// Classement des revêtements par projet : notes du comparateur (QUIZ_NOTES) × poids propres au projet.
const classer = (poids, mats) => mats.map((m) => [m, Object.entries(poids).reduce((s, [c, w]) => s + w * QUIZ_NOTES[c][["bois", "composite", "aluminium", "carrelage"].indexOf(m)], 0)])
  .sort((a, b) => b[1] - a[1] || ["bois", "composite", "aluminium", "carrelage"].indexOf(a[0]) - ["bois", "composite", "aluminium", "carrelage"].indexOf(b[0])).map(([m]) => m);
const pageProjet = ({ ici, fil = "Types de projets", extra = "", apres, h1, kicker, chapo, photo, position, actions, revTitre, revIntro, rev, poids, pose, atoutsTitre, atouts, galerieCat, titreGalerie, lyon, lyonCourt, faqTitre, faq, ctaTitre, ctaTexte }) => {
  const ordre = classer(poids, Object.keys(rev));
  return `
${heroPlein({ fil, h1, kicker, chapo, photo, position, actions: actions ?? `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#revetements">Quel revêtement ?</a>` })}

<section id="revetements" class="bloc">
  <div class="conteneur">
    <h2>${revTitre}</h2>
    <p class="chapo">${revIntro}</p>
    <div class="grille rev-projet rev-${ordre.length}">${ordre.map((m, i) => { const [url, nom] = NOM_MAT[m]; const [ph, txt] = rev[m]; return `<a class="carte carte-lien carte-photo rev-carte" href="${url}"><div class="vignette">${imgPhoto(ph, { sizes: "(max-width:700px) 44vw, (max-width:1060px) 30vw, 280px" })}</div><div class="carte-corps"><h3>${nom}</h3><p>${txt}</p><span class="fleche" aria-hidden="true">→</span></div></a>`; }).join("")}</div>
    ${pose}
    <p class="lien-comparateur"><a href="/nos-terrasses/#trouver">Trouver le revêtement idéal en 5 questions →</a></p>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>${atoutsTitre}</h2>
    <div class="grille grille-3 atouts-car">${atouts.map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>
${extra}
<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie(galerieCat, { titre: titreGalerie, legende: "Illustrations", limite: 12 })}
  </div>
</section>

<section id="faq-projet" class="bloc bloc-alt">
  <div class="conteneur lyon-faq">
  <div id="lyon" class="lyon-texte">
    <h2>${lyon[0]}</h2>
    <div class="en-long">${lyon.slice(1).map((p) => `<p>${p}</p>`).join("")}</div>
    <p class="en-court">${lyonCourt}</p>
    <p class="lien-methode"><a href="/#methode">Découvrir notre méthode →</a></p>
  </div>
  <div class="faq-liste">
    <h2>${faqTitre}</h2>
    ${faq.map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>
${cta(ctaTitre, ctaTexte)}
${apres ?? autresProjets(ici)}`;
};
const bandeau = (titre, long, court, lien, href, image) => `<div class="structure-bandeau"><a class="carte carte-structure" href="${href}"><div><span class="cs-kicker">Comment c'est posé</span><h3>${titre}</h3><p><span class="cs-long">${long}</span><span class="cs-court">${court}</span><span class="cs-lien">${lien}&nbsp;→</span></p></div><span class="cs-img">${image}</span></a></div>`;
const IMG_STRUCT_ALU = img("structure-aluminium", "Structure aluminium : plot réglable, rail aluminium et clip sous une lame de terrasse", 404);
const COMMUNES = "Caluire-et-Cuire, Rillieux-la-Pape, Villeurbanne, Écully, Tassin-la-Demi-Lune, Dardilly, Bron, Décines, Meyzieu, Beynost et Miribel";

// ---------- Terrasse de piscine ----------
const terrassePiscine = {
  title: "Terrasse de piscine à Lyon | Instant Terrasse",
  description: "Terrasse de piscine à Lyon : lames aluminium, bois, composite ou grès cérame, antidérapants, sur structure aluminium garantie 20 ans. Devis gratuit.",
  corps: pageProjet({
    ici: "/terrasse-piscine-lyon/",
    h1: ['<span class="pc-nowrap">Terrasse de piscine</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Plages de piscine à Lyon et dans sa région",
    chapo: "Autour d'un bassin, la terrasse se vit pieds nus : un revêtement qui accroche sous le pied, chauffe peu et supporte l'eau.",
    photo: "ambiance-plage-piscine", position: "45% 55%",
    revTitre: "Quel revêtement autour de la piscine ?", revIntro: "Au bord de l'eau, deux critères comptent plus que tout : ne pas glisser et ne pas se brûler les pieds.",
    poids: { adherence: 2, chaleur: 2, entretien: 1 },
    rev: {
      aluminium: ["alu-piscine-aspect-teck", "Le revêtement qui chauffe le moins, antidérapant grâce à un revêtement spécial."],
      carrelage: ["carrelage-bh-aspect-bois-gris-vue", "Des dalles antidérapantes, qui se prolongent jusqu'à la margelle."],
      bois: ["terrasse-kebony-piscine-debordement", "Un bois tendre reste le plus agréable sous le pied en plein été."],
      composite: ["composite-gris-piscine", "La gamme pleine masse chauffe peu et reste antidérapante, même mouillée."],
    },
    pose: bandeau("Sur structure aluminium", "Plots réglables et rails aluminium : rien ne pourrit sous la plage, l'eau s'écoule dessous et la terrasse reste plane au ras du bassin. Structure garantie 20 ans.", "Rails alu sur plots : rien ne pourrit. Structure garantie 20 ans.", "Voir la structure", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Une plage pensée pour le bord de l'eau",
    atouts: [
      ["soleil", "Agréable pieds nus", "Des matériaux sans écharde, choisis pour rester supportables au soleil."],
      ["bouclier", "Sûre au sortir du bain", "Des surfaces antidérapantes, même mouillées."],
      ["goutte", "Faite pour l'eau", "Sur structure aluminium : ni pourriture ni gonflement sous la plage."],
      ["trappe", "Accès au local technique", "Une trappe peut être intégrée pour garder l'accès à la pompe ou au volet."],
      ["niveau", "Au ras de la margelle", "Les plots réglables calent la terrasse au bon niveau, tout autour du bassin."],
      ["ombre", "Avec un coin d'ombre", "Une pergola ou un store banne peut être étudié dans le même projet."],
    ],
    galerieCat: ["terrasse-kebony-piscine-debordement", "alu-piscine-aspect-teck", "terrasse-accoya-gris-piscine", "composite-gris-piscine", "terrasse-thermofrene-piscine-mer", "alu-piscine-blanche-vue", "terrasse-bambou-ndurance-piscine-pierre", "alu-piscine-haricot", "terrasse-kebony-piscine-jardin", "composite-gris-piscine-jardin", "alu-piscine-grise", "terrasse-thermofrene-piscine-naturelle", "alu-piscine-jardin-tropical", "terrasse-accoya-naturel-bord-piscine", "alu-piscine-debordement-baie", "alu-piscine-toit-terrasse", "alu-piscine-carbet", "alu-piscine-debordement-mer"],
    titreGalerie: "Plages de piscine en situation",
    lyon: ["Votre terrasse de piscine à Lyon et dans sa région", `Nous venons chez vous, à Lyon et dans les communes voisines (${COMMUNES}), avec les échantillons : vous les touchez au soleil, au bord de votre bassin. Nous regardons les niveaux, la margelle, le local technique et l'écoulement de l'eau, puis nous dessinons votre plage en 3D.`, "Création ou rénovation d'une ancienne plage : le support existant est vérifié lors du rendez-vous, avant de choisir la structure."],
    lyonCourt: "Nous venons chez vous, à Lyon et dans sa région, avec les échantillons : niveaux, margelle et local technique sont vérifiés, puis votre plage est dessinée en 3D.",
    faqTitre: "Vos questions sur la terrasse de piscine",
    faq: [
      ["Quel revêtement chauffe le moins au bord de la piscine ?", "Les lames aluminium sont le revêtement qui chauffe le moins, moins que le composite et les bois durs. Un bois tendre reste aussi très agréable sous le pied en été."],
      ["Quel revêtement est le moins glissant ?", "Nos dalles de grès cérame et nos lames aluminium sont antidérapantes. La gamme composite pleine masse reste antidérapante, même mouillée."],
      ["Peut-on garder l'accès au local technique ?", "Oui. Une trappe peut être intégrée dans la plage pour accéder à la pompe, à la filtration ou au volet roulant."],
      ["Peut-on rénover une ancienne plage de piscine ?", "Oui. Nous vérifions l'état du support existant lors du rendez-vous, puis nous choisissons la structure adaptée : directement sur une dalle saine, ou sur plots pour reprendre les niveaux."],
      ["Quel entretien pour une plage de piscine ?", "Aucun traitement pour l'aluminium et le grès cérame, ni saturateur ni ponçage pour le composite. Pour le bois, deux nettoyages par an au minimum."],
    ],
    ctaTitre: "Un projet de plage de piscine ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

// ---------- Terrasse de balcon ----------
const terrasseBalcon = {
  title: "Terrasse de balcon à Lyon | Instant Terrasse",
  description: "Habiller un balcon à Lyon : lames aluminium légères, composite, bois ou dalles sur plots, posés sans percer l'étanchéité. Devis gratuit.",
  corps: pageProjet({
    ici: "/terrasse-balcon-lyon/",
    h1: ['<span class="pc-nowrap">Terrasse de balcon</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Sols de balcon à Lyon et dans sa région",
    chapo: "Un carrelage fatigué ou une dalle béton grise : le balcon devient une vraie pièce dehors, posé sur l'existant.",
    photo: "ambiance-balcon-lames", position: "55% 50%",
    revTitre: "Quel revêtement pour un balcon ?", revIntro: "Sur un balcon, on cherche un sol léger, facile à vivre et dans le style de la façade.",
    poids: { legerete: 2, entretien: 1, taches: 1 },
    rev: {
      aluminium: ["alu-piscine-cour", "Lames et structure tout aluminium : l'ensemble le plus léger, sans entretien."],
      composite: ["composite-gris-piscine-jardin", "L'aspect du bois, sans saturateur ni ponçage, et une bonne résistance aux taches."],
      bois: ["terrasse-thermofrene-balcon", "La chaleur du vrai bois, pour adoucir un balcon en béton."],
      carrelage: ["carrelage-gris-garde-corps-verre-depoli", "Des dalles de grès cérame, dans la continuité du sol intérieur."],
    },
    pose: bandeau("Posé sur l'existant", "Plots réglables, avec ou sans rails aluminium, posés sur le sol actuel : on ne casse rien et on ne perce pas l'étanchéité. Les plots rattrapent la pente d'écoulement du balcon.", "Sur plots, sans casser ni percer l'étanchéité.", "Voir les structures", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Un balcon transformé, sans gros travaux",
    atouts: [
      ["couches", "Posé sur l'existant", "Les lames ou les dalles se posent sur le sol actuel, sans le casser."],
      ["etanche", "L'étanchéité préservée", "Les plots reposent sur le support : rien ne la traverse."],
      ["niveau", "Un sol de niveau", "Les plots réglables rattrapent la pente du balcon, jusqu'au seuil de la porte-fenêtre."],
      ["plume", "Léger", "Des matériaux choisis pour ne pas surcharger la dalle du balcon."],
      ["garde", "Avec le garde-corps", "Un garde-corps aluminium neuf peut être prévu dans le même projet."],
      ["plan", "Dessiné en 3D", "Vous voyez le revêtement et la teinte sur votre balcon avant de décider."],
    ],
    galerieCat: ["ambiance-balcon-lames", "terrasse-thermofrene-balcon", "terrasse-accoya-naturel-balcon", "gc-maison-balcon-lisses", "gc-maison-verre-depoli-carrelage", "gc-collectif-verre-depoli-balcons", "structure-lames-alu-balcon-dessous", "carrelage-gris-garde-corps-verre-depoli"],
    titreGalerie: "Balcons en situation",
    lyon: ["Votre terrasse de balcon à Lyon et dans sa région", `Appartement en ville, résidence récente ou maison : nous venons chez vous, à Lyon et dans les communes voisines (${COMMUNES}), avec les échantillons. Nous mesurons le balcon, vérifions le support, la hauteur du seuil et l'écoulement de l'eau.`, "En copropriété, le règlement peut encadrer l'aspect du sol ou du garde-corps : nous vous aidons à préparer la demande au syndic si besoin."],
    lyonCourt: "Nous venons chez vous, à Lyon et dans sa région, avec les échantillons : mesures, support, seuil et écoulement de l'eau sont vérifiés.",
    faqTitre: "Vos questions sur le balcon",
    faq: [
      ["Faut-il casser l'ancien carrelage du balcon ?", "Non, en général. Les plots se posent sur le sol existant, s'il est sain : le nouveau revêtement vient par-dessus."],
      ["L'étanchéité du balcon est-elle percée ?", "Non. Les plots reposent sur le support, sans fixation qui traverse l'étanchéité."],
      ["Quel revêtement est le plus léger ?", "Les lames aluminium sur structure aluminium forment l'ensemble le plus léger."],
      ["Et si le seuil de la porte-fenêtre est bas ?", "La hauteur disponible est mesurée lors du rendez-vous : elle oriente le choix entre dalles sur plots et lames sur structure."],
      ["Faut-il l'accord de la copropriété ?", "Selon le règlement de copropriété, l'aspect du sol ou du garde-corps peut être encadré. Mieux vaut interroger le syndic avant de commander."],
    ],
    ctaTitre: "Un projet de balcon ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

// ---------- Toit-terrasse ----------
const toitTerrasse = {
  title: "Aménager un toit-terrasse à Lyon | Instant Terrasse",
  description: "Aménager un toit-terrasse à Lyon : lames aluminium, bois, composite ou dalles sur plots posés sur l'étanchéité, garde-corps, pergola. Plan 3D offert.",
  corps: pageProjet({
    ici: "/toit-terrasse-lyon/",
    h1: ['<span class="pc-nowrap">Toit-terrasse</span>', 'aménagé <span class="lyon-l">à Lyon</span>'], kicker: "Toitures plates aménagées à Lyon et dans sa région",
    chapo: "Une toiture plate devient une pièce à vivre : le revêtement repose sur des plots posés sur l'étanchéité, sans la percer.",
    photo: "carrelage-toit-terrasse-montagnes", position: "55% 60%",
    revTitre: "Quel revêtement pour un toit-terrasse ?", revIntro: "En hauteur, le poids compte, et le soleil tape plus fort qu'au jardin.",
    poids: { legerete: 2, chaleur: 1, durabilite: 1 },
    rev: {
      aluminium: ["alu-piscine-toit-terrasse", "L'ensemble le plus léger, et le revêtement qui chauffe le moins."],
      bois: ["terrasse-bambou-xtreme-toit", "Une ambiance chaleureuse, agréable sous le pied même en plein été."],
      composite: ["composite-gris-piscine", "L'aspect du bois, sans saturateur ni ponçage."],
      carrelage: ["carrelage-beige-pergola-toit-fixe", "Grès cérame de 2 cm sur plots : posé à sec, en grands formats."],
    },
    pose: bandeau("Sur plots, sans percer l'étanchéité", "Les plots reposent sur la membrane, avec une protection adaptée : aucune fixation ne la traverse. Ils rattrapent la pente de la toiture, et l'eau continue de s'écouler dessous.", "Plots posés sur l'étanchéité, sans la percer.", "Voir les structures", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Un espace en hauteur, pensé pour durer",
    atouts: [
      ["etanche", "L'étanchéité intacte", "Aucune fixation ne traverse la membrane."],
      ["niveau", "De niveau malgré la pente", "Les plots réglables rattrapent la pente d'écoulement de la toiture."],
      ["goutte", "L'eau s'évacue dessous", "Les évacuations restent accessibles et la terrasse sèche vite."],
      ["plume", "Léger", "Des revêtements choisis selon ce que la toiture peut porter."],
      ["garde", "Sécurisé", "Un garde-corps aluminium, vitré ou à lisses, pour profiter de la vue."],
      ["ombre", "Ombre et intimité", "Pergola, store banne ou pare-vue pour vivre le toit à toute heure."],
    ],
    galerieCat: ["carrelage-toit-terrasse-montagnes", "terrasse-bambou-xtreme-toit", "alu-piscine-toit-terrasse", "carrelage-beige-pergola-toit-fixe", "store-banne-toit-terrasse", "ambiance-toit-terrasse", "gc-maison-terrasse-vue", "gc-collectif-verre-lisses-terrasse"],
    titreGalerie: "Toits-terrasses en situation",
    lyon: ["Votre toit-terrasse à Lyon et dans sa région", `Appartement, maison ou extension : nous venons chez vous, à Lyon et dans les communes voisines (${COMMUNES}). Nous regardons l'accès au toit, l'état de l'étanchéité et les évacuations, puis nous dessinons l'aménagement en 3D : coin repas, salon, plantations.`, "Une toiture n'est pas toujours prévue pour être accessible : sa capacité à porter une terrasse est vérifiée avant tout projet."],
    lyonCourt: "Nous venons chez vous, à Lyon et dans sa région : accès, étanchéité et évacuations sont vérifiés, puis l'aménagement est dessiné en 3D.",
    faqTitre: "Vos questions sur le toit-terrasse",
    faq: [
      ["Peut-on aménager n'importe quel toit plat ?", "Non : la toiture doit pouvoir porter la terrasse et ses occupants. Ce point est vérifié avant tout projet, avec l'état de l'étanchéité."],
      ["L'étanchéité est-elle percée ?", "Non. Les plots reposent sur la membrane, avec une protection adaptée : aucune fixation ne la traverse."],
      ["Quel revêtement est le plus léger ?", "Les lames aluminium sur structure aluminium forment l'ensemble le plus léger."],
      ["Comment l'eau s'évacue-t-elle ?", "Sous le revêtement : les plots laissent l'eau rejoindre les évacuations existantes, qui restent accessibles."],
      ["Faut-il un garde-corps ?", "Pour un toit accessible, un garde-corps est nécessaire. Nous proposons des garde-corps aluminium à lisses, à barreaux ou vitrés."],
    ],
    ctaTitre: "Un projet de toit-terrasse ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

// ---------- Terrasse sur pilotis ----------
const terrassePilotis = {
  title: "Terrasse sur pilotis à Lyon | Instant Terrasse",
  description: "Terrasse sur pilotis à Lyon : de plain-pied avec la maison sur un terrain en pente. Lames aluminium, bois ou composite, garde-corps aluminium.",
  corps: pageProjet({
    ici: "/terrasse-sur-pilotis-lyon/",
    h1: ['<span class="pc-nowrap">Terrasse sur pilotis</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses surélevées à Lyon et dans sa région",
    chapo: "Jardin en contrebas ou en pente : la terrasse sur pilotis sort de plain-pied depuis le séjour et libère de l'espace dessous.",
    photo: "pilotis-garde-corps-verre-salon", position: "65% 50%",
    revTitre: "Quel revêtement pour une terrasse surélevée ?", revIntro: "En hauteur, on choisit un platelage léger et étanche, qui se voit aussi d'en dessous.",
    poids: { legerete: 1, durabilite: 1, entretien: 1 },
    rev: {
      aluminium: ["structure-lames-alu-balcon-dessous", "Des lames étanches : idéal pour une terrasse surélevée, et l'espace dessous reste au sec."],
      bois: ["terrasse-kebony-surelevee", "Le vrai bois, en essences phares sur structure aluminium."],
      composite: ["composite-gris-piscine-jardin", "L'aspect du bois, sans saturateur ni ponçage."],
    },
    pose: bandeau("Sur poteaux et poutres", "Au-delà de la hauteur des plots, la terrasse repose sur des poteaux et des poutres, sur des fondations adaptées au sol. Le revêtement se pose ensuite comme sur une terrasse au sol.", "Poteaux et poutres sur fondations adaptées.", "Voir les structures", "/structure-terrasse-lyon/", imgPhoto("pilotis-poteaux-acier-escalier", { sizes: "(max-width:700px) 120px, 300px" })),
    atoutsTitre: "Le terrain n'est plus un obstacle",
    atouts: [
      ["maison", "De plain-pied avec la maison", "On sort du séjour sans marche, avec la surface d'une vraie terrasse."],
      ["pente", "Pente et talus rattrapés", "Les poteaux reprennent les différences de niveau, sans terrassement lourd."],
      ["abri", "Un espace abrité dessous", "Le dessous protège une voiture, un salon de jardin ou le bois de chauffage."],
      ["garde", "Sécurisée", "Un garde-corps aluminium à lisses, à barreaux, vitré ou décoratif."],
      ["etanche", "Dessous au sec", "Avec des lames aluminium étanches, l'espace sous la terrasse reste protégé de la pluie."],
      ["plan", "Étudiée dans son ensemble", "Poteaux, garde-corps, escalier vers le jardin : tout est dessiné en 3D."],
    ],
    galerieCat: "pilotis",
    titreGalerie: "Terrasses sur pilotis en situation",
    lyon: ["Votre terrasse sur pilotis à Lyon et dans sa région", `Maison sur un terrain en pente, rez-de-jardin en contrebas, habitation sur plusieurs niveaux : nous venons chez vous, à Lyon et dans les communes voisines (${COMMUNES}). Nous relevons les hauteurs, l'accès au jardin et l'implantation souhaitée.`, "Une terrasse surélevée est une construction à part entière : selon sa hauteur et sa surface, une déclaration préalable ou un permis peut être nécessaire. Nous regardons la règle de votre commune avec vous."],
    lyonCourt: "Nous venons chez vous, à Lyon et dans sa région : hauteurs, accès au jardin et implantation sont relevés, puis la terrasse est dessinée en 3D.",
    faqTitre: "Vos questions sur la terrasse sur pilotis",
    faq: [
      ["Faut-il une autorisation pour une terrasse surélevée ?", "Souvent, oui : selon la hauteur et la surface, une déclaration préalable de travaux ou un permis de construire peut être demandé. Nous vérifions la règle de votre commune avec vous."],
      ["Un garde-corps est-il obligatoire ?", "Dès que la hauteur de chute devient importante, un garde-corps est indispensable. Nous proposons des garde-corps aluminium sur mesure."],
      ["Peut-on utiliser l'espace sous la terrasse ?", "Oui : abri de voiture, rangement, coin salon. Avec des lames aluminium étanches, il reste au sec."],
      ["Quel revêtement pour une terrasse sur pilotis ?", "Lames aluminium, bois ou composite. Les lames aluminium sont étanches et légères, idéales pour une terrasse surélevée."],
    ],
    ctaTitre: "Un projet de terrasse surélevée ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

// ---------- Terrasse sur plots ----------
const terrassePlots = {
  title: "Terrasse sur plots à Lyon | Instant Terrasse",
  description: "Terrasse sur plots réglables à Lyon : dalles de grès cérame ou lames sur structure aluminium, sans fondation, sur dalle, sol stabilisé ou toit-terrasse.",
  corps: pageProjet({
    ici: "/terrasse-sur-plots-lyon/",
    h1: ['<span class="pc-nowrap">Terrasse sur plots</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Dalles et lames sur plots réglables à Lyon",
    chapo: "Des plots réglables posés sur le support existant : une terrasse de niveau, sans couler de béton, et l'eau s'écoule dessous.",
    photo: "ambiance-dalles-sur-plots", position: "55% 55%",
    revTitre: "Quel revêtement sur plots ?", revIntro: "Tous nos revêtements se posent sur plots : directement pour le grès cérame, ou sur une structure aluminium pour les lames.",
    poids: { durabilite: 1, entretien: 1 },
    rev: {
      carrelage: ["carrelage-bh-aspect-bois-gris-jardin", "Grès cérame de 2 cm, directement sur plots ou sur rails aluminium."],
      aluminium: ["alu-piscine-cour", "Lames aluminium sur structure aluminium : ne pourrit pas, ne bouge pas."],
      composite: ["composite-gris-piscine-jardin", "L'aspect du bois, sans saturateur ni ponçage."],
      bois: ["terrasse-kebony-piscine-jardin", "Nos essences phares sur structure aluminium."],
    },
    pose: `<div class="structure-bandeau structure-duo"><p class="cs-kicker">Comment c'est posé</p><div class="duo-grille"><a class="carte carte-structure" href="/terrasse-carrelage-lyon/"><div><h3>Plots seuls</h3><p><span class="cs-long">Pour les dalles de grès cérame sur un support plan et stable : chaque dalle repose sur des plots placés à ses angles.</span><span class="cs-court">Dalles sur plots, sur un support stable.</span><span class="cs-lien">Voir le carrelage&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("carrelage-plots-schema", { sizes: "(max-width:700px) 120px, 300px" })}</span></a><a class="carte carte-structure" href="/structure-terrasse-lyon/"><div><h3>Plots et rails aluminium</h3><p><span class="cs-long">Pour les lames, ou sur un sol moins régulier : des rails aluminium sur les plots rendent la terrasse plus rigide et parfaitement plane. Garantie 20 ans.</span><span class="cs-court">Rails alu sur plots. Garantie 20 ans.</span><span class="cs-lien">Voir la structure&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("carrelage-structure-alu-rails-plots", { sizes: "(max-width:700px) 120px, 300px" })}</span></a></div></div>`,
    atoutsTitre: "Pourquoi poser sur plots ?",
    atouts: [
      ["couches", "Sans fondation", "Les plots se posent sur une dalle béton, du concassé ou une étanchéité de toit-terrasse."],
      ["niveau", "De niveau", "Chaque plot se règle en hauteur pour rattraper les pentes et les différences de niveau."],
      ["goutte", "L'eau s'écoule dessous", "Le revêtement est surélevé : pas de flaque, et la terrasse sèche vite."],
      ["demonte", "Démontable", "Une dalle ou une lame se retire pour atteindre un regard ou une descente d'eau."],
      ["maison", "De plain-pied", "Le niveau de la terrasse s'aligne sur le seuil de la porte-fenêtre."],
      ["plan", "Dessinée en 3D", "Vous voyez la terrasse et le revêtement en situation avant de décider."],
    ],
    galerieCat: ["ambiance-dalles-sur-plots", "carrelage-structure-alu-rails-plots", "structure-plot-rail-lame", "structure-rails-plots-detail", "carrelage-bh-sureleve-gazon", "carrelage-bh-pergola-cour", "structure-plot-reglable", "carrelage-structure-alu-calepinage"],
    titreGalerie: "Terrasses et plots en situation",
    lyon: ["Votre terrasse sur plots à Lyon et dans sa région", `Nous venons chez vous, à Lyon et dans les communes voisines (${COMMUNES}), pour voir le support existant, les hauteurs, les seuils et l'écoulement de l'eau. Selon le support et le revêtement, nous choisissons entre plots seuls et plots avec rails aluminium.`],
    lyonCourt: "Nous venons chez vous, à Lyon et dans sa région : support, hauteurs et écoulement de l'eau sont vérifiés avant de choisir la pose.",
    faqTitre: "Vos questions sur la terrasse sur plots",
    faq: [
      ["Peut-on poser une terrasse sur plots sur une dalle existante ?", "Oui, si la dalle est saine : son état et ses niveaux sont vérifiés lors du rendez-vous."],
      ["Peut-on poser sur plots directement sur la terre ?", "Les plots se posent sur un sol stabilisé, par exemple du concassé, ou sur une dalle : pas sur de la terre meuble."],
      ["Quelle hauteur peut-on rattraper ?", "Avec des réhausses, les plots montent jusqu'à environ 40 cm. Au-delà, la terrasse repose sur des poteaux et des poutres : c'est la terrasse sur pilotis."],
      ["Plots seuls ou avec rails aluminium ?", "Les plots seuls conviennent aux dalles de grès cérame sur un support plan. Pour les lames, ou sur un sol moins régulier, les rails aluminium rendent la terrasse plus rigide et plus plane."],
      ["L'eau s'évacue-t-elle sous la terrasse ?", "Oui : le revêtement est surélevé, l'eau s'écoule dessous vers les évacuations, et la terrasse sèche vite."],
    ],
    ctaTitre: "Un projet de terrasse sur plots ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

// ---------- Terrasse de camping / HPA (Professionnels, reprise de l'ancien site, 14/11/2026) ----------
const PROJETS_HPA = [
  ["Équiper un nouveau parc", "Une identité visuelle homogène dès l'installation des nouveaux hébergements, avec une terrasse adaptée à chaque modèle."],
  ["Rénover un parc existant", "Remplacer progressivement les terrasses vieillissantes et moderniser l'apparence des hébergements, en étudiant ce qui peut être conservé."],
  ["Accompagner une montée en gamme", "Valoriser les mobil-homes, lodges et chalets premium avec des finitions soignées."],
  ["Les configurations particulières", "Dimensions spécifiques, terrain en pente, hébergements différents : chaque cas est étudié."],
];
const terrasseCamping = {
  title: "Terrasse de mobil-home et camping | Instant Terrasse",
  description: "Terrasses de mobil-homes, chalets et lodges pour campings : lames aluminium sans entretien, bois ou composite. Basés à Lyon, livraison partout en France.",
  corps: pageProjet({
    ici: "/terrasse-camping-hpa/", fil: "Professionnels",
    h1: ['<span class="pc-nowrap">Terrasses de mobil-homes</span>', "pour campings et HPA"], kicker: "Campings, chalets et lodges",
    chapo: "Des terrasses durables et homogènes pour équiper, rénover ou faire monter en gamme votre parc d'hébergements.",
    photo: "alu-escalier-maison-bois", position: "50% 60%",
    revTitre: "Quel revêtement pour une terrasse de mobil-home ?", revIntro: "Pour un parc d'hébergements, le matériau se choisit sur plusieurs années : entretien, durabilité et homogénéité comptent autant que l'aspect.",
    poids: { entretien: 2, durabilite: 2, legerete: 2 },
    rev: {
      aluminium: ["alu-terrasse-salon-parasol", "Ne pourrit pas, ne bouge pas, sans traitement : la même terrasse sur tout le parc."],
      bois: ["terrasse-thermopin-jardin-pins", "L'aspect naturel et chaleureux, pour une ambiance authentique et intégrée au paysage."],
      composite: ["composite-brun-transats", "L'aspect du bois, un entretien réduit et des teintes régulières d'un emplacement à l'autre."],
      carrelage: ["carrelage-bh-pergola-cour", "Une esthétique minérale pour les lodges et quartiers premium contemporains."],
    },
    pose: bandeau("Sur structure aluminium", "Plots réglables et rails aluminium : la terrasse suit la pente de l'emplacement et s'aligne sur l'entrée de l'hébergement. Rien ne pourrit dessous. Structure garantie 20 ans.", "Rails alu sur plots réglables. Structure garantie 20 ans.", "Voir la structure", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Pourquoi l'aluminium pour un camping ?",
    atouts: [
      ["bouclier", "Ne pourrit pas, ne bouge pas", "L'aluminium est inerte : ni pourriture, ni insectes, ni champignons, et les lames restent stables d'une saison à l'autre."],
      ["goutte", "Sans traitement", "Pas de saturateur à refaire chaque printemps sur tout le parc : pour un exploitant, l'entretien est réduit au minimum."],
      ["plan", "Un parc homogène", "Les mêmes lames et la même teinte sur tous les emplacements : une identité visuelle cohérente, hébergement après hébergement."],
      ["plume", "Léger", "Une structure légère, adaptée aux installations existantes et aux terrasses surélevées."],
      ["pied", "Antidérapant", "Un revêtement spécial limite les glissades, appréciable au retour de la piscine ou après la pluie."],
      ["demonte", "100 % recyclable", "Lames et structure en aluminium, recyclables en fin de vie."],
    ],
    extra: `
<section id="projets-hpa" class="bloc">
  <div class="conteneur">
    <h2>Équiper, rénover, valoriser votre parc</h2>
    <p class="chapo">Chaque camping a ses contraintes : nombre d'hébergements, configuration des emplacements, niveau de gamme et calendrier.</p>
    <div class="grille grille-4">${PROJETS_HPA.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>`,
    galerieCat: ["alu-escalier-maison-bois", "alu-terrasse-salon-parasol", "terrasse-kebony-surelevee", "alu-terrasse-couverte", "alu-salon-garde-corps", "alu-piscine-aspect-teck", "alu-spa-jardin", "composite-brun-transats", "terrasse-thermopin-jardin-pins", "terrasse-thermopin-estrade", "carrelage-bh-pergola-cour", "structure-plot-rail-lame"],
    titreGalerie: "Terrasses en situation",
    lyon: ["Un projet étudié sur place", "Nous venons sur votre site pour regarder ce qui compte : le type d'hébergements (mobil-homes, chalets, lodges, bungalows), la configuration des emplacements (pente, niveaux, accès), le niveau de gamme, la fréquence d'utilisation, l'entretien et l'identité de votre camping.", "Vous recevez un plan 3D et un devis détaillé. Instant Terrasse est basé dans la région lyonnaise ; pour les projets d'hôtellerie de plein air, nous livrons partout en France."],
    lyonCourt: "Nous étudions votre site sur place, puis vous recevez un plan 3D et un devis détaillé. Basés près de Lyon, nous livrons les campings partout en France.",
    faqTitre: "Vos questions sur les terrasses de camping",
    faq: [
      ["Quelle est la meilleure terrasse pour un camping ?", "Il n'y a pas de matériau universel : tout dépend du niveau de gamme, de l'usage, de l'entretien souhaité et de l'environnement. Pour équiper un parc avec peu d'entretien, l'aluminium est souvent le plus adapté ; le bois apporte une ambiance plus naturelle."],
      ["Peut-on installer une terrasse aluminium devant un mobil-home ?", "La faisabilité dépend de la hauteur du mobil-home, de son implantation et du terrain : chaque emplacement est étudié sur place."],
      ["Bois ou aluminium pour un camping ?", "Le bois privilégie l'aspect naturel et chaleureux. L'aluminium se choisit pour sa stabilité, son entretien réduit et son allure contemporaine. Le choix dépend du positionnement de votre camping."],
      ["Proposez-vous des terrasses pour les quartiers premium ?", "Oui : matériaux, teintes et finitions sont choisis pour accompagner la montée en gamme de vos lodges, chalets ou mobil-homes."],
      ["Pouvez-vous remplacer des terrasses existantes ?", "Oui. L'état des terrasses et de leur structure est d'abord étudié, pour décider s'il vaut mieux rénover, remplacer certains éléments ou repartir sur une nouvelle terrasse."],
      ["Intervenez-vous partout en France ?", "Instant Terrasse est basé dans la région lyonnaise. Pour les projets d'hôtellerie de plein air, nous livrons partout en France."],
    ],
    ctaTitre: "Un projet de terrasses pour votre camping ?", ctaTexte: "Indiquez-nous le type d'établissement, le nombre d'hébergements concernés, la localisation et votre calendrier : nous vous rappelons pour en parler.",
    apres: `
<section class="bloc decouvrir">
  <div class="conteneur">
    <h2>Voir aussi</h2>
    <div class="grille grille-4 decouvrir-grille projets-grille">${[["/terrasse-restaurant-chr-lyon/", "Restaurants, cafés, hôtels", "terrasse-kebony-jardin", "Des terrasses robustes pour l'accueil du public."], ["/terrasse-aluminium-lyon/", "Terrasse aluminium", "alu-piscine-aspect-teck", "Des lames stables et sans entretien."], ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "pilotis-terrain-pente", "Sécuriser les terrasses surélevées."], ["/pergolas-lyon/", "Pergolas", "terrasse-bambou-ndurance-pergola", "De l'ombre sur la terrasse."]].map(([c, t, ph, x]) => `<a class="carte carte-lien carte-photo" href="${c}"><div class="vignette">${imgPhoto(ph, { sizes: "(max-width:700px) 40vw, (max-width:1060px) 23vw, 270px" })}</div><div class="carte-corps"><h3>${t}</h3><p>${x}</p><span class="fleche" aria-hidden="true">→</span></div></a>`).join("")}</div>
  </div>
</section>`,
  }),
};

// ---------- Carport (refonte 14/11/2026, fiches produit fournisseur fournies par Antoine) ----------
const TOITURES_CARPORT = [
  ["Panneaux sandwich", "Une toiture pleine et opaque : aluminium thermolaqué de part et d'autre d'un cœur en polystyrène extrudé, avec une sous-face lisse.", ["Jusqu'à 7 × 5 m (35 m²)", "Jusqu'à 3 m de hauteur", "Jusqu'à 200 kg/m² de neige*"]],
  ["Bac acier", "Une tôle d'acier nervurée de 0,8 mm, avec un régulateur de condensation sous la tôle.", ["Jusqu'à 7 × 5 m (35 m²)", "Jusqu'à 3 m de hauteur", "Jusqu'à 200 kg/m² de neige*"]],
  ["Toile fixe", "Une toile technique opaque et imperméable, tendue sur l'ossature : un aspect plus léger.", ["Jusqu'à 6 × 4 m (24 m²)", "Jusqu'à 2,6 m de hauteur", "Jusqu'à 130 kg/m² de neige*"]],
];
const carport = {
  title: "Carport aluminium sur mesure à Lyon | Instant Terrasse",
  description: "Carport aluminium à Lyon : panneaux sandwich, bac acier ou toile, adossé ou autoporté, jusqu'à 35 m², côtés fermés et LED en option. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ['<span class="pc-nowrap">Carport aluminium</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Abri voiture adossé ou autoporté",
  chapo: "Une ossature aluminium sur mesure et la toiture de votre choix : votre voiture à l'abri de la pluie, de la grêle et du soleil, sans construire de garage.",
  photo: "carport-garage-gravier", position: "55% 45%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#toitures">Les toitures</a>` })}

<section id="toitures" class="bloc">
  <div class="conteneur">
    <h2>Trois toitures au choix</h2>
    <p class="chapo">La même ossature en aluminium thermolaqué, trois façons de la couvrir.</p>
    <div class="grille grille-3">${TOITURES_CARPORT.map(([t, x, pts]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><ul class="puces">${pts.map((q) => `<li>${q}</li>`).join("")}</ul></div>`).join("")}</div>
    <p class="note-carport">*Charge de neige maximale pour les plus petites largeurs ; elle diminue quand la largeur augmente. Données fabricant.</p>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Pensé pour votre allée</h2>
    <div class="grille grille-3 atouts-car">${[
      ["maison", "Adossé ou autoporté", "Fixé contre la maison sur deux poteaux, ou indépendant sur quatre : en îlot, dans un angle ou entre deux murs."],
      ["niveau", "Hauteurs sur mesure", "La hauteur de chaque poteau se règle, pour suivre la pente de l'allée ou passer sous un débord de toit."],
      ["goutte", "L'eau part par les poteaux", "Une gouttière intégrée court tout autour de la toiture et l'eau s'évacue au pied des poteaux."],
      ["plan", "Dimensions sur mesure", "Une ou deux voitures, un camping-car : le carport est dessiné pour votre emplacement, avec un débord de toiture possible jusqu'à 1,2 m."],
      ["bouclier", "Aluminium thermolaqué", "Ni rouille, ni peinture à refaire : six teintes au choix, et toute autre teinte RAL en option."],
      ["couches", "Fabriqué en France", "Conçu et fabriqué en France, sur mesure, à partir de vos dimensions."],
    ].map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="options" class="bloc">
  <div class="conteneur">
    <h2>Fermer un ou plusieurs côtés</h2>
    <p class="chapo">Pour couper le vent et la pluie battante, cacher le vis-à-vis ou créer un box de rangement. Fermetures dans la teinte de l'ossature, autres teintes RAL en option.</p>
    <div class="grille grille-3">${[
      ["Claustra toile", "Fixe ou coulissante. Une toile technique qui bloque jusqu'à 96 % des UV, tout en laissant voir dehors depuis l'intérieur.", "Jusqu'à 7 m de long (6 m en coulissant), 2,6 m de haut"],
      ["Claustra à lames", "Fixe ou coulissante, avec des lames aluminium inclinées : 85 % ou 100 % d'occultation au choix. Lames effet chêne clair en option.", "Jusqu'à 7 m de long (6 m en coulissant), 2,6 m de haut"],
      ["Brise-vue grandes lames", "Fixe, en lames aluminium horizontales ou verticales, contre un mur ou entre deux poteaux. Lames effet chêne clair en option.", "Jusqu'à 3 m de haut"],
      ["Panneau aspect bois", "Des lames effet chêne clair qui ferment complètement le côté. Une porte coulissante peut y être intégrée pour fermer un box.", "Jusqu'à 7 m de long, 3 m de haut"],
      ["Panneau plein", "Des panneaux sandwich laqués, pour un côté entièrement fermé, dans l'une des six teintes standard.", "Jusqu'à 7 m de long, 3 m de haut"],
      ["Vitrage ou store zippé", "Un vitrage coulissant en verre trempé de 10 mm coupe le vent en gardant la lumière ; un store vertical zippé se baisse seulement quand il le faut.", "Jusqu'à 6 m de large, 3 m de haut"],
    ].map(([t, x, d]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><p class="dim-carport">${d}</p></div>`).join("")}</div>
    <div class="carte carte-led"><h3>Éclairage LED</h3><p>Un éclairage intégré à la structure, en blanc chaud ou blanc neutre selon le modèle, avec détecteur de mouvement, interrupteur mural sans fil ou télécommande.</p></div>
  </div>
</section>

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("carport", { titre: "Carports en situation", legende: "Illustrations" })}
  </div>
</section>

<section id="faq-carport" class="bloc">
  <div class="conteneur lyon-faq">
  <div id="autorisation" class="lyon-texte">
    <h2>Faut-il une autorisation ?</h2>
    <p>Un carport crée de l'emprise au sol. Dans le cas général :</p>
    <ul class="puces"><li>jusqu'à 5 m² : pas de formalité, s'il n'est pas accolé à la maison ;</li><li>de 5 à 20 m² : déclaration préalable ;</li><li>au-delà de 20 m² : permis de construire.</li></ul>
    <p>En zone urbaine d'une commune couverte par un PLU, si celui-ci considère le carport comme une extension de la maison, la déclaration préalable suffit jusqu'à 40 m². Le PLU peut aussi imposer des règles d'aspect et de distance aux limites : renseignez-vous auprès du service urbanisme de votre mairie (source : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36773" rel="noopener">service-public.gouv.fr</a>).</p>
    <p>Nous venons chez vous, à Lyon et dans sa région (${COMMUNES}), pour voir l'emplacement, l'accès, le sol et les hauteurs. Nous vous indiquons la démarche, et le plan 3D de votre carport est offert.</p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le carport</h2>
    ${[
      ["Quelle charge de neige supporte un carport ?", "Selon la toiture et la largeur : jusqu'à 200 kg/m² pour les plus petites largeurs, moins pour les plus grandes. Nous vérifions la charge de neige de votre commune, selon sa zone et son altitude, avant de dimensionner le carport."],
      ["Comment le carport est-il fixé au sol ?", "Les poteaux sont ancrés dans un support en béton. Le sol est vérifié lors du rendez-vous, avec la tenue au vent selon l'emplacement."],
      ["Où va l'eau de pluie ?", "La toiture est légèrement inclinée vers une gouttière intégrée sur tout le pourtour ; l'eau descend dans les poteaux et s'évacue à leur pied."],
      ["Peut-on fermer les côtés ?", "Oui : claustra toile ou à lames, brise-vue, panneaux aspect bois ou pleins, vitrage coulissant ou store vertical, sur un ou plusieurs côtés."],
      ["Peut-on créer un box de rangement ?", "Oui : en fermant une partie du carport avec des panneaux aspect bois ou pleins. Une porte coulissante peut être intégrée aux panneaux aspect bois, pour ranger vélos, outils ou tondeuse à côté de la voiture."],
      ["Quelle différence avec une pergola à toit fixe ?", "C'est la même famille de produit : le carport est dimensionné pour abriter une voiture, la pergola à toit fixe pour couvrir une terrasse."],
    ].map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les autres solutions</h2>
    <div class="grille grille-3">${autresPergolas("/carport-lyon/").slice(0, 3).map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div>
  </div>
</section>
${cta("Un projet de carport ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Pergolas bioclimatique et toile rétractable (refonte 15/11/2026, fiches produit fournisseur) ----------
const FERMETURES_PERGOLA = [
  ["Store vertical zippé", "La toile est tenue dans des coulisses : elle reste tendue et rejette jusqu'à 96 % de l'énergie solaire, en gardant la vue vers l'extérieur. Bandeau transparent en option.", "Jusqu'à 6 m de large, 3 m de haut"],
  ["Vitrage panoramique", "Du verre trempé de sécurité de 10 mm sur rails coulissants, sans montant entre les vantaux, avec un rail bas compatible avec un fauteuil roulant. Se pose contre un mur ou un poteau.", "Jusqu'à 6 m de large, 3 m de haut"],
  ["Claustra toile", "Fixe ou coulissante : contre le soleil, le vent, les regards et les insectes, en gardant la vue.", "Jusqu'à 2,6 m de haut"],
  ["Claustra à lames", "Fixe ou coulissante, avec 85 % ou 100 % d'occultation au choix, pour un espace semi-fermé.", "Jusqu'à 2,6 m de haut"],
  ["Brise-vue grandes lames", "Fixe, en lames aluminium horizontales ou verticales, effet chêne clair en option.", "Jusqu'à 3 m de haut"],
];
const pagePergolaRiche = ({ titreConfort = "Confort et automatismes", h1, kicker, chapo, photo, position, ancre, titreModeles, introModeles, modeles, noteModeles, atoutsTitre, atouts, confort, galerieCat, titreGalerie, gauche, faqTitre, faq, ici, ctaTitre }) => `
${heroPlein({ fil: "Pergolas & extérieur", h1, kicker, chapo, photo, position,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#modeles">${ancre}</a>` })}

<section id="modeles" class="bloc">
  <div class="conteneur">
    <h2>${titreModeles}</h2>
    <p class="chapo">${introModeles}</p>
    <div class="grille grille-3">${modeles.map(([t, x, pts]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><ul class="puces">${pts.map((q) => `<li>${q}</li>`).join("")}</ul></div>`).join("")}</div>
    <p class="note-carport">${noteModeles}</p>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>${atoutsTitre}</h2>
    <div class="grille grille-3 atouts-car">${atouts.map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="options" class="bloc">
  <div class="conteneur">
    <h2>Fermer les côtés</h2>
    <p class="chapo">Pour profiter de la terrasse au printemps et à l'automne, se protéger du vent ou des regards. Fermetures dans la teinte de la structure.</p>
    <div class="grille grille-3">${FERMETURES_PERGOLA.map(([t, x, d]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><p class="dim-carport">${d}</p></div>`).join("")}</div>
    <h2 class="titre-confort">${titreConfort}</h2>
    <div class="grille grille-3">${confort.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie(galerieCat, { titre: titreGalerie, legende: "Illustrations" })}
  </div>
</section>

<section id="faq-pergola" class="bloc">
  <div class="conteneur lyon-faq">
  <div class="lyon-texte">
    ${gauche}
    <p>Nous venons chez vous, à Lyon et dans sa région (${COMMUNES}), pour regarder l'orientation, la façade, les fixations et l'écoulement des eaux. Le plan 3D de votre pergola est offert.</p>
  </div>
  <div class="faq-liste">
    <h2>${faqTitre}</h2>
    ${faq.map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les autres solutions</h2>
    <div class="grille grille-3">${autresPergolas(ici).slice(0, 3).map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div>
  </div>
</section>
${cta(ctaTitre, "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`;

const AUTOMATISMES = ["Automatismes", "Capteurs de soleil, de pluie et de vent, et pilotage depuis une application, des boutons de scénario ou à la voix."];
const pergolaBioclimatique = {
  title: "Pergola bioclimatique à Lyon | Instant Terrasse",
  description: "Pergola bioclimatique à Lyon : lames orientables motorisées, jusqu'à 37 m², adossée ou autoportée, stores zippés, LED, option solaire. Plan 3D offert.",
  corps: pagePergolaRiche({
    ici: "/pergola-bioclimatique-lyon/",
    h1: ['<span class="pc-nowrap">Pergola bioclimatique</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Lames orientables motorisées",
    chapo: "Des lames orientables sur une structure aluminium : ouvertes pour le soleil, inclinées pour l'ombre et la ventilation, fermées contre la pluie.",
    photo: "pergola-bioclimatique-salon-piscine", ancre: "Les modèles",
    titreModeles: "Trois modèles selon votre terrasse",
    introModeles: "Même principe, mêmes lames orientables de 0 à 145° : ce qui change, c'est la taille, la pose et l'intégration des stores.",
    modeles: [
      ["L'essentielle", "Une pergola autoportée sur quatre poteaux, pour un coin repas ou un salon dans le jardin.", ["Jusqu'à 24 m²", "Jusqu'à 2,6 m de hauteur", "Stores verticaux rapportés en option"]],
      ["La polyvalente", "Adossée à la façade ou autoportée, avec un débord de toiture possible et des lames plus longues en option.", ["Jusqu'à 33,4 m²", "Jusqu'à 3 m de hauteur (2,6 m autoportée)", "Débord jusqu'à 1,2 m", "Chauffage infrarouge en option"]],
      ["La grande", "Les stores zippés sont intégrés dans la structure, invisibles une fois remontés. La toiture peut aussi mêler lames orientables, brise-soleil fixe et panneaux pleins.", ["Jusqu'à 37,4 m²", "Jusqu'à 3 m de hauteur (2,6 m autoportée)", "Débord jusqu'à 2 m", "Chauffage infrarouge en option"]],
    ],
    noteModeles: "Pergolas conformes aux règles professionnelles des pergolas à ossature aluminium. Données fabricant.",
    atoutsTitre: "Ce que font les lames",
    atouts: [
      ["soleil", "Ombre ou soleil", "Lames fermées, aucun rayon ne passe ; inclinées, vous dosez la lumière au fil de la journée."],
      ["goutte", "Abri contre la pluie", "Lames fermées, l'eau suit les lames jusqu'aux chéneaux intégrés et s'évacue au pied des poteaux."],
      ["vent", "Ventilation naturelle", "Lames entrouvertes, l'air chaud monte et s'échappe : la chaleur ne stagne pas sous la pergola."],
      ["maison", "Adossée ou autoportée", "Contre la façade ou indépendante au milieu du jardin, de 0 à 4 poteaux, à la hauteur voulue."],
      ["bouclier", "Aluminium thermolaqué", "Pièces de jonction en inox, six teintes de structure, lames blanches ou grises et autres teintes RAL en option."],
      ["couches", "Fabriquée en France", "Conçue et fabriquée en France, sur mesure, au millimètre près en largeur."],
    ],
    confort: [
      ["Moteur silencieux", "Un vérin électrique 24 V, caché dans le cadre. Branchement 230 V, ou option solaire sans raccordement : panneau fixé sur la pergola ou déporté jusqu'à 10 m."],
      ["Éclairage LED", "Direct ou indirect, blanc chaud ou blanc neutre à intensité variable, ou couleur en éclairage indirect."],
      AUTOMATISMES,
    ],
    galerieCat: "pergola-bioclimatique", titreGalerie: "Pergolas bioclimatiques en situation",
    gauche: `<h2>Bien la choisir</h2>
    <p>La taille, l'orientation et l'usage décident de tout : coin repas, salon, cuisine d'été ou bord de piscine. Le sens des lames compte aussi : perpendiculaires à la façade, elles laissent passer davantage de lumière vers la maison.</p>
    <p>Une pergola peut nécessiter une déclaration préalable selon sa surface et votre commune : nous vous indiquons la démarche lors du rendez-vous.</p>`,
    faqTitre: "Vos questions sur la pergola bioclimatique",
    faq: [
      ["Une pergola bioclimatique protège-t-elle de la pluie ?", "Oui, lames fermées : l'eau s'écoule par les lames vers les chéneaux intégrés, puis par les poteaux. Pour être aussi protégé sur les côtés par temps de vent, on ajoute des stores zippés ou un vitrage."],
      ["Résiste-t-elle à la neige ?", "Jusqu'à 130 kg/m² pour une largeur de 2 m, beaucoup moins pour les grandes largeurs ; les lames plus longues en option portent davantage. En cas de neige ou de gel, il faut ouvrir les lames à 90° et ne plus les manœuvrer. Nous vérifions la charge de neige de votre commune avant de dimensionner."],
      ["Faut-il l'électricité ?", "Le moteur se branche en 230 V. Sans prise à proximité, l'option solaire alimente les lames, jusqu'à quatre stores et l'éclairage."],
      ["Peut-elle s'ouvrir et se fermer seule ?", "Oui, avec les capteurs : ouverture au soleil pour aérer, fermeture à la pluie, réaction au vent selon l'implantation."],
      ["Quelle différence avec une pergola à toile ?", "Les lames orientables dosent la lumière et la ventilation. La toile rétractable, elle, se replie entièrement pour retrouver le ciel dégagé."],
    ],
    ctaTitre: "Un projet de pergola bioclimatique ?",
  }),
};

const pergolaToileRetractable = {
  title: "Pergola à toile rétractable à Lyon | Instant Terrasse",
  description: "Pergola à toile rétractable à Lyon : toile opaque motorisée, jusqu'à 37 m², adossée ou autoportée, stores zippés et chauffage en option. Plan 3D offert.",
  corps: pagePergolaRiche({
    ici: "/pergola-toile-retractable-lyon/",
    h1: ['<span class="pc-nowrap">Pergola à toile</span>', 'rétractable <span class="lyon-l">à Lyon</span>'], kicker: "Toile motorisée sur structure aluminium",
    chapo: "Une toile qui se déploie ou se replie à la demande : de l'ombre aux heures chaudes, le ciel dégagé le reste du temps.",
    photo: "pergola-toile-retractable-facade", ancre: "Les modèles",
    titreModeles: "Trois modèles selon votre projet",
    introModeles: "Deux pergolas à toile, adossées ou autoportées, et une solution entre store et pergola, fixée à la façade.",
    modeles: [
      ["La pergola à toile", "Adossée ou autoportée, avec des stores verticaux ajoutés sur les côtés si besoin.", ["Jusqu'à 34,8 m²", "Jusqu'à 3 m de hauteur (2,6 m autoportée)", "Débord jusqu'à 1,2 m"]],
      ["La grande, stores intégrés", "Les stores zippés sont intégrés dans la structure, invisibles une fois remontés.", ["Jusqu'à 37,4 m²", "Jusqu'à 3 m de hauteur (2,6 m autoportée)", "Débord jusqu'à 2 m"]],
      ["Entre store et pergola", "Une toile enroulable sur deux poteaux, fixée à la façade : une protection solaire avant tout, qui laisse s'écouler une pluie faible.", ["Jusqu'à 6 × 5 m (30 m²)", "Inclinaison de 8 à 30 %", "Débord jusqu'à 1 m"]],
    ],
    noteModeles: "Les deux pergolas sont conformes aux règles professionnelles des pergolas à ossature aluminium. Données fabricant.",
    atoutsTitre: "Pourquoi une toile rétractable",
    atouts: [
      ["soleil", "Ombre à la demande", "Toile déployée aux heures chaudes, repliée le reste du temps : la terrasse et la maison gardent leur lumière."],
      ["goutte", "Abri contre l'averse", "Toile opaque et imperméable, tendue en pente : l'eau rejoint les chéneaux et s'évacue par les poteaux."],
      ["vent", "Repli automatique au vent", "Avec le capteur de vent, la toile se replie d'elle-même quand le vent se lève."],
      ["maison", "Adossée ou autoportée", "Contre la façade ou indépendante dans le jardin, à la hauteur voulue."],
      ["bouclier", "Aluminium thermolaqué", "Six teintes de structure, plusieurs coloris de toile, autres teintes RAL en option."],
      ["couches", "Fabriquée en France", "Conçue et fabriquée en France, sur mesure."],
    ],
    confort: [
      ["Moteur intégré", "Un moteur caché dans le cadre, commandé par télécommande."],
      ["Éclairage et chauffage", "Éclairage LED intégré et chauffage infrarouge à variateur, pour les soirées de mi-saison."],
      AUTOMATISMES,
    ],
    galerieCat: "pergola-toile-retractable", titreGalerie: "Pergolas à toile rétractable en situation",
    gauche: `<h2>Toile ou lames ?</h2>
    <p>La toile rétractable convient si vous cherchez surtout de l'ombre l'été et le ciel dégagé le reste de l'année. La <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a> dose plus finement la lumière avec ses lames orientables.</p>
    <p>Une pergola peut nécessiter une déclaration préalable selon sa surface et votre commune : nous vous indiquons la démarche lors du rendez-vous.</p>`,
    faqTitre: "Vos questions sur la pergola à toile",
    faq: [
      ["La toile protège-t-elle de la pluie ?", "Oui pour les deux pergolas : la toile est opaque et imperméable, tendue en pente vers les chéneaux. La solution entre store et pergola, elle, ne laisse s'écouler qu'une pluie faible : c'est d'abord une protection solaire."],
      ["Que faire quand il y a du vent ?", "Replier la toile. Le capteur de vent le fait automatiquement."],
      ["Résiste-t-elle à la neige ?", "Jusqu'à 140 kg/m² pour une largeur de 2 m, moins pour les grandes largeurs. Nous vérifions la charge de neige de votre commune avant de dimensionner."],
      ["Peut-on fermer les côtés ?", "Oui : stores zippés, vitrage coulissant, claustras toile ou à lames, sur un ou plusieurs côtés."],
    ],
    ctaTitre: "Un projet de pergola à toile ?",
  }),
};

// Pergolas à toit fixe et à toile tendue = mêmes caractéristiques que les carports correspondants (Antoine, 15/11/2026)
const CONFORT_FIXE = [
  ["Éclairage LED", "Intégré à la structure, en blanc chaud ou blanc neutre selon le modèle, avec détecteur de mouvement, interrupteur sans fil ou télécommande."],
  ["Gouttière intégrée", "Une gouttière court tout autour de la toiture ; l'eau descend dans les poteaux et s'évacue à leur pied."],
  ["Hauteurs sur mesure", "La hauteur de chaque poteau se règle, pour suivre la pente de la terrasse ou passer sous un débord de toit."],
];
const pergolaToitFixe = {
  title: "Pergola à toit fixe aluminium à Lyon | Instant Terrasse",
  description: "Pergola à toit fixe à Lyon : panneaux sandwich ou bac acier, jusqu'à 35 m², adossée ou autoportée, côtés fermés et LED en option. Plan 3D offert.",
  corps: pagePergolaRiche({
    ici: "/pergola-toit-fixe-lyon/",
    h1: ['<span class="pc-nowrap">Pergola à toit fixe</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Un abri permanent pour la terrasse",
    chapo: "Une structure aluminium et une toiture pleine : la terrasse reste utilisable sous la pluie comme en plein soleil, sans rien à ouvrir ni à fermer.",
    photo: "pergola-toit-fixe-piscine", ancre: "Les toitures",
    titreModeles: "Deux toitures pleines",
    introModeles: "La même ossature en aluminium thermolaqué que nos carports, pensée ici pour couvrir une terrasse.",
    modeles: [
      ["Panneaux sandwich", "Une toiture pleine et opaque : aluminium thermolaqué de part et d'autre d'un cœur en polystyrène extrudé, avec une sous-face lisse.", ["Jusqu'à 7 × 5 m (35 m²)", "Jusqu'à 3 m de hauteur", "Jusqu'à 200 kg/m² de neige*"]],
      ["Bac acier", "Une tôle d'acier nervurée de 0,8 mm, avec un régulateur de condensation sous la tôle.", ["Jusqu'à 7 × 5 m (35 m²)", "Jusqu'à 3 m de hauteur", "Jusqu'à 200 kg/m² de neige*"]],
      ["Et en toile ?", "Pour un aspect plus léger, la pergola à toile tendue reprend la même structure avec une toile opaque et imperméable.", ["Jusqu'à 6 × 4 m (24 m²)", "Jusqu'à 2,6 m de hauteur", "Jusqu'à 130 kg/m² de neige*"]],
    ],
    noteModeles: "*Charge de neige maximale pour les plus petites largeurs ; elle diminue quand la largeur augmente. Données fabricant.",
    atoutsTitre: "Un abri sans entretien",
    atouts: [
      ["goutte", "Abri permanent", "Une toiture pleine contre la pluie, la grêle et le soleil, en toute saison."],
      ["niveau", "Aucune pièce mobile", "Pas de moteur ni de mécanisme : rien à régler, rien à surveiller."],
      ["maison", "Adossée ou autoportée", "Fixée contre la façade sur deux poteaux, ou indépendante sur quatre, avec un débord de toiture possible jusqu'à 1,2 m."],
      ["plan", "Dimensions sur mesure", "Dessinée pour votre terrasse : coin repas, salon, cuisine d'été."],
      ["bouclier", "Aluminium thermolaqué", "Ni rouille, ni peinture à refaire : six teintes au choix, et toute autre teinte RAL en option."],
      ["couches", "Fabriquée en France", "Conçue et fabriquée en France, sur mesure."],
    ],
    confort: CONFORT_FIXE, titreConfort: "Confort",
    galerieCat: "pergola-toit-fixe", titreGalerie: "Pergolas à toit fixe en situation",
    gauche: `<h2>Pour qui ?</h2>
    <p>Le toit fixe convient si vous voulez avant tout un espace abrité, utilisable même sous la pluie, sans vous soucier d'ouvrir ou de fermer quoi que ce soit. Si vous voulez aussi faire entrer le soleil, regardez la <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a>.</p>
    <p>La même structure abrite aussi une voiture : c'est notre <a href="/carport-lyon/">carport</a>. Une pergola peut nécessiter une déclaration préalable selon sa surface et votre commune : nous vous indiquons la démarche lors du rendez-vous.</p>`,
    faqTitre: "Vos questions sur la pergola à toit fixe",
    faq: [
      ["Quelle charge de neige supporte-t-elle ?", "Jusqu'à 200 kg/m² pour les plus petites largeurs, moins pour les plus grandes. Nous vérifions la charge de neige de votre commune, selon sa zone et son altitude, avant de dimensionner."],
      ["Où va l'eau de pluie ?", "La toiture est légèrement inclinée vers une gouttière intégrée sur tout le pourtour ; l'eau descend dans les poteaux et s'évacue à leur pied."],
      ["Panneaux sandwich ou bac acier ?", "Les deux portent les mêmes charges. Les panneaux offrent une sous-face lisse en aluminium ; le bac acier, une tôle nervurée avec régulateur de condensation."],
      ["Peut-on fermer les côtés ?", "Oui : store zippé, vitrage coulissant, claustras toile ou à lames, sur un ou plusieurs côtés."],
      ["Quelle différence avec un carport ?", "Aucune sur la structure : c'est l'usage qui change. Le carport est dimensionné pour une voiture, la pergola pour votre terrasse."],
    ],
    ctaTitre: "Un projet de pergola à toit fixe ?",
  }),
};

// Prête, mais pas encore publiée : aucune photo de pergola à toile tendue (à ajouter dans CONTENUS quand Antoine en fournit)
const pergolaToileTendue = {
  title: "Pergola toile tendue aluminium Lyon : sur mesure | Instant Terrasse",
  description: "Pergola aluminium à toile tendue sur mesure à Lyon : toile opaque et imperméable, jusqu'à 24 m², adossée ou autoportée, côtés fermés et LED en option.",
  corps: (photo) => pagePergolaRiche({
    ici: "/pergola-toile-tendue-lyon/",
    h1: ['<span class="pc-nowrap">Pergola à toile tendue</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Une toiture légère et imperméable",
    chapo: "Une toile technique tendue sur une structure aluminium : l'ombre et l'abri d'un toit, avec un aspect plus léger.",
    photo, ancre: "Les caractéristiques",
    titreModeles: "Une toile tendue sur mesure",
    introModeles: "La même structure que notre carport à toile, pensée ici pour couvrir une terrasse.",
    modeles: [
      ["La toile", "Une toile technique opaque et imperméable, tendue sur l'ossature.", ["Opaque", "Imperméable", "Plusieurs coloris"]],
      ["Les dimensions", "Dessinée pour votre terrasse, adossée ou autoportée.", ["Jusqu'à 6 × 4 m (24 m²)", "Jusqu'à 2,6 m de hauteur", "Jusqu'à 130 kg/m² de neige*"]],
      ["Et en toit plein ?", 'Pour plus de surface et de charge de neige, la <a href="/pergola-toit-fixe-lyon/">pergola à toit fixe</a> passe en panneaux sandwich ou en bac acier.', ["Jusqu'à 7 × 5 m (35 m²)", "Jusqu'à 3 m de hauteur", "Jusqu'à 200 kg/m² de neige*"]],
    ],
    noteModeles: "*Charge de neige maximale pour les plus petites largeurs ; elle diminue quand la largeur augmente. Données fabricant.",
    atoutsTitre: "Pourquoi une toile tendue",
    atouts: [
      ["soleil", "Ombre franche", "Une toile opaque : le soleil reste au-dessus de la terrasse."],
      ["goutte", "Abri contre la pluie", "Toile imperméable et gouttière intégrée : l'eau s'évacue au pied des poteaux."],
      ["niveau", "Aucune pièce mobile", "Pas de moteur ni de mécanisme : rien à régler, rien à surveiller."],
      ["maison", "Adossée ou autoportée", "Contre la façade sur deux poteaux, ou indépendante sur quatre."],
      ["bouclier", "Aluminium thermolaqué", "Six teintes de structure, et toute autre teinte RAL en option."],
      ["couches", "Fabriquée en France", "Conçue et fabriquée en France, sur mesure."],
    ],
    confort: CONFORT_FIXE, titreConfort: "Confort",
    galerieCat: "pergola-toile-tendue", titreGalerie: "Pergolas à toile tendue en situation",
    gauche: `<h2>Toile tendue ou rétractable ?</h2>
    <p>La toile tendue reste en place toute l'année, sans mécanisme. La <a href="/pergola-toile-retractable-lyon/">toile rétractable</a> se replie quand vous voulez retrouver le ciel.</p>
    <p>Une pergola peut nécessiter une déclaration préalable selon sa surface et votre commune : nous vous indiquons la démarche lors du rendez-vous.</p>`,
    faqTitre: "Vos questions sur la pergola à toile tendue",
    faq: [
      ["La toile protège-t-elle de la pluie ?", "Oui : elle est imperméable, et l'eau rejoint la gouttière intégrée puis les poteaux."],
      ["Quelle charge de neige supporte-t-elle ?", "Jusqu'à 130 kg/m² pour les plus petites largeurs, moins pour les plus grandes. Nous vérifions la charge de neige de votre commune avant de dimensionner."],
      ["Peut-on fermer les côtés ?", "Oui : store zippé, vitrage coulissant, claustras toile ou à lames."],
      ["Quelle différence avec un carport à toile ?", "Aucune sur la structure : c'est l'usage qui change."],
    ],
    ctaTitre: "Un projet de pergola à toile tendue ?",
  }),
};

// ---------- Store banne (refonte 16/11/2026, brochure gamme fournisseur fournie par Antoine : 6 modèles, sans références) ----------
const storeBanne = {
  title: "Store banne sur mesure à Lyon | Instant Terrasse",
  description: "Store banne sur mesure à Lyon : jusqu'à 7 m de large et 4 m d'avancée, pose murale ou plafond, pare-soleil motorisé, LED et capteurs. Plan 3D offert.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ['<span class="pc-nowrap">Store banne</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Six modèles fabriqués en France",
  chapo: "De l'ombre en quelques secondes, et une façade dégagée le reste du temps : la protection solaire la plus simple, sans poteau sur la terrasse.",
  photo: "store-banne-coffre-bardage", position: "45% 40%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#modeles">Les modèles</a>` })}

<section id="modeles" class="bloc">
  <div class="conteneur">
    <h2>Le store adapté à votre façade</h2>
    <p class="chapo">Six modèles, tous avec coffre : nous choisissons ensemble celui qui convient à la largeur, à la hauteur de pose et à l'exposition.</p>
    <div class="grille grille-3">${[
      ["Grandes dimensions", "Pour ombrager une terrasse entière, sans poteau.", ["Jusqu'à 7,16 m de large", "Jusqu'à 4 m d'avancée", "Jusqu'à 11,88 m en deux parties"]],
      ["Inclinaison réglable", "Plus le store est incliné, mieux il coupe le soleil bas du matin ou du soir.", ["De 0 à 60° selon le modèle", "Pose murale ou au plafond", "Sous un balcon ou un avant-toit"]],
      ["Coffre compact", "Toile et bras se rangent dans le coffre une fois le store replié.", ["Plaqué contre le mur sur certains modèles", "Armature aluminium thermolaquée", "Six teintes, plus de 200 en option"]],
    ].map(([t, x, pts]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><ul class="puces">${pts.map((q) => `<li>${q}</li>`).join("")}</ul></div>`).join("")}</div>
    <p class="note-carport">Dimensions maximales selon le modèle. Données fabricant.</p>
    <div class="conseil-encadre">
      <p class="conseil-titre">Notre conseil</p>
      <p><strong>Attention : un store banne n'est pas toujours la solution adaptée.</strong> Selon l'exposition de l'espace à protéger, il peut ne pas suffire et ne pas vous protéger au moment le plus important. C'est parfois le cas en fin de journée sur une terrasse exposée à l'ouest : le soleil, bas sur l'horizon, passe sous la toile.</p>
      <p>Il faut alors une protection verticale, et non horizontale : un <a href="/pergola-bioclimatique-lyon/#options">store vertical</a>, un <a href="/garde-corps-aluminium-lyon/">brise-vue</a> ou une <a href="/pergolas-lyon/">pergola</a> équipée d'un store vertical. Lors du rendez-vous, nous regardons l'orientation de votre terrasse et les heures où vous l'utilisez.</p>
    </div>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Pourquoi un store banne</h2>
    <div class="grille grille-3 atouts-car">${[
      ["soleil", "De l'ombre à la demande", "Déployé aux heures chaudes, replié le reste du temps : la maison garde sa lumière."],
      ["maison", "Sans poteau", "Fixé à la façade ou au plafond, il laisse la terrasse entièrement libre."],
      ["vent", "Repli automatique", "Le capteur de vent replie le store de lui-même quand le vent se lève."],
      ["ombre", "Pare-soleil déroulant", "Une toile verticale de 1,5 m se déroule sous l'avant du store contre le soleil rasant."],
      ["bouclier", "Aluminium thermolaqué", "Une armature en aluminium, dans la teinte de vos menuiseries."],
      ["couches", "Fabriqué en France", "Conçu et fabriqué en France, sur mesure."],
    ].map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="options" class="bloc">
  <div class="conteneur">
    <h2>Options et confort</h2>
    <div class="grille grille-3">${[
      ["Pare-soleil motorisé", "Une toile verticale de 1,5 m de haut, déroulée à la télécommande sous la barre avant : contre le soleil couchant et les regards.", "Motorisé sur 3 modèles, manuel sur un 4e"],
      ["Lambrequin", "Une bande de toile fixe à l'avant du store, pour la finition et un peu d'ombre en plus.", "Jusqu'à 30 cm de haut"],
      ["Éclairage LED", "Intégré aux bras, au coffre ou à la barre avant selon le modèle, blanc chaud ou blanc neutre, à intensité variable.", "Selon le modèle"],
      ["Motorisation radio", "Commande à la télécommande, avec dépannage manuel en option. Manœuvre manuelle possible sur deux modèles.", "Tous les modèles"],
      ["Capteurs", "Vent pour replier le store, soleil pour le déployer quand il fait chaud, pluie en complément du capteur de vent.", "En option"],
      ["La toile de votre choix", "Toiles acryliques ou toiles techniques, choisies avec vous sur échantillons, en accord avec la façade.", "Large choix de coloris"],
    ].map(([t, x, d]) => `<div class="carte"><h3>${t}</h3><p>${x}</p><p class="dim-carport">${d}</p></div>`).join("")}</div>
  </div>
</section>

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("store-banne", { titre: "Stores bannes en situation", legende: "Illustrations" })}
  </div>
</section>

<section id="faq-store" class="bloc">
  <div class="conteneur lyon-faq">
  <div class="lyon-texte">
    <h2>Store banne ou pergola ?</h2>
    <p>Le store banne donne de l'ombre à la demande, sans poteau. Une <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a> ou à <a href="/pergola-toit-fixe-lyon/">toit fixe</a> vous abrite aussi de la pluie, et se ferme sur les côtés.</p>
    <p>La largeur, l'avancée, l'inclinaison et la hauteur de pose dépendent de votre façade : nous venons chez vous, à Lyon et dans sa région (${COMMUNES}), avec les échantillons de toiles. Le plan 3D de votre projet est offert.</p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le store banne</h2>
    ${[
      ["Peut-on laisser le store ouvert sous la pluie ou par vent fort ?", "Non : un store banne protège du soleil. Il se replie en cas de vent ou de pluie ; avec les capteurs, il le fait tout seul."],
      ["Quelle taille maximale ?", "Jusqu'à 7,16 m de large et 4 m d'avancée en une seule pièce, et jusqu'à 11,88 m de large en deux parties, selon le modèle."],
      ["Peut-on le poser sous un balcon ?", "Oui : plusieurs modèles se posent au plafond, sous un balcon ou un avant-toit."],
      ["Comment couper le soleil du soir ?", "En inclinant davantage le store, jusqu'à 60° selon le modèle, et avec le pare-soleil motorisé qui se déroule à l'avant."],
      ["Peut-on l'éclairer ?", "Oui : LED intégrées aux bras, au coffre ou à la barre avant selon le modèle, à intensité variable."],
    ].map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les autres solutions</h2>
    <div class="grille grille-3">${autresPergolas("/store-banne-lyon/").slice(0, 3).map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div>
  </div>
</section>
${cta("Un projet de store banne ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Bardage bois (enrichi 16/11/2026, catalogue bardage fournisseur) ----------
const bardageEssences = [
  ["Accoya naturel", "Bois acétylé à cœur : il ne prend presque plus l'eau, d'où une stabilité remarquable. Teinte claire, sans nœuds, qui grise avec le temps.", "Jusqu'à 50 ans"],
  ["Accoya gris", "Le même bois, teinté gris dans la masse : la façade a son aspect patiné dès la pose et garde sa teinte grise en vieillissant.", "Jusqu'à 50 ans"],
  ["Kebony", "Pin modifié par un procédé d'origine végétale, plus dense et très résistant aux intempéries. Brun proche des bois exotiques, puis patine gris cendre.", "Jusqu'à 30 ans"],
  ["Bambou X-treme", "Lamelles de bambou chauffées puis compressées : un parement très dur, sans nœuds, brun foncé. Une alternative aux bois tropicaux.", "Jusqu'à 25 ans"],
  ["Thermofrêne", "Frêne chauffé à haute température, sans produit chimique : brun foncé, veinage très marqué, patine gris argenté.", "Jusqu'à 20 ans"],
  ["Thermopin clear", "Pin sélectionné quasiment sans nœuds puis traité à la chaleur : teinte miel proche des bois exotiques, longueurs jusqu'à 4,80 m.", "Jusqu'à 15 ans"],
  ["Thermo épicéa", "Épicéa traité à la chaleur, sans produit chimique : teinte miel avec quelques nœuds, au caractère plus rustique. Finitions grise ou châtaigne sur commande.", "Jusqu'à 15 ans"],
];

const bardageBois = {
  title: "Bardage bois sur mesure à Lyon | Instant Terrasse",
  description: "Bardage bois à Lyon : accoya, kebony, bambou, thermofrêne, thermopin ou thermo épicéa, clipsé sur rails aluminium, sans vis apparente. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ["Bardage bois", "sur mesure"], kicker: "Façades, murs et abris à Lyon et dans sa région", photo: "bardage-thermofrene-maison", position: "70% 45%",
  chapo: "Habillez une façade, une extension ou une clôture avec des bois sélectionnés pour durer, assortis à votre terrasse.",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#essences-bardage">Voir les essences</a>` })}

<section id="essences-bardage" class="bloc">
  <div class="conteneur">
    <h2>Nos essences de bardage</h2>
    <p class="chapo">Des bois sélectionnés pour leur stabilité : un bardage doit rester droit et beau malgré le soleil et la pluie.</p>
    <div class="grille grille-3 atouts-car">
      ${bardageEssences.map(([n, t, g]) => `<div class="carte carte-lame"><div class="lames">${PHOTOS.filter((p) => p.categorie === "lame-bardage" && p.essence === n).map((p) => imgPhoto(p.cle, { sizes: "276px" })).join("")}</div><h3>${n}</h3><p>${t}</p><p class="garantie">Garantie fabricant : ${g.toLowerCase()}, selon conditions</p></div>`).join("")}
    </div>
  </div>
</section>

<section id="systeme" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Posé sur rails aluminium, sans une vis apparente</h2>
    <p class="chapo">Comme nos terrasses, nos bardages se clipsent sur des rails en aluminium fixés au mur : rien ne traverse la lame.</p>
    <div class="grille grille-3 atouts-car">${[
      ["vent", "Bardage ventilé", "La lame ne touche jamais le rail : l'air circule derrière le parement. Système conforme au DTU 41-2."],
      ["niveau", "Lignes parfaites", "Les clips sont montés en usine : l'écart entre les lames reste régulier sur toute la façade."],
      ["demonte", "Démontable", "En claire-voie, chaque lame se déclipse avec une clé, sans abîmer ni la lame ni le rail."],
      ["maison", "Sur tous les murs", "Béton, ossature bois ou structure métallique, en façade, en sous-face ou au plafond."],
      ["bouclier", "Structure garantie 20 ans*", "Rails en aluminium, fabriqués en France, majoritairement recyclé et recyclable."],
      ["plan", "Sur mesure", "L'espacement des clips peut varier pour mêler plusieurs largeurs de lames."],
    ].map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="poses" class="bloc">
  <div class="conteneur">
    <h2>Horizontal, vertical ou en relief</h2>
    <div class="grille grille-4">${[
      ["Horizontal", "Des lames étroites aux bords taillés à 30°, pour que l'eau de pluie s'écoule vers l'extérieur."],
      ["Vertical", "Des lames aux bords droits, pour une façade élancée."],
      ["Largeurs mêlées", "Trois largeurs de bambou posées selon un rythme, pour une façade unique."],
      ["En relief", "Deux épaisseurs de lames combinées donnent du relief à la façade."],
    ].map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
    <p class="note-carport">*Garanties fabricants, sous conditions.</p>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("bardage-bois", { titre: "Bardages en situation", legende: "Illustrations de bardages dans nos essences" })}
  </div>
</section>

<section id="pose-bardage" class="bloc">
  <div class="conteneur">
    ${galerie("bardage-pose", { titre: "La pose à clipser en images", intro: "Les rails sont fixés au mur, puis chaque lame vient s'y clipser. Larmiers, profils d'arrêt et cornières d'angle en aluminium soignent les finitions autour des fenêtres et dans les angles.", legende: "Illustrations du système de pose" })}
  </div>
</section>

<section id="faq-bardage" class="bloc bloc-alt">
  <div class="conteneur lyon-faq">
  <div class="lyon-texte">
    <h2>Votre projet de bardage</h2>
    <p>Façade, extension, mur de clôture, abri ou sous-face de toiture : la même essence que votre <a href="/terrasse-bois-lyon/">terrasse</a> donne un extérieur cohérent.</p>
    <p>${POSE}</p>
    <p>Nous venons chez vous, à Lyon et dans sa région (${COMMUNES}), avec les échantillons. Vous préférez une façade sans aucune évolution de teinte ? Découvrez le <a href="/bardage-aluminium-lyon/">bardage aluminium</a>.</p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le bardage bois</h2>
    ${[
      ["Le bardage bois grise-t-il ?", "Oui, s'il est laissé naturel : il prend une patine grise avec le temps. Pour une teinte grise dès la pose, choisissez l'accoya gris ou un saturateur gris ; pour rester proche du bois neuf, un saturateur châtaigne."],
      ["Faut-il l'entretenir ?", "Laissé naturel, il ne demande pas de traitement. Une finition au saturateur ne s'écaille pas : elle se renouvelle sans décapage ni ponçage."],
      ["Pose horizontale ou verticale ?", "Les deux sont possibles. En horizontal, les lames ont des bords taillés en biais pour évacuer l'eau ; en vertical, des bords droits."],
      ["Peut-on remplacer une lame abîmée ?", "Oui, en claire-voie : la lame se déclipse avec une clé, sans toucher aux autres."],
      ["Quelle essence choisir ?", "Selon la teinte voulue et son évolution : accoya pour une stabilité maximale, kebony ou thermofrêne pour un brun foncé, thermo épicéa ou thermopin clear pour une teinte miel, bambou pour un parement très dur."],
    ].map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>
${cta("Un projet de bardage ?")}`,
};


// ---------- Garde-corps (refonte 16/11/2026, catalogue garde-corps fournisseur fourni par Antoine) ----------
const VIGNETTES_GC = {
  "Main courante murale": [["murale-alu", "Aluminium", "Main courante murale en aluminium", 110], ["murale-bois", "Bois", "Main courante murale en bois", 110]],
  "Barreaux": [["gc-lisses-horizontales", "Horizontaux", "Garde-corps à lisses horizontales", 169], ["gc-barreaux-verticaux", "Verticaux", "Garde-corps à barreaux verticaux", 169], ["gc-barreaux-vide", "Vide sous main courante", "Garde-corps à barreaux avec vide sous la main courante", 169]],
  "Verre": [["gc-verre-integral", "Intégral", "Garde-corps en verre intégral", 169], ["gc-verre-vide", "Vide sous main courante", "Garde-corps en verre avec vide sous la main courante", 169], ["gc-verre-lisses", "Avec lisses", "Garde-corps en verre surmonté de lisses", 169]],
  "Tôle découpée": [["gc-tole-feuille", "Motif feuille", "Garde-corps en tôle découpée, motif feuille", 169], ["gc-tole-rond", "Rond perforé", "Garde-corps en tôle perforée ronde", 169], ["gc-tole-lisses", "Avec lisses", "Garde-corps en tôle découpée surmontée de lisses", 169]],
  "Bois": [["gc-bois-vertical", "Vertical", "Garde-corps à lames bois verticales", 169], ["gc-bois-horizontal", "Horizontal", "Garde-corps à lames bois horizontales", 169]],
  "Sans poteaux": [["sans-poteaux-applique", "En applique", "Garde-corps sans poteaux posé en applique", 169], ["sans-poteaux-a-plat", "À plat", "Garde-corps sans poteaux posé à plat", 169]],
  "Garde-corps d'escalier": [["rampant-verre", "Verre", "Garde-corps d'escalier en verre"], ["rampant-lisses", "Lisses", "Garde-corps d'escalier à lisses horizontales"], ["rampant-barreaux", "Barreaux", "Garde-corps d'escalier à barreaux verticaux"]],
  "Claustras et pare-vues": [["claustra-barreaux", "Barreaux", "Claustra aluminium à barreaux"], ["claustra-verre", "Verre", "Claustra aluminium en verre"], ["claustra-tole", "Tôle", "Claustra aluminium en tôle découpée"], ["claustra-bois", "Bois", "Claustra aluminium à lames bois"]],
};
const vignettesGc = (t) => VIGNETTES_GC[t] ? `<div class="claustras">${VIGNETTES_GC[t].map(([f, l, a, h = 300]) => `<figure><img src="/assets/img/claustra/${f}.webp" alt="${a}" width="300" height="${h}" loading="lazy" decoding="async" data-credit="©Kordo"><figcaption>${l}</figcaption></figure>`).join("")}</div>` : "";
const MOTIFS_GC = [
  ["Organique", [["rond-perfore", "Rond perforé"], ["galet", "Galet"], ["eclaboussure", "Éclaboussure"], ["bulle", "Bulle"], ["vague", "Vague"]]],
  ["Botanique", [["feuille", "Feuille"], ["herbe", "Herbe"], ["petale", "Pétale"], ["foret", "Forêt"], ["fleurs", "Fleurs"]]],
  ["Linéaire", [["diagonale", "Diagonale"], ["bambou", "Bambou"], ["hexagone", "Hexagone"], ["carre-perfore", "Carré perforé"], ["ligne-perforee", "Ligne perforée"]]],
  ["Géométrique", [["qr-code-perfore", "QR code perforé"], ["faience", "Faïence"], ["losange", "Losange"], ["mosaique", "Mosaïque"], ["triangle", "Triangle"]]],
];
const SCHEMAS_POSE = { "À plat": "pose-a-plat.svg", "En applique": "pose-applique.svg", "Déporté": "pose-deportee.svg", "En tableau": "pose-tableau.svg" };
const GALERIE_GC = [...PHOTOS.filter((p) => p.categorie === "garde-corps").map((p) => p.cle), "carrelage-gris-garde-corps-verre-depoli", "carrelage-beige-pergola-toit-fixe", "restaurant-terrasse-gabions"];
const gardeCorps = {
  title: "Garde-corps aluminium à Lyon | Instant Terrasse",
  description: "Garde-corps aluminium sur mesure à Lyon : barreaux, verre, tôle découpée ou bois, conforme aux normes, fabriqué en France. Terrasses, balcons, escaliers.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ['<span class="pc-nowrap">Garde-corps aluminium</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses, balcons, escaliers et pare-vues",
  chapo: "Sécuriser une terrasse, un balcon ou un escalier sans fermer la vue : des garde-corps aluminium fabriqués sur mesure, conformes aux normes.",
  photo: "gc-maison-lisses-noires", position: "60% 45%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#remplissages">Les modèles</a>` })}

<section id="remplissages" class="bloc">
  <div class="conteneur">
    <h2>Nos modèles de garde-corps</h2>
    <p class="chapo">Barreaux, verre, tôle découpée ou bois, sur la même structure aluminium, fabriquée sur mesure.</p>
    <div class="modeles-gc">${[["Barreaux", "Barreaux"], ["Verre", "Verre"], ["Tôle découpée", "Tôle découpée"], ["Bois", "Bois"], ["Sans poteaux", "Sans poteaux"]].flatMap(([k, fam]) => VIGNETTES_GC[k].map(([f, l, a, h = 300]) => `<figure><img src="/assets/img/claustra/${f}.webp" alt="${a}" width="300" height="${h}" loading="lazy" decoding="async" data-credit="©Kordo"><figcaption><b>${fam}${k === "Sans poteaux" ? ' <span class="badge-nouveau">Nouveau</span>' : ""}</b>${l}</figcaption></figure>`)).join("")}</div>
    <p class="note-carport">Verre feuilleté transparent, opale, fumé gris ou fumé bronze ; tôle en 20 motifs (voir plus bas) ; bois en pin ou frêne thermo-traités, ou douglas.</p>
    <div class="option-gc">
      <p><strong>En option, main courante en bois :</strong> à la place de l'aluminium, sur les modèles à poteaux, pour un toucher plus chaleureux.</p>
      <div class="mc-grille">
        <img class="mc-profils" src="/assets/img/claustra/main-courante-profils.webp" alt="Profils de main courante : aluminium 60 × 23 mm, bois 90 × 45 mm" width="550" height="320" loading="lazy" decoding="async" data-credit="©Kordo">
        <ul class="mc-essences">${[["pin", "Pin thermo-traité", "Finlande, PEFC"], ["frene", "Frêne thermo-traité", "Autriche, FSC Mixte 70 %"], ["douglas", "Douglas", "France, PEFC"]].map(([f, n, o]) => `<li><img src="/assets/img/claustra/essence-${f}.webp" alt="${n}" width="183" height="41" loading="lazy" decoding="async" data-credit="©Kordo"><b>${n}</b><small>${o}</small></li>`).join("")}</ul>
      </div>
    </div>
  </div>
</section>

<section id="motifs" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les motifs de tôle découpée</h2>
    <p class="chapo">Vingt motifs au choix, ou le vôtre : il suffit d'un dessin (fichier DXF ou STEP), de la référence d'une tôle existante ou d'une photo.</p>
    <div class="motifs-tous">${MOTIFS_GC.map(([fam, liste]) => `<h3 class="motifs-titre">${fam}</h3><div class="motifs">${liste.map(([f, n]) => `<figure><img src="/assets/img/claustra/motifs/${f}.webp" alt="Motif de tôle ${n}" width="200" height="200" loading="lazy" decoding="async" data-credit="©Kordo"><figcaption>${n}</figcaption></figure>`).join("")}</div>`).join("")}</div>
  </div>
</section>

<section id="atouts" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Conçu pour la sécurité</h2>
    <div class="grille grille-3 atouts-car">${[
      ["bouclier", "Conforme aux normes", "Garde-corps conformes aux normes NF P01-012 et NF P01-013 ; chaque conception est vérifiée sur banc d'essai."],
      ["plan", "100 % sur mesure", "Dessiné pour votre terrasse : longueurs, angles, hauteurs et remplissage."],
      ["niveau", "Sans vis apparente", "Les travées et les capots de main courante se clipsent entre eux : un rendu net, sans fixation visible."],
      ["couches", "Fabriqué en France", "Conçu et fabriqué en Alsace, livré prémonté."],
      ["demonte", "Aluminium recyclé", "Un aluminium recyclé à 80 % et des bois certifiés, sans entretien pour l'aluminium."],
      ["maison", "Particuliers et professionnels", "Maisons, logements collectifs et bâtiments tertiaires, avec des règles plus strictes pour les lieux recevant du public."],
    ].map(([i, t, x]) => `<div class="carte atout-carte">${ico(i)}<h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="poses" class="bloc">
  <div class="conteneur">
    <h2>Quatre façons de le fixer</h2>
    <div class="grille grille-4 atouts-car">${[
      ["À plat", "Fixé sur le dessus de la dalle ou de la terrasse."],
      ["En applique", "Fixé sur la tranche de la dalle : toute la surface de la terrasse reste libre. Le nez de dalle peut être habillé."],
      ["Déporté", "Écarté de la tranche de la dalle grâce à des pattes de fixation."],
      ["En tableau", "Entre deux murs, pour une fenêtre, une loggia ou un balcon encastré."],
    ].map(([t, x]) => `<div class="carte carte-pose"><img src="/assets/img/claustra/${SCHEMAS_POSE[t]}" width="220" height="160" alt="Schéma de pose ${t.toLowerCase()}" loading="lazy" decoding="async"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
    <h2 class="titre-confort">Aussi pour les escaliers et les pare-vues</h2>
    <div class="grille grille-3 atouts-car">${[
      ["Garde-corps d'escalier", "Les mêmes remplissages suivent la pente de l'escalier, avec des jonctions de rampant et d'angle."],
      ["Main courante murale", "En aluminium ou en bois, fixée au mur le long d'un escalier."],
      ["Claustras et pare-vues", "Les mêmes modèles, plus hauts, pour se protéger des regards sur une terrasse ou un balcon."],
    ].map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p>${vignettesGc(t)}</div>`).join("")}</div>
  </div>
</section>

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie(GALERIE_GC, { titre: "Garde-corps en situation", intro: "Choisissez un type de garde-corps.", legende: "Illustrations", types: ["Vitré", "Barreaudage", "Découpe laser", "Remplissage bois", "Main courante bois"], limite: 12 })}
  </div>
</section>

<section id="faq-gc" class="bloc">
  <div class="conteneur lyon-faq">
  <div class="lyon-texte">
    <h2>Un garde-corps, c'est d'abord de la sécurité</h2>
    <p>Hauteur, espacement des éléments, résistance du support : un garde-corps répond à des normes précises, plus exigeantes dans les bâtiments recevant du public. Nous définissons le modèle et les fixations selon votre support lors du rendez-vous.</p>
    <p>Pour une terrasse neuve, surélevée, sur <a href="/terrasse-sur-pilotis-lyon/">pilotis</a> ou un <a href="/toit-terrasse-lyon/">toit-terrasse</a>, le plus simple est de prévoir le garde-corps dès la conception. Nous venons chez vous, à Lyon et dans sa région (${COMMUNES}).</p>
  </div>
  <div class="faq-liste">
    <h2>Vos questions sur le garde-corps</h2>
    ${[
      ["Quel garde-corps pour garder la vue ?", "Le verre transparent, ou des barreaux fins. Pour préserver l'intimité, choisissez le verre opale ou fumé, la tôle ou le bois."],
      ["Peut-on le fixer sans réduire la terrasse ?", "Oui : en applique, il se fixe sur la tranche de la dalle et laisse toute la surface libre."],
      ["Faut-il l'entretenir ?", "L'aluminium ne demande pas d'entretien. Le bois, laissé naturel, change de teinte avec le soleil."],
      ["Est-il conforme pour un lieu recevant du public ?", "Oui, les modèles sont conçus selon les normes NF P01-012 et NF P01-013 ; en lieu public, les poteaux sont plus rapprochés."],
      ["Faites-vous les garde-corps d'escalier ?", "Oui, avec les mêmes remplissages, ainsi que les mains courantes murales."],
    ].map(([q, r]) => `<details class="faq"><summary>${q}</summary><div><p>${r}</p></div></details>`).join("\n    ")}
  </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Pour aller avec votre garde-corps</h2>
    <div class="grille grille-3">${[["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "La solution pour les terrains en pente."], ["/toit-terrasse-lyon/", "Toit-terrasse", "Créer un espace de vie sur une toiture plate."], ["/terrasse-balcon-lyon/", "Balcon", "Rénover le sol d'un balcon, sans travaux lourds."]].map(([c, t, x]) => carteProduit(c, t, x)).join("")}</div>
  </div>
</section>
${cta("Un projet de garde-corps ?", "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.")}`,
};

// ---------- Galerie (page /realisations/) ----------
// Photos fournisseurs : présentées comme illustrations, jamais comme chantiers Instant Terrasse.
const GROUPES_GALERIE = [
  ["terrasse-bois", "Terrasses bois"], ["terrasse-aluminium", "Terrasses aluminium"], ["terrasse-composite", "Terrasses composite"],
  ["terrasse-carrelage", "Terrasses carrelage"], ["pilotis", "Terrasses sur pilotis"], ["structure-alu", "Structures"],
  ["bardage-bois", "Bardage bois"], ["bardage-pose", "Bardage bois"], ["bardage-aluminium", "Bardage aluminium"],
  ["pergola-bioclimatique", "Pergolas"], ["pergola-toile-retractable", "Pergolas"], ["pergola-toit-fixe", "Pergolas"],
  ["carport", "Carports"], ["store-banne", "Stores bannes"], ["garde-corps", "Garde-corps"],
];
const libelleGalerie = Object.fromEntries(GROUPES_GALERIE);
const ordreGalerie = GROUPES_GALERIE.map(([c]) => c);
const realisations = {
  title: "Galerie : terrasses, pergolas, garde-corps",
  description: "Photos de terrasses bois, aluminium et composite, pergolas, stores bannes, carports, bardages et garde-corps aluminium pour inspirer votre projet à Lyon.",
  corps: `
${heroPlein({ fil: "Galerie", h1: ["Galerie", "d'inspiration"], kicker: "Terrasses, pergolas, bardages et garde-corps",
  chapo: "Toute notre gamme en images, classée par produit. Ces photos sont des illustrations de nos fabricants.",
  photo: "terrasse-thermofrene-pool-house", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#galerie">Voir les photos</a>` })}
<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie(PHOTOS.filter((p) => libelleGalerie[p.categorie]).sort((a, b) => ordreGalerie.indexOf(a.categorie) - ordreGalerie.indexOf(b.categorie)).map((p) => p.cle), { titre: "Toutes les photos", intro: "Choisissez une catégorie, et cliquez sur une photo pour l'agrandir.", groupe: (p) => libelleGalerie[p.categorie] })}
  </div>
</section>
${cta("Une photo vous plaît ?", "Montrez-la-nous lors du rendez-vous : nous partons de vos envies pour dessiner votre projet en 3D.")}`,
};

// ---------- Pergolas : page comparative ----------
const TYPES_PERGOLA = ["Bioclimatique", "Toile rétractable", "Toit fixe"];
const LIGNES_PERGOLA = [
  ["Le principe", "Des lames orientables qui pivotent pour laisser passer le soleil, faire de l'ombre ou fermer la toiture.", "Une toile qui se déploie et se replie sur la structure, à la demande.", "Une toiture pleine et permanente, comme une avancée de la maison."],
  ["Ombre", "Réglable selon l'heure et la saison.", "Totale toile déployée, nulle toile repliée.", "Permanente."],
  ["Pluie", "Lames fermées, la toiture fait barrage et l'eau est évacuée par les poteaux.", "Toile tendue en pente, elle protège d'une averse.", "Abri complet, en toute saison."],
  ["Lumière en hiver", "Lames ouvertes, le soleil d'hiver entre dans la maison.", "Toile repliée, la terrasse retrouve tout le ciel.", "La lumière reste filtrée par le toit."],
  ["Esprit", "Architectural, aux lignes nettes.", "Léger, avec la douceur d'une toile.", "Sobre, dans le prolongement de la façade."],
  ["Pour qui ?", "Ceux qui vivent dehors du printemps à l'automne et veulent tout régler.", "Ceux qui veulent de l'ombre l'été et du ciel le reste de l'année.", "Ceux qui veulent un abri fixe : coin repas, cuisine d'été, voiture."],
];
const pergolas = {
  title: "Pergola sur mesure à Lyon : laquelle choisir ?",
  description: "Pergola bioclimatique, à toile rétractable ou à toit fixe : comparez l'ombre, la protection contre la pluie et la lumière en hiver. Lyon, plan 3D offert.",
  corps: `
${heroPlein({ fil: "Pergolas & extérieur", h1: ["Quelle pergola", "pour votre terrasse ?"], kicker: "Pergolas sur mesure à Lyon et dans sa région",
  chapo: "Bioclimatique, à toile rétractable ou à toit fixe : trois façons de couvrir votre 5<sup>e</sup> pièce, selon l'ombre, la pluie et la lumière.",
  photo: "pergola-bioclimatique-salon-piscine", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#comparatif">Voir le comparatif</a>` })}

<section id="comparatif" class="bloc">
  <div class="conteneur">
    <h2>Le comparatif</h2>
    <p class="chapo">Les trois se font sur mesure, en aluminium, dans la teinte de vos menuiseries. Ce qui les distingue, c'est la toiture.</p>
    <div class="tableau-defile">
      <table class="comparatif comparatif-4">
        <thead><tr><th scope="col"><span class="vh">Critère</span></th>${TYPES_PERGOLA.map((m) => `<th scope="col">${m}</th>`).join("")}</tr></thead>
        <tbody>${LIGNES_PERGOLA.map(([crit, ...v]) => `<tr><th scope="row">${crit}</th>${v.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Découvrir chaque pergola</h2>
    <div class="grille grille-3">
      ${carteProduit("/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Lames orientables : soleil, ombre ou pluie, vous choisissez.")}
      ${carteProduit("/pergola-toile-retractable-lyon/", "Pergola à toile rétractable", "Une toile qui se déploie et se replie à la demande.")}
      ${carteProduit("/pergola-toit-fixe-lyon/", "Pergola à toit fixe", "Un abri permanent, à l'épreuve de la pluie.")}
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Et si une pergola n'est pas nécessaire ?</h2>
      <p>Pour de l'ombre seulement, aux heures chaudes, un <a href="/store-banne-lyon/">store banne</a> fixé à la façade peut suffire. Et pour abriter une voiture, le même système existe en <a href="/carport-lyon/">carport</a>.</p>
    </div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Une pergola se pense avec la terrasse qu'elle couvre : hauteurs, fixations, écoulement de l'eau. Le plan 3D offert vous montre l'ensemble avant de vous décider.</p>
    </div>
  </div>
</section>
${cta("Vous hésitez entre deux pergolas ?", "Nous venons chez vous, nous regardons l'exposition et l'usage de la terrasse, et nous vous conseillons la plus adaptée.")}`,
};

// ---------- Terrasses de restaurants (CHR) ----------
const terrasseRestaurant = {
  title: "Terrasse de restaurant à Lyon | Instant Terrasse",
  description: "Terrasse de restaurant, café ou hôtel à Lyon : plancher sans entretien, garde-corps, pare-vue, pergola ou store. Plan 3D offert.",
  corps: pageProduit({
    fil: "Professionnels",
    h1: ["Terrasse de restaurant", "et d'hôtel"], kicker: "Cafés, hôtels et restaurants à Lyon et dans sa région",
    chapo: "Une terrasse accueillante fait venir les clients et les fait rester : plancher, garde-corps, pare-vue et ombre.",
    photo: "terrasse-kebony-restaurant", position: "50% 55%",
    atouts: [
      ["Pensée pour le service", "Un sol plan et sans marche inutile, pour circuler facilement entre les tables."],
      ["Sans entretien", "Lames aluminium, composite ou essences sélectionnées : pas de saturateur à refaire chaque saison."],
      ["Délimitée et protégée", "Garde-corps, pare-vue bois ou vitré : la terrasse se distingue de la rue et protège du vent."],
      ["De l'ombre et un abri", "Pergola ou store banne pour ouvrir la terrasse plus tôt au printemps et plus tard en automne."],
      ["Sur un sol existant", "Plots réglables ou structure aluminium pour rattraper la pente d'un trottoir ou d'une cour."],
      ["Un interlocuteur principal", "Nous coordonnons la pose avec notre installateur partenaire, pour limiter la gêne pendant les travaux."],
    ],
    galerieCat: ["restaurant-terrasse-gabions", "alu-restaurant-canal-vignes", "terrasse-kebony-restaurant", "terrasse-thermopin-restaurant", "alu-restaurant-vue-mer", "alu-restaurant-salle"],
    titreGalerie: "Terrasses de restaurants en situation",
    details: `<h2>Avant de se lancer</h2>
      <p>Une terrasse posée sur le domaine public demande une autorisation d'occupation de la mairie. Sur une cour ou un terrain privé, les règles d'urbanisme et d'accessibilité s'appliquent aussi. Nous regardons ces points avec vous dès la première visite.</p>
      <p>Pour l'ombre, voyez nos <a href="/pergolas-lyon/">pergolas</a> et le <a href="/store-banne-lyon/">store banne</a> ; pour délimiter, le <a href="/garde-corps-aluminium-lyon/">garde-corps aluminium</a>.</p>`,
    complement: "Nous venons voir les lieux, les accès et vos horaires de service, et le plan 3D de votre terrasse est offert.",
    titreVoisins: "Voir aussi",
    voisins: [
      ["/terrasse-aluminium-lyon/", "Terrasse aluminium", "Des lames stables et sans entretien."],
      ["/pergolas-lyon/", "Pergolas", "Bioclimatique, toile ou toit fixe."],
      ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Délimiter et sécuriser la terrasse."],
    ],
    ctaTitre: "Un projet de terrasse pour votre établissement ?",
  }),
};

// ---------- Pages locales (16/11/2026) : Lyon = page d'ensemble, Rillieux = siège et nord-est lyonnais ----------
// Pas de photo de chantier local : illustrations produit, jamais présentées comme des réalisations sur place.
const communes = (titre, intro, groupes) => `
<section id="zone" class="bloc">
  <div class="conteneur">
    <h2>${titre}</h2>
    <p class="chapo">${intro}</p>
    ${groupes.map(([t, l]) => `<h3 class="communes-titre">${t}</h3><ul class="communes">${l.map((c) => `<li>${c}</li>`).join("")}</ul>`).join("")}
  </div>
</section>`;
const COMPLEMENTS = [
  ["/pergolas-lyon/", "Pergolas", "pergola-bioclimatique-salon-piscine", "De l'ombre sur la terrasse, en toile ou à lames orientables."],
  ["/garde-corps-aluminium-lyon/", "Garde-corps", "gc-maison-terrasse-vue", "Indispensable dès que la terrasse est surélevée."],
  ["/store-banne-lyon/", "Store banne", "store-banne-beige-maison", "Une protection solaire repliable, contre la façade."],
  ["/carport-lyon/", "Carport", "carport-garage-gravier", "Abriter la voiture, dans le même style que la pergola."],
];
const complements = `
<section class="bloc decouvrir">
  <div class="conteneur">
    <h2>Pour compléter votre terrasse</h2>
    <div class="grille grille-4 decouvrir-grille projets-grille">${COMPLEMENTS.map(([c, t, ph, x]) => `<a class="carte carte-lien carte-photo" href="${c}"><div class="vignette">${imgPhoto(ph, { sizes: "(max-width:700px) 40vw, (max-width:1060px) 23vw, 270px" })}</div><div class="carte-corps"><h3>${t}</h3><p>${x}</p><span class="fleche" aria-hidden="true">→</span></div></a>`).join("")}</div>
  </div>
</section>`;

const terrasseLyon = {
  title: "Terrasse sur mesure à Lyon | Instant Terrasse",
  description: "Terrasse sur mesure à Lyon : bois, composite, carrelage ou lames aluminium sur structure aluminium garantie 20 ans. Échantillons à domicile, plan 3D offert.",
  corps: pageProjet({
    ici: "/terrasse-lyon/", fil: "Terrasse à Lyon",
    h1: ['<span class="pc-nowrap">Terrasse sur mesure</span>', '<span class="lyon-l">à Lyon</span>'], kicker: "Lyon et sa région",
    chapo: "Bois, composite, carrelage ou lames aluminium : nous concevons votre terrasse chez vous, échantillons en main, et nous la dessinons en 3D avant le devis.",
    photo: "terrasse-kebony-maison", position: "60% 60%",
    revTitre: "Quatre revêtements, une même structure", revIntro: "Chaque matériau a ses qualités. Nous les comparons avec vous, sur place, selon l'exposition, l'usage et l'entretien que vous acceptez.",
    poids: {},
    rev: {
      bois: ["terrasse-kebony-vue-jardin", "Thermofrêne, kebony, accoya, bambou… des bois massifs, sur structure aluminium ou traditionnelle."],
      composite: ["composite-brun-cour-table", "L'aspect du bois sans saturateur ni ponçage, en deux gammes haut de gamme."],
      aluminium: ["alu-terrasse-salon-parasol", "Le revêtement qui chauffe le moins, léger et 100 % recyclable, en 6 teintes."],
      carrelage: ["carrelage-bh-aspect-bois-gris-table", "Des dalles de grès cérame de 2 cm, aspect pierre ou bois, jusqu'au 120 × 120."],
    },
    pose: bandeau("Sur structure aluminium", "Tous nos revêtements se posent sur une structure aluminium conforme au DTU 51-4, testée par le FCBA et fabriquée en France. Plots, rails et clips sont garantis 20 ans.", "Structure aluminium fabriquée en France, garantie 20 ans.", "Voir la structure", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Comment nous travaillons",
    atouts: [
      ["maison", "Les échantillons chez vous", "Pas de showroom : nous venons avec les échantillons, pour les voir à la lumière de votre jardin et à côté de votre façade."],
      ["plan", "Plan 3D offert", "Avant de signer, vous voyez votre terrasse en 3D : implantation, hauteurs, matériau."],
      ["niveau", "Un projet étudié sur place", "Niveaux, seuils, écoulement de l'eau, accès et exposition sont relevés lors du rendez-vous."],
      ["couches", "Un devis détaillé", "Chaque poste est détaillé ligne par ligne : vous savez ce que vous payez."],
      ["bouclier", "Pose assurée en décennale", "La pose est confiée à notre installateur partenaire, assuré en garantie décennale."],
      ["garde", "Un interlocuteur principal", "Antoine vous suit du premier rendez-vous à la fin du chantier."],
    ],
    extra: communes("Notre zone d'intervention", "Nous nous déplaçons à Lyon et dans les communes de la métropole et des environs, notamment :", [
      ["Lyon et l'est lyonnais", ["Lyon", "Villeurbanne", "Bron", "Décines", "Meyzieu", "Genas"]],
      ["Nord et nord-est", ["Caluire-et-Cuire", "Rillieux-la-Pape", "Sathonay", "Miribel", "Beynost"]],
      ["Ouest lyonnais et Monts d'Or", ["Écully", "Dardilly", "Tassin-la-Demi-Lune", "Champagne-au-Mont-d'Or", "Limonest", "Saint-Didier-au-Mont-d'Or"]],
      ["Plus au nord", ["Villefranche-sur-Saône"]],
    ]),
    galerieCat: ["terrasse-kebony-maison", "carrelage-bh-aspect-bois-gris-jardin", "alu-terrasse-salon-parasol", "composite-brun-cour-table", "terrasse-thermopin-jardin-pins", "carrelage-bh-pergola-cour", "terrasse-kebony-facade-brique", "alu-terrasse-fauteuils-rouges", "terrasse-bambou-ndurance-pergola", "carrelage-bh-grand-format-baie", "composite-brun-transats", "terrasse-accoya-naturel-salle-a-manger"],
    titreGalerie: "Des terrasses pour s'inspirer",
    lyon: ["Une terrasse adaptée à votre maison", "Maison avec jardin, appartement avec balcon, toit-terrasse en ville ou terrain en pente : chaque emplacement a ses contraintes. Nous les regardons sur place avant de vous conseiller un revêtement et une structure.", "Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier."],
    lyonCourt: "Jardin, balcon, toit-terrasse ou terrain en pente : nous regardons les contraintes sur place avant de conseiller un revêtement et une structure.",
    faqTitre: "Vos questions sur votre terrasse à Lyon",
    faq: [
      ["Quel matériau choisir pour sa terrasse ?", `Tout dépend de l'aspect recherché, de l'exposition et de l'entretien que vous acceptez. Notre <a href="/nos-terrasses/#trouver">comparateur en 5 questions</a> classe les quatre revêtements selon vos réponses, et nous en parlons lors du rendez-vous.`],
      ["Faut-il une autorisation pour construire une terrasse ?", "Une terrasse de plain-pied, non couverte, est en principe dispensée d'autorisation. Surélevée ou couverte, elle peut demander une déclaration préalable ou un permis de construire selon sa surface, et un secteur protégé ou le PLU peuvent ajouter des règles. Nous vérifions avec vous la règle de votre commune."],
      ["Combien de temps dure une terrasse composite ?", "Nos deux gammes de composite sont garanties 15 ans pour la co-extrudée et 10 ans pour la pleine masse (garanties fabricants, sous conditions). La structure aluminium est garantie 20 ans."],
      ["Réalisez-vous des terrasses sur un terrain en pente ?", `Oui. Les plots réglables rattrapent les faibles dénivelés ; au-delà, la terrasse peut reposer sur des <a href="/terrasse-sur-pilotis-lyon/">poteaux et poutres</a>.`],
      ["Pouvez-vous ajouter une pergola ou un garde-corps ?", `Oui. <a href="/pergolas-lyon/">Pergola</a>, <a href="/store-banne-lyon/">store banne</a> ou <a href="/garde-corps-aluminium-lyon/">garde-corps</a> peuvent être étudiés dans le même projet et dessinés sur le même plan 3D.`],
    ],
    ctaTitre: "Un projet de terrasse à Lyon ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
  }),
};

const terrasseRillieux = {
  title: "Terrasse sur mesure à Rillieux-la-Pape | Instant Terrasse",
  description: "Instant Terrasse a son siège à Rillieux-la-Pape : terrasses bois, composite, carrelage ou aluminium pour Vancia, Crépieux et le nord-est lyonnais.",
  corps: pageProjet({
    ici: "/terrasse-rillieux-la-pape/", fil: "Terrasse à Rillieux-la-Pape",
    h1: ['<span class="pc-nowrap">Terrasse sur mesure</span>', "à Rillieux-la-Pape"], kicker: "Notre siège est à Rillieux-la-Pape",
    chapo: "Instant Terrasse est née à Rillieux-la-Pape. Pour un projet dans la commune ou les communes voisines, le rendez-vous se cale facilement, échantillons en main.",
    photo: "terrasse-thermopin-salon-jardin", position: "45% 60%",
    revTitre: "Quel revêtement pour votre terrasse ?", revIntro: "Bois, composite, lames aluminium ou carrelage : nous vous montrons les quatre chez vous, à côté de votre façade.",
    poids: {},
    rev: {
      bois: ["terrasse-thermofrene-marches", "Une matière vivante, différente sur chaque lame, qui se patine avec le temps."],
      composite: ["composite-gris-piscine-jardin", "Ni saturateur ni ponçage : un simple nettoyage suffit."],
      aluminium: ["alu-marches-aspect-teck", "Inerte et inaltérable : il ne moisit pas et ne bouge pas."],
      carrelage: ["carrelage-bh-sureleve-gazon", "Des dalles de grès cérame antidérapantes, très résistantes aux rayures."],
    },
    pose: bandeau("Une structure adaptée au terrain", "Sur structure aluminium, sur lambourdes bois ou sur plots : la structure se choisit selon le sol, la hauteur et le revêtement. La structure aluminium est garantie 20 ans.", "Aluminium, bois ou plots, selon le sol et la hauteur.", "Voir les structures", "/structure-terrasse-lyon/", IMG_STRUCT_ALU),
    atoutsTitre: "Les projets que nous étudions",
    atouts: [
      ["maison", "Terrasse de jardin", "Le prolongement du séjour, de plain-pied avec la maison."],
      ["goutte", "Plage de piscine", `Antidérapante et agréable pieds nus : voir la <a href="/terrasse-piscine-lyon/">terrasse de piscine</a>.`],
      ["pente", "Terrain en pente", `Une terrasse de niveau avec la maison, sur <a href="/terrasse-sur-pilotis-lyon/">pilotis</a>.`],
      ["couches", "Balcon", `Un vrai sol posé sur l'existant : voir le <a href="/terrasse-balcon-lyon/">balcon</a>.`],
      ["etanche", "Toit-terrasse", `Sans percer l'étanchéité : voir le <a href="/toit-terrasse-lyon/">toit-terrasse</a>.`],
      ["niveau", "Sur plots", `Sur une dalle ou un sol existant, sans couler de béton : voir la <a href="/terrasse-sur-plots-lyon/">terrasse sur plots</a>.`],
    ],
    extra: communes("Partout à Rillieux-la-Pape et autour", "Nous intervenons dans tous les quartiers de la commune et dans les communes voisines.", [
      ["Rillieux-la-Pape", ["Rillieux centre", "Vancia", "Crépieux", "Les Alagniers", "Les Semailles", "La Velette"]],
      ["Communes voisines", ["Caluire-et-Cuire", "Sathonay", "Miribel", "Neyron", "Beynost"]],
    ]),
    galerieCat: ["terrasse-thermopin-salon-jardin", "terrasse-thermofrene-marches", "composite-gris-piscine-jardin", "alu-marches-aspect-teck", "carrelage-bh-sureleve-gazon", "terrasse-kebony-jardin", "carrelage-bh-aspect-bois-clair-pergola", "terrasse-thermopin-estrade", "composite-brun-deck-bassin", "terrasse-kebony-surelevee", "carrelage-aspect-bois-garde-corps-feuilles", "terrasse-bambou-xtreme-spa"],
    titreGalerie: "Des terrasses pour s'inspirer",
    lyon: ["Votre terrasse à Rillieux-la-Pape", "Le rendez-vous a lieu chez vous : nous relevons les niveaux, l'accès au jardin, l'écoulement de l'eau et l'exposition, et vous comparez les échantillons sur place. Vous recevez ensuite le plan 3D et un devis détaillé.", "Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier."],
    lyonCourt: "Rendez-vous chez vous : niveaux, accès et exposition sont relevés, puis vous recevez le plan 3D et un devis détaillé.",
    faqTitre: "Vos questions sur votre terrasse à Rillieux",
    faq: [
      ["Quel est le prix d'une terrasse à Rillieux-la-Pape ?", "Il dépend de la surface, du revêtement, de la structure et des contraintes du terrain. Après le rendez-vous, gratuit, vous recevez un devis détaillé ligne par ligne."],
      ["Avez-vous un showroom ?", "Non : nous venons chez vous avec les échantillons. Vous les voyez à la lumière de votre jardin et à côté de votre façade, ce qu'un showroom ne permet pas."],
      ["Faut-il une autorisation ?", "Une terrasse de plain-pied, non couverte, est en principe dispensée d'autorisation. Surélevée ou couverte, elle peut demander une déclaration préalable ou un permis de construire selon sa surface. Nous vérifions avec vous les règles du PLU."],
      ["Combien de temps dure une terrasse en bois ?", "Cela dépend de l'essence, de la structure et de l'entretien. Nos essences phares sont garanties de 15 ans (thermopin) à 50 ans (accoya), garanties fabricants, sous conditions ; sur structure aluminium, rien ne pourrit sous les lames."],
      ["Réalisez-vous des terrasses autour de piscine ?", `Oui, avec des revêtements antidérapants et qui chauffent peu. Voir la <a href="/terrasse-piscine-lyon/">terrasse de piscine</a>.`],
    ],
    ctaTitre: "Un projet de terrasse à Rillieux ?", ctaTexte: "Laissez votre numéro : nous vous rappelons pour en parler et organiser le rendez-vous, gratuit et sans engagement.",
    apres: complements,
  }),
};

export const CONTENUS = {
  "/terrasse-lyon/": terrasseLyon,
  "/terrasse-rillieux-la-pape/": terrasseRillieux,
  "/terrasse-restaurant-chr-lyon/": terrasseRestaurant,
  "/terrasse-camping-hpa/": terrasseCamping,
  "/pergolas-lyon/": pergolas,
  "/realisations/": realisations,
  "/nos-terrasses/": nosTerrasses,
  "/terrasse-sur-plots-lyon/": terrassePlots,
  "/terrasse-balcon-lyon/": terrasseBalcon,
  "/terrasse-piscine-lyon/": terrassePiscine,
  "/toit-terrasse-lyon/": toitTerrasse,
  "/terrasse-sur-pilotis-lyon/": terrassePilotis,
  "/carport-lyon/": carport,
  "/store-banne-lyon/": storeBanne,
  "/terrasse-composite-lyon/": { ...terrasseComposite, corps: terrasseComposite.corps + decouvrir("/terrasse-composite-lyon/") },
  "/bardage-aluminium-lyon/": bardageAluminium,
  "/terrasse-carrelage-lyon/": { ...terrasseCarrelage, corps: terrasseCarrelage.corps + decouvrir("/terrasse-carrelage-lyon/") },
  "/terrasse-aluminium-lyon/": { ...terrasseAluminium, corps: terrasseAluminium.corps + decouvrir("/terrasse-aluminium-lyon/") },
  "/garde-corps-aluminium-lyon/": gardeCorps,
  "/pergola-bioclimatique-lyon/": pergolaBioclimatique,
  "/pergola-toile-retractable-lyon/": pergolaToileRetractable,
  "/pergola-toit-fixe-lyon/": pergolaToitFixe,
  "/bardage-bois-lyon/": bardageBois,
  "/terrasse-bois-lyon/": { ...terrasseBois, corps: terrasseBois.corps + decouvrir("/terrasse-bois-lyon/") },
  "/structure-terrasse-lyon/": structures,
};
