/* 1) En javascript, déclare 2 variables dans lesquelles tu affecteras respectivement ton nom et prénom (choisis un nom pertinent pour chaque variable !). 
Avec l’instruction alert(……), tu afficheras "Bonjour, nom prénom".

2) En javascript, déclare une variable constante et assigne lui une valeur numérique, c'est-à-dire un nombre, par exemple, 64.

Déclare une autre variable qui contient ton âge.

Déclare une autre variable qui contiendra le résultat de la soustraction de 64 moins ton âge en utilisant les deux variables précédentes.

Avec l’instruction alert(….)  tu afficheras "Résultat soustraction années à travailler avant la retraite ! Courage ! En développant ce sera plus fun ! ".

Pour coder vous pouvez utiliser la partie javascript de l’outil CodePen :*/ 

//console.log('bonjour')
const nom = 'Holler'; 
const prenom = 'Mathis';
//console.log('prenom')
//console.log('nom')

console.log('Bonjour' + ' ' + nom + ' ' + prenom)

let nombre = 64 
let age = 23 

function soustraction(nombre,age) {
    console.log('resultat de la soustraction' + ' ' + (nombre - age) + ' ' + 'année à travailler avant la retraite')
}

soustraction(nombre,age)
