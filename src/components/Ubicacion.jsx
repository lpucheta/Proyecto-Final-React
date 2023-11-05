import React from "react";
import "./Ubicacion.css";

function Ubicacion({ciudad, setCiudad}){
    return(
        <div className="component-container">
    <label className="component-label">
        Ciudad:
        <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} required>
            <option value="caba">CABA</option>
            <option value="provincia">Gran Buenos Aires</option>
            <option value="interior">Interior</option>
        </select>
    </label>
    </div>
    )
}

export default Ubicacion;