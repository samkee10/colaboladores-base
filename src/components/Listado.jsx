import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ lista, busqueda, eliminarColaborador, setLista }) => {
  const borrarColaborador = (colaborador) => {
    const listaFiltro = lista.filter((e) => e.id !== colaborador.id);
    setLista(listaFiltro);
  };

  const botonStyle = {
    width: '2rem',
    height: '2rem',
  };

  const listaFiltrada = busqueda
    ? lista.filter(
        (colaborador) =>
          colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())  ||
          colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
          colaborador.edad.toString().includes(busqueda) ||
          colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())  ||
          colaborador.telefono.toString().includes(busqueda)
      )
    : lista;

  return (
    <>
      <Table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listaFiltrada.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td className="text-center">
                <button
                  style={{ ...botonStyle, backgroundColor: 'red' }}
                  onClick={() => borrarColaborador(colaborador)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;