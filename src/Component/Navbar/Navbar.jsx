
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers,faEnvelope,faFile} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/ctc-logo.png';
import portafolio from'../../public/PORTAFOLIO.pdf'
import './navbar.css';

export default function NavbarComponent() {
  return (
    <Navbar collapseOnSelect >
      <Container>
        <a href="https://www.ctc.edu.co/" target="_blank" rel="noopener noreferrer"><img src={logo} alt="Img Not Found" width="150px" className="mb-2" /></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mx-2">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Puedes agregar iconos a los enlaces utilizando FontAwesome */}
          </Nav>
          <Nav.Item>
            <Nav.Link href="/" className="mx-4 nav-link-custom">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Inicio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#nosotros" className="mx-4 nav-link-custom">
              <FontAwesomeIcon icon={faUsers} className="me-2" />
              Nosotros
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contacto" className="mx-4 nav-link-custom">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contacto
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* Enlace al PDF */}
            <Nav.Link
              href={portafolio}  // Reemplaza con la ruta correcta al archivo PDF
              target="_blank"
              className="mx-4 nav-link-custom"
            >
              <FontAwesomeIcon icon={faFile} className="me-2" />
              Portafolio
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
