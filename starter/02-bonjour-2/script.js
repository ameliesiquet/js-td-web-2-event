/* EXERCICE 2 :
- Ajouter un champ texte dans le HTML qui permet à l'utilisateur d'entrer son prénom
- Au clic sur le bouton,
   - Récupérer le prénom (la valeur du champ prénom)
   - Afficher dans une boîte de dialogue le message
       * "Bonjour, … ! " si la personne a bien entré un prénom
       * "Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?" sinon
- Faire 3 versions d'écriture :
   * 1°) avec une fonction nommée
   * 2°) avec une fonction anonyme
   * 3°) avec une arrow fonction et une expression conditionnelle
*/


// Autre écriture


// 1°) avec une fonction nommée
function direBonjour() {
    const prenom = document.getElementById('prenom').value;

    if (prenom !== '') {
        alert(`Bonjour, ${prenom}! `);
    } else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?");
    }
}
document.getElementById('hello').addEventListener('click', direBonjour);

//2°) avec une fonction anonyme
document.getElementById('hello').addEventListener('click', function (){
    const prenom1 = document.getElementById('prenom').value;

    if (prenom1 !==''){
        alert(`Bonjour, ${prenom1}! `)
    } else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?")
    }
})



// 3°) avec une arrow fonction et une expression conditionnelle
document.getElementById('hello').addEventListener('click', () => {
    const prenom2 = document.getElementById('prenom').value;

    const message = prenom2 !== '' ? `Bonjour, ${prenom2}!` : "Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?";
    alert(message);
});





// Plus court : écriture ES6 avec expression conditionnelle




