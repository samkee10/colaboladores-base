import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboladores';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import Listado from './components/Listado';

function App() {
  const [msg, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const nuevoId = Date.now().toString();
    const colaboradorNuevo = {
      id: nuevoId,
      nombre: nuevoColaborador.nombre,
      correo: nuevoColaborador.correo,
      edad: nuevoColaborador.edad,
      cargo: nuevoColaborador.cargo,
      telefono: nuevoColaborador.telefono,
    };
    setListaColaboradores([...listaColaboradores, colaboradorNuevo]);
    setAlert({
      error: false,
      msg: 'Colaborador agregado con éxito',
      color: 'success',
    });
  };

  const eliminarColaborador = (colaborador) => {
    const listaFiltro = listaColaboradores.filter((e) => e.id !== colaborador.id);
    setListaColaboradores(listaFiltro);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-start">
        <div className="col-8">
          <Buscador setBusqueda={setBusqueda} />
          <Listado
            lista={listaColaboradores}
            busqueda={busqueda}
            eliminarColaborador={eliminarColaborador}
            setLista={setListaColaboradores}
          />
        </div>
        <div className="col-4">
          <Formulario
            setAlert={setAlert}
            agregarColaborador={agregarColaborador}
          />
          {msg.msg && <Alert color={msg.color} msg={msg.msg} />}
        </div>
      </div>
    </div>
  );
}

export default App;