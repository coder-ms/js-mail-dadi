"use strict";

/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.

    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/




/*MAIL*/
var mail = document.getElementById('email').value;

const invitati = ["luigi.rossi@gmail.com", "filippo.neri@gmail.com", "andrea.bianchi@gmail.com", "giuseppe.verdi@gmail.com", "antonio.canova@gmail.com"];

/*
console.log(mail, invitati);
console.log(invitati.length);
*/

for(let i = 0; i < invitati.length; i++){
    if(mail== invitati[i] ){
        document.getElementById("email").innerHTML = invitati[i];
        document.write("Mail in elenco, sei dentro");
    }
    else{
        document.getElementById("email").innerHTML = invitati[i];
        document.write("Mail non in elenco, accomodati pure fuori");
    }
}




/*DADI*/

var player1Dice = Math.floor(Math.random() * 6) + 1;
var player2Dice = Math.floor(Math.random() * 6) + 1;

console.log(player1Dice, player2Dice);

if (player1Dice > player2Dice) {
    document.write("You: " + player1Dice, " Computer: " + player2Dice, " -> You win the match");
}

else if (player1Dice === player2Dice) {
    document.write("You: " + player1Dice, " Computer: " + player2Dice, " -> You tied the match");
}

else {
    document.write("You: " + player1Dice, " Computer: " + player2Dice, " -> You lost the match");
}



/*
const generateNumbers = [];
const numberToGenerate = 10;


for(let i = 1; i <= numberToGenerate; i++){
    let numGenerate = Math.floor(Math.random() * 6) + 1;
    console.log(numGenerate);
}
*/

/* ----------------------------- */
/* programma chiede utente quante volte generare un ciclo e deve stampare dei numeri random da 1 a 10 */

//prompt("");

/*
var n = prompt("inserisci il numero di cicli");

for(let i = 1; i <= n; i++){
    let randomNum = Math.floor(Math.random() * 10) +1;
    console.log(randomNum);
}



*/


