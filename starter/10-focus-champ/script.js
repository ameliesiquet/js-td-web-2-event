/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ

document.addEventListener('DOMContentLoaded', function() {
    const prenomInput = document.getElementById('prenom');
    const nomInput = document.getElementById('nom');

    prenomInput.addEventListener('focus', function() {
        this.value = '';
        this.style.backgroundColor = 'lightblue';
    });

    prenomInput.addEventListener('blur', function() {
        this.style.backgroundColor = 'transparent';
    });

    nomInput.addEventListener('focus', function (){
        this.value='';
        this.style.backgroundColor = 'lightblue'
    })
    nomInput.addEventListener('blur', function (){
        this.style.backgroundColor='transparent';
    })
});




// Deux champs


// Plusieurs champs
document.addEventListener('DOMContentLoaded', function() {
    const champsText = document.querySelectorAll('input[type="text"]');

    function champFocus(event) {
        event.target.value = '';
        event.target.style.backgroundColor = 'lightblue';
    }

    function champBlur(event) {
        event.target.style.backgroundColor = 'transparent';
    }

    champsText.forEach(function(field) {
        field.addEventListener('focus', champFocus);
        field.addEventListener('blur', champBlur);
    });
});
