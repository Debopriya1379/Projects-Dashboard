import React, { useEffect, useState } from 'react'
import "./styles/ProjectCard.css"
import axios from 'axios';

const ProjectCard = ({data,deleteProjects,openForUpdate}) => {

  // const [imageUrl, setImageUrl]=useState("");

  // const getImage = async()=>{
  //   const response = await axios("https://picsum.photos/seed/picsum/200/300")
  //   // console.log(response.data)
  //   setImageUrl(response);
  // }

  useEffect(()=>{
    // getImage()
  },[]);

  return (
    <div className='project_card_container'>
        <img src={"to be done"} alt="" />
        {/* <h3>Author : {data.author}</h3> */}
        <h3>{data.name}</h3>
        {/* <p>price : {data.price}</p> */}
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="options">
          <button onClick={()=>openForUpdate(data)}>update</button>
          <button onClick={()=>deleteProjects(data.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ProjectCard