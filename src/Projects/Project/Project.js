import React from 'react';
import './_Project.scss';

const Project = ({imgSource, imgAlt, title, subTitle, image1, image2, image3, repository, demo}) => {
  return (
    <div className='project'>
        <div className='project_div'>
            <h3 className='project_h3'>{title}</h3>
            <h4 className='project_h4'>{subTitle}</h4>
            <div className='technologies'>
                <img className='technologies_img' src={image1.src} />
                <img className='technologies_img' src={image2.src} />
                <img className='technologies_img' src={image3.src} />
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
        <img className='project_img' src={imgSource} alt={imgAlt} />
    </div>
  )
}

export default Project;