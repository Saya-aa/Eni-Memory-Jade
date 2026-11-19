/* compare fonctionne pas 
compare + seulement deux par img
dire que compteur augmente si carte pas deja retourné
retourné si pareil
si toute carte retourné gagné
bouton régles
fonction tableau score?

*/

/* for (ligne of tableauTheme) {
  console.log(ligne.nom);
}
console.table(tableauTheme[0].chemin + "1" + tableauTheme[0].extension); */

const textVictoire = document.createElement("p");
const textJeu = document.getElementById("textJeu");

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

      //initialise sur "?""
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

//fonction de jeu
function play() {
  console.log("Début du jeu");
  generateTable(colGrille, rowGrille, theme);

  let compteur = 0;
  let compteurCoup = 0;

  let nbPaire = 0;

  $("td").on("click", function () {
    console.log($(this).id);
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
