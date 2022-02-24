import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className='sociales'>
            <a href='https://github.com/juanuranidev' target='_blank' rel='noopener noreferrer' className='fab fa-github-square fa-4x'></a>
            <a href='https://www.linkedin.com/in/juanurani' target='_blank' rel='noopener noreferrer' className='fab fa-linkedin fa-4x'></a>
            <a href='mailto:juanignaciouranimm@gmail.com' target='_blank' rel='noopener noreferrer' className='fa fa-envelope fa-4x'></a>
        </div>
        <div className='marca'>
            <p> Made with <i className='fa fa-heart'></i> by <a href='juanurani.netlify.app/' target='_blank' rel='noopener noreferrer'>Juan</a></p>
        </div>
    </footer>
  )
}

export default Footer;