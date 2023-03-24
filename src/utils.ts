import React, {useState} from "react";
import styles from "./Components/LeftMenuItem/LeftButtonItem.module.css";


export const getChildOrder = (classEl: JSX.Element) => { // возможно не пригодится
    if (classEl.props.classEl === styles.orderButton){
        classEl.props.classList.toggle(styles.red)
    }
}
