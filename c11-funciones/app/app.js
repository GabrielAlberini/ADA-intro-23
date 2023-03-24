// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

// let nombre = prompt("¿Cual es tu nombre?");
// let apellido = prompt("¿Cual es tu apellido?");
// let edad = prompt("¿Cual es tu edad?");
// let nacionalidad = prompt("¿Cuale es tu nacionalidad?");
// let documento = prompt("¿Cual es tu documento?");

// console.log(
//   `Nuevo usuario agregado al sistema: ${nombre}, ${apellido},${edad}, ${nacionalidad}, ${documento}`
// );

//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

// let playlist = prompt("¿Como se llama tu playlist?");
// let cancionUno = prompt("¿Como te llama la primer cancion?");
// let cancionDos = prompt("¿Como te llama la segunda cancion?");
// let cancionTres = prompt("¿Como te llama la tercera cancion?");

// console.log(
//   `Se ha creado la playlist ${playlist}, con las canciones "${cancionUno}", "${cancionDos}", "${cancionTres}".`
// );

//Crear un programa que pida ingresar una cantidad en minutos mediante un prompt y muestre un mensaje en la consola con el resultado de la conversión en segundos.

// let horas = prompt("Ingrese un numero de horas");

// let conversionASegundos = horas * 3600;

// console.log(`Las ${horas} horas equivalen a ${conversionASegundos} segundos.`);

//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje que muestre el porcentaje de dicho número.

// let numero = prompt("Ingrese un numero");
// let porcentaje = prompt("Ingrese un porcentaje");

// let resultadoPorcentaje = (numero * porcentaje) / 100;

// console.log(`El ${porcentaje}% de ${numero} es: ${resultadoPorcentaje}`);

//Funciones
//declaracion, asignación e invocación (llamada)
//sintaxis
//arrow function

//una función es un bloque de código que se puede reutilizar y es privado del afuera

//palabra reservada - nombre - parametretros - scope
//funcion sin parametros
// const saludar = () => {
//   let saludo = "Hola!";
//   console.log(saludo);
// };

// const despedir = () => {
//   console.log("Chau!");
// };

//Invocar una función:
// saludar();

//palabra reservada - nombre (verbo) - parametretros - scope
//funcion con parametros (parametro por defecto)
// const comer = (comida = "nada") => {
//   console.log(`Estoy comiendo ${comida}.`);
// };

// // comer("ravioles");
// comer("pancho");
// comer("otro pancho");
// comer("un tercer pancho");

// const cambiarme = (parteArriba, parteAbajo) => {
//   let outfit = `Mi outfit esta hecho por ${parteArriba} y ${parteAbajo}`;
//   return outfit;
// };

// let outfit = cambiarme("remera", "pantalon");

// console.log(outfit);

//Crea dos funciones, la primera, debe retornar un string que concatene un nombre y un apellido pedidos por parametros y la otra, que le agregue a ese nombre ¡Hola {nombre completo}!

//1° función
const crearNombreCompleto = (nombre, apellido) => {
  let nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
};

//2° función
const saludar = (nombreCompleto) => {
  let saludo = `¡Hola ${nombreCompleto}!`;
  return saludo;
};

//Invocación de primer función
let nombreCompletoCreado = crearNombreCompleto("Gabriel", "Alberini");

//Invocación de la segunda función
let saludo = saludar(nombreCompletoCreado);
console.log(saludo);

/*
Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos
*/

const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(sumar(1, 2));

// let resultado = sumar(1, 2);
// console.log(resultado);
