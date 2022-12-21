import React from 'react';
import './Landing.css';
import { faArrowsRotate, faBicycle, /*faDesktop,*/ faGlobe, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zeroImage from '../../Assets/Images/dis0.png';
import ecoImage from '../../Assets/Images/disECO.png';
import beImage from '../../Assets/Images/disB.png';
import ceImage from '../../Assets/Images/disC.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

AOS.init(); 

function reveal() {
  var reveals = document.querySelectorAll(".animation");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const Landing = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='landing-container'>

      <div className='landing-documentation'>
        {/***************CONTAINER ACAMBIO DE TITULARIDAD********************/}
        <div className='landing-documentation-zero containers titularidad animation'>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowsRotate} className='icon-style' />
          </div>
          <h4>Cambio de titularidad</h4>
          <div className='landing-documentation-text'>
            <p className='necesary'>Precio: 60€</p>
            <p>Desde Cenit te gestionamos de manera rápida y sencilla el cambio de nombre para tu coche, moto o camión.</p>
            <p>Nosotros nos encargamos y te ayudamos con esta gestión para que tanto el vendedor se asegure de la
               correcta presentación en Tráfico y el comprador pueda circular correctamente con su nuevo vehículo.</p>
            <p className='necesary'>Documentación necesaria: </p>
            {/***************SLIDER********************/}
            <div className='container-slider'>
            <Slider {...settings}>
              <p className='container-slider-text'>Permiso de circulación original.</p>
              <p className='container-slider-text'>Ficha de inspección técnica de vehículo vigente, con el sello del ITV en vigor (ITV coche o moto).</p>
              <p className='container-slider-text'>DNI comprador y vendedor. En caso de sociedad: CIF 
              de la empresa, DNI del apoderado y escritura de poderes.</p>
              <p className='container-slider-text'>Fotocopia Impuesto de Vehículos de Tracción Mecánica 
              del Ayuntamiento del vendedor (Impuesto de circulación).</p>
              </Slider>
            </div>
            
            <p>Desde Cenit te gestionamos el contrato de compraventa y la gestión del cambio de titularidad.</p>
            <p>Al comprador se le entrega también un Justificante de gestoría que le permite circular legalmente 
               por España durante el tiempo de tramitación en Tráfico.</p>
            <p>Para calcular usted mismo el valor de su vehículo pulse en el siguiente enlace de la Comunidad de Madrid.
               El impuesto de transmisiones patrimoniales será el 4% del valor de su vehículo.</p>
            <div className='btn-container'>
              <button className='btn-change'><a href='http://gestiona.madrid.org/vlin_valora_bienes/html/vehiculos/turismos.jsf?id=100_Turismos' target="_blank" rel="noopener noreferrer">Valor de tu vehículo</a></button>
            </div>      
          </div>
        </div>

        {/***************CONTAINER DOCUMENTACION TELEMATICA********************/}
        {/*<div className='landing-documentation-zero containers animation'>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faDesktop} className='icon-style' />
          </div>
          <h4>Matriculación Telemática</h4>
          <div className='landing-documentation-text'>
            <p>Para los ciudadanos que compran un vehículo en un concesionario obtenemos su matriculación en 
              el mismo día.</p>
            <p className='necesary'>Documentación necesaria: </p>
            ***************SLIDER********************
            
            <div className='container-slider'>
            <Slider {...settings}>
              <p className='container-slider-text'>3 ejemplares de la Tarjeta ITV (ejemplar para el interesado, 
              para la Jefatura con la diligencia de venta y el ejemplar de la Industria).</p>
              <p className='container-slider-text'>Se han de confeccionar y presentar todos los impuestos correspondientes.</p>
              <p className='container-slider-text'>Documentos de identidad y representación del interesado, así como su 
              autorización reflejada en el mandato.</p>      
            </Slider>
            </div>
            
            <p>El trámite se realiza de manera inmediata obteniendo un permiso temporal de circulación por
               vía telemática.</p>
            <p>Se dispone de 15 días para retirar el permiso de circulación definitivo en la Jefatura de 
              Tráfico correspondiente.</p>
          </div>
          </div>*/}

        {/*************************DOCUMENTOS EXTRANJEROS********************/}
        <div className='landing-documentation-zero containers animation'>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faGlobe} className='icon-style' />
          </div>
          <h4>Legalización de documentos extranjeros</h4>
          <div className='landing-documentation-text'>
            <p>Legalizamos aquellos documentos de un país extranjero para su utilización en España (si dicho 
              pais extranjero no pertenece al grupo del convenio de Apostilla de la Haya).</p>
            <p>De igual modo, se debe efectuar la legalización de documentos españoles que se pretendan 
              utilizar en otro país no adscrito a dicho convenio. </p>
            <p>Te garantizamos la gestión de manera profesional y dicha autenticación certifica mediante el sello 
              oficial que dicho documento es válido y original.</p>
          </div>
        </div>

        {/***************OTROS TRÁMITES********************/}
        <div className='landing-documentation-zero containers tramites animation'>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faListCheck} className='icon-style' />
          </div>
        <h4>Otros trámites</h4>
          <div className='landing-documentation-text'>
            <p>Duplicados de permiso de circulación por cambios de domicilio, deterioro, extravío y sustracción.</p>
            <p>Bajas definitivas por traslado del vehículo a otro pais, bajas temporales y altas de los vehículos en situación de baja temporal.</p>
            <p>Canje de permiso de conducción por traslado de residencia a España.</p>
            <p>Permiso internacional de conducir.</p>
            <p>Informes para conocer los datos del titular actual (hora, minuto y segundo), si existen cotitulares, 
               arrendatarios, fecha de la ultima transferencia, historial de bajas, inspecciones técnicas, 
               incidencias, exenciones, pago de IVTM, embargos, precintos, datos del vehículo y limitaciones 
               del mismo.</p>
            <h3>Matriculación telemática</h3>
            <p className='necesary'>Documentación necesaria: </p>
            {/***************SLIDER********************/}
            
            <div className='container-slider'>
            <Slider {...settings}>
              <p className='container-slider-text'>3 ejemplares de la Tarjeta ITV (ejemplar para el interesado, 
              para la Jefatura con la diligencia de venta y el ejemplar de la Industria).</p>
              <p className='container-slider-text'>Se han de confeccionar y presentar todos los impuestos correspondientes.</p>
              <p className='container-slider-text'>Documentos de identidad y representación del interesado, así como su 
              autorización reflejada en el mandato.</p>      
            </Slider>
            </div>
          </div>
        </div>

        {/***********************DISTINTIVOS AMBIENTALES********************/}
        <div className='landing-documentation-zero containers ambiente animation'>
          <div className='icon-container-div'>
            <img src={zeroImage} className="ecoImage" alt='eco'></img>
            <img src={ecoImage} className="ecoImage" alt='eco'></img>
            <img src={beImage} className="ecoImage" alt='eco'></img>
            <img src={ceImage} className="ecoImage" alt='eco'></img>
          </div>
          <h4>Distintivos ambientales para coches y motos</h4>
          <div className='landing-documentation-text'>
            <p>Con el objetivo de discriminar postiviamente a los vehículos más respetuosos con el medio ambiente 
              y ser un instrumento eficaz al servicio de las políticas municipales, la Direccion General de Trafico
               (DGT) ha creado cuatro distintivos ambientales en función del impacto medioambiental de los 
               vehículos..</p>
            <p>En Cenit gestionamos tu distintivo ambiental correspondiente a tu vehículo en función de su potencial 
              contaminante. Los vehículos que se han catalogado en siguientes categorías:</p>
            <ul>
              <li>- Ciclomotores de dos ruedas o de tres ruedas</li>
              <li>- Cuadriciclos ligeros</li>
              <li>- Motocicletas de dos ruedas</li>
              <li>- Motocicletas con sidecar</li>
              <li>- Precio 5 euros</li>
            </ul>
          </div>
        </div>

        {/***************BICIREGISTRO********************/}
        <div className='landing-documentation-zero containers tramites animation'>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faBicycle} className='icon-style' />
          </div>
        <h4>¿Qué es BiciRegistro?</h4>
          <div className='landing-documentation-text'>
            <p>BiciRegistro es una iniciativa de la Red de Ciudades por la Bicicleta 
               con el objetivo de disuadir el robo de bicicletas, facilitar su recuperación y limitar el comercio 
               ilegal asociado al robo de las mismas.</p>
            <p>La metodología de registro permite que una bicicleta sea devuelta a su propietario sea cual sea
               el punto de la geografía española en que haya sido robada y recuperada.</p>
            <p>El registro de una bicicleta privada estará sujeto a una tarifa que incluye el registro durante
               10 años y un kit de identificación para que el usuario lo instale en su bici.</p>
          </div>

          <h4 className='h4-last'>Localiza tu BiciRegistro</h4>
          <div className='landing-documentation-text'>
            <p>Dentro de la página web de BiciRegistro, dispones de dos buscadores: un buscador de bicicletas 
               desaparecidas para indicar que tu bici ha sido sustraída, y otro de bicicletas que han sido 
               localizadas para poder localizar tu bicicleta en caso de robo, si piensas que tu bicicleta 
               está en la lista, solo tendrás que rellenar un formulario con información básica y la policía 
               se pondrá en contacto contigo lo antes posible.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing