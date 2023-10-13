import "../src/App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handleClick = (index, poke) => {
    setPokemonIndex(index);
    poke.name === "pikachu" && alert("pika pika");
    pokemonList[index].name === "pikachu" && alert("pika piko");
    index===3 && alert("pika piki");
    index===3 ? alert("pikachuuuu"): null;
    index===3 ? alert("Salut Anaëlle :) "): null;
  };

  useEffect(() => {
    alert("Salut les Quickos");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar handleClick={handleClick} pokemonList={pokemonList} />
    </div>
  );
}

export default App;
