import React from 'react';
import './Footer.css';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-documentation-four'>
          <div className='footer-documentation-four-contacts'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p><a href='mailto:info@cenitgestoria.es'>info@cenitgestoria.es</a></p>
          </div>
          <div className='footer-documentation-four-contacts'>
            <FontAwesomeIcon icon={faPhone} />
            <p><a href="https://api.whatsapp.com/send?phone=34637549169">+34 637 54 91 69</a></p>
          </div>
          <div className='footer-documentation-four-contacts'>
            <FontAwesomeIcon icon={faLocation} />
            <p>Madrid</p>
          </div>
        </div>
    </div>
  )
}

export default Footer