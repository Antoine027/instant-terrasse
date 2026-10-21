// Contenu des pages. Une entrée = une page (chemin avec / final).
export const SITE = {
  url: "https://www.instantterrasse.com",
  tel: "04 82 53 18 74",
  telLien: "+33482531874",
  adresse: "8 avenue Général Leclerc, 69140 Rillieux-la-Pape",
};

const materiaux = [
  ["Aluminium", "Design contemporain, sans entretien"],
  ["Bois", "Authentique et chaleureux"],
  ["Carrelage", "Élégance intemporelle"],
  ["Composite", "Durable et facile d'entretien"],
];

const projets = [
  ["Terrasse de piscine", "Prolonger l'espace autour du bassin"],
  ["Balcon", "Optimiser un petit extérieur"],
  ["Toit-terrasse", "Créer un nouvel espace de vie"],
  ["Terrasse sur pilotis", "S'adapter aux terrains en pente"],
  ["Terrasse sur plots", "Une solution adaptée à votre support"],
  ["Aménagement", "Penser l'extérieur dans son ensemble"],
];

const etapes = [
  ["Échange", "Nous parlons de votre projet, de vos envies et de l'usage de votre extérieur."],
  ["Étude", "Nous étudions les lieux, les dimensions, les accès et les contraintes techniques."],
  ["Choix", "Nous définissons ensemble le matériau, la structure et les finitions."],
  ["Réalisation", "Votre terrasse prend forme, avec un soin particulier porté aux finitions."],
];

const carte = ([titre, texte]) => `<article class="carte"><h3>${titre}</h3><p>${texte}</p></article>`;

const accueil = `
<section class="hero">
  <div class="conteneur">
    <p class="surtitre">Version de test — site en construction</p>
    <h1>Terrasse sur mesure à Lyon : créez un extérieur qui vous ressemble</h1>
    <p class="chapo">Bois, aluminium, composite ou carrelage, posés sur une ossature aluminium pensée pour durer.</p>
    <p class="actions">
      <a class="bouton" href="tel:+33482531874">Appeler le 04 82 53 18 74</a>
      <a class="bouton bouton-clair" href="https://wa.me/33482531874">WhatsApp</a>
    </p>
  </div>
</section>

<section id="materiaux" class="bloc">
  <div class="conteneur">
    <h2>Des matériaux adaptés à chaque projet</h2>
    <div class="grille grille-4">${materiaux.map(carte).join("")}</div>
  </div>
</section>

<section id="projets" class="bloc bloc-alt">
  <div class="conteneur">
    <h2>Des projets pour tous les extérieurs</h2>
    <div class="grille grille-3">${projets.map(carte).join("")}</div>
  </div>
</section>

<section id="etapes" class="bloc">
  <div class="conteneur">
    <h2>Votre projet, étape par étape</h2>
    <ol class="etapes">${etapes.map(([t, x]) => `<li><h3>${t}</h3><p>${x}</p></li>`).join("")}</ol>
  </div>
</section>`;

export const PAGES = [
  {
    chemin: "/",
    title: "Terrasse sur mesure Lyon | Instant Terrasse",
    description: "Terrasse sur mesure à Lyon et dans la région. Bois, aluminium, composite ou carrelage. Devis gratuit et accompagnement personnalisé.",
    corps: accueil,
  },
];
