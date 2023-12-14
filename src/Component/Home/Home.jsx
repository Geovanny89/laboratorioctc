import React from 'react'
import Navbar from '../Navbar/Navbar'
import BarraGov from '../BarraGov/BarraGov'
import Banner from '../Banner/Banner'
import Nosotros from '../Nosotros/Nosotros'
import Contacto from '../Contacto/Contacto'
import Servicios from '../Servicios/Servicios'
import Footer from '../Footer/Footer'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css'


export default function Home() {
  return (
    <div>
      <div className="whatsapp-icon">
        <a href="https://wa.me/57312546453" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <section>
        <BarraGov />
      </section>
      <section>
        <Navbar />
      </section>
      <section>
        <Banner />

      </section>

      <section>
        <Servicios />
        <hr />
      </section>

      <section>
        <Nosotros />
      </section>
      <hr />
      <section>
        <Contacto />

      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}
