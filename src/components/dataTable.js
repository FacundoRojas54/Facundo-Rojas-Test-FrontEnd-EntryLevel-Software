import React, { useContext } from 'react'
import { PeticionDelete } from '../helpers/AxiosHelper'
import { Context } from '../context/Context'
import { CircularProgress } from '@mui/material'

export const DataTable = React.memo( () => {

    const {url,usersData,setEditData,setUsersData,loading,limpiarFormulario}=useContext(Context)


    
    if (usersData.length >=1) {
        return (
            <div className='container'>
                <h1>Tabla de usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>RUT</th>
                            <th>Tipo</th>
                            <th>Telefono</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((data, id) => {
                            return(
                                <tr className={data.userstate}key={id}>

                                    <td>{data.name}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.rut}</td>
                                    <td>{data.type}</td>
                                    <td>{data.telephone}</td>
                                    <td>{data.userstate}</td>
                                    <td>
                                        <button onClick={()=>setEditData(data)}className='button'>Editar</button>
                                        <button onClick={(e)=>PeticionDelete(e,url,data,setUsersData,limpiarFormulario)}className='button'>Eliminar</button>
                                    </td>

                                </tr>
                    )
                        })}
                    
                    </tbody>
                </table>

                
                
            
            
            
            </div>
        )
        }else{
            if (loading === true){
                return(
                    <div>
                        <h1>{loading}</h1>
                        <h1>Tabla de usuarios</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>RUT</th>
                                    <th>Tipo</th>
                                    <th>Telefono</th>
                                    <th>Estado</th>
                                    <th></th>
                                </tr>
                            </thead>
                            </table>
                            <CircularProgress className='Loading'color="inherit"/>
                        </div>
                )
                }else{
                    return(
                        <div className='container'>
                            <h1>Tabla de usuarios</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>RUT</th>
                                        <th>Tipo</th>
                                        <th>Telefono</th>
                                        <th>Estado</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                </table>
                                <h1>No hay usuarios para mostrar</h1>
                        </div>
                    )
    }}})
