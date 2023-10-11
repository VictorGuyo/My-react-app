function NavBar({ handleClick, pokemonList }) {
    
  return (
    <div>
      {pokemonList.map((callback, index) => (
        <button key={callback.name} 
         onClick= {() => handleClick(index)}>{callback.name}
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
