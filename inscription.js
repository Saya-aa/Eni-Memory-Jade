let textError =
  "Le nom utilisateur doit faire 3 caractères minimum (les espaces ne sont pas accepté !)";

const nameUser = document.getElementById("nameUser");
const divUserName = document.getElementById("userName");

nameUser.addEventListener("input", () => {
  if (nameUser.value < 3) {
    divUserName.appendChild(textError);
  } else {
  }
});

const btnMdp = document.getElementById("btn-visibilite-password");
const btnMdpConfirm = document.getElementById("btn-visibilite-password-2");

const mdp = document.getElementById("mdp");
const mdpConfirm = document.getElementById("mdpConfirm");

let condition = false;

const creaCompte = document.getElementById("creaCompte");

//textbtn  change + show password
btnMdp.addEventListener("click", () => {
  if (mdp.type === "password") {
    mdp.type = "text";
    btnMdp.textContent = "Cacher";
  } else if (mdp.type === "text") {
    mdp.type = "password";
    btnMdp.textContent = "Afficher";
  }
});

btnMdpConfirm.addEventListener("click", () => {
  if (mdpConfirm.type === "password") {
    mdpConfirm.type = "text";
    btnMdpConfirm.textContent = "Cacher";
  } else if (mdpConfirm.type === "text") {
    mdpConfirm.type = "password";
    btnMdpConfirm.textContent = "Afficher";
  }
});

//if all condition true activate valider else dont

//all conditon = function

/* creaCompte.addEventListener("click", () => { */
mdp.addEventListener("input", () => {
  //si endessous de 6 = FAIBLE
  if (mdp.value.length >= 6) {
    condition = true;
    console.log("Pas faible");
  } else {
    condition = false;
    console.log("FAIBLE");
  }
  //----------------
  //si audessus de 6 et 1 symbole et 1 nombre : MOYEN
  if (mdp.value.match(/[a-z]/) && mdp.value.match(/[0-9]/)) {
    console.log("MOYEN");
  }

  //----------------
  //si audessus de 9 et 1 symbole et 1 nombre : FORT
  if (mdp.value.length >= 9 && mdp.value.match(/[A-Z]/)) {
    console.log("vert");
  }
  if (mdp.value.match(/[0-9]/)) {
    console.log("vert");
  }
});
/* }); */
/*
//Condition nb caractères
mdp.addEventListener("input", () => {
  if (mdp.value.length >= 6) {
    condition = true;
    colorText(nbCaracteres);
  } else {
    condition = false;
    colorText(nbCaracteres);
  }
});

function colorText(id) {
  if ((condition = true)) {
    id.style.color = "green";
  } else {
    id.style.color = "red";
  }
}
//nbCaracteres.style.color = "green";
 */
