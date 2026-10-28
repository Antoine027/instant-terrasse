// Contenus rédigés des pages. Une page présente ici remplace sa version « en préparation ».
// Règles : pas de chiffre, garantie, certification ou chantier inventé ; pas de nom de fournisseur.
import { SITE, POSE, TRIO, BADGE_AVIS } from "./pages.mjs";
import { galerie, imgPhoto, PHOTOS, credit } from "./galerie.mjs";
import { carteProduit } from "./vignettes.mjs";

const img = (nom, alt, ratio) =>
  `<img src="/assets/img/bois/${nom}-400.webp" srcset="/assets/img/bois/${nom}-400.webp 400w, /assets/img/bois/${nom}-800.webp 800w" sizes="(max-width:700px) 90vw, 360px" alt="${alt}" width="400" height="${ratio}" loading="lazy" decoding="async"${credit("Grad")}>`;

// Bandeau photo plein écran (même style que l'accueil)
const heroPlein = ({ fil, h1, kicker, chapo, photo, position = "65% 50%", actions }) => `
<section class="hero-plein hero-produit">
  ${imgPhoto(photo, { sizes: "(max-width:700px) calc(100vw - 32px), 100vw", prioritaire: true, classe: "h-img" }).replace("<img ", `<img style="object-position:${position}" `)}
  <div class="conteneur h-txt">
    <p class="fil"><a href="/">Accueil</a> › ${fil}</p>
    <p class="kicker">${kicker}</p>
    <h1><span class="fin">${h1[0]}</span> <span class="fort">${h1[1]}</span></h1>
    <p class="chapo">${chapo}</p>
    <p class="actions">${actions ?? `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#galerie">Voir les photos</a>`}</p>
    <p class="hero-avis hero-avis-mobile">${BADGE_AVIS}</p>
    ${TRIO}
  </div>
</section>`;

const cta = (titre = "Un projet de terrasse en bois ?", texte = "Devis gratuit et sans engagement. Nous venons voir votre terrain et nous vous orientons vers l'essence et la structure les plus adaptées.") => `
<section class="bloc bloc-cta">
  <div class="conteneur">
    <h2>${titre}</h2>
    <p class="chapo">${texte}</p>
    <p class="actions"><a class="bouton" href="/contact/">Demander un devis</a> <a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a></p>
  </div>
</section>`;

// ---------- Terrasse bois ----------
const essencesAlu = [
  {
    nom: "Thermopin", photo: ["thermopin", "Lame de terrasse en thermopin, teinte miel avec nœuds apparents", 378],
    texte: "Un pin chauffé à haute température, sans produit chimique, pour le rendre plus stable et plus résistant. Teinte miel à la pose, nœuds apparents : le bois au naturel, à un prix accessible.",
    points: ["Aspect bois naturel", "Excellent rapport qualité-prix"],
  },
  {
    nom: "Thermofrêne", photo: ["thermofrene", "Lame de terrasse en thermofrêne, teinte brun chaud au veinage marqué", 358],
    texte: "Le frêne, bois dur européen, traité thermiquement à cœur. Il prend une belle teinte brun chaud et garde un veinage très marqué, proche des bois exotiques.",
    points: ["Bois dur européen", "Veinage prononcé"],
  },
  {
    nom: "Kebony", photo: ["kebony", "Lame de terrasse en Kebony, teinte brune", 402],
    texte: "Un bois résineux modifié par un procédé d'origine végétale qui renforce durablement ses fibres. Brun profond à la pose, il évolue vers un gris argenté homogène.",
    points: ["Bois modifié très durable", "Patine gris argenté"],
  },
  {
    nom: "Accoya naturel", photo: ["accoya-naturel-lame", "Lame de terrasse en accoya naturel, teinte claire", 260],
    texte: "Un bois acétylé réputé pour sa stabilité : il bouge très peu avec l'humidité, ce qui limite les déformations. Teinte claire à la pose, qui grise naturellement avec le temps.",
    points: ["Très grande stabilité", "Teinte claire, sans nœuds"],
  },
  {
    nom: "Accoya gris", photo: ["accoya-gris-lame-2", "Lame de terrasse en accoya gris", 325],
    texte: "Le même bois acétylé, teinté gris : la terrasse a son aspect patiné dès la pose, sans attendre que le bois grise.",
    points: ["Très grande stabilité", "Aspect patiné immédiat"],
  },
  {
    nom: "Bambou X-treme", photo: ["bambou-xtreme-lame-2", "Lame de terrasse en bambou X-treme brun foncé", 338],
    texte: "Des fibres de bambou densifiées et traitées pour en faire des lames très dures. Le X-treme est brun foncé, avec une surface finement texturée. Le bambou repousse en quelques années.",
    points: ["Très dur et dense", "Brun foncé"],
  },
  {
    nom: "Bambou N-Durance", photo: ["bambou-ndurance-lame-2", "Lame de terrasse en bambou N-Durance brun-rouge", 267],
    texte: "Le même bambou densifié, en teinte brun-rouge à l'allure d'un bois exotique. Une alternative aux bois tropicaux, issue d'une ressource qui repousse vite.",
    points: ["Très dur et dense", "Brun-rouge, aspect bois exotique"],
  },
];

const essencesTrad = [
  ["Pin", "Résineux traité, économique, pour les projets simples."],
  ["Douglas", "Résineux à la teinte rosée, naturellement plus durable que le pin."],
  ["Mélèze", "Résineux dense et chaleureux, apprécié pour sa tenue en extérieur."],
  ["Ipé", "Bois exotique très dense, brun foncé, d'une grande longévité."],
  ["Cumaru", "Bois exotique dur, brun doré, alternative à l'ipé."],
  ["Garapa", "Bois exotique clair, jaune doré, pour une terrasse lumineuse."],
  ["Itauba", "Bois exotique naturellement huileux, brun-vert, très stable."],
  ["Jatoba", "Bois exotique dur aux reflets brun-rouge."],
];

const terrasseBois = {
  title: "Terrasse bois Lyon : thermopin, kebony, accoya, ipé | Instant Terrasse",
  description: "Terrasse bois sur mesure à Lyon : thermopin, thermofrêne, kebony, accoya, bambou sur structure aluminium, ou ipé, cumaru, mélèze, douglas sur structure traditionnelle.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Terrasse bois", "sur mesure"], kicker: "Terrasses bois à Lyon et dans sa région", photo: "terrasse-kebony-piscine-debordement", position: "60% 55%",
  chapo: "Bois modifiés et bambou sur structure aluminium, ou bois massifs et exotiques sur structure traditionnelle : nous vous aidons à choisir l'essence qui correspond à votre maison, à votre budget et au temps que vous voulez consacrer à l'entretien.",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#essences-aluminium">Voir les essences</a>` })}

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Deux façons de construire une terrasse bois</h2>
      <p>La structure, c'est ce qu'on ne voit pas et ce qui décide de la durée de vie de la terrasse. Nous proposons deux approches, selon l'essence choisie et votre terrain.</p>
      <p><a href="/structure-terrasse-lyon/#comparatif-bois">Comparer les deux structures en détail →</a></p>
    </div>
    <div class="grille">
      <div class="carte"><h3>Sur structure aluminium</h3><p>Plots réglables, rails aluminium et fixations invisibles. Rien ne pourrit sous les lames, l'air circule, la terrasse reste plane. C'est la structure de nos bois modifiés et de nos bambous.</p></div>
      <div class="carte"><h3>Sur structure traditionnelle</h3><p>Des lambourdes en bois sur plots réglables : la technique classique et éprouvée, adaptée aux bois massifs et exotiques.</p></div>
    </div>
  </div>
</section>

<section id="essences-aluminium" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Sur structure aluminium</p>
    <h2>Bois modifiés et bambou</h2>
    <p class="chapo">Des bois traités pour gagner en stabilité et en durabilité, posés sur une ossature qui ne pourrit pas.</p>
    <div class="grille grille-essences">
      ${essencesAlu.map((e) => `
      <article class="essence">
        <div class="essence-photo${e.photos ? " essence-photo-duo" : ""}">${e.photos ? e.photos.map(([n, a, r, l]) => `<figure>${img(n, a, r)}<figcaption>${l}</figcaption></figure>`).join("") : img(...e.photo)}</div>
        <div class="essence-texte">
          <h3>${e.nom}</h3>
          <p>${e.texte}</p>
          <ul class="puces">${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
      </article>`).join("")}
    </div>
  </div>
</section>

<section id="galerie" class="bloc bloc-alt">
  <div class="conteneur">
    ${galerie("terrasse-bois", { titre: "Nos bois en situation", intro: "Choisissez une essence pour voir son rendu en terrasse.", legende: "Illustrations de terrasses dans nos essences" })}
  </div>
</section>

<section id="essences-traditionnelles" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Sur structure traditionnelle</p>
    <h2>Bois massifs et exotiques</h2>
    <p class="chapo">Les grands classiques de la terrasse en bois, posés sur lambourdes. Selon disponibilité : nous vous confirmons les essences et les sections en stock au moment du devis.</p>
    <div class="grille grille-3">
      ${essencesTrad.map(([n, t]) => `<div class="carte"><h3>${n}</h3><p>${t}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Bien choisir son bois</h2>
      <p>Tous les bois grisent au soleil : c'est une patine naturelle, pas un défaut. Si vous voulez garder la teinte d'origine, un saturateur une à deux fois par an suffit. Si vous préférez le gris argenté, un simple nettoyage annuel.</p>
      <p>Pour hésiter moins longtemps, posez-vous trois questions : quel aspect vous plaît (clair, miel, brun, exotique) ? Quel budget ? Combien de temps voulez-vous consacrer à l'entretien ? Nous faisons le reste lors de la visite.</p>
    </div>
    <div>
      <h2>Comment se passe votre projet</h2>
      <p>${POSE}</p>
      <p>Vous hésitez encore entre le bois et un autre matériau ? Consultez notre <a href="/nos-terrasses/">comparatif des matériaux</a> ou découvrez la <a href="/terrasse-composite-lyon/">terrasse composite</a>.</p>
    </div>
  </div>
</section>
${cta()}`,
};

// ---------- Tableaux comparatifs ----------
const tableau = (id, titre, intro, colonnes, lignes, verdicts) => `
<section id="${id}" class="bloc">
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
  </div>
</section>`;

const compBois = tableau(
  "comparatif-bois",
  "Terrasse bois : structure traditionnelle ou aluminium ?",
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
    ["Revêtements possibles", "Bois massifs et exotiques", "Bois modifiés, bambou, composite, carrelage, lames aluminium"],
    ["Budget", "Généralement plus économique à l'achat", "Investissement plus élevé, pensé pour durer"],
  ],
  [
    ["La traditionnelle, si…", "vous voulez un bois massif ou exotique (ipé, cumaru, mélèze…) avec un budget maîtrisé."],
    ["L'aluminium, si…", "vous cherchez la durabilité et la planéité dans le temps, ou un bois modifié, du bambou ou du composite."],
  ]
);

const compCarrelage = tableau(
  "comparatif-carrelage",
  "Terrasse carrelage : plots simples ou structure aluminium ?",
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
${heroPlein({ fil: "Terrasses", h1: ["Nos structures", "de terrasse"], kicker: "Structure aluminium garantie 20 ans", photo: "structure-lames-clipsees-vue-haut", position: "55% 40%",
  chapo: "Une terrasse se juge sur la durée, et sa durée de vie se joue sous les lames. Nous adaptons la structure à votre terrain, à votre revêtement et à votre budget.",
  actions: `<a class="bouton" href="#galerie">Voir le système en photos</a> <a class="bouton bouton-blanc" href="#comparatif-bois">Comparer les structures</a>` })}

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit">${img("structure-aluminium", "Système de structure aluminium : plot réglable, rail aluminium, clip et pattes de fixation sous une lame de terrasse", 404)}</div>
    <div>
      <p class="sous-titre">Notre solution phare</p>
      <h2>La structure aluminium</h2>
      <p>Des plots réglables en hauteur posés sur le support, des rails en aluminium livrés avec leurs clips, et des lames qui viennent s'y clipser : aucune vis ne traverse la lame.</p>
      <ul class="puces">
        <li><strong>Garantie 20 ans</strong> : nos structures aluminium sont garanties 20 ans.</li>
        <li><strong>Fixation invisible</strong> : pas de vis en surface, donc pas de trou où l'eau s'infiltre, et des lignes de lames parfaitement droites.</li>
        <li><strong>Des clips qui tiennent</strong> : ils suivent la dilatation du bois sans casser, et leur résistance à l'arrachement dépasse de 1,5 à 2,5 fois l'exigence de la norme.</li>
        <li><strong>Démontable</strong> : une lame se déclipse et se remet en place sans rien abîmer, pour accéder dessous ou remplacer une lame.</li>
        <li><strong>Imputrescible</strong> : l'aluminium ne pourrit pas, ne gonfle pas et résiste à la corrosion, y compris autour des piscines.</li>
        <li><strong>Plane</strong> : les plots rattrapent les défauts de niveau du terrain ou de la dalle.</li>
        <li><strong>Ventilée</strong> : les lames ne touchent pas directement l'ossature, l'air circule et le bois sèche plus vite.</li>
        <li><strong>Conforme et testée</strong> : un système testé par le FCBA (l'institut technologique de la filière bois) et conforme au DTU 51-4, la norme des terrasses en bois.</li>
        <li><strong>Fabriquée en France</strong>, en aluminium majoritairement recyclé et entièrement recyclable.</li>
        <li><strong>Polyvalente</strong> : elle accueille le bois, le <a href="/terrasse-composite-lyon/">composite</a>, le <a href="/terrasse-carrelage-lyon/">carrelage</a> et les <a href="/terrasse-aluminium-lyon/">lames aluminium</a>.</li>
      </ul>
    </div>
  </div>
</section>

<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie("structure-alu", { titre: "Le système à clipser en images", intro: "Plots réglables, rails aluminium et clips : rien ne traverse la lame, et chaque lame se démonte.", legende: "Illustrations du système de pose" })}
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Une structure adaptée à chaque terrain</h2>
    <p class="chapo">Le système aluminium s'adapte au sol qui recevra la terrasse. C'est ce que nous vérifions en premier lors de la visite.</p>
    <div class="grille grille-3">
      <div class="carte"><h3>Sol dur</h3><p>Dalle béton, ancienne terrasse : les rails se posent directement ou sur cales, pour une terrasse de faible épaisseur.</p></div>
      <div class="carte"><h3>Sol stabilisé</h3><p>Gravier compacté : les plots réglables reprennent les écarts de niveau, sans couler de béton.</p></div>
      <div class="carte"><h3>Toit-terrasse et sol étanche</h3><p>La structure repose sur l'étanchéité sans la percer. Voir notre page <a href="/toit-terrasse-lyon/">toit-terrasse</a>.</p></div>
      <div class="carte"><h3>Terrasse surélevée</h3><p>Avec des réhausses, les plots montent jusqu'à environ 40 cm. Au-delà, la terrasse repose sur des poutres et des poteaux.</p></div>
      <div class="carte"><h3>Terrain en pente ou instable</h3><p>La terrasse est portée par des fondations sur poteaux : c'est la <a href="/terrasse-sur-pilotis-lyon/">terrasse sur pilotis</a>.</p></div>
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur">
    <h2>Les autres solutions</h2>
    <div class="grille grille-3">
      <a class="carte carte-lien" href="/terrasse-bois-lyon/#essences-traditionnelles"><h3>Structure traditionnelle</h3><p>Des lambourdes en bois, la technique classique, pour les terrasses en bois massifs et exotiques.</p><span class="fleche" aria-hidden="true">→</span></a>
      <a class="carte carte-lien" href="#comparatif-carrelage"><h3>Dalles sur plots</h3><p>Pour le carrelage sur un support existant (dalle béton, toit-terrasse) : posé sans colle ni fondation.</p><span class="fleche" aria-hidden="true">→</span></a>
      <a class="carte carte-lien" href="/terrasse-sur-pilotis-lyon/"><h3>Terrasse sur pilotis</h3><p>Pour les terrains en pente ou les terrasses surélevées.</p><span class="fleche" aria-hidden="true">→</span></a>
    </div>
    <p class="note-pose">${POSE}</p>
  </div>
</section>
${compBois.replace('class="bloc"', 'class="bloc bloc-alt"')}
${compCarrelage}
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
  chapo: "Habiller une façade, une extension, un mur de clôture ou un abri avec des bois sélectionnés pour durer en extérieur, et assortis à votre terrasse si vous le souhaitez.",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#essences-bardage">Voir les essences</a>` })}

<section id="essences-bardage" class="bloc">
  <div class="conteneur">
    <h2>Nos essences de bardage</h2>
    <p class="chapo">Des bois modifiés et traités, choisis pour leur stabilité : un bardage doit rester droit et beau malgré le soleil et la pluie.</p>
    <div class="grille grille-3">
      ${bardageEssences.map(([n, t, g]) => `<div class="carte carte-lame"><div class="lames">${PHOTOS.filter((p) => p.categorie === "lame-bardage" && p.essence === n).map((p) => imgPhoto(p.cle, { sizes: "(max-width:700px) 40vw, 160px" })).join("")}</div><h3>${n}</h3><p>${t}</p><p class="garantie">Garantie fabricant : ${g.toLowerCase()}, selon conditions</p></div>`).join("")}
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
const pageProduit = ({ typesGalerie, extra = "", introGalerie = "", fil, h1, kicker, position, chapo, photo, atouts, galerieCat, titreGalerie, details, voisins, ctaTitre, complement = "Une pergola se pense avec la terrasse qu'elle couvre : hauteurs, fixations, écoulement des eaux. Nous pouvons étudier les deux ensemble.", titreVoisins = "Les autres solutions" }) => `
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
    ${galerie(galerieCat, { titre: titreGalerie, intro: introGalerie, legende: "Illustrations", types: typesGalerie })}
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
    chapo: "Une structure en aluminium coiffée de lames orientables : ouvertes pour laisser passer le soleil et l'air, inclinées pour faire de l'ombre, fermées pour vous abriter de la pluie. Votre terrasse devient une vraie pièce à vivre.",
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
    chapo: "Une structure aluminium et une toile qui se déploie ou se replie à la demande : de l'ombre aux heures chaudes, le ciel dégagé le reste du temps. Une solution souple et élégante pour profiter de votre terrasse.",
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
    chapo: "Une structure aluminium aux lignes épurées et une toiture pleine : un abri permanent pour votre terrasse, qui vous protège de la pluie comme du soleil, toute l'année.",
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
    chapo: "Sécuriser une terrasse surélevée, un balcon, un escalier ou un toit-terrasse sans fermer la vue. Nos garde-corps aluminium sont fabriqués sur mesure, pour les maisons comme pour les bâtiments professionnels.",
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
const terrasseAluminium = {
  title: "Terrasse aluminium Lyon : lames alu aspect bois | Instant Terrasse",
  description: "Terrasse en lames aluminium sur mesure à Lyon : imputrescible, stable, sans entretien, en coloris unis ou aspect bois. Piscines, balcons, restaurants. Devis gratuit.",
  corps: pageProduit({
    fil: "Terrasses",
    h1: ["Terrasse en lames", "aluminium"], kicker: "Terrasses sur mesure à Lyon et dans sa région",
    chapo: "L'aspect d'une terrasse bois, sans ses contraintes : des lames en aluminium qui ne pourrissent pas, ne se déforment pas et ne demandent ni saturateur ni ponçage. En coloris unis ou en décor bois.",
    photo: "alu-piscine-jardin-tropical",
    atouts: [
      ["Imputrescible", "L'aluminium ne craint ni l'eau, ni les champignons, ni les insectes."],
      ["Stable dans le temps", "Pas de fente, pas de vrillage, pas d'écharde : les lames restent droites."],
      ["Sans entretien", "Un nettoyage à l'eau suffit, aucun traitement à refaire."],
      ["Aspect bois ou uni", "Des décors bois réalistes ou des teintes unies, du clair au foncé."],
      ["Idéal autour des piscines", "Une surface saine au contact de l'eau, sans risque d'écharde pieds nus."],
      ["Sur structure aluminium", "Posées sur notre <a href=\"/structure-terrasse-lyon/\">ossature aluminium</a> et plots réglables, pour une terrasse parfaitement plane."],
    ],
    extra: `<section id="teintes" class="bloc">
  <div class="conteneur">
    <h2>Les teintes</h2>
    <p class="chapo">Des décors bois du plus clair au plus chaud, ou un gris uni pour un style épuré. Vous voyez les échantillons en vrai, chez vous, lors du rendez-vous.</p>
    <div class="nuancier">${PHOTOS.filter((p) => p.categorie === "teinte-alu").map((p) => `<figure>${imgPhoto(p.cle, { sizes: "(max-width:560px) 45vw, 180px" })}<figcaption>${p.essence}</figcaption></figure>`).join("")}</div>
  </div>
</section>`,
    galerieCat: "terrasse-aluminium",
    titreGalerie: "Terrasses en lames aluminium en situation",
    introGalerie: "Filtrez par teinte.",
    details: `<h2>Pour quels projets ?</h2>
      <p>Plages de piscine, balcons, toits-terrasses, escaliers extérieurs, terrasses de restaurants : la lame aluminium convient partout où l'on veut une terrasse durable et facile à vivre. Des trappes de visite peuvent être intégrées pour garder l'accès à un regard ou à un local technique.</p>
      <p>Vous hésitez avec le bois ou le composite ? Consultez notre <a href="/nos-terrasses/">comparatif des matériaux</a>.</p>`,
    complement: "Nous étudions avec vous la structure, les finitions (nez de marche, bordures, découpes) et les éventuels équipements : garde-corps, pergola, éclairage.",
    titreVoisins: "Pour compléter votre terrasse",
    voisins: [
      ["/structure-terrasse-lyon/", "Nos structures", "La base qui fait durer une terrasse."],
      ["/terrasse-piscine-lyon/", "Terrasse de piscine", "Une plage confortable et sûre autour du bassin."],
      ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Sécuriser une terrasse surélevée sans fermer la vue."],
      ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Soleil, ombre ou pluie, vous choisissez."],
    ],
    ctaTitre: "Un projet de terrasse aluminium ?",
  }),
};

// ---------- Terrasse carrelage ----------
const terrasseCarrelage = {
  title: "Terrasse carrelage Lyon : grès cérame sur plots | Instant Terrasse",
  description: "Terrasse en carrelage grès cérame sur mesure à Lyon : pose sans colle sur plots ou sur structure aluminium, grands formats, mélange bois et carrelage. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Terrasse en carrelage", "grès cérame"], kicker: "Terrasses sur mesure à Lyon et dans sa région",
  chapo: "Des dalles de grès cérame épaisses, posées à sec sur plots ou sur une structure aluminium : ni colle, ni joint, ni dalle béton à couler. Une terrasse minérale, facile à vivre et démontable dalle par dalle.",
  photo: "carrelage-toit-terrasse-montagnes", position: "50% 60%",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="/structure-terrasse-lyon/#comparatif-carrelage">Plots ou structure ?</a>` })}

<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie("terrasse-carrelage", { titre: "Terrasses carrelage en situation", legende: "Illustrations" })}
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Pourquoi le grès cérame en extérieur</h2>
    <div class="grille grille-3">
      <div class="carte"><h3>Rien ne l'atteint</h3><p>Il résiste aux taches, à l'humidité et aux écarts de température. Un repas renversé ou un barbecue ne laissent pas de trace.</p></div>
      <div class="carte"><h3>Entretien minimal</h3><p>Un coup de balai et de l'eau. Pas de saturateur, pas de ponçage, pas de traitement.</p></div>
      <div class="carte"><h3>Tous les styles</h3><p>Aspect pierre, béton ou bois, du très clair au très foncé, pour suivre votre intérieur jusque dans le jardin.</p></div>
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Deux façons de le poser</h2>
      <p><strong>Sur plots simples</strong> : chaque dalle repose sur des plots réglables placés à ses angles. C'est la solution la plus rapide et la plus économique quand vous avez déjà une dalle béton ou un toit-terrasse en bon état.</p>
      <p><strong>Sur structure aluminium</strong> : les dalles reposent sur un cadre de rails réglé une seule fois. La surface est parfaitement plane, les dalles ne bougent pas et ne claquent pas sous le pied grâce aux cales amortissantes, et il n'est pas nécessaire de couler une dalle béton sur un sol stabilisé.</p>
      <p><a href="/structure-terrasse-lyon/#comparatif-carrelage">Voir le comparatif détaillé →</a></p>
    </div>
    <figure class="photo-produit schema">
      ${imgPhoto("structure-aluminium-carrelage", { sizes: "(max-width:1060px) 90vw, 460px" })}
      <figcaption>La structure aluminium : plots réglables, rails, supports de dalle et cales amortissantes.</figcaption>
    </figure>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur conteneur-etroit">
    <div>
      <h2>Des formats pour chaque projet</h2>
      <p>Sur structure aluminium, la pose accepte le 60 × 60 comme les grands formats : 30 × 120, 45 × 90, 90 × 90, 120 × 120. On peut aussi décaler les joints ou mélanger deux formats sur une même surface pour un rendu plus vivant.</p>
      <p>Les bords se finissent proprement avec des bandeaux en grès ou en aluminium, et les découpes autour d'un arbre ou d'une piscine se traitent sans bricolage.</p>
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Bois et carrelage sur la même terrasse</h2>
      <p>Le carrelage pour la zone repas et les passages, le bois pour le coin salon ou la plage de piscine : sur structure aluminium, les deux revêtements se raccordent au même niveau, sans marche ni décalage. C'est aussi une façon de maîtriser le budget en mettant chaque matériau là où il est le plus utile.</p>
      <p>Découvrez nos <a href="/terrasse-bois-lyon/">essences de bois</a>.</p>
    </div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Lors de la visite, nous venons avec des échantillons de dalles pour les voir chez vous, et nous vous remettons un plan 3D offert du projet.</p>
    </div>
  </div>
</section>
${cta("Un projet de terrasse en carrelage ?", "Devis gratuit et sans engagement. Nous venons voir votre support, avec les échantillons, et nous vous conseillons la pose la plus adaptée.")}`,
};

// ---------- Bardage aluminium ----------
const bardageAluminium = {
  title: "Bardage aluminium Lyon : façade sans entretien | Instant Terrasse",
  description: "Bardage aluminium sur mesure à Lyon : lames thermolaquées dans de nombreuses teintes RAL, fixation invisible, sans entretien. Façades, murs, plafonds extérieurs. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Aménagements", h1: ["Bardage aluminium", "sur mesure"], kicker: "Façades sans entretien à Lyon et dans sa région", photo: "bardage-alu-vertical-brun-escalier", position: "60% 50%",
  chapo: "Des lames en aluminium thermolaqué, en teinte unie ou en décor bois très réaliste, clipsées sur une ossature aluminium : une façade qui ne se repeint pas, ne se traite pas et garde sa couleur." })}

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
const terrasseComposite = {
  title: "Terrasse composite Lyon : sur structure aluminium | Instant Terrasse",
  description: "Terrasse composite sur mesure à Lyon, posée sur structure aluminium garantie 20 ans : lames sans écharde, sans saturateur, en plusieurs teintes. Devis gratuit.",
  corps: `
${heroPlein({ fil: "Terrasses", h1: ["Terrasse composite", "sur mesure"], kicker: "Terrasses sans entretien à Lyon et dans sa région", photo: "composite-gris-piscine", position: "50% 60%",
  chapo: "Des lames qui gardent leur aspect sans saturateur ni ponçage, posées sur notre structure aluminium : la terrasse pour profiter de l'extérieur sans y passer ses week-ends.",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="/structure-terrasse-lyon/">Notre structure</a>` })}

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les points forts</h2>
    <div class="grille grille-3">
      <div class="carte"><h3>Pas d'entretien lourd</h3><p>Ni saturateur, ni ponçage, ni lasure : un nettoyage à l'eau savonneuse suffit.</p></div>
      <div class="carte"><h3>Confortable pieds nus</h3><p>Pas d'écharde ni de fente : idéal autour d'une piscine et pour les enfants.</p></div>
      <div class="carte"><h3>Une teinte qui tient</h3><p>Gris ou brun : la couleur se stabilise après quelques mois, sans virer au gris comme le bois.</p></div>
      <div class="carte"><h3>Sur structure aluminium</h3><p>Rails aluminium sur plots réglables, garantis 20 ans : une terrasse plane et ventilée, qui ne bouge pas.</p></div>
      <div class="carte"><h3>Fixation invisible</h3><p>Aucune vis en surface : des lignes nettes, et une lame se remplace sans tout démonter.</p></div>
      <div class="carte"><h3>Pour tous les projets</h3><p>Plage de piscine, terrasse de plain-pied, balcon, toit-terrasse ou terrasse surélevée.</p></div>
    </div>
  </div>
</section>

<section class="bloc">
  <div class="conteneur">
    <h2>Les teintes</h2>
    <p class="chapo">Des lames veinées comme du bois, rainurées sur les chants pour une fixation invisible. Nous apportons les échantillons lors de la visite.</p>
    <div class="nuancier nuancier-2">${PHOTOS.filter((p) => p.categorie === "teinte-composite").map((p) => `<figure>${imgPhoto(p.cle, { sizes: "(max-width:560px) 45vw, 260px" })}<figcaption>${p.essence}</figcaption></figure>`).join("")}</div>
  </div>
</section>

<section class="bloc" id="galerie">
  <div class="conteneur">
    ${galerie("terrasse-composite", { titre: "Terrasses composite en situation", legende: "Illustrations" })}
  </div>
</section>

<section class="bloc">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit">${imgPhoto("structure-plot-rail-lame", { sizes: "(max-width:1060px) 90vw, 460px" })}</div>
    <div>
      <h2>Composite ou bois ?</h2>
      <p>Le composite vise la tranquillité : une teinte stable et quasiment aucun entretien. Le <a href="/terrasse-bois-lyon/">bois</a> apporte un matériau naturel, qui vit et se patine avec le temps. Les deux se posent sur la même structure aluminium.</p>
      <p>Lors de la visite, nous venons avec des échantillons des deux pour les comparer chez vous, à la lumière de votre jardin. Vous pouvez aussi consulter notre <a href="/nos-terrasses/">comparatif des matériaux</a>.</p>
      <p>${POSE}</p>
    </div>
  </div>
</section>
${cta("Un projet de terrasse composite ?", "Devis gratuit et sans engagement. Nous venons chez vous avec les échantillons de teintes, et le plan 3D de votre projet est offert.")}`,
};

// ---------- Store banne ----------
const storeBanne = {
  title: "Store banne Lyon : coffre, motorisation, sur mesure | Instant Terrasse",
  description: "Store banne sur mesure à Lyon : coffre intégral, toile au choix, motorisation et automatismes vent et soleil, lambrequin déroulant. De l'ombre à la demande sur votre terrasse. Devis gratuit.",
  corps: pageProduit({
    fil: "Aménagements",
    h1: ["Store banne", "sur mesure"], kicker: "Protections solaires à Lyon et dans sa région",
    chapo: "De l'ombre en quelques secondes, et une façade dégagée le reste du temps : le store banne est la protection solaire la plus simple pour profiter de votre terrasse aux heures chaudes.",
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
    chapo: "Un abri pour la voiture, aux lignes aussi soignées que votre maison : un carport aluminium à toit plat protège de la pluie, de la grêle et du soleil, sans les travaux d'un garage.",
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
    chapo: "Quand le jardin est en contrebas ou en pente, la terrasse sur pilotis sort de plain-pied depuis le séjour ou l'étage. Et l'espace gagné dessous devient un abri pour la voiture, le bois ou le salon de jardin.",
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
    "Selon l'essence : les bois modifiés (accoya, kebony, thermo) et les bois exotiques durent plusieurs décennies, les résineux moins longtemps.",
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
  chapo: "Chaque matériau a ses qualités. Le bon choix dépend de l'usage, de l'exposition et du temps que vous voulez consacrer à l'entretien.",
  photo: "terrasse-accoya-naturel-piscine-vue-haut", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#comparatif">Voir le comparatif</a>` })}

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
    chapo: "Des plots réglables en hauteur, posés sur le support existant : la terrasse est de niveau sans couler de béton, l'eau s'écoule dessous, et chaque dalle se soulève pour accéder aux réseaux.",
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
    chapo: "Un carrelage fatigué ou une dalle béton grise : en quelques jours, le balcon devient une vraie pièce dehors, avec un sol en lames ou en dalles posé sur l'existant.",
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
    chapo: "Autour d'un bassin, la terrasse se vit pieds nus et mouillés. Le revêtement doit rester agréable au soleil, accrocher sous le pied et supporter l'eau chlorée ou salée.",
    photo: "ambiance-plage-piscine", position: "45% 55%",
    atouts: [
      ["Agréable pieds nus", "Des matériaux sans écharde, choisis pour rester supportables au soleil."],
      ["Sûr au bord de l'eau", "Des surfaces qui accrochent, même au sortir du bain."],
      ["Fait pour l'eau", "Bois modifiés, composite, aluminium ou grès cérame : ni pourriture, ni gonflement."],
      ["Accès au local technique", "Une trappe peut être intégrée pour garder l'accès à la pompe ou au volet."],
      ["Finitions soignées", "Margelles, nez de marche et bordures dessinés autour du bassin."],
      ["Avec la pergola", "Une pergola ou un store banne pour un coin d'ombre près de l'eau."],
    ],
    galerieCat: ["terrasse-kebony-piscine-debordement", "alu-piscine-aspect-teck", "terrasse-accoya-gris-piscine", "composite-gris-piscine", "terrasse-thermofrene-piscine-mer", "alu-piscine-blanche-vue", "terrasse-bambou-ndurance-piscine-pierre", "alu-piscine-haricot", "terrasse-kebony-piscine-jardin", "terrasse-accoya-naturel-bord-piscine", "alu-piscine-grise", "terrasse-thermofrene-piscine-naturelle"],
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
    chapo: "Une toiture plate peut devenir la plus belle pièce de la maison. Le revêtement repose sur des plots réglables posés sur l'étanchéité, sans jamais la percer.",
    photo: "ambiance-toit-terrasse", position: "40% 60%",
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
  chapo: "Toute notre gamme en images, classée par produit. Ces photos sont des illustrations de nos fabricants ; les photos de nos propres chantiers viendront s'ajouter ici au fil des projets.",
  photo: "terrasse-thermofrene-pool-house", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#galerie">Voir les photos</a>` })}
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
  chapo: "Bioclimatique, à toile rétractable ou à toit fixe : trois façons de couvrir votre 5<sup>e</sup> pièce, selon ce que vous attendez de l'ombre, de la pluie et de la lumière.",
  photo: "pergola-bioclimatique-salon-piscine", position: "60% 50%",
  actions: `<a class="bouton" href="/contact/">Demander une visite gratuite</a> <a class="bouton bouton-blanc" href="#comparatif">Voir le comparatif</a>` })}

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
    chapo: "Une terrasse accueillante fait venir les clients et les fait rester. Plancher, garde-corps, pare-vue, ombre : nous concevons l'ensemble pour qu'il encaisse le service, saison après saison.",
    photo: "terrasse-kebony-restaurant", position: "50% 55%",
    atouts: [
      ["Pensée pour le service", "Un sol plan et sans marche inutile, pour circuler facilement entre les tables."],
      ["Sans entretien", "Lames aluminium, composite ou bois modifié : pas de saturateur à refaire chaque saison."],
      ["Délimitée et protégée", "Garde-corps, pare-vue bois ou vitré : la terrasse se distingue de la rue et protège du vent."],
      ["De l'ombre et un abri", "Pergola ou store banne pour ouvrir la terrasse plus tôt au printemps et plus tard en automne."],
      ["Sur un sol existant", "Plots réglables ou structure aluminium pour rattraper la pente d'un trottoir ou d'une cour."],
      ["Un interlocuteur principal", "Nous coordonnons la pose avec notre installateur partenaire, pour limiter la gêne pendant les travaux."],
    ],
    galerieCat: ["restaurant-terrasse-gabions", "terrasse-kebony-restaurant", "terrasse-thermopin-restaurant", "alu-restaurant-vue-mer", "alu-restaurant-salle"],
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
  "/terrasse-composite-lyon/": terrasseComposite,
  "/bardage-aluminium-lyon/": bardageAluminium,
  "/terrasse-carrelage-lyon/": terrasseCarrelage,
  "/terrasse-aluminium-lyon/": terrasseAluminium,
  "/garde-corps-aluminium-lyon/": gardeCorps,
  "/pergola-bioclimatique-lyon/": pergolaBioclimatique,
  "/pergola-toile-retractable-lyon/": pergolaToileRetractable,
  "/pergola-toit-fixe-lyon/": pergolaToitFixe,
  "/bardage-bois-lyon/": bardageBois,
  "/terrasse-bois-lyon/": terrasseBois,
  "/structure-terrasse-lyon/": structures,
};
