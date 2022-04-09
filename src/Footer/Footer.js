import React from 'react';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='socials'>
        <a href='https://github.com/juanuranidev' target='_blank' rel='noopener noreferrer' className='socials_a fab fa-github-square fa-4x'/>
        <a href='https://www.linkedin.com/in/juanurani' target='_blank' rel='noopener noreferrer' className='socials_a fab fa-linkedin fa-4x'/>
        <a href='mailto:juanignaciouranimm@gmail.com' target='_blank' rel='noopener noreferrer' className='socials_a fa fa-envelope fa-4x'/>
      </div>
      <div className='brand'>
        <p className='brand_p'> Made with <span className='brand_p_span fa fa-heart'/> by <a className='brand_p_span_a' href='https://juanurani.netlify.app/' target='_blank' rel='noopener noreferrer'>Juan</a></p>
      </div>
    </footer>
  )
}

export default Footer;