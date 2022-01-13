/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

const array1 = ["rosso", "bianco", "giallo"];
const array2 = [10];

/* const rndNum = Math.floor(Math.random() * 10);*/
const rndNumLenght = Math.floor(Math.random() * 100) + 1;

while (array2.length < array1.length) {
    array2.push(rndNumLenght)
}
console.log(array1, array2)
