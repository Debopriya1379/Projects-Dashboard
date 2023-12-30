import React from 'react'
import "./styles/NewProjectCard.css"

const NewProjectCard = ({openForAdd}) => {
  return (
    <div className='new_project_card_container'>
        <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/folder-2517422_1280.png" alt=""  onClick={openForAdd}/>
        <h3>Create a new project</h3>
        <p>or try a sample project</p>
    </div>
  )
}

export default NewProjectCard