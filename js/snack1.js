// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.


let sum = 0;
/*
for (let k = 1; k <= 5; k++) {
    const userNumber = parseInt(prompt("inserisci un numero", "3"));
    if (!isNaN(userNumber)) {
        sum += userNumber
    }

}*/

let i = 1;
while (i <= 5) {
    const userNumber = parseInt(prompt("inserisci un numero", "3"));
    if (!isNaN(userNumber)) {
        sum += userNumber;
    }

    i++
}

console.log(`la somma è: ${sum}`)