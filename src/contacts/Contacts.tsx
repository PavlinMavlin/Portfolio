import styleContainer from "../common/styles/Container.module.css";
import style from "./Contacts.module.css"
import {Title} from "../common/components/title/Title";
import React from "react";

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.container} ${style.contactsContainer}`}>
                <Title text={"Contact"}/>
                <form className={style.contactForm}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button type={"submit"} className={style.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}