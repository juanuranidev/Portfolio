import React from 'react';
import './_Skill.scss';

const Skill = ({className, text}) => {
  return (
    <div className='skill'>
        <span className={className}/>
        <h3>{text}</h3>
    </div>
  )
}

export default Skill;