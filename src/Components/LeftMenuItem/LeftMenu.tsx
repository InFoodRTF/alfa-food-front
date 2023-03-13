import React from "react";
import LeftButtonItem from "./LeftButtonItem";
import Calendar from "../Calendar/Calendar";

export const LeftMenu = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", gap: "52px"}}>
            <Calendar/>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <LeftButtonItem w={265} h={49} text={"Иванов Иван Петрович"}/>
                <LeftButtonItem w={265} h={49} text={"Иванов Дмитрий Петрович"}/>
                <LeftButtonItem w={265} h={49} text={"Иванова Яна Петровна"}/>
            </div>
        </div>
    )
}
export default LeftMenu
