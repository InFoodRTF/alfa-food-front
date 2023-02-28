import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./Components/Navbar/Navibar";
import CardFood from "./Components/FoodCard/CardFood";
import CardBasket from "./Components/BasketCard/CardBasket";


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
        <CardFood/>
        <CardBasket/>
      </body>
      </html>
  );
}

export default App;
