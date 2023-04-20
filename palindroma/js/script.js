/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti */

// chiedere con un prompt all'utente di inserire una parola, inserire la parola in const = parola.

const word = prompt('inserisci una parola');


//creare un funzione che inverta word e controlli se "inverted" e "word" sono identiche. IF sono uguali = true, Else = false

palindromo(word)



function palindromo(inverted) {

    let dai = []
    
    for ( let i = 0 ; i < inverted.length; i++) {
        //console.log(word[word.length - (i + 1)])

        dai.push (`${inverted[inverted.length - (i + 1)]}`)

    }
        

   console.log(dai)

   /* if (dai == word) {
        console.log ('è palindromo!!');
        return true
    } else {
        console.log ('non è palindromo');
        return false
    }  */
}



 