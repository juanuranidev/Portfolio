import React from 'react'

const Project = ({imgSource, imgAlt, title, tecnology1, tecnology2, tecnology3, repository, demo}) => {
  return (
    <div className='proyecto'>
                <img src={imgSource} alt={imgAlt} />
                <h3>{title}</h3>
                <div className='tecnologias'>
                    <h4>Principalmente usado:</h4>
                    <div>
                        <span className={tecnology1}></span>
                        <span className={tecnology2}></span>
                        <span className={tecnology3}></span>
                    </div>
                </div>
                <div className='links'>
                    <div className='contenedorDeLink'>
                        <h4>Repositorio</h4>
                        <a href={repository} target='_blank' rel='noopener noreferrer'><i className='fab fa-github fa-2x github'></i></a>
                    </div>
                    <div className='contenedorDeLink'>
                        <h4>Online</h4>
                        <a href={demo} target='_blank' rel='noopener noreferrer'><i className='fas fa-link fa-2x link'></i></a>
                    </div>
                </div> 
            </div>
  )
}

export default Project