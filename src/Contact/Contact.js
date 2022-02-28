import React from 'react';
import './_Contact.scss';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h2 className='contact_h2'>Contacto</h2>
        <a href='mailto:juanignaciouranimm@gmail.com' className='contact_a'><button className='contact_a_button'>Abrir GMAIL</button></a>
    </section>
  )
}

export default Contact;