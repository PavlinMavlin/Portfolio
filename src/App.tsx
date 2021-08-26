import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import mainPhoto from "./assets/image/main/mainFoto.jpg"

function App() {
    return (
        <div className="App">
            <Header/>
            <Main style={{backgroundImage: `url(${mainPhoto})`}}/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
