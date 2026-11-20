let imgDetail = document.getElementById("imgDetail");
var selectMemory = document.getElementById("selectMemory");

if (!imgDetail.getAttribute("src")) {
  imgDetail.style.visibility = "hidden";
}

$(selectMemory).on("change", function () {
  const valeur = selectMemory.value;
  if (valeur === "") {
    imgDetail.removeAttribute("src");
    imgDetail.style.visibility = "hidden";
  } else {
    imgDetail.src = tableauTheme[Number(valeur)].img;
    imgDetail.style.visibility = "visible";
  }
});
