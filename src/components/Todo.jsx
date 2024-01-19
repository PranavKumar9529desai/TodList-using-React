import axios from 'axios';
import '../../src/App.css';

export function Todo({setTasks, Tasks}){

  function handleComplete(task_id) {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/completed`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: task_id }),
  })
      .then(response => {
          if (response.status === 200) {
              setTasks(prevTasks =>
                  prevTasks.map(task =>
                      task._id === task_id ? { ...task, completed: true } : task
                  )
              );
          }
      })
      .catch(error => {
          console.log(error);
      });
  
}

function handleDelete(task){
  let taskId = task._id;
  fetch(`${import.meta.env.VITE_BACKEND_URL}/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: taskId }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the tasks state to remove the deleted task
    setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
  })
  .catch((error) => {
    console.error('There was an error!', error);
  });
}


    return <>
        {   
          Tasks.map(function(todo,index)
               { 
                let isCompleted = todo.completed;
                 return <div key={index} className={`box ${isCompleted ? 'completed' : ''}`}>
                            <h3 style={{textAlign : 'center'}}>{todo.title}</h3>
                            <br />
                            <p>{todo.description }</p>
                            <br />
                            <input type="checkbox" placeholder="Mark as complete" checked={isCompleted} onChange=   {() => handleComplete(todo._id)}></input>
                            {todo.completed && <button style={{fontSize : 10}} onClick={()=>handleDelete(todo)}>delete</button>}
                      </div> 
               
               })
           
        }
        
       </>
}