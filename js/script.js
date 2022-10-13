"use strict";

/*MAIL*/
/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
*/

/*Array */
const invitati = ["luigi.rossi@gmail.com", "filippo.neri@gmail.com", "andrea.bianchi@gmail.com", "giuseppe.verdi@gmail.com", "antonio.canova@gmail.com"];


const btn = document.querySelector('button');
const email = document.getElementById('email');
const btnReset = document.getElementById('writeAgain')
console.log(email);

/*Array vuoto da riempire in caso la mail inserita coincida con una delle mail del primo array */
const invited= [];

const host = document.querySelector('.youAreIn')
const youAreOut = document.querySelector('.youAreOut')


for(let i = 0 ; i < invitati.length; i++){
    console.log(invitati[i])  
}

/*Verifica se sei dentro o meno scrivendo la tua mail */
function verify(){
    let check = false;
    for( let i = 0 ; i< invitati.length; i++){
        if(email.value == invitati[i]){
            check = true;
            
        }
    }
    /*Sei dentro */
    if(check){
        host.classList.remove('d-verify');
        youAreOut.classList.add('d-verify');
        
    }
    /*Non sei dentro */
    else{
        host.classList.add('d-verify');
        youAreOut.classList.remove('d-verify');
        btnReset.classList.remove('d-verify');
    }
}
btn.addEventListener('click', verify);

/*reset button per riscrivere mail */
function rewriteMail(){
    window.location.reload();
}
btnReset.addEventListener('click' , rewriteMail);




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


