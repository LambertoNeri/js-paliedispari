/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.  
*/
const evenOrOdd = (prompt('pari o dispari?'))
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
const computerNumber = Math.floor(Math.random() * 5) + 1; 
const sum = (userNumber + computerNumber)

console.log ('numero computer', computerNumber)
console.log ('somma numero computer + utente', sum)

function isEven(bho){
    if (bho % 2 == 0 ) {
        console.log('Pari!!!!')
        return true
    } else if (bho % 2 == 1) {
        console.log ('Dispari!!!')
        return false
    }
}

console.log (isEven(sum))

if (isEven(sum) == true && evenOrOdd == ('pari')) {
    alert('hai vinto era pari!');
} else if (isEven(sum) == false && evenOrOdd == ('dispari')) {
    alert('hai vinto era dispari!');
} else if (isEven(sum) == true && evenOrOdd == ('dispari')) {
    alert ('hai perso era pari');
} else if (isEven(sum) == false && evenOrOdd == ('pari')) {
    alert ('hai perso era dispari');
} 