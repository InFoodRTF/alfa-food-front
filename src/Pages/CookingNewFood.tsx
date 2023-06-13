import React from "react";
import {NavbarCooking} from "../Components/NavbarCooking/NavbarCooking";
import {FooterCooking} from "../Components/FooterCooking/FooterCooking";
import styles from "./StylesForPages.module.css";
import add from "./photo_add.svg";
import {BaseInput} from "../Components/BaseInput/BaseInput";
import {BaseArea} from "../Components/BaseInput/BaseArea";
import {BaseButItem} from "../Components/BaseButton/BaseButItem";
import buttonStyles from "../Components/BaseButton/BaseButItem.module.css";

export class CookingNewFood extends React.Component{
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Школьное питание</title>
            </head>
            <body style={{background:"#F8F8F8"}}>
            <NavbarCooking leftButtonText={"Составить меню"} mainButtonText={"Добавить новое блюдо"} rightButtonText={"Выгрузить отчет"}/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                width: "1119px",
                marginTop: "26px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: "60px",
                minHeight: "580px"
            }}>
                <div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
                    <button className={styles.addButton}>
                        <img src={add} alt={""} style={{width:"455px", height: "455px"}}/>
                    </button>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "13px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "15px", paddingTop: "1px"}}>
                        <div style={{display: "flex", flexDirection: "row", gap: "21px"}}>
                            <BaseInput width={308} height={40} placeholderText={"Название блюда"}/>
                            <BaseInput width={308} height={40} placeholderText={"Категория"}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "21px"}}>
                            <BaseInput width={308} height={40} placeholderText={"Цена"}/>
                            <BaseInput width={308} height={40} placeholderText={"Граммовки"}/>
                        </div>
                        <BaseArea width={638} height={80} placeholderText={"Состав"}/>
                        <BaseArea width={638} height={140} placeholderText={"Описание (необязательно)"}/>
                        <BaseInput width={638} height={40} placeholderText={"БЖУ"}/>
                    </div>
                    <BaseButItem w={152} h={42} style={buttonStyles.cardButtonCook} text={"+ Добавить"}/>
                </div>
            </div>
            <FooterCooking firstButtonText={"Составить меню"} secondButtonText={"Добавить блюдо"} thirdButtonText={"Выгрузить отчет"}/>
            </body>
            </html>
        )
    }
}
