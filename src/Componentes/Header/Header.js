import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faX, faKey } from '@fortawesome/free-solid-svg-icons';
import imageHeaderMobile from '../../Assets/Images/header-main-blanco.png';
import headerImage from '../../Assets/Images/header-main.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const scrollTo = (nodeSelector) => {
    const domNode = document.querySelector(nodeSelector)
    window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
}

  return (
    <header>

        {/******************* HEADER MOBILE ****************************/}

        <nav className='header-container'>
        <div className='header-container-display'>
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
                        <li onClick={() => scrollTo('.footer-container')}>Contacto</li>
                    </div> : null
                } 

                
            </div>
            <img src={imageHeaderMobile} className='header-image-mobile' alt=""></img>
            </div>

        {/***********************CONTAINER******************************/}

        <div className='header-main-container'>
            <h2 className='main-container-title'>Transferencia de vehículos online</h2>
            <p className='tagline'>En Cenit contamos con profesionales expertos en distintas áreas, nuestros servicios los realizan profesionales habilitados.</p>
            <p className='tagline'>Estamos especializados en trámites de tráfico y gestiones administrativas con las distintas instituciones de la administración pública.</p>
            <p className='tagline'>Ofrecemos calidad y eficiencia en nuestros de asesoramiento y gestión administrativa.</p>
        </div>

        <div className='header-main-container-icon'>
            <FontAwesomeIcon icon={faKey} />
        </div>       
        </nav>

        

        {/******************* HEADER DESKTOP ****************************/}

        <nav className='header-container-desktop'>
            <div className='header-desktop-link'>
                <a href='www.cenitgestoria.es'><img src={headerImage} alt='cenit' className='header-image'></img></a>
            </div>

            <ul className='header-desktop-list'>
                <li>Cambio de titularidad</li>
                <li>Pide cita</li>
                <li>Contacto</li>  
            </ul>

        </nav>
    </header>
  )
}

export default Header