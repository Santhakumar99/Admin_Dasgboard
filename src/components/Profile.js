import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant'
import moment from 'moment'
import '../components/Profile.css'
const Profile = () => {
    const [userProfile,setuserProfile]=useState({})
    useEffect(() => {
        
        getProfile()
       
       
      }, []);
      
    
      const getProfile =  async()=>{
        try {
            const result= await axios.get(`${API_URL}/users/profile`,{
              headers:{
                'Authorization':localStorage.getItem('user-info')
              }
            })
            setuserProfile(result.data)
         console.log(result)
        } 
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Sidebar/>
            <Navbar/>
<div className="container">
<div className="user-profile">
    <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 color-space">

                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> 
                                <h6 class="Profile-name">{userProfile.fullname}</h6>
                                {/* <p class="">Web Designer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i> */}
                                </div>      
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 text-space">
            {/* <div className="user-"><label>Name:</label>{userProfile.username}</div> */}
            <div className="user-email"><label>Email:</label><span className="right-text"
            >{userProfile.email}</span></div>
            <div className="user-active"><label>isActive:</label> <span  className="right-text">{userProfile.isactive ?"yes":"no"}</span> </div>
            <div className="user-modified"><label>User Created On:</label><span  className="right-text">{moment(userProfile.createdon).format('DD-MM-YYYY')}</span> </div>
            <div className="user-created"><label>User Last Modified:</label> <span  className="right-text">{moment(userProfile.lastmodified).format('DD-MM-YYYY')}</span></div>
            </div>
            </div>
    


            </div>  
        </div>
        </div>
    )
}

export default Profile
