function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const buttonLDorElement = document.getElementById('buttonLivreDor');

const inputLivreDor = document.getElementById('msgLiDor');
const nomLivreDor = document.getElementById('nom');


const mainElement = document.querySelector('#livredor');


buttonLDorElement.addEventListener('click', function () {
  const newParagrapheElement = document.createElement('p');
  mainElement.appendChild(newParagrapheElement);
  newParagrapheElement.innerHTML = '- ' + nomLivreDor.value + ' a commenté: ' + "'" + inputLivreDor.value + "'";
  newParagrapheElement.style.padding = "12px";
  newParagrapheElement.style.textAlign = "Center";
})

// START HAROLD - script for LOGIN BUTTON
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// END HAROLD - script for LOGIN BUTTON
