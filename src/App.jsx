import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Ubicacion from './components/Ubicacion';
import Propiedad from './components/Propiedad';
import MetrosCuadrados from './components/MetrosCuadrados';
import Cotizador from './components/Cotizador';
import Historial from './components/Historial';
import {Link} from "react-router-dom";


function App() {
  const [tipoVivienda, setTipoVivienda] = useState('casa');
  const [ciudad, setCiudad] = useState('caba');
  const [metrosCuadrados, setMetrosCuadrados] = useState(20);

 

  return (
    <div className="App">
      <h1>Seguros del Hogar🏠</h1>
      <Propiedad tipoVivienda={tipoVivienda} setTipoVivienda={setTipoVivienda} />
      <Ubicacion ciudad={ciudad} setCiudad={setCiudad} />
      <MetrosCuadrados metrosCuadrados={metrosCuadrados} setMetrosCuadrados={setMetrosCuadrados} />
      <Cotizador tipoVivienda={tipoVivienda} ciudad={ciudad} metrosCuadrados={metrosCuadrados} />
      
      <Routes>
        <Route path='/Historial' element={<Historial />}/>
      </Routes>
      <Link to='/Historial'>Ver Historial</Link>
    </div>
  );
}

export default App;