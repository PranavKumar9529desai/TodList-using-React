import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo' ;
import { Todo } from './components/Todo';
import axios from 'axios';

function App() {
    const [tasks,setTasks] = useState([]);
// useeffect(function , dependencies) ;

  useEffect(()=>{
    fetchData();
  } , []);

    function fetchData(){
        axios.get('http://localhost:3000/todos')
          .then(response =>{
            setTasks(response.data.msg);
            console.log(tasks);
            // const completedtasks = response.data.msg.filter(task=>{task.completed})
            // setCompletedTasks(completedtasks);
            // console.log(setCompletedTasks);
          })
           .
           catch(error=>{
            console.error(error);
           })
    }
      
    // empty dependency array means this effect runs once on mount
    
      
   
    
    return <>
       <CreateTodo onTaskCreated={fetchData} />
       <Todo Tasks={tasks}/>
    </> 

}

export default App
