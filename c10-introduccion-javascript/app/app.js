//Sintáxis

//Hola soy un comentario de una sola linea

/*
Hola soy un comentario
multi linea
*/

//Variables en Javascript
//Una variable es un espacio en la memoria de mi pc destinado a guardar un dato.

//palabra reservada = let | nombre de la variable | asignación

//Declaración y asignación
let apellido = "Alberini";
let nombre = "Gabriel";

/*
Buenas practicas para declarar variables:
  - SIEMPRE las variables empiezan en minúscula
  - Luego si el nombre la variable tiene más de una palabra, cada palabra empieza en mayúscula, es decir: cammelcase
  - Los nombres de variables no deben comenzar ni con números ni con puntos. Los únicos caracteres que se pueden utilizar son $ y _
*/

//cammelcase
let telefono = 123456789;
let fechaDeNacimiento = "28 de junio de 1994";

//Ejemplo de un mal nombrado de variable
// let 1pelicula = "Titanic";
//let .saludo = "Hola";

//Elemento HTML
let $container = "Elemento de HTML";

//Dato privado
let _contrasenia = "kfgjsd434fmmmcm034";

//Consola
// console.log(telefono);

//Declarar e inicializar => es decir: "voy a usar una varible que se llama heladoFavorito y que guarda el valor Kinotos a Whisky"
let heladoFavorito = "Kinotos a Whisky";
console.log(heladoFavorito);

//"voy a darle un nuevo valor a una variable ya existente"
//Reasignar
heladoFavorito = "Frutilla a la crema";
console.log(heladoFavorito);

//Concatenar => Unir texto
console.log("Al principio mi gusto favorito era: heladoFavorito");

//Interpolar => Unir texto normal, con datos guardados en variables
//Back stick => ctrl + alt + } tambien se puede con alt + 96
console.log(`Mi nuevo gusto favorito es: ${heladoFavorito}`);

//Tipos de datos:
//string => cadena de caracteres => letras y signos
//El dato va entre comillas, pueden simples o dobles
let variableDeTipoString = "Hola soy una variable de tipo string 6 !";

//tipo number => números, pueden ser, numeros enteros, decimales o negativos
//los datos number no llevan comillas
let numeroEntero = 9;
let numeroNegativo = -3;
let numeroDecimal = 1.4;

//tipo de dato undefinded => que aún no tiene valor
let variableUndefined;
console.log(variableUndefined);

//typeof => muestra de que tipo de dato es
let colorDeBicicleta = "negro";
console.log(typeof colorDeBicicleta);

//Operadores aritmeticos o operaciones matematicas (+ - * /)
let numeroUno = 1;
let numeroDos = 2;

console.log(numeroUno + numeroDos); //3
console.log(numeroUno - numeroDos); //-1
console.log(numeroUno * numeroDos); //2
console.log(numeroUno / numeroDos); //0.5

let numeroTres = "3";
let numeroCuatro = "4";

//Concatenando
console.log(numeroTres + numeroCuatro);

let fraseUno = "Hola";
let fraseDos = "Chau";

console.log(fraseUno + fraseDos);

//NaN => Not a number
console.log(fraseUno * fraseDos);

//prompt => sirve para guardar un dato desde el navegador, al dato se lo puede almacenar en una variable
// let nombreDesdePrompt = prompt("¿Como es tu nombre?");
// let apellidoDesdePrompt = prompt("¿Como es tu apellido?");
// console.log(
//   `El nombre ingresado por prompt fue ${nombreDesdePrompt} y el apellido fue: ${apellidoDesdePrompt}`
// );

/*
Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje en la consola que diga, "Hola {nombre} {apellido}, bienvenida a Ada".
Heladería

Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.
Lista de reproducción

Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".
Dirección completa

Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
Años perro

Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.
Minutos a segundos

Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.
*/

// let nombreEjercicio = prompt("¿Como es tu nombre?");
// let apellidoEjercicio = prompt("¿Como es tu apellido?");

// console.log(`Hola ${nombreEjercicio} ${apellidoEjercicio}, bienvenida a Ada`);

// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje por consola que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// let gustoDeHelado1 = prompt("¿Cual es su primer helado?");
// let gustoDeHelado2 = prompt("¿Cual es su segundo helado?");
// let gustoDeHelado3 = prompt("¿Cual es su tercero helado?");

// console.log(
//   `Aquí tiene su helado de ${gustoDeHelado1}, ${gustoDeHelado2} y ${gustoDeHelado3}`
// );

//Haz un programa que calcule la edad de un perro en años humanos y muestre el resultado por la consola

//1 año perruno = 7 años humanos

let edadDePerro = prompt("¿Cuantos años tiene tu perro?");
let edadConvertida = edadDePerro * 7;
console.log(`Tu perro tiene ${edadConvertida} años humanos`);
