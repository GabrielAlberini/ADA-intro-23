// const puedesEntrarAlBoliche = (edad, tienesAutorizacion) => {
//   if (edad >= 18 || tienesAutorizacion === true) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

// puedesEntrarAlBoliche(17, true);

//Operadores de comparación
// = => asignando (no es un operador de comparación)
// == => valor
// === => tipo y valor

// == comparador de igualdad
console.log(4 == "4"); // true

// === comparador de igualdad estricta
console.log(4 === "4"); // false

//Bucles:

// variable iniciar | condicion | incremento/decrement
// for (let i = 0; i <= 10; i++) {
//   contenedor.innerHTML += `<p class="parrafo">Vuelta numero ${i}</p>`;
// }

/*
PRIMITIVOS
string = "gabo"
number = 3
undefined            <= representan directamente al dato
null
NaN
Symbol
booleano

DATO COMPUESTOS O COMPLEJOS
arrays                    <= son una colección de datos   
objetos
*/

// array = lista
// rojo, amarrillo, azul

//sintaxis        0       1        2
// let colores = ["rojo", "azul", "amarillo"];
//colores[1]

// console.log(colores);

const arrayDeMuchosDatos = [3, [], "Hola", {}, undefined, null, NaN];

console.log(arrayDeMuchosDatos);

// posición / elemento

//Cuantos elementos tiene arrayDeMuchosDatos? = 7 elementos
//En que posición esta el útlimo elemento? = sexta posición

console.log(arrayDeMuchosDatos[2]);

// const carrito = [];

// //Agregar un elemento al final
// carrito.push("Albondiga");
// // console.log(carrito);
// carrito.unshift("Tarta");
// // console.log(carrito);
// carrito.shift();
// // console.log(carrito);
// carrito.pop();
// console.log(carrito);

// const carrito = []; // array => dato complejo

// const agregarProductosCarrito = (producto) => {
//   carrito.push(producto);
// };

// //                          parametro
// const mostrarEnElNavegador = (array) => {
//   const contenedor = document.getElementById("mi-div");
//   for (let i = 0; i < array.length; i++) {
//     contenedor.innerHTML += `<p>El elemento ${i + 1} es ${array[i]}</p>`;
//   }
// };

// agregarProductosCarrito("mochila");
// agregarProductosCarrito("Rotulos");
// agregarProductosCarrito("regla");
// agregarProductosCarrito("birome");

// carrito.unshift("Liquid paper");

// // argumento => dato que "llena" al parametro
// mostrarEnElNavegador(carrito);

// console.log(carrito);

//////

const colores = [];

const agregarColores = (color) => {
  colores.push(color);
};

const mostrarColor = (array) => {
  const contenedor = document.getElementById("mi-div");

  for (let i = 0; i < array.length; i++) {
    contenedor.innerHTML += `<p>el color ${i + 1} es ${array[i]}</p>`;
  }
};
//Para 10 colores

for (let i = 1; i < 10; i++) {
  let colorNuevo = prompt("Ingrese nombre de color");
  agregarColores(colorNuevo);
}

mostrarColor(colores);
