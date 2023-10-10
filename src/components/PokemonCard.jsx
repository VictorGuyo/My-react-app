import React from "react";
import PropTypes from "prop-types";



  const PokemonCard = ({pokemon}) => {

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape
  ({
    name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
  }).isRequired
}

    return (
      <figure>
       {
       pokemon.imgSrc !== undefined ? (
       <img src={pokemon.imgSrc} alt={pokemon.name} /> 
       ) : (
       <p>????</p>
       )
       }
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
      };

export default PokemonCard;