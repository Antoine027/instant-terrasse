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
  ["/terrasse-carrelage-lyon/", "Terrasse carrelage", "carrelage-bh-grand-format-baie", "Grès cérame posé sans colle, sur plots."],
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
  title: "Terrasse bois Lyon : thermopin, kebony, accoya, ipé | Instant Terrasse",
  description: "Terrasse bois sur mesure à Lyon : thermopin, thermofrêne, kebony, accoya, bambou sur structure aluminium, ou ipé, cumaru, mélèze, douglas sur structure traditionnelle.",
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
  ["structure-rails-plots-entete", ["Structure pour bois et composite"]],
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
const ORDRE_STRUCTURES = [...GALERIE_STRUCTURES].sort(([a, ta], [b, tb]) => GROUPES_STRUCTURES.indexOf(ta[0]) - GROUPES_STRUCTURES.indexOf(tb[0]) || (RANG[a] ?? 0.5) - (RANG[b] ?? 0.5)).map(([c]) => c);

const compBois = tableau(
  "comparatif-bois",
  "Comparer en quelques critères",
  "Les deux techniques ont leur place. Voici ce qui les distingue, pour choisir en connaissance de cause.",
  ["Structure traditionnelle", "Structure aluminium"],
  [
    ["Ossature", "Lambourdes en bois", "Rails en aluminium sur plots réglables"],
    ["Face à l'humidité", "Les lambourdes restent sensibles à l'eau stagnante avec les années", "Imputrescible : rien ne pourrit sous les lames"],
    ["Stabilité", "Le bois de l'ossature peut travailler, se vriller", "Rails rectilignes qui ne se déforment pas"],
    ["Mise à niveau", "Plots réglables sous les lambourdes, en bois qui peut travailler avec le temps", "Plots réglables sous des rails aluminium rectilignes : la planéité tient dans le temps"],
    ["Fixation des lames", "Vissées : chaque vis perce la lame, l'eau peut s'y infiltrer et la vis finir par s'arracher", "Clips invisibles, testés à 1,5 à 2,5 fois la résistance demandée par la norme"],
    ["Écoulement de l'eau", "L'eau peut stagner sur les lambourdes, sous les lames", "Lames sans contact direct avec l'ossature, espacement constant entre les lames"],
    ["Ventilation", "Selon la hauteur disponible", "Circulation d'air prévue entre ossature et lames"],
    ["Revêtements possibles", "Toutes nos essences de bois", "Nos essences phares, composite, carrelage, lames aluminium"],
    ["Budget", "Généralement plus économique à l'achat", "Investissement plus élevé, pensé pour durer"],
  ],
  [
    ["La traditionnelle, si…", "vous voulez une essence comme l'ipé, le cumaru ou le mélèze, avec un budget maîtrisé."],
    ["L'aluminium, si…", "vous cherchez la durabilité et la planéité dans le temps, avec nos essences phares ou du composite."],
  ]
);

const compCarrelage = tableau(
  "comparatif-carrelage",
  "Comparer en quelques critères",
  "Le carrelage extérieur se pose sans colle, en dalles épaisses sur des plots. La question est ce qu'il y a dessous.",
  ["Sur plots simples", "Sur structure aluminium"],
  [
    ["Principe", "Chaque dalle repose directement sur des plots placés à ses angles", "Les dalles reposent sur des rails aluminium, eux-mêmes posés sur plots"],
    ["Support idéal", "Support existant stable : dalle béton, toit-terrasse, ancienne terrasse", "Sols durs ou stabilisés, supports irréguliers, grandes hauteurs, sans couler de dalle béton"],
    ["Rigidité", "Bonne, à condition que le support soit sain", "Ossature continue, très rigide, qui répartit les charges"],
    ["Planéité", "Réglage plot par plot", "Rails réglés une fois, toute la surface suit"],
    ["Sous le pied", "Une dalle peut bouger ou « pianoter » si un plot travaille", "Cadre continu et cales amortissantes : pas de dalle qui bouge ni qui claque"],
    ["Formats et calepinage", "Formats courants, pose à joints alignés", "Grands formats, joints décalés, mélange de formats ou de bois et carrelage"],
    ["Rapidité et budget", "Pose rapide, solution la plus économique", "Plus de matériel, budget plus élevé"],
  ],
  [
    ["Les plots simples, si…", "vous avez déjà une dalle béton ou un toit-terrasse en bon état et une hauteur raisonnable à rattraper."],
    ["La structure aluminium, si…", "le support est irrégulier, la hauteur importante, ou si vous voulez la terrasse la plus stable possible."],
  ]
);

// ---------- Nos structures ----------
const structures = {
  title: "Structure de terrasse aluminium ou traditionnelle à Lyon | Instant Terrasse",
  description: "Structure aluminium sur plots réglables, structure traditionnelle sur lambourdes ou dalles sur plots : la base qui fait durer votre terrasse. Lyon et sa région.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Nos structures", "de terrasse"], kicker: "Structure aluminium garantie 20 ans", photo: "structure-rails-plots-entete", position: "50% 50%",
  chapo: "La durée de vie d'une terrasse se joue sous les lames : nous adaptons la structure à votre terrain et à votre revêtement.",
  actions: `<a class="bouton" href="#structures-bois">Structures bois</a> <a class="bouton bouton-blanc" href="#structures-carrelage">Structures carrelage</a>` })}

<section id="terrains" class="bloc">
  <div class="conteneur">
    <h2>Une structure adaptée à chaque terrain</h2>
    <p class="chapo">Quelle que soit la nature du support, nous avons une structure adaptée. Nous le vérifions dès la visite.</p>
    <div class="grille grille-3 terrains-car">
      <div class="carte"><h3>Sol dur</h3><p>Dalle béton, ancienne terrasse : la structure se pose directement ou sur cales, pour une terrasse de faible épaisseur.</p></div>
      <div class="carte"><h3>Sol stabilisé</h3><p>Gravier compacté : les plots réglables reprennent les écarts de niveau, sans couler de béton.</p></div>
      <div class="carte"><h3>Toit-terrasse et sol étanche</h3><p>La structure repose sur l'étanchéité sans la percer. Voir notre page <a href="/toit-terrasse-lyon/">toit-terrasse</a>.</p></div>
      <div class="carte"><h3>Terrasse surélevée</h3><p>Avec des réhausses, les plots montent jusqu'à environ 40 cm. Au-delà, la terrasse repose sur des poutres et des poteaux.</p></div>
      <div class="carte"><h3>Terrain en pente ou instable</h3><p>La terrasse est portée par des fondations sur poteaux : c'est la <a href="/terrasse-sur-pilotis-lyon/">terrasse sur pilotis</a>.</p></div>
    </div>
  </div>
</section>

<section id="structures-bois" class="bloc partie bloc-alt">
  <div class="conteneur">
    <h2 class="partie-titre">Terrasse bois</h2>
    <p class="chapo">Deux techniques pour porter des lames de bois : la structure aluminium sur plots, ou la structure traditionnelle sur lambourdes.</p>
  </div>
</section>
<div class="struct-car struct-car-bois">
<section id="structure-aluminium" class="bloc bloc-alt sous-partie">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit">${img("structure-aluminium", "Système de structure aluminium : plot réglable, rail aluminium, clip et pattes de fixation sous une lame de terrasse", 404)}</div>
    <div>
      <p class="sous-titre">Notre solution phare</p>
      <h3 class="h2">Structure aluminium sur plots</h3>
      <p>Des plots réglables en hauteur posés sur le support, des rails en aluminium livrés avec leurs clips, et des lames qui viennent s'y clipser : aucune vis ne traverse la lame.</p>
      <ul class="puces puces-longues">
        <li><strong>Garantie 20 ans</strong><span class="li-det"> : nos structures aluminium sont garanties 20 ans.</span></li>
        <li><strong>Fixation invisible</strong><span class="li-det"> : pas de vis en surface, donc pas de trou où l'eau s'infiltre, et des lignes de lames parfaitement droites.</span></li>
        <li><strong>Des clips qui tiennent</strong><span class="li-det"> : ils suivent la dilatation du bois sans casser, et leur résistance à l'arrachement dépasse de 1,5 à 2,5 fois l'exigence de la norme.</span></li>
        <li><strong>Démontable</strong><span class="li-det"> : une lame se déclipse et se remet en place sans rien abîmer, pour accéder dessous ou remplacer une lame.</span></li>
        <li><strong>Imputrescible</strong><span class="li-det"> : l'aluminium ne pourrit pas, ne gonfle pas et résiste à la corrosion, y compris autour des piscines.</span></li>
        <li><strong>Ventilée</strong><span class="li-det"> : les lames ne touchent pas directement l'ossature, l'air circule et le bois sèche plus vite.</span></li>
        <li><strong>Conforme et testée</strong><span class="li-det"> : un système testé par le FCBA (l'institut technologique de la filière bois) et conforme au DTU 51-4, la norme des terrasses en bois.</span></li>
        <li><strong>Fabriquée en France</strong><span class="li-det">, en aluminium majoritairement recyclé et entièrement recyclable.</span></li>
      </ul>
      <button class="voir-tout" type="button" onclick="this.closest('.sous-partie').classList.add('detail');this.remove()">Voir le détail</button>
    </div>
  </div>
</section>



<section id="structure-traditionnelle" class="bloc sous-partie">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit photo-produit-trad">${imgPhoto("structure-traditionnelle-plot-lambourde", { sizes: "(max-width:1060px) 80vw, 420px" })}</div>
    <div>
      <p class="sous-titre">La technique classique</p>
      <h3 class="h2">Structure traditionnelle</h3>
      <p>La technique classique de la terrasse en bois : des lambourdes en bois posées sur des plots réglables, et des lames vissées sur les lambourdes.</p>
      <ul class="puces">
        <li><strong>Plots réglables</strong><span class="li-det"> : ils mettent la terrasse de niveau sur un sol irrégulier.</span></li>
        <li><strong>Lambourdes en bois</strong><span class="li-det"> : l'ossature qui porte les lames.</span></li>
        <li><strong>Lames vissées</strong><span class="li-det"> : pour toutes nos essences, dont l'ipé, le cumaru, le mélèze, le douglas…</span></li>
      </ul>
      <button class="voir-tout" type="button" onclick="this.closest('.sous-partie').classList.add('detail');this.remove()">Voir le détail</button>
      <p>Généralement plus économique à l'achat que la structure aluminium. Le <a href="#comparatif-bois">comparatif ci-dessous</a> vous aide à choisir entre les deux.</p>
    </div>
  </div>
</section>
</div>
${compBois.replace('class="bloc"', 'class="bloc bloc-alt"')}

<section id="structures-carrelage" class="bloc partie bloc-alt">
  <div class="conteneur">
    <h2 class="partie-titre">Terrasse carrelage</h2>
    <p class="chapo">Le carrelage extérieur se pose sans colle, en dalles épaisses : sur une structure aluminium, ou directement sur des plots.</p>
  </div>
</section>
<div class="struct-car struct-car-carrelage">
<section id="carrelage-structure-aluminium" class="bloc bloc-alt sous-partie">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit photo-produit-trad">${imgPhoto("carrelage-structure-aluminium-schema", { sizes: "(max-width:1060px) 90vw, 520px" })}</div>
    <div>
      <p class="sous-titre">Pour tous les supports</p>
      <h3 class="h2">Carrelage sur structure aluminium</h3>
      <p>Les dalles reposent sur des rails aluminium, eux-mêmes posés sur des plots réglables.</p>
      <ul class="puces">
        <li><strong>Supports irréguliers et grandes hauteurs</strong><span class="li-det"> : sols durs ou stabilisés, sans couler de dalle béton.</span></li>
        <li><strong>Calepinage libre</strong><span class="li-det"> : grands formats, joints décalés, mélange de formats ou de bois et carrelage.</span></li>
        <li><strong>La terrasse la plus stable possible</strong><span class="li-det">, pour un budget plus élevé.</span></li>
      </ul>
      <button class="voir-tout" type="button" onclick="this.closest('.sous-partie').classList.add('detail');this.remove()">Voir le détail</button>
    </div>
  </div>
</section>

<section id="carrelage-plots" class="bloc sous-partie">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit photo-produit-trad">${imgPhoto("carrelage-plots-schema", { sizes: "(max-width:1060px) 90vw, 520px" })}</div>
    <div>
      <p class="sous-titre">Sur support existant</p>
      <h3 class="h2">Carrelage sur plots</h3>
      <p>Chaque dalle repose directement sur des plots réglables placés à ses angles, sans rail : posé sans colle ni fondation.</p>
      <ul class="puces">
        <li><strong>Support existant stable</strong><span class="li-det"> : dalle béton, toit-terrasse, ancienne terrasse.</span></li>
        <li><strong>Formats courants</strong><span class="li-det">, pose à joints alignés.</span></li>
        <li><strong>Pose rapide</strong><span class="li-det">, solution la plus économique.</span></li>
      </ul>
      <button class="voir-tout" type="button" onclick="this.closest('.sous-partie').classList.add('detail');this.remove()">Voir le détail</button>
      <p>Voir aussi la <a href="/terrasse-sur-plots-lyon/">terrasse sur plots</a> et la <a href="/terrasse-carrelage-lyon/">terrasse carrelage</a>.</p>
    </div>
  </div>
</section>
</div>
${compCarrelage}

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie(GALERIE_STRUCTURES.map(([cle]) => cle), { titre: "Nos structures en images", intro: "Choisissez un type de structure pour n'afficher que celui qui vous intéresse.", legende: "Illustrations", types: ["Structure pour bois et composite", "Structure pour carrelage", "Structure pour lames aluminium"], typesDe: (p) => GALERIE_STRUCTURES.find(([c]) => c === p.cle)[1], ordre: ORDRE_STRUCTURES })}
  </div>
</section>
${cta("Quelle structure pour votre terrain ?")}`,
};

// ---------- Bardage bois ----------
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
  title: "Bardage bois Lyon : accoya, kebony, thermofrêne | Instant Terrasse",
  description: "Bardage bois sur mesure à Lyon : accoya gris ou naturel, kebony, bambou X-treme, thermofrêne, thermopin clear, thermo épicéa. Un bardage assorti à votre terrasse. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Aménagements", h1: ["Bardage bois", "sur mesure"], kicker: "Façades, murs et abris à Lyon et dans sa région", photo: "bardage-thermofrene-maison", position: "70% 45%",
  chapo: "Habillez une façade, une extension ou une clôture avec des bois sélectionnés pour durer, assortis à votre terrasse.",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#essences-bardage">Voir les essences</a>` })}

<section id="essences-bardage" class="bloc">
  <div class="conteneur">
    <h2>Nos essences de bardage</h2>
    <p class="chapo">Des bois sélectionnés pour leur stabilité : un bardage doit rester droit et beau malgré le soleil et la pluie.</p>
    <div class="grille grille-3">
      ${bardageEssences.map(([n, t, g]) => `<div class="carte carte-lame"><div class="lames">${PHOTOS.filter((p) => p.categorie === "lame-bardage" && p.essence === n).map((p) => imgPhoto(p.cle, { sizes: "276px" })).join("")}</div><h3>${n}</h3><p>${t}</p><p class="garantie">Garantie fabricant : ${g.toLowerCase()}, selon conditions</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("bardage-bois", { titre: "Nos bardages en situation", legende: "Illustrations de bardages dans nos essences" })}
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Posé sur rails aluminium, sans une vis apparente</h2>
      <p>Comme nos terrasses, nos bardages se clipsent sur des rails en aluminium fixés au mur. Rien ne traverse la lame : la façade reste nette, et le bois n'est pas fragilisé.</p>
      <ul class="puces">
        <li><strong>Bardage ventilé</strong> : un système conforme au DTU 41-2, la règle de l'art des bardages bois.</li>
        <li><strong>Pose verticale ou horizontale</strong>, jointive ou à claire-voie, avec des espacements réguliers.</li>
        <li><strong>Sur tous les murs</strong> : béton, ossature bois ou structure métallique.</li>
        <li><strong>Démontable</strong> : une lame abîmée se remplace sans toucher aux autres.</li>
        <li><strong>Structure garantie 20 ans</strong>, en aluminium majoritairement recyclé.</li>
      </ul>
    </div>
    <div>
      <h2>Pourquoi un bardage bois ?</h2>
      <ul class="puces">
        <li><strong>Esthétique</strong> : il réchauffe une façade et s'accorde avec le jardin.</li>
        <li><strong>Protection</strong> : il habille et protège le mur des intempéries.</li>
        <li><strong>Cohérence</strong> : la même essence que votre <a href="/terrasse-bois-lyon/">terrasse</a> pour un extérieur harmonieux.</li>
        <li><strong>Évolution naturelle</strong> : le bois grise avec le temps, ou d'emblée avec l'accoya gris.</li>
      </ul>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Vous préférez une façade sans aucun entretien ? Découvrez le <a href="/bardage-aluminium-lyon/">bardage aluminium</a>.</p>
    </div>
  </div>
</section>

<section id="pose-bardage" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("bardage-pose", { titre: "La pose à clipser en images", intro: "Les rails sont fixés au mur, puis chaque lame vient s'y clipser.", legende: "Illustrations du système de pose" })}
  </div>
</section>
${cta("Un projet de bardage ?")}`,
};

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

const pergolaBioclimatique = {
  title: "Pergola bioclimatique Lyon : lames orientables | Instant Terrasse",
  description: "Pergola bioclimatique aluminium sur mesure à Lyon : lames orientables motorisées, adossée ou autoportée, stores latéraux et éclairage en option. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Pergola bioclimatique", "sur mesure"], kicker: "Pergolas aluminium sur mesure à Lyon et dans sa région",
    chapo: "Des lames orientables sur une structure aluminium : ouvertes pour le soleil, inclinées pour l'ombre, fermées contre la pluie.",
    photo: "pergola-bioclimatique-salon-piscine",
    atouts: [
      ["Lames orientables", "Vous réglez la lumière et la ventilation selon l'heure et la saison, d'un geste sur la télécommande."],
      ["Abri contre la pluie", "Lames fermées, la toiture devient étanche et l'eau est évacuée par les poteaux."],
      ["Adossée ou autoportée", "Fixée contre la façade ou indépendante au milieu du jardin, au bord de la piscine."],
      ["Fermetures latérales", "Stores verticaux intégrés pour se protéger du vent, du soleil rasant ou des regards."],
      ["Aluminium sans entretien", "Une structure qui ne rouille pas et ne se repeint pas, dans le coloris de votre choix."],
      ["Options de confort", "Éclairage intégré, capteurs pluie et vent, pilotage connecté : à définir lors du devis."],
    ],
    galerieCat: "pergola-bioclimatique",
    titreGalerie: "Pergolas bioclimatiques en situation",
    details: `<h2>Bien choisir sa pergola bioclimatique</h2>
      <p>Les dimensions, l'orientation de la terrasse et l'usage décident de tout : coin repas, salon, cuisine d'été ou abri de piscine. Nous venons sur place pour définir la taille, le sens des lames, la position des poteaux et les options utiles.</p>
      <p>Avant toute installation, une pergola peut nécessiter une déclaration préalable en mairie selon sa surface et votre commune. Nous vous indiquons la démarche lors de la visite.</p>`,
    voisins: autresPergolas("/pergola-bioclimatique-lyon/"),
    ctaTitre: "Un projet de pergola bioclimatique ?",
  }),
};

const pergolaToileRetractable = {
  title: "Pergola à toile rétractable Lyon | Instant Terrasse",
  description: "Pergola aluminium à toile rétractable sur mesure à Lyon : de l'ombre quand vous voulez, le ciel ouvert le reste du temps. Motorisation et stores latéraux. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Pergola à toile", "rétractable"], kicker: "Pergolas aluminium sur mesure à Lyon et dans sa région",
    chapo: "Une toile qui se déploie ou se replie à la demande : de l'ombre aux heures chaudes, le ciel dégagé le reste du temps.",
    photo: "pergola-toile-retractable-facade",
    atouts: [
      ["Ombre à la demande", "La toile se déploie et se replie entièrement, en quelques secondes."],
      ["Luminosité préservée", "Toile repliée, la terrasse et l'intérieur de la maison gardent toute leur lumière."],
      ["Grandes dimensions", "Une bonne solution pour couvrir une large terrasse adossée à la façade."],
      ["Motorisation", "Commande par télécommande, avec automatismes vent et soleil en option."],
      ["Stores latéraux", "Des stores verticaux peuvent fermer les côtés exposés."],
      ["Choix des coloris", "Structure et toile assorties à votre façade et à vos menuiseries."],
    ],
    galerieCat: "pergola-toile-retractable",
    titreGalerie: "Pergolas à toile rétractable en situation",
    details: `<h2>Toile rétractable ou bioclimatique ?</h2>
      <p>La toile rétractable est idéale si vous cherchez surtout de l'ombre en été et la lumière le reste de l'année. La <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a> va plus loin : ses lames orientables règlent finement la lumière et vous abritent de la pluie.</p>
      <p>Nous vous aidons à trancher selon l'orientation de votre terrasse et l'usage que vous en faites.</p>`,
    voisins: autresPergolas("/pergola-toile-retractable-lyon/"),
    ctaTitre: "Un projet de pergola à toile ?",
  }),
};

const pergolaToitFixe = {
  title: "Pergola à toit fixe aluminium Lyon | Instant Terrasse",
  description: "Pergola aluminium à toit fixe sur mesure à Lyon : un abri permanent contre la pluie et le soleil, adossé ou autoporté. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Pergola", "à toit fixe"], kicker: "Pergolas aluminium sur mesure à Lyon et dans sa région",
    chapo: "Une structure aluminium épurée et une toiture pleine : un abri permanent, contre la pluie comme contre le soleil.",
    photo: "pergola-toit-fixe-piscine",
    atouts: [
      ["Abri permanent", "Une toiture pleine qui protège la terrasse en toute saison."],
      ["Lignes épurées", "Un profil plat et contemporain, sans pièce mobile apparente."],
      ["Simplicité", "Pas de mécanisme : une solution robuste et sans réglage."],
      ["Adossée ou autoportée", "Contre la façade ou indépendante dans le jardin."],
      ["Fermetures latérales", "Stores verticaux en option pour fermer les côtés."],
      ["Aussi en carport", "La même structure peut abriter un véhicule : voir notre <a href=\"/carport-lyon/\">carport</a>."],
    ],
    galerieCat: "pergola-toit-fixe",
    titreGalerie: "Pergolas à toit fixe en situation",
    details: `<h2>Pour qui ?</h2>
      <p>Le toit fixe convient si vous voulez avant tout un espace abrité, utilisable même par temps de pluie, sans vous soucier d'ouvrir ou de fermer quoi que ce soit.</p>
      <p>Si vous voulez aussi pouvoir faire entrer le soleil, regardez la <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a> et ses lames orientables.</p>`,
    voisins: autresPergolas("/pergola-toit-fixe-lyon/"),
    ctaTitre: "Un projet de pergola à toit fixe ?",
  }),
};

// ---------- Garde-corps aluminium ----------
const gardeCorps = {
  title: "Garde-corps aluminium Lyon : verre, barreaudage | Instant Terrasse",
  description: "Garde-corps aluminium sur mesure à Lyon pour terrasses, balcons, escaliers et bâtiments professionnels : vitré, barreaudage, lames. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Garde-corps aluminium", "sur mesure"], kicker: "Maisons, logements et bâtiments professionnels, à Lyon", position: "60% 45%",
    chapo: "Sécuriser une terrasse, un balcon, un escalier ou un toit-terrasse sans fermer la vue : des garde-corps aluminium sur mesure.",
    photo: "gc-maison-lisses-noires",
    atouts: [
      ["Vitré", "Des panneaux de verre pour garder toute la vue et la lumière."],
      ["Barreaudage", "Des barreaux verticaux ou des lisses horizontales, pour un style classique ou contemporain."],
      ["Remplissage bois ou lames", "Des lames pour préserver l'intimité, assorties à votre terrasse ou à votre bardage."],
      ["Aluminium sans entretien", "Pas de rouille, pas de peinture à refaire, dans le coloris de votre choix."],
      ["Toutes les configurations", "Terrasses, balcons, escaliers, rampants, toits-terrasses, coursives."],
      ["Particuliers et professionnels", "Maisons, immeubles de logements, bureaux, commerces et établissements recevant du public."],
    ],
    galerieCat: [...PHOTOS.filter((p) => p.categorie === "garde-corps").map((p) => p.cle), "carrelage-gris-garde-corps-verre-depoli", "carrelage-beige-pergola-toit-fixe", "restaurant-terrasse-gabions"],
    typesGalerie: ["Vitré", "Barreaudage", "Découpe laser", "Remplissage bois", "Main courante bois"],
    limiteGalerie: 12,
    titreGalerie: "Garde-corps en situation",
    introGalerie: "Choisissez un type de garde-corps.",
    details: `<h2>Un garde-corps, c'est d'abord de la sécurité</h2>
      <p>Hauteur, espacement des barreaux, résistance du support : un garde-corps doit respecter des règles précises, plus exigeantes encore dans les bâtiments recevant du public. Nous définissons le modèle et les fixations adaptés à votre support lors de la visite.</p>
      <p>Pour une terrasse neuve, le plus simple est de prévoir le garde-corps dès la conception : les fixations s'intègrent proprement à la structure.</p>`,
    complement: "Vous construisez une terrasse surélevée, sur pilotis ou un toit-terrasse ? Nous pouvons étudier la terrasse et son garde-corps ensemble.",
    titreVoisins: "Pour aller avec votre garde-corps",
    voisins: [
      ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "La solution pour les terrains en pente."],
      ["/toit-terrasse-lyon/", "Toit-terrasse", "Créer un espace de vie sur une toiture plate."],
      ["/terrasse-balcon-lyon/", "Balcon", "Rénover le sol d'un balcon, sans travaux lourds."],
      ["/terrasse-restaurant-chr-lyon/", "Professionnels", "Terrasses de restaurants, cafés et hôtels."],
    ],
    ctaTitre: "Un projet de garde-corps ?",
  }),
};

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
  title: "Terrasse aluminium Lyon : lames alu aspect bois | Instant Terrasse",
  description: "Terrasse en lames aluminium sur mesure à Lyon : imputrescible, stable, sans entretien, en décor bois ou teinte unie. Piscines, balcons, restaurants. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Terrasse aluminium</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses aluminium à Lyon et dans sa région", photo: "alu-piscine-aspect-teck", position: "60% 50%",
  chapo: `<span class="en-long">L'aspect du bois, sans ses contraintes : des lames aluminium qui ne pourrissent pas, ne se déforment pas et ne se traitent pas.</span><span class="en-court">Décor bois ou teinte unie : des lames qui ne pourrissent pas et ne demandent aucun traitement.</span>`,
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#teintes">Voir les teintes</a>` })}

<section id="teintes" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Décor bois ou teinte unie</p>
    <h2>Nos teintes</h2>
    <p class="chapo">Décors bois ou gris uni, en lames garanties 20 ans par le fabricant. Vous voyez les échantillons chez vous, lors du rendez-vous.</p>
    <div class="nuancier" data-galerie>${PHOTOS.filter((p) => p.categorie === "teinte-alu").sort((a, b) => ORDRE_TEINTES_ALU.indexOf(a.essence) - ORDRE_TEINTES_ALU.indexOf(b.essence)).map((p) => `<figure tabindex="0" aria-label="Agrandir : ${p.essence}">${imgPhoto(p.cle, { sizes: "(max-width:560px) 45vw, 230px" })}<figcaption>${p.essence}</figcaption></figure>`).join("")}</div>
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
const GALERIE_CARR = ["carrelage-toit-terrasse-montagnes", "carrelage-bh-aspect-bois-gris-vue", "carrelage-bh-pergola-cour", "carrelage-aspect-bois-garde-corps-feuilles", "carrelage-bh-aspect-bois-clair-pergola", "carrelage-gris-garde-corps-verre-depoli", "carrelage-bh-aspect-bois-gris-jardin", "carrelage-bh-grand-format-baie", "carrelage-bh-aspect-bois-clair-transats", "carrelage-bh-sureleve-gazon", "carrelage-bh-aspect-bois-gris-table", "carrelage-bh-pergola-salon"];
const nuancierCarr = (aspect, classe, sizes) => `<div class="nuancier nuancier-carr ${classe}" data-galerie>${PHOTOS.filter((p) => p.categorie === "teinte-carrelage" && p.essence === aspect).sort((a, b) => a.cle.localeCompare(b.cle)).map((p) => `<figure tabindex="0" aria-label="Agrandir : ${p.alt}">${imgPhoto(p.cle, { sizes })}</figure>`).join("")}</div>`;

const terrasseCarrelage = {
  title: "Terrasse carrelage Lyon : grès cérame 2 cm sur plots | Instant Terrasse",
  description: "Terrasse en carrelage sur mesure à Lyon : dalles de grès cérame 2 cm aspect pierre ou bois, posées à sec sur plots ou sur structure aluminium, du 60 × 60 au 120 × 120. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ['<span class="pc-nowrap">Terrasse carrelage</span>', 'sur mesure <span class="lyon-l">à Lyon</span>'], kicker: "Terrasses carrelage à Lyon et dans sa région", photo: "carrelage-beige-pergola-toit-fixe", position: "60% 70%",
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
    <div class="structure-bandeau"><a class="carte carte-structure" href="/terrasse-sur-plots-lyon/"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur plots</h3><p><span class="cs-long">Sur une dalle béton ou un toit-terrasse en bon état, les dalles reposent sur des plots réglables placés sous leurs angles : la solution la plus simple.</span><span class="cs-court">Sur une dalle béton ou un toit-terrasse existant.</span><span class="cs-lien">Voir la pose sur plots&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("carrelage-plots-schema", { sizes: "(max-width:700px) 120px, 300px" })}</span></a></div>
    <div class="structure-bandeau structure-bandeau-suite"><a class="carte carte-structure" href="/structure-terrasse-lyon/#comparatif-carrelage"><div><span class="cs-kicker">Comment c'est posé</span><h3>Sur structure aluminium</h3><p><span class="cs-long">Sur un sol stabilisé, des rails aluminium sur plots réglables et des cales amortissantes remplacent la dalle béton : surface parfaitement plane. Structure garantie 20 ans.</span><span class="cs-court">Sans dalle béton, surface parfaitement plane.</span><span class="cs-lien">Voir la structure&nbsp;→</span></p></div><span class="cs-img">${imgPhoto("structure-aluminium-carrelage", { sizes: "(max-width:700px) 120px, 300px" })}</span></a></div>
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
  title: "Bardage aluminium Lyon : façade sans entretien | Instant Terrasse",
  description: "Bardage aluminium sur mesure à Lyon : lames thermolaquées dans de nombreuses teintes RAL, fixation invisible, sans entretien. Façades, murs, plafonds extérieurs. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Aménagements", h1: ["Bardage aluminium", "sur mesure"], kicker: "Façades sans entretien à Lyon et dans sa région", photo: "bardage-alu-vertical-brun-escalier", position: "60% 50%",
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
  title: "Terrasse composite Lyon : sur structure aluminium | Instant Terrasse",
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
const storeBanne = {
  title: "Store banne Lyon : coffre, motorisation, sur mesure | Instant Terrasse",
  description: "Store banne sur mesure à Lyon : coffre intégral, toile au choix, motorisation et automatismes vent et soleil, lambrequin déroulant. De l'ombre à la demande sur votre terrasse. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Store banne", "sur mesure"], kicker: "Protections solaires à Lyon et dans sa région",
    chapo: "De l'ombre en quelques secondes, et une façade dégagée le reste du temps : la protection solaire la plus simple.",
    photo: "store-banne-coffre-bardage", position: "45% 40%",
    atouts: [
      ["Coffre intégral", "Toile et bras sont rangés dans un coffre fermé : protégés de la pluie et de la poussière, ils durent plus longtemps."],
      ["Motorisation", "Ouverture et fermeture à la télécommande, sans manivelle."],
      ["Automatismes", "Capteurs vent et soleil en option : le store se replie seul quand le vent se lève."],
      ["Lambrequin déroulant", "Une toile verticale à l'avant pour couper le soleil rasant du soir ou les regards."],
      ["La toile de votre choix", "Unie, claire ou foncée, vive ou discrète : choisie avec vous sur échantillons, en accord avec la façade."],
      ["Sans structure au sol", "Fixé à la façade, il libère entièrement la terrasse, sans poteau."],
    ],
    galerieCat: "store-banne",
    titreGalerie: "Stores bannes en situation",
    details: `<h2>Store banne ou pergola ?</h2>
      <p>Le store banne offre de l'ombre à la demande, sans poteau et pour un budget plus léger. La <a href="/pergola-bioclimatique-lyon/">pergola bioclimatique</a> va plus loin : elle vous abrite aussi de la pluie et devient une vraie pièce couverte.</p>
      <p>La largeur, l'avancée et la hauteur de pose dépendent de votre façade et de l'orientation de la terrasse : nous les définissons ensemble lors de la visite.</p>`,
    complement: "Nous venons chez vous avec les échantillons de toiles, et le plan 3D de votre projet est offert.",
    voisins: autresPergolas("/store-banne-lyon/").slice(0, 3),
    ctaTitre: "Un projet de store banne ?",
  }),
};

// ---------- Carport ----------
const carport = {
  title: "Carport aluminium Lyon : abri voiture sur mesure | Instant Terrasse",
  description: "Carport aluminium sur mesure à Lyon : abri voiture à toit plat, adossé ou autoporté, sans entretien et dans la teinte de vos menuiseries. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Carport aluminium", "sur mesure"], kicker: "Abris voiture à Lyon et dans sa région",
    chapo: "Un carport aluminium à toit plat, aux lignes soignées : votre voiture à l'abri de la pluie, de la grêle et du soleil.",
    photo: "carport-garage-gravier", position: "55% 45%",
    atouts: [
      ["Protection toute l'année", "Pluie, grêle, neige, soleil : la voiture reste à l'abri, et vous montez à pied sec."],
      ["Lignes épurées", "Un toit plat et des profils fins, dans l'esprit des pergolas contemporaines."],
      ["Adossé ou autoporté", "Fixé contre la façade ou le garage, ou indépendant sur l'allée."],
      ["Aluminium sans entretien", "Ni rouille, ni peinture à refaire, dans la teinte de vos menuiseries."],
      ["Sur mesure", "Pour une ou deux voitures, un camping-car ou un abri de jardin, selon la place disponible."],
      ["Moins de travaux qu'un garage", "Pas de maçonnerie lourde : une structure légère posée sur des fixations adaptées au sol."],
    ],
    galerieCat: "carport",
    titreGalerie: "Carports en situation",
    details: `<h2>Avant de se lancer</h2>
      <p>Un carport est une construction : selon sa surface et votre commune, une déclaration préalable de travaux peut être nécessaire. Nous vous indiquons la démarche lors de la visite.</p>
      <p>Le même système existe en <a href="/pergola-toit-fixe-lyon/">pergola à toit fixe</a> pour couvrir une terrasse.</p>`,
    complement: "Nous venons voir l'emplacement, l'accès et le sol, et le plan 3D de votre projet est offert.",
    voisins: autresPergolas("/carport-lyon/").slice(0, 3),
    ctaTitre: "Un projet de carport ?",
  }),
};

// ---------- Terrasse sur pilotis ----------
const terrassePilotis = {
  title: "Terrasse sur pilotis Lyon : terrasse surélevée sur mesure | Instant Terrasse",
  description: "Terrasse sur pilotis à Lyon : une terrasse surélevée de plain-pied avec la maison, pour terrain en pente ou rez-de-jardin en contrebas. Garde-corps aluminium, plan 3D offert.",
  corps: pageProduit({
    fil: "Projets",
    h1: ["Terrasse sur pilotis", "surélevée"], kicker: "Terrains en pente et étages à Lyon et dans sa région",
    chapo: "Jardin en contrebas ou en pente : la terrasse sur pilotis sort de plain-pied depuis le séjour et libère de l'espace dessous.",
    photo: "pilotis-garde-corps-verre-salon", position: "65% 50%",
    atouts: [
      ["De plain-pied avec la maison", "On sort du séjour ou de la chambre sans marche, comme sur un balcon, mais avec la surface d'une vraie terrasse."],
      ["Le terrain n'est plus un obstacle", "Pente, talus, sol irrégulier : les poteaux reprennent les différences de niveau, sans terrassement lourd."],
      ["Un espace abrité dessous", "Le dessous de la terrasse protège une voiture, un salon de jardin ou le bois de chauffage."],
      ["Sécurisée par un garde-corps", "Dès 1 m de hauteur de chute, un garde-corps est obligatoire : aluminium à lisses, à barreaux, vitré ou décoratif."],
      ["Le revêtement de votre choix", "Bois, composite ou lames aluminium : le platelage se choisit comme pour une terrasse au sol."],
      ["Étudiée dans son ensemble", "Poteaux, garde-corps, accès au jardin : tout est dessiné sur le plan 3D avant de commander."],
    ],
    galerieCat: "pilotis",
    titreGalerie: "Terrasses sur pilotis en situation",
    details: `<h2>Avant de se lancer</h2>
      <p>Une terrasse surélevée est une construction à part entière : au-delà de 60 cm de hauteur, une déclaration préalable de travaux est en général nécessaire, et un permis de construire selon la surface. Nous regardons la règle de votre commune avec vous.</p>
      <p>Les poteaux reposent sur des fondations adaptées au sol, et la hauteur de chute détermine le <a href="/garde-corps-aluminium-lyon/">garde-corps</a>. Pour comprendre les différentes ossatures, voyez notre page <a href="/structure-terrasse-lyon/">structures de terrasse</a>.</p>`,
    complement: "Nous venons voir la hauteur, la pente et l'accès au jardin, et le plan 3D de votre terrasse est offert.",
    titreVoisins: "Pour aller plus loin",
    voisins: [
      ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Obligatoire sur une terrasse surélevée, il peut aussi l'embellir."],
      ["/structure-terrasse-lyon/", "Structures de terrasse", "Traditionnelle ou aluminium : ce qui porte votre terrasse."],
      ["/terrasse-bois-lyon/", "Terrasse bois", "Les essences pour le platelage, du thermopin à l'ipé."],
    ],
    ctaTitre: "Un projet de terrasse surélevée ?",
  }),
};

// ---------- Comparatif des matériaux ----------
const MATERIAUX = ["Bois", "Composite", "Aluminium", "Carrelage"];
const LIGNES_MATERIAUX = [
  ["Entretien",
    "Un nettoyage par an. Un saturateur pour garder la teinte d'origine ; sans lui, le bois grise naturellement.",
    "De l'eau savonneuse, sans saturateur ni ponçage.",
    "Un nettoyage à l'eau, aucun traitement à refaire.",
    "Balai et eau : les taches ne pénètrent pas."],
  ["Résistance à la chaleur",
    "Le plus agréable pieds nus en plein soleil : le bois chauffe peu.",
    "Chauffe davantage au soleil, surtout en teinte foncée.",
    "Chauffe au soleil mais refroidit vite à l'ombre ; les teintes claires restent les plus confortables.",
    "Insensible à la chaleur ; une teinte claire reste supportable pieds nus."],
  ["Adhérence",
    "Bonne sur une lame propre ; une lame verdie, faute d'entretien, devient glissante.",
    "Surface brossée ou striée qui accroche bien.",
    "Lames striées, pensées pour les plages de piscine.",
    "À choisir en finition antidérapante pour l'extérieur (classement R11 conseillé)."],
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
const nosTerrasses = {
  title: "Terrasse bois, composite, aluminium ou carrelage : comparatif | Instant Terrasse",
  description: "Bois, composite, aluminium ou carrelage : comparez l'entretien, la résistance à la chaleur, l'adhérence et la durabilité des revêtements de terrasse. Conseils à Lyon.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Bois, composite, aluminium", "ou carrelage ?"], kicker: "Comparatif des revêtements de terrasse",
  chapo: "Chaque matériau a ses qualités : le bon choix dépend de l'usage, de l'exposition et de l'entretien que vous acceptez.",
  photo: "terrasse-accoya-naturel-piscine-vue-haut", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-blanc" href="#comparatif">Voir le comparatif</a>` })}

<section id="comparatif" class="bloc">
  <div class="conteneur">
    <h2>Le comparatif</h2>
    <p class="chapo">Quatre critères pour se faire une idée. Lors du rendez-vous, nous apportons les échantillons pour les toucher, au soleil comme à l'ombre.</p>
    <div class="tableau-defile">
      <table class="comparatif comparatif-4">
        <thead><tr><th scope="col"><span class="vh">Critère</span></th>${MATERIAUX.map((m) => `<th scope="col">${m}</th>`).join("")}</tr></thead>
        <tbody>${LIGNES_MATERIAUX.map(([crit, ...v]) => `<tr><th scope="row">${crit}</th>${v.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>En résumé</h2>
    <div class="grille grille-4">
      ${carteProduit("/terrasse-bois-lyon/", "Bois", "Pour le charme d'une matière naturelle, agréable pieds nus.")}
      ${carteProduit("/terrasse-composite-lyon/", "Composite", "Pour l'aspect bois avec un entretien réduit au minimum.")}
      ${carteProduit("/terrasse-aluminium-lyon/", "Aluminium", "Pour une terrasse stable, imputrescible, idéale autour d'une piscine.")}
      ${carteProduit("/terrasse-carrelage-lyon/", "Carrelage", "Pour un style minéral, dans la continuité du sol intérieur.")}
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Et ce qu'il y a dessous</h2>
      <p>Le revêtement ne fait pas tout : c'est la structure qui fait durer une terrasse. Bois ou aluminium, sur plots ou sur pilotis, nous comparons aussi les ossatures sur notre page <a href="/structure-terrasse-lyon/">structures de terrasse</a>, avec un comparatif <a href="/structure-terrasse-lyon/#comparatif-bois">pour le bois</a> et un autre <a href="/structure-terrasse-lyon/#comparatif-carrelage">pour le carrelage</a>.</p>
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
const terrassePlots = {
  title: "Terrasse sur plots Lyon : dalles et lames sur plots réglables | Instant Terrasse",
  description: "Terrasse sur plots réglables à Lyon : dalles de grès cérame ou lames posées sans fondation sur une dalle, un sol stabilisé ou un toit-terrasse. Devis gratuit.",
  corps: pageProduit({
    fil: "Projets",
    h1: ["Terrasse", "sur plots"], kicker: "Dalles et lames sur plots réglables à Lyon",
    chapo: "Des plots réglables posés sur le support existant : une terrasse de niveau, sans béton, et l'eau s'écoule dessous.",
    photo: "ambiance-dalles-sur-plots", position: "55% 55%",
    atouts: [
      ["Sans fondation", "Les plots se posent sur une dalle béton, un sol stabilisé ou une étanchéité de toit-terrasse."],
      ["De niveau au millimètre", "Chaque plot se règle en hauteur pour rattraper les pentes et les défauts du support."],
      ["L'eau s'écoule dessous", "Le revêtement est surélevé : pas de flaque, et la terrasse sèche vite."],
      ["Démontable", "Une dalle se soulève pour atteindre un regard, un câble ou la descente d'eau."],
      ["Dalles ou lames", "Grès cérame directement sur plots, ou lames sur une structure aluminium portée par les plots."],
      ["De plain-pied", "Le niveau de la terrasse s'aligne sur le seuil de la porte-fenêtre."],
    ],
    galerieCat: ["structure-plot-reglable", "structure-rails-plots-detail", "structure-plot-rail-lame"],
    titreGalerie: "Plots et structures en détail",
    details: `<h2>Plots seuls ou structure aluminium ?</h2>
      <p>Pour des dalles de grès cérame sur un support plan, les plots suffisent. Sur un sol moins régulier, ou pour des lames, une structure aluminium posée sur les plots rend la terrasse plus rigide et plus plane. Nous comparons les deux solutions sur notre page <a href="/structure-terrasse-lyon/#comparatif-carrelage">structures de terrasse</a>.</p>
      <p>Voir aussi la <a href="/terrasse-carrelage-lyon/">terrasse en carrelage</a> et le <a href="/toit-terrasse-lyon/">toit-terrasse</a>, deux usages typiques des plots.</p>`,
    complement: "Nous venons voir le support existant, les hauteurs et l'écoulement de l'eau, et le plan 3D de votre terrasse est offert.",
    titreVoisins: "Pour aller plus loin",
    voisins: [
      ["/terrasse-carrelage-lyon/", "Terrasse carrelage", "Du grès cérame posé à sec, sans colle ni joint."],
      ["/structure-terrasse-lyon/", "Structures de terrasse", "Plots, rails aluminium ou ossature bois."],
      ["/nos-terrasses/", "Comparatif des matériaux", "Bois, composite, aluminium ou carrelage ?"],
    ],
    ctaTitre: "Un projet de terrasse sur plots ?",
  }),
};

// ---------- Balcon ----------
const terrasseBalcon = {
  title: "Terrasse de balcon Lyon : lames bois, composite ou aluminium | Instant Terrasse",
  description: "Rénover le sol d'un balcon à Lyon : lames bois, composite ou aluminium, ou dalles sur plots, posées sur l'existant sans percer l'étanchéité. Garde-corps aluminium. Devis gratuit.",
  corps: pageProduit({
    fil: "Projets",
    h1: ["Un balcon", "comme une terrasse"], kicker: "Sols de balcon sur mesure à Lyon et dans sa région",
    chapo: "Un carrelage fatigué ou une dalle béton grise : en quelques jours, le balcon devient une vraie pièce dehors.",
    photo: "ambiance-balcon-lames", position: "55% 50%",
    atouts: [
      ["Posé sur l'existant", "Les lames ou les dalles se posent sur le sol actuel, sans le casser."],
      ["L'étanchéité préservée", "Plots et lambourdes reposent sur le support : on ne perce pas l'étanchéité."],
      ["Un sol de niveau", "Les plots réglables rattrapent la pente d'écoulement du balcon."],
      ["Léger", "Des matériaux choisis pour ne pas surcharger la dalle du balcon."],
      ["Le matériau de votre choix", "Bois, composite, lames aluminium ou grès cérame."],
      ["Avec le garde-corps", "Un garde-corps aluminium neuf peut être prévu dans le même projet."],
    ],
    galerieCat: ["terrasse-thermofrene-balcon", "gc-maison-balcon-lisses", "gc-maison-verre-depoli-carrelage", "gc-collectif-verre-depoli-balcons"],
    titreGalerie: "Balcons en situation",
    details: `<h2>En copropriété</h2>
      <p>Sur un balcon d'immeuble, le règlement de copropriété peut encadrer l'aspect, le garde-corps ou la nature du sol. Mieux vaut le consulter, ou interroger le syndic, avant de choisir le revêtement : nous vous aidons à préparer la demande si besoin.</p>
      <p>Pour choisir le revêtement, consultez notre <a href="/nos-terrasses/">comparatif des matériaux</a>.</p>`,
    complement: "Nous venons mesurer le balcon, vérifier le support et l'écoulement de l'eau, et le plan 3D est offert.",
    titreVoisins: "Pour aller plus loin",
    voisins: [
      ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Sécuriser sans fermer la vue."],
      ["/terrasse-aluminium-lyon/", "Terrasse aluminium", "Des lames stables et sans entretien."],
      ["/terrasse-sur-plots-lyon/", "Terrasse sur plots", "Poser sans fondation, de niveau."],
    ],
    ctaTitre: "Un projet de balcon ?",
  }),
};

// ---------- Terrasse de piscine ----------
const terrassePiscine = {
  title: "Terrasse de piscine Lyon : plage en bois, composite ou aluminium | Instant Terrasse",
  description: "Plage de piscine sur mesure à Lyon : bois, composite, lames aluminium ou carrelage, agréables pieds nus et sûrs au bord de l'eau. Trappe d'accès, plan 3D offert. Devis gratuit.",
  corps: pageProduit({
    fil: "Projets",
    h1: ["Terrasse", "de piscine"], kicker: "Plages de piscine sur mesure à Lyon et dans sa région",
    chapo: "Autour d'un bassin, la terrasse se vit pieds nus : un revêtement agréable au soleil, qui accroche sous le pied et supporte l'eau.",
    photo: "ambiance-plage-piscine", position: "45% 55%",
    atouts: [
      ["Agréable pieds nus", "Des matériaux sans écharde, choisis pour rester supportables au soleil."],
      ["Sûr au bord de l'eau", "Des surfaces qui accrochent, même au sortir du bain."],
      ["Fait pour l'eau", "Bois sélectionnés, composite, aluminium ou grès cérame : ni pourriture, ni gonflement."],
      ["Accès au local technique", "Une trappe peut être intégrée pour garder l'accès à la pompe ou au volet."],
      ["Finitions soignées", "Margelles, nez de marche et bordures dessinés autour du bassin."],
      ["Avec la pergola", "Une pergola ou un store banne pour un coin d'ombre près de l'eau."],
    ],
    galerieCat: ["terrasse-kebony-piscine-debordement", "alu-piscine-aspect-teck", "terrasse-accoya-gris-piscine", "composite-gris-piscine", "terrasse-thermofrene-piscine-mer", "alu-piscine-blanche-vue", "terrasse-bambou-ndurance-piscine-pierre", "alu-piscine-haricot", "terrasse-kebony-piscine-jardin", "terrasse-accoya-naturel-bord-piscine", "alu-piscine-grise", "terrasse-thermofrene-piscine-naturelle", "alu-piscine-jardin-tropical", "alu-piscine-debordement-baie", "alu-piscine-toit-terrasse", "alu-piscine-carbet", "alu-piscine-debordement-mer", "alu-piscine-maison-creole", "alu-piscine-cour"],
    titreGalerie: "Plages de piscine en situation",
    details: `<h2>Quel revêtement au bord de l'eau ?</h2>
      <p>Le <a href="/terrasse-bois-lyon/">bois</a> reste le plus agréable sous le pied en plein été, à condition de choisir une essence faite pour l'extérieur. Les <a href="/terrasse-aluminium-lyon/">lames aluminium</a> et le <a href="/terrasse-composite-lyon/">composite</a> réduisent l'entretien au minimum, et le <a href="/terrasse-carrelage-lyon/">grès cérame</a> se prolonge jusqu'à la margelle.</p>
      <p>Tous les critères sont dans notre <a href="/nos-terrasses/">comparatif des matériaux</a>.</p>`,
    complement: "Nous venons voir le bassin, les niveaux et le local technique, et le plan 3D de votre plage est offert.",
    titreVoisins: "Pour aller plus loin",
    voisins: [
      ["/nos-terrasses/", "Comparatif des matériaux", "Bois, composite, aluminium ou carrelage ?"],
      ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Un coin d'ombre réglable près du bassin."],
      ["/terrasse-aluminium-lyon/", "Terrasse aluminium", "Des lames stables et sans entretien."],
    ],
    ctaTitre: "Un projet de plage de piscine ?",
  }),
};

// ---------- Toit-terrasse ----------
const toitTerrasse = {
  title: "Toit-terrasse Lyon : aménagement sur plots sans percer l'étanchéité | Instant Terrasse",
  description: "Aménager un toit-terrasse à Lyon : lames ou dalles sur plots réglables posés sur l'étanchéité, garde-corps aluminium, pergola. Plan 3D offert, devis gratuit.",
  corps: pageProduit({
    fil: "Projets",
    h1: ["Toit-terrasse", "aménagé"], kicker: "Toitures plates aménagées à Lyon et dans sa région",
    chapo: "Une toiture plate devient une pièce à vivre : le revêtement repose sur des plots posés sur l'étanchéité, sans la percer.",
    photo: "carrelage-toit-terrasse-montagnes", position: "55% 60%",
    atouts: [
      ["L'étanchéité intacte", "Les plots reposent sur la membrane, avec une protection adaptée : aucune fixation ne la traverse."],
      ["De niveau malgré la pente", "Les plots réglables rattrapent la pente d'écoulement de la toiture."],
      ["L'eau s'évacue dessous", "Les évacuations restent accessibles et la terrasse sèche vite."],
      ["Le revêtement de votre choix", "Bois, composite, lames aluminium ou dalles de grès cérame."],
      ["Sécurisé", "Un garde-corps aluminium, vitré ou à lisses, pour profiter de la vue."],
      ["Ombre et intimité", "Pergola, store banne ou pare-vue pour vivre le toit à toute heure."],
    ],
    galerieCat: ["terrasse-bambou-xtreme-toit", "store-banne-toit-terrasse"],
    titreGalerie: "Toits-terrasses en situation",
    details: `<h2>Avant de se lancer</h2>
      <p>Une toiture n'est pas toujours prévue pour être accessible : sa structure doit pouvoir porter la terrasse et ses occupants. Nous vérifions ce point avec vous dès la première visite, ainsi que l'état de l'étanchéité.</p>
      <p>Voir aussi la <a href="/terrasse-sur-plots-lyon/">terrasse sur plots</a> et le <a href="/garde-corps-aluminium-lyon/">garde-corps aluminium</a>.</p>`,
    complement: "Nous venons voir la toiture, l'accès et les évacuations, et le plan 3D de votre toit-terrasse est offert.",
    titreVoisins: "Pour aller plus loin",
    voisins: [
      ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Sécuriser sans fermer la vue."],
      ["/terrasse-sur-plots-lyon/", "Terrasse sur plots", "Poser sans fondation, de niveau."],
      ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Soleil, ombre ou pluie, vous choisissez."],
    ],
    ctaTitre: "Un projet de toit-terrasse ?",
  }),
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
  title: "Galerie photos : terrasses, pergolas, garde-corps | Instant Terrasse",
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
  title: "Pergola sur mesure Lyon : bioclimatique, toile ou toit fixe | Instant Terrasse",
  description: "Pergola bioclimatique, à toile rétractable ou à toit fixe à Lyon : comparez l'ombre, la protection contre la pluie et la lumière en hiver pour choisir la vôtre. Plan 3D offert.",
  corps: `
${heroPlein({ fil: "Aménagements", h1: ["Quelle pergola", "pour votre terrasse ?"], kicker: "Pergolas sur mesure à Lyon et dans sa région",
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
  title: "Terrasse de restaurant Lyon : café, hôtel, CHR sur mesure | Instant Terrasse",
  description: "Terrasse de restaurant, café ou hôtel à Lyon : plancher sans entretien, garde-corps et pare-vue, pergola ou store pour l'ombre. Un interlocuteur principal, plan 3D offert.",
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

export const CONTENUS = {
  "/terrasse-restaurant-chr-lyon/": terrasseRestaurant,
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
