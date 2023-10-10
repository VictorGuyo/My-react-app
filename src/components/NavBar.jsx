function NavBar({ handleClick, handleClickLess, pokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickLess}>Précédent</button>
      ) : (
        null
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : (
        null
      )}
    </div>
  );
}

export default NavBar;
