import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./CardFood.module.css";
import food from "./Rectangle 34.png";

export const CardFood = () => {
    return(
            <Card className={styles.foodCard}>
                <div className={styles.cardBlock}>
                    <div className={styles.infBlock}>
                        <Card.Img className={styles.imgForm} src={food}></Card.Img>
                        <Card.Title className={styles.costBlock}>50 руб</Card.Title>
                        <Card.Subtitle className={styles.foodName}>Каша рисовая</Card.Subtitle>
                    </div>
                    <div className={styles.gramBlock}><Card.Text className={styles.gramText}>200г</Card.Text></div>
                    <div className={styles.addInfBlock}>
                        <Button variant={''} bsPrefix={''} className={styles.cardButton}><p className={styles.text}>+</p><p className={styles.textAdd}>Добавить</p></Button>
                    </div>
                </div>
            </Card>
    )
}
export default CardFood
