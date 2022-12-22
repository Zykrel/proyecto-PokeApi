let pokemonContainer = document.querySelector(".poke-container");

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then((data) => {
            if (id % 3 === 150) {
                createPokemon(data, true);
            } else {
                createPokemon(data, false);
            }
        });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);

    }
}

const createPokemon = (pokemon, flag) => {
    //crea la card
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    //crea el contenedor del sprite
    const spriteCointainer = document.createElement("div");
    spriteCointainer.classList.add("img-cointainer");

    //crea el sprite
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
    spriteCointainer.appendChild(sprite);

    //crea el numero del pokemon
    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    //crea el nombre del pokemon
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    //Append de la card
    card.appendChild(spriteCointainer);
    card.appendChild(number);
    card.appendChild(name);

    if (flag) {
        const conteiner = document.createElement("div");
        conteiner.classList.add("mt-3");
        conteiner.appendChild(card);

    } else {
        pokemonContainer.appendChild(card);
    }

}

fetchPokemons(20);