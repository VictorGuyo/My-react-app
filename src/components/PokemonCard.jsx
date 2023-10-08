const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  function PokemonCard({pokemon}) {
    const imageSrc = pokemon.imgSrc ? pokemon.imgSrc : '???';

    return <figure>
        <img src={imageSrc}
        alt={pokemon.name} />
        <figcaption>{pokemon.name}</figcaption>
    </figure>;
}

export default PokemonCard;