import React, { useEffect, useState } from 'react'
import "./styles/AllProjects.css"
import NewProjectCard from './NewProjectCard'
import ProjectCard from './ProjectCard'
import axios from 'axios'

const AllProjects = ({allProjects,deleteProjects,openForUpdate,openFormModal,openForAdd}) => {

    // const getProjects = async()=>{
    //     const response = await axios("https://picsum.photos/v2/list?page=1&limit=6")
    //     console.log(response.data);
    //     // setAllProjects(response.data);
    // }
    
    // useEffect(()=>{
    //     // getProjects();
    // },[])

    return (
        <div className={openFormModal ? "allProjects_container blur" : "allProjects_container"}>
            <NewProjectCard openForAdd={openForAdd}/>
            <h2>My Projects</h2>
            <div className="previous_projects">
                {allProjects.map((proj,id)=>{
                    return <ProjectCard 
                        key={id} 
                        data={proj} 
                        deleteProjects={deleteProjects}
                        openForUpdate={openForUpdate}    
                    />
                })}
            </div>
        </div>
    )
}

export default AllProjects