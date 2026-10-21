# Site Instant Terrasse (nouvelle version, en test)

Remplaçant du site WordPress/Elementor instantterrasse.com. Générateur Node sans dépendance : `node build.mjs` produit `dist/`. Déployé par Vercel à chaque push sur `main` (dépôt GitHub Antoine027/instant-terrasse). Même méthode que le site Horizon Fenêtre (Antoine027/horizon-fenetre).

## Règle n° 1 : ne pas court-circuiter le site actuel
- Le WordPress reste en ligne sur instantterrasse.com tant qu'Antoine n'a pas décidé la bascule.
- Ne jamais toucher au domaine, aux DNS ni au WordPress.
- Le site de test est non indexé : `EN_LIGNE = false` dans build.mjs (meta robots + robots.txt) et en-tête `X-Robots-Tag: noindex` dans vercel.json. Ces trois verrous ne sont retirés que le jour de la bascule.

## Bascule (plus tard)
- Garder les URL existantes qui apportent du trafic (à vérifier dans la Search Console), même si leur contenu change.
- Toute ancienne URL supprimée ou renommée reçoit une redirection 301 dans vercel.json.
- Inventaire du WordPress au 21/10/2026 : 21 pages + 6 articles (voir sitemap Rank Math).

## Contenu
- Gamme (validée par Antoine le 21/10/2026) :
  1. Terrasses : bois sur structure traditionnelle ou sur structure aluminium ; composite sur structure aluminium ; carrelage sur plots ou sur structure aluminium ; lames aluminium. Ni béton ni résine.
  2. Pergolas (fournisseur MSB) : bioclimatique, toile rétractable, toile tendue, toit fixe ; carports.
  3. Garde-corps aluminium (fournisseur Kordo).
  4. Stores bannes (fournisseur MSB).
  5. Bardage bois et bardage aluminium.
- Essences de bois (liste d'Antoine, 21/10/2026) :
  - Sur structure aluminium : thermopin, bambou moso X-treme, bambou moso N-Durance, thermofrêne, accoya naturel, accoya gris, kebony.
  - Sur structure traditionnelle, selon disponibilité : pin, mélèze, garapa, ipé, cumaru, itauba, jatoba, douglas.
- Bardage bois (21/10/2026) : accoya gris, accoya naturel, kebony, bambou moso X-treme, thermofrêne, thermopin clear (sans nœuds), thermo épicéa.
- Les photos des essences en lames de terrasse ne doivent pas illustrer le bardage (produits différents) : attendre les photos de bardage.
- Marques fournisseurs : rester discret, ne pas les citer. Leurs photos sont autorisées sur le site, mais comme illustrations produit : ne jamais les présenter comme des chantiers Instant Terrasse (pas dans « Réalisations », pas de légende de type « notre chantier à … »).

## Pose : partenaire, discret mais sans mentir
- La pose est réalisée par un installateur partenaire, jamais nommé.
- Formulation de référence (constante POSE dans src/pages.mjs) : « Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier. » Ne pas écrire « agréé » sauf agrément réel.
- Interdit : « nous posons », « nos poseurs », « nos équipes », ou toute phrase laissant croire à des salariés poseurs.
- Autorisé : « pose réalisée par des professionnels qualifiés », « nous coordonnons la pose », « nous suivons le chantier ».

## Faits validés par Antoine (21/10/2026) — base des textes personnalisés
- Antoine Escolle travaille dans la terrasse depuis début 2022 : 4 ans commercial dans une entreprise de terrasses (ne pas la nommer), puis création d'Instant Terrasse (ESCOM HABITAT, 2026). Écrire « depuis début 2022 », pas un nombre d'années qui vieillit.
- Positionnement : le meilleur produit au meilleur tarif, transparence (devis détaillé).
- Installateur partenaire assuré en garantie décennale.
- Plan 3D offert.
- Pas de showroom : rendez-vous à domicile avec les échantillons.
- Structures aluminium garanties 20 ans.
- Pas encore fournis : photos de vrais chantiers, avis Google, fourchettes de prix, photo d'Antoine.
- Parcours d'Antoine (MOT_ANTOINE) : uniquement sur la page À propos. Quand une photo d'Antoine sera fournie, l'ajouter sur l'accueil avec une seule phrase (« Antoine, votre interlocuteur du premier rendez-vous à la fin du chantier ») et un lien vers À propos.
- Zone : Lyon et sa région. Téléphone 04 82 53 18 74.

## Charte et règles de rédaction
- Charte : fond #F0E8DA, fond secondaire #F8F3EB, texte #2F3437, accent #D79A3A (survol #E3A94A), rayon 15px, Montserrat (titres), Lato (texte), polices hébergées dans public/assets/fonts.
- Ne jamais inventer de chantier, avis client, certification, garantie ou chiffre.
- Textes personnalisés, pas génériques : partir des faits ci-dessus, phrases concrètes, pas de superlatifs creux.
- Objectif PageSpeed 100 sur chaque page (mesurer avec Lighthouse) ; images en WebP avec variantes 400/600/1000/1600 via outils/photos.py.
