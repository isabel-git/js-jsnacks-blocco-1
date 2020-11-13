//Partendo da un array semplice tipo:var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var arrayUte = [];

// INPUT
var inputOne = parseInt(prompt("inserisci un numero tra 0 e 5"));
var inputTwo = parseInt(prompt("inserisci un numero tra 0 e 5"));

// creo il nuovo array
for (var i = inputOne; i <= inputTwo; i++) {
  arrayUte.push(myArray[i])
}

console.log(arrayUte);