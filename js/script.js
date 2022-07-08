/* BOTÃO DE PESQUISA */

let pokemonName = null;
const btnSearch = document.getElementById("btn-search");

/* EXECUTA O FATCH COM VALOR DA PESQUISA */

findPokemon = () => {
  errorClear();
  pokemonName = document.getElementById("pokemonName").value;
  resultSearch(pokemonName.toLowerCase());
  limpaPesquisa();
};

/* LIMPA PESQUISA */

limpaPesquisa = () => {
  pokemonName = document.getElementById("pokemonName").value = "";
};

/* EVENTO DE CLICK DO BOTÃO */

btnSearch.addEventListener("click", findPokemon);

/* ENVIA COM ENTER */

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#btn-search");
    btn.click();
  }
});

/* LIMPA MENSAGEM DE ERRO */

errorClear = () => {
  document.getElementById("alert-mensage").innerText = "";
};

/* MENSAGEM DE ERRO */

errorMensage = () =>
  (document.getElementById("alert-mensage").innerText =
    "Nome do pokemon inválido ou incorreto !");

/* BUSCA NA API */

const resultSearch = (pokemonName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      cardGen();
      /* document.getElementById("id").innerText = data["id"]; */
      /* NOME */
      document.getElementById("infs").innerText = data["name"];
      /* IMAGEM */
      let img = data["sprites"]["other"]["official-artwork"]["front_default"];
      document.getElementById("img-pokemon").setAttribute("src", img);
    })
    .catch((error) => errorMensage());

/* GERAR CARD */

const contentCad =
  '<div class="base-card"><div class="main-content-card"><div class="pokemon-name"><p id="infs"></p></div><img src="" alt="" id="img-pokemon" /></div>';

cardGen = () => {
  document.getElementById("card-gerate").innerHTML = contentCad;
};

/* 
<div class="base-card">
  <div class="main-content-card">
    <div class="pokemon-name">
      <p id="infs"></p>
    </div>
  <img src="" alt="" id="img-pokemon" />
</div>
 */
