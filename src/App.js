import React, { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
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
