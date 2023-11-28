/*
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

document.getElementById('red').addEventListener('click', rouge=()=>{
    document.body.style.backgroundColor = 'red'
})
document.getElementById('green').addEventListener('click', vert=()=>{
    document.body.style.backgroundColor = 'green'
})
document.getElementById('yellow').addEventListener('click', jaune=()=>{
    document.body.style.backgroundColor = 'yellow'
})
document.getElementById('blue').addEventListener('click', bleu=()=>{
    document.body.style.backgroundColor = 'blue'
})



