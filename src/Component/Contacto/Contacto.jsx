import React, { useState } from 'react'
import './contacto.css'
import { Button } from 'react-bootstrap';


function validate(input) {
  let errors = {};
  if (!input.nombre)
    errors.nombre = '* Campo Obligatorio';
    else if (/[^A-Za-z ]+/g.test(input.nombre)) errors.nombre = '* Nombre no puede tener caracteres especiales o tildes'
  if (!input.apellido)
    errors.apellido = "* Campo Obligatorio";
    else if (/[^A-Za-z ]+/g.test(input.apellido)) errors.apellido = '* Apellido no puede tener caracteres especiales'

  if (!input.telefono)
    errors.telefono = "* Campo Obligatorio"
  else if (/[^0-9 ]+/g.test(input.telefono)) errors.telefono = '* El Numero de telefono valido es en numeros'

  return errors;
}

export default function Contacto() {
  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje:"",

  });
 

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = () => {
    const validationErrors = validate(input);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes realizar la lógica para guardar los datos o enviarlos al servidor

      // Restablecer los valores de los campos del formulario
      setInput({
        nombre: "",
        apellido: "",
        telefono: "",
        mensaje:""
      });
     
    }
  };
 


  return (
    <div id='contacto'>
      <form action="">
        
        <h2>Contacto</h2>
        <label htmlFor="">Nombre: </label>
       
        <input type="text" name="nombre" id="nombre" placeholder='Nombre' value={input.nombre}
          onChange={handleInputChange} />
        {errors.nombre && <span className="error">{errors.nombre}</span>}


        <label htmlFor="">Apellido:</label>
        <input type="text" name='apellido' id='apellido' placeholder='Apellido' value={input.apellido}
          onChange={handleInputChange} />
        {errors.apellido && <span className="error">{errors.apellido}</span>}

        <label htmlFor="">Telefono:</label>
        <input type="text" name='telefono' id='telefono' placeholder='Telefono' value={input.telefono}
          onChange={handleInputChange}
        />
        {errors.telefono && <span className="error">{errors.telefono}</span>}

        <label htmlFor="">Mensaje:</label>
        <textarea name="mensaje" placeholder='Escriba su mensaje' value={input.mensaje} onChange={handleInputChange}></textarea>
        
        <Button onClick={handleFormSubmit}>Enviar</Button>
      </form>
    </div>
  )
}
