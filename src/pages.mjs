import { imgPhoto } from "./galerie.mjs";
import { carteProduit, vignette } from "./vignettes.mjs";
// Plan du site et contenu des pages. Une entrée = une page (chemin avec / final).
// statut "preparation" : page affichée avec un contenu provisoire, à rédiger.
export const SITE = {
  url: "https://instantterrasse.com",
  tel: "04 82 53 18 74",
  telLien: "+33482531874",
  whatsapp: "https://wa.me/33482531874",
  adresse: "8 avenue Général Leclerc, 69140 Rillieux-la-Pape",
};

export const POSE =
  "Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier.";

// Les univers structurent le menu, l'accueil et le maillage interne.
export const UNIVERS = [
  {
    cle: "terrasses", nom: "Terrasses",
    accroche: "Bois, composite, aluminium ou carrelage, sur une structure qui dure.",
    groupes: [{ nom: "", pages: [
      ["/terrasse-bois-lyon/", "Terrasse bois", "Bois modifiés et bambou sur structure aluminium, ou bois massifs et exotiques sur structure traditionnelle.", "Bois"],
      ["/terrasse-composite-lyon/", "Terrasse composite", "Sans entretien, posée sur structure aluminium.", "Composite"],
      ["/terrasse-aluminium-lyon/", "Terrasse en lames aluminium", "Imputrescible, stable, en coloris unis ou aspect bois.", "Aluminium"],
      ["/terrasse-carrelage-lyon/", "Terrasse carrelage", "Grès cérame sur plots ou sur structure aluminium.", "Carrelage"],
      ["/structure-terrasse-lyon/", "Nos structures", "Traditionnelle, aluminium ou sur plots : la base qui fait durer une terrasse.", "Structures"],
      ["/nos-terrasses/", "Comparatif des matériaux", "Bois, composite, carrelage ou aluminium : lequel choisir ?", "Comparatif"],
    ] }],
  },  {
    cle: "amenagements", nom: "Aménagements",
    accroche: "Pergolas, stores, carports, garde-corps et bardages autour de la terrasse.",
    groupes: [
      { nom: "Protections solaires", pages: [
        ["/pergolas-lyon/", "Pergolas : comparatif", "Bioclimatique, toile ou toit fixe : laquelle choisir ?", "Choisir sa pergola"],
        ["/pergola-bioclimatique-lyon/", "Pergola bioclimatique", "Lames orientables : soleil, ombre ou pluie, vous choisissez."],
        ["/pergola-toile-retractable-lyon/", "Pergola à toile rétractable", "Une toile qui se déploie et se replie à la demande."],
        ["/pergola-toile-tendue-lyon/", "Pergola à toile tendue", "Une ombre légère et un style contemporain."],
        ["/pergola-toit-fixe-lyon/", "Pergola à toit fixe", "Un abri permanent, à l'épreuve de la pluie."],
        ["/store-banne-lyon/", "Store banne", "Coffre intégral, motorisation, capteurs vent et soleil."],
      ] },
      { nom: "Bardage", pages: [
        ["/bardage-bois-lyon/", "Bardage bois", "Accoya, kebony, bambou, thermofrêne, thermopin ou thermo épicéa : un bardage assorti à votre terrasse."],
        ["/bardage-aluminium-lyon/", "Bardage aluminium", "Une façade moderne, sans entretien."],
      ] },
      { nom: "Garde-corps", pages: [
        ["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Barreaudage, verre ou tôle : sécurité et style, sans entretien."],
      ] },
      { nom: "Carport", pages: [
        ["/carport-lyon/", "Carport", "Un abri voiture élégant, sans construire de garage."],
      ] },
    ],
  },  {
    cle: "projets", nom: "Types de projets",
    accroche: "Piscine, balcon, toit-terrasse ou terrain en pente.",
    groupes: [{ nom: "", pages: [
      ["/terrasse-piscine-lyon/", "Terrasse de piscine", "Une plage confortable et sûre autour du bassin."],
      ["/terrasse-sur-plots-lyon/", "Terrasse et dalles sur plots", "Poser sans fondation sur un support existant.", "Terrasse sur plots"],
      ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "La solution pour les terrains en pente."],
      ["/terrasse-balcon-lyon/", "Balcon", "Rénover le sol d'un balcon, sans travaux lourds.", "Terrasse de balcon"],
      ["/toit-terrasse-lyon/", "Toit-terrasse", "Créer un espace de vie sur une toiture plate."],
    ] }],
  },  {
    cle: "professionnels", nom: "Professionnels", menuToujours: true, // affiché dans le menu même si une page est en préparation
    accroche: "Restaurants, hôtels et campings.",
    groupes: [{ nom: "", pages: [
      ["/terrasse-camping-hpa/", "Campings et hébergements", "Terrasses de mobil-homes, decks et pontons.", "Terrasse pour hôtellerie de plein air"],
      ["/terrasse-restaurant-chr-lyon/", "Restaurants, cafés, hôtels", "Des terrasses robustes pour l'accueil du public.", "Terrasse pour café, hôtel, restaurant"],
    ] }],
  },
];

// Pages hors univers (navigation secondaire et pied de page).
export const AUTRES = [
  ["/realisations/", "Galerie", "Toute la gamme en photos, classée par produit."],
  ["/conseils/", "Conseils", "Prix, choix des matériaux, entretien : nos guides."],
  ["/quisommesnous/", "À propos", "Qui est derrière Instant Terrasse."],
  ["/contact/", "Contact et devis", "Parlez-nous de votre projet : devis gratuit."],
  ["/partenaires/", "Partenaires", "Horizon Fenêtre et ESCOM HABITAT."],
  ["/terrasse-lyon/", "Terrasse à Lyon", "Nos projets à Lyon."],
  ["/terrasse-rillieux-la-pape/", "Terrasse à Rillieux-la-Pape", "Nos projets à Rillieux-la-Pape."],
  ["/terrasse-caluire-et-cuire/", "Terrasse à Caluire-et-Cuire", "Nos projets à Caluire-et-Cuire."],
];

export const ENGAGEMENTS = [
  ["Des produits sélectionnés pour leur qualité", "Des matériaux choisis pour durer, et un devis détaillé ligne par ligne."],
  ["Les échantillons chez vous", "Pas de showroom : nous venons avec les échantillons, pour les voir à la lumière de votre jardin et à côté de votre façade."],
  ["Plan 3D offert", "Avant de signer, vous voyez votre projet en 3D : implantation, hauteurs, matériau."],
  ["Structure aluminium garantie 20 ans", "Nos structures de terrasse en aluminium sont garanties 20 ans."],
  ["Pose assurée en décennale", "La pose est confiée à notre installateur partenaire, assuré en garantie décennale."],
];

export const MOT_ANTOINE = `
      <p>Je travaille depuis 2017 dans les pergolas, les stores bannes et les garde-corps. Début 2022, j'ai ajouté la terrasse : pendant quatre ans, j'ai été commercial pour une entreprise de terrasses, où j'ai appris les matériaux, les structures, et surtout ce que les clients attendent vraiment.</p>
      <p>J'ai créé Instant Terrasse avec une idée simple : proposer des produits sélectionnés pour leur qualité, en toute transparence. Je viens chez vous avec les échantillons, je vous montre votre projet en 3D, et je vous explique chaque ligne du devis.</p>
      <p class="signature">Antoine Escolle, fondateur d'Instant Terrasse</p>`;

// Avis Google (fiche « Instant Terrasse - Lyon », relevés le 22/10/2026). Textes recopiés tels quels, extraits arrêtés en fin de phrase.
export const AVIS = {
  note: "5,0", total: 4,
  lien: "https://www.google.com/maps/place/?q=place_id:ChIJ0Y8c_yRNUikR9AmnO1el7BE",
  ecrire: "https://search.google.com/local/writereview?placeid=ChIJ0Y8c_yRNUikR9AmnO1el7BE",
  liste: [
    ["Axel V.", "Nous sommes ravis du résultat ! La terrasse est magnifique, le travail est soigné et réalisé avec beaucoup de professionnalisme. L’équipe a été à l’écoute, ponctuelle et de très bon conseil tout au long du projet."],
    ["Clement V.", "Un travail remarquable ! J'ai fait appel à cette entreprise pour la réalisation de ma terrasse en bois avec une ossature alu, et le résultat dépasse mes attentes."],
    ["Coraline G.", "Un travail vraiment remarquable, réalisé avec beaucoup de sérieux, de passion et de professionnalisme. Chaque détail semble avoir été pensé avec soin, ce qui donne un résultat de grande qualité."],
    ["Marine C.", "Personne très compétente et professionnelle. Ses conseils pour la réalisation ont été précieux et parfaitement adapté . Je recommande sans hésitation !"],
  ],
};
const ETOILE = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.5 6.6-.8z"/></svg>`;
const ETOILES = `<span class="etoiles" role="img" aria-label="5 étoiles sur 5">${ETOILE.repeat(5)}</span>`;
const LOGO_GOOGLE = `<svg class="logo-google" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;
const COULEURS_AVIS = ["#3d6b35", "#4a5961", "#9a5a1f", "#5b4a7a"];
const CERTIFIE = `<svg class="certifie" viewBox="0 0 24 24" width="16" height="16" aria-label="Avis vérifié"><path fill="#4285F4" d="M12 1l2.6 2.2 3.4-.4.9 3.3 3 1.7-1.2 3.2 1.2 3.2-3 1.7-.9 3.3-3.4-.4L12 23l-2.6-2.2-3.4.4-.9-3.3-3-1.7L3.3 13 2.1 9.8l3-1.7.9-3.3 3.4.4z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.2l3 3 6-6"/></svg>`;
export const BADGE_AVIS = `<a class="badge-avis" href="${AVIS.lien}" target="_blank" rel="noopener" aria-label="${AVIS.note} sur 5 sur Google, ${AVIS.total} avis">${LOGO_GOOGLE}<strong>${AVIS.note}</strong>${ETOILES}<span>${AVIS.total} avis</span></a>`;

export const FAQ = [
  ["Quel matériau choisir pour ma terrasse&nbsp;?", "Tout dépend de l'aspect recherché, du budget et du temps que vous voulez consacrer à l'entretien. Le bois apporte la chaleur d'un matériau naturel, le composite et l'aluminium limitent l'entretien, le carrelage offre un rendu minéral. Notre <a href=\"/nos-terrasses/\">comparatif des matériaux</a> vous aide à y voir clair, et nous affinons le choix lors de la visite."],
  ["Qui réalise la pose&nbsp;?", `${POSE}`],
  ["Combien coûte une terrasse ou une pergola&nbsp;?", "Le prix dépend du matériau, de la surface, de la structure nécessaire, de la hauteur et de l'accès au chantier. C'est pourquoi nous venons voir les lieux avant de chiffrer. Nous vous proposons des produits sélectionnés pour leur qualité, avec un devis détaillé, gratuit et sans engagement."],
  ["Quelles sont les garanties&nbsp;?", "Nos structures de terrasse en aluminium sont garanties 20 ans, et la pose est réalisée par notre installateur partenaire, assuré en garantie décennale."],
  ["Avez-vous un showroom&nbsp;?", "Non, et c'est volontaire : c'est nous qui venons chez vous avec les échantillons. Un matériau se choisit mieux à la lumière de votre jardin et à côté de votre façade que sous les néons d'un magasin."],
  ["Proposez-vous un plan 3D&nbsp;?", "Oui, le plan 3D de votre projet est offert. Vous voyez votre future terrasse, sa hauteur et son matériau avant de vous engager."],
  ["Faut-il une autorisation pour une terrasse ou une pergola&nbsp;?", "Selon la surface, la hauteur et votre commune, une déclaration préalable de travaux peut être nécessaire, notamment pour une pergola ou une terrasse surélevée. Nous vous indiquons la démarche à suivre lors de la visite."],
  ["Pouvez-vous réaliser la terrasse, la pergola et le garde-corps en même temps&nbsp;?", "Oui, et c'est même recommandé : hauteurs, fixations et écoulement des eaux se pensent ensemble. Vous gardez un interlocuteur principal pour tout le projet."],
  ["Dans quelle zone intervenez-vous&nbsp;?", "À Lyon et dans sa région. Indiquez votre code postal dans la demande de devis, nous vous répondons rapidement."],
];

const carteLien = ([chemin, titre, texte]) =>
  carteProduit(chemin, titre, texte);

const ICONES_ETAPES = [
  '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>',
  '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>',
  '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  '<path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5z"/>',
];
const etapes = [
  ["Échange", "Nous parlons de votre projet, de vos envies et de l'usage de votre extérieur.", "Vos envies, votre usage, votre extérieur."],
  ["Visite avec échantillons", "Nous venons chez vous avec les échantillons : vous comparez les matériaux à côté de votre façade, et nous relevons dimensions, accès et support.", "Chez vous, matériaux en main, mesures prises."],
  ["Plan 3D et devis", "Vous recevez un plan 3D offert de votre projet et un devis détaillé : vous savez exactement ce que vous achetez.", "Votre projet en 3D, offert, et un devis détaillé."],
  ["Réalisation", "La pose est confiée à notre installateur partenaire, assuré en décennale. Nous restons votre interlocuteur jusqu'à la fin du chantier.", "Pose par notre installateur partenaire, suivie de bout en bout."],
];

export const TRIO = `<ul class="trio"><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg><span>Visite chez vous, avec les échantillons</span></li><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7l9 5 9-5-9-5z"/><path d="m3 17 9 5 9-5"/><path d="m3 12 9 5 9-5"/></svg><span>Plan 3D de votre projet offert</span></li><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg><span>Pose assurée en garantie décennale</span></li></ul>`;

const MATERIAUX_ACCUEIL = [
  ["/terrasse-bois-lyon/", "Bois", "terrasse-kebony-piscine-debordement", "Accoya, kebony, bambou : la chaleur du vrai bois"],
  ["/terrasse-composite-lyon/", "Composite", "composite-gris-piscine", "L'aspect du bois, sans saturateur ni ponçage"],
  ["/terrasse-aluminium-lyon/", "Aluminium", "alu-piscine-aspect-teck", "Ne pourrit pas, ne bouge pas, en 6 teintes"],
  ["/terrasse-carrelage-lyon/", "Carrelage", "carrelage-toit-terrasse-montagnes", "Grès cérame posé sans colle, sur plots"],
];
const PROJETS_ACCUEIL = [
  ["/terrasse-piscine-lyon/", "Terrasse de piscine", "Une plage agréable pieds nus.", "terrasse-thermofrene-piscine-mer"],
  ["/terrasse-balcon-lyon/", "Balcon", "Un vrai sol, posé sur l'existant.", "gc-maison-balcon-lisses"],
  ["/toit-terrasse-lyon/", "Toit-terrasse", "Sans percer l'étanchéité.", "terrasse-bambou-xtreme-toit"],
  ["/terrasse-sur-pilotis-lyon/", "Terrasse sur pilotis", "Pour les terrains en pente.", "pilotis-terrain-pente"],
  ["/terrasse-sur-plots-lyon/", "Terrasse sur plots", "Sans fondation, de niveau.", "structure-plot-rail-lame"],
];
const AUTRES_PIECES = [
  ["/bardage-bois-lyon/", "Bardage", "Un bardage bois ou aluminium, assorti à la terrasse.", "bardage-bambou-xtreme-patio"],
  ["/pergolas-lyon/", "Pergolas", "Bioclimatique, toile ou toit fixe : de l'ombre et un abri.", "pergola-bioclimatique-piscine"],
  ["/store-banne-lyon/", "Store banne", "De l'ombre à la demande, replié quand le soleil tourne.", "store-banne-beige-maison"],
  ["/garde-corps-aluminium-lyon/", "Garde-corps", "Sécuriser la terrasse sans fermer la vue.", "gc-maison-verre-clair"],
  ["/carport-lyon/", "Carport", "Un abri élégant pour la voiture, sans construire de garage.", "carport-garage-gravier"],
];
const PIECES = [
  { etiquette: "Terrasses", titre: "Revêtements", encart: ["/bardage-bois-lyon/", "Bardage", "bardage-thermofrene-maison"], texte: "Au sol, du bois, du composite, du carrelage ou des lames aluminium sur une structure garantie 20 ans. Aux murs, un bardage assorti.", photo: "terrasse-thermofrene-pool-house",
    liens: [["/terrasse-bois-lyon/", "Bois"], ["/terrasse-composite-lyon/", "Composite"], ["/terrasse-carrelage-lyon/", "Carrelage"], ["/terrasse-aluminium-lyon/", "Aluminium"], ["/bardage-bois-lyon/", "Bardage"]] },
  { etiquette: "Pergolas", titre: "Protections solaires", encart: ["/store-banne-lyon/", "Store banne", "store-banne-orange"], texte: "Une pergola ou un store banne pour profiter de la terrasse aux heures chaudes comme par temps de pluie.", photo: "pergola-toile-retractable-facade",
    liens: [["/pergola-bioclimatique-lyon/", "Bioclimatique"], ["/pergola-toile-retractable-lyon/", "Toile rétractable"], ["/pergola-toit-fixe-lyon/", "Toit fixe"], ["/store-banne-lyon/", "Store banne"], ["/carport-lyon/", "Carport"]] },
  { etiquette: "Garde-corps", titre: "Un espace sécurisé", texte: "Un garde-corps aluminium qui sécurise la terrasse sans fermer la vue.", photo: "gc-maison-lisses-pergola",
    liens: [["/garde-corps-aluminium-lyon/", "Garde-corps aluminium"]] },
];

// Pastilles posées sur la maison de l'en-tête : [lien, nom, x %, y % de l'image, côté de l'étiquette].
const PINS = [];
const SCRIPT_PINS = `(()=>{const h=document.querySelector('.hm-visuel'),im=h&&h.querySelector('.h-img'),ps=h&&h.querySelectorAll('.pin');if(!im)return;const place=()=>{const r=im.getBoundingClientRect(),H=h.getBoundingClientRect(),nw=im.naturalWidth||1600,nh=im.naturalHeight||900,s=Math.max(r.width/nw,r.height/nh),w=nw*s,hh=nh*s,op=getComputedStyle(im).objectPosition.split(' ').map(parseFloat),ox=(r.width-w)*op[0]/100,oy=(r.height-hh)*op[1]/100;ps.forEach(p=>{const x=r.left-H.left+ox+w*p.dataset.x/100,y=r.top-H.top+oy+hh*p.dataset.y/100;let vis=x>r.left-H.left+12&&x<r.right-H.left-12&&y>r.top-H.top+12&&y<r.bottom-H.top-12;if(getComputedStyle(h).position==='absolute'){const t=h.parentNode.querySelector('.h-txt .chapo').getBoundingClientRect();if(x+H.left<t.right+30)vis=false;h.parentNode.querySelectorAll('.h-txt>*').forEach(e=>{const b=e.getBoundingClientRect();if(x+H.left>b.left-40&&x+H.left<b.right+40&&y+H.top>b.top-30&&y+H.top<b.bottom+30)vis=false});if(y+H.top<100)vis=false}p.style.left=x+'px';p.style.top=y+'px';p.hidden=!vis});h.classList.add('pins-prets')};im.complete?place():im.addEventListener('load',place);addEventListener('resize',place)})();`;

// Choix du projet dans le formulaire de rappel : [libellé, tracé de l'icône].
const CHOIX_PROJET = [
  ["Terrasse", '<path d="M12 3C7.6 3 4 5.2 4 8h16c0-2.8-3.6-5-8-5z"/><path d="M12 8v9"/><path d="M2 21l2.5-4h15l2.5 4z"/><path d="M8 17l-1 4M12 17v4M16 17l1 4"/>'],
  ["Pergola", '<path d="M3 5h18M3 8h18"/><path d="M6.5 5v3M10 5v3M14 5v3M17.5 5v3"/><path d="M5 8v12M19 8v12"/><path d="M2 20h20"/>'],
  ["Store banne", '<path d="M4 4h16l1 6H3z"/><path d="M8 4l-1 6M12 4v6M16 4l1 6"/><path d="M3 10a2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0"/><path d="M5 13.5V21h14v-7.5"/><path d="M9.5 21v-4.5h5V21"/>'],
  ["Garde-corps", '<path d="M2 20h20"/><path d="M4 20V8M12 20V8M20 20V8"/><path d="M3 8h18"/><path d="M4 12h16M4 15.5h16"/>'],
  ["Bardage", '<path d="M3 10l9-6 9 6"/><path d="M5 8.7V21h14V8.7"/><path d="M8.5 6.7V21M12 5v16M15.5 6.7V21"/>'],
  ["Carport", '<path d="M2 5h20"/><path d="M4 5v15M20 5v15"/><path d="M7.5 14l1.5-3h6l1.5 3"/><path d="M6.5 14h11v3.5h-11z"/><circle cx="9" cy="18.5" r="1"/><circle cx="15" cy="18.5" r="1"/>'],
];

const accueil = `
<section class="hero-plein hero-slogan hero-maison-plein">
  <div class="hm-visuel">
    ${imgPhoto("alu-piscine-blanche-vue", { sizes: "(max-width:700px) 150vh, 100vw", prioritaire: true, classe: "h-img" })}
    <div class="pins" aria-label="Nos produits sur la maison">${PINS.map(([c, t, x, y, cote]) => `<a class="pin${cote ? " pin-" + cote : ""}" href="${c}" data-x="${x}" data-y="${y}"><span class="pin-point" aria-hidden="true"></span><span class="pin-nom">${t}</span></a>`).join("")}</div>
  </div>
  <div class="conteneur h-txt">
    <p class="kicker"><span class="k-long">Terrasses, pergolas et garde-corps s</span><span class="k-court">S</span>ur mesure à Lyon</p>
    <h1><span class="fin">Créez la 5<sup>e</sup> pièce</span> <span class="fort">de votre maison</span></h1>
    <p class="chapo">Une terrasse pensée comme une pièce à part entière&nbsp;: le lien entre l'intérieur et l'extérieur.</p>
    <p class="actions">
      <a class="bouton" href="/contact/">Demander une visite gratuite</a>
      <a class="bouton bouton-blanc" href="#piece">Découvrir</a>
    </p>
    <p class="hero-avis">${BADGE_AVIS}</p>
    ${TRIO}
  </div>
<script>${SCRIPT_PINS}</script>
</section>

<section id="piece" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Votre 5<sup>e</sup> pièce</p>
    <h2>Terrasses, pergolas et garde-corps</h2>
    <p class="chapo">Le sol, la pergola, le garde-corps : tout est dessiné ensemble, sur un même plan 3D offert. Vous voyez votre terrasse finie avant de vous décider, et chaque élément s'accorde aux autres, des hauteurs aux finitions.</p>
    <article class="piece-terrasse">
      <a class="pt-photo" href="/nos-terrasses/">${imgPhoto("terrasse-thermofrene-piscine-mer", { sizes: "(max-width:900px) 92vw, 620px" })}</a>
      <div class="pt-corps">
        <p class="pt-sur">Terrasses</p><h3>Des revêtements de terrasse…</h3>
        <div class="pt-materiaux">${MATERIAUX_ACCUEIL.map(([c, t, ph, acc]) => `<a class="pt-mat" href="${c}">${imgPhoto(ph, { sizes: "(max-width:700px) 92vw, 300px" })}<span class="pt-nom"><small>Terrasse</small>${t}</span><span class="pt-acc">${acc}</span><span class="pt-dec">Découvrir <span aria-hidden="true">→</span></span></a>`).join("")}<a class="pt-mat pt-comparer" href="/nos-terrasses/"><span class="pt-nom">Comparer</span><span class="pt-acc">Bois, composite, aluminium ou carrelage&nbsp;: lequel choisir&nbsp;?</span><span class="pt-dec">Voir le comparatif <span aria-hidden="true">→</span></span></a></div>
        <p class="pt-lien"><a class="bouton bouton-clair" href="/nos-terrasses/">Comparer les matériaux</a></p>
      </div>
    </article>
    <h3 class="titre-autour">Et des aménagements…</h3>
    <div class="pieces-4">
      ${AUTRES_PIECES.map(([c, t, x, ph]) => `<a class="piece-mini" href="${c}">${imgPhoto(ph, { sizes: "(max-width:600px) 46vw, (max-width:1100px) 45vw, 290px" })}<div class="pm-corps"><h3>${t}</h3><p>${x}</p><span class="pt-dec">Découvrir <span aria-hidden="true">→</span></span></div><span class="pm-fleche" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span></a>`).join("")}
    </div>
    <h3 class="titre-autour titre-projets">Pour tous vos projets.</h3>
    <div class="projets-car">${PROJETS_ACCUEIL.map(([c, t, x, ph]) => `<a class="piece-mini projet-mini" href="${c}">${imgPhoto(ph, { sizes: "(max-width:700px) 82vw, 240px" })}<div class="pm-corps"><h3>${t}</h3><p>${x}</p><span class="pt-dec">Découvrir <span aria-hidden="true">→</span></span></div><span class="pm-fleche" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span></a>`).join("")}</div>
  </div>
</section>

<section id="methode" class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="sous-titre">Notre méthode</p>
      <a class="carte-antoine" href="/quisommesnous/">${imgPhoto("antoine-escolle-2", { sizes: "100px", classe: "ca-photo" })}<span><strong>Antoine</strong>, votre interlocuteur du premier rendez-vous à la fin du chantier.<em>Mon parcours →</em></span></a>
      <h2><span class="long">Votre projet, en 4 étapes</span><span class="court">Votre interlocuteur principal, du début à la fin</span></h2>
      <p>${POSE}</p>
      <ul class="puces">
        <li><strong>Des produits sélectionnés pour leur qualité.</strong></li>
        <li><strong>Structure aluminium garantie 20 ans.</strong></li>
        <li><strong>Pose assurée en garantie décennale.</strong></li>
      </ul>
    </div>
    <ol class="etapes etapes-verticales">${etapes.map(([t, x, c], i) => `<li><span class="etape-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONES_ETAPES[i]}</svg><b>${i + 1}</b></span><h3>${t}</h3><p><span class="long">${x}</span><span class="court">${c}</span></p></li>`).join("")}</ol>
  </div>
</section>

<section id="avis" class="bloc">
  <div class="conteneur">
    <div class="avis-entete">
      <h2>Ce que disent nos clients</h2>
      <span class="avis-badge-pc">${BADGE_AVIS}</span>
    </div>
    <div class="grille grille-avis">${AVIS.liste.map(([n, t], i) => `<figure class="avis">
      <figcaption class="avis-tete"><span class="avis-initiale" style="background:${COULEURS_AVIS[i % 4]}" aria-hidden="true">${n[0]}</span><span class="avis-nom">${n}<small>Avis Google</small></span>${LOGO_GOOGLE.replace('width="20" height="20"', 'width="22" height="22"')}</figcaption>
      <p class="avis-note">${ETOILES}${CERTIFIE}</p>
      <blockquote class="avis-texte">${t}</blockquote>
      <button class="avis-suite" type="button" hidden>Lire la suite</button>
    </figure>`).join("")}</div>
    <script>document.querySelectorAll('.avis').forEach(a=>{const t=a.querySelector('.avis-texte'),b=a.querySelector('.avis-suite');if(t.scrollHeight>t.clientHeight+2){b.hidden=false;b.onclick=()=>{const o=a.classList.toggle('ouvert');b.textContent=o?'Réduire':'Lire la suite'}}})</script>
    <p class="actions avis-lien"><a class="bouton bouton-clair" href="${AVIS.lien}" target="_blank" rel="noopener">Voir tous les avis sur Google</a></p>
  </div>
</section>

<section id="faq" class="bloc">
  <div class="conteneur"><div class="faq-liste">
    <h2>Vos questions</h2>
    ${[0, 2, 1, 6, 8].map((i) => FAQ[i]).map(([q, r]) => `<details class="faq"><summary>${q}</summary><div>${r}</div></details>`).join("")}
  </div></div>
</section>

<section id="rappel" class="bloc bloc-cta bloc-rappel">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Parlons de votre projet</h2>
      <p class="chapo">Laissez votre numéro : nous vous rappelons pour en parler et organiser la visite, gratuite et sans engagement.</p>
      <a class="carte-google" href="${AVIS.lien}" target="_blank" rel="noopener" aria-label="Note Google ${AVIS.note} sur 5, ${AVIS.total} avis : voir les avis">
        <span class="cg-haut">${LOGO_GOOGLE.replace('width="20" height="20"', 'width="30" height="30"')}<span class="cg-note"><strong>${AVIS.note}</strong>${ETOILES}</span></span>
        <span class="cg-texte">Note Google, ${AVIS.total} avis clients</span>
        <span class="cg-citation">« Le résultat dépasse mes attentes. » <em>—&nbsp;Clement&nbsp;V.</em></span>
      </a>
      <p class="rappel-direct">Vous préférez appeler ?<br><a href="tel:${SITE.telLien}">${SITE.tel}</a> · <a href="${SITE.whatsapp}">WhatsApp</a></p>
    </div>
    <form class="formulaire formulaire-court" method="post" action="/api/contact">
      <input type="hidden" name="court" value="1"><input type="hidden" name="souhait" value="Être rappelé">
      <div class="deux-champs">
        <label><span>Nom <b aria-hidden="true">*</b></span><input name="nom" required autocomplete="name" maxlength="120"></label>
        <label><span>Téléphone <b aria-hidden="true">*</b></span><input name="telephone" type="tel" required autocomplete="tel" maxlength="30"></label>
      </div>
      <fieldset class="choix-projet">
        <legend>Mon projet <i>(plusieurs choix possibles)</i></legend>
        <div class="choix-grille">${CHOIX_PROJET.map(([v, ic]) => `<label class="choix"><input type="checkbox" name="projet" value="${v}"><span class="choix-tuile"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ic}</svg>${v}</span></label>`).join("")}</div>
      </fieldset>
      <label><span>Un mot sur votre projet <i>(facultatif)</i></span><textarea name="message" rows="3" maxlength="3000"></textarea></label>
      <label class="pot-de-miel" aria-hidden="true">Site web<input name="site_web" tabindex="-1" autocomplete="off"></label>
      <button class="bouton" type="submit">Être rappelé</button>
      <p class="mentions-form">Vos informations servent uniquement à vous recontacter. <a href="/confidentialite/">Confidentialité</a></p>
    </form>
  </div>
</section>`;

const projetsListe = [...UNIVERS.flatMap((u) => u.groupes.flatMap((g) => g.pages.map((p) => p[1]))), "Autre projet"];

const contact = `
<section class="hero hero-page">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="fil"><a href="/">Accueil</a></p>
      <h1>Parlez-nous de votre projet</h1>
      <p class="chapo">Devis gratuit et sans engagement. Décrivez-nous votre projet, nous vous recontactons rapidement pour en parler et organiser une visite.</p>
      <ul class="puces">
        <li>Visite chez vous, avec les échantillons</li>
        <li>Plan 3D de votre projet offert</li>
        <li>Devis détaillé, gratuit et sans engagement</li>
      </ul>
      <p>${BADGE_AVIS}</p>
      <p class="contact-direct">Vous préférez parler directement ?<br><a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a> <a class="bouton bouton-clair" href="${SITE.whatsapp}">WhatsApp</a></p>
      <p class="note-pose">Des photos de votre extérieur nous aident beaucoup : envoyez-les sur WhatsApp après votre demande.</p>
    </div>
    <form class="formulaire" method="post" action="/api/contact">
      <label>Je souhaite
        <select name="souhait">
          <option>Obtenir un devis gratuit</option><option>Demander une visite sur place</option><option>Être rappelé</option><option>Poser une question</option>
        </select>
      </label>
      <fieldset class="choix-projet">
        <legend>Mon projet <i>(plusieurs choix possibles)</i></legend>
        <div class="choix-grille">${CHOIX_PROJET.map(([v, ic]) => `<label class="choix"><input type="checkbox" name="projet" value="${v}"><span class="choix-tuile"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ic}</svg>${v}</span></label>`).join("")}</div>
      </fieldset>
      <div class="deux-champs">
        <label><span>Nom <b aria-hidden="true">*</b></span><input name="nom" required autocomplete="name" maxlength="120"></label>
        <label><span>Téléphone <b aria-hidden="true">*</b></span><input name="telephone" type="tel" required autocomplete="tel" maxlength="30"></label>
      </div>
      <div class="deux-champs">
        <label><span>E-mail <b aria-hidden="true">*</b></span><input name="email" type="email" required autocomplete="email" maxlength="160"></label>
        <label><span>Code postal</span><input name="codepostal" inputmode="numeric" autocomplete="postal-code" maxlength="10"></label>
      </div>
      <label>Votre projet en quelques mots<textarea name="message" rows="5" maxlength="3000" placeholder="Surface approximative, matériau envisagé, délai souhaité…"></textarea></label>
      <label class="pot-de-miel" aria-hidden="true">Site web<input name="site_web" tabindex="-1" autocomplete="off"></label>
      <button class="bouton" type="submit">Envoyer ma demande</button>
      <p class="mentions-form">Vos informations servent uniquement à répondre à votre demande et ne sont jamais transmises à des tiers.</p>
    </form>
  </div>
</section>
<script>
const v=(new URLSearchParams(location.search).get('projet')||'').toLowerCase();
if(v){const m=[['pergola','Pergola'],['store','Store banne'],['garde','Garde-corps'],['bardage','Bardage'],['carport','Carport']].find(([k])=>v.includes(k));const c=document.querySelector('.formulaire .choix input[value="'+(m?m[1]:'Terrasse')+'"]');if(c)c.checked=true}
</script>
<section class="bloc bloc-alt">
  <div class="conteneur conteneur-etroit">
    <h2>Avant votre demande</h2>
    ${[5, 4, 3, 7].map((i) => FAQ[i]).map(([q, r]) => `<details class="faq"><summary>${q}</summary><div>${r}</div></details>`).join("")}
  </div>
</section>`;

const fleche = `<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`;
const carteMarque = ({ url, logo, w, h, alt, titre, texte, tags, bouton, tel, telLien, appel, classe }) => `
<article class="marque ${classe}">
  <a class="marque-lien" href="${url}" target="_blank" rel="noopener">
    <div class="marque-logo"><img src="/assets/img/${logo}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async"></div>
    <div class="marque-corps">
      <h2>${titre}</h2><p>${texte}</p>
      <ul class="tags">${tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      <span class="marque-btn">${bouton} ${fleche}</span>
    </div>
  </a>
  <a class="marque-appel" href="tel:${telLien}"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg><span>${appel}</span><strong>${tel}</strong></a>
</article>`;

const partenaires = `
<section class="hero hero-page">
  <div class="conteneur">
    <p class="fil"><a href="/">Accueil</a> › Partenaires</p>
    <h1>Nos partenaires</h1>
    <p class="chapo">Les entreprises avec qui nous travaillons pour aller au bout de votre projet, de la terrasse aux fenêtres.</p>
  </div>
</section>
<section class="bloc bloc-alt">
  <div class="conteneur marques">
    ${carteMarque({ url: "https://www.horizonfenetre.com/", logo: "logo-horizon-fenetre.webp", w: 520, h: 530, alt: "Horizon Fenêtre", classe: "horizon",
      titre: "Vos menuiseries sur mesure", texte: "Horizon Fenêtre fournit vos fenêtres, baies, volets et portes sur mesure. Même société qu'Instant Terrasse : le seuil de la baie et la terrasse sont pensés ensemble.",
      tags: ["Fenêtres", "Baies coulissantes", "Volets roulants", "Volets battants", "Portes d'entrée", "Portes de garage", "Portails", "Clôtures", "Moustiquaires"],
      bouton: "Découvrir Horizon Fenêtre", tel: "04 28 55 00 24", telLien: "+33428550024", appel: "Appeler Horizon Fenêtre" })}
    ${carteMarque({ url: "https://www.escomhabitat.com/", logo: "escom-habitat.webp", w: 480, h: 149, alt: "ESCOM HABITAT", classe: "escom",
      titre: "Deux savoir-faire, une seule entreprise", texte: "ESCOM HABITAT, à Rillieux-la-Pape, réunit Instant Terrasse et Horizon Fenêtre : un interlocuteur principal pour vos aménagements extérieurs et vos menuiseries.",
      tags: ["Instant Terrasse", "Horizon Fenêtre", "Particuliers", "Professionnels", "Lyon et alentours"],
      bouton: "Découvrir ESCOM HABITAT", tel: "06 27 94 41 62", telLien: "+33627944162", appel: "Appeler ESCOM HABITAT" })}
  </div>
</section>
<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Devenir partenaire</h2>
      <p>Vous êtes artisan, paysagiste, architecte, constructeur ou apporteur d'affaires dans la région lyonnaise et vous cherchez un fournisseur de terrasses, pergolas, garde-corps ou bardages sur mesure ? <a href="/contact/?projet=Autre%20projet">Écrivez-nous</a> ou appelez-nous au <a href="tel:${SITE.telLien}">${SITE.tel}</a>.</p>
    </div>
    <div class="carte">
      <h3>Un projet terrasse et fenêtres ?</h3>
      <p>Nous venons prendre les mesures et nous coordonnons les deux.</p>
      <p class="actions"><a class="bouton" href="/contact/">Demander un devis</a></p>
    </div>
  </div>
</section>`;

const aPropos = `
<section class="hero hero-page">
  <div class="conteneur conteneur-etroit">
    <p class="fil"><a href="/">Accueil</a> › À propos</p>
    <h1>Instant Terrasse, c'est d'abord une façon de travailler</h1>
    <p class="chapo">Une entreprise de Rillieux-la-Pape qui conçoit et fournit des terrasses, pergolas, garde-corps, stores bannes et bardages sur mesure, à Lyon et dans sa région.</p>
  </div>
</section>
<section class="bloc bloc-alt">
  <div class="conteneur conteneur-etroit mot-texte">
    <div class="portrait-antoine">${imgPhoto("antoine-escolle-2", { sizes: "(max-width:700px) 60vw, 280px" })}<p><strong>Antoine Escolle</strong><br>Fondateur d'Instant Terrasse</p></div>
    <h2>Mon parcours</h2>
    ${MOT_ANTOINE}
  </div>
</section>
<section class="bloc">
  <div class="conteneur">
    <h2>Ce que vous pouvez attendre de nous</h2>
    <div class="grille engagements">${ENGAGEMENTS.map(([t, x]) => `<div class="carte"><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
  </div>
</section>
<section id="methode" class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Comment se déroule un projet</h2>
      <p>${POSE}</p>
      <p>Vous n'avez donc qu'un numéro à retenir : le nôtre. C'est nous qui préparons la commande, organisons la livraison et coordonnons la pose.</p>
    </div>
    <ol class="etapes etapes-verticales">${etapes.map(([t, x, c], i) => `<li><span class="etape-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONES_ETAPES[i]}</svg><b>${i + 1}</b></span><h3>${t}</h3><p><span class="long">${x}</span><span class="court">${c}</span></p></li>`).join("")}</ol>
  </div>
</section>
<section class="bloc">
  <div class="conteneur deux-colonnes">
    <div>
      <h2>Une marque d'ESCOM HABITAT</h2>
      <p>Instant Terrasse fait partie d'ESCOM HABITAT, à Rillieux-la-Pape, comme <a href="https://www.horizonfenetre.com/">Horizon Fenêtre</a> pour les menuiseries sur mesure. Si votre projet de terrasse touche aussi une baie vitrée ou des volets, nous pouvons tout étudier ensemble.</p>
      <p><a href="/partenaires/">Voir nos partenaires →</a></p>
    </div>
    <div class="carte">
      <h3>On en parle chez vous ?</h3>
      <p>Visite avec les échantillons, plan 3D offert, devis détaillé et sans engagement.</p>
      <p class="actions"><a class="bouton" href="/contact/">Demander un devis</a> <a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a></p>
    </div>
  </div>
</section>`;

const merci = `<section class="hero hero-page"><div class="conteneur conteneur-etroit"><h1>Merci, votre demande est bien partie</h1><p class="chapo">Nous vous recontactons rapidement. Si vous avez des photos de votre extérieur, envoyez-les-nous sur WhatsApp : elles nous aident à préparer la visite.</p><p class="actions"><a class="bouton" href="${SITE.whatsapp}">Envoyer des photos sur WhatsApp</a> <a class="bouton bouton-clair" href="/">Retour à l'accueil</a></p></div></section>`;
const erreur = `<section class="hero hero-page"><div class="conteneur conteneur-etroit"><h1>Votre demande n'a pas pu être envoyée</h1><p class="chapo">Vérifiez que le nom, le téléphone et l'e-mail sont bien remplis, ou contactez-nous directement.</p><p class="actions"><a class="bouton" href="tel:${SITE.telLien}">${SITE.tel}</a> <a class="bouton bouton-clair" href="/contact/">Réessayer</a></p></div></section>`;

// ---------- Pages légales ----------
const SOCIETE = { nom: "ESCOM HABITAT", forme: "SARL", capital: "1 000 €", siret: "106 406 465 00018", rcs: "RCS Lyon 106 406 465", tva: "FR70 106 406 465", adresse: "8 avenue Général Leclerc, 69140 Rillieux-la-Pape", directeur: "Antoine Escolle" };
const pageTexte = (h1, contenu) => `<section class="hero hero-page"><div class="conteneur conteneur-etroit"><p class="fil"><a href="/">Accueil</a></p><h1>${h1}</h1></div></section><section class="bloc"><div class="conteneur conteneur-etroit texte-legal">${contenu}</div></section>`;
const mentions = pageTexte("Mentions légales", `
  <h2>Éditeur du site</h2>
  <p>Le site instantterrasse.com est édité par ${SOCIETE.nom}, ${SOCIETE.forme} au capital de ${SOCIETE.capital}, dont Instant Terrasse est le nom commercial.<br>
  Siège social : ${SOCIETE.adresse}<br>
  SIRET : ${SOCIETE.siret} — ${SOCIETE.rcs}<br>
  TVA intracommunautaire : ${SOCIETE.tva}<br>
  Téléphone : <a href="tel:${SITE.telLien}">${SITE.tel}</a></p>
  <p>Directeur de la publication : ${SOCIETE.directeur}.</p>
  <h2>Hébergement</h2>
  <p>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis — vercel.com.</p>
  <h2>Propriété intellectuelle</h2>
  <p>Les textes, le logo et la mise en page de ce site appartiennent à ${SOCIETE.nom}. Certaines photos sont des illustrations fournies par nos fournisseurs et restent leur propriété. Toute reproduction sans autorisation est interdite.</p>
  <h2>Données personnelles</h2>
  <p>Voir notre <a href="/confidentialite/">politique de confidentialité</a>.</p>`);
const confidentialite = pageTexte("Confidentialité et cookies", `
  <h2>Qui traite vos données ?</h2>
  <p>${SOCIETE.nom} (Instant Terrasse), ${SOCIETE.adresse}, est responsable du traitement des données collectées sur ce site.</p>
  <h2>Quelles données, et pourquoi ?</h2>
  <p>Le formulaire de contact recueille votre nom, votre téléphone, votre e-mail, votre code postal, le type de projet et votre message. Ces informations servent uniquement à vous répondre, à préparer la visite et à établir votre devis. Elles ne sont ni vendues ni cédées.</p>
  <p>Le message est transmis par e-mail grâce au service Brevo (Sendinblue SAS, France).</p>
  <h2>Combien de temps ?</h2>
  <p>Vos données sont conservées le temps de traiter votre demande puis, sans suite de votre part, trois ans au plus après notre dernier échange. Si vous devenez client, elles sont conservées le temps de la relation commerciale et des obligations légales.</p>
  <h2>Vos droits</h2>
  <p>Vous pouvez demander à consulter, corriger ou supprimer vos données, ou vous opposer à leur utilisation, en nous écrivant à l'adresse du siège ou par téléphone au <a href="tel:${SITE.telLien}">${SITE.tel}</a>. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).</p>
  <h2>Cookies</h2>
  <p>Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience. Aucun bandeau de consentement n'est donc nécessaire. Les liens vers Google Maps ou WhatsApp vous conduisent sur des sites tiers, soumis à leurs propres règles.</p>`);

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
    title: "Terrasse et pergola sur mesure à Lyon | Instant Terrasse",
    description: "Créez la 5e pièce de votre maison : terrasses bois, composite, carrelage ou aluminium, pergolas, stores, garde-corps et bardages sur mesure à Lyon. Plan 3D offert.",
    corps: accueil,
    jsonld: {
      "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", name: "Instant Terrasse", url: SITE.url,
      telephone: "+33482531874", logo: `${SITE.url}/assets/img/logo-instant-terrasse-360.webp`,
      address: { "@type": "PostalAddress", streetAddress: "8 avenue Général Leclerc", postalCode: "69140", addressLocality: "Rillieux-la-Pape", addressCountry: "FR" },
      areaServed: "Lyon et sa région", founder: { "@type": "Person", name: "Antoine Escolle" },
      parentOrganization: { "@type": "Organization", name: "ESCOM HABITAT" },
      makesOffer: ["Terrasses bois, composite, carrelage et aluminium", "Pergolas et carports", "Garde-corps aluminium", "Stores bannes", "Bardage bois et aluminium"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
    },
  },
  ...pagesPlan.map((p) => p.chemin === "/quisommesnous/" ? { ...p, title: "À propos : Antoine Escolle et Instant Terrasse, Lyon", description: "Instant Terrasse, créée par Antoine Escolle : pergolas, stores et garde-corps depuis 2017, terrasses depuis 2022. Produits sélectionnés pour leur qualité, échantillons à domicile, plan 3D offert.", corps: aPropos, statut: "redigee" } : p).map((p) => p.chemin === "/partenaires/" ? { ...p, title: "Partenaires : Horizon Fenêtre et ESCOM HABITAT | Instant Terrasse", description: "Horizon Fenêtre, menuiseries sur mesure à Lyon, et ESCOM HABITAT, la société qui réunit Instant Terrasse et Horizon Fenêtre.", corps: partenaires, statut: "redigee" } : p).map((p) => p.chemin === "/contact/" ? { ...p, title: "Devis gratuit terrasse et pergola Lyon | Instant Terrasse", description: "Demandez votre devis gratuit pour une terrasse, une pergola, un garde-corps, un store banne ou un bardage à Lyon et dans sa région.", corps: contact, statut: "redigee" } : p),
  { chemin: "/merci/", title: "Merci | Instant Terrasse", description: "Votre demande a bien été envoyée.", corps: merci, horsPlan: true },
  { chemin: "/mentions-legales/", title: "Mentions légales | Instant Terrasse", description: "Mentions légales du site Instant Terrasse, marque d'ESCOM HABITAT à Rillieux-la-Pape.", corps: mentions, horsPlan: true },
  { chemin: "/confidentialite/", title: "Confidentialité et cookies | Instant Terrasse", description: "Comment Instant Terrasse utilise les données du formulaire de contact, et l'absence de cookies publicitaires.", corps: confidentialite, horsPlan: true },
  { chemin: "/erreur-envoi/", title: "Envoi impossible | Instant Terrasse", description: "Votre demande n'a pas pu être envoyée.", corps: erreur, horsPlan: true },
];
