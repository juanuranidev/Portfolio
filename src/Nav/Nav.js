import React from 'react';
import './_Nav.scss';

const Nav = () => {
  return (
    <nav>
        <a href='index.html' className='icon'><span className='fas fa-bacon fa-2x'/></a>
        <ul>
            <li><a href='#about'>Sobre mi</a></li>
            <li><a href='#skills'>Habilidades</a></li>
            <li><a href='#projects'>Proyectos</a></li>
            <li><a href='#contact'>Contacto</a></li>
            <i className='fas fa-times fa-2x closeMenu'></i>
        </ul>
        <span className='fas fa-bars fa-2x openMenu'/>
    </nav>
  )
}

export default Nav;