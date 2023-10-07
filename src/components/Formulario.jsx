import React, { useState } from 'react';

const Formulario = ({setAlert ,colab}) => {
  const [nuevoColab, setNuevoColab] = useState(
    {
      id: '',
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    }
  )

  const handleSubmit = (e) => { 
    e.preventDefault()
    if (
      nuevoColab.nombre() === '' ||
      nuevoColab.correo() === '' ||
      nuevoColab.edad()=== '' ||
      nuevoColab.cargo()=== '' ||
      nuevoColab.telefono()=== ''
      ) {
        setAlert({
          error:true,
          msg:'Completa todo los campos!',
          color:'danger'
      })
      return
    }
    else if (
    nuevoColab.nombre !== '' &&
    nuevoColab.correo !== '' &&
    nuevoColaborador.edad !== '' &&
    nuevoColaborador.cargo !== '' &&
    nuevoColaborador.telefono !== '')
    {if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(nuevoColab.correo)) {
        setAlert({
          error:true,
          msg:'El email debe ser valido',
          color:'danger'
          });
      return
    }
  }
  setAlert({
    error:false,
    msg:'Colaborador agregado',
    color:'success'
  })
  colab(nuevoColab)
  setNuevoColab(
    {
      id: '',
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    }
  )
}
const generarId = () => {
  const d = new Date()
  return d.getHours() + d.getMinutes() + d.getSeconds()
};
const botonStyle = {
  backgroundColor: '#5200ff',
};

return (
  <>
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            value={nuevoColab.nombre}
            className="form-control"
            placeholder="Nombre del colaborador"
            onChange={(e) => setNuevoColab(
              {...nuevoColab,id: generarId(),
                nombre: e.target.value,}
                )
              }
          />
        </div>
        <div  className="form-group mb-3">
          <input
            type="email"
            value={nuevoColab.correo}
            placeholder="Email del colaborador"
            onChange={(e) => setNuevoColab(
              {...nuevoColab,correo: e.target.value,}
              )
            }
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            value={nuevoColab.edad}
            placeholder="Edad del colaborador"
            onChange={(e) => setNuevoColab(
              {...nuevoColaborador,edad: e.target.value,}
              )
            }
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            value={nuevoColabr.cargo}
            placeholder="Cargo del colaborador"
            onChange={(e) => setNuevoColab(
              {...nuevoColab,cargo: e.target.value,}
              )
            }
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            value={nuevoColab.telefono}
            placeholder="Telefono del colaborador"
            onChange={(e) => setNuevoColab(
              {...nuevoColab,telefono: e.target.value,}
              )
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
}

export default Formulario;