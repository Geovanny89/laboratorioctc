import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import gov from '../../assets/logo-gov.png'
export default function BarraGov() {
  return (
    <div>
        <Navbar expand="lg" className="bg-primary " >
           <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"><img src={gov} alt="Img Not found" width="150px"  /></a> 
        </Navbar>
    </div>
  )
}
