import React from 'react'
import "./styles/FormModal.css"

const FormModal = ({toggleFormModal,newProjectName,setNewProjectName,addNewProjects,updateProjects,isUpdating}) => {

    return (
        <div className='formModal_container'>
            <div className="header">
                <h3>Details Form</h3>
                <button onClick={toggleFormModal}>close</button>
            </div>
            <div className="form">
                <label htmlFor="pname">Project name : </label>
                <input type="text" name='pname' placeholder='project name' value={newProjectName} onChange={(e)=>setNewProjectName(e.target.value)}/>
            </div>
            <div>
                {isUpdating  
                ?   <button id='submit_btn' onClick={()=>updateProjects()}>update</button>
                :   <button id='submit_btn' onClick={()=>addNewProjects(newProjectName)}>Add</button>
                }
            </div>
        </div>
    )
}

export default FormModal