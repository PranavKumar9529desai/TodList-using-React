import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo' ;
import { Todo } from './components/Todo';
import axios from 'axios';


function App() {
 const [tasks,setTasks] = useState([]);

        useEffect(()=>{
        fetchData();
    } , []);

    function fetchData()
    {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/todos`)
          .then(response =>{
            setTasks(response.data.msg);
            console.log(response);
           })
           .
           catch(error=>{
            console.log(error);
           });
    }
      
    return <>
            <CreateTodo setTasks={setTasks} />
            <Todo setTasks={setTasks} Tasks={tasks} />   
          </> 

}

export default App
