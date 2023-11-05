import React from "react";
import "./Propiedad.css";



function Propiedad({tipoVivienda, setTipoVivienda}){
    return(
        <div className="component-container">
       <label className="component-label">
        Tipo de Vivienda:
        <select value={tipoVivienda} onChange={(e) =>setTipoVivienda(e.target.value)} required>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="barriop">Barrio Privado</option>
            <option value="oficina">Oficina</option>
        </select>
       </label>
</div>
);
}

export default Propiedad;