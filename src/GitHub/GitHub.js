import React from 'react';
import './_GitHub.scss';

const GitHub = () => {
  return (
    <section className='gitHub'>
        <h2 className='gitHub_h2'>GitHub</h2>
        <div className='gitHub_div'>
          <img className='gitHub_div_img' src="https://github-readme-stats.vercel.app/api?username=juanuranidev&&show_icons=true&theme=dark&text_color=ffffff"/>
          <img className='gitHub_div_img' src="https://github-readme-stats.vercel.app/api/top-langs/?username=juanuranidev&layout=compact&theme=dark&text_color=ffffff"/>
        </div>
        <img src="http://ghchart.rshah.org/juanuranidev" alt="juanuranidev Github chart" className='gitHub_img'/>
        <a href='https://github.com/juanuranidev' target='_blank' className='gitHub_a'><button className='gitHub_a_button'>Ver GitHub</button></a>
    </section>
  )
}

export default GitHub;