import React from 'react';
import Skill from './Skill/Skill';
import './_Skills.scss';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <h2 className='skills_h2'>Habilidades Principales</h2>
        <div className='skills_div'>
          <Skill link={'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'}/>
          <Skill link={'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'}/>
          <Skill link={'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white'}/>
          <Skill link={'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase'}/>
          <Skill link={'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7'}/>
        </div>
    </section>
  )
}

export default Skills;