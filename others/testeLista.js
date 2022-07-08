const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
const resultSearch = () => {
  const pokemonPromises = [];

  for (let i = 1; i <= 900; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i)).then((response) => response.json())
    );
  }

  Promise.all(pokemonPromises).then((pokemons) => {
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
      const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

      accumulator += `
      <li>${pokemon.id}.${pokemon.name}.(${types.join(" | ")})</li>
      `;
      return accumulator;
    }, "");
    const ul = document.getElementById("PokemonList");
    ul.innerHTML = liPokemons;
  });
};

resultSearch();
