# Portfolio - Florian Grenier

Portfolio personnel d'ingénieur IA et data scientist.

## Contenu

- `index.html` : page principale du portfolio
- `styles.css` : styles et animations
- `script.js` : menu mobile et animation de fond
- `Florian-Grenier-CV.pdf` : CV téléchargeable depuis le site
- `.nojekyll` : désactive Jekyll sur GitHub Pages

## Déploiement GitHub Pages

1. Créer un repository GitHub, par exemple `portfolio`.
2. Ajouter tous les fichiers de ce dossier à la racine du repository.
3. Aller dans `Settings` > `Pages`.
4. Choisir `Deploy from a branch`.
5. Sélectionner :
   - Branch : `main`
   - Folder : `/root`
6. Cliquer sur `Save`.

Le site sera disponible à une adresse du type :

```text
https://<ton-utilisateur>.github.io/portfolio/
```

## Commandes Git utiles

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<ton-utilisateur>/portfolio.git
git push -u origin main
```
