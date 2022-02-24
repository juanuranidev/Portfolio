import React from 'react';
import Project from './Project/Project';
import TiendaElectronica from './Img/tiendaelectronica.png';
import CryptoHunter from './Img/cryptohunter.png';
import TiendaGamer from './Img/tiendagamer.png';
import BuildYourPc from './Img/buildyourpc.png';

const Projects = () => {
  return (
    <section>
        <h2>Proyectos</h2>
        <div class="contenedorDeProyectos">
            <Project imgSource={TiendaElectronica} imgAlt={'Imágen de la página de una tienda electrónica'} title={'Tienda electrónica'} tecnology1={'fab fa-react fa-2x react'} tecnology2={'fab fa-sass fa-2x sass'} tecnology3={'fas fa-fire fa-2x firebase'} repository={'https://github.com/juanuranidev/tiendaelectronica'} demo={'https://tiendaelectronica.netlify.app/'} />
            <Project imgSource={CryptoHunter} imgAlt={'Imágen de la página de criptomonedas'} title={'Crypto Hunter'} tecnology1={'fab fa-react fa-2x react'} tecnology2={'fab fa-sass fa-2x sass'} repository={'https://github.com/juanuranidev/cryptoapp'} demo={'https://cryptohunterapp.netlify.app/'} />
            <Project imgSource={TiendaGamer} imgAlt={'Imágen de la página de una tienda gamer'} title={'Tienda Gamer'} tecnology1={'fab fa-js-square fa-2x javascript'} tecnology2={'fab fa-sass fa-2x sass'} repository={'https://github.com/juanuranidev/tiendagamer'} demo={'https://tiendagamer.netlify.app/'} />
            <Project imgSource={BuildYourPc} imgAlt={'Imágen de la página de construye tu propia pc'} title={'Construye tu pc'} tecnology1={'fab fa-react fa-2x react'} tecnology2={'fab fa-sass fa-2x sass'} tecnology3={'fas fa-fire fa-2x firebase'} repository={'https://github.com/juanuranidev/BuildYourPc'} demo={'https://buildyourpc.netlify.app/'} />
        </div>
    </section>
  )
}

export default Projects;