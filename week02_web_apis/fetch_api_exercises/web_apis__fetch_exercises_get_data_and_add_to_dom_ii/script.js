const pokeCont = document.querySelector('#pokemon-container');

const fetchPokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
};

const renderPokemon = async () => {
    // Loop through the first 150 Pokémon IDs
    for (let i = 1; i <= 150; i++) {
        const pokemon = await fetchPokemon(i);
        if (pokemon) {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add(
                'bg-white',
                'rounded-lg',
                'shadow-md',
                'p-4',
                'flex',
                'flex-col',
                'items-center',
                'text-center'
            );

            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemon.sprites.front_default;
            pokemonImage.alt = pokemon.name;
            pokemonImage.classList.add('mb-4');

            const pokemonName = document.createElement('h2');
            pokemonName.textContent =
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

            const pokemonInfo = document.createElement('p');
            pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
                .map((typeInfo) => typeInfo.type.name)
                .join(', ')}`;
            pokemonInfo.classList.add('text-gray-600');

            pokemonCard.appendChild(pokemonImage);
            pokemonCard.appendChild(pokemonName);
            pokemonCard.appendChild(pokemonInfo);

            pokeCont.appendChild(pokemonCard);
        }
    }
};

renderPokemon();
