import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.img}>Picture</div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
            <div className={style.button}>
                <button>View code</button>
            </div>
        </div>
    );
}