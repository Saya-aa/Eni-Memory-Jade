Fichier pour expliquer le projet Eni-Memory-Jade

…or create a new repository on the command line
echo "# Eni-Memory-Jade" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Saya-aa/Eni-Memory-Jade.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/Saya-aa/Eni-Memory-Jade.git
git branch -M main
git push -u origin main

<!----------------------->

# Jeu de Memory

Un jeu de **Memory** développé en **HTML, CSS, JavaScript et jQuery**, avec génération dynamique de la grille, sélection de thèmes et gestion des paires.

## Fonctionnalités

- **Génération dynamique de la grille** : création d'un tableau (`<table>`) selon le nombre de lignes (`rowGrille`) et de colonnes (`colGrille`).
- **Plusieurs thèmes illustrés** : configuration centralisée via `tableauTheme` (Légumes, Animaux, Animaux animés, Animaux domestiques, Chiens, Dinosaures, Dinosaures avec nom, Alphabet Scrabble).
- **Distribution équilibrée par paires** : construction d'un pool de cartes contenant deux exemplaires de chaque carte sélectionnée avant distribution.
- **Logique de retournement et validation** :
  - Mémorisation des deux cartes retournées à chaque tour.
  - Verrouillage temporaire des clics pendant le délai de retournement (`setTimeout`) lorsque deux cartes ne correspondent pas.
  - Conservation des paires trouvées et blocage des cartes déjà validées.
- **Relance rapide** : démarrage ou réinitialisation de la partie via le bouton **Jouer** (`#jouer`) ou la touche **Espace**.

## Structure du projet

```text
.
├── index.html          # Structure de la page (#grille, #compteur, #textJeu, #jouer)
├── style.css           # Mise en forme de la grille et des cartes
├── script.js           # Logique du jeu (génération, pool de cartes, clics, comparaison)
└── ressources/         # Images des thèmes et image de dos de carte (question.svg)
```
