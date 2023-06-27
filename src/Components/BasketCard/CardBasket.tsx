import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./CardBasket.module.css";
import {Food} from "./Food";


export class CardBasket extends React.Component{
    render() {
        return(
            <div className={"2xl:flex 2xl:flex-col 2xl:min-w-[264px] 2xl:bg-white " +
                "xl:flex xl:flex-col xl:min-w-[255px] xl:bg-white " +
                "lg:flex lg:flex-col lg:min-w-[255px] lg:bg-white " +
                "md:flex md:flex-col md:w-[255px] hidden"}>
                <Card.Title>
                    <p className={styles.cardTitle}>Корзина</p>
                </Card.Title>
                <div>
                    <div className={styles.mealCategory}>
                        <div className={styles.cardText}><p>Завтрак</p></div>
                        <Food></Food>
                        <Food></Food>
                    </div>
                    <div className={styles.mealCategory}>
                        <Card.Text className={styles.cardText}>Обед</Card.Text>
                        <Food></Food>
                        <Food></Food>
                    </div>
                </div>
                <div>
                    <div className={styles.cardTitle}>Итого:</div>
                    <div className={styles.cardTitle}>130 рублей</div>
                </div>
                <div>
                    <Button variant={''} bsPrefix={''} className={styles.orderButton}>К оформлению</Button>
                </div>
            </div>
        )
    }
}
