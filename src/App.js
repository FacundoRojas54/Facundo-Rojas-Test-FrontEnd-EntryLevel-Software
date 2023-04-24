import { useState } from 'react';
import './App.css';
import { DataRequest } from './components/dataRequest';
import { DataTable } from './components/dataTable';
import { Context } from './context/Context';





function App() {

  const BaseUrl = 'https://crudcrud.com/api/e1131173e6094dd0adfee22780d0857b'
  const place= '/users'
  const url= BaseUrl+place
  const [usersData, setUsersData] = useState([])
  const [editData, setEditData]= useState(null)
  const [loading, setLoading]=useState(true)

  //Devuelve el formulario y editData a su estado por defecto.
  const limpiarFormulario= () => {
    document.getElementById("miForm").reset();
    setEditData(null)
    setSelectedConsole(EmptyForm)
    }

    //Formulario vacio por defecto
  const EmptyForm = {
    name: '',
    lastname:'',
    rut: '',
    type: 'default',
    telephone: '',
    userstate: 'default',
  }

  const [selectedConsole, setSelectedConsole]= useState(EmptyForm)

  return (
    <div className="App">
      <Context.Provider value={{url, editData, setEditData, usersData, setUsersData,EmptyForm, selectedConsole,setSelectedConsole,loading,setLoading,limpiarFormulario}}>
      <DataRequest/>
      <DataTable/>
      </Context.Provider>
     
    </div>
  );
}  

export default App;