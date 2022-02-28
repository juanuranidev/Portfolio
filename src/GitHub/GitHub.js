import React from 'react';
import './_GitHub.scss';

const GitHub = () => {
  return (
    <section className='gitHub'>
        <h2 className='gitHub_h2'>GitHub</h2>
        <img src="http://ghchart.rshah.org/juanuranidev" alt="juanuranidev Github chart" className='gitHub_img'/>
        <a href='https://github.com/juanuranidev' target='_blank' className='gitHub_a'><button className='gitHub_a_button'>Ver GitHub</button></a>
    </section>
  )
}

export default GitHub;