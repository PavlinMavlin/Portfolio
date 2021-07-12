import React from 'react';
import style from './Main.module.css';
import s  from "./../common/styles/Container.module.css"

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={s.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1> I am Pavel Korobov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}