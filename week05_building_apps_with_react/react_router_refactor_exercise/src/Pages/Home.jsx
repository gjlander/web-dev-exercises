import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../lib/pokemon';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const [allPokemon, setAllPokemon] = useState([]);
    useEffect(() => {
        fetchAllPokemon()
            .then((array) => setAllPokemon(array))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className='grid grid-cols-6 gap-6'>
            {allPokemon.map((p) => (
                <PokemonCard key={p.id} {...p} />
            ))}
        </div>
    );
};

export default Home;
