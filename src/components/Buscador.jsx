function Buscador({ colaboladores, setBusqueda }) {
const buscar = (dato) => {
  const listaFiltro = colaboladores.filter(
  (e)=>
    e.nombre.toLowerCase().includes(dato.toLowerCase()) ||
    e.correo.toLowerCase().includes(dato) ||
    e.edad.includes(dato)||
    e.cargo.toLowerCase().includes(dato)||
    e.telefono.includes(dato)
    );
    setBusqueda(listaFiltro);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Buscar un colabolador"
        onChange={(e) => buscar(e.target.value)}
        className="form-control mb-3"
      />
    </>
  );
}

export default Buscador