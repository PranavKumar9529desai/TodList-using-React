import { useState } from "react";
import axios from 'axios';
import '../../src/App.css' ;



export function Todo({Tasks}){
  const [completedTasks, setCompletedTasks] = useState([]);

  // handle the completed tasks
  function handleComplete(task_id,{Tasks}){
      axios.put('http://localhost:3000/completed',{
        id : task_id ,
      })
      .then(response=>{
        // updating the backend
        console.log(response);
        setCompletedTasks([...completedTasks , task_id]);
        Tasks();
        // calling the Tasks to fetch the data once again as put request is made 
      })
      .catch(error=>{
        console.log(error);
      });
      
    };


    return <>
        {   
          Tasks.map(function(todo,index)
               { 
                let isCompleted = todo.completed;
                // console.log(isCompleted);
                return <div key={index} className={isCompleted ? 'completed' : ''}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description }</p>
                            <input type="checkbox" placeholder="Mark as complete" checked={isCompleted} onChange=   {() =>handleComplete(todo._id)}></input>
                        </div> 
               })
           
        }
        
     </>
}