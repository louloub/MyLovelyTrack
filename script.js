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