import React from 'react';
import style from ".//Projects.module.css"
import s from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";


export function Projects() {
    return (

        <div className={style.projectsBlock}>
            <div className={`${s.container} ${style.projectsContainer}`}>
                <Title text={"Project"}/>
                <div className={style.projects}>
                    <Project title={"Social network"}
                             description={"Web application that allows registered users to post information and communicate with each other."}/>
                    <Project title={"TodoList"}
                             description={"Web application designed to conveniently structure information about all current tasks in one place."}/>
                </div>
            </div>
        </div>
    );
}