# Plan de publication des articles « Conseils » – Instant Terrasse

Source de vérité pour la tâche programmée qui publie les articles (mardi et vendredi, 7 h 40 environ).
Statut : `à faire` → `publié le AAAA-MM-JJ` (la tâche met à jour cette colonne).

Format d'un article : `content/conseils/<slug>.md`, en-tête décrit en haut de `src/articles-md.mjs`. L'article apparaît seul dans /conseils/, le sitemap et les « Pour aller plus loin ». Adresse : `/<slug>/` (pas de préfixe /blog/).

Rythme : **2 articles par semaine au maximum, le mardi et le vendredi**. Le site est encore en test (non indexé) jusqu'à la bascule : les articles publiés avant restent en ligne et seront indexés à la bascule.
Quand il reste moins de 6 lignes « à faire » datées dans les 3 semaines à venir, la tâche ajoute de nouveaux sujets en fin de tableau (un mardi ou un vendredi chacun), d'après les exports Search Console de `docs/search-console/` s'il y en a, les relevés Google Trends notés dans CLAUDE.md et de vraies questions de clients.

## Articles

| Date | Slug | Titre de travail | Recherche visée | Liens prioritaires | Statut |
|---|---|---|---|---|---|
| 2026-11-20 | quand-faire-sa-terrasse | Quand faire sa terrasse : le bon calendrier, du rendez-vous à la pose | quand faire sa terrasse | /contact/ + /structure-terrasse-lyon/ + /autorisation-terrasse-pergola-carport/ | à faire |
| 2026-11-24 | comparer-devis-terrasse | Comparer deux devis de terrasse : les lignes à vérifier | comparer devis terrasse | /contact/ + /structure-terrasse-lyon/ | à faire |
| 2026-11-27 | renover-terrasse-bois | Rénover une vieille terrasse : changer les lames ou tout refaire ? | rénovation terrasse bois composite | /structure-terrasse-lyon/ + /terrasse-sur-plots-lyon/ + /contact/ | à faire |
| 2026-12-01 | entretien-pergola-bioclimatique | Entretenir une pergola bioclimatique : lames, chéneaux, hiver | entretien pergola bioclimatique | /pergola-bioclimatique-lyon/ | à faire |
| 2026-12-04 | terrasse-glissante | Terrasse glissante : causes et solutions selon le revêtement | terrasse glissante | /nos-terrasses/ + /comment-nettoyer-une-terrasse-en-bois/ | à faire |
| 2026-12-08 | terrasse-en-hiver | Terrasse en hiver : gel, neige, feuilles, les bons réflexes | terrasse hiver neige | /comment-nettoyer-une-terrasse-en-bois/ + /pergola-bioclimatique-lyon/ | à faire |
| 2026-12-11 | bardage-bois-grisaillement | Bardage bois qui grise : normal ou pas, et comment l'éviter | bardage bois grisaillement | /bardage-bois-lyon/ | à faire |
| 2026-12-15 | terrasse-vis-a-vis-voisins | Terrasse et vis-à-vis : brise-vue, claustras et règles de vue | terrasse vis à vis voisin | /garde-corps-aluminium-lyon/ + /autorisation-terrasse-pergola-carport/ | à faire |
| 2026-12-18 | garantie-decennale-terrasse | Garantie décennale et terrasse : ce qu'elle couvre vraiment | garantie décennale terrasse | /contact/ + /quisommesnous/ | à faire |
| 2027-01-05 | store-banne-vent-capteur | Store banne et vent : capteurs, limites et bons réflexes | store banne vent | /store-banne-lyon/ + /store-banne-ou-store-vertical/ | à faire |
| 2027-01-08 | orientation-terrasse | Orientation de la terrasse : sud, ouest, est, ce que ça change | orientation terrasse | /nos-terrasses/ + /pergolas-lyon/ + /store-banne-ou-store-vertical/ | à faire |
| 2027-01-12 | nettoyer-terrasse-composite | Nettoyer une terrasse composite : taches, fréquence, erreurs | nettoyer terrasse composite | /terrasse-composite-lyon/ + /terrasse-bois-ou-composite/ | à faire |
| 2027-04-02 | terrasse-qui-chauffe-au-soleil | Terrasse brûlante l'été : pourquoi et comment l'éviter (sujet de printemps) | terrasse chauffe soleil | /nos-terrasses/ + /terrasse-aluminium-lyon/ + /terrasse-composite-lyon/ | à faire |

## Mises à jour d'articles existants (sans créer de nouvelle page)

| Date | Article et action | Statut |
|---|---|---|
| 2027-01-05 | autorisation-terrasse-pergola-carport : revérifier les seuils sur service-public.fr (F36773, F36774) | à faire |
| 2027-03-02 | comment-nettoyer-une-terrasse-en-bois : relecture avant la saison | à faire |

Les 6 premiers articles (bois ou composite, aménagement, nettoyage, store banne, autorisations, garde-corps) sont écrits en JavaScript dans `src/contenus.mjs` : une mise à jour se fait là, sans changer l'adresse.

## Carte des recherches (une recherche principale = une seule page)

Avant d'écrire, vérifier ici que la recherche visée n'appartient pas déjà à une page. Les pages produit et projet gardent les recherches « produit » (avec ou sans « Lyon ») : un article ne vise jamais « terrasse bois », « pergola bioclimatique », « carport », « terrasse sur plots »… mais une **question** (pourquoi, comment, quand, lequel, entretien, règle). Après publication, ajouter la ligne de l'article.

| Page | Recherche principale |
|---|---|
| /terrasse-lyon/ | terrasse sur mesure Lyon |
| /terrasse-rillieux-la-pape/ | terrasse Rillieux-la-Pape |
| /nos-terrasses/ | quel revêtement de terrasse choisir |
| /terrasse-bois-lyon/ | terrasse bois (essences, structure) |
| /terrasse-composite-lyon/ | terrasse composite |
| /terrasse-aluminium-lyon/ | terrasse lames aluminium |
| /terrasse-carrelage-lyon/ | terrasse carrelage sur plots |
| /structure-terrasse-lyon/ | structure de terrasse aluminium, lambourdes |
| /terrasse-piscine-lyon/ | terrasse de piscine, plage de piscine |
| /terrasse-balcon-lyon/ | terrasse de balcon |
| /toit-terrasse-lyon/ | aménager un toit-terrasse |
| /terrasse-sur-pilotis-lyon/ | terrasse sur pilotis, terrasse surélevée |
| /terrasse-sur-plots-lyon/ | terrasse sur plots |
| /terrasse-camping-hpa/ | terrasse mobil-home, camping |
| /terrasse-restaurant-chr-lyon/ | terrasse de restaurant, hôtel |
| /pergolas-lyon/ | quelle pergola choisir |
| /pergola-bioclimatique-lyon/ | pergola bioclimatique |
| /pergola-toile-retractable-lyon/ | pergola toile rétractable |
| /pergola-toit-fixe-lyon/ | pergola toit fixe, toile tendue |
| /carport-lyon/ | carport aluminium (adossé, autoporté) |
| /store-banne-lyon/ | store banne |
| /garde-corps-aluminium-lyon/ | garde-corps aluminium (verre, barreaux, tôle, bois) |
| /bardage-bois-lyon/ | bardage bois |
| /bardage-aluminium-lyon/ | bardage aluminium |
| /terrasse-bois-ou-composite/ | terrasse bois ou composite |
| /amenagement-terrasse-lyon/ | aménager sa terrasse |
| /comment-nettoyer-une-terrasse-en-bois/ | nettoyer une terrasse en bois |
| /store-banne-ou-store-vertical/ | store banne ou store vertical |
| /autorisation-terrasse-pergola-carport/ | autorisation terrasse, pergola, carport |
| /garde-corps-terrasse-normes/ | garde-corps obligatoire, normes |

## Optimisation Search Console

Antoine dépose (ou envoie à Claude, qui les ajoute) des exports dans `docs/search-console/` : `AAAA-MM-JJ-requetes.csv` et `AAAA-MM-JJ-pages.csv` (Performances → Résultats de recherche → Exporter, 16 derniers mois ou 3 mois).

- **Avant la bascule**, les données viennent de l'ancien site WordPress : s'en servir pour choisir les sujets et les formulations (intertitres, FAQ), pas pour retoucher des pages qui n'existent pas encore en ligne.
- **Après la bascule**, à chaque exécution et si l'export a moins de 21 jours, faire **une seule** optimisation, dans cet ordre de priorité :
  1. **Cannibalisation** : deux pages du site apparaissent sur la même requête → différencier les deux (titre, angle, liens de l'une vers l'autre) ou fusionner l'article dans la page la plus forte avec une redirection 301 dans vercel.json.
  2. **Beaucoup d'impressions, peu de clics** : réécrire title et description (sans changer l'adresse).
  3. **Position 5 à 20 sur une requête utile** : enrichir la page (section, FAQ, lien interne) plutôt que créer un article.
  4. **Requête utile sans page** : ajouter un sujet au plan (après vérification de la carte des recherches).
- Ne pas retoucher une page optimisée dans les 28 derniers jours. Ne jamais changer une adresse sans redirection 301. Noter chaque action au Journal (date, page, action, requête, chiffres avant) et, à l'export suivant, l'effet mesuré.

## Règles
1. Un article répond à une vraie question de client. Jamais de page « terrasse + commune ».
2. Une recherche principale = une seule page (voir la carte des recherches). Si une page vise déjà la recherche, on l'enrichit au lieu de créer un article. Pas de pages quasi identiques, pas de texte recopié d'une page à l'autre, pas de bourrage de mots-clés ni de pages « terrasse + commune » : c'est ce que Google considère comme du contenu à faible valeur.
3. Faits : uniquement ceux de CLAUDE.md (gamme, essences, garanties « sous conditions », structure, pose par un installateur partenaire non nommé). Rien d'inventé : ni chantier, ni client, ni avis, ni chiffre, ni certification. **Aucun prix.**
4. Réglementation et normes : vérifier sur les sites officiels (service-public.fr, legifrance.gouv.fr, ecologie.gouv.fr…) le jour de la rédaction, et citer 1 à 3 sources.
5. 3 à 5 liens internes (dont les liens prioritaires), un appel à l'action vers /contact/.
6. Title de 60 caractères au plus (avec « | Instant Terrasse »), description de 158 au plus, une seule recherche principale, mot-clé employé naturellement.
7. Photos : seulement des photos existantes de `src/galerie.mjs`, présentées comme illustrations. Jamais les images IA (catégorie « ambiance », pilotis-garde-corps-verre-salon).
8. Ton : celui d'Antoine (« je » ou « nous » selon les articles existants), concret, sans superlatifs creux, sans « meilleur tarif » ni rien qui suggère « pas cher ».

## Règle de frein (qualité avant volume)

Deux articles par semaine est un maximum. Si le sujet prévu ne répond pas à une vraie question, recoupe une page existante ou ne peut pas être sourcé correctement, la tâche ne publie pas ce jour-là : elle le signale (et peut proposer un autre sujet au plan). Jamais d'article de remplissage.

## Journal

| Date | Action | Remarque |
|---|---|---|
| 2026-11-17 | Mise en place du plan et du format Markdown | Demande d'Antoine : publication automatique le mardi et le vendredi, comme Horizon Fenêtre |
| 2026-11-17 | Premier export Search Console (12 mois, ancien site WordPress) dans docs/search-console/ | Ajout du sujet « rénover une vieille terrasse » (« rénovation terrasse bois composite » 75 impressions, « rénovation de terrasse » 29) ; « terrasse qui chauffe » déplacé au printemps. Requêtes « bois ou composite » (≈ 575 impressions, position ≈ 80) : couvertes par /terrasse-bois-ou-composite/. Toutes les anciennes adresses de l'export sont redirigées ou conservées. |
