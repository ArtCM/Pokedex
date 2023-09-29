const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 9
let offset = 0;

const maxRecords = 151

function renderPokemon(pokemon) {
    return`
        <li class="pokemon pokeclick ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>
            <img class="pokephoto" src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        </li>
    `;
}

function closeStatus() {
    const exitButtons = document.querySelectorAll(".pokemon-status__exit");

    exitButtons.forEach((exitButton) => {
        exitButton.addEventListener("click", () => {
            const appearpoke = document.querySelector(".appearpoke");
            appearpoke.classList.add("d-none");
        });
    });
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(renderPokemon).join("");
        pokemonList.innerHTML += newHtml;
        addPokemonClickHandlers();
    });
}

window.addEventListener("load", () => {
    loadPokemonItens(offset, limit);
});

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }

    else{
        loadPokemonItens(offset, limit);
    }
    
});



