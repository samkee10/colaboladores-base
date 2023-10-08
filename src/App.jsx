import './App.css';
import { BaseColaboradores } from './BaseColaboladores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [msg, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="container mt-3">
      <div className="row justify-content-start">
        <div className="col-8">
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <Listado
            listaColaboradores={listaColaboradores}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setListaColaboradores={setListaColaboradores}
            setAlert={setAlert}
          />
        </div>
        <div className="col-4">
          <h3>Agregar colaborador</h3>
          <Formulario
            setAlert={setAlert}
            listaColaboradores={listaColaboradores}
            setListaColaboradores={setListaColaboradores}
          />
          {msg.msg && (
            <div className={`alert alert-${msg.color} mt-3`}>
              {msg.msg}
            </div>
          )}
          <Alert color="success" msg="Colaborador agregado con éxito" />
        </div>
      </div>
    </div>
  );
}

export default App;