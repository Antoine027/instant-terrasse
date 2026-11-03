"""Recadrages portrait des photos d'en-tête pour mobile (cadre ~ 0,85 de ratio).
Usage : node build.mjs (écrit outils/recadrages.json), puis python3 -I outils/recadrages.py, puis node build.mjs.
Source : la plus grande variante WebP existante ; le recadrage suit l'object-position de l'en-tête."""
import json, os
from PIL import Image
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RATIO = 0.86  # largeur / hauteur du cadre mobile (412 x 478 environ)
for cle, r in json.load(open(os.path.join(RACINE, "outils", "recadrages.json"))).items():
    d = os.path.join(RACINE, "public", "assets", "img", r["dossier"])
    tailles = sorted(int(f[len(cle) + 1:-5]) for f in os.listdir(d) if f.startswith(cle + "-") and f[len(cle) + 1:-5].isdigit())
    if not tailles: continue
    im = Image.open(os.path.join(d, f"{cle}-{tailles[-1]}.webp")).convert("RGB")
    px, py = [float(v.rstrip("%")) / 100 for v in r["position"].split()]
    cw = min(im.width, round(im.height * RATIO)); ch = min(im.height, round(cw / RATIO))
    x = round((im.width - cw) * px); y = round((im.height - ch) * py)
    c = im.crop((x, y, x + cw, y + ch))
    for w in (400, 600, 800, 1000, 1200, 1400):
        if w > cw: continue
        c.resize((w, round(ch * w / cw)), Image.LANCZOS).save(os.path.join(d, f"{cle}-p-{w}.webp"), "WEBP", quality=80, method=6)
    print(cle, c.size)
