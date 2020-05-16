import React, { useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import Header from './Header';

import PropTypes from 'prop-types';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #00cc995f;
  border: none;
  width: 25%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00cc99e4;
    cursor: pointer;
  }
`;
const Buscador = styled.input`
  margin: 20px;
  font-size: 20px;
  padding: 10px;
  border: none;
  width: 60%;
  border-radius: 10px;
  color: #6b6b6b;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00cc995f;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarBusqueda }) => {
  const [texto, guardarTexto] = useState('');
  const [error, guardarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusqueda(texto);
  };

  return (
    <div>
      <Header titulo="Buscador de imágenes" />

      <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="Por favor utilizar el buscador" /> : null}
        <Buscador
          name="imagenTexto"
          placeholder="Ej: Café"
          type="text"
          onChange={(e) => guardarTexto(e.target.value)}
        />
        <Boton value="Buscar" type="submit" />
      </form>
      <a
        href="https://pixabay.com/es/"
        className="enlace"
        target="_blank"
        rel="noopener noreferrer"
      >
        <small>pixabay</small>
      </a>
    </div>
  );
};

Formulario.protoTypes = {
  guardarBusqueda: PropTypes.func.isRequired,
};
export default Formulario;
