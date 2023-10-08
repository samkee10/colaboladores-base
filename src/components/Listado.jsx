import {Table} from "react-bootstrap";

const Listado =( {lista, setLista, setColaboladores }) => {
  const eliminarColabolador = (colaborador) => {
    const listaFiltro = lista.filter((e) =>e.id !== colaborador.id);
    setLista(listaFiltro);
    setColaboladores(listaFiltro);
  };

  const botonStyle = {
    width: "2rem",
    height: "2rem",
    variant: "danger",
  }
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
            {lista.map((colaborador) =>(
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td className="text-center">
                  <button style={botonStyle} onClick={() => eliminarColabolador(colaborador)}
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