import React from 'react';
import PropTypes from 'prop-types'

import '../resources/css/cita.sass';

const Cita = ({ cita, eliminarCita }) => {
  const { mascota, dueño, fecha, hora, sintomas, id } = cita;

  return (
    <div className='col-12 col-lg-12 mx-auto mb-4 p-3 cita'>
      <div className='col-12 m-0 mb-1 p-0'>
        <p className='bold'>
          Mascota: 
          <i className='fa fa-trash trash' aria-hidden='true' onClick={() => eliminarCita(id)}></i>
        </p>
        <p>{mascota}</p>
      </div>
      <div className='col-12 m-0 mb-1 p-0'>
        <p className='bold'>Dueño:</p>
        <p>{dueño}</p>
      </div>
      <div className='d-flex justify-content-between m-0 mb-1 p-0'>
        <p className='bold'>Fecha: </p>
        <p>{fecha}</p>
        <p className='bold'>Hora: </p>
        <p>{hora}</p>
      </div>
      <div className='col-12 m-0 p-0'>
        <p className='bold'>Síntomas.</p>
        <p>{sintomas}</p>
      </div>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;
