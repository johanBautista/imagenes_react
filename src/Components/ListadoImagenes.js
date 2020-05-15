import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({ imagenes }) => {
  return (
    <div>
      {imagenes.map((imagen) => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
      <h2>hollaa</h2>
    </div>
  );
};

export default ListadoImagenes;
