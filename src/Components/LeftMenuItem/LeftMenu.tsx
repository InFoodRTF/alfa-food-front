import React, {useState} from "react";
import LeftButtonItem from "./LeftButtonItem";
import {Calendar} from "../Calendar/Calendar";
import {getChildOrder} from "../../utils";
import styles from "./LeftButtonItem.module.css";


export class LeftMenu extends React.Component{ //создать массив из кнопок и через объекты менять class на onClick
    render() {
        return(
            <div style={{display: "flex", flexDirection: "column", gap: "52px"}}>
                <Calendar/>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <LeftButtonItem w={265} h={49} text={"Иванов Иван Петрович"} classEl={[styles.orderButton, styles.red].join(" ")}/>
                    <LeftButtonItem w={265} h={49} text={"Иванов Дмитрий Петрович"} classEl={styles.orderButton}/>
                    <LeftButtonItem w={265} h={49} text={"Иванова Яна Петровна"} classEl={styles.orderButton}/>
                </div>
            </div>
        )
    }
}
