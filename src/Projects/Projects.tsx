import React from 'react';
import style from "../Projects/Projects.module.css"
import s from "../common/styles/Container.module.css"

export function Projects() {
    return (
        <div className={style.Block}>

            <div className={`${s.container} ${style.projectsContainer}`}>

                <h2 className={style.title}>Projects</h2>

                <div className={style.projects}>

                    <div className={style.project}>
                        <div className={style.imgContainer}>
                            <a className={style.button}>Посмотреть</a>
                        </div>
                        <div className={style.title}>Social Network</div>
                        <span className={style.description}>Project description</span>
                    </div>



                    <div className={style.project}>
                        <div className={style.imgContainer}>
                            <a className={style.button}>Посмотреть</a>
                        </div>
                        <div className={style.title}>Todolist</div>
                        <span className={style.description}>Project description</span>
                    </div>

                </div>
            </div>
        </div>
    );
}