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
- Ne pas citer les fournisseurs sur le site sans accord d'Antoine.
- Zone : Lyon et sa région. Téléphone 04 82 53 18 74.
- Charte : fond #F0E8DA, fond secondaire #F8F3EB, texte #2F3437, accent #D79A3A (survol #E3A94A), rayon 15px, Montserrat (titres), Lato (texte), polices hébergées dans public/assets/fonts.
- Ne jamais inventer de chantier, avis client, certification, garantie ou chiffre.
