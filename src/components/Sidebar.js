import React from 'react'
import '../components/SideBar.css'
import {
  NavLink
  } from "react-router-dom";
import User from './User';
import Project from './Project';
import logo from '../assets/images/rm-logo.png'
import  { useState } from 'react'
import Dashboard from './Dashboard';
import Usertask from '../components/Usertask';
import Tasks from '../components/Tasks'
const Sidebar = () => {

const [show,setshow]=useState(true)

// function Logout()  {
//   localStorage.clear();
//   return(window.location = "/");
// }

    return (
<div>
  <div className="controls">

  <button class="openbtn" onClick={()=>setshow(!show)}>☰</button> 
  </div>

{show?<div className="menu-link">
           <div className="task-logo">
                <img src={logo} className="logo" />
              </div>
             
         
              <hr />
            
              <div  className="list-items">
                <ul>
                   <li >
                       <NavLink to="/Dashboard" 
                         className="nav-link"
                         activeClassName="navbar__link--active"> 
                         <a  href="" className="menu-list" component={Dashboard}><i class="fa fa-fw fa-home"></i>Dashboard</a>
                       </NavLink>
                  </li>
                   <li>
                       <NavLink to="/users"
                          className="nav-link"
                          activeClassName="navbar__link--active" >
                         <a  className="menu-list" component={User}><i class="fa fa-fw fa-user"></i>Users</a>
                         </NavLink>
                  </li>
                   <li>
                        <NavLink to="/projects"
                           className="nav-link"
                           activeClassName="navbar__link--active" > 
                           <a   className="menu-list" component={Project}><i class="fas fa-clipboard-list"></i>Projects</a>
                        </NavLink>
                 </li>
                 <li>
                        <NavLink to ="/tasks"  
                          className="nav-link"
                          activeClassName="navbar__link--active" >
                         <a   className="menu-list"  component={Tasks}><i class="fa fa-fw fa-tasks"></i>Tasks</a>
                        </NavLink>
                </li>
                   <li>
                       <NavLink to ="/usertasks"    className="nav-link"
                activeClassName="navbar__link--active"> 
                        <a  href="" className="menu-list"  component={Usertask}><i class="fa fa-fw fa-edit"></i>Assigned Task</a>
                        </NavLink>
                    </li>
                    </ul>
                    {/* <div className="logout-button">
                     <button className="btn btn-primary logout" onClick={Logout}>Logout</button>
               </div> */}
               
                    </div>
         </div>:null}
         </div>
    )
}

export default Sidebar
