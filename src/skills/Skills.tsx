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
                    <Skill title={"JS"} description={"ssdsdscsdvsds sdfsdsdssdv afasfsdfsdsdvsd"}/>
                    <Skill title={"CSS"} description={"eeeeeeee sdfsdsdssdv afasfsdfsdsdvsd"}/>
                    <Skill title={"REACT"} description={"2222222222 sdfsdsdssdv afasfsdfsdsdvsd"}/>
                </div>
            </div>
        </div>
    );
}