import React from 'react';
import './_Project.scss';

const Project = ({imgSource, imgAlt, title, tecnology1, tecnology2, tecnology3, repository, demo}) => {
  return (
    <div className='project'>
        <img className='project_img' src={imgSource} alt={imgAlt} />
        <h3 className='project_h3'>{title}</h3>
        <div className='technologies'>
            <img className='technologies_img' src={tecnology1} />
            <img className='technologies_img' src={tecnology2} />
            <img className='technologies_img' src={tecnology3} />
        </div>
        <div className='links'>
            <a className='links_a' href={demo} target='_blank' rel='noopener noreferrer'>
                <button className='links_a_button'>Demo<span className='links_a_button_span fas fa-link fa-2x'/></button>
            </a>
            <a className='links_a' href={repository} target='_blank' rel='noopener noreferrer'>
                <button className='links_a_button'>Repositorio<span className='links_a_button_span fab fa-github fa-2x'/></button>
            </a>
        </div> 
    </div>
  )
}

export default Project;