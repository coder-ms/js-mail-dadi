"use strict";

/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
*/





/*MAIL*/
//var mail = document.querySelector('email').value;

const invitati = ["luigi.rossi@gmail.com", "filippo.neri@gmail.com", "andrea.bianchi@gmail.com", "giuseppe.verdi@gmail.com", "antonio.canova@gmail.com"];

/*
console.log(mail, invitati);
console.log(invitati.length);
*/

/*Collegamento bottone genera(HTML) alla funzione JS*/
const bottone = document.getElementById('button');

for(let i = 0; i < invitati.length; i++){
    console.log(invitati[i]);
}

/*
var verifyMail = function (){
    for(let i = 0; i < invitati.length; i++){
        if(mail == invitati[i] ){
            document.getElementById("email").innerHTML = invitati[i];
            document.write("Mail in elenco, sei dentro");
        }
        else{
            document.write("Mail non in elenco, accomodati pure fuori");
        }
    }
}
bottone.addEventListener('click', verifyMail);
*/


/*DADI*/
/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

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


