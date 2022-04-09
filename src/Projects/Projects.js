import React from 'react';
import Project from './Project/Project';
import Freres from './Img/Freres.png'
import TiendaElectronica from './Img/TiendaElectronica.png';
import CryptoHunter from './Img/CryptoHunter.png';
import BuildYourPc from './Img/BuildYourPc.png';
import './_Projects.scss';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='projects_h2'>Proyectos</h2>
      <div className='projects_div'>
        <Project 
          imgSource={Freres} 
          imgAlt={'Imágen de la página de una tienda de ropa'} 
          title={'Freres'} 
          tecnology1={'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'} 
          tecnology2={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} 
          tecnology3={'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'} 
          repository={'https://github.com/juanuranidev/Freres'} 
          demo={'https://freres.netlify.app/'} />
        <Project 
          imgSource={TiendaElectronica} 
          imgAlt={'Imágen de la página de una tienda electrónica'} 
          title={'Tienda electrónica'} 
          tecnology1={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} 
          tecnology2={'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'} 
          tecnology3={'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase'} 
          repository={'https://github.com/juanuranidev/tiendaelectronica'} 
          demo={'https://tiendaelectronica.netlify.app/'} />
        <Project 
          imgSource={BuildYourPc} 
          imgAlt={'Imágen de la página de construye tu propia pc'} 
          title={'Construye tu pc'} 
          tecnology1={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} 
          tecnology2={'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'} 
          tecnology3={'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase'}  
          repository={'https://github.com/juanuranidev/BuildYourPc'} 
          demo={'https://buildyourpc.netlify.app/'} />
        <Project 
          imgSource={CryptoHunter} 
          imgAlt={'Imágen de la página de criptomonedas'} 
          title={'Crypto Hunter'} 
          tecnology1={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} 
          tecnology2={'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'} 
          tecnology3={'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase'} 
          repository={'https://github.com/juanuranidev/cryptoapp'} 
          demo={'https://cryptohunterapp.netlify.app/'} />
      </div>
    </section>
  )
}

export default Projects;