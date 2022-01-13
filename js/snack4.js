// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const num = [101, 10, 18, 20, 16, 30]
let sum = 0;

/* for (let i = 0; i < num.length; i++) {
    if (i % 2 == 1) {
        sum += num[i]
    }
    console.table(num[i])
} */

let i = 0;
while (i < num.length) {
    if (i % 2 == 1) {
        sum += num[i]
    }
    console.table(num[i])
    i++
}

console.log(`la somma dei numeri in posizione dispari è ${sum}`)