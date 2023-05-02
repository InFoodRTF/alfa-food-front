import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./CardBasket.module.css";
import {Food} from "./Food";


export class CardBasket extends React.Component{
    render() {
        return(
            <Card className={`d-md-flex d-none ${styles.basCard}`}>
                <Card.Title style={{position: "absolute", top: "20px", left: "20px", marginBottom: "0", width: "224px", height: "24px"}}>
                    <p className={styles.cardTitle}>Корзина</p>
                </Card.Title>
                <div style={{display: "flex", flexDirection: "column", gap: "22px", marginTop:"54px"}}>
                    <div className={styles.mealCategory}>
                        <Card.Text className={styles.cardText}><p>Завтрак</p></Card.Text>
                        <Food></Food>
                        <Food></Food>
                    </div>
                    <div className={styles.mealCategory}>
                        <Card.Text className={styles.cardText}>Обед</Card.Text>
                        <Food></Food>
                        <Food></Food>
                    </div>
                </div>
                <div style={{position: "absolute", bottom: "76px", left: "20px", display: "flex", flexDirection: "row", gap: "15px"}}>
                    <Card.Title className={styles.cardTitle} style={{width: "69px", marginBottom: "0px"}}>Итого:</Card.Title>
                    <Card.Title className={styles.cardTitle} style={{width: "140px", height: "24px", textAlign: "right", marginBottom: "0px"}}>130 рублей</Card.Title>
                </div>
                <div style={{position: "absolute", textAlign: "center", width: "264px", bottom: "19px"}}>
                    <Button variant={''} bsPrefix={''} className={styles.orderButton}>К оформлению</Button>
                </div>
            </Card>
        )
    }
}
