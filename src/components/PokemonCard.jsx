import React from "react";
import PropTypes from "prop-types";
import styles from './MyComponent.module.css'



  const PokemonCard = ({pokemon}) => {

    return (
      <figure className={styles.styles}>
       {
       pokemon.imgSrc !== undefined ? (
       <img className={styles.card} src={pokemon.imgSrc} alt={pokemon.name} /> 
       ) : (
       <p>????</p>
       )
       }
        <figcaption>{pokemon.name}</figcaption>
    </figure>

    );
      };

      PokemonCard.propTypes = {
        pokemon: PropTypes.shape
        ({
          name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
        }).isRequired
      }

export default PokemonCard;