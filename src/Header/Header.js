import React from 'react';
import Pokeball from '../Pokeball/Pokeball';
import './_Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_div'>
          <h1 className='header_div_h1'>Juan Urani</h1>
          <h2 className='header_div_h2'>Desarrollador Frontend</h2>
          <Pokeball/>
      </div>
      <a href='#about' className='header_a'><span className='fas fa-chevron-down fa-4x'/></a>     
    </header>
  )
}

export default Header;