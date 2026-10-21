import { imgPhoto } from "./galerie.mjs";
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
          ["/bardage-bois-lyon/", "Bardage bois", "Accoya, kebony, bambou, thermofrêne, thermopin ou thermo épicéa : un bardage assorti à votre terrasse."],
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
  ["/partenaires/", "Partenaires", "Horizon Fenêtre et ESCOM HABITAT."],
  ["/terrasse-lyon/", "Terrasse à Lyon", "Nos projets à Lyon."],
  ["/terrasse-rillieux-la-pape/", "Terrasse à Rillieux-la-Pape", "Nos projets à Rillieux-la-Pape."],
  ["/terrasse-caluire-et-cuire/", "Terrasse à Caluire-et-Cuire", "Nos projets à Caluire-et-Cuire."],
];

export const FAQ = [
  ["Quel matériau choisir pour ma terrasse ?", "Tout dépend de l'aspect recherché, du budget et du temps que vous voulez consacrer à l'entretien. Le bois apporte la chaleur d'un matériau naturel, le composite et l'aluminium limitent l'entretien, le carrelage offre un rendu minéral. Notre <a href=\"/nos-terrasses/\">comparatif des matériaux</a> vous aide à y voir clair, et nous affinons le choix lors de la visite."],
  ["Qui réalise la pose ?", `${POSE}`],
  ["Combien coûte une terrasse ou une pergola ?", "Le prix dépend du matériau, de la surface, de la structure nécessaire, de la hauteur et de l'accès au chantier. C'est pourquoi nous venons voir les lieux avant de chiffrer : vous recevez un devis détaillé, gratuit et sans engagement."],
  ["Faut-il une autorisation pour une terrasse ou une pergola ?", "Selon la surface, la hauteur et votre commune, une déclaration préalable de travaux peut être nécessaire, notamment pour une pergola ou une terrasse surélevée. Nous vous indiquons la démarche à suivre lors de la visite."],
  ["Pouvez-vous réaliser la terrasse, la pergola et le garde-corps en même temps ?", "Oui, et c'est même recommandé : hauteurs, fixations et écoulement des eaux se pensent ensemble. Vous n'avez qu'un seul interlocuteur pour tout le projet."],
  ["Dans quelle zone intervenez-vous ?", "À Lyon et dans sa région. Indiquez votre code postal dans la demande de devis, nous vous répondons rapidement."],
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
<section class="hero hero-accueil">
  <div class="conteneur hero-grille">
  <div>
    <p class="surtitre">Version de test — site en construction</p>
    <h1>Terrasses, pergolas et aménagements extérieurs sur mesure à Lyon</h1>
    <p class="chapo">Terrasse bois, composite, carrelage ou aluminium, pergola, carport, garde-corps, store banne, bardage : un seul interlocuteur pour tout votre extérieur.</p>
    <p class="actions">
      <a class="bouton" href="/contact/">Demander un devis gratuit</a>
      <a class="bouton bouton-clair" href="tel:${SITE.telLien}">${SITE.tel}</a>
    </p>
  </div>
  <figure class="hero-photo">
    ${imgPhoto("terrasse-accoya-naturel-piscine", { sizes: "(max-width:1060px) 100vw, 560px", prioritaire: true })}
  </figure>
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

<section id="faq" class="bloc bloc-alt">
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
        <li>Visite et prise de mesures sur place</li>
        <li>Conseil sur le matériau et la structure</li>
        <li>Devis détaillé, gratuit et sans engagement</li>
      </ul>
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
    title: "Terrasse sur mesure Lyon | Instant Terrasse",
    description: "Terrasses bois, composite, carrelage et aluminium, pergolas, carports, garde-corps, stores bannes et bardage sur mesure à Lyon. Devis gratuit.",
    corps: accueil,
  },
  ...pagesPlan.map((p) => p.chemin === "/partenaires/" ? { ...p, title: "Partenaires : Horizon Fenêtre et ESCOM HABITAT | Instant Terrasse", description: "Horizon Fenêtre, menuiseries sur mesure à Lyon, et ESCOM HABITAT, la société qui réunit Instant Terrasse et Horizon Fenêtre.", corps: partenaires, statut: "redigee" } : p).map((p) => p.chemin === "/contact/" ? { ...p, title: "Devis gratuit terrasse et pergola Lyon | Instant Terrasse", description: "Demandez votre devis gratuit pour une terrasse, une pergola, un garde-corps, un store banne ou un bardage à Lyon et dans sa région.", corps: contact, statut: "redigee" } : p),
  { chemin: "/merci/", title: "Merci | Instant Terrasse", description: "Votre demande a bien été envoyée.", corps: merci, horsPlan: true },
  { chemin: "/erreur-envoi/", title: "Envoi impossible | Instant Terrasse", description: "Votre demande n'a pas pu être envoyée.", corps: erreur, horsPlan: true },
];
