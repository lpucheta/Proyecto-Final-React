import React from "react";

function Ubicacion({ciudad, setCiudad}){
    return(
    <label>
        Ciudad:
        <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
            <option value="caba">CABA</option>
            <option value="provincia">Gran Buenos Aires</option>
            <option value="interior">Interior</option>
        </select>
    </label>
    )
}

export default Ubicacion;