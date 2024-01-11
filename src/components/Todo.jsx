import { useState } from "react";
import axios from 'axios';
import '../../src/App.css' ;



export function Todo({Tasks}){
  const [completedTasks, setCompletedTasks] = useState([Tasks.completed]);

  // handle the completed tasks
  function handleComplete(task_id){
      axios.put('https://todo-app-production-b9eb.up.railway.app/completed',{
        id : task_id ,
      })
      .then(response=>{
        // updating the backend
        console.log(response);
        setCompletedTasks([...completedTasks , task_id]);
      })
      .catch(error=>{
        console.log(error);
      });
      
    };


    return <>
        {   
          Tasks.map(function(todo,index)
               { 
                // let isCompleted = completedTasks.includes(todo._id);
                let isCompleted = todo.completed;

                // console.log(isCompleted);
                return <div key={index} className={isCompleted===true ? 'completed' : ''}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description }</p>
                            <input type="checkbox" placeholder="Mark as complete" checked={isCompleted} onChange=   {() =>handleComplete(todo._id)}></input>
                        </div> 
               })
           
        }
        
     </>
}