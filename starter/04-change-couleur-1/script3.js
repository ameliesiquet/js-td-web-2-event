/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Ta mission est toujours la même : au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
    - Mais cette fois, encore mieux (c'est la meilleure pratique), tu vas appliquer le style avec CSS, JavaScript va se contenter d'ajouter au clic, une classe sur le body qui indiquera à CSS dans quelle couleur il doit être stylé…
    PRESSÉ ? : copie-colle le code de l'exercice précédent et repars de là, il n'y a qu'à l'adapter un petit peu.
*/

function colorie(event) {
    const couleur = event.target.getAttribute('data-color');
    document.body.className = 'nouveau';
    document.body.classList.add(couleur);
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.actions button');

    buttons.forEach(button => {
        button.addEventListener('click', colorie);
    });
});
