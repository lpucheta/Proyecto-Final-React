import React from "react";

function MetrosCuadrados({metrosCuadrados, setMetrosCuadrados}){

    return(
        <label>
            Metros Cuadrados:
            <input 
            type="number" 
            value={metrosCuadrados}
            min={20}
            onChange={(e) => setMetrosCuadrados(parseInt(e.target.value,10))}
            />
        </label>

    );
}

export default MetrosCuadrados;