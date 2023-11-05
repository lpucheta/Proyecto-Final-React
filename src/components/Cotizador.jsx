import React, { useState } from "react";
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import MetrosCuadrados from "./MetrosCuadrados";
import opciones from "./valores.json";
import "./Cotizador.css";


function Cotizador(props) {
  const [resultadoSeguro, setResultadoSeguro] = useState(0);

  const calcularSeguro = () => {
    let valorSeguro = 0;

    const tipoViviendaElegida = opciones.tiposVivienda.find(
      (viviendaOption) => viviendaOption.id === props.tipoVivienda
    );

    if (tipoViviendaElegida) {
      valorSeguro += tipoViviendaElegida.valor;
    }

    const ciudadSeleccionada = opciones.ciudades.find(
      (ciudadOption) => ciudadOption.id === props.ciudad
    );

    if (ciudadSeleccionada) {
      valorSeguro += ciudadSeleccionada.valor;
    }

    if (props.metrosCuadrados > 20) {
      valorSeguro += (props.metrosCuadrados - 20) * 5;
    }

    setResultadoSeguro(valorSeguro);
  }

  const limpiarCotizacion = () => {
    setResultadoSeguro(0);
  }

  const guardarCotizacionEnHistorial = () => {
    const cotizacion = {
      fecha: new Date().toLocaleString(),
      tipoVivienda: props.tipoVivienda,
      ubicacion: props.ciudad,
      metrosCuadrados: props.metrosCuadrados,
      total: resultadoSeguro,
    };
  
    const cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizaciones")) || [];
    cotizacionesGuardadas.push(cotizacion);
  
    localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesGuardadas));
  
    alert("Cotización guardada en historial");
  };
  
  return (
    <div className="container">
      <button onClick={calcularSeguro}>Cotizar</button>
      <button onClick={limpiarCotizacion}>Limpiar Cotización</button>
      <label className="resultado">Resultado del seguro: ${resultadoSeguro}</label>
      <button onClick={guardarCotizacionEnHistorial}>Guardar en Historial</button>
    </div>
  );
}

export default Cotizador;
