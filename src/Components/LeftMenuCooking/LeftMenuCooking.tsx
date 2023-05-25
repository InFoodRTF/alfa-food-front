import React from "react";
import {leftMenuButtonsCooking} from "../../const";
import styles from "./LeftMenuCooking.module.css";
import {Button} from "react-bootstrap";

export class LeftMenuCooking extends React.Component{//у каждой галочки должен быть уникальный id, например фио в поля "id" и "htmlFor"
    render() {
        const changeClass = (event: any) => {
            const buttons = document.querySelectorAll('Button')
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains(styles.red)) {
                    buttons[i].classList.remove(styles.red)
                }
            }
            event.currentTarget.classList.toggle(styles.red)
        }
        return (
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {
                    leftMenuButtonsCooking.map((btn) =>
                        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                            <Button variant={''} bsPrefix={''} className={btn.classEl} onClick={changeClass}
                                    style={{width: `${btn.width}px`}}>
                                {btn.text}
                            </Button>
                            <div className={styles.infBlock}>
                                <input type={"checkbox"} id={"student"} className={styles.InputField}></input>
                                <label htmlFor={"student"} className={styles.InputLabel}></label>
                            </div>
                        </div>)
                }
            </div>
        )
    }
}

