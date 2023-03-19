import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navibar} from "./Components/Navbar/Navibar";
import {CardFood} from "./Components/FoodCard/CardFood";
import {CardBasket} from "./Components/BasketCard/CardBasket";
import "./index.css"
import {FilterFoodItem} from "./Components/FilterFoodItem/FilterFoodItem";
import {LeftMenu} from "./Components/LeftMenuItem/LeftMenu";


function App() {
  return (
      <html lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Школьное питание</title>
      </head>
      <body style={{background:"#F8F8F8"}}>
        <Navibar/>
        <div style={{display: "flex", flexDirection: "row", gap: "20px", paddingLeft: "400px", paddingTop: "76px"}}>
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
  );
}

export default App;
