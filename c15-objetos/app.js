// Datos compuesto: datos que guardan una colección de datos. Se acceden al mismo mediante la posición

// const colores = ["azul", "rojo"];

// //mostrando x elemento en consola
// console.log(colores[1]);

// console.log(colores);

// let nombre = new String("Hola");
// let nombre2 = "Hola";

// console.log(nombre);
// console.log(nombre2);

// Objetos => colecciones de pares clave-valor

const personaGabriel = {
  //Propiedad => claves/valores
  nombre: "Gabriel",
  edad: 28,
  mascota: ["loli", "bobi"],
  tengoCarnet: false,
  idiomasAprendidos: null,
};

// const arrayGabriel = ["Gabriel", 28, ["loli", "bobi"]]

//Mostrar objeto
// console.log(personaGabriel);

//Ver propiedades por notación de punto
// console.log(personaGabriel.nombre);

//Guardar prop en variable
// let nombreObj = personaGabriel.nombre;
// console.log(nombreObj);

// //Notación de corchetes
// console.log(personaGabriel["idiomasAprendidos"]);

// let propiedad = "nombre";

// console.log(personaGabriel[propiedad]);
// console.log(personaGabriel.propiedad);

// const validarPropiedad = (obj, prop) => {
//   if (obj[prop]) {
//     console.log("existe");
//   } else {
//     console.log("no existe");
//   }
// };

// validarPropiedad(personaGabriel, "domicilio");

// const rosalia = {
//   nacionality: "Spanish",
//   age: 30,
//   job: "Singer",
// };

// console.log(rosalia);

// rosalia.favColor = "Pink";

// console.log(rosalia);

// rosalia["favorite ice cream"] = "Dulce de leche";
// // rosalia.favoriteIceCream = "Anana";

// console.log(rosalia);

// delete rosalia.favColor;

// console.log(rosalia);

// //Iterar un objeto
// for (let prop in rosalia) {
//   console.log(`${rosalia[prop]}`);
// }

// Lista de productos

const productos = [
  {
    img: "https://http2.mlstatic.com/D_Q_NP_649509-MLA52555218562_112022-AB.webp",
    nombre: "Televisor",
    precio: 47999,
    envioGratis: "Envio gratis",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "https://http2.mlstatic.com/D_Q_NP_649509-MLA52555218562_112022-AB.webp",
    nombre: "Celular",
    precio: 20000,
    envioGratis: "Envio gratis",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "https://http2.mlstatic.com/D_Q_NP_649509-MLA52555218562_112022-AB.webp",
    nombre: "Carpa",
    precio: 1000,
    envioGratis: "Envio gratis",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const $contenedor = document.getElementById("contenedor");

for (let i = 0; i < productos.length; i++) {
  // console.log(productos[i].nombre);

  $contenedor.innerHTML += `<div class="caja-producto">
  <img
    src="${productos[i].img}"
    alt="imagen de producto"
  />
  <p>${productos[i].nombre}</p>
  <p>$${productos[i].precio}</p>
  <p>${productos[i].envioGratis}</p>
</div>
</div>`;
}

/*
01 - sobre mi
Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi
*/

const sobreMi = {
  nombre: "Gabriel",
  apellido: "Alberini",
  edad: 28,
};

console.log(sobreMi);
