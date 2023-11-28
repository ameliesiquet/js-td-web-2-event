/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

const couleurs = {
    buttons: document.querySelectorAll('input[type=radio]'),

    changeToRandomColor: () => {

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
couleurs.changeToRandomColor();
couleurs.init();

