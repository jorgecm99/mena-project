import React, { useState } from 'react';
import './Header.css';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
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
                        <li onClick={() => scrollTo('.mobile-one')}>Cambio de titularidad</li>
                        <div className='dropdown-submenu'onClick={()=>setShow(!show)}>
                            <li></li>
                            <span className='dropdown-submenu-icon'><FontAwesomeIcon icon={faAngleDown} /></span>
                        </div>
                        
                        {
                            show ? <div className='dropdown-bbb'>    
                            <li onClick={() => scrollTo('.mobile-two')}>Requisitos del vehículo</li>
                            <li onClick={() => scrollTo('.mobile-three')}>Cómo y dónde</li>
                            <li onClick={() => scrollTo('.mobile-four')}>Qué necesito</li>
                            </div> : null
                        }

                        <li onClick={() => scrollTo('.landing-first')}></li>
                        <li onClick={() => scrollTo('.landing-last')}></li>
                    </div> : null
                } 

                
            </div>
            <div className='header-title'>
                <h3>aqui va el header</h3>
            </div>
        </nav>
    </header>
  )
}

export default Header