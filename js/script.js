/* BOTÃO DE PESQUISA */

let pokemonName = null;

const btnSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    pokemonName = document.getElementById("pokemonName").value;
    resultSearch(pokemonName.toLowerCase());
  });

/* BUSCA NA API */

const resultSearch = (pokemonName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      return response.json();
    })
    .then((pokemon) => console.log(pokemon))
    .catch((error) => console.log(error));
