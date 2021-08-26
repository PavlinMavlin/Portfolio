import style from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title";
import React from "react";

export function Contacts() {
    return (
        <section id={"contactsId"} className={style.contactBlock}>
            <Title text="Contact"/>
            <div data-aos="zoom-in" data-aos-duration="900" className={style.contactContainer}>
                <form className={style.contactForm}>
                    <input placeholder="Name" type="text" className={style.contactInput}/>
                    <input placeholder="E-mail" type="text" className={style.contactInput}/>
                    {/*or Email + Theme*/}
                    <textarea id=""
                              name=""
                              placeholder="Message"
                              className={style.contactTextArea}
                    ></textarea>
                    <button type={"submit"} className={style.contactButton}>Send</button>
                </form>
            </div>
        </section>
    )
}