import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.img} style={props.style}>
                <a className={style.viewBtn}>Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>
                {props.description}</span>
            </div>
        </div>
    );
}