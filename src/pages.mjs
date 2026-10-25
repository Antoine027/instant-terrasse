import { imgPhoto } from "./galerie.mjs";
import { carteProduit } from "./vignettes.mjs";
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
  "Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier.";

// Les univers structurent le menu, l'accueil et le maillage interne.
export const UNIVERS = [
  {
    cle: "terrasses",
    nom: "Terrasses & bardages",
    accroche: "Bois, composite, carrelage ou aluminium au sol, bois ou aluminium en façade.",
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
        nom: "Bardage",
        pages: [
          ["/bardage-bois-lyon/", "Bardage bois", "Accoya, kebony, bambou, thermofrêne, thermopin ou thermo épicéa : un bardage assorti à votre terrasse."],
          ["/bardage-aluminium-lyon/", "Bardage aluminium", "Une façade moderne, sans entretien."],
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
      }
    ],
  },
  {
    cle: "pergolas",
    nom: "Pergolas & stores",
    accroche: "Pergolas, stores bannes et carports pour profiter de l'extérieur en toute saison.",
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
      { nom: "Stores bannes", pages: [["/store-banne-lyon/", "Store banne", "Coffre intégral, motorisation, capteurs vent et soleil."]] }
    ],
  },
  {
    cle: "garde-corps",
    nom: "Garde-corps",
    accroche: "Garde-corps aluminium pour terrasses, balcons et escaliers, sur mesure.",
    groupes: [
      { nom: "Garde-corps", pages: [["/garde-corps-aluminium-lyon/", "Garde-corps aluminium", "Barreaudage, verre ou tôle : sécurité et style, sans entretien."]] }
    ],
  },
];

// Pages hors univers (navigation secondaire et pied de page).
export const AUTRES = [
  ["/realisations/", "Réalisations", "Quelques chantiers Instant Terrasse."],
  ["/conseils/", "Conseils", "Prix, choix des matériaux, entretien : nos guides."],
  ["/quisommesnous/", "À propos", "Qui est derrière Instant Terrasse."],
  ["/contact/", "Contact et devis", "Parlez-nous de votre projet : devis gratuit."],
  ["/partenaires/", "Partenaires", "Horizon Fenêtre et ESCOM HABITAT."],
  ["/terrasse-lyon/", "Terrasse à Lyon", "Nos projets à Lyon."],
  ["/terrasse-rillieux-la-pape/", "Terrasse à Rillieux-la-Pape", "Nos projets à Rillieux-la-Pape."],
  ["/terrasse-caluire-et-cuire/", "Terrasse à Caluire-et-Cuire", "Nos projets à Caluire-et-Cuire."],
];

export const ENGAGEMENTS = [
  ["Des prix transparents", "Le meilleur produit au meilleur tarif, et un devis détaillé : vous savez ce que vous payez, et pourquoi."],
  ["Les échantillons chez vous", "Pas de showroom : nous venons avec les échantillons, pour les voir à la lumière de votre jardin et à côté de votre façade."],
  ["Plan 3D offert", "Avant de signer, vous voyez votre projet en 3D : implantation, hauteurs, matériau."],
  ["Structure aluminium garantie 20 ans", "Nos structures de terrasse en aluminium sont garanties 20 ans."],
  ["Pose assurée en décennale", "La pose est confiée à notre installateur partenaire, assuré en garantie décennale."],
];

export const MOT_ANTOINE = `
      <p>Je travaille depuis 2017 dans les pergolas, les stores bannes et les garde-corps. Début 2022, j'ai ajouté la terrasse : pendant quatre ans, j'ai été commercial pour une entreprise de terrasses, où j'ai appris les matériaux, les structures, et surtout ce que les clients attendent vraiment.</p>
      <p>J'ai créé Instant Terrasse avec une idée simple : proposer le meilleur produit au meilleur tarif, en toute transparence. Je viens chez vous avec les échantillons, je vous montre votre projet en 3D, et je vous explique chaque ligne du devis.</p>
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
export const BADGE_AVIS = `<a class="badge-avis" href="${AVIS.lien}" target="_blank" rel="noopener">${ETOILES}<strong>${AVIS.note}/5</strong> sur Google · ${AVIS.total} avis</a>`;

export const FAQ = [
  ["Quel matériau choisir pour ma terrasse ?", "Tout dépend de l'aspect recherché, du budget et du temps que vous voulez consacrer à l'entretien. Le bois apporte la chaleur d'un matériau naturel, le composite et l'aluminium limitent l'entretien, le carrelage offre un rendu minéral. Notre <a href=\"/nos-terrasses/\">comparatif des matériaux</a> vous aide à y voir clair, et nous affinons le choix lors de la visite."],
  ["Qui réalise la pose ?", `${POSE}`],
  ["Combien coûte une terrasse ou une pergola ?", "Le prix dépend du matériau, de la surface, de la structure nécessaire, de la hauteur et de l'accès au chantier. C'est pourquoi nous venons voir les lieux avant de chiffrer. Notre objectif : le meilleur produit au meilleur tarif, avec un devis détaillé, gratuit et sans engagement."],
  ["Quelles sont les garanties ?", "Nos structures de terrasse en aluminium sont garanties 20 ans, et la pose est réalisée par notre installateur partenaire, assuré en garantie décennale."],
  ["Avez-vous un showroom ?", "Non, et c'est volontaire : c'est nous qui venons chez vous avec les échantillons. Un matériau se choisit mieux à la lumière de votre jardin et à côté de votre façade que sous les néons d'un magasin."],
  ["Proposez-vous un plan 3D ?", "Oui, le plan 3D de votre projet est offert. Vous voyez votre future terrasse, sa hauteur et son matériau avant de vous engager."],
  ["Faut-il une autorisation pour une terrasse ou une pergola ?", "Selon la surface, la hauteur et votre commune, une déclaration préalable de travaux peut être nécessaire, notamment pour une pergola ou une terrasse surélevée. Nous vous indiquons la démarche à suivre lors de la visite."],
  ["Pouvez-vous réaliser la terrasse, la pergola et le garde-corps en même temps ?", "Oui, et c'est même recommandé : hauteurs, fixations et écoulement des eaux se pensent ensemble. Vous n'avez qu'un seul interlocuteur pour tout le projet."],
  ["Dans quelle zone intervenez-vous ?", "À Lyon et dans sa région. Indiquez votre code postal dans la demande de devis, nous vous répondons rapidement."],
];

const carteLien = ([chemin, titre, texte]) =>
  carteProduit(chemin, titre, texte);

const etapes = [
  ["Échange", "Nous parlons de votre projet, de vos envies et de l'usage de votre extérieur."],
  ["Visite avec échantillons", "Nous venons chez vous avec les échantillons : vous comparez les matériaux à côté de votre façade, et nous relevons dimensions, accès et support."],
  ["Plan 3D et devis", "Vous recevez un plan 3D offert de votre projet et un devis détaillé : vous savez exactement ce que vous achetez."],
  ["Réalisation", "La pose est confiée à notre installateur partenaire, assuré en décennale. Nous restons votre interlocuteur jusqu'à la fin du chantier."],
];

export const TRIO = `<ul class="trio"><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg><span>Visite chez vous, avec les échantillons</span></li><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7l9 5 9-5-9-5z"/><path d="m3 17 9 5 9-5"/><path d="m3 12 9 5 9-5"/></svg><span>Plan 3D de votre projet offert</span></li><li><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg><span>Pose assurée en garantie décennale</span></li></ul>`;

const PIECES = [
  { etiquette: "Terrasses & bardages", titre: "Le sol et les murs", texte: "Au sol, du bois, du composite, du carrelage ou des lames aluminium sur une structure garantie 20 ans. Aux murs, un bardage assorti.", photo: "terrasse-thermofrene-pool-house",
    liens: [["/terrasse-bois-lyon/", "Bois"], ["/terrasse-composite-lyon/", "Composite"], ["/terrasse-carrelage-lyon/", "Carrelage"], ["/terrasse-aluminium-lyon/", "Aluminium"], ["/bardage-bois-lyon/", "Bardage"]] },
  { etiquette: "Pergolas & stores", titre: "Le plafond", texte: "Une pergola ou un store banne pour profiter de la terrasse aux heures chaudes comme par temps de pluie.", photo: "pergola-toile-retractable-facade",
    liens: [["/pergola-bioclimatique-lyon/", "Bioclimatique"], ["/pergola-toile-retractable-lyon/", "Toile rétractable"], ["/pergola-toit-fixe-lyon/", "Toit fixe"], ["/store-banne-lyon/", "Store banne"]] },
  { etiquette: "Garde-corps", titre: "Un espace sécurisé", texte: "Un garde-corps aluminium qui sécurise la terrasse sans fermer la vue.", photo: "gc-maison-lisses-pergola",
    liens: [["/garde-corps-aluminium-lyon/", "Garde-corps aluminium"]] },
];

const accueil = `
<section class="hero-plein hero-slogan">
  ${imgPhoto("pergola-bioclimatique-salon-piscine", { sizes: "(max-width:700px) calc(100vw - 32px), 100vw", prioritaire: true, classe: "h-img" })}
  <div class="conteneur h-txt">
    <p class="kicker">Terrasses, pergolas et garde-corps sur mesure à Lyon</p>
    <h1><span class="fin">Créez la 5<sup>e</sup> pièce</span> <span class="fort">de votre maison</span></h1>
    <p class="chapo">Une terrasse pensée comme une pièce à part entière : le lien entre l'intérieur et l'extérieur.</p>
    <p class="actions">
      <a class="bouton" href="/contact/">Demander une visite gratuite</a>
      <a class="bouton bouton-blanc" href="#piece">Découvrir</a>
    </p>
    <p class="hero-avis">${BADGE_AVIS}</p>
    ${TRIO}
  </div>
</section>

<section id="piece" class="bloc">
  <div class="conteneur">
    <p class="sous-titre">Votre 5<sup>e</sup> pièce</p>
    <h2>Terrasses, pergolas et garde-corps</h2>
    <p class="chapo">Le sol, ce qui le couvre et ce qui le borde se choisissent ensemble : hauteurs, fixations, écoulement de l'eau. Nous étudions tout le projet, pour une terrasse qui prolonge vraiment votre maison.</p>
    <div class="pieces">
      ${PIECES.map((x) => `<article class="piece">
        <div class="piece-photo">${imgPhoto(x.photo, { sizes: "(max-width:900px) 92vw, 380px" })}<span class="piece-etiquette">${x.etiquette}</span></div>
        <h3>${x.titre}</h3><p>${x.texte}</p>
        <ul class="piece-liens">${x.liens.map(([c, t]) => `<li><a href="${c}">${t}</a></li>`).join("")}</ul>
      </article>`).join("")}
    </div>
  </div>
</section>

<section id="methode" class="bloc bloc-alt">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="sous-titre">Notre méthode</p>
      <h2>Un seul interlocuteur, du premier rendez-vous à la fin du chantier</h2>
      <p>${POSE}</p>
      <ul class="puces">
        <li><strong>Des prix transparents</strong> : le meilleur produit au meilleur tarif, et un devis détaillé.</li>
        <li><strong>Structure aluminium garantie 20 ans.</strong></li>
        <li><strong>Pose assurée en garantie décennale.</strong></li>
      </ul>
    </div>
    <ol class="etapes etapes-verticales">${etapes.map(([t, x]) => `<li><h3>${t}</h3><p>${x}</p></li>`).join("")}</ol>
  </div>
</section>

<section id="avis" class="bloc">
  <div class="conteneur">
    <div class="avis-entete">
      <h2>Ce que disent nos clients</h2>
      ${BADGE_AVIS}
    </div>
    <div class="grille grille-avis">${AVIS.liste.map(([n, t]) => `<figure class="carte avis">${ETOILES}<blockquote>« ${t} »</blockquote><figcaption>${n} · avis Google</figcaption></figure>`).join("")}</div>
    <p class="actions"><a class="bouton bouton-clair" href="${AVIS.lien}" target="_blank" rel="noopener">Voir tous les avis sur Google</a></p>
  </div>
</section>

<section id="faq" class="bloc">
  <div class="conteneur conteneur-etroit">
    <h2>Vos questions</h2>
    ${FAQ.map(([q, r]) => `<details class="faq"><summary>${q}</summary><div>${r}</div></details>`).join("")}
  </div>
</section>

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
      <label>Mon projet
        <select name="projet" id="projet">${projetsListe.map((p) => `<option>${p}</option>`).join("")}</select>
      </label>
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
const v=new URLSearchParams(location.search).get('projet');const s=document.getElementById('projet');
if(v&&s){const o=[...s.options].find(o=>o.text===v);if(o)s.value=o.text}
</script>`;

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
      titre: "Deux savoir-faire, une seule entreprise", texte: "ESCOM HABITAT, à Rillieux-la-Pape, réunit Instant Terrasse et Horizon Fenêtre : un seul interlocuteur pour vos aménagements extérieurs et vos menuiseries.",
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
    <ol class="etapes etapes-verticales">${etapes.map(([t, x]) => `<li><h3>${t}</h3><p>${x}</p></li>`).join("")}</ol>
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
  ...pagesPlan.map((p) => p.chemin === "/quisommesnous/" ? { ...p, title: "À propos : Antoine Escolle et Instant Terrasse, Lyon", description: "Instant Terrasse, créée par Antoine Escolle : pergolas, stores et garde-corps depuis 2017, terrasses depuis 2022. Le meilleur produit au meilleur tarif, échantillons à domicile, plan 3D offert.", corps: aPropos, statut: "redigee" } : p).map((p) => p.chemin === "/partenaires/" ? { ...p, title: "Partenaires : Horizon Fenêtre et ESCOM HABITAT | Instant Terrasse", description: "Horizon Fenêtre, menuiseries sur mesure à Lyon, et ESCOM HABITAT, la société qui réunit Instant Terrasse et Horizon Fenêtre.", corps: partenaires, statut: "redigee" } : p).map((p) => p.chemin === "/contact/" ? { ...p, title: "Devis gratuit terrasse et pergola Lyon | Instant Terrasse", description: "Demandez votre devis gratuit pour une terrasse, une pergola, un garde-corps, un store banne ou un bardage à Lyon et dans sa région.", corps: contact, statut: "redigee" } : p),
  { chemin: "/merci/", title: "Merci | Instant Terrasse", description: "Votre demande a bien été envoyée.", corps: merci, horsPlan: true },
  { chemin: "/erreur-envoi/", title: "Envoi impossible | Instant Terrasse", description: "Votre demande n'a pas pu être envoyée.", corps: erreur, horsPlan: true },
];
