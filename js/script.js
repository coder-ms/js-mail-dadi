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

for(let i = 0; i < invitati.length; i++){
    if(mail == invitati[i]){
        console.log("Mail in elenco, sei dentro");
    }
    else if(mail != invitati[i]){
        console.log("Mail non in elenco, accomodati pure fuori");  
    }
}




/*DADI*/



