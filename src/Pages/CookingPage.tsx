import React from "react";
import buttonStyles from "../Components/BaseButton/BaseButItem.module.css";
import {BaseButItem} from "../Components/BaseButton/BaseButItem";
import {FilterFoodItem} from "../Components/FilterFoodItem/FilterFoodItem";
import {Footer} from "../Components/Footer/Footer";
import {CreatingCard} from "../Components/CreatingFoodCard/CreatingCard";
import {EditingCard} from "../Components/EditingFoodCard/EditingCard";
import {LeftMenuButtons} from "../Components/LeftMenuItem/LeftMenuButtons";
import {Calendar} from "../Components/Calendar/Calendar";
import {NavbarCooking} from "../Components/NavbarCooking/NavbarCooking";
import {InputCook} from "../Components/InputFieldCooking/InputCook";

export class CookingPage extends React.Component{
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <div style={{display: "flex", flexDirection: "column", gap: "39px"}}>
                    <Calendar/>
                    <div style={{display: "flex", flexDirection: "column", gap: "26px", paddingTop: "2.5px"}}>
                        <BaseButItem w={264} h={44} style={buttonStyles.cardButton} text={"Добавить новое меню"}/>
                        <LeftMenuButtons/>
                        <BaseButItem w={264} h={44} style={buttonStyles.cardButton} text={"Изменить"}/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "23px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
                        <InputCook/>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <FilterFoodItem/>
                            <BaseButItem w={208} h={44} style={buttonStyles.cardButton} text={"Добавить категорию"}/>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "20px", paddingTop: "2.5px"}}>
                        <CreatingCard/>
                        <EditingCard/>
                        <EditingCard/>
                    </div>
                </div>
            </div>
            <Footer/>
            </body>
            </html>
        )
    }
}
