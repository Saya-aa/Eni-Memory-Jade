//tableau list theme
var tableauTheme = [
  {
    nom: "legumes",
    nomAffiche: "Légumes",
    img: "./ressources/memory-legume/memory_detail.png",
    chemin: "./ressources/memory-legume/",
    extension: ".svg",
    nombreCartes: 6,
  },
  {
    nom: "animaux",
    nomAffiche: "Animaux",
    img: "./ressources/animaux/memory_detail_animaux.png",
    chemin: "./ressources/animaux/",
    extension: ".webp",
    nombreCartes: 28,
  },
  {
    nom: "animauxAnimes",
    nomAffiche: "Animaux animés",
    img: "./ressources/animauxAnimes/memory_detail_animaux_animes.png",
    chemin: "./ressources/animauxAnimes/",
    extension: ".webp",
    nombreCartes: 8,
  },
  {
    nom: "animauxDomestiques",
    nomAffiche: "Animaux Domestiques",
    img: "./ressources/animauxdomestiques/memory_detail_animaux_domestiques.png",
    chemin: "./ressources/animauxdomestiques/",
    extension: ".jpg",
    nombreCartes: 10,
  },
  {
    nom: "chiens",
    nomAffiche: "Chiens",
    img: "./ressources/chiens/memory_details_chiens.png",
    chemin: "./ressources/chiens/",
    extension: ".webp",
    nombreCartes: 23,
  },
  {
    nom: "dinosaures",
    nomAffiche: "Dinosaures",
    img: "./ressources/dinosaures/memory_detail_dinosaures.png",
    chemin: "./ressources/dinosaures/",
    extension: ".jpg",
    nombreCartes: 10,
  },
  {
    nom: "dinosauresAvecNom",
    nomAffiche: "Dinosaures avec nom",
    img: "./ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png",
    chemin: "./ressources/dinosauresAvecNom/",
    extension: ".jpg",
    nombreCartes: 10,
  },
  {
    nom: "alphabetScrabble",
    nomAffiche: "Lettre Scrablle",
    img: "./ressources/alphabet-scrabble/memory_detail_scrabble.png",
    chemin: "./ressources/alphabet-scrabble/",
    extension: ".png",
    nombreCartes: 26,
  },
];

//-----------
//function return img random en fonction du theme
function randomImg() {
  let randomImg = Math.floor(Math.random() * tableauTheme[theme].nombreCartes);
  return randomImg + 1;
}

//RENDRE MODIFIABLE VIA LE PROFIL
let theme = 0;
let colGrille = 3;
let rowGrille = 4;
const carteCache = "ressources/question.svg";

//tableau img random
tailleTableau = tableauTheme[theme].nombreCartes * 2;
console.log(tailleTableau);

let tableauImgRandoms = [];
tableauImgRandoms.length = tailleTableau;
function imgTab(tailleTableau, tableauImgRandoms) {
  for (let k = 1; k < tailleTableau + 1; k++) {
    if (tableauImgRandoms[k % 2] !== 0) {
      img = randomImg();
      do {
        img = randomImg();
      } while (tableauImgRandoms.includes(img));
      tableauImgRandoms[k] = img;
      k++;
      tableauImgRandoms[k] = img;
    }
  }
}

function melangeTab(tab, taille) {
  var k, j, tmp;
  for (k = taille; k > 1; k--) {
    j = Math.floor(Math.random() * k + 1);
    tmp = tab[k];
    tab[k] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}

//----------------------
//Function generer tablo de jeu
function generateTable(colGrille, rowGrille, theme) {
  // crée un élément <table> et un élément <tbody> dans la div #grille
  const grilleJeu = document.getElementById("grille");
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  id = 1;

  for (let i = 0; i < rowGrille; i++) {
    // crée une ligne de tableau
    const row = document.createElement("tr");

    for (let j = 0; j < colGrille; j++) {
      // Crée une colonne de tableau
      const cell = document.createElement("td");

      //id ++

      id++;

      //initialise sur "?""
      const cellImgDos = new Image();
      cellImgDos.src = carteCache;
      cellImgDos.alt = "carte caché";
      cellImgDos.id = id - 1;
      cell.appendChild(cellImgDos);

      row.appendChild(cell);
    }

    // ajoute la ligne à la fin du corps du tableau
    tblBody.appendChild(row);
  }
  // place le <tbody> dans le <table>
  tbl.appendChild(tblBody);
  // ajoute <table> dans <div grilleJeu>
  grilleJeu.appendChild(tbl);
}

const textVictoire = document.getElementById("textVictoire");

imgTab(tailleTableau, tableauImgRandoms);
melangeTab(tableauImgRandoms, tailleTableau);

//fonction de jeu
function play() {
  console.log("Début du jeu");
  let compteurCoup = 1;
  generateTable(colGrille, rowGrille, theme);
  console.table(tableauImgRandoms);

  let img1 = null;
  let index1 = null;
  let img2 = null;
  let index2 = null;
  let idImg;
  let imgTabValue;

  $("img").on("click", function (event) {
    idImg = event.target.id;
    imgTabValue = tableauImgRandoms[event.target.id];

    console.log("index tab :" + idImg);
    console.log("value img:" + imgTabValue);

    if (img1 === null || img1 === 0) {
      img1 = imgTabValue;
      index1 = idImg;
      document.getElementById(idImg).src =
        "" +
        tableauTheme[theme].chemin +
        imgTabValue +
        tableauTheme[theme].extension +
        "";
      console.log(img1);
    } else if (img1 !== null || img1 !== 0 || img2 === 0 || img2 === null) {
      img2 = imgTabValue;
      index2 = idImg;
      document.getElementById(idImg).src =
        "" +
        tableauTheme[theme].chemin +
        imgTabValue +
        tableauTheme[theme].extension +
        "";
      if (img1 !== img2) {
        setTimeout(() => {
          document.getElementById(index1).src = carteCache;
          console.log(img1);
          document.getElementById(index2).src = carteCache;
          console.log(img2);
          img1 = 0;
          img2 = 0;
          index1 = 0;
          index2 = 0;
          compteurCoup--;
          console.log("timer");
        }, 3000);
      } else {
        img1 = 0;
        img2 = 0;
        index1 = 0;
        index2 = 0;
        compteurCoup++;
      }
    }
    $("#compteur").text("Nombre de coups : " + (compteurCoup - 1));

    //if all carte retourné alors
    if (compteurCoup >= 12) {
      textVictoire.textContent = "BRAVO ! VOUS AVEZ GAGNÉ";
    }
  });
}

//FAIRE FONCTION POUR LES DEUX RESTARTS OU LES FUSIONNER
//jouer sur click boutton
$("#jouer").on("click", () => {
  console.log("click jouer");
  $("#grille table").remove();
  melangeTab(tableauImgRandoms, tailleTableau);
  compteur = 0;
  $("#compteur").text("Nombre de coups :" + compteur);
  play();
});

//reset la touche espace
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
  }
});

//jouer sur press spacebar
const spaceBar = document.addEventListener("keydown", () => {
  console.log("space bar");
  $("#grille table").remove();
  melangeTab(tableauImgRandoms, tailleTableau);
  console.table(tableauImgRandoms);
  compteur = 0;
  $("#compteur").text("Nombre de coups :" + compteur);
  play();
});

//carte retourné
//carte caché

/*     //timer 3sec puis remet carte
setTimeout(() => {
    document.getElementById(idImg).src = carteCache;
    console.log("timer");
}, 3000);
/*     if (compteurCoup % 2 !== 0) {
    img1 = imgTabValue;
    console.log(img1);
    } else if (compteurCoup % 2 === 0) {
        img2 = imgTabValue;
        console.log(img2);
        } */
