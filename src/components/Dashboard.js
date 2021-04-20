import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant';
import  Hello from '../users.json'

const Dashboard = () => {
    const [userdetails,setUserdetails]=useState({})
    const [userDuedatetasks,setuserDuedatetasks]=useState({})
    const [ userClarifications,setuserClarifications]=useState({})


    useEffect(() => {
        
        getprojectdetails()   
        getDuedatetask()   
        getClarifications()
    
        // alert("Two seconds have passed!");
       
   }, []);

// function sampleFunction(){    
//   sampleVar = setTimeout(alertFunc, 2000);
// }




   const getprojectdetails=  async()=>{
    try {
        const result= await axios.get(`${API_URL}/userproject/getprojectdetails`,{
            headers: {
              'Authorization': localStorage.getItem('user-info')
            }
          })
         
        console.log(result.data)
        setUserdetails({...result.data})
    } 
    catch (error) {
        console.log(error)
    }
}


const getDuedatetask=  async()=>{
    try {
        const result= await axios.get(`${API_URL}/userproject/getduedatedtasks`,{
            headers: {
              'Authorization': localStorage.getItem('user-info')
            }
          })
        console.log(result.data)
        setuserDuedatetasks(result.data)
    } 
    catch (error) {
        console.log(error)
    }
}
const getClarifications =  async()=>{
    try {
        const result= await axios.get(`${API_URL}/usertask/getclarificationtasks`,{
            headers: {
              'Authorization': localStorage.getItem('user-info')
            }
          })
        console.log(result.data)
        setuserClarifications(result.data)
    } 
    catch (error) {
        console.log(error)
    }
}
var sampleVar;
sampleVar = setTimeout( getprojectdetails,getDuedatetask,getClarifications, 2000);

    return (
        <div>
            <Sidebar/>
            <Navbar/>

            <div className="user-cards">
                <div className="row">
                   <div className="col-lg-3 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Assigned Tasks</h6>
                       <p className="task-count as-task">{userdetails.Total}</p>
                       </div>
                   </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Completed Tasks</h6>
                       <p className="task-count com-task">{userdetails.Completed}</p>
                       </div>
                   </div>   
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Pending Tasks</h6>
                       <p className="task-count pend-task">{userdetails.Pending}</p>
                       </div>
                   </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Due Dated Tasks</h6>
                       <p className="task-count ter-task">{userDuedatetasks.length}</p>
                       </div>
                   </div>
                   </div>
                </div>
          
            </div>
            <div className="user-cards">
            <div className="row">
                   <div className="col-lg-4 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Total Clarifications</h6>
                       <p className="task-count total-clarfi">{userClarifications.Total}</p>
                       </div>
                   </div>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Completed Clarifications</h6>
                       <p className="task-count completed-clarfications">{userClarifications.Clarified}</p>
                       </div>
                   </div>   
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-12 ">
                   <div className="card ">
                       <div className="card-body">
                       <h6 className="card-title">Pending Clarifications</h6>
                       <p className="task-count pend-clarifications">{userClarifications.Pending}</p>
                       </div>
                   </div>
                   </div>
                   {/* <div className="col-lg-3 col-md-4 col-sm-12 ">
                   <div className="card ter-task">
                       <div className="card-body">
                       <h6 className="card-title">Due Dated Tasks</h6>
                       <p className="task-count">{userDuedatetasks.length}</p>
                       </div>
                   </div>
                   </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
