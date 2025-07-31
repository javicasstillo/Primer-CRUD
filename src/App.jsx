import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CrudTable from './components/CrudTable';
import CrudForm from './components/CrudForm';
import {useState } from "react"



function App() {

  const [datos, setDatos] = useState([]);
  const [inputPais, setInputPais] = useState("")
  const [inputEquipo, setInputEquipo] = useState("")

  const handleDelete = (objeto)=>{
        const nuevosDatos = datos.filter((item)=>{
            return item !==objeto
        })
        setDatos(nuevosDatos)
  }

  const [validacion, setValidacion] = useState("")

    const extraerEquipo =(e)=>{
        setInputEquipo(e.target.value)
    }

    const extraerPais = (e)=>{
        setInputPais(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const nuevoDato = {
            equipo: inputEquipo,
            pais: inputPais,
        }

        if (inputEquipo === "" || inputPais === ""){
            setValidacion("Datos incompletos. Por favor rellene ambos campos.")
            return
        }

        setDatos([...datos, nuevoDato])

        setInputEquipo("")
        setInputPais("")
        setValidacion("")

    }

  return <>
        <div className="py-3 bg-dark">
            <h1 className="text-center text-white ">C.R.U.D - Equipos de futbol</h1>
        </div>
        <div className="container py-3">
            <div className="d-flex justify-content-center">
               <CrudForm datos={datos} setDatos={setDatos} inputPais={inputPais} setInputPais={setInputPais} inputEquipo={inputEquipo} setInputEquipo={setInputEquipo} validacion={validacion} setValidacion={setValidacion} extraerEquipo={extraerEquipo} extraerPais={extraerPais} handleSubmit={handleSubmit} ></CrudForm>
            </div>
        </div>

        <div className="container py-3">
            <div className="d-flex justify-content-center">
                <CrudTable datos={datos} setDatos={setDatos} inputPais={inputPais} setInputPais={setInputPais} inputEquipo={inputEquipo} setInputEquipo={setInputEquipo} handleDelete={handleDelete} validacion={validacion} setValidacion={setValidacion} extraerEquipo={extraerEquipo} extraerPais={extraerPais} handleSubmit={handleSubmit}  ></CrudTable>
            </div>
            
        </div>
        
    </>
}

export default App
