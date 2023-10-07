const Listado =( {colab,enviarId}) => {

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
            {colab.map(colaborador => 
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td className="text-center">
                  <button className="btn btn-light" onClick={()=> { enviarId(colaborador.id)}}>🗑️</button>
                </td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
}

export default Listado;