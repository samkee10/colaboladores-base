function Buscador({ listaColaboladores, setBusqueda }) {
  const buscar = (dato) => {
    const listaFiltro = listaColaboladores.filter(
      (e) =>
        e.nombre.toLowerCase().includes(dato.toLowerCase()) ||
        e.correo.toLowerCase().includes(dato.toLowerCase()) || 
        e.edad.includes(dato) ||
        e.cargo.toLowerCase().includes(dato.toLowerCase()) ||
        e.telefono.includes(dato)
    );
    setBusqueda(listaFiltro);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar un colaborador"
        onChange={(e) => buscar(e.target.value)}
        className="form-control mb-3"
      />
    </>
  );
}

export default Buscador;