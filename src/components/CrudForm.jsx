import {useEffect, useState } from "react"

function CrudForm({inputEquipo, inputPais, validacion,  extraerEquipo, extraerPais, handleSubmit}){

    return <div className="container">
        <form className="d-flex flex-column align-items-center gap-3">
            <div className="d-flex flex-column gap-3">
                <label htmlFor="equipo" className="mt-1">Equipo:</label>
                <input type="text" name="equipo" className="form-control" value={inputEquipo} onChange={extraerEquipo}/>
            </div>
            <div className="d-flex flex-column gap-3">
                <label htmlFor="pais" className="mt-1">Pais:</label>
                <input type="text" name="pais" className="form-control"  value={inputPais} onChange={extraerPais}/>
            </div>
            
            <div className="d-flex gap-3">
                <button type="submit" className="btn btn-info text-white" onClick={handleSubmit}>Agregar</button>
                
            </div>
        </form>

        <p className="text-center text-danger mt-3">{validacion}</p>

    </div>
    
    
}   
export default CrudForm