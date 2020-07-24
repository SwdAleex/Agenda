import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

import '../resources/css/formulario.sass';

const Formulario = ({ agendarCita }) => {
  const [cita, citaSet] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, errorSet] = useState(false);

  // ******  CREAR CITA  ********

  const crearCita = (event) => {
    citaSet({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };

  // VALORES DE LOS INPUTS

  const { mascota, dueño, fecha, hora, sintomas } = cita;

  // ******* ENVIAR CITA ********

  const enviarCita = (event) => {
    event.preventDefault();

    // ******  VALIDAR FORMULARIO ******

    if (
      mascota.trim() === '' ||
      dueño.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      errorSet(true);
      return;
    }

    errorSet(false);

    // ****** ASIGNAR ID ******

    cita.id = uuidv4();

    // ****** AGENDAR LA CITA ******

    agendarCita(cita);

    // ****** RESETEAR FORMULARIO *****

    citaSet({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };
  return (
    <form className='d-flex flex-column mb-3' onSubmit={enviarCita}>
      {error ? <p className='error'>TODOS LOS CAMPOS SON NECESARIOS</p> : null}
      <label>Nombre de mascota</label>
      <input name='mascota' type='text' onChange={crearCita} value={mascota} />
      <label>Nombre del dueño</label>
      <input name='dueño' type='text' onChange={crearCita} value={dueño} />
      <div className='col-12 d-flex justify-content-between mt-1 mb-2 p-0'>
        <div className='col-6 p-0 pr-1 d-flex flex-column'>
          <label>Fecha</label>
          <input name='fecha' type='date' onChange={crearCita} value={fecha} />
        </div>
        <div className='col-6 p-0 pl-1 d-flex flex-column'>
          <label>Hora</label>
          <input name='hora' type='time' onChange={crearCita} value={hora} />
        </div>
      </div>
      <label>Síntomas</label>
      <textarea name='sintomas' onChange={crearCita} value={sintomas} />
      <button type='submit' className='btn btn-dark btn-sm mt-4 col-6 mx-auto'>
        Agendar
      </button>
    </form>
  );
};

Formulario.propTypes ={
  agendarCita: PropTypes.func.isRequired
}

export default Formulario;
