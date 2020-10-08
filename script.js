const buttonLDorElement = document.getElementById("buttonLivreDor");
const inputLivreDor = document.getElementById("msgLiDor");
const nomLivreDor = document.getElementById("nom");
const mainElement = document.querySelector("#livredor");

buttonLDorElement.addEventListener("click", function () {
  const newParagrapheElement = document.createElement("p");
  mainElement.appendChild(newParagrapheElement);
  newParagrapheElement.innerHTML =
    "- " +
    nomLivreDor.value +
    " a commenté: " +
    "''" +
    inputLivreDor.value +
    "''";
  newParagrapheElement.style.padding = "12px";
  newParagrapheElement.style.margin = "5px";
  newParagrapheElement.style.textAlign = "center";
  newParagrapheElement.style.border = "1px double black";
  newParagrapheElement.style.borderRadius = "10px";
});

// START HAROLD - script for LOGIN BUTTON
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// END HAROLD - script for LOGIN BUTTON

// Start dark Theme + local storage

function setInitialTheme() {
  // fonction qui set le theme enregistré
  const storedTheme = localStorage.getItem("theme"); // get du thème enregistré
  if (storedTheme && storedTheme === "dark") {
    // si le thème existe et valeur "dark"
    document.body.classList.add("dark"); // on applique le thème
    document.getElementById("myonoffswitch").checked = false; // et on unckeck la checkbox
  }
}

setInitialTheme();

function switchTheme() {
  if (document.getElementById("myonoffswitch").checked === false) {
    // dark theme
    document.body.classList.add("dark"); // Ajoute la classe "dark" à body, ce qui change le theme
    localStorage.setItem("theme", "dark"); // Enregistre le theme dark dans le localstorage
  } else {
    // light
    document.body.classList.remove("dark"); // Enlève la classe "dark" à body
    localStorage.setItem("theme", "light"); // Enregistre le theme light dans le localstorage
  }
}

addComment();
