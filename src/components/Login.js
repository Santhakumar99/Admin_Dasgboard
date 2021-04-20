import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { API_URL } from '../constant'
import "../components/Login.css";

// const initialValues = {
//   email: "",
//   password: "",
// };


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  useEffect(() => {

  }, [])


  async function signUp(e) 
  {
    e.preventDefault()

try{
        let item = {email,password};

        let result = await axios.post(`${API_URL}/users/login`, item)
   
localStorage.setItem('user-info',result.data.token)
console.log(result)
       return(window.location = "/dashboard");
}
catch(error)
{
  console.log(error)
}
  }


  return (
    <div className="Login">
      <form id="create-course-form">
      <h2 className="Task-head">Task Manager</h2>
      <h6 className="task-welcome">Welcome Back!</h6>
      <br />
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" required />
      <br />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" required />
      <button onClick={signUp} className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}
export default Login



