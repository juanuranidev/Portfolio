import React, { useState } from 'react';
import PokeballImage from './img/pokeball.png'
import './_Pokeball.scss';

const Pokeball = () => {
const [data, setData] = useState()
const [data2, setData2] = useState(false)

  const handleGetPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (90 - 0 + 1) + 0)}`)
    .then(resp => resp.json())
    .then(resp => setData(resp))
    .finally(() => setData2(true))
  }


  return (<>
      {data2===true
      ? <img src={data.sprites.front_shiny}/>
      : <img src={PokeballImage} className='pokeball' onClick={() => handleGetPokemon()} />}
    </>
  )
}

export default Pokeball;