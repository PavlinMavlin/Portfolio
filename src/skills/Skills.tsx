import React from 'react';
import style from './Skills.module.css';
import s from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${s.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={"Library for developing user interfaces and creating one-page applications using components and Virtual DOM."}/>
                    <Skill title={"Redux"} description={"Library for managing the state of the application using tools that allow you to build the architecture of a web application and greatly simplify the transfer of data."}/>
                    <Skill title={"TypeScript"} description={"Programming language that is a web application development tool that solves typing problems and extends the capabilities of the JavaScript language."}/>
                    <Skill title={"JavaScript"} description={"Scripting programming language with dynamic typing that defines the behavior of a web application."}/>
                    <Skill title={"Storybook"} description={"Tool for creating separate parts of the interface separately from the main application, which simplifies testing and allows you to debug a component with different data."}/>
                    <Skill title={"HTML5"} description={"Special language used to create markup for a web application."}/>
                    <Skill title={"CSS3"} description={"Language for describing the appearance of a document written using a markup language"}/>
                    <Skill title={"Sass"} description={"Мetalanguage required to increase the level of abstraction of CSS code and simplify cascading style sheet files."}/>
                    <Skill title={"Git"} description={"Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application."}/>

                </div>
            </div>
        </div>
    );
}