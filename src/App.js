import React , {useState} from 'react';
import Header from './components/Header';

import './App.css';
import bacgroundImage from './assets/background.jpeg';
function App() {
    const [projects,setProjects] = useState(['Desenvolvimento de app', "Front-end Web"]);

    function HandleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`);
        setProjects([...projects,`Novo projeto ${Date.now()}`]);
        console.log(projects);
    }
    return (
    <>
    <img src={bacgroundImage}></img>
    <Header title="Projects"/>
        <ul>
            {projects.map( project =>  <li key={project}> {project} </li>)}
        </ul>
        
        <button type="button" onClick={HandleAddProject}>Adicionar Projeto</button>

    </>

        )
}


export default App;