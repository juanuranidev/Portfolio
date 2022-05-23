import React from 'react';
import './_Skills.scss';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <h2 className='skills_h2'>Habilidades Principales</h2>
        <div className='skills_div'>
          <img className='skills_div_img' alt="javascript" src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="typescript" src={"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="react" src={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="React_Router" src={"https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="bootstrap" src={"https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="SASS" src={"https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="git" src={"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="github" src={"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="gitlab" src={"https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="NPM" src={"https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="firebase" src={"https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"} style={{margin: "1rem"}} />
          <img className='skills_div_img' alt="netlify" src={"https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"} style={{margin: "1rem"}} />
        </div>
    </section>
  )
}

export default Skills;