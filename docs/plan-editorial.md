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
| 2026-11-24 | structure-aluminium-ou-lambourdes-bois | Structure de terrasse : aluminium ou lambourdes bois ? | structure terrasse aluminium ou bois | /structure-terrasse-lyon/ + /terrasse-bois-lyon/ | à faire |
| 2026-11-27 | carport-adosse-ou-autoporte | Carport adossé ou autoporté : comment choisir | carport adossé ou autoporté | /carport-lyon/ + /autorisation-terrasse-pergola-carport/ | à faire |
| 2026-12-01 | terrasse-qui-chauffe-au-soleil | Terrasse qui chauffe au soleil : quel revêtement choisir | terrasse chauffe soleil | /terrasse-aluminium-lyon/ + /terrasse-composite-lyon/ + /nos-terrasses/ | à faire |
| 2026-12-04 | garde-corps-verre-ou-barreaux | Garde-corps en verre ou à barreaux : avantages et limites | garde corps verre ou barreaux | /garde-corps-aluminium-lyon/ + /garde-corps-terrasse-normes/ | à faire |
| 2026-12-08 | kebony-accoya-thermofrene | Kebony, accoya, thermofrêne : quelle essence pour sa terrasse | kebony ou accoya | /terrasse-bois-lyon/ + /terrasse-bois-ou-composite/ | à faire |
| 2026-12-11 | entretien-pergola-bioclimatique | Entretenir une pergola bioclimatique : lames, chéneaux, hiver | entretien pergola bioclimatique | /pergola-bioclimatique-lyon/ | à faire |
| 2026-12-15 | comparer-devis-terrasse | Comparer deux devis de terrasse : les lignes à vérifier | devis terrasse | /contact/ + /structure-terrasse-lyon/ | à faire |
| 2026-12-18 | bardage-bois-grisaillement | Bardage bois qui grise : normal ou pas, et comment l'éviter | bardage bois grisaillement | /bardage-bois-lyon/ | à faire |
| 2027-01-05 | store-banne-vent-capteur | Store banne et vent : capteurs, limites et bons réflexes | store banne vent | /store-banne-lyon/ + /store-banne-ou-store-vertical/ | à faire |
| 2027-01-08 | carrelage-exterieur-sur-plots | Carrelage extérieur 2 cm sur plots : pour quelle terrasse | carrelage sur plots | /terrasse-carrelage-lyon/ + /terrasse-sur-plots-lyon/ | à faire |
| 2027-01-12 | terrasse-vis-a-vis-voisins | Terrasse et vis-à-vis : brise-vue, claustras et règles de vue | terrasse vis à vis voisin | /garde-corps-aluminium-lyon/ + /autorisation-terrasse-pergola-carport/ | à faire |

## Mises à jour d'articles existants (sans créer de nouvelle page)

| Date | Article et action | Statut |
|---|---|---|
| 2027-01-05 | autorisation-terrasse-pergola-carport : revérifier les seuils sur service-public.fr (F36773, F36774) | à faire |
| 2027-03-02 | comment-nettoyer-une-terrasse-en-bois : relecture avant la saison | à faire |

Les 6 premiers articles (bois ou composite, aménagement, nettoyage, store banne, autorisations, garde-corps) sont écrits en JavaScript dans `src/contenus.mjs` : une mise à jour se fait là, sans changer l'adresse.

## Règles
1. Un article répond à une vraie question de client. Jamais de page « terrasse + commune ».
2. Si un article ou une page produit vise déjà la même recherche, on l'enrichit au lieu d'en créer un nouveau (pas de cannibalisation avec les pages produit et projet).
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
