import React from 'react';
import './_GitHub.scss';

const GitHub = () => {
  return (
    <section className='github' id="github">
        <h2 className='github_h2'>GitHub</h2>
        <div className='github_div'>
          <img className='github_div_img' src="https://github-readme-stats.vercel.app/api?username=juanuranidev&&show_icons=true&theme=dark&text_color=ffffff"/>
          <img className='github_div_img' src="https://github-readme-stats.vercel.app/api/top-langs/?username=juanuranidev&layout=compact&theme=dark&text_color=ffffff"/>
        </div>
        <img src="http://ghchart.rshah.org/juanuranidev" alt="juanuranidev Github chart" className='github_img'/>
        <a href='https://github.com/juanuranidev' target='_blank' className='github_a'><button className='github_a_button'>Ver GitHub</button></a>
    </section>
  )
}

export default GitHub;