const superheroes = [
  "Spider-Man",
  "Batman",
  "Superman",
  "Iron Man",
  "Wonder Woman",
  "Capitán América",
  "Thor"
];

// Ejemplo B: forEach
// superheroes.forEach(function(heroe) {
//   console.log(`${heroe} es un superhéroe increíble!`);
// });

// Ejemplo C: forEach con función flecha
// superheroes.forEach(heroe => {
//   console.log(`${heroe} (Arrow function)`);
// });


const libros = [
  "Harry Potter y la piedra filosofal",
  "El Señor de los Anillos",
  "El Hobbit",
  "Juego de Tronos",
  "Cien años de soledad",
  "1984",
  "Orgullo y prejuicio"
];

libros.forEach(libro => {
  console.log(`${libro} es un libro fascinante!`);
});