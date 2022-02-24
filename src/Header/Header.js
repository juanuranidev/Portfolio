import React from 'react';

const Header = () => {
  return (
    <header>
        <div className='contenido'>
            <h1>Juan Urani</h1>
            <h2>Desarrollador Frontend</h2>
            <a href='#main'><span className='fas fa-chevron-down fa-4x flecha' id='flecha'/></a>
        </div>
    </header>
  )
}

export default Header;