import React, { useEffect, useState } from 'react'
import axios from "axios"
import { API_URL } from '../constant'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


// import {Hello} from '../users.json'
const User = () => {
    const [values,setValues]=useState({
        _id:"",
        fullname:"",
        username:"",
        isactive:false,
        email:""
    })
    const [users,setUsers]=useState([])
    useEffect(() => {
        
         getUsers()
        
        
    }, [])

    const getUsers=  async()=>{
        try {
            const result= await axios.get(`${API_URL}/users`)
            
            setUsers(result.data?.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }


   const userEditHandler=(user)=>{
       setValues({
           _id:user._id,
           username:user.username?user.username:"",
           fullname:user.fullname?user.fullname:"",
           isactive:user.isactive,
           email:user.email?user.email:""
       })
   }

   const onChangeHandler=(e)=>{
       
       const{name,value}=e.target
       const userValue=values
       userValue[name]=value
       setValues({...userValue})
    }

    const userUpdateHandler=async()=>{
        const updateValues={fullname:values.fullname,username:values.username,isactive:values.isactive,email:values.email}
       try {
        const result =await axios.put(`${API_URL}/users/${values._id}`,updateValues)
        // result()
        getUsers()
      
        
       } catch (error) {
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
                      <th>User Name</th>
                      <th>Full Name</th>
                      <th>isActive</th>
                      <th>Email</th>
                      {/* <th>Edit</th>
                      <th>Delete</th> */}
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user)=>(
                          <tr key={user._id}>
                             <td>{user.username}</td>
                             <td>{user.fullname}</td>
                             <td>{user.isactive?"Yes":"No"}</td>
                             <td>{user.email}</td>
                             {/* <td><button
                             onClick={()=>userEditHandler(user)}
                              type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>
</td>
                             <td><button    type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button></td> */}
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
</div>



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <label>
            Fullname:
            <input name="fullname" value={values.fullname} onChange={(e)=>onChangeHandler(e)} />
        </label>
        <label>
            Username:
            <input name="username" value={values.username} onChange={(e)=>onChangeHandler(e)} />
        </label>
        <label>
            isactive
            <input type="checkbox" name="isactive" checked={values.isactive} onChange={()=>setValues({...values,isactive:!values.isactive})} />
        </label>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={userUpdateHandler}>Update</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">delete</button>
      </div>
    </div>
  </div>
</div>

{/* 
<div className="display">
{users.map((user)=>{
  return(
    <div key={user.id}>

      <div className="row dashborad">

      <div className="col-lg-3 col-md-12 col-sm-12">
        <div className="card one">
           <h2>Name</h2>
            <h2>{user.username}</h2>
            </div>
      </div>
     <div className="col-lg-3 col-md-12 col-sm-12">  
     <div className="card two"> 
     <h3>email</h3>
          <h2>{user.email} </h2>
     </div>
     </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
    <div className="card three">
      <h2>Completed Tasks</h2>
      <h2>{user.task}</h2>
    </div>
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
    <div className="card four">
      <h2>Pending Tasks</h2>
    
     </div>
     </div>
  </div>
  </div>
       )
      }
      
        )}

</div> */}



        </div>
    )
}

export default User
