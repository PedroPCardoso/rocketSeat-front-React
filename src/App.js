import React , {useEffect, useState} from 'react';
import Header from './components/Header';

import './App.css';
import api from'./services/api';

function App() {
    const [projects,setProjects] = useState([]);
    useEffect(() => {
        api.get("projects").then(response => {
          setProjects(response.data) 
        });

    },    );
    function HandleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`);
        setProjects([...projects,`Novo projeto ${Date.now()}`]);
        console.log(projects);
    }
    return (
    <>
    <Header title="Projects"/>
        <ul>
            {projects.map( project =>  <li key={project.id}> {project.title} </li>)}
        </ul>
        
        <button type="button" onClick={HandleAddProject}>Adicionar Projeto</button>

    </>

        )
}


export default App;