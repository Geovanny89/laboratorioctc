import React from 'react';
import imgNosotros from '../../assets/imgNosotros.png'
import './nosotros.css'
export default function Nosotros() {
    return (
        <div id="nosotros" className="conta">
           
            <hr />

            <h1>Nosotros</h1>
            <br />
            <div className="content">

                <img src={imgNosotros} alt="Img Not found" />

                <p className="lead">
                    Nuestro laboratorio está equipado con tecnología avanzada y un equipo de profesionales altamente calificados dedicados a proporcionar una gama completa de pruebas y análisis textiles. Nuestro objetivo es ofrecer servicios de alta calidad que ayuden a nuestros clientes a garantizar que sus productos textiles cumplan con los estándares de calidad y seguridad más rigurosos.
                </p>
            </div>


        </div>
    );
}
