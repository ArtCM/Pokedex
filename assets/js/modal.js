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
        <div style="padding: 5px; border-radius: 0 0 15px 15px">
            <div class="pokemon-status__body">
                <div>
                    <h3 class="titleselect">Status</h3>
                </div>
                <div>
                    <h3>Habilidades</h3>
                </div>
            </div>
            <div class="pokemon__data-container">
                <div class="pokemon__data">
                    <div class="col-resp">
                        <p>
                            Number: ${pokemon.number}<br>
                            Weight: ${pokemon.weight}
                        </p>
                    </div>
                    <div class="col-resp">
                        <p>
                        </p>
                    </div>
                </div>
                <div class="pokemon__habilities d-none">
                    <div class="col-resp"><p>Number: ${pokemon.number}</p></div>
                    <div class="col-resp"></div>
                </div>
            </div>
        </div>
    `;
    pokemonStatus.innerHTML = statusContent;
    pokemonStatus.classList.remove("d-none");
    closeStatus();
}