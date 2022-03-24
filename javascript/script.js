// Inserimento e controllo dati
const km = Number(prompt('Quanti chilometri vuoi percorrere?'));
if (Number.isNaN(km) | km == 0) {
    alert('Non hai inserito un numero, il calcolo non funzionerà. \nPer favore ricarica la pagina e riprova.');
}
const eta = Number(prompt('Quanti anni hai?'));
if (Number.isNaN(eta) | eta == 0) {
    alert('Non hai inserito un numero, il calcolo non funzionerà. \nPer favore ricarica la pagina e riprova.');
}
// Elaborazione dati
let price = km * 0.21;
// Controllo età per sconto
if (eta < 18) {
    price += - (price * 20 / 100);
} else if (eta>=65) {
    price += - (price * 40 / 100)
}
// Arrotondamento prezzo
price = Number(price.toFixed(2));
// Output prezzo
document.getElementById('prezzo').innerHTML = (`Il tuo biglietto costa €${price}`);