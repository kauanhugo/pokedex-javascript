const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map((pokemon) => `
    <li class="pokemon ${pokemon.type}">
          <span class="number">#00${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">  
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(" ")}
            </ol>
            <div class="pokemon-photo">
            <div class="mask pokeball-mask"></div>
            <div class="shadow"></div>
            <img src="${pokemon.photo}" alt="${pokemon.name}" class="pokemon-image">
            
        </div>
        
    </li>`).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
});



