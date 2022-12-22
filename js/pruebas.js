const cardPokemon = document.createElement('div')
cardPokemon.className = "col-lg-4 col-12"
cardPokemon.innerHTML = `
<div class="card cards">

    <div class="card-body">
            <h5 class="card-title txt-center">${pokemon.name}</h5>
            <p class="card-text txt-center">#${pokemon.id.toString().padStart(3, 0)}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
                <a> Ver mas...</a>
        </div>
    </div>
</div>`

cardPokemon.appendChild()