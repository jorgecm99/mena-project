import React from 'react';
import './Landing.css';
/*import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 

const Landing = () => {

  return (
    <div className='landing-container'>
      <div className='landing-documentation'>
        {/***************CONTAINER DOCUMENTACION TELEMATICA********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
          <h4>Matriculación Telemática</h4>
          <div className='landing-documentation-text'>
            <p>Los ciudadanos que compran un vehículo en un concesionario pueden obtener su matriculación 
              en el mismo día a través del gestor administrativo.</p>
            <p>Documentación necesaria: </p>
            <p>El trámite se realiza de manera inmediata obteniendo un permiso temporal de circulación por
               vía telemática.</p>
            <p>Se dispone de 15 días para retirar el permiso de circulación definitivo en la Jefatura de 
              Tráfico correspondiente.</p>
          </div>
        </div>
        
        {/***************CONTAINER ACAMBIO DE TITULARIDAD********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
          <h4>Cambio de titularidad</h4>
          <div className='landing-documentation-text'>
            <p>Desde Cenit te gestionamos el contrato de compraventa y la gestión del cambio de titularidad.</p>
            <p>Documentación necesaria: </p>
            <p>Al comprador se le entrega también un Justificante de gestoría que le permite circular legalmente 
              por España durante el tiempo de tramitación en Tráfico.</p>
            <p>Para calcular usted mismo el valor de su vehículo pulse en el siguiente enlace de la Comunidad de Madrid.
               El impuesto de transmisiones patrimoniales será el 4% del valor de su vehículo.</p>
            <button className='btn-change'><a href='http://gestiona.madrid.org/vlin_valora_bienes/html/vehiculos/turismos.jsf?id=100_Turismos' target="_blank" rel="noopener noreferrer">Valor de tu vehículo</a></button>
          </div>
        </div>

        {/***************INFORMES********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
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
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
        <h4>Otros trámites</h4>
          <div className='landing-documentation-text'>
            <p>Duplicados de permiso de circulación por cambios de domicilio, deterioro, extravío y sustracción.</p>
            <p>Bajas definitivas por traslado del vehículo a otro pais, bajas temporales y altas de los vehículos en situación de baja temporal.</p>
            <p>Canje de permiso de conducción por traslado de residencia a España.</p>
            <p>Permiso internacional de conducir.</p>
          </div>
        </div>

        {/***************MEDIO AMBIENTE********************/}
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
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