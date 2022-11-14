import React from 'react';
import './BiciRegistro.css';

const BiciRegistro = () => {
  return (
    <div className='container-bici'>
        <div className='container-bici-one'>
            <h4 className='container-bici-title'>¿Qué es biciRegistro?</h4>
            <p className='tagline-bici'>BiciRegistro es una iniciativa de la Red de Ciudades por la Bicicleta que cuenta con el apoyo 
                de la DGT, Ayuntamientos y sus Policías Locales. El objetivo principal es el de disuadir el 
                robo de bicicletas, facilitar su recuperación y limitar el comercio ilegal asociado al robo 
                de bicicletas.</p>
            <p className='tagline-bici'>La metodología de registro permite que una bicicleta sea devuelta a su propietario sea cual sea
                 el punto de la geografía española en que haya sido robada y recuperada. </p>
            <p className='tagline-bici'>El registro de una bicicleta privada estará sujeto a una tarifa que incluye el registro durante
                 10 años y un kit de identificación para que el usuario lo instale en su bici. Para ello se 
                 utiliza una patente de marcaje procedente de Reino Unido (pegatinas indelebles en el bastidor).</p>
        </div>
        <div className='container-bici-two'>
            <h4 className='container-bici-title'>Localiza tu biciRegistro</h4>
            <p className='tagline-bici'>Dentro de la página web de BiciRegistro, dispones de dos buscadores: un buscador de bicicletas 
                desaparecidas para indicar que tu bici ha sido sustraída, y otro de bicicletas que han sido 
                localizadas para poder localizar tu bicicleta en caso de robo, si piensas que tu bicicleta 
                está en la lista, solo tendrás que rellenar un formulario con información básica y la policía 
                se pondrá en contacto contigo lo antes posible.</p>
            <p>OBTENGA SU REGISTRO POR SOLO 40 (IVA y gastos de registro incluidos)</p>
        </div>
    </div>
  )
}

export default BiciRegistro