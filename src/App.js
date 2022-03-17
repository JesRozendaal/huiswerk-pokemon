import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

   const [pokemon, setPokemon] = useState('');

   useEffect(() => {
       async function fetchData() {
           try {
               const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff')
               console.log(result.data);
               setPokemon(result.data);
           }catch (e) {
               console.error(e);
           }
       }

       fetchData();
   },[]);

    return (
    <>
        {pokemon &&
            <>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
                <p><strong>Moves:</strong> {pokemon.moves.length}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Abilities:</strong></p>
                <ul>
                    <li>
                        {pokemon.abilities[0].ability.name}
                    </li>
                    <li>
                        {pokemon.abilities[1].ability.name}
                    </li>
                    <li>
                        {pokemon.abilities[2].ability.name}
                    </li>
                </ul>
            </>
        }

    </>
  );
}

export default App;
