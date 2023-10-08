import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboladores';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import Listado from "./components/Listado";

function App() {
  const [msg, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');

  // Función para agregar un nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    // Genera un nuevo ID para el colaborador (asegúrate de que sea único)
    const nuevoId = Date.now().toString();

    // Crea un nuevo objeto de colaborador con el ID generado y los datos del formulario
    const colaboradorNuevo = {
      id: nuevoId,
      nombre: nuevoColaborador.nombre,
      correo: nuevoColaborador.correo,
      edad: nuevoColaborador.edad,
      cargo: nuevoColaborador.cargo,
      telefono: nuevoColaborador.telefono
    };

    // Agrega el nuevo colaborador a la lista de colaboradores
    setListaColaboradores([...listaColaboradores, colaboradorNuevo]);

    // Restaura el mensaje de alerta
    setAlert({
      error: false,
      msg: 'Colaborador agregado',
      color: 'success'
    });
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-start">
        <div className="col-8">
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <Listado
            lista={listaColaboradores}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setListaColaboradores={setListaColaboradores}
            setAlert={setAlert}
          />
        </div>
        <div className="col-4">
          <Formulario
            setAlert={setAlert}
            agregarColaborador={agregarColaborador}
          />
          <Alert color="success" msg="Colaborador agregado con éxito" />
        </div>
      </div>
    </div>
  );
}

export default App;