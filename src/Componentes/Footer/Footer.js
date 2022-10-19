import React from 'react';
import './Footer.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-documentation-four'>
          <h2>Contacto</h2>
          <div className='footer-documentation-four-contacts'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p><a href='catalinabarrosr@gmail.com'>info@cenitgestoria.es</a></p>
          </div>
          <div className='footer-documentation-four-contacts'>
            <FontAwesomeIcon icon={faPhone} />
            <p>+34 637 54 91 69</p>
          </div>
        </div>
    </div>
  )
}

export default Footer