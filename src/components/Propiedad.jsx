import React from "react";


function Propiedad({tipoVivienda, setTipoVivienda}){
    return(
       <label>
        Tipo de Vivienda:
        <select value={tipoVivienda} onChange={(e) =>setTipoVivienda(e.target.value)}>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="barriop">Barrio Privado</option>
            <option value="oficina">Oficina</option>
        </select>
       </label>

);
}

export default Propiedad;