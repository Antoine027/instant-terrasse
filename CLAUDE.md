# Site Instant Terrasse (nouvelle version, en test)

Remplaçant du site WordPress/Elementor instantterrasse.com. Générateur Node sans dépendance : `node build.mjs` produit `dist/`. Déployé par Vercel à chaque push sur `main` (dépôt GitHub Antoine027/instant-terrasse). Même méthode que le site Horizon Fenêtre (Antoine027/horizon-fenetre).

## Déploiements : limiter le nombre (demande d'Antoine, 05/11/2026)
- Le compte Vercel gratuit est limité à 100 déploiements par jour (limite atteinte le 05/11/2026).
- Travailler sur la branche `travail` : ses envois sont sauvegardés sur GitHub mais ne déclenchent aucun déploiement (`git.deploymentEnabled.travail = false` dans vercel.json).
- Après chaque modification : l'enregistrer sur `travail` et dire à Antoine « je ne déploie pas tout de suite, j'attends pour limiter les déploiements ». Au bout de plusieurs modifications, lui proposer de déployer et attendre sa confirmation.
- Déployer seulement quand Antoine le confirme ou dit « déploie tout de suite » : fusionner `travail` dans `main` et pousser `main` (un seul déploiement), puis vérifier que le déploiement a démarré.

## Règle n° 1 : ne pas court-circuiter le site actuel
- Le WordPress reste en ligne sur instantterrasse.com tant qu'Antoine n'a pas décidé la bascule.
- Ne jamais toucher au domaine, aux DNS ni au WordPress.
- Le site de test est non indexé : `EN_LIGNE = false` dans build.mjs (meta robots + robots.txt) et en-tête `X-Robots-Tag: noindex` dans vercel.json. Ces trois verrous ne sont retirés que le jour de la bascule.

## Bascule (plus tard)
- Garder les URL existantes qui apportent du trafic (à vérifier dans la Search Console), même si leur contenu change.
- Toute ancienne URL supprimée ou renommée reçoit une redirection 301 dans vercel.json.
- Inventaire du WordPress au 21/10/2026 : 21 pages + 6 articles (voir sitemap Rank Math).
- Domaine principal SANS www (https://instantterrasse.com, comme le WordPress indexé) : SITE.url, canonical et sitemap l'utilisent ; dans Vercel, www doit rediriger vers la version sans www.
- Redirections 301 des anciennes URL déjà en place dans vercel.json (articles, doublons, /category/, /form/). /politique-de-cookies-ue/ redirige vers /confidentialite/.
- Sitemap (dist/sitemap.xml, toujours généré) : seulement les pages rédigées ; les pages « en préparation » et techniques (merci, erreur) sont exclues et passent en noindex, follow une fois en ligne.
- Pages à fort trafic encore en préparation, à rédiger avant la bascule : /terrasse-rillieux-la-pape/, /terrasse-lyon/ (Antoine a des photos particulières).
- /realisations/ (menu « Galerie ») : galerie d'inspiration de toutes les photos produit, filtrée par catégorie, présentée honnêtement comme illustrations fabricants. Les vrais chantiers y seront ajoutés quand Antoine les fournira.
- Pages légales : /mentions-legales/ et /confidentialite/ (site sans cookie). Capital social : 1 000 € (constante SOCIETE dans src/pages.mjs).

## Contenu
- Gamme (validée par Antoine le 21/10/2026) :
  1. Terrasses : bois sur structure traditionnelle ou sur structure aluminium ; composite sur structure aluminium ; carrelage sur plots ou sur structure aluminium ; lames aluminium. Ni béton ni résine.
  2. Pergolas (fournisseur MSB) : bioclimatique, toile rétractable, toile tendue, toit fixe ; carports.
  3. Garde-corps aluminium (fournisseur Kordo).
  4. Stores bannes (fournisseur MSB).
  5. Bardage bois et bardage aluminium.
- Essences de bois (liste d'Antoine, 21/10/2026) :
  - Sur structure aluminium : thermopin, bambou moso X-treme, bambou moso N-Durance, thermofrêne, accoya naturel, accoya gris, kebony.
  - Sur structure traditionnelle, selon disponibilité : pin, mélèze, garapa, ipé, cumaru, itauba, jatoba, douglas, muiracatiara (tigerwood, ajouté le 28/10/2026).
- Teintes des lames aluminium (25/10/2026) : blanc veiné, teck vieilli, gris uni, simili bois (« simili bis » dans le message, à confirmer), bois de grange, teck ; beige en sur mesure, à part (05/11/2026) : on annonce « 6 teintes ». Lames aluminium garanties 20 ans (garantie fabricant, sous conditions, Antoine 05/11/2026). Atouts validés par Antoine (05/11/2026) : revêtement qui chauffe le moins (moins que le composite et les bois durs), inerte et inaltérable (ne moisit pas, ne bouge pas), durable et 100 % recyclable (lames et structure en aluminium), léger (balcons, terrasses suspendues, toits-terrasses sur étanchéité), antidérapant grâce à un revêtement spécial, lames étanches (idéal pour les terrasses surélevées). Dans la galerie Lames aluminium, l'échantillon de chaque teinte (catégorie teinte-alu) s'affiche en tête de son filtre, pas dans « Tout voir ».
- Vocabulaire des essences (04/11/2026) : produit phare = terrasse sur structure aluminium avec thermofrêne, kebony, thermopin, accoya, bambou (« nos essences phares ») ; ces essences sont aussi possibles sur structure traditionnelle, qui accueille en plus pin, mélèze, douglas, ipé, cumaru… (« d'autres essences »). Ne pas écrire « bois modifiés et bambou » ni « bois massifs et exotiques » comme catégories : toutes ces essences sont des bois massifs.
- Garanties fabricants des lames de terrasse, sous conditions (Antoine, 05/11/2026) : thermofrêne 20 ans, kebony 30 ans, thermopin 15 ans, accoya naturel et accoya gris jusqu'à 50 ans, bambou X-treme et N-Durance 25 ans. Toujours avec l'astérisque « Garanties fabricants, sous conditions ».
- Précisions techniques validées (Antoine, 05/11/2026, reprises de l'ancien site) : kebony = pin radiata, furfurylation ; accoya = pin radiata, acétylation ; thermofrêne et thermopin chauffés à 215 °C ; bois issus de plantations certifiées FSC.
- Composite (Antoine, 05/11/2026, infos de l'ancien site) : deux composites haut de gamme, sélectionnés pour leur durabilité et leur stabilité : gamme co-extrudée (cœur + coque de deux matériaux) en Nekko Brun et Nekko Gris ; gamme pleine masse (75 % de fibres de bois PEFC liées par des polymères et compressées, chauffe peu, proche du bois, se patine ; lame pleine, sans PVC ni plastifiant, l'eau et les insectes n'y pénètrent pas, plus résistante aux champignons et aux UV que le bois massif, antidérapante même mouillée, certifiée Cradle to Cradle Gold — doc fabricant fournie par Antoine) en Anise, Varia Brun foncé, Mentha Nigra, Malui Gris. Évolution de teinte : visuels fabricant (à la pose, 1-2 mois, 6-8 mois ; Nekko : 6 mois, 1 an). Garanties fabricants, sous conditions : Nekko 15 ans, pleine masse 10 ans.
- Carrelage (Antoine, 05/11/2026) : dalles de grès cérame 2 cm, très large choix de références (le nuancier montre des exemples : 21 aspect pierre, 5 aspect bois, catégorie teinte-carrelage, sans noms) ; formats 60×60, 80×80, 90×90, 100×100, 120×120, 60×120, 40×120 ; pas de garantie affichée sur les dalles ; dalles antidérapantes (Antoine, 05/11/2026). Crédits des visuels de dalles : ©Rondine, sauf 5 aspect pierre ©Novoceram (champ credit). Photo d'en-tête : carrelage-bh-aspect-bois-gris-jardin, bambous au premier plan (choix d'Antoine, 11/11/2026 ; la photo baie a une zone floutée).
- Structures (Antoine, 11/11/2026) : tous les revêtements (bois, composite, lames aluminium, carrelage) se posent sur structure aluminium ; autres possibilités : bois sur structure traditionnelle (lambourdes bois), carrelage sur plots sans rails. Composite et lames aluminium : uniquement sur structure aluminium. Structure aluminium : conforme DTU 51-4, testée FCBA, fabriquée en France (confirmé 11/11/2026) ; garantie 20 ans = plots, rails et clips ; 6 mm entre les lames et les rails (ventilation).
- Bardage bois (21/10/2026) : accoya gris, accoya naturel, kebony, bambou moso X-treme, thermofrêne, thermopin clear (sans nœuds), thermo épicéa.
- Les photos des essences en lames de terrasse ne doivent pas illustrer le bardage (produits différents) : attendre les photos de bardage.
- Crédits photo (demande d'Antoine, 28/10/2026) : chaque photo affiche un seul crédit, selon sa catégorie : garde-corps ©Kordo ; terrasses et bardage ©Grad, sauf lames aluminium (catégories terrasse-aluminium, teinte-alu et structure-lame-alu) ©Aludeck ; pergolas, carports et stores bannes ©MSB. Table CREDITS dans src/galerie.mjs (le build échoue si une catégorie n'a pas de crédit). Affichage (28/10/2026) : pas de mention sur les photos ; une ligne « Crédits photo : … » en bas de chaque page, calculée d'après les photos de la page, et le crédit sous la photo agrandie dans la visionneuse. Une photo peut porter son propre crédit (champ « credit » du manifeste) : les 9 photos carrelage clés carrelage-bh-* (28/10/2026) sont ©BHsolutions. La photo d'Antoine et ses propres visuels (schéma structure-traditionnelle-plot-lambourde, 04/11/2026) n'ont pas de crédit. Sans crédit aussi (05/11/2026) : visuels de lames lame-trad-v2-* créés par Antoine (catégorie lame-trad), ambiance-dalles-sur-plots (champ credit vide dans le manifeste).
- Marques fournisseurs : en dehors des crédits photo, rester discret, ne pas les citer dans les textes. Leurs photos sont autorisées sur le site, mais comme illustrations produit : ne jamais les présenter comme des chantiers Instant Terrasse (pas dans « Réalisations », pas de légende de type « notre chantier à … »).

## Pose : partenaire, discret mais sans mentir
- La pose est réalisée par un installateur partenaire, jamais nommé.
- Formulation de référence (constante POSE dans src/pages.mjs) : « Instant Terrasse conçoit votre projet et fournit les matériaux. La pose est confiée à notre installateur partenaire, assuré en garantie décennale, et nous restons votre interlocuteur du premier rendez-vous à la fin du chantier. » Ne pas écrire « agréé » sauf agrément réel.
- Interdit : « nous posons », « nos poseurs », « nos équipes », ou toute phrase laissant croire à des salariés poseurs.
- Autorisé : « pose réalisée par des professionnels qualifiés », « nous coordonnons la pose », « nous suivons le chantier ».
- Écrire « interlocuteur principal », jamais « un seul interlocuteur » (demande d'Antoine, 27/10/2026).

## Faits validés par Antoine (21/10/2026) — base des textes personnalisés
- Antoine Escolle travaille depuis 2017 dans les pergolas, stores bannes et garde-corps, et dans la terrasse depuis début 2022 : 4 ans commercial dans une entreprise de terrasses (ne pas la nommer), puis création d'Instant Terrasse (ESCOM HABITAT, 2026). Écrire « depuis 2017 » / « depuis début 2022 », pas un nombre d'années qui vieillit.
- Positionnement : le meilleur produit au meilleur tarif, transparence (devis détaillé). Sur le site, ne jamais écrire « meilleur tarif » ni rien qui suggère « pas cher » (demande d'Antoine, 27/10/2026) : parler de « produits sélectionnés pour leur qualité » et de devis détaillé, pas de prix.
- Installateur partenaire assuré en garantie décennale.
- Plan 3D offert.
- Pas de showroom : rendez-vous à domicile avec les échantillons.
- Structures aluminium garanties 20 ans.
- Avis Google : 4 avis, 5,0/5 (fiche « Instant Terrasse - Lyon », relevés le 22/10/2026), constante AVIS dans src/pages.mjs. Textes recopiés tels quels, noms abrégés. Ne pas ajouter de balisage Review/AggregateRating (avis sur son propre site non éligibles aux étoiles Google).
- Pas encore fournis : photos de vrais chantiers, fourchettes de prix.
- Photo d'Antoine fournie le 27/10/2026 (clé antoine-escolle-2, remplacée le 27/10/2026) : carte sur l'accueil (section méthode) et portrait sur la page À propos.
- Parcours d'Antoine (MOT_ANTOINE) : uniquement sur la page À propos. Sur l'accueil : sa photo avec une seule phrase (« Antoine, votre interlocuteur du premier rendez-vous à la fin du chantier ») et un lien vers À propos.
- Zone : Lyon et sa région. Téléphone 04 82 53 18 74.

## Charte et règles de rédaction
- Charte : fond #F0E8DA, fond secondaire #F8F3EB, texte #2F3437, accent #D79A3A (survol #E3A94A), rayon 15px, Montserrat (titres), Lato (texte), polices hébergées dans public/assets/fonts.
- Ne jamais inventer de chantier, avis client, certification, garantie ou chiffre.
- Textes personnalisés, pas génériques : partir des faits ci-dessus, phrases concrètes, pas de superlatifs creux.
- Objectif PageSpeed 100 sur chaque page (mesurer avec Lighthouse) ; images en WebP avec variantes 400 à 2400 via outils/photos.py (1200/1400/2000 ajoutées le 03/11/2026).
- Netteté des photos (03/11/2026) : chaque emplacement a un attribut sizes calé sur la taille réellement affichée (cartes recadrées comprises). Photos d'en-tête : version portrait pour mobile, via imgHero() ; après ajout ou changement d'une photo d'en-tête, lancer node build.mjs, python3 -I outils/recadrages.py, puis node build.mjs.
- Téléphone (05/11/2026) : textes centrés partout, sauf mises en page spécifiques (formulaires, FAQ, listes à puces, étapes, comparatif en cartes, cartes photo à gauche, avis, essences, mentions légales) ; règle en fin de src/style.css.
- CSS : src/purge-css.mjs ne garde dans chaque page que les règles utilisées par son HTML (scripts en ligne compris). Une classe ajoutée en JS doit apparaître en toutes lettres dans le script.
- Typographie (05/11/2026) : build.mjs (fonction insecables) remplace automatiquement l'espace avant « : ; ! ? » » et après « « » par une espace insécable dans le texte visible ; écrire les sources normalement.
- Visionneuse photos (11/11/2026) : PhotoSwipe 5.4.4 (licence MIT) hébergé dans public/assets/js, chargé seulement au clic sur une photo (glisser, zoom à deux doigts, glisser vers le bas pour fermer). Légende et crédit ajoutés en bas du fichier photoswipe-5.4.4.css. L'ancienne visionneuse (dialog) reste en secours si le chargement échoue.
- Comparateur de revêtements (/nos-terrasses/, 11/11/2026) : 5 questions (aspect, lieu, usage, entretien, exposition) ; notes par critère et par matériau = 2e grille d'Antoine (QUIZ_NOTES dans src/contenus.mjs), poids des réponses dans QUIZ_Q ; « Aucun nettoyage » élimine le bois (classé dernier) ; la durabilité ne compte que si une réponse la déclenche ; à égalité : bois, composite, alu, carrelage. Résultat : les 4 classés (coupe or, argent, bronze, médaille), raisons = critères où le matériau a la meilleure note. Rien n'est envoyé. Tableau complet replié en dessous. Phrases validées : « Un bois tendre reste le plus agréable sous le pied en plein été », « Le grès cérame est très résistant aux rayures ».
