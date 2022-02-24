import React from 'react'
import Skill from './Skill/Skill'

const Skills = () => {
  return (
    <section className='habilidades' id='habilidades'>
        <h2>Habilidades Principales</h2>
        <div className='divConHabilidades'>
            <Skill className={'fab fa-html5 fa-5x html'} text={'HTML'}/>
            <Skill className={'fab fa-css3-alt fa-5x css'} text={'CSS'}/>
            <Skill className={'fab fa-sass fa-5x sass'} text={'SASS'}/>
            <Skill className={'fab fa-bootstrap fa-5x bootstrap'} text={'Bootstrap'}/>
            <Skill className={'fab fa-js-square fa-5x javascript'} text={'JavaScript'}/>
            <Skill className={'far fa-sticky-note fa-5x json'} text={'JSON'}/>
            <Skill className={'fas fa-book fa-5x jquery'} text={'jQuery'}/>
            <Skill className={'fab fa-react fa-5x react'} text={'React'}/>
            <Skill className={'fab fa-git-alt fa-5x git'} text={'GIT'}/>
            <Skill className={'fab fa-github-square fa-5x github'} text={'GitHub'}/>
            <Skill className={'fab fa-npm fa-5x npm'} text={'NPM'}/>
            <Skill className={'fas fa-fire fa-5x firebase'} text={'Firebase'}/>
        </div>
    </section>
  )
}

export default Skills