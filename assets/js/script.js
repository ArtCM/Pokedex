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

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(renderPokemon).join("");
        pokemonList.innerHTML += newHtml;
        addPokemonClickHandlers();
    });
}

var pokemonStatus = document.querySelector(".appearpoke");

function displayPokemonInfo(pokemon){
    const statusContent = `
        <div class="${pokemon.type} poke__title">
            <h2>${pokemon.name}</h2>
            <div class="pokemon-status__exit"></div>
        </div>
        <div class="pokemon-status__header">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-status__types type ${pokemon.type}">
           <p class="">${pokemon.type}</p>
        </div>
        <div class="pokemon-status__body">
                ${pokemon.number}
        </div>
    `;
    pokemonStatus.innerHTML = statusContent;
    pokemonStatus.classList.remove("d-none");
    closeStatus();
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


function addPokemonClickHandlers() {
    const pokemonElements = document.querySelectorAll(".pokeclick");
    pokemonElements.forEach((element) => {
        element.addEventListener("click", () => {
            const pokemonName = element.querySelector(".name").textContent;
            const pokemonNumber = element.querySelector(".number").textContent;
            const pokemonType = element.querySelector(".type").textContent;
            const pokemonImage = element.querySelector(".pokephoto").src;
    
            const pokemon = {
                name: pokemonName,
                number: pokemonNumber,
                type: pokemonType,
                photo: pokemonImage,
            };
    
            displayPokemonInfo(pokemon);
        });
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



