// import React, { useState } from 'react'
// import './contacto.css'
// import { Button } from 'react-bootstrap';


// function validate(input) {
//   let errors = {};
//   if (!input.nombre)
//     errors.nombre = '* Campo Obligatorio';
//     else if (/[^A-Za-z ]+/g.test(input.nombre)) errors.nombre = '* Nombre no puede tener caracteres especiales o tildes'
//   if (!input.apellido)
//     errors.apellido = "* Campo Obligatorio";
//     else if (/[^A-Za-z ]+/g.test(input.apellido)) errors.apellido = '* Apellido no puede tener caracteres especiales'

//   if (!input.telefono)
//     errors.telefono = "* Campo Obligatorio"
//   else if (/[^0-9 ]+/g.test(input.telefono)) errors.telefono = '* El Numero de telefono valido es en numeros'

//   return errors;
// }

// export default function Contacto() {
//   const [errors, setErrors] = useState({})

//   const [input, setInput] = useState({
//     nombre: "",
//     apellido: "",
//     telefono: "",
//     mensaje:"",

//   });
 

//   const handleInputChange = (event) => {
//     setInput({ ...input, [event.target.name]: event.target.value });
//   };

//   const handleFormSubmit = () => {
//     const validationErrors = validate(input);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       // Aquí puedes realizar la lógica para guardar los datos o enviarlos al servidor

//       // Restablecer los valores de los campos del formulario
//       setInput({
//         nombre: "",
//         apellido: "",
//         telefono: "",
//         mensaje:""
//       });
     
//     }
//   };
 


//   return (
//     <div id='contacto'>
//       <form action="">
        
//         <h2>Contacto</h2>
//         <label htmlFor="">Nombre: </label>
       
//         <input type="text" name="nombre" id="nombre" placeholder='Nombre' value={input.nombre}
//           onChange={handleInputChange} />
//         {errors.nombre && <span className="error">{errors.nombre}</span>}


//         <label htmlFor="">Apellido:</label>
//         <input type="text" name='apellido' id='apellido' placeholder='Apellido' value={input.apellido}
//           onChange={handleInputChange} />
//         {errors.apellido && <span className="error">{errors.apellido}</span>}

//         <label htmlFor="">Telefono:</label>
//         <input type="text" name='telefono' id='telefono' placeholder='Telefono' value={input.telefono}
//           onChange={handleInputChange}
//         />
//         {errors.telefono && <span className="error">{errors.telefono}</span>}

//         <label htmlFor="">Mensaje:</label>
//         <textarea name="mensaje" placeholder='Escriba su mensaje' value={input.mensaje} onChange={handleInputChange}></textarea>
        
//         <Button onClick={handleFormSubmit}>Enviar</Button>
//       </form>
//     </div>
//   )
// }
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contacto.css'

function validate(input) {
  let errors = {};
  if (!input.nombre)
    errors.nombre = '* Campo Obligatorio';
    else if (/[^A-Za-z ]+/g.test(input.nombre)) errors.nombre = '* Nombre no puede tener caracteres especiales o tildes'
  if (!input.apellido)
    errors.apellido = "* Campo Obligatorio";
    else if (/[^A-Za-z ]+/g.test(input.apellido)) errors.apellido = '* Apellido no puede tener caracteres especiales'
    if (!input.email)
    errors.email = "* Campo Obligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))
    errors.email = '* No es un correo válido';
  if (!input.telefono)
    errors.telefono = "* Campo Obligatorio"
  else if (/[^0-9 ]+/g.test(input.telefono)) errors.telefono = '* El Numero de telefono valido es en numeros'

  return errors;
}

export default function Contacto() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const input = {
      nombre: form.current.user_name.value,
      apellido: form.current.user_apellido.value, // assuming you add 'user_apellido' to the input fields
      telefono: form.current.user_telefono.value,
      email:form.current.user_email.value,
      mensaje: form.current.message.value,
    };

    const validationErrors = validate(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_z0qkbyo', 'template_y3q193i', form.current, 'NBKcJaw_TB_V0l5kn')
        .then((result) => {
          console.log(result.text);
          // Additional logic after successful submission
        }, (error) => {
          console.log(error.text);
          // Handle error if necessary
        });

      // Reset form fields
      form.current.reset();
    }
  };

  return (
    <form id='contacto' className="contact-form" ref={form} onSubmit={sendEmail}>
      <h2 >Contacto</h2>

      <label htmlFor="user_name">Nombre:</label>
      <input type="text" name="user_name" />

      {errors.nombre && <span className="error">{errors.nombre}</span>}

      <label htmlFor="user_apellido">Apellido:</label>
      <input type="text" name="user_apellido" />

      {errors.apellido && <span className="error">{errors.apellido}</span>}
      <label htmlFor="user_email">Email:</label>
      <input type="text" name="user_email" />
      {errors.email && <span className="error">{errors.email}</span>}

      <label htmlFor="user_telefono">Télefono:</label>
      <input type="text" name="user_telefono" />

      {errors.telefono && <span className="error">{errors.telefono}</span>}

      <label htmlFor="message">Mensaje:</label>
      <textarea name="message"></textarea>

      <input id="boton" type="submit" value="Enviar" />
    </form>
  );
};
