/*
EXERCICE 6 : Change couleur (4) - v3
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 3 : version 2 + on parcourt les boutons avec une boucle foreach pour leur ajouter leur addEventListener
*/



const couleurs = {
    buttons: document.querySelectorAll('input[type=radio]'),

    changeToRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    },

    init() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                document.body.style.background = event.currentTarget.value;
            });
        });

        document.getElementById('boutonCouleur').addEventListener('click', this.changeToRandomColor);
    },
};

couleurs.init();