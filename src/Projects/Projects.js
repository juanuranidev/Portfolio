import React from 'react';
import { SkillsImages } from '../Sections/Skills/ImportImages'
import TiendaElectronica from '../Assets/Projects/TiendaElectronica.png';
import CryptoHunter from '../Assets/Projects/CryptoHunter.png';
import BuildYourPc from '../Assets/Projects/BuildYourPc.png';
import Project from './Project/Project';
import Freres from '../Assets/Projects/Freres.png'
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
          subTitle={'E-commerce de ropa'}
          image1={SkillsImages.find(skill => skill.name === "TypeScript")} 
          image2={SkillsImages.find(skill => skill.name === "React")} 
          image3={SkillsImages.find(skill => skill.name === "Sass")} 
          repository={'https://github.com/juanuranidev/Freres'} 
          demo={'https://freres.netlify.app/'} />
        <Project 
          imgSource={TiendaElectronica} 
          imgAlt={'Imágen de la página de una tienda electrónica'} 
          title={'Tienda electrónica'} 
          subTitle={'E-commerce de tegnología'}
          image1={SkillsImages.find(skill => skill.name === "React")} 
          image2={SkillsImages.find(skill => skill.name === "Sass")} 
          image3={SkillsImages.find(skill => skill.name === "Firebase")} 
          repository={'https://github.com/juanuranidev/tiendaelectronica'} 
          demo={'https://tiendaelectronica.netlify.app/'} />
        <Project 
          imgSource={BuildYourPc} 
          imgAlt={'Imágen de la página de construye tu propia pc'} 
          title={'Construye tu pc'} 
          subTitle={'Web para armar tu propia pc'}
          image1={SkillsImages.find(skill => skill.name === "React")} 
          image2={SkillsImages.find(skill => skill.name === "Sass")} 
          image3={SkillsImages.find(skill => skill.name === "Firebase")}  
          repository={'https://github.com/juanuranidev/BuildYourPc'} 
          demo={'https://buildyourpc.netlify.app/'} />
        <Project 
          imgSource={CryptoHunter} 
          imgAlt={'Imágen de la página de criptomonedas'} 
          title={'Crypto Hunter'} 
          subTitle={'Visualizador de criptomonedas'}
          image1={SkillsImages.find(skill => skill.name === "React")} 
          image2={SkillsImages.find(skill => skill.name === "Sass")} 
          image3={SkillsImages.find(skill => skill.name === "Firebase")} 
          repository={'https://github.com/juanuranidev/cryptoapp'} 
          demo={'https://cryptohunterapp.netlify.app/'} />
      </div>
    </section>
  )
}

export default Projects;