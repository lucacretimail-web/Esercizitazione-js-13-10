/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 25,
  citta: "Roma"
};
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}.`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

persona.email = "mario.rossi@example.com";
delete persona.eta;
console.log(persona;

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

const utente = {
  nome: "Luigi",
  indirizzo: {
    via: "Via Roma 1",
    citta: "Milano",
    cap: "20100"
  }
};
console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

const chiave = "nome";
console.log(persona[chiavee]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

const a = 7;
const b = 12;
const c = 9;

if (a === b && a > c || a === c && a > b || b === c && b > a) {
  console.log("Pareggio");
} else if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

const totale = 35;

// if/else
let spedizione;
if (totale >= 50) {
  spedizione = 0;
} else {
  spedizione = 9.90;
}
console.log(`Totale carrello: ${totale}€ — Spedizione: ${spedizione.toFixed(2)}€ — Totale finale: ${(totale + spedizione).toFixed(2)}€`);

// ternario
const spedizioneTernario = totale >= 50 ? 0 : 9.90;
console.log(`Totale carrello: ${totale}€ — Spedizione: ${spedizioneTernario.toFixed(2)}€ — Totale finale: ${(totale + spedizioneTernario).toFixed(2)}€`);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

const valori = [42, "ciao", true];
for (let i = 0; i < valori.length; i++) {
  if (typeOf valori[i] === "number") {
    console.log(`${valori[i]} è un numero`);
  } else {
    console.log(`${valori[i]} non è un numero`);
  }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

const numeri = [];
for (let i = 1; i <= 5; i++) {
  numeri.pusch(i);
}
numeri.unshift(0);
console.log(numeri, numeri.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];
carrello.splice(1, 1);
console.log(carrello);
carrello.splice(1, 0, "Diario")
console.log(carrello);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

const prodotti = ["Penna", "Quaderno", "Zaino"];
const cercato = "Zaino";
console.log(`${cercato} è in carrello: ${prodotti.include(cercato)}`);
const posizione = prodotti.indexOf(cercato);
if (posizione !== -1) {
  console.log(posizione);
} else {
  console.log("Non in carrello");
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

const utenti = [
  { nome: "Mario", eta: 25 },
  { nome: "Giulia", eta: 31 },
  { nome: "Paolo", eta: 19 }
];
for (let i = 0; i < utenti.lenght; i++) {
  console.log(`${utenti[i].nome} (${utenti[i].eta} anni)`);
}
console.table(utenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

const inventario = [
  { nome: "Penna", prezzo: 2, disponibile: true },
  { nome: "Zaino", prezzo: 35, disponibile: true },
  { nome: "Diario", prezzo: 8, disponibile: false },
  { nome: "Astuccio", prezzo: 12, disponibile: false }
];
for (let i = 0; i < inventario.length; i++) {
  const p = inventario[i];
  if (p.disponibile && p.prezzo < 10) {
    console.log(`OFFERTA: ${p.nome} (${p.prezzo}€)`);
  } else if (p.disponibile && p.prezzo >= 10) {
    console.log(`${p.nome} — ${p.prezzo}€`);
  } else {
    console.log(`${p.nome} — esaurito`);
  }
}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

const originale = [1, 2, 3, 4, 5];
const inverso = [];
for (let i = originale.length - 1; i >= 0; i--) {
  inverso.push(originale[i]);
}
console.log(inverso;
