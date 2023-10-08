import Table from "react-bootstrap/Table";

const Listado = ({ lista, setLista, setColaboradores, agregarColaborador }) => {
  const eliminarColaborador = (colaborador) => {
    const listaFiltro = lista.filter((e) => e.id !== colaborador.id);
    setLista(listaFiltro);
    setColaboradores(listaFiltro);
  };

  const botonStyle = {
    width: "2rem",
    height: "2rem",
  };

  // Llamar a esta función cuando quieras agregar un nuevo colaborador
  const agregarNuevoColaborador = (nuevoColaborador) => {
    agregarColaborador(nuevoColaborador);
  };

  return (
    <>
      <Table className='tabla'>
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
          {lista.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td className="text-center">
                <button
                  style={{ ...botonStyle, backgroundColor: "red" }}
                  onClick={() => eliminarColaborador(colaborador)}
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
}

export default Listado;