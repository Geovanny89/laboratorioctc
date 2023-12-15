import React from 'react';
import govLogo from '../../assets/logo-gov.png'
import Colombia from '../../assets/Colombia.png'
import face from '../../assets/face.png'
import insta from '../../assets/itgram.png'
import x from '../../assets/twitterr.png'
import youtube from '../../assets/yutube.png'
import was from '../../assets/wasapp.png'
import alcaldia from '../../assets/alcaldia.png'
import mineduca from '../../assets/Mineducacion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

export default function Footer() {
  return (
    <footer className='bg-primary'>
      <hr />
      <div className='footer-container'>
        {/* Sección Izquierda */}
        <div className='imagen-gov'>
          <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"><img id='gov' src={govLogo} alt='Img Not Found' width='180px' /></a>
          <a href="https://www.colombia.co/" target="_blank" rel="noopener noreferrer"><img id='colombia' src={Colombia} alt='Img Not Found' width='100px' /></a>
          <a href="https://cucuta.gov.co/" target="_blank" rel="noopener noreferrer"><img src={alcaldia} alt="Img Not Found" width="200px"/></a>
          <a href="https://www.mineducacion.gov.co/portal/" target="_blank" rel="noopener noreferrer"><img src={mineduca} alt="Img Not Found" width="250px"/></a>
        </div>

        {/* Sección Central */}
        <div className='section-datos'>
          <h2>Centro Técnologico de Cúcuta</h2>
          <h3>
            <strong>Dirección: </strong>

          </h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
            Av. 6 #3-20 Barrio Comuneros Ciudadela Juan Atalaya, Cúcuta</p>

          <h3>
            <strong>Télefono: </strong>

          </h3>
          <p><FontAwesomeIcon icon={faPhoneAlt} className='me-2' />
            +57 300 000 000</p>
          <h3>
            <strong>Horario de Atención: </strong>

          </h3>
          <p><FontAwesomeIcon icon={faClock} className='me-2' />
            Lunes a Viernes: 7:30 AM a 11:30 AM y 2:00 PM a 6:00 PM</p>
          <div className='redes'>
            <div className='red-social'>
              <a href="https://www.facebook.com/centrotecnologicocucuta/" target="_blank" rel="noopener noreferrer"><img src={face} alt='Img Not Found'  /></a>
              <h4>Facebook</h4>
            </div>
            <div className='red-social'>
              <a href="https://www.instagram.com/ctc_cucuta" target="_blank" rel="noopener noreferrer"><img src={insta} alt='Img not Found' /></a>
              <h4>Instagram</h4>
            </div>
            <div className='red-social'>
              <a href="https://twitter.com/ctc_cucuta" target="_blank" rel="noopener noreferrer"> <img src={x} alt='Img Not Found'  /></a>
              <h4>X</h4>
            </div>
            <div className='red-social'>
              <a href="https://www.youtube.com/channel/UCbOdcWFbAeQGFdupjauEusA" target="_blank" rel="noopener noreferrer"> <img src={youtube} alt='Img Not Found'  /></a>
              <h4>Youtube</h4>
            </div>
            <div className='red-social'>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><img src={was} alt='Img Not Found' /></a>
              <h4>Whatsapp</h4>
            </div>
          </div>

        </div>

        {/* Sección Derecha */}
        <div className="contacto">
          <h2>Contacto</h2>
          <div className="contacto-ctc">
            <div>
              <h3>
                <strong>Correspondencia: </strong>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:archivo@ctc.edu.co">archivo@ctc.edu.co</a>
              </h3>
            </div>
            <div>
              <h3>
                <strong>Notificaciones Judiciales: </strong>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:gestionjuridica@ctc.edu.co">gestionjuridica@ctc.edu.co</a>
              </h3>
            </div>
            <div>
              <h3>
                <strong>Laboratorio Téxtil: </strong>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:laboratoriotextil@ctc.edu.co">laboratoriotextil@ctc.edu.co</a>
              </h3>
            </div>
            <div>
              <h3><strong>WhatsApp: </strong>
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                <a href="https://wa.me/57312546453" target="_blank" rel="noopener noreferrer">3518556665</a>
              </h3>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}
