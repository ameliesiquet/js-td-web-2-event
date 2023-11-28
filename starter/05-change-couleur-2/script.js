/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5 : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : utilise un switch pour gérer les différents cas de touches
*/



/* 
N.B. La méthode de récupération de la touche pressée dans le tutoriel est dépréciée et plus compliquée (on récupère le code de la touche et puis il faut encore y appliquer une fonction pour transformer ce code en lettre) :
var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
 => il existe une méthode plus directe, voir documentation : 
 https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
*/

document.addEventListener('keypress', function(event) {
    let couleur;

    switch (event.key.toUpperCase()) {
        case 'R':
            couleur = 'red';
            break;
        case 'V':
            couleur = 'green';
            break;
        case 'J':
            couleur = 'yellow';
            break;
        case 'B':
            couleur = 'blue';
            break;
        default:
            console.log(`Touche ${event.key} non gérée`);
            return; // Sort de la fonction si la touche n'est pas gérée
    }

    document.body.style.backgroundColor = couleur;
});
