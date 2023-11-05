import React from "react";

function MetrosCuadrados({metrosCuadrados, setMetrosCuadrados}){

    return(
        <div className="component-container">
        <label className="component-label">
            Metros Cuadrados:
            <input 
            type="number" 
            value={metrosCuadrados}
            min={20}
            onChange={(e) => setMetrosCuadrados(parseInt(e.target.value,10))}
            />
        </label>
        </div>
    );
}

export default MetrosCuadrados;