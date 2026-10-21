// Plan du site et contenu des pages. Une entrée = une page (chemin avec / final).
// statut "preparation" : page affichée avec un contenu provisoire, à rédiger.
export const SITE = {
  url: "https://www.instantterrasse.com",
  tel: "04 82 53 18 74",
  telLien: "+33482531874",
  whatsapp: "https://wa.me/33482531874",
  adresse: "8 avenue Général Leclerc, 69140 Rillieux-la-Pape",
};

export const POSE =
  "Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier.";

// Les univers structurent le menu, l'accueil et le maillage interne.
export const UNIVERS = [
  {
    cle: "terrasses",
    nom: "Terrasses",
    accroche: "Bois, composite, carrelage ou aluminium, sur la structure adaptée à votre terrain.",
    groupes: [
      {
        nom: "Par matériau",
        pages: [
          ["/terrasse-bois-lyon/", "Terrasse bois", "Bois modifiés et bambou sur structure aluminium, ou bois massifs et exotiques sur structure traditionnelle."],
          ["/terrasse-composite-lyon/", "Terrasse composite", "Sans entretien, posée sur structure aluminium."],
          ["/terrasse-carrelage-lyon/", "Terrasse carrelage", "Grès cérame sur plots ou sur structure aluminium."],
          ["/terrasse-aluminium-lyon/", "Terrasse en lames aluminium", "Imputrescible, stable, en coloris unis ou aspect bois."],
          ["/structure-terrasse-lyon/", "Nos structures", "Traditionnelle, aluminium ou sur plots : la base qui fait durer une terrasse."],
          ["/nos-terrasses/", "Comparatif des matériaux", "Bois, composite, carrelage ou aluminium : lequel choisir ?"],
        ],
      },
      {
        nom: "Par projet",
        pages: [
          ["/terrasse-piscine-lyon/", "Terrasse de piscine", "Une plage confortable et sûre autour du bassin."],
          ["/terrasse-balcon-lyon/", "Balcon", "Rénover le sol d'un balcon, sans travaux lourds."],
          ["/toit-terrasse-lyon/", "Toit-terrasse", "Créer un espace de vie sur une toiture plate."],
          ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "La solution pour les terrains en pente."],
          ["/terrasse-sur-plots-lyon/", "Terrasse et dalles sur plots", "Poser sans fondation sur un support existant."],
        ],
      },
      {
        nom: "Professionnels",
        pages: [
          ["/terrasse-restaurant-chr-lyon/", "Restaurants, cafés, hôtels", "Des terrasses robustes pour l'accueil du public."],
          ["/terrasse-camping-hpa/", "Campings et hébergements", "Terrasses de mobil-homes, decks et pontons."],
        ],
      },
    ],
  },
  {
    cle: "pergolas",
    nom: "Pergolas & carports",
    accroche: "Pergolas aluminium et carports sur mesure pour profiter de l'extérieur en toute saison.",
    groupes: [
      {
        nom: "Pergolas",
        pages: [
          ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Lames orientables : soleil, ombre ou pluie, vous choisissez."],
          ["/pergola-toile-retractable-lyon/", "Pergola à toile rétractable", "Une toile qui se déploie et se replie à la demande."],
          ["/pergola-toile-tendue-lyon/", "Pergola à toile tendue", "Une ombre légère et un style contemporain."],
          ["/pergola-toit-fixe-lyon/", "Pergola à toit fixe", "Un abri permanent, à l'épreuve de la pluie."],
        ],
      },
      {
        nom: "Carports",
        pages: [["/carport-lyon/", "Carport", "Un abri voiture élégant, sans construire de garage."]],
      },
    ],
  },
  {
    cle: "garde-corps",
    nom: "Garde-corps",
    accroche: "Garde-corps aluminium pour terrasses, balcons et escaliers, sur mesure.",
    groupes: [
      { nom: "Garde-corps", pages: [["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Barreaudage, verre ou tôle : sécurité et style, sans entretien."]] },
    ],
  },
  {
    cle: "stores",
    nom: "Stores bannes",
    accroche: "De l'ombre à la demande au-dessus de votre terrasse.",
    groupes: [
      { nom: "Stores bannes", pages: [["/store-banne-lyon/", "Store banne", "Coffre intégral, motorisation, capteurs vent et soleil."]] },
    ],
  },
  {
    cle: "bardage",
    nom: "Bardage",
    accroche: "Habiller une façade, un mur ou un abri en bois ou en aluminium.",
    groupes: [
      {
        nom: "Bardage",
        pages: [
          ["/bardage-bois-lyon/", "Bardage bois", "La chaleur du bois, en accord avec votre terrasse."],
          ["/bardage-aluminium-lyon/", "Bardage aluminium", "Une façade moderne, sans entretien."],
        ],
      },
    ],
  },
];

// Pages hors univers (navigation secondaire et pied de page).
export const AUTRES = [
  ["/realisations/", "Réalisations", "Quelques chantiers Instant Terrasse."],
  ["/conseils/", "Conseils", "Prix, choix des matériaux, entretien : nos guides."],
  ["/quisommesnous/", "À propos", "Qui est derrière Instant Terrasse."],
  ["/contact/", "Contact et devis", "Parlez-nous de votre projet : devis gratuit."],
  ["/terrasse-lyon/", "Terrasse à Lyon", "Nos projets à Lyon."],
  ["/terrasse-rillieux-la-pape/", "Terrasse à Rillieux-la-Pape", "Nos projets à Rillieux-la-Pape."],
  ["/terrasse-caluire-et-cuire/", "Terrasse à Caluire-et-Cuire", "Nos projets à Caluire-et-Cuire."],
];

const carteLien = ([chemin, titre, texte]) =>
  `<a class="carte carte-lien" href="${chemin}"><h3>${titre}</h3><p>${texte}</p><span class="fleche" aria-hidden="true">→</span></a>`;

const etapes = [
  ["Échange", "Nous parlons de votre projet, de vos envies et de l'usage de votre extérieur."],
  ["Visite et étude", "Nous venons sur place : dimensions, accès, support, contraintes techniques."],
  ["Conception et devis", "Matériau, structure, finitions : nous vous proposons la solution la plus juste."],
  ["Réalisation", "La pose est confiée à notre installateur partenaire, nous restons votre interlocuteur."],
];

const accueil = `
<section class="hero">
  <div class="conteneur hero-in">
    <p class="surtitre">Version de test — site en construction</p>
    <h1>Terrasses, pergolas et aménagements extérieurs sur mesure à Lyon</h1>
    <p class="chapo">Terrasse bois, composite, carrelage ou aluminium, pergola, carport, garde-corps, store banne, bardage : un seul interlocuteur pour tout votre extérieur.</p>
    <p class="actions">
      <a class="bouton" href="/contact/">Demander un devis gratuit</a>
      <a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a>
    </p>
  </div>
</section>

<section class="bloc">
  <div class="conteneur">
    <h2>Tout votre extérieur, pensé ensemble</h2>
    <div class="grille grille-univers">
      ${UNIVERS.map((u) => {
        const premiere = u.groupes[0].pages[0][0];
        const lien = u.groupes.length === 1 && u.groupes[0].pages.length === 1 ? premiere : `#${u.cle}`;
        return `<a class="carte carte-univers carte-lien" href="${lien}"><h3>${u.nom}</h3><p>${u.accroche}</p><span class="fleche" aria-hidden="true">→</span></a>`;
      }).join("")}
    </div>
  </div>
</section>

<section class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Un seul interlocuteur, du premier rendez-vous à la fin du chantier</h2>
      <p>${POSE}</p>
      <p>Une terrasse et une pergola se pensent ensemble : hauteurs, fixations, écoulement des eaux, garde-corps. En réunissant tout le projet, on évite les mauvaises surprises entre corps de métier.</p>
    </div>
    <ol class="etapes etapes-verticales">${etapes.map(([t, x]) => `<li><h3>${t}</h3><p>${x}</p></li>`).join("")}</ol>
  </div>
</section>

${UNIVERS.filter((u) => u.groupes.some((g) => g.pages.length > 1) || u.groupes.length > 1).map((u) => `
<section id="${u.cle}" class="bloc">
  <div class="conteneur">
    <h2>${u.nom}</h2>
    <p class="chapo">${u.accroche}</p>
    ${u.groupes.map((g) => `${u.groupes.length > 1 ? `<h3 class="sous-titre">${g.nom}</h3>` : ""}<div class="grille grille-3">${g.pages.map(carteLien).join("")}</div>`).join("")}
  </div>
</section>`).join("")}

<section class="bloc bloc-cta">
  <div class="conteneur">
    <h2>Parlons de votre projet</h2>
    <p class="chapo">Devis gratuit et sans engagement, réponse sous 24 h. Lyon et sa région.</p>
    <p class="actions">
      <a class="bouton" href="/contact/">Demander un devis</a>
      <a class="bouton bouton-clair" href="${SITE.whatsapp}">WhatsApp</a>
    </p>
  </div>
</section>`;

// Toutes les pages produits / projets / annexes, générées depuis le plan.
const pagesPlan = [
  ...UNIVERS.flatMap((u) => u.groupes.flatMap((g) => g.pages.map((p) => ({ p, u })))),
  ...AUTRES.map((p) => ({ p, u: null })),
].map(({ p: [chemin, nom, resume], u }) => ({
  chemin,
  title: `${nom} | Instant Terrasse`,
  description: `${resume} Instant Terrasse, Lyon et sa région. Devis gratuit.`,
  h1: nom,
  intro: resume,
  univers: u?.cle ?? null,
  statut: "preparation",
}));

export const PAGES = [
  {
    chemin: "/",
    title: "Terrasse sur mesure Lyon | Instant Terrasse",
    description: "Terrasses bois, composite, carrelage et aluminium, pergolas, carports, garde-corps, stores bannes et bardage sur mesure à Lyon. Devis gratuit.",
    corps: accueil,
  },
  ...pagesPlan,
];
