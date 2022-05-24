import React from 'react';
import { SkillsImages } from './ImportImages'
import Skill from './Skill/Skill';
import './_Skills.scss';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h2 className='skills_h2'>Habilidades Principales</h2>
      <div className='skills_div'>
        {SkillsImages.map((skill, index) => <Skill key={index} src={skill.src} title={skill.name} />)}
      </div>
    </section>
  )
}

export default Skills;