import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import moment from 'moment'



const Tasks = () => {

const [tasks,setTasks]= useState([])
   
useEffect(() =>
{
    getTasks()
 
}, [])

const getTasks= async() => {
   try {
      const result = await axios.get(`${API_URL}/tasks`)
    console.log(result.data.data)
      setTasks(result.data?.data)
         }

     catch(error){
         
       console.log(error)
          }
            
        }


    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="table-head">
        <div className="table-responsive">
            <table className="table">
<thead>
<tr>
<th>Task Created On</th>   
    <th>Task Name</th>
    <th>Project Name</th>
    <th>Description</th>
 

</tr>
</thead>
<tbody>
    {tasks.map((task)=>(
    <tr key={task._id}>
         <td>{moment(task.createdon).format('DD-MM-YYYY')}</td>
        <td>{task.taskname}</td>
        <td>{task.project.projectname}</td>
        <td>{task.description}</td>
       
     
    </tr>
        ))}
</tbody>
            </table>
        </div>
        </div>
    </div>
    )
}

export default Tasks
