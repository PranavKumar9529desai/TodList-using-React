import { useState } from "react"
// import { Todo } from "./Todo";
import axios from 'axios' ;

export function CreateTodo({onTaskCreated}){
    const [Title ,setTitle] = useState('');
    const [Description , setDescription]= useState('');
    
    function handleSubmit(){
        axios.post('http://localhost:3000/todo', {
            title : Title ,
            description : Description ,
            completed : false
          })
          
          .then(function(response){
            //  console.log(response.data.msg);
            //  setTasks(response.data.msg);
            setDescription('');
            setTitle('');
            // console.log("Tasks",Tasks);
            onTaskCreated();


          })
          .catch(function (error) {
            console.log(error);
          });
        
      }


    return   <>
            <input placeholder="Title" value={Title} onChange={(e)=>{
                const value = e.target.value ;
                setTitle(value);
            }}/><br /><br />
            <input placeholder="Description" value={Description} onChange={(e)=>{
                const value = e.target.value ;
                setDescription(value);
            }} /><br /><br />
            <button onClick={handleSubmit}>Add Todo</button>
            {/* <Todo Tasks={Tasks}/>  */}
    </>
}