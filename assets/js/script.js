

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

    // forma reduzida de se fazer, se eu tenho somente 1 "return" posso puxar de forma direta igual foi feito com a function
fetch(url)
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToHtml(pokemon)
        }
    })
    .catch((error) => console.error(error))

    // .finally(() => console.log('Requisição Concluída!'))  - Pra validar se deu certo

    // 1 - Modo padrão de fazer sem encurtamentos
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (jsonBody) {
    //     console.log(jsonBody);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // })
    // .finally(function () {
    //     console.log('Requisição Concluída!');
    // })


    // 2 - Modo de fazer, encurtando somente o chamado de function
    // .then((response) => {
    //     return response.json();
    // })
    // .then((jsonBody) => {
    //     console.log(jsonBody);
    // })
    // .catch((error) => {
    //     console.error(error);
    // })
    // .finally(() => {
    //     console.log('Requisição Concluída!');
    // })


