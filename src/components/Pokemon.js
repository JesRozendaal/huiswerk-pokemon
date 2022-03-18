import React, {useState, useEffect} from 'react';
import axios from "axios";

const Pokemon = ({endpoint}) => {
    const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`)
                setPokemon(result.data);
            }catch (e) {
                console.error(e);
            }
        }

        fetchData();
    },[]);

    return (
        <div>
            {pokemon &&
            <>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={`The pokemon ${pokemon.name}`}/>
                <p><strong>Moves:</strong> {pokemon.moves.length}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Abilities:</strong></p>
                <ul>
                    {pokemon.abilities.map((abilityNames) => {
                        return(<li key={abilityNames.slot}>
                                {abilityNames.ability.name}
                            </li>
                        )
                    })
                    }
                </ul>
            </>
            }

        </div>
    );
};

export default Pokemon;