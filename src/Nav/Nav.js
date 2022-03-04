import React, { useState } from 'react';
import './_Nav.scss';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <nav>
        <span className='fas fa-bacon fa-2x icon'/>
        <ul className={openMenu===true ? 'active' : null}>
            <li onClick={() => setOpenMenu(false)}><a href='#about'>Sobre mi</a></li>
            <li onClick={() => setOpenMenu(false)}><a href='#skills'>Habilidades</a></li>
            <li onClick={() => setOpenMenu(false)}><a href='#projects'>Proyectos</a></li>
            <li onClick={() => setOpenMenu(false)}><a href='#contact'>Contacto</a></li>
            <span className='fas fa-times fa-2x closeMenu' onClick={() => setOpenMenu(false)} />
        </ul>
        <span className='fas fa-bars fa-2x openMenu' onClick={() => setOpenMenu(true)} />
    </nav>
  )
}

export default Nav;