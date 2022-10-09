import React, { useState } from 'react';
import './Header.css';
import { faBars, faX, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const scrollTo = (nodeSelector) => {
    const domNode = document.querySelector(nodeSelector)
    window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
}

  return (
    <header>
        <nav className='header-container'>
        {/********** ICON ******************/}
        <div className='dropdown'>
                <div className='dropdown-icon'>

                {
                    isMenuOpen ?
                    <FontAwesomeIcon icon={faX} style={{color:"white"}} onClick={()=>setIsMenuOpen(false)}/>
                    : <FontAwesomeIcon icon={faBars} style={{color:"white"}} onClick={()=>setIsMenuOpen(true)}/>
                }
                    
                    
                </div>

                {
                    isMenuOpen ? 
                    <div className='dropdown-content'>
                        <div className='dropdown-content-submenu'>
                            <li onClick={() => scrollTo('.landing-documentation')}>Cambio de titularidad</li>
                            <div className='dropdown-submenu'onClick={()=>setShow(!show)}>
                                <span className='dropdown-submenu-icon'><FontAwesomeIcon icon={faAngleDown} /></span>
                            </div>
                        </div>
                        
                        
                        {
                            show ? <div className='dropdown-bbb'>    
                            <li onClick={() => scrollTo('.landing-documentation-first')}>Requisitos del vehículo</li>
                            <li onClick={() => scrollTo('.landing-documentation-second')}>Cómo y dónde</li>
                            <li onClick={() => scrollTo('.landing-documentation-third')}>Qué necesito</li>
                            </div> : null
                        }

                        <li onClick={() => scrollTo('.landing-first')}>Pide cita</li>
                        <li onClick={() => scrollTo('.landing-documentation-four')}>Contacto</li>
                    </div> : null
                } 

                
            </div>
            <div className='header-title'>
            <FontAwesomeIcon icon={faPhone} className='icon-header' />
            <p>691 78 44 16</p>
            </div>
        </nav>
    </header>
  )
}

export default Header