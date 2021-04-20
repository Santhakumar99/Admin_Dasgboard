import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import moment from 'moment'


const Usertask = () => {

    const [usertasks,setUsertasks]=useState([])
    const [usertasksDetails,setusertasksDetails]=useState([])
    useEffect(() => {
        
         getUsertasks()
         getUsertasksDetails()
        
        
    }, [])

  //  function Logout()  {
  //       localStorage.clear();
  //       return(window.location = "/");
  //   }
    // const date = Date(document.data.date).toString();
    const getUsertasks=  async()=>{
        try {
            const result= await axios.get(`${API_URL}/usertask`,{
                headers: {
                  'Authorization': localStorage.getItem('user-info')
                }
              })
            console.log(result.data)
            setUsertasks(result.data?.data)
        } 
        catch (error) {
            console.log(error)
        }
    }
    const getUsertasksDetails=  async()=>{
      try {
          const result= await axios.get(`${API_URL}/usertask/taskdetail`,{
              headers: {
                'Authorization': localStorage.getItem('user-info')
              }
            })
          console.log(result.data)
          setusertasksDetails(result.data?.data)
      } 
      catch (error) {
          console.log(error)
      }
  }

    
    return (
     
            <div >
   <Sidebar/>
      <Navbar/>
      <div className="table-head">
    <div className="user-table"> 
              {/* <div className="logout-button">
                     <button className="btn btn-primary logout" onClick={Logout}>Logout</button>
               </div> */}
                {/* <h1>User Task</h1> */}
               <div className="table table-bordered ">
                 <table className="table">
                   <thead>
                     <tr>
                     <th>Assigned By</th>
                     <th>Assigned On </th>
                     <th>Project Description </th>
                     <th>Task Name </th>
                     <th>Project Status</th>
                     {/* <th>Status</th>    */}
                   </tr>
                 </thead>
            <tbody>
               {usertasks.map((usertask)=>(
               <tr key={usertask._id}>
                 <td>{usertask.user ? usertask.user.fullname:'' }</td>
                 <td>{moment(usertask.assignedon).format('DD-MM-YYYY')}</td>
              
                  <td>{usertask.task.description}</td>
                  <td>{usertask.task.taskname}</td>
         
                  <td>{usertask.status?usertask.status:'-'}</td>
                  {/* <td>{usertask.status}</td> */}
               </tr>
               ))}
       </tbody>
  </table>
 </div>
        {/* <Project/> */}
    
    </div>
    </div>
    </div>
    )
}

export default Usertask

