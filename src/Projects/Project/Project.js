import React from 'react';
import './_Project.scss';

const Project = ({imgSource, imgAlt, title, tecnology1, tecnology2, tecnology3, repository, demo}) => {
  return (
    <div className='project'>
                <img src={imgSource} alt={imgAlt} />
                <h3>{title}</h3>
                <div className='technologies'>
                    <p>Principalmente usado</p>
                    <div>
                        <span className={tecnology1}></span>
                        <span className={tecnology2}></span>
                        <span className={tecnology3}></span>
                    </div>
                </div>
                <div className='links'>
                    <button>
                        <a href={demo} target='_blank' rel='noopener noreferrer'>
                            <p>Demo</p>
                            <span className='fas fa-link fa-2x link'/>
                        </a>
                    </button>
                    <button>
                        <a href={repository} target='_blank' rel='noopener noreferrer'>
                            <p>Repositorio</p>
                            <span className='fab fa-github fa-2x github'/>
                        </a>
                    </button>
                </div> 
            </div>
  )
}

export default Project;