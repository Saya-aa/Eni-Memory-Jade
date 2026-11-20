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

# 🃏 Eni-Memory-Jade

Site web de jeu de **Memory** réalisé dans le cadre de la formation ENI.
Le projet est développé en **HTML, CSS, JavaScript et jQuery**, sans framework.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)

---

## 🎮 Principe du jeu

1. Retourne deux cartes.
2. Si les images sont **identiques**, les cartes restent visibles.
3. Si elles sont **différentes**, elles se retournent face cachée après une seconde.
4. La partie est terminée quand **toutes les paires** ont été trouvées.

Pour relancer une partie, clique sur le bouton **Jouer** ou appuie sur la **barre d'espace**.

## ✨ Fonctionnalités

### Disponibles

- **Grille générée dynamiquement** : un `<table>` est construit en JavaScript selon le nombre de lignes (`rowGrille`) et de colonnes (`colGrille`).
- **8 thèmes illustrés**, configurés dans le tableau `tableauTheme` : Légumes, Animaux, Animaux animés, Animaux domestiques, Chiens, Dinosaures, Dinosaures avec nom, Lettres Scrabble.
- **Tirage par paires** : deux exemplaires de chaque image sont placés dans la grille, puis mélangés.
- **Logique de jeu** :
  - mémorisation des deux cartes retournées à chaque tour ;
  - blocage des clics pendant le retournement (`setTimeout`) ;
  - cartes trouvées verrouillées ;
  - message de victoire en fin de partie.
- **Navigation** entre les 5 pages grâce à un menu commun.
- **Formulaire d'inscription** avec contrôle des champs (pseudo, e-mail, mot de passe) et bouton Afficher / Cacher le mot de passe.
- **Page profil** : choix du thème avec aperçu de l'image, choix de la taille, photo de profil.

### En cours / à venir

- [ ] Sauvegarde des utilisateurs et des options dans le `localStorage`
- [ ] Connexion et gestion de l'utilisateur connecté
- [ ] Tableau des 5 meilleurs scores (affichage et tri)
- [ ] Choix du thème et de la taille relié au jeu
- [ ] Indicateur de force du mot de passe et messages d'erreur personnalisés
- [ ] Compteur de coups (et non de paires)

## 📁 Structure du projet

```text
.
├── index.html          # Accueil et règles du jeu
├── inscription.html    # Formulaire de création de compte
├── connection.html     # Formulaire de connexion
├── profil.html         # Profil, choix du thème et de la taille
├── jouer.html          # Page du jeu (grille, compteur, scores)
├── style.css           # Mise en forme commune à toutes les pages
├── script3.js          # Logique du jeu et configuration des thèmes
├── inscription.js      # Contrôles du formulaire d'inscription
├── scriptProfil.js     # Aperçu du thème choisi dans le profil
└── ressources/         # Images des thèmes et dos de carte (question.svg)
```

## 🚀 Lancer le projet

Aucune installation n'est nécessaire.

```bash
git clone https://github.com/Saya-aa/Eni-Memory-Jade.git
cd Eni-Memory-Jade
```

Ouvre ensuite `index.html` dans ton navigateur (ou utilise l'extension _Live Server_ de VS Code).

> jQuery est chargé depuis le CDN officiel : une connexion Internet est donc nécessaire pour jouer.

## 🎨 Ajouter un thème

Ajoute un objet dans `tableauTheme` (fichier `script3.js`) :

```js
{
  nom: "monTheme",
  nomAffiche: "Mon thème",
  img: "./ressources/monTheme/memory_detail.png", // aperçu dans le profil
  chemin: "./ressources/monTheme/",               // dossier des images
  extension: ".png",
  nombreCartes: 12,                               // images numérotées 1.png, 2.png, ...
}
```

Pense aussi à ajouter l'option correspondante dans la liste déroulante de `profil.html`.

## 👩‍💻 Auteure

Projet réalisé par **Saya-aa**, formation ENI.
