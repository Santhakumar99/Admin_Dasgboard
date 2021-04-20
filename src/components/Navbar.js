import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant'
import Profile from './Profile'
import {
  NavLink
  } from "react-router-dom";

const Navbar = () => {
  const [userProfile,setuserProfile]=useState({})
  const [drop,setdrop]=useState(false)
  const [userdrop,setuserdrop]=useState(false)
  // const [userDuedatetasks,setuserDuedatetasks]=useState({})

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
function Logout()  {
  localStorage.clear();
  return(window.location = "/");
}

    return (
        <div className="navbar-top">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Task Manager</a>


  
  <div class="wrapper">
    <div class="navbar">
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
        <div className="notification-button">
    <button type="button" class="icon-button" onClick={()=>setdrop(!drop)}>
    <span class="material-icons">notifications</span>
    <span class="icon-button__badge">3</span>
  </button>
  </div>
        <div className="right">
          
                {drop?<div className="dropdown">
                    <ul>
                      <li><a href="#"><i className="fas fa-user"></i><span className="newuser-icon">New user Added</span></a></li>
                      <li><a href="#"><i className="fas fa-comment"></i><span className="comment-icon">commented your post</span></a></li>
                      <li><a href="#"><i className="fas fa-trash"></i><span className="delete-icon">One user is deleted</span></a></li>
                  </ul>
                  <ul>
                   <a href="#" className="read-all">Read All Notifications</a>
                  </ul>
                </div>:null}

                </div>
                <div class="dropdown">
                <h3 className="user-name-text" onClick={()=>setuserdrop(!userdrop)}>{userProfile.fullname}<i class="fas fa-user-circle" ></i></h3>
                {userdrop?<div id="myDropdown" class="dropdown-content">
                <NavLink to="/profile" 
                         className="nav-link">
                         <a  href="" className="menu-list" component={Profile}><i class="fas fa-user-circle"></i>Profile</a>
                </NavLink>
                      <a class="logout-but" onClick={Logout}><i class="fas fa-sign-out-alt"></i>Logout</a>

        </div>:null}
        </div>  
      </div>
   </div>
  </nav>
</div>
    )
}

export default Navbar
