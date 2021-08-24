import style from "./Title.module.scss"
import React from "react";

type TitlePropsType = {
    text: string
}

export function Title(props: TitlePropsType) {
    return <div className={style.title}>
        <h2>{props.text}</h2>
    </div>
}