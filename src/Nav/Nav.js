import React from 'react'

const Nav = () => {
  return (
    <nav>
        <a href='index.html' className='icono'><i className='fas fa-bacon fa-2x'></i></a>
        <ul id='nav'>
            <li className='seccion'><a href='#main'>Sobre mi</a></li>
            <li className='seccion'><a href='#habilidades'>Habilidades</a></li>
            <li className='seccion'><a href='#proyectos'>Proyectos</a></li>
            <li className='seccion'><a href='#contacto'>Contacto</a></li>
            <i className='fas fa-times fa-2x cerrarMenu' id='botonParaCerrarMenu'></i>
        </ul>
        <span className='fas fa-bars fa-2x abrirMenu' id='botonParaMostrarMenu'/>
    </nav>
  )
}

export default Nav