import React, { useEffect, useContext } from 'react';
import { PeticionGet, PeticionPost, PeticionPut } from '../helpers/AxiosHelper';
import { Context } from '../context/Context';


export const DataRequest= ()=>{

    const {url, selectedConsole,setSelectedConsole,editData,setUsersData,EmptyForm,setLoading,limpiarFormulario}=useContext(Context)

    //UseEffect para realizar la petición de datos al iniciar la página
    useEffect(() =>{
        async function fetchData(){
        await PeticionGet(url, setUsersData)
        setLoading(false)
        }
        fetchData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);


    //UseEffect para que cada vez que el usuario pulse el botón de editar, se ingresen los datos en el formulario.
    useEffect(() => {
        if (editData !== null){
            setSelectedConsole(editData)
        } else {
            setSelectedConsole(EmptyForm)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [editData])

    
    
         
    
    //Función onChange para tomar los datos del formulario
    const handleChange= (e) => {
            const {name, value}= e.target;
            setSelectedConsole(prevState => ({
                ...prevState,
                [name]: value
            }))}
    
    const ButtonSubmit = (e) => {
        if (editData !== null){
            return(
                <input className='button' type= 'submit' value={'Actualizar' }/>
            )
        }else{
            return(
            <input className='button' type= 'submit' value={'Enviar' }/>
            )
        }
    }
    //Función para enviar datos del formulario, varia dependiendo de si el usuario esta editando o actualizando datos, a la vez obliga al usuario a
    //seleccionar una opción en los input select
    const Submit = (e) =>{
        e.preventDefault()
        if (selectedConsole.type === 'default' || selectedConsole.userstate === 'default'){
            alert('Seleccione tipo de usuario y estado de actividad')
        }else{
            if (editData !== null){     
                PeticionPut(e,url, selectedConsole,setUsersData,limpiarFormulario)
             }else{
                PeticionPost(e,url, selectedConsole, setUsersData, limpiarFormulario)
             }
        }
        
    }
    //Boton para limpiar el formulario, varia dependiendo de si el usuario está editando o actualizando datos
    const ButtonCancel = () => {
        if (editData !== null){
            return(
                <input className='button' type= 'reset' value={'Cancelar'} onClick={limpiarFormulario}/>
            )
        }else{
            return(
                <input className='button' type= 'reset' value={'Limpiar'} onClick={limpiarFormulario}/>
            )
        }}
    
    


        
    

    return (
        <div>
            <form id='miForm' value={selectedConsole} onSubmit={Submit}>
                    <input
                        type = 'text'
                        name = 'name'
                        placeholder = 'Nombre'
                        onChange={handleChange}
                        value= {selectedConsole.name}
                        required
                        
                    />

                    <input
                        type = 'text'
                        name='lastname'
                        placeholder = 'Apellido'
                        onChange={handleChange}
                        value= {selectedConsole.lastname}
                        required
                    />

                    <input
                        type = 'number'
                        name= 'rut'
                        placeholder = 'RUT'
                        onChange={handleChange}
                        value= {selectedConsole.rut}
                    />

                    <select name='type' onChange={handleChange} value= {selectedConsole.type}>
                        <option value='default' disabled>Tipo</option>
                        <option>Consumidor Final</option>
                        <option>Empresa</option>
                    </select>

                    <input
                        type='tel'
                        name='telephone'
                        placeholder = 'Número de celular'
                        onChange={handleChange}
                        value= {selectedConsole.telephone}
                        required
                    />

                    <select name='userstate' onChange={handleChange} value= {selectedConsole.userstate}>
                        <option value='default' disabled>Estado</option>
                        <option>Activo</option>
                        <option>Inactivo</option>
                    </select>
                    
                    <ButtonSubmit/>
                    <ButtonCancel/>
            </form>
        </div>
    )}