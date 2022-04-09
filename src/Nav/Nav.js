import React, { useState } from 'react';
import './_Nav.scss';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='nav'>
      <span className='nav_span fas fa-bacon fa-2x'/>
      <ul className={`nav_ul ${openMenu===true && 'active'}`}>
         <li onClick={() => setOpenMenu(false)} className='nav_ul_li'><a href='#about' className='nav_ul_li_a'>Sobre mi</a></li>
         <li onClick={() => setOpenMenu(false)} className='nav_ul_li'><a href='#skills' className='nav_ul_li_a'>Habilidades</a></li>
         <li onClick={() => setOpenMenu(false)} className='nav_ul_li'><a href='#projects' className='nav_ul_li_a'>Proyectos</a></li>
         <li onClick={() => setOpenMenu(false)} className='nav_ul_li'><a href='#github' className='nav_ul_li_a'>GitHub</a></li>
         <li onClick={() => setOpenMenu(false)} className='nav_ul_li'><a href='#contact' className='nav_ul_li_a'>Contacto</a></li>
         <span className='nav_ul_span fas fa-times fa-2x closeMenu' onClick={() => setOpenMenu(false)} />
      </ul>
      <span className='nav_span fas fa-bars fa-2x openMenu' onClick={() => setOpenMenu(true)} />
    </nav>
  );
}

export default Nav;