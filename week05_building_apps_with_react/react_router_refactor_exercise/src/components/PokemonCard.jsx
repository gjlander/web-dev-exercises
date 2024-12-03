const PokemonCard = ({ name, sprites, id, types }) => {
    return (
        <div className='card glass  bg-base-100 shadow-xl'>
            <figure>
                <img src={sprites.front_default} alt={name} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <p>{`ID: ${id} | Type: ${types
                    .map((typeInfo) => typeInfo.type.name)
                    .join(', ')}`}</p>
            </div>
        </div>
    );
};

export default PokemonCard;
