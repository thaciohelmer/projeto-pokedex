/* BOTÃO DE PESQUISA */

let pokemonName = null;

const btnSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    errorClear();
    pokemonName = document.getElementById("pokemonName").value;
    resultSearch(pokemonName.toLowerCase());
  });

/* BUSCA NA API */

function errorClear() {
  document.getElementById("alert-mensage").innerText = "";
}

const resultSearch = (pokemonName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      /* document.getElementById("id").innerText = data["id"]; */
      document.getElementById("infs").innerText = data["name"];
      let img = data["sprites"]["other"]["official-artwork"]["front_default"];
      document.getElementById("img-pokemon").setAttribute("src", img);
    })
    .catch(
      (error) =>
        (document.getElementById("alert-mensage").innerText =
          "Nome do pokemon inválido ou incorreto !")
    );
