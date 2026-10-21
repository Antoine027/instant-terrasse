"""Prépare les photos du site : redimensionne en WebP (600/1000/1600 px de large, sans dépasser l'original)
et met à jour src/photos.json (clé, dossier, largeurs, ratio, texte alternatif, catégorie, essence).
Usage : python3 -I outils/photos.py lot.json   (lot = liste de photos à ajouter, voir ci-dessous)
[{"src": "chemin/source.jpg", "cle": "terrasse-accoya-naturel-piscine", "dossier": "bois",
  "categorie": "terrasse-bois", "essence": "Accoya naturel", "alt": "…", "recadre": [g, h, d, b]}]"""
import json, sys, os
from PIL import Image, ImageOps
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFESTE = os.path.join(RACINE, "src", "photos.json")
photos = json.load(open(MANIFESTE)) if os.path.exists(MANIFESTE) else []
for p in json.load(open(sys.argv[1])):
    im = ImageOps.exif_transpose(Image.open(p["src"])).convert("RGB")
    if p.get("recadre"): im = im.crop(tuple(p["recadre"]))
    dest = os.path.join(RACINE, "public", "assets", "img", p["dossier"]); os.makedirs(dest, exist_ok=True)
    largeurs = [w for w in (600, 1000, 1600) if w < im.width] + ([im.width] if im.width < 1600 else [])
    largeurs = sorted(set(largeurs))
    for w in largeurs:
        im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(os.path.join(dest, f'{p["cle"]}-{w}.webp'), "WEBP", quality=80, method=6)
    entree = {k: p[k] for k in ("cle", "dossier", "categorie", "essence", "alt") if k in p}
    entree.update(largeurs=largeurs, ratio=round(im.width / im.height, 4))
    photos = [x for x in photos if x["cle"] != p["cle"]] + [entree]
    print(f'{p["cle"]:40s} {im.width}x{im.height} -> {largeurs}')
json.dump(photos, open(MANIFESTE, "w"), ensure_ascii=False, indent=1)
print(len(photos), "photos dans le manifeste")
