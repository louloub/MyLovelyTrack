
const buttonLDorElement = document.getElementById('buttonLivreDor');

const inputLivreDor = document.getElementById('msgLiDor');
const nomLivreDor = document.getElementById('nom');


const mainElement = document.querySelector('#livredor');


buttonLDorElement.addEventListener('click', function () {
  const newParagrapheElement = document.createElement('p');
  mainElement.appendChild(newParagrapheElement);
  newParagrapheElement.innerHTML = '- ' + nomLivreDor.value + ' a commenté: ' + "'" + inputLivreDor.value + "'";
  newParagrapheElement.style.padding = "12px";
})

// START HAROLD - script for LOGIN BUTTON
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// END HAROLD - script for LOGIN BUTTON


// Start dark Theme + local storage 

var darkTheme = false;

function switchTheme() {
  if (darkTheme === true) {
    document.documentElement.style.setProperty('--background-color', '#f8f8ff');
    document.documentElement.style.setProperty('--text-color', '#343333');
    darkTheme = false;
    localStorage.setItem('theme', 'light');
  }
  else {
    document.documentElement.style.setProperty('--background-color', 'black');
    document.documentElement.style.setProperty('--text-color', '#f8f8ff');
    darkTheme = true;
    localStorage.setItem('theme', 'dark');
  }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setProperty('--background-color', currentTheme);
}

// End dark Theme + local storage 
