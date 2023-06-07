import React from "react";
import styles from "./StylesForPages.module.css";
import {BaseButItem} from "../Components/BaseButton/BaseButItem";
import buttonStyles from "../Components/BaseButton/BaseButItem.module.css";
import {Calendar} from "../Components/Calendar/Calendar";
import {NavbarCooking} from "../Components/NavbarCooking/NavbarCooking";
import {FooterCooking} from "../Components/FooterCooking/FooterCooking";

export class CookingUploadRep extends React.Component{
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
                marginTop: "70px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: "60px",
                minHeight: "580px"
            }}>
                <div style={{display: "flex", flexDirection: "row", gap: "47px"}}>
                    <Calendar/>
                    <div style={{display: "flex", flexDirection: "column", gap: "39px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "42px"}}>
                            <p className={styles.report}>Выгрузить отчет</p>
                            <div style={{width: "850px", height: "233px", background: "#D9D9D9"}}></div>
                        </div>
                        <div>
                            <BaseButItem w={172} h={39} style={buttonStyles.orderButton} text={"Скачать данные"}/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCooking firstButtonText={"Составить меню"} secondButtonText={"Добавить блюдо"} thirdButtonText={"Выгрузить отчет"}/>
            </body>
            </html>
        )
    }
}
