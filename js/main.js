/* Esercizio numero 1
// 1 - Inserisci un numero. 
var numero = parseInt(prompt("inserisci un numero"));


// 2 - se è pari stampa il numero.
if ((numero % 2) == 0) {
    console.log(numero);
//se è dispari stampa il numero successivo.
} else {
    console.log (numero + 1);
}
*/

/*
//Esercizio numero 2
//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
var nomi = ["Luigi", "Antonio", "Alberto", "Diego"];
var cognomi = ["Alfio", "Fiorenzi", "Mariso", "Maradona"];
var nomiCasuali;
var cognomiCasuali;

for (var i = 0; i < nomi.length; i++) {
    nomiCasuali = Math.floor(Math.random() * nomi.length);
    cognomiCasuali = Math.floor(Math.random() * cognomi.length);
    console.log((nomi[nomiCasuali]) + (" ") + (cognomi[cognomiCasuali]));
}
*/







/* Esercizio numero 3
//Crea un array di numeri interi
var numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var somma = 0;
//Fai la somma di tutti gli elementi che sono in posizione dispari.

for (var i = 1; i < numeriInteri.length ; i = i + 2) {
    somma += numeriInteri[i];
    console.log(numeriInteri[i]);
}

console.log("La somma degli elementi in posizione dispari è " + somma);*/


//Esercizio numero 4 - SOLUZIONE NON DINAMICA
//Crea due array che hanno un numero di elementi diversi.
/*
var nomeListaUno = ["Alfredo", "Diego", "Matteo"];
var nomeListaDue = ["Giusy", "Giulia", "Antonia", "Irene", "Lucrezia"];
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

nomeListaUno.push("Roberto", "Alessio");
console.log(nomeListaUno);
*/
//Esercizio numero 4 - SOLUZIONE DINAMICA
//Crea due array che hanno un numero di elementi diversi.
var nomeListaUno = ["Alfredo", "Diego", "Matteo"];
var nomeListaDue = ["Giusy", "Giulia", "Antonia", "Irene", "Lucrezia"];
var nuoviNomiAggiuntoListaDue = prompt("La lista due è maggiore delle lista uno. Inserisci un nuovo nome nella lista due");
console.log("Lista due contiene " + nomeListaDue.push(nuoviNomiAggiuntoListaDue) + " nuovi elementi");



//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var differenza = (nomeListaDue.length) - (" ") - (nomeListaUno.length);
console.log("La differenza tra il primo array e il secondo è pari a " + differenza);
var numeroInterazioni = parseInt(differenza);
var nomiAggiunti;

for (var i = 0; i < numeroInterazioni; i++) {
    nomiAggiunti = prompt("Inserirai tanti nomi fino a quando le due liste non contengono gli stessi elementi");
    nomeListaUno.push(nomiAggiunti);
}
console.log(nomeListaUno);
console.log(nomeListaDue);



