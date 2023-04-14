// string     =>     dato primitivo

// array      =>     datos complejos o compuestos
// objetos

//dato primitivo => se accede directamente al valor
let nombre = "Gabriel";

//dato complejo => para acceder al dato hay que referenciar la posición
//                 0        1
const colores = ["rojo", "azul"];
console.log(colores);

// aray => lista -> referenciar la posición
// objetos => colección de propiedades -> validar propiedad

const dias = ["lunes", "martes", "miercoles"];
// console.log(dias[2]);

const celular = {
  color: "negro",
  carcaza: "negra",
  camaras: 3,
};
// console.log(celular.camaras);

const ledZeppelin = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
  ],
};

//Ramble on
// console.log(ledZeppelin.albums[1].songs[2]);

// const frutas = [
//   {
//     fruta: "manzana",
//     color: ["rojo", "verde"],
//     precio: 200,
//     peso: 20,
//     marcas: ["julito", "anita", "pepito"],
//   },
//   {
//     fruta: "banana",
//     color: ["amarillo"],
//     precio: 500,
//     peso: 15,
//     marcas: ["julito", "anita"],
//   },
//   {
//     fruta: "repollo",
//     color: ["blanco", "morado"],
//     precio: 200,
//     peso: 20,
//     marcas: ["julito", "anita", "pepito"],
//   },
//   {
//     fruta: "mandarina",
//     color: ["naranja"],
//     precio: 400,
//     peso: 40,
//     marcas: ["julito"],
//   },
// ];

// //   i = indice
// for (let i = 0; i < frutas.length; i++) {
//   const $contenedor = document.getElementById("contenedor-frutas");

//   let mensaje = `El precio de ${frutas[i].fruta} vale $${frutas[i].precio} x kg.`;

//   $contenedor.innerHTML += `<h2>${mensaje}</h2>`;
// }

// JSON => JavaScript Object Notation

// fetch => herramienta nativa de javascript que nos permite realizar peticiones http (GET)

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const arrayPersonajes = data.results;
    console.log(arrayPersonajes);

    for (let i = 0; i < arrayPersonajes.length; i++) {
      const $contenedor = document.getElementById("contenedor-frutas");

      $contenedor.innerHTML += `<div>
      <h2>${arrayPersonajes[i].name.charAt(0).toUpperCase()}${arrayPersonajes[
        i
      ].name.slice(1)}</h2>
      </div>`;
    }
  });

// Averiguar endponint para optener todos los pokemones
// https://pokeapi.co/
