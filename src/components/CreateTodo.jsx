import { useState } from "react"
import axios from 'axios' ;


export function CreateTodo({setTasks , Date}){
  const [Title ,setTitle] = useState('');
  const [Description , setDescription]= useState('');

  
  
  function handleSubmit(){
      const newTodo = {
          title : Title ,
          description : Description ,
          completed : false
      };

      axios.post(`${import.meta.env.VITE_BACKEND_URL}/todo`, newTodo)
        .then(response => {
          setTasks(prevTasks => [...prevTasks, newTodo]);
          setDescription('');
          setTitle('');
        })
        .catch(error => {
          console.log(error);
        });
  }



    return   <>
            <div class="box" id="heading">
                     <h1>{Date}</h1>
             </div>
             <div className="box">
             <input placeholder="Title" type="text" value={Title} onChange={(e)=>{
                const value = e.target.value ;
                setTitle(value);
            }}/><br /><br />
            <input placeholder="Description" type="text" value={Description} onChange={(e)=>{
                const value = e.target.value ;
                setDescription(value);
            }} /><br /><br />
            <button type="submit"  onClick={handleSubmit}>+</button>
            </div>
    </>
}
