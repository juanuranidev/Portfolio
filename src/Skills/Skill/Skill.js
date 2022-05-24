import React from 'react';
import './_Skill.scss';

const Skill = ({src, title}) => {
  return (
    <div className='skill'>
      <img className='skill_img' src={src} alt={title} />
      <h3 className='skill_h3'>{title}</h3>
    </div>
  );
}

export default Skill;