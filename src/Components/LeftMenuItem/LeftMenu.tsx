import React from "react";
import {Calendar} from "../Calendar/Calendar";
import {leftMenuButtons} from "../../const";
import styles from "./LeftButtonItem.module.css";
import {Button} from "react-bootstrap";

export class LeftMenu extends React.Component {
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
            <div className={"2xl:flex 2xl:flex-col 2xl:w-[265px] xl:flex xl:flex-col xl:w-[255px] lg:flex lg:flex-col lg:w-[255px] md:flex md:flex-col md:w-[255px] hidden"}>
                <Calendar/>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    {// вывод первой кнопки отдельно с классом .red и потом вывод массива кнопок без этого класса
                        leftMenuButtons.map((btn) =>
                            <Button variant={''} bsPrefix={''} className={btn.classEl} onClick={changeClass}
                                     style={{width: `${btn.width}px`, height: `${btn.height}px`}}>
                                {btn.text}
                            </Button>)
                    }
                </div>
            </div>
        )
    }
}

