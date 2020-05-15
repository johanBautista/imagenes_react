import React, { useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';

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
      <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="Por favor utilizar el buscador" /> : null}
        <Buscador
          name="imagenTexto"
          placeholder="Buscar imagen"
          type="text"
          onChange={(e) => guardarTexto(e.target.value)}
        />
        <Boton value="Buscar" type="submit" />
      </form>
    </div>
  );
};

export default Formulario;
