import { useState } from "react"
import Swal from 'sweetalert2'

function CrudTable({datos, setDatos, handleDelete, inputEquipo, inputPais, setInputEquipo, setInputPais, extraerEquipo, extraerPais}){

    const [itemEditar, setItemEditar] = useState("")
    const [validacionModal, setValidacionModal] = useState("")
    const handleGuardar =()=>{

        if (inputEquipo === "" || inputPais === ""){
            setValidacionModal("Datos incompletos. Por favor rellene ambos campos.")
            return
        } else {
            Swal.fire({
                title: "Edicion Completada",
                text: "Has modificado equipo y pais con exito",
                icon: "success"
            });
        }

        const datosOriginales = datos[itemEditar] //itemEditar es la posicion del elemento del array ya que lo inicializamos con index
        
        const edicion = [...datos] // copia el array anterior
        
        edicion[itemEditar] = {
            equipo: inputEquipo,
            pais: inputPais,
        }

        if(datosOriginales.equipo === inputEquipo && datosOriginales.pais === inputPais){
            Swal.fire({
                icon: "error",
                title: "¡No hay cambios!",
                text: "Los datos que estas poniendo son iguales a los anteriores",
                });
            return
        }

        

        setDatos(edicion)
        setInputEquipo("")
        setInputPais("")
        setValidacionModal("")

    }

    return <>
        <table className="table table-hover table-responsive">
            <tbody className="text-center">
                <tr>
                    <th>#</th>
                    <th>Equipo</th>
                    <th>Pais</th>
                    <th>Accion</th>
                </tr>
                {datos.length === 0 ? <tr>No hay datos</tr>
                    : datos.map((item, index)=>{
                        return <tr>
                            <td className="mb-0">{index}</td>
                            <td className="mb-0">{item.equipo}</td>
                            <td className="mb-0">{item.pais}</td>
                            <td className="d-flex justify-content-center gap-3">
                                <button className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#miModal" onClick={()=>{ setInputEquipo(item.equipo), setInputPais(item.pais), setItemEditar(index)
                                }} >Editar</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(item)}>Borrar</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        <div className="modal fade" id="miModal" tabIndex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="miModalLabel">Edicion</h5>
                    </div>

                    <form className="d-flex flex-column align-items-center gap-3">
                        <div className="d-flex flex-column mt-4 gap-3">
                            <label htmlFor="equipo" className="mt-1">Equipo:</label>
                            <input type="text" name="equipo" className="form-control w-100"  value={inputEquipo} onChange={extraerEquipo}/>
                        </div>
                        <div className="d-flex flex-column gap-3 mb-4">
                            <label htmlFor="pais" className="mt-1">Pais:</label>
                            <input type="text" name="pais" className="form-control w-100" value={inputPais} onChange={extraerPais}/>
                        </div>
                    </form>
                    <p className="mb-0 text-center text-danger mb-4">{validacionModal}</p>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                        <button type="button" className="btn btn-primary" onClick={handleGuardar}>Guardar</button>
                    </div>
                </div>
            </div>
      </div>
    </>
}   
export default CrudTable