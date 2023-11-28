/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 6 : Change couleur (3)
- 1°) Étape 1 :
	Au clic sur le bouton, récupère la valeur de l'input et utilise-la comme couleur de fond de la page.
	Conseil : utilise ici une fonction nommée, ce sera plus pratique pour la suite
*/

// ÉTAPE 1 : on ne gère que le clic

// Fonction pour changer la couleur de fond de la page
function changeBackgroundColor() {
    const colorInput = document.getElementById('colorChoice').value;
    document.body.style.backgroundColor = colorInput;
}

// Écouteur d'événement pour le clic sur le bouton
document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);
