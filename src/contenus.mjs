// Contenus rédigés des pages. Une page présente ici remplace sa version « en préparation ».
// Règles : pas de chiffre, garantie, certification ou chantier inventé ; pas de nom de fournisseur.
import { SITE, POSE } from "./pages.mjs";
import { galerie, imgPhoto } from "./galerie.mjs";

const img = (nom, alt, ratio) =>
  `<img src="/assets/img/bois/${nom}-400.webp" srcset="/assets/img/bois/${nom}-400.webp 400w, /assets/img/bois/${nom}-800.webp 800w" sizes="(max-width:700px) 90vw, 360px" alt="${alt}" width="400" height="${ratio}" loading="lazy" decoding="async">`;

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
    nom: "Accoya naturel et gris", photo: ["accoya", "Lames de terrasse Accoya en version naturelle claire et en version grise", 395],
    texte: "Un bois acétylé réputé pour sa stabilité : il bouge très peu avec l'humidité, ce qui limite les déformations. En teinte naturelle claire, ou grise dès la pose pour un aspect patiné immédiat.",
    points: ["Très grande stabilité", "Deux teintes au choix"],
  },
  {
    nom: "Bambou X-treme et N-Durance", photo: ["bambou-moso", "Lames de terrasse en bambou densifié, version brun foncé et version brun-rouge", 379],
    texte: "Des fibres de bambou densifiées et traitées pour en faire des lames très dures. Le X-treme est brun foncé, le N-Durance brun-rouge, à l'allure d'un bois exotique. Le bambou repousse en quelques années.",
    points: ["Très dur et dense", "Ressource à pousse rapide"],
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
<section class="hero hero-page">
  <div class="conteneur">
    <p class="fil"><a href="/">Accueil</a> › Terrasses</p>
    <h1>Terrasse bois sur mesure à Lyon</h1>
    <p class="chapo">Bois modifiés et bambou sur structure aluminium, ou bois massifs et exotiques sur structure traditionnelle : nous vous aidons à choisir l'essence qui correspond à votre maison, à votre budget et au temps que vous voulez consacrer à l'entretien.</p>
    <p class="actions"><a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-clair" href="#essences-aluminium">Voir les essences</a> <a class="bouton bouton-clair" href="#galerie">Voir les photos</a></p>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Deux façons de construire une terrasse bois</h2>
      <p>La structure, c'est ce qu'on ne voit pas et ce qui décide de la durée de vie de la terrasse. Nous proposons deux approches, selon l'essence choisie et votre terrain.</p>
      <p><a href="/structure-terrasse-lyon/#comparatif-bois">Comparer les deux structures en détail →</a></p>
    </div>
    <div class="grille">
      <div class="carte"><h3>Sur structure aluminium</h3><p>Plots réglables, rails aluminium et fixations invisibles. Rien ne pourrit sous les lames, l'air circule, la terrasse reste plane. C'est la structure de nos bois modifiés et de nos bambous.</p></div>
      <div class="carte"><h3>Sur structure traditionnelle</h3><p>Lambourdes en bois, la technique classique et éprouvée, adaptée aux bois massifs et exotiques.</p></div>
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
        <div class="essence-photo">${img(...e.photo)}</div>
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
    ["Mise à niveau", "Calage des lambourdes", "Plots réglables en hauteur, terrasse bien plane"],
    ["Fixation des lames", "Le plus souvent vissées", "Clips, sans vis apparente"],
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
    ["Support idéal", "Support existant stable : dalle béton, toit-terrasse, ancienne terrasse", "Supports plus irréguliers ou plus fragiles, grandes hauteurs"],
    ["Rigidité", "Bonne, à condition que le support soit sain", "Ossature continue, très rigide, qui répartit les charges"],
    ["Planéité", "Réglage plot par plot", "Rails réglés une fois, toute la surface suit"],
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
<section class="hero hero-page">
  <div class="conteneur">
    <p class="fil"><a href="/">Accueil</a> › Terrasses</p>
    <h1>Nos structures de terrasse</h1>
    <p class="chapo">Une terrasse se juge sur la durée, et sa durée de vie se joue sous les lames. Nous adaptons la structure à votre terrain, à votre revêtement et à votre budget.</p>
    <p class="actions"><a class="bouton bouton-clair" href="#comparatif-bois">Comparer pour le bois</a> <a class="bouton bouton-clair" href="#comparatif-carrelage">Comparer pour le carrelage</a></p>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes deux-colonnes-image">
    <div class="photo-produit">${img("structure-aluminium", "Système de structure aluminium : plot réglable, rail aluminium, clip et pattes de fixation sous une lame de terrasse", 404)}</div>
    <div>
      <p class="sous-titre">Notre solution phare</p>
      <h2>La structure aluminium</h2>
      <p>Des plots réglables en hauteur posés sur le support, des rails en aluminium, et des lames fixées par clips, sans vis apparente.</p>
      <ul class="puces">
        <li><strong>Imputrescible</strong> : l'aluminium ne pourrit pas et ne gonfle pas avec l'humidité.</li>
        <li><strong>Plane</strong> : les plots rattrapent les défauts de niveau du terrain ou de la dalle.</li>
        <li><strong>Ventilée</strong> : l'air circule entre la structure et les lames, qui sèchent plus vite.</li>
        <li><strong>Polyvalente</strong> : elle accueille le bois, le <a href="/terrasse-composite-lyon/">composite</a>, le <a href="/terrasse-carrelage-lyon/">carrelage</a> et les <a href="/terrasse-aluminium-lyon/">lames aluminium</a>.</li>
      </ul>
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
  ["Accoya gris", "Bois acétylé très stable, teinté gris dès la pose : la façade a tout de suite son aspect patiné."],
  ["Accoya naturel", "La même stabilité dans une teinte claire, qui grisera naturellement avec le temps."],
  ["Kebony", "Bois modifié d'origine végétale, brun à la pose, qui évolue vers un gris argenté homogène."],
  ["Bambou X-treme", "Bambou densifié brun foncé, au rendu contemporain et très régulier."],
  ["Thermofrêne", "Frêne traité thermiquement, brun chaud au veinage marqué."],
  ["Thermopin clear", "Pin traité thermiquement, sélectionné sans nœuds pour un aspect net et uniforme."],
  ["Thermo épicéa", "Épicéa traité thermiquement, du brun profond au noir, qui se patine en gris argenté : un rendu nordique et contemporain."],
];

const bardageBois = {
  title: "Bardage bois Lyon : accoya, kebony, thermofrêne | Instant Terrasse",
  description: "Bardage bois sur mesure à Lyon : accoya gris ou naturel, kebony, bambou X-treme, thermofrêne, thermopin clear, thermo épicéa. Un bardage assorti à votre terrasse. Devis gratuit.",
  corps: `
<section class="hero hero-page">
  <div class="conteneur">
    <p class="fil"><a href="/">Accueil</a> › Bardage</p>
    <h1>Bardage bois sur mesure à Lyon</h1>
    <p class="chapo">Habiller une façade, une extension, un mur de clôture ou un abri avec des bois sélectionnés pour durer en extérieur, et assortis à votre terrasse si vous le souhaitez.</p>
    <p class="actions"><a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-clair" href="#essences-bardage">Voir les essences</a></p>
  </div>
</section>

<section class="bandeau-photo">
  <figure class="conteneur">
    ${imgPhoto("bardage-accoya-gris-maison", { sizes: "(max-width:1180px) 100vw, 1150px", prioritaire: true })}
    <figcaption>Illustration : bardage vertical en accoya gris.</figcaption>
  </figure>
</section>

<section id="essences-bardage" class="bloc">
  <div class="conteneur">
    <h2>Nos essences de bardage</h2>
    <p class="chapo">Des bois modifiés et traités, choisis pour leur stabilité : un bardage doit rester droit et beau malgré le soleil et la pluie.</p>
    <div class="grille grille-3">
      ${bardageEssences.map(([n, t]) => `<div class="carte"><h3>${n}</h3><p>${t}</p></div>`).join("")}
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
      <h2>Pourquoi un bardage bois ?</h2>
      <ul class="puces">
        <li><strong>Esthétique</strong> : il réchauffe une façade et s'accorde avec le jardin.</li>
        <li><strong>Protection</strong> : il habille et protège le mur des intempéries.</li>
        <li><strong>Cohérence</strong> : la même essence que votre <a href="/terrasse-bois-lyon/">terrasse</a> pour un extérieur harmonieux.</li>
        <li><strong>Évolution naturelle</strong> : le bois grise avec le temps, ou d'emblée avec l'accoya gris.</li>
      </ul>
    </div>
    <div>
      <h2>Votre projet</h2>
      <p>${POSE}</p>
      <p>Vous préférez une façade sans aucun entretien ? Découvrez le <a href="/bardage-aluminium-lyon/">bardage aluminium</a>.</p>
    </div>
  </div>
</section>
${cta("Un projet de bardage ?")}`,
};

// ---------- Gabarit de page produit (pergolas, etc.) ----------
const pageProduit = ({ introGalerie = "", fil, h1, chapo, photo, atouts, galerieCat, titreGalerie, details, voisins, ctaTitre, complement = "Une pergola se pense avec la terrasse qu'elle couvre : hauteurs, fixations, écoulement des eaux. Nous pouvons étudier les deux ensemble.", titreVoisins = "Les autres solutions" }) => `
<section class="hero hero-page">
  <div class="conteneur hero-grille">
    <div>
      <p class="fil"><a href="/">Accueil</a> › ${fil}</p>
      <h1>${h1}</h1>
      <p class="chapo">${chapo}</p>
      <p class="actions"><a class="bouton" href="/contact/">Demander un devis gratuit</a> <a class="bouton bouton-clair" href="#galerie">Voir les photos</a></p>
    </div>
    <figure class="hero-photo">${imgPhoto(photo, { sizes: "(max-width:1060px) 100vw, 560px", prioritaire: true })}</figure>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Les points forts</h2>
    <div class="grille grille-3">${atouts.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>

<section id="galerie" class="bloc">
  <div class="conteneur">
    ${galerie(galerieCat, { titre: titreGalerie, intro: introGalerie, legende: "Illustrations" })}
  </div>
</section>

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
    <div class="grille grille-3">${voisins.map(([c, t, x]) => `<a class="carte carte-lien" href="${c}"><h3>${t}</h3><p>${x}</p><span class="fleche" aria-hidden="true">→</span></a>`).join("")}</div>
  </div>
</section>
${cta(ctaTitre, "Devis gratuit et sans engagement. Nous venons sur place pour prendre les mesures et vous conseiller la solution la plus adaptée.")}`;

const PERGOLAS = [
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
    fil: "Pergolas & carports",
    h1: "Pergola bioclimatique sur mesure à Lyon",
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
    fil: "Pergolas & carports",
    h1: "Pergola à toile rétractable à Lyon",
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
    fil: "Pergolas & carports",
    h1: "Pergola à toit fixe à Lyon",
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
    fil: "Garde-corps",
    h1: "Garde-corps aluminium sur mesure à Lyon",
    chapo: "Sécuriser une terrasse surélevée, un balcon, un escalier ou un toit-terrasse sans fermer la vue. Nos garde-corps aluminium sont fabriqués sur mesure, pour les maisons comme pour les bâtiments professionnels.",
    photo: "garde-corps-pro-logements",
    atouts: [
      ["Vitré", "Des panneaux de verre pour garder toute la vue et la lumière."],
      ["Barreaudage", "Des barreaux verticaux ou des lisses horizontales, pour un style classique ou contemporain."],
      ["Remplissage bois ou lames", "Des lames pour préserver l'intimité, assorties à votre terrasse ou à votre bardage."],
      ["Aluminium sans entretien", "Pas de rouille, pas de peinture à refaire, dans le coloris de votre choix."],
      ["Toutes les configurations", "Terrasses, balcons, escaliers, rampants, toits-terrasses, coursives."],
      ["Particuliers et professionnels", "Maisons, immeubles de logements, bureaux, commerces et établissements recevant du public."],
    ],
    galerieCat: "garde-corps",
    titreGalerie: "Garde-corps en situation",
    introGalerie: "Choisissez votre type de projet.",
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
    h1: "Terrasse en lames aluminium à Lyon",
    chapo: "L'aspect d'une terrasse bois, sans ses contraintes : des lames en aluminium qui ne pourrissent pas, ne se déforment pas et ne demandent ni saturateur ni ponçage. En coloris unis ou en décor bois.",
    photo: "alu-piscine-aspect-teck",
    atouts: [
      ["Imputrescible", "L'aluminium ne craint ni l'eau, ni les champignons, ni les insectes."],
      ["Stable dans le temps", "Pas de fente, pas de vrillage, pas d'écharde : les lames restent droites."],
      ["Sans entretien", "Un nettoyage à l'eau suffit, aucun traitement à refaire."],
      ["Aspect bois ou uni", "Des décors bois réalistes ou des teintes unies, du clair au foncé."],
      ["Idéal autour des piscines", "Une surface saine au contact de l'eau, sans risque d'écharde pieds nus."],
      ["Sur structure aluminium", "Posées sur notre <a href=\"/structure-terrasse-lyon/\">ossature aluminium</a> et plots réglables, pour une terrasse parfaitement plane."],
    ],
    galerieCat: "terrasse-aluminium",
    titreGalerie: "Terrasses en lames aluminium en situation",
    introGalerie: "Filtrez par famille de teintes.",
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

export const CONTENUS = {
  "/terrasse-aluminium-lyon/": terrasseAluminium,
  "/garde-corps-aluminium-lyon/": gardeCorps,
  "/pergola-bioclimatique-lyon/": pergolaBioclimatique,
  "/pergola-toile-retractable-lyon/": pergolaToileRetractable,
  "/pergola-toit-fixe-lyon/": pergolaToitFixe,
  "/bardage-bois-lyon/": bardageBois,
  "/terrasse-bois-lyon/": terrasseBois,
  "/structure-terrasse-lyon/": structures,
};
