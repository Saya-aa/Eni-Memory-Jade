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

//tableau img random
tailleTableau = tableauTheme[theme].nombreCartes * 2;
console.log(tailleTableau);

let tableauImgRandoms = [];
tableauImgRandoms.length = tailleTableau;

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

melangeTab(tableauImgRandoms, tailleTableau);

console.table(tableauImgRandoms);

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

      const cellImgDos = new Image();
      cellImgDos.src = "ressources/question.svg";
      cellImgDos.alt = "carte caché";
      cellImgDos.id = id - 1;
      cell.appendChild(cellImgDos);

      /*  cellImg = new Image();

      cellImg.src =
        "" +
        tableauTheme[theme].chemin +
        tableauImgRandoms[k] +
        tableauTheme[theme].extension +
        "";
      cellImg.alt = "carte " + tableauTheme[theme].nom; //FAIRE TAB DE ALT POUR CHAQUE THEME
      cell.appendChild(cellImg); */

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

//fonction de jeu
function play() {
  console.log("Début du jeu");
  let compteurCoup = 0;
  generateTable(colGrille, rowGrille, theme);
  $("img").on("click", function (event) {
    let idImg = event.target.id;
    let imgTabValue = tableauImgRandoms[event.target.id];

    console.log("index tab :" + idImg);
    console.log("value img:" + imgTabValue);
    document.getElementById(idImg).src =
      "" +
      tableauTheme[theme].chemin +
      imgTabValue +
      tableauTheme[theme].extension +
      "";
    console.log("CLICK");
    compteurCoup++;
    $("#compteur").text("Nombre de coups : " + compteurCoup);
    //if all carte retourné alors
    if (compteurCoup >= 12) {
      textVictoire.textContent = "BRAVO ! VOUS AVEZ GAGNÉ";
      console.log("Gagné");
    }
  });
}

//FAIRE FONCTION POUR LES DEUX RESTARTS OU LES FUSIONNER
//jouer sur click boutton
$("#jouer").on("click", () => {
  console.log("click jouer");
  $("#grille table").remove();
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
  compteur = 0;
  $("#compteur").text("Nombre de coups :" + compteur);
  play();
});

/*       //initialise sur "?""

      // ajoute src et alt en fonction du theme

      */
