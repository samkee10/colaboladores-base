import React, { useState } from 'react';

const Formulario = ({ setAlert, colaboradores, setColaboradores }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.correo === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      setAlert({
        error: true,
        msg: 'Completa todos los campos.',
        color: 'danger'
      });
      return;
    }

    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(nuevoColaborador.correo)) {
      setAlert({
        error: true,
        msg: 'El email debe ser válido.',
        color: 'danger'
      });
      return;
    }

    // Agregar el nuevo colaborador a la lista de colaboradores
    setColaboradores([...colaboradores, nuevoColaborador]);

    // Limpiar el formulario
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });

    setAlert({
      error: false,
      msg: 'Colaborador agregado',
      color: 'success'
    });
  };

  const generarId = () => {
    const d = new Date();
    return d.getHours() + d.getMinutes() + d.getSeconds();
  };

  const botonStyle = {
    backgroundColor: '#5200ff'
  };

  return (
    <>
      <div>
        <h2>Agregar Colaborador</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              value={nuevoColaborador.nombre}
              className="form-control"
              placeholder="Nombre del colaborador"
              onChange={(e) =>
                setNuevoColaborador({ ...nuevoColaborador, nombre: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              value={nuevoColaborador.correo}
              placeholder="Email del colaborador"
              onChange={(e) =>
                setNuevoColaborador({ ...nuevoColaborador, correo: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              value={nuevoColaborador.edad}
              placeholder="Edad del colaborador"
              onChange={(e) =>
                setNuevoColaborador({ ...nuevoColaborador, edad: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              value={nuevoColaborador.cargo}
              placeholder="Cargo del colaborador"
              onChange={(e) =>
                setNuevoColaborador({ ...nuevoColaborador, cargo: e.target.value })
              }
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number"
              value={nuevoColaborador.telefono}
              placeholder="Telefono del colaborador"
              onChange={(e) =>
                setNuevoColaborador({ ...nuevoColaborador, telefono: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success" type="submit" style={botonStyle}>
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;