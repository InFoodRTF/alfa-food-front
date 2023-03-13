import React from "react";
import styles from "./ButItem.module.css";
import {Button} from "react-bootstrap";


export const ButItem = ({h = 0, w = 0, text = ""}) => {
    return(
        <Button variant={''} bsPrefix={''} className={styles.orderButton} style={{width: `${w}px`, height: `${h}px`}}>
            <p className={styles.buttonText}>{text}</p>
        </Button>
    )
}
export default ButItem
