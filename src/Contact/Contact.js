import React from 'react';
import './_Contact.scss';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h2 className='contact_h2'>Contacto</h2>
        <button className='contact_button'><a href='mailto:juanignaciouranimm@gmail.com' className='contact_button_a'>Abrir GMAIL</a></button>
    </section>
  )
}

export default Contact;