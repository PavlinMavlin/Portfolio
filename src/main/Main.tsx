import React from 'react';
import style from './Main.module.scss';

type MainpPropsType = {
    style: {backgroundImage: string}
}

export function Main(props:MainpPropsType) {
    return (
        <div className={style.mainBlock}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1> I am Pavel Korobov</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={style.mainPhoto} style={props.style}></div>
        </div>
    );
}