import "../src/App.css"

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const pokemonL = pokemonList[0];

function App() {
  return (
    <div>

        <PokemonCard pokemon = {pokemonL}/>
        
    </div>
);
}

export default App;
