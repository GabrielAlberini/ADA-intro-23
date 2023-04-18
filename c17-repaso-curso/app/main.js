const $contenedor = document.getElementById("cont-personajes-js");

//Petición HTTP a la API de Rick y Morty con fetch
//promesa
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const personajes = data.results; //array con personas

    // array => colección de datos indexados
    for (let i = 0; i < personajes.length; i++) {
      const personaje = personajes[i];

      $contenedor.innerHTML += `
      <div class="personaje">
      <div>
        <img
          src="${personaje.image}"
          alt="foto de personaje"
        />
      </div>
      <h4>${personaje.name}</h4>
      <h5>Género: ${personaje.gender}</h5>
      <h5>Estado: ${personaje.status}</h5>
      <h5>Especie: ${personaje.species}</h5>
      </div>`;
    }
  });
