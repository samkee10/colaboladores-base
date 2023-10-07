import './App.css'
import { BaseColaboradores } from './BaseColaboladores';
import Listado from './components/Listado'
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import { useState } from 'react';


function App() {
  const [msg, setAlert] = useState({
    error: false,
    msg: "",
    color: "",
  });

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboladores);
  const [busqueda,setBusqueda]= useState('')
 
 
  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  };
  const agregarColaboradores = (nuevoColaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
  }
  const guardarId = (colaboradorId) => {
    const nuevaLista = listaColaboradores.filter(colaborador => colaborador.id != colaboradorId)
    setListaColaboradores(nuevaLista)
  }


  
  return (
    <>
      <div className="row justify-content-start mt-3">
        <div className="col-8"></div>
          <Buscador 
            busqueda={busqueda}
            setTerminoBusqueda={setBusqueda}
          />
          <Listado 
            lista={ejecutarBusqueda}
            enviarId={guardarId}  />
    <div className="col-4">
    </div>
    <div className="col-4"></div>
    <Formulario
            colaboradores={agregarColaboradores}
            validacion={mostrarValidacion}
            setAlert={setAlert}
          />
      <Alert 
        msg= {msg.msg}
        color = {msg.color} 
      />
    </div>
    </>
  );
}

export default App;
