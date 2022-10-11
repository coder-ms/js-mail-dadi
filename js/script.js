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

var mail = prompt("Inserisci la tua mail");

const invitati = ["luigi.rossi@gmail.com", "filippo.neri@gmail.com", "andrea.bianchi@gmail.com", "giuseppe.verdi@gmail.com", "antonio.canova@gmail.com"];

console.log(mail, invitati);
console.log(invitati.length);

let verify = true; 

for(let i = 0; i < invitati.length; i++){
    if(mail == mail){
        console.log("Mail in elenco, sei dentro");
        verify = true;
    }
    else{
        console.log("Mail non in elenco, accomodati pure fuori");  
        verify = false;
    }
}




/*DADI*/

var n = prompt("Inserisci quante volte vuoi far girare il dado?");
const player1 = [1, 2, 3, 4, 5, 6];
const player2 = [3, 4, 6, 1, 5, 2];

console.log(player1);
console.log(player2);


for(let i = 1; i <= n; i++){
    let numGenerate = Math.floor(Math.random() * 6) + 1;
    console.log(numGenerate);
    if(player1[i] > player2[i]){
        console.log("You win");
    }
    else if(player1[i] == player2[i]){
        console.log("You draw with the computer");
    }
    else if(player1[i] < player2[i]){
        console.log("You lost");
    }
}





