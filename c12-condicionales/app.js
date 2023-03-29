// declarar | asignar | inicializar
let numero = 3;

// funciones como valor

const saludar = () => {
  let saludo = "Hola";
  return saludo;
};

//CONDICIONALES

const preguntarColor = () => {
  let color = prompt("Indica un color");
};

// >, >=, <, <=, !=

// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// != diferente que
// == igual que
// === estrictamente igual

//todos devuelven un booleano: true o false

// console.log(5 < 4); // false
// console.log(5 > 4); // true
// console.log(5 <= 4); // false
// console.log(4 >= 4); // true
// console.log(4 !== 4); // false
// console.log("4" !== 4); // true

// //comparacion solo de valor
// console.log("4" == 4); // true

// //estrictamente igual: comparar por el valor y el tipo de dato
// console.log("4" === 4); // false

//Condicional if: herramienta encargada de ejecutar cierto código dependiendo de la condición

// let edad = prompt("Ingrese su edad");

// //la condicion siempre debe dar true
// //palabra reservada | condición | scope
// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Lo siento, eres menor de edad");
// }

// let temperaturaDeTe = prompt("En que temperatura esta tu té");

// if (temperaturaDeTe > 50) {
//   console.log(`No puedes tomarlo porque se encuentra a ${temperaturaDeTe}°`);
// } else {
//   console.log(`Puedes tomarlo porque se encuentra a ${temperaturaDeTe}°`);
// }

// Crear una función que tome como parametro una letra y devuelva true si letra es una vocal o false si no lo es

// const validarLetra = (letra) => {
//   if (letra === "a") {
//     console.log("Es vocal");
//   } else if (letra === "e") {
//     console.log("Es vocal");
//   } else if (letra === "i") {
//     console.log("Es vocal");
//   } else if (letra === "o") {
//     console.log("Es vocal");
//   } else if (letra === "u") {
//     console.log("Es vocal");
//   } else {
//     console.log("No es vocal, es consonante");
//   }
// };

// validarLetra("b");

//Crear una función "puedeAvanzar" que tome como parametro un string con el color del semáforo y muestro por consola "true" si puede avanzar o "false" si no. Si no se ingresa un color válido, debe mostrar un string que diga: Error: color de semáforo inválido

let color = prompt("Ingresa un color");

const puedeAvanzar = (color) => {
  if (color === "verde") {
    console.log(true);
  } else if (color === "amarillo") {
    console.log(false);
  } else if (color === "rojo") {
    console.log(false);
  } else {
    console.log("Error: color de semáforo invalido");
  }
};

puedeAvanzar(color);
