import React from "react";
import {Button} from "react-bootstrap";
import {upperMenuButtons} from "../../const";
import styles from "./ButItem.module.css"


export class FilterFoodItem extends React.Component{
    render() {
        const changeClass = (event: any) => {
            const buttons = document.querySelectorAll('Button')
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains(styles.redMenu)) {
                    buttons[i].classList.remove(styles.redMenu)
                }
            }
            event.currentTarget.classList.toggle(styles.redMenu)
        }
        return(
            <div style={{display: "flex", flexDirection: "row", gap: "20px", height: "44px"}}>
                {
                    upperMenuButtons.map((btn) =>
                        <Button variant={''} bsPrefix={''} className={btn.classEl} onClick={changeClass} style={{width: `${btn.width}px`, height: `${btn.height}px`}}>
                            {btn.text}
                        </Button>)
                }
            </div>
        )
    }
}
