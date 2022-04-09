import React from 'react';
import './_Skill.scss';

const Skill = ({link}) => {
  return (
    <div className='skill'>
      <img className='skill_img' src={link}/>
    </div>
  );
}

export default Skill;