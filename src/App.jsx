import React, { useState, useEffect } from 'react';

import './resources/css/app.sass';

import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // TEST

  /*   const citaTest = {
    mascota: 'Nombre de Mascota',
    dueño: '1234-56-78',
    hora: '12:34 AM',
    sintomas: 'Solo duerme',
  }; */

  // INTERACTUANDO CON LOCALSTORAGE

  let agendaInicial = JSON.parse(localStorage.getItem('agenda'));

  if (!agendaInicial) {
    agendaInicial = [];
  }

  // AGENDA (LISTADO DE CITAS)

  const [agenda, agendaSet] = useState(agendaInicial);

  // DETECTANDO CAMBIOS EN EL COMPONENTE

  useEffect(() => {
    let agendaInicial = JSON.parse(localStorage.getItem('agenda'));
    if (agendaInicial) {
      localStorage.setItem('agenda', JSON.stringify(agenda));
    } else {
      localStorage.setItem('agenda', JSON.stringify([]))
    }
  }, [agenda]);

  // AGREGAR CITAS A LA AGENDA

  const agendarCita = (cita) => {
    agendaSet([...agenda, cita]);
  };

  // ELIMINAR CITA DE LA AGENDA

  const eliminarCita = (id) => {
    agendaSet(agenda.filter((cita) => cita.id !== id));
  };

  // ENCABEZADO CONDICIONAL
  const titulo =
    agenda.length > 0 ? 'AGENDA' : 'NO TIENES NINGUNA CITA AGENDADA';

  return (
    <section>
      <div className='col-12 col-lg-10 mx-auto mt-5'>
        <div className='col-12 text-center title'>
          <p>Administrador de citas</p>
        </div>
        <div className='col-10 d-flex flex-column flex-md-row form-container mx-auto'>
          <div className='col-12 col-md-6'>
            <Formulario 
            agendarCita={agendarCita}
             />
          </div>
          <div className='col-12 col-md-6 agenda'>
            <h5>{titulo}</h5>
            {agenda.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
            {/* ***** TEST ****** */}
            {/* <Cita cita = {citaTest} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
