// Inserimento e controllo dati
const km = Number(prompt('Quanti chilometri vuoi percorrere?'));
if (Number.isNaN(km) | km == 0) {
    alert('Non hai inserito un numero, il calcolo non funzionerà. \nPer favore ricarica la pagina e riprova.');
}
const eta = Number(prompt('Quanti anni hai?'));
if (Number.isNaN(eta) | eta == 0) {
    alert('Non hai inserito un numero, il calcolo non funzionerà. \nPer favore ricarica la pagina e riprova.');
}
const first = prompt('Vuoi viaggiare in prima classe? (digita "S" per una risposta affermativa, qualsiasi altra cosa per una risposta negativa)');
const userName = prompt('Gioca con noi: digita il tuo nome e se il numero di lettere che lo compongono è uguale ad un numero generato casualmente dal sistema vinci uno sconto del 50%!');
const userNameLength = userName.length;
if ( userNameLength == 0 ) {
    alert('Non hai inserito un nome, hai perso l\'occasione di avere un grosso sconto sul prezzo finale.')
}
// Elaborazione dati
let price = km * 0.21;
let type = 'normale';
const x = Math.floor((Math.random() * userNameLength) + 1);
// Controllo età per sconto
if (eta < 18) {
    price += - (price * 20 / 100);
    type = 'under 18';
} else if (eta>=65) {
    price += - (price * 40 / 100);
    type = 'over 65';
}
// Controllo opzione prima classe
if (first == "S" | first == "s") {
    price += + (price * 10 / 100);
}
// Controllo lunghezza nome
if (userNameLength == x){
    price += -(price * 50 / 100)
}
// Arrotondamento prezzo
price = Number(price.toFixed(2));
// Output sconto nome
if (userNameLength == x) {
    document.getElementById('nome').innerHTML = (`Lettere nel nome ${userName}: ${userNameLength}`);
    document.getElementById('numero').innerHTML = (`Numero estratto dal sistema: ${x}`);
    document.getElementById('sconto').innerHTML = ('Complimenti, hai vinto! Goditi il viaggio alla metà del prezzo!');
} else {
    document.getElementById('nome').innerHTML = (`Lettere nel nome ${userName}: ${userNameLength}`);
    document.getElementById('numero').innerHTML = (`Numero estratto dal sistema: ${x}`);
    document.getElementById('sconto').innerHTML = ('Purtroppo non hai vinto, sarai più fortunato la prossima volta!');
}
// Output prezzo
if (first == "S" | first == "s") {
    document.getElementById('prezzo').innerHTML = (`Il tuo biglietto ${type} costa €${price} con maggiorazione del 10% per la prima classe.`);
} else {
    document.getElementById('prezzo').innerHTML = (`Il tuo biglietto ${type} costa €${price}.`);
}
