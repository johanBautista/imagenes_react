import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';

function App() {
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '1732750-d45b5378879d1e877cd1d35a6';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <Header titulo="Buscador de imágenes" />
      <div className="contenido-principal contenido">
        <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} />
      </div>
    </div>
  );
}

export default App;
