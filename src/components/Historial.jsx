import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Historial() {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    
    const cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizaciones")) || [];
    setCotizaciones(cotizacionesGuardadas);
  }, []);

  return (
    <div>
      <h2>Historial de Cotizaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de Vivienda</th>
            <th>Ubicación</th>
            <th>Metros Cuadrados</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fecha}</td>
              <td>{cotizacion.tipoVivienda}</td>
              <td>{cotizacion.ubicacion}</td>
              <td>{cotizacion.metrosCuadrados} m²</td>
              <td>${cotizacion.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/'>Volver al Inicio</Link>
    </div>
  );
}

export default Historial;
