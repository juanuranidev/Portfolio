import React from 'react';
import './_Skill.scss';

const Skill = ({link}) => {
  return (

      <img className='skill_img' src={link} style={{margin: "1rem"}} />

  );
}

export default Skill;