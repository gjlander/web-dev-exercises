import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';

const fetchPokemon = async () => {
    const pokemonArray = [];
    for (let i = 1; i <= 150; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemonArray.push(data);
    }
    return pokemonArray;
};
const App = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        fetchPokemon()
            .then((array) => setPokemon(array))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <h1>Pokemon!</h1>
            {pokemon.map((p) => (
                <PokemonCard key={p.id} {...p} />
            ))}
        </div>
    );
};

export default App;
