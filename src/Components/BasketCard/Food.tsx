import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./Food.module.css";

export const Food = () => {
    return(
        <div className={styles.food}>
            <Card.Subtitle className={styles.cardFood}><p>Каша овсяная</p></Card.Subtitle>
            <div style={{width: "55px", height: "10px", display: "flex", flexDirection: "row", gap: "9px", alignItems: "center"}}>
                <Button variant={''} bsPrefix={''} className={styles.addFood} style={{padding: "0px", alignItems: "center"}}>
                    <p className={styles.smallButton}>-</p>
                </Button>
                <p className={styles.addFood} style={{width: "5px", height: "11px", marginBottom: "0px"}}>1</p>
                <Button variant={''} bsPrefix={''} className={styles.addFood} style={{padding: "0px", margin: "0px"}}>
                    <p className={styles.smallButton}>+</p>
                </Button>
            </div>
            <p className={styles.price} style={{marginBottom: "0px"}}>50 руб</p>
        </div>
    )
}
export default Food
