import React, { useState } from 'react';
import PokeballImage from './img/pokeball.png';
import './_Pokeball.scss';

const Pokeball = () => {
const [data, setData] = useState()

  const handleGetPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (90 - 0 + 1) + 0)}`)
    .then(resp => resp.json())
    .then(resp => setData(resp))
  }

  return (
    <div className='pokeball'>
    {data
    ? <div className='pokeball_div'>
        <img src={data.sprites.front_shiny} className='pokeball_div_img' onClick={() => setData()} />
        <p className='pokeball_div_p'>¡Encontraste un {data.name}!</p>
      </div>
    : <img src={PokeballImage} className='pokeball_img' onClick={() => handleGetPokemon()} />      
    }
  </div>
  )
}

export default Pokeball;