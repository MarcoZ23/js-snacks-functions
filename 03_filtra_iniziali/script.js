/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const aLetter = (array, letter) => {
const aName = [] 
for (let i = 0; i < array.length; i++) {
if (array [i] [0] === letter) {
aName.push(array[i])}}
return aName

}

// Invoca la funzione qui e stampa il risultato in console

const newName = aLetter(names, "A")

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(newName);
