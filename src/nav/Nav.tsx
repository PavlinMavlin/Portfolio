import React from 'react';
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="" className={style.navText}>main</a>
            <a href="" className={style.navText}>skills</a>
            <a href="" className={style.navText}>projects</a>
            <a href="" className={style.navText}>contacts</a>
        </div>
    );
}


