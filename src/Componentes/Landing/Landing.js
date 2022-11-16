import React from 'react';
import './Landing.css';
import { faArrowsRotate, faDesktop, faGlobe, faListCheck, faSeedling, faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

AOS.init(); 

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
        {/***************CONTAINER DOCUMENTACION TELEMATICA********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
          <div className='icon-container'>
            <FontAwesomeIcon icon={faDesktop} className='icon-style' />
          </div>
          <h4>Matriculación Telemática</h4>
          <div className='landing-documentation-text'>
            <p>Los ciudadanos que compran un vehículo en un concesionario pueden obtener su matriculación 
              en el mismo día a través del gestor administrativo.</p>
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
            
            <p>El trámite se realiza de manera inmediata obteniendo un permiso temporal de circulación por
               vía telemática.</p>
            <p>Se dispone de 15 días para retirar el permiso de circulación definitivo en la Jefatura de 
              Tráfico correspondiente.</p>
          </div>
        </div>
        
        {/***************CONTAINER ACAMBIO DE TITULARIDAD********************/}
        <div className='landing-documentation-zero containers titularidad' data-aos="fade-up" data-aos-duration="1500">
        <div className='icon-container'>
            <FontAwesomeIcon icon={faArrowsRotate} className='icon-style' />
          </div>
          <h4>Cambio de titularidad</h4>
          <div className='landing-documentation-text'>
            <p>Desde Cenit te gestionamos el contrato de compraventa y la gestión del cambio de titularidad.</p>
            <p className='necesary'>Documentación necesaria: </p>
            {/***************SLIDER********************/}
            <div className='container-slider'>
            <Slider {...settings}>
              <p className='container-slider-text'>Permiso de circulación original</p>
              <p className='container-slider-text'>Ficha de inspección técnica de vehículo vigente, con el sello del ITV en vigor (ITV coche o moto)</p>
              <p className='container-slider-text'>DNI comprador y vendedor. En caso de sociedad: CIF 
              de la empresa, DNI del apoderado y escritura de poderes</p>
              <p className='container-slider-text'>Fotocopia Impuesto de Vehículos de Tracción Mecánica 
              del Ayuntamiento del vendedor (Impuesto de circulación)</p>
              </Slider>
            </div>
            
            <p>Al comprador se le entrega también un Justificante de gestoría que le permite circular legalmente 
              por España durante el tiempo de tramitación en Tráfico.</p>
            <p>Para calcular usted mismo el valor de su vehículo pulse en el siguiente enlace de la Comunidad de Madrid.
               El impuesto de transmisiones patrimoniales será el 4% del valor de su vehículo.</p>
            <button className='btn-change'><a href='http://gestiona.madrid.org/vlin_valora_bienes/html/vehiculos/turismos.jsf?id=100_Turismos' target="_blank" rel="noopener noreferrer">Valor de tu vehículo</a></button>
          </div>
        </div>

        {/***************INFORMES********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
        <div className='icon-container'>
            <FontAwesomeIcon icon={faSheetPlastic} className='icon-style' />
          </div>
          <h4>Informes de vehículos</h4>
          <div className='landing-documentation-text'>
            <p>Permiten conocer los datos del titular actual (hora, minuto y segundo), si existen cotitulares, 
              arrendatarios, fecha de la ultima transferencia, historial de bajas, inspecciones técnicas, 
              incidencias, exenciones, pago de IVTM, embargos, precintos, datos del vehículo y limitaciones 
              del mismo. </p>
          </div>
        </div>

        {/*************************DOCUMENTOS EXTRANJEROS********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
        <div className='icon-container'>
            <FontAwesomeIcon icon={faGlobe} className='icon-style' />
          </div>
          <h4>Legalización de documentos extranjeros</h4>
          <div className='landing-documentation-text'>
            <p>Se legalizan aquellos documentos de un país extranjero para su utilización en España si dicho pais extranjero 
              no pertenece al grupo del convenio de Apostilla de la Haya.</p>
            <p>De igual modo, de debe efectuar la legalización de documentos españoles que se pretendan utilizar en otro país no adscrito a dicho convenio.</p>
            <p>El trámite se realiza de manera inmediata obteniendo un permiso temporal de circulación por
               vía telemática.</p>
            <p>Se dispone de 15 días para retirar el permiso de circulación definitivo en la Jefatura de 
              Tráfico correspondiente.</p>
          </div>
        </div>

        {/***************OTROS TRÁMITES********************/}
        <div className='landing-documentation-zero containers tramites' data-aos="fade-up" data-aos-duration="1500">
        <div className='icon-container'>
            <FontAwesomeIcon icon={faListCheck} className='icon-style' />
          </div>
        <h4>Otros trámites</h4>
          <div className='landing-documentation-text'>
            <p>Duplicados de permiso de circulación por cambios de domicilio, deterioro, extravío y sustracción.</p>
            <p>Bajas definitivas por traslado del vehículo a otro pais, bajas temporales y altas de los vehículos en situación de baja temporal.</p>
            <p>Canje de permiso de conducción por traslado de residencia a España.</p>
            <p>Permiso internacional de conducir.</p>
          </div>
        </div>

        {/***************MEDIO AMBIENTE********************/}
        <div className='landing-documentation-zero containers ambiente' data-aos="fade-up" data-aos-duration="1500">
        <div className='icon-container'>
            <FontAwesomeIcon icon={faSeedling} className='icon-style' />
          </div>
          <h4>Medio Ambiente</h4>
          <div className='landing-documentation-text'>
            <p>La clasificación del parque tiene como objetivo discriminar positivamente a los vehículos mas respetuosos 
              con el medio ambiente y ser un instrumento eficaz al servicio de las políticas municipales, tanto 
              restrictivas de trafico en episodios de alta contaminación, como de promoción de nuevas tecnologías a 
              través de beneficios fiscales o relativos a la movilidad y el medio ambiente.</p>
            <p>La Direccion General de Tráfico ha clasificado el parque de motocicletas y ciclomotores en función de su 
              potencial contaminante. Los vehículos que se han catalogado en siguientes categorías:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing