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