const superheroes = ["Spider-Man", "Batman", "Superman", "Iron Man", "Wonder Woman", "Capitán América", "Thor"];

// .reduce(): cuenta cuántos héroes hay (aunque .length es más directo, sirve para demostrar)
const totalHeroes = superheroes.reduce((contador) => contador + 1, 0);

console.log(totalHeroes); // 7