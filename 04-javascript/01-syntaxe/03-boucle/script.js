"use strict";
// ---------------------------- WHILE -------------------------
let a = 0;
// Tant que a est plus petit que 10
while (a < 10) {
	// On répète les instructions qui sont entre les accolades.
	console.log("a vaut ", a);
	a++;
}

// ! ATTENTION d'avoir toujours un moyen de sortir de la boucle.
// while(a=1)
while (true) {
	// Ici notre boucle étant à true, elle ne s'arrêtera jamais.
	a++;
	if (a < 17) {
		// Le mot clef continue stop la répétition en cours et passe à la suivante.
		// Ici le console.log n'apparaîtra qu'à partir de 17.
		continue;
	}
	console.log("a vaut ", a);
	if (a === 20) {
		// L'utilisation du mot clef break permet aussi la sortie d'une boucle.
		break;
	}
}

do {
	console.log("a vaut ", a);
	/* do while permet d'effectuer une action une première fois avant de vérifier
        si on souhaite la répéter. */
} while (a < 5);

// --------------------------FOR---------------------------
for (let i = 0; i < 10; i++) {
	/* La boucle for prend 3 paramètres séparés de ";" 
        Le premier est la déclaration et définition d'une variable numérique
        Le second la condition d'arrêt de la boucle
        Le troisième de combien doit augmenter (ou diminuer) la variable à chaque itération*/
	console.log("i vaut ", i);
}

//! fin des boucles classique

//! boucle sur objet

// taches=['test', 'test2']
// for (tache in taches){
//     document.write('<div><p>'+taches['tache']+'</p><p><input edit onclick="edit('+tache+')></div>')
// }

// let arr = [["pizza", 4], "cannelé", "gratin dauphinois", "tartine"];
// let pizza = { nom: "regina", nb: 4 };
let arr = ["pizza", "cannelé", "gratin dauphinois", "tartine"];
let person = { nom: "Pierre", age: 55, yeux: "vert" };

for (let index in arr) {
	/* le for in va récupérer les index des différents éléments du tableau 
    si le tableau contient 3 élément, le for in fera 3 itérations 
    sa variable valant à tour de rôle 0, 1 puis 2.*/
	console.log(index, " -> ", arr[index]);
}
for (let carac in person) {
	/* Utilisé sur un objet, on obtient le nom de toute les propriétés. */
	console.log(carac, " -> ", person[carac]);
}
// syntaxe: for("déclaration de variable" in "tableau/objet")
for (let f of arr) {
	/* for of fonctionne comme for in mais au lieu de récupérer à chaque itération
    l'index, il récupère directement les valeurs des tableaux. */
	console.log(f);
}
// for(let truc of person){} le for of ne fonctionne pas avec les objets
// -------------------------- forEach et map --------------------------
let nombres = [8, 46, 98, 2, 16];
/* forEach et map sont des méthodes(fonction) appartenant aux tableaux.
Par ce fait, elles ne fonctionnent que sur les tableaux et utilise la syntaxe suivante :
tableau.forEach(fonction); tableau.map(fonction) */
nombres.forEach((nombre, index) => console.log(nombre));
/* Ici forEach fait une itération par élément du tableau, 
    à chacune des itérations l'élément suivant du tableau est rangé dans la variable
    donné en paramètre (ici el)
    Et on lui indique d'afficher notre variable.*/
// forEach sur son fonctionnement se rapproche de for of;
// * On poussera un peu plus loin forEach quand on verra les fonctions.

// map est une méthode qui va nous renvoyer un nouveau tableau.
// Je déclare donc une nouvelle variable pour accueillir ce nouveau tableau.
let a2 = nombres.map((val, index) => val * 2);
/* map boucle sur chacun des éléments du tableau, et effectue une opération 
    sur ces éléments avant de construire un nouveau tableau avec.*/
console.log(a2);
let a3 = ["bidule", "machin", "truc"];
// Les opérations ne sont pas forcément mathématique.
let a4 = a3.map((str) => str.toUpperCase());
console.log(a4);
