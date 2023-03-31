//Condicionales

// const calcularMayorOMenor = () => {
//   if (2 > 3) {
//     return "Es mayor";
//   } else if (5 == 5) {
//     return "Es igual";
//   } else {
//     return "Es menor";
//   }
// };

// console.log(calcularMayorOMenor());

// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// let edad = Number(prompt("Ingrese edad"));

// let tieneAutorizacion = prompt(
//   "ingrese true si autoriza a ver película y false si no lo hace"
// );

//Operadores lógicos | OR / AND

//OR => una de las validaciones tiene que dar true: ||
//AND => las dos validaciones tienen que dar tru: &&

// let num = 4;

// if (num > 5 || num == 4) {
//   console.log("El numero es mayor a 5 o igual a 4");
// } else {
//   console.log("El numero es menor a 5 y diferente a 4");
// }

// let taza = true;
// let te = "frio";

// if (taza === true && te === "templado") {
//   console.log("Puedes tomar tu té");
// } else if (taza === false) {
//   console.log("Pero amigo, donde vas a tomar tu té?");
// } else if (te === "frio") {
//   console.log("Calienta tu té, porque está frio");
// } else {
//   console.log("Espera unos minutos, el está caliente");
// }

// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// const puedesVerPelicula = (edad, tienesAutorizacion) => {
//   if (edad >= 15 || tienesAutorizacion === true) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

// puedesVerPelicula(9, false);

//Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// let tests = true;
// let multasImpagas = false;
// let impuestos = true;

// const puedeRenovarCarnet = (tests, multasImpagas, impuestos) => {
//   //         true                true                     true
//   if (tests === true && !multasImpagas === true && impuestos === true) {
//     console.log("Puedes renovar el carnet");
//   } else {
//     console.log("No puedes renovar el carnet");
//   }
// };

// puedeRenovarCarnet(tests, multasImpagas, impuestos);

//ciclo for => Un ciclo/bucle "for" se repite hasta que la condición se evalúe como false

// variable inicial | condición | incremento/decremento
// for (let inicio = 10; inicio >= 0; inicio = inicio - 1) {
//   console.log(inicio);
// }

//Realizar un búcle que vaya del 0 al 10 mostrando en consola solamente los pares

//Realizar un búcle que muestre en consola la tabla del 5 del 0 al 50

// for (let vi = 0; vi <= 10; vi = vi + 2) {
//   console.log(vi);
// }

// for (let vi = 5; vi <= 50; vi = vi + 5) {
//   console.log(vi);
// }
