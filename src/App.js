import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoImagenes from './Components/ListadoImagenes';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '16563696-8ef8c45baee9f20cbc7294464';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <Header titulo="Buscador de imágenes" />
      <div className="contenido-principal contenido">
        <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} />
      </div>
      <ListadoImagenes imagenes={imagenes} />
    </div>
  );
}

export default App;
