import React from "react";
import styles from "./TickCard.module.css";
import {Card} from "react-bootstrap";

export class TickCard extends React.Component{//у каждой галочки должен быть уникальный id, например фио в поля "id" и "htmlFor"
    render() {
        return(
            <Card className={styles.foodCard}>
                <div className={styles.cardBlock}>
                    <div className={styles.infBlock}>
                        <input type={"checkbox"} id={"student"} className={styles.InputField}></input>
                        <label htmlFor={"student"} className={styles.InputLabel}></label>
                    </div>
                    <div className={styles.addInfBlock}>
                        <p className={styles.textAdd}>Архипов Марк Никитич</p>
                    </div>
                </div>
            </Card>
        )
    }
}
