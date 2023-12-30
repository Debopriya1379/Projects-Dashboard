import { useState } from 'react';
import './App.css'
import AllProjects from './components/AllProjects'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FormModal from './components/FormModal';

function App() {

  const[openFormModal, setOpenFormModal]=useState(false);
  const[isUpdating, setIsUpdating]=useState(false);
  const[prjectId, setPrjectId]=useState(null);
  const[newProjectName, setNewProjectName] = useState("");
  const[allProjects, setAllProjects] = useState([
    {
      id : 1,
      name : "Crypto dashboard",
    },
    {
      id : 2,
      name : "Library Management",
    },
    {
      id : 3,
      name : "Sales dashboard",
    },
    {
      id : 4,
      name : "Medical shop",
    },
    {
      id : 5,
      name : "Ecommerce site",
    },
    {
      id : 6,
      name : "Student Management",
    }
  ]);

  const openForAdd = async()=>{
    toggleFormModal();
    setNewProjectName("");
  }

  const addNewProjects = (newProjectName)=>{
    const newProject = {
      id : allProjects.length+1,
      name : newProjectName,
    }
    setAllProjects([...allProjects, newProject]);
    toggleFormModal();
  }

  const deleteProjects = async(Id)=>{
    setAllProjects(allProjects.filter((pro)=> pro.id !== Id));
  }

  const openForUpdate = async(data)=>{
    toggleFormModal();
    setNewProjectName(data.name);
    setPrjectId(data.id);
    setIsUpdating(true);
  }

  const updateProjects = async()=>{
      toggleFormModal();
      const UpdatedProjects = allProjects.map((proj)=>{
        if(proj.id==prjectId){
          const updatedProj = {
            ...proj,
            name: newProjectName
          }
          return updatedProj;
        }
        return proj
      })
      setAllProjects(UpdatedProjects);
      setIsUpdating(false);
  }

  const readProjects = async()=>{
      
  }

  const toggleFormModal = ()=>{
    setOpenFormModal(!openFormModal);
  }

  return (
    <div className="app">
      {openFormModal && <FormModal 
        toggleFormModal={toggleFormModal} 
        newProjectName={newProjectName}
        setNewProjectName={setNewProjectName}
        addNewProjects={addNewProjects}
        updateProjects={updateProjects}
        isUpdating={isUpdating}
        />
      }
      <div className="left">
        <Sidebar/>
      </div>
      <div className="right">
        <Navbar/>
        <AllProjects 
          allProjects={allProjects}    
          deleteProjects={deleteProjects} 
          openForUpdate={openForUpdate}
          openFormModal={openFormModal} 
          openForAdd={openForAdd}
        />
      </div>
    </div>
  )
}

export default App
