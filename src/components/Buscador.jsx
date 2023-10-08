import React from 'react';

function Buscador({ setBusqueda }) {
  const buscar = (dato) => {
    setBusqueda(dato);
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