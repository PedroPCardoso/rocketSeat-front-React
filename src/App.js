import React from 'react';
import Header from './components/Header';

function App() {

    return (
    <div>

    <Header title="Homepage">
        <ul>
        <li>
            Homepage
        </li>
        <li>
            Projects
        </li>     
        </ul>
    </Header>
        <Header title="Project">
            <ul>
        <li>
            Homepage
        </li>
                <li>
            Login
        </li>     
        <li>
            Projects
        </li>     
        </ul>

        </Header>
    </div>

        )
}


export default App;