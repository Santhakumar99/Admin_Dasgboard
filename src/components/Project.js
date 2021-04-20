import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import moment from 'moment'

const Project = () => {

    const [projects ,setProjects]= useState([])
    useEffect(() => {

       getProjects()

          }, [])

    const getProjects=  async() => {

   try {
      const result = await axios.get(`${API_URL}/projects`)
    
      setProjects(result.data?.data)
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

    <th>Project Name</th>
    <th>Description</th>
    <th>Start Date</th>
    <th>End Date</th>   
     <th>isActive</th>
</tr>
</thead>
<tbody>
    {projects.map((project)=>(
    <tr key={project._id}>
        <td>{project.projectname}</td>
        <td>{project.description}</td>
        <td>{moment(project.startdate).format('DD-MM-YYYY')}</td>
        <td>{moment(project.enddate).format('DD-MM-YYYY')}</td>
        <td>{project.isactive? "Yes":"No" }</td>
    
    </tr>
        ))}
</tbody>
            </table>
        </div>
    </div>
    </div>
    )
}

export default Project;
