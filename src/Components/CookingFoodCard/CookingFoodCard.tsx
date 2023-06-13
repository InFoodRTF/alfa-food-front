import React from "react";
import styles from "./CookingFoodCard.module.css";
import {Card} from "react-bootstrap";
import food from "./Img/Food.svg";
import plus from "./Img/Plus.svg";

export class CookingFoodCard extends React.Component{
    render() {
        return(
            <Card className={styles.foodCardMenu}>
                <div className={styles.cardBlockMenu}>
                    <div className={styles.foodInfMenu}>
                        <div className={styles.imgBlockMenu}>
                            <img src={food} alt={""}/>
                        </div>
                        <div className={styles.infBlockMenu}>
                                <p className={styles.textMenu}>Каша рисовая</p>
                                <p className={styles.priceMenu}>100 рублей</p>
                        </div>
                    </div>
                    <button className={styles.addButtonMenu}><img src={plus} alt={""}/></button>
                </div>
            </Card>
        )
    }
}
