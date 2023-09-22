const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 9
let offset = 0;

const maxRecords = 151



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon pokeclick ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img class="pokephoto" src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')
        pokemonList.innerHTML += newHtml
    })
}

function carregarPokemon() {
    const pokemonElements = document.querySelectorAll('.pokeclick');
    pokemonElements.forEach((element) => {
      element.addEventListener('click', () => {
        const pokemonName = element.querySelector('.name').textContent;
        const pokemonNumber = element.querySelector('.number').textContent;
        const pokemonType = element.querySelector('.type').textContent;
        const pokemonImage = element.querySelector('.pokephoto').src;
  
        const pokemonStatus = document.querySelector('.appearpoke');
        const statusContent = `
          <h2>${pokemonName}</h2>
          <p>Número: ${pokemonNumber}</p>
          <p>Tipo: ${pokemonType}</p>
          <img src="${pokemonImage}" alt="${pokemonName}">
        `;
        pokemonStatus.innerHTML = statusContent;
        pokemonStatus.classList.remove('d-none');
      });
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

const qtdRecordNextPage = offset + limit

if (qtdRecordNextPage >= maxRecords){
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)

    setTimeout(carregarPokemon, 500);
}
else{
    loadPokemonItens(offset, limit)
}

    
})
  // Use setTimeout para atrasar a execução da função carregarPokemon
  setTimeout(carregarPokemon, 500);


