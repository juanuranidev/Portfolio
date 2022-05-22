import React, { useState } from 'react';
import PokeballImage from "./img/PokeballImage.svg"
import './_Pokeball.scss';

const Pokeball = () => {
const [pokemon, setPokemon] = useState();

  const handleGetPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (90 - 0 + 1) + 0)}`)
    .then(resp => resp.json())
    .then(resp => setTimeout(() => setPokemon(resp), 1000))
  }

  return (
    <div className='pokeball'>
      {pokemon
      ? <div className='pokeball_div'>
          <img src={pokemon.sprites.front_shiny} className='pokeball_div_img' onClick={() => setPokemon()} />
          <p className='pokeball_div_p'>¡Encontraste un {pokemon.name}!</p>
        </div>
      : <img src={PokeballImage} className='pokeball_img' onClick={handleGetPokemon} />}
  </div>
  );
}

export default Pokeball;