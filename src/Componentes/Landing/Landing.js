import React, {useState} from 'react';
import './Landing.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 

const Landing = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='landing-container'>

      <div className='landing-documentation'>
        <div className='landing-documentation-zero containers' data-aos="fade-up" data-aos-duration="1500">
          <h4>Cambio de titularidad de vehículo</h4>
          <div className='landing-documentation-text'>
            <p>Gestionamos de manera rápida y sencilla el cambio de nombre para tu coche, moto o camión y el 
               contrato oportuno de compraventa.</p>
            <p>La transferencia de vehículos requiere de la realización de gestiones y tramites en Hacienda y 
               la Jefatura de Trafico. </p>
            <p>Nosotros nos encargamos y te ayudamos con esta gestión para que tanto el vendedor se 
               asegure de la correcta presentación en Trafico y el comprador pueda circular correctamente 
               con su nuevo vehículo.</p>
          </div>
        </div>

        <div className='landing-documentation-first containers' data-aos="fade-up" data-aos-duration="1000">
          <h2>Requisitos del vehículo</h2>
          <p>El vehículo no podrá tener impuestos pendientes, ni órdenes de embargo vinculadas al mismo.</p>
        </div>


        <div className='landing-documentation-third containers' data-aos="fade-up" data-aos-duration="1000">
          <h2>Qué necesito</h2>
          <ul>
            <div className='landing-documentation-third-list'>
              <FontAwesomeIcon icon={faCheck}/><li> Permiso de circulación original</li>
            </div>
            <div className='landing-documentation-third-list'>
              <FontAwesomeIcon icon={faCheck}/><li> Ficha de inspección técnica de vehículo vigente y copia por ambas caras</li>
            </div>
            <div className='landing-documentation-third-list'>
              <FontAwesomeIcon icon={faCheck}/><li> DNI y fotocopia de transmitente y adquirente. En caso de sociedad: CIF de la 
              empresa, DNI del apoderado y escritura de poderes</li>
            </div>
            <div className='landing-documentation-third-list'>
              <FontAwesomeIcon icon={faCheck}/><li> Contrato de compraventa firmado por ambas partes (digital o manual)</li>
            </div>
            <div className='landing-documentation-third-list'>
              <FontAwesomeIcon icon={faCheck}/><li> Impuesto municipal de circulación del año anterior</li>
            </div>
          </ul>
        </div>

        <div className='landing-documentation-second containers' data-aos="fade-up" data-aos-duration="1000">
          <h2>Pide cita</h2>
          <div className='landing-documentation-second-calendar'>
            <Calendar onChange={onChange} value={value}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing