import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {

    const [pokemon, setPokemon] = useState(null);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon')

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`)
                console.log(result.data);
                setPokemon(result.data);
            }catch (e) {
                console.error(e);
            }
        }

        fetchData();
    },[endpoint]);

    return (
      <div>
          {pokemon &&
          <>
              <button
                  type="button"
                  disabled={pokemon.previous === null}
                  onClick={() => setEndpoint(pokemon.previous)}
              >
                  Vorige
              </button>
              <button
                  type="button"
                  onClick={() => setEndpoint(pokemon.next)}
              >
                  Volgende
              </button>
              <div>
                  {pokemon &&
                  pokemon.results.map((pokemonCard) => {
                      return <Pokemon key={pokemonCard.name} endpoint={pokemonCard.url}/>
                  })}
              </div>
          </>
          }
      </div>
);
}

export default App;
