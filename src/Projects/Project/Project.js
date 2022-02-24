import React from 'react'

const Project = ({imgSource, imgAlt, title, tecnology1, tecnology2, tecnology3, repository, demo}) => {
  return (
    <div class="proyecto">
                <img src={imgSource} alt={imgAlt} />
                <h3>{title}</h3>
                <div class="tecnologias">
                    <h4>Principalmente usado:</h4>
                    <div>
                        <span class={tecnology1}></span>
                        <span class={tecnology2}></span>
                        <span class={tecnology3}></span>
                    </div>
                </div>
                <div class="links">
                    <div class="contenedorDeLink">
                        <h4>Repositorio</h4>
                        <a href={repository} target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x github"></i></a>
                    </div>
                    <div class="contenedorDeLink">
                        <h4>Online</h4>
                        <a href={demo} target="_blank" rel="noopener noreferrer"><i class="fas fa-link fa-2x link"></i></a>
                    </div>
                </div> 
            </div>
  )
}

export default Project