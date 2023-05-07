import {Navibar} from "../Components/Navbar/Navibar";
import {LeftMenu} from "../Components/LeftMenuItem/LeftMenu";
import {FilterFoodItem} from "../Components/FilterFoodItem/FilterFoodItem";
import {CardFood} from "../Components/FoodCard/CardFood";
import {CardBasket} from "../Components/BasketCard/CardBasket";
import React from "react";

export class ParentPage extends React.Component{
    render() {
return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Школьное питание</title>
        </head>
        <body style={{background:"#F8F8F8"}}>
            <Navibar/>
            <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "1119px",
            marginTop: "70px",
            marginLeft: "auto",
            marginRight: "auto"
            }}>
                <LeftMenu/>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <FilterFoodItem/>
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <CardFood/>
                            <CardFood/>
                            <CardFood/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <CardFood/>
                            <CardFood/>
                            <CardFood/>
                        </div>
                    </div>
                </div>
                <CardBasket/>
            </div>
        </body>
    </html>
    )
    }
}
