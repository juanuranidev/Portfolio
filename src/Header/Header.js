import React from 'react';
import Pokeball from '../Pokeball/Pokeball';
import './_Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_div'>
        <h1 className='header_div_h1'>frontend developer.</h1>
        <h2 className='header_div_h2'>¡Hola! Me llamo Juan y son un frontend developer minimalista de Argentina.</h2>
        <a  className='header_div_a'href="#projects"><button className='header_div_a_button'>Ver mis trabajos</button></a>
        <div className='header_div_div'>
          <a className='header_div_div_a' href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Linkedin</a>
          <span className='header_div_div_span'>/</span>
          <a className='header_div_div_a' href="https://github.com/juanuranidev" target="_blank" rel="noreferrer">GitHub</a>
          <span className='header_div_div_span'>/</span>
          <a className='header_div_div_a' href="mailto:juanuranidev@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>
      </div>
      <Pokeball/>  
    </header>
  )
}

export default Header;