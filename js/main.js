let pokemonContainer = document.querySelector(".poke-container");

const pokemons = []

function fetchPokemon(id) {
    console.log("entro a fetchPokemon")

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            
            createPokemon(data)

        });
}

function llamarPokemon(number) {
    
        for (let i = 1; i <= number; i++) {
            fetchPokemon(i);
        }
}

const createPokemon = (pokemon) => {
    const cardPokemon = document.createElement('div')
cardPokemon.className = "card m-3"
cardPokemon.innerHTML = `
    <div class="card-body">
            <img src="${ pokemon.sprites.front_default }">
            <h5 class="card-title txt-center">${pokemon.name}</h5>
            <p class="card-text txt-center">#${pokemon.id.toString().padStart(3, 0)}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
                <a> Ver mas...</a>
        </div>
    </div>
`
        pokemonContainer.appendChild(cardPokemon);
}

llamarPokemon(151)