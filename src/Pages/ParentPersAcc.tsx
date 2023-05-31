import {Navibar} from "../Components/Navbar/Navibar";
import React from "react";
import {Footer} from "../Components/Footer/Footer";
import {Account} from "../Components/PersAcc/Account";
import styles from "./StylesForPages.module.css";
import {BaseButItem} from "../Components/BaseButton/BaseButItem";
import buttonStyles from "../Components/BaseButton/BaseButItem.module.css";

export class ParentPersAcc extends React.Component{
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Школьное питание</title>
            </head>
            <body style={{background:"#F8F8F8"}}>
            <Navibar leftButtonText={"Заказать питание"} rightButtonText={"Посмотреть заказы"}/>
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
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "60px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                            <p className={styles.account}>Личный кабинет</p>
                            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                                <Account text={"Фамилия"}/>
                                <Account text={"Имя"}/>
                                <Account text={"Отчество"}/>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            <Account text={"Почта"}/>
                            <Account text={"Телефон"}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            <Account text={"Логин"}/>
                        </div>
                    </div>
                    <div style={{width: "642px", paddingTop: "10px", textAlign: "center"}}>
                        <BaseButItem w={218} h={39} style={buttonStyles.orderButton} text={"Сохранить изменения"}/>
                    </div>
                </div>
            </div>
            <Footer firstButtonText={"Заказать питание"} secondButtonText={"Посмотреть заказы"}/>
            </body>
            </html>
        )
    }
}
