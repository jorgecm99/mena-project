import React from 'react';
import './Landing.css';


const Landing = () => {
  return (
    <div className='landing-container'>

      <div className='landing-documentation'>
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

        <div className='landing-documentation-first containers'>
          <h2>Requisitos del vehículo</h2>
          <p>El vehículo no podrá tener impuestos pendientes, ni órdenes de embargo vinculadas al mismo.</p>
        </div>

        <div className='landing-documentation-second containers'>
          <h2>Cómo y dónde</h2>
          <p></p>
        </div>

        <div className='landing-documentation-third containers'>
          <h2>Qué necesito</h2>
          <ul>
            <li>1. Permiso de circulación original</li>
            <li>2. Ficha de inspección técnica de vehículo vigente y copia por ambas caras</li>
            <li>3. DNI y fotocopia de transmitente y adquirente. En caso de sociedad: CIF de la 
              empresa, DNI del apoderado y escritura de poderes</li>
            <li>4. Contrato de compraventa firmado por ambas partes (digital o manual)</li>
            <li>5. Impuesto municipal de circulación del año anterior</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Landing