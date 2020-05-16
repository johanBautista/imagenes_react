import React, { useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import ListadoImagenes from './Components/ListadoImagenes';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPAginaActual] = useState(1);
  const [totalpaginas, guardarTotalPagins] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '16563696-8ef8c45baee9f20cbc7294464';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      //calcular total paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina,
      );
      guardarTotalPagins(calcularTotalPaginas);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="contenido-principal contenido">
        <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
