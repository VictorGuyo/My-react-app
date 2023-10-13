function NavBar({ handleClick, pokemonList }) {
  const pikachu = "pikachu";
  return (
    <div>
      {pokemonList.map((poke, index) => (
        <button key={poke.name} onClick={() => handleClick(index)}>{poke.name}
        </button>
       
      ))}
    </div>

    // pokemon.name = pokemon.imgSrc

    // <div>
    //   {pokemonIndex > 0 ? (
    //     <button onClick={handleClickLess}>Précédent</button>
    //   ) : (
    //     null
    //   )}

    //   {pokemonIndex < pokemonList.length - 1 ? (
    //     <button onClick={handleClick}>Suivant</button>
    //   ) : (
    //     null
    //   )}
    // </div>
  );
}

export default NavBar;
