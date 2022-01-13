// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const num = parseInt(prompt("inserisci un numero", "4"));



if (isNaN(num)) {
    alert("non hai inserito un valore valido")
} else {

    if (num % 2 == 0) {
        console.log(`numero pari ${num}`)
    } else {
        console.log(`numero successivo a quello inserito ${num + 1}`);
    }
}