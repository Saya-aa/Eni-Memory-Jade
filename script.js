/* compare fonctionne pas 
compare + seulement deux par img
dire que compteur augmente si carte pas deja retourné
retourné si pareil
si toute carte retourné gagné
bouton régles
fonction tableau score?

*/

const colGrille = 3;
const rowGrille = 4;
const theme = 0;

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
/* for (ligne of tableauTheme) {
  console.log(ligne.nom);
}
console.table(tableauTheme[0].chemin + "1" + tableauTheme[0].extension); */

const textVictoire = document.createElement("p");
const textJeu = document.getElementById("textJeu");

//-----------
//function return img random en fonction du theme
function randomImg() {
  let randomImg = Math.floor(Math.random() * tableauTheme[theme].nombreCartes);
  console.log(randomImg);
  return randomImg + 1;
}

//----------------------
//Function generer tablo
function generateTable(colGrille, rowGrille, theme) {
  // crée un élément <table> et un élément <tbody>
  const grilleJeu = document.getElementById("grille");
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  id = 1;

  // création de toutes les cellules
  for (let i = 0; i < rowGrille; i++) {
    // crée une ligne de tableau
    const row = document.createElement("tr");

    for (let j = 0; j < colGrille; j++) {
      // Crée un élément <td> et un nœud texte, place le texte
      // dans le <td>, puis place le <td> à la fin de la ligne
      const cell = document.createElement("td");

      //id ++
      cell.id = id;
      id++;

      //initialise sur ?
      const cellImgDos = new Image();
      cellImgDos.src = "ressources/question.svg";
      cellImgDos.alt = "carte caché";
      cell.appendChild(cellImgDos);

      cellImg = new Image();

      // ajoute src et alt en fonction du theme
      cellImg.src =
        "" +
        tableauTheme[theme].chemin +
        randomImg() +
        tableauTheme[theme].extension +
        "";
      cellImg.alt = "carte " + tableauTheme[theme].nom; //FAIRE TAB DE ALT POUR CHAQUE THEME

      cell.appendChild(cellImg);

      row.appendChild(cell);
      //-------------
      /*       let nbPaire = 0;

      tbl.forEach((event) => {
        if (cellImg.src === cellImg.src) {
          nbPaire++;
          console.log(nbPaire);
        }
        return nbPaire;
      });

      console.log(nbPaire);*/
    }

    // ajoute la ligne à la fin du corps du tableau
    tblBody.appendChild(row);
  }
  // place le <tbody> dans le <table>
  tbl.appendChild(tblBody);
  // ajoute <table> dans <div grilleJeu>
  grilleJeu.appendChild(tbl);
}

//reset la touche espace
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
  }
});

//fonction de jeu
function play() {
  console.log("Début du jeu");
  generateTable(colGrille, rowGrille, theme);

  let compteur = 0;
  let compteurCoup = 0;

  let nbPaire = 0;
  compareSrc(nbPaire);
  console.log("nb paire :" + nbPaire);

  $("td").on("click", function () {
    console.log("Carte retournée");
    compteur++; //COMPTER PAR PAIRE ?
    compteurCoup++;
    $("#compteur").text("Nombre de coups : " + compteur);
    console.log(compteur);
    //if all carte retourné alors
    if (compteur >= 12) {
      textVictoire.textContent = "Bravo ! Vous avez gagné !";
      textJeu.appendChild(textVictoire);
    }
  });
}

function compareSrc(nbPaire) {
  if ($("img").src === $("img").src) {
    nbPaire++;
  }
  return nbPaire;
}

//NE PAS TOUCHER
//jouer sur click boutton
$("#jouer").on("click", () => {
  console.log("click jouer");
  $("#grille table").remove();
  compteur = 0;
  $("#compteur").text("Nombre de coups :" + compteur);
  play();
});

//jouer sur press spacebar
const spaceBar = document.addEventListener("keydown", () => {
  console.log("space bar");
  $("#grille table").remove();
  compteur = 0;
  $("#compteur").text("Nombre de coups :" + compteur);
  play();
});
