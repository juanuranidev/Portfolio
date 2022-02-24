import React from 'react';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='sociales'>
            <a href='https://github.com/juanuranidev' target='_blank' rel='noopener noreferrer' className='fab fa-github-square fa-4x'/>
            <a href='https://www.linkedin.com/in/juanurani' target='_blank' rel='noopener noreferrer' className='fab fa-linkedin fa-4x'/>
            <a href='mailto:juanignaciouranimm@gmail.com' target='_blank' rel='noopener noreferrer' className='fa fa-envelope fa-4x'/>
        </div>
        <div className='marca'>
            <p> Made with <span className='fa fa-heart'/> by <a href='juanurani.netlify.app/' target='_blank' rel='noopener noreferrer'>Juan</a></p>
        </div>
    </footer>
  )
}

export default Footer;