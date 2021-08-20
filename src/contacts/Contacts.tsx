import styleContainer from "../common/styles/Container.module.css";
import style from "./Contacts.module.css"
export function Contacts() {
    return (
        <div className={style.contactsBlok}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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