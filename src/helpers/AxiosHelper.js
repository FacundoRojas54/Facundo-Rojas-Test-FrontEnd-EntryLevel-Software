import axios from "axios"
 

export const  PeticionGet = async(url, setUsersData) => {
    await axios.get(url).then(response=>{
        console.log('Operación GET realizada con éxito')
        setUsersData(response.data)
        }).catch(error => {
            console.log(error.message);
        })}

export const PeticionPost=async(e,url, selectedConsole, setUsersData, limpiarFormulario)=>{      
                    e.preventDefault()    
                    await axios.post(url, selectedConsole)
                    .then(response =>{
                        console.log('Operación POST realizada con éxito')
                        async function fetchData(){
                            await PeticionGet(url,setUsersData)}
                        fetchData()
                        limpiarFormulario()
                    }).catch(error => {
                        console.log(error.message);
                    })}

export const PeticionPut = async(e,url, selectedConsole,setUsersData,limpiarFormulario)=>{
                        e.preventDefault()
                        let urlUser = `${url}/${selectedConsole._id}`;
                        delete selectedConsole['_id']
                        await axios.put(urlUser, selectedConsole)
                        .then(response =>{
                            console.log('Operación PUT realizada con éxito')
                            async function fetchData(){
                                await PeticionGet(url,setUsersData)}
                            fetchData()
                            limpiarFormulario()
                        }).catch(error => {
                            console.log(error.message);
                        })}

export const PeticionDelete = async(e,url,data,setUsersData,limpiarFormulario)=>{
    e.preventDefault()
    let urlUser = `${url}/${data._id}`;
    await axios.delete(urlUser)
    .then(response =>{
        console.log('Operación DELETE realizada con éxito')
        async function fetchData(){
            await PeticionGet(url,setUsersData)}
        fetchData()
        limpiarFormulario()
    }).catch(error => {
        console.log(error.message);
    })}