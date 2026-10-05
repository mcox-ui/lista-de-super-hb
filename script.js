// 1. Crea un nuevo documento Script dentro del proyecto 🛒lista-de-super para instanciar un arreglo vacío guardado en la variable listaDeSuper.
let listaDeSuper = [];

// 2. Agregar 3 productos a la lista asignándolos directamente por índice (ej. listaDeSuper[0] = "sal").
listaDeSuper[0] = "sal";
listaDeSuper[1] = "azúcar";
listaDeSuper[2] = "harina";

// 3. Imprimir en consola el primer elemento.
console.log("Primer elemento: " + listaDeSuper[0]);


// 4. Crear la variable ultimoElemento que calcule la posición del último producto mediante .length - 1 y mostrar dicho producto en consola
let ultimoElemento = listaDeSuper.length - 1;
console.log("Último elemento: " + listaDeSuper[ultimoElemento]);

// Ejercicio práctico — 🛒 Lista de Súper (Parte 2) (Entrega Parcial)
// 1. Partiendo de la lista anterior, agregar 2 productos nuevos al final usando .push().
listaDeSuper.push("leche");
listaDeSuper.push("huevos");

// 2. Agregar 2 productos nuevos al principio usando .unshift().
listaDeSuper.unshift("pan");
listaDeSuper.unshift("agua");

// 3. Imprimir la cantidad total de productos actuales usando .length.
console.log("Cantidad total de productos: " + listaDeSuper.length);

// 4. Remover el último producto y guardarlo en la variable noHabia.
let noHabia = listaDeSuper.pop();
console.log("Producto removido: " + noHabia);

// 5. Remover el primer producto y guardarlo en la variable comprado.
let comprado = listaDeSuper.shift();
console.log("Producto comprado: " + comprado);

// 6. Consultar y mostrar el tamaño final de la lista en consola.
console.log("Tamaño final de la lista: " + listaDeSuper.length);