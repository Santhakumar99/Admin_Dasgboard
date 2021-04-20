import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant';
import Project from './Project';

const Display = () => {

    const [userdetails,setUserdetails]=useState({})

    useEffect(() => {
        
        getprojectdetails()      
       
   }, []);

   const getprojectdetails=  async()=>{
    try {
        const result= await axios.get(`${API_URL}/userproject/getprojectdetails`,{
            headers: {
              'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDZhOGY4MDIwMjg1OTcyYTYzYjg1OTMiLCJlbWFpbCI6InNhbnRoYWt1bWFyLnJAcm9zZW1hbGxvd3RlY2guY29tIiwiaWF0IjoxNjE3NjIyMzMwfQ.pa4q_LbBgx6Alg6Ez46hDBkzML-K_rmezvYfB3dfUMU`
             
            }
          })
        console.log(result.data)
        setUserdetails({...result.data})
    } 
    catch (error) {
        console.log(error)
    }
}
console.log(userdetails)
    return (
        <div>
            <div className="hello">
               <p>{userdetails.Total }</p>
               <p>{userdetails.Completed} </p>
               <p>{userdetails.Pending} </p>
              <Project/>
            </div>
        </div>
    )
}

export default Display
