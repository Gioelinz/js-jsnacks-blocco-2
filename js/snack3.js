// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
const fakeInvites = []
const names = ["Gioele", "Matteo", "Alessandro"];
const surnames = ["Runza", "Imbimbo", "Basilico"];


//! metodo while
while (fakeInvites.length < 3) {
    const rndNum1 = Math.floor(Math.random() * names.length);
    const rndNum2 = Math.floor(Math.random() * surnames.length);

    const name = names[rndNum1];
    const lastname = surnames[rndNum2];

    const fakePerson = `${name} ${lastname}`;

    console.log('fake person:', fakePerson);

    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson)
    }
}


// ! metodo for
/*
for (let i = 0; fakeInvites.length < 3; i++) {
    const rndNum1 = Math.floor(Math.random() * names.length);
    const rndNum2 = Math.floor(Math.random() * surnames.length);

    const name = names[rndNum1];
    const lastname = surnames[rndNum2];

    const fakePerson = `${name} ${lastname}`;

    console.log('fake person:', fakePerson);

    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson)
    }
}
*/
console.table(fakeInvites)