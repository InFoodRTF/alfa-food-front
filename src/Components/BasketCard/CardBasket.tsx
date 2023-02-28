import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./CardBasket.module.css";

export const CardBasket = () => {
    return(
        <Card className={styles.basCard}>
            <Card.Title className={styles.cardTitle}><p>Корзина</p></Card.Title>
            <div>
                <Card.Text className={styles.cardText}><p>Завтрак</p></Card.Text>
                <section className={styles.foodSection}>
                    <Card.Subtitle className={styles.cardFood}><p>Каша овсяная</p></Card.Subtitle>
                    <Card.Subtitle className={styles.cardFood}><p>Чай черный</p></Card.Subtitle>
                </section>
            </div>
            <div>
                <Card.Text className={styles.cardText}>Обед</Card.Text>
                <section className={styles.foodSection}>
                    <div className={styles.food}>
                        <Card.Subtitle className={styles.cardFood}><p>Каша овсяная</p></Card.Subtitle>
                        <div className={styles.buttonsAdd}>
                            <Button variant={''} bsPrefix={''} className={styles.addFood}><p className={styles.minus}>-</p></Button>
                            <p>1</p>
                            <Button variant={''} bsPrefix={''} className={styles.addFood}><p className={styles.plus}>+</p></Button>
                        </div>
                    </div>
                    <Card.Subtitle className={styles.cardFood}><p>Чай черный</p></Card.Subtitle>
                </section>
            </div>
            <Card.Title className={styles.cardTitle}>Итого</Card.Title>
            <Button variant={''} bsPrefix={''} className={styles.orderButton}><p className={styles.buttonText}>К оформлению</p></Button>
        </Card>
    )
}
export default CardBasket
