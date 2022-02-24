import React from 'react';
import './_Header.scss'

const Header = () => {
  return (
    <header>
        <div className='content'>
            <h1>Juan Urani</h1>
            <h2>Desarrollador Frontend</h2>
            <a href='#about'><span className='fas fa-chevron-down fa-4x'/></a>
        </div>
    </header>
  )
}

export default Header;