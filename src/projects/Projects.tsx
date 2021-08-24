import React from 'react';
import style from ".//Projects.module.scss"
import s from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from "./../assets/image/projects/todolist.png"
import socialImage from "./../assets/image/projects/socialNetwork.png"

export function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };


    return (

        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"Project"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"}
                             description={"Web application that allows registered users to post information and communicate with each other."}/>
                    <Project style={todolist} title={"TodoList"}
                             description={"Web application designed to conveniently structure information about all current tasks in one place."}/>
                </div>
            </div>
        </div>
    );
}