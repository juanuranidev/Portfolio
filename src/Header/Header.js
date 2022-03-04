import React, { useState } from 'react';
import './_Header.scss';

const Header = () => {
  const [data, setData] = useState()

  const handleGetPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (90 - 0 + 1) + 0)}`)
    .then(resp => resp.json())
    .then(resp => setData(resp))
    .finally(() => console.log(data))
  }

  return (
    <header>
        <div className='content'>
            <h1>Juan Urani</h1>
            <h2>Desarrollador Frontend</h2>
            <a href='#about'><span className='fas fa-chevron-down fa-4x'/></a>
           {data
           ? <img src={data.sprites.front_shiny}/>
           : <div class="box child-to-body">
           <img src="pokeBannerGimp.png" width="250" alt=""/>
           <div class="poke_box" onClick={() => handleGetPokemon()}>
               <div class="pokeball">
                   <div class="pokeball__button"></div>
               </div>   
           </div>
           <p class="has-text-centered" >Hover Over Me!!!</p>
       </div>
           }
           


        </div>
    </header>
  )
}

export default Header;