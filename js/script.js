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
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      /* document.getElementById("id").innerText = data["id"]; */
      document.getElementById("infs").innerText = data["name"];
      let img = data["sprites"]["other"]["official-artwork"]["front_default"];
      document.getElementById("img-pokemon").setAttribute("src", img);
    })
    .catch((error) => console.log(error));
