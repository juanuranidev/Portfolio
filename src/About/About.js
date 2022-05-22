import React from 'react';
import './_About.scss';

const About = () => {
  return (
    <main className='about' id='about'>
      <div>
        <h2 className='about_h2'>Sobre mi</h2>
        <p className='about_p'>Hola, mi nombre es Juan y tengo 21 años. Soy un desarrollador Frontend que vive en Córdoba, Argentina. Comencé mi carrera como desarrollador web en el 2021 gracias a Coder House.</p>
        <p className='about_p'>Mi objetivo a corto plazo es seguir aprendiendo y convertirme en un desarrollador experto en Frontend mientras que mi ojetivo a largo plazo es aprender tanto Backend, para convertirme en un desarrollador Full-Stack, como también algoritmos y estructuras de datos.</p>
        <h3 className='about_h3'>Mi camino</h3>
        <div className='about_experience'>
        <div className='experience' style={{marginTop: "1rem", marginLeft:"0.2rem"}}>
          <div className='experience_div'>
            <h3 className='experience_div_h3'>AIT Solutions</h3>
            <h3 className='experience_div_h3'>Frontend Developer</h3>
            <p className='experience_div_p'>Abril 2022 - Actualidad</p>
            <a href='https://aitsolutions.com.ar/' target="_blank"><img className='experience_div_img' src="https://aitsolutions.com.ar/images/logoheader.png" /></a>
          </div>
          <hr className='experience_line'/>
        </div>
        <hr className='about_experience_middle_line'/>
        <div className='experience' style={{marginTop: "5rem", marginRight: "0.2rem"}}>
          <hr className='experience_line'/>
          <div className='experience_div'>
            <h3 className='experience_div_h3'>Omari Agency</h3>
            <h3 className='experience_div_h3'>Founder and CEO</h3>
            <p className='experience_div_p'>Mayo 2022 - Actualidad</p>
            <a href='https://aitsolutions.com.ar/' target="_blank"><img className='experience_div_img' src="https://aitsolutions.com.ar/images/logoheader.png" /></a>
          </div>
        </div>
        
        </div>
        <p className='about_p'>Próximamente más desafíos...</p>
      </div>
    </main>
  );
}

export default About;