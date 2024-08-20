const fetchAllPokemon = async () => {
    const pokemonArray = [];
    for (let i = 1; i <= 150; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemonArray.push(data);
    }
    return pokemonArray;
};

const fetchSinglePokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
};

export { fetchAllPokemon, fetchSinglePokemon };
