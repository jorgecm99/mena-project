import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faEnvelope, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import imageHeaderMobile from '../../Assets/Images/header-main-blanco.png';
import imageHeaderDesktop from '../../Assets/Images/header-main.png';
import imageLanding from '../../Assets/Images/imagenLanding'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <li onClick={() => scrollTo('.landing-documentation')}>MATRICULACIÓN</li>
                        <li onClick={() => scrollTo('.titularidad')}> CAMBIO DE TITULARIDAD</li> 
                        <li onClick={() => scrollTo('.tramites')}>OTROS TRÁMITES</li>                  
                        <li onClick={() => scrollTo('.ambiente')}>MEDIO AMBIENTE</li>
                        <li onClick={() => scrollTo('.container-bici')}>BiciRegistro</li>
                        <li onClick={() => scrollTo('.footer-container')}>CONTACTO</li>
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
            <button className='btn-header-container'><a href='mailto: catalinabarrosr@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={{color:'#F2F1EC'}}/></a></button>
            <button className='btn-header-container'><a href="tel:+34 637 54 91 69"><FontAwesomeIcon icon={faPhone} style={{color:'#F2F1EC'}}/></a></button>
        </div>       
        </nav>

        

        {/******************* HEADER DESKTOP ****************************/}

        <div className='header-main-desktop'>
            <div className='header-desktop-link'>
                <a href='www.cenitgestoria.es'><img src={imageHeaderDesktop} alt='cenit' className='header-image'></img></a>
            </div>
            <div className='header-container-contact'>
                <FontAwesomeIcon icon={faPhoneVolume} style={{fontSize:'26px', marginRight:'12px', color:'#365B6D'}} />
                <p><a href="tel:+34 637 54 91 69">+34 637 54 91 69</a></p>
            </div>
        </div>

        
        <nav className='header-container-desktop'>
            <ul className='header-desktop-list'>
                <li onClick={() => scrollTo('.landing-documentation')}>MATRICULACIÓN</li>
                <li onClick={() => scrollTo('.titularidad')}> CAMBIO DE TITULARIDAD</li> 
                <li onClick={() => scrollTo('.tramites')}>OTROS TRÁMITES</li>                  
                <li onClick={() => scrollTo('.ambiente')}>MEDIO AMBIENTE</li>
                <li onClick={() => scrollTo('.container-bici')}>BiciRegistro</li>
                <li onClick={() => scrollTo('.footer-container')}>CONTACTO</li>
            </ul>

        </nav>



      {/***************CONTAINER IMAGE LANDING********************/}
      <div className='image-landing'>
        <img src={imageLanding} className='landing-img' alt='landing'></img>
      </div>
    </header>
  )
}

export default Header