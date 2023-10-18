// EN JAVASCRIPT PASOS A SEGUIR.
// •Crear una constante que indique la URL de la API donde tomaremos la información.
// •Seleccionar el input de búsqueda.
// •Seleccionar el contenedor donde irá la información recolectada de la API.
// •Crear la función principal asíncrona,
// •Crear una constante donde el valor que el usuario ponga en el input, sea captado tanto en mayúsculas o minúsculas. 
// •Hacer un try (en donde pondremos el código si la petición resulta exitosa) y un catch (si la petición ocurre algo erroneo.)

// HACIENDO LA PETICION ASYNC AWAIT
// •Crear constante await que permita concatenar la URL de la API con el pokemon escrito por el usuario en el input.
// •Convertir a formato json dicha información
// •Insertar en el HTML los datos específicos que queremos poner en pantalla. Usar innerHTML

const URL = "https://pokeapi.co/api/v2/pokemon/"

const inputPokemon = document.getElementById("pokemon")
const pokemonContainer = document.getElementById("pokemonContainer")
const buttonSearch = document.getElementById("btn")

async function searchPokemon() {
    const searchedPokemon = inputPokemon.value.toLowerCase();

    try {
        const response = await fetch(URL + searchedPokemon)
        const data = await response.json();
      
        pokemonContainer.innerHTML = 
        `
            <h2>${data.name.toUpperCase()}</h2>
            <div class="images__container">
            <p>Normal<img src="${data.sprites.front_default}"></p>
            <p>Shiny<img src="${data.sprites.front_shiny}"></p>
            </div>
            <p>Number: ${data.id}</p>
            <p>Height: ${data.height /10}m</p>
            <p>Weight: ${data.weight /10}kg</p>
        `

    } catch (error) {
        error = "An error has ocurred while searching the pokemon"
        pokemonContainer.innerHTML = `<p>${error}</p>`
    }
}

const delateValue = () =>{
    inputPokemon.value= "";
}

buttonSearch.addEventListener("click", () =>{
    searchPokemon();
})

inputPokemon.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        searchPokemon();
    };
})
