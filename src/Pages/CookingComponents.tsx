import React from "react";
import {NavbarCooking} from "../Components/NavbarCooking/NavbarCooking";
import {FooterCooking} from "../Components/FooterCooking/FooterCooking";
import {CookingFoodCard} from "../Components/CookingFoodCard/CookingFoodCard";
import {SearchCard} from "../Components/SearchCard/SearchCard";

export class CookingComponents extends React.Component{
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
                flexDirection: "column",
                gap: "20px",
                width: "1119px",
                marginTop: "26px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: "60px",
                minHeight: "580px"
            }}>
                <SearchCard w={1016}/>
                <CookingFoodCard/>
            </div>
            <FooterCooking firstButtonText={"Составить меню"} secondButtonText={"Добавить блюдо"} thirdButtonText={"Выгрузить отчет"}/>
            </body>
            </html>
        )
    }
}
