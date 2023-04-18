import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css"
import {AdaptNavbar} from "./Components/TestAdapt/AdaptNavbar/AdaptNavbar";


function App() {
  return (
      <AdaptNavbar></AdaptNavbar>
      // <html lang="en">
      // <head>
      //     <meta charSet="UTF-8"/>
      //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //     <title>Школьное питание</title>
      // </head>
      // <body style={{background:"#F8F8F8"}}>
      //   <Navibar/>
      //   <div style={{
      //       display: "flex",
      //       flexDirection: "row",
      //       gap: "20px",
      //       width: "1119px",
      //       marginTop: "70px",
      //       marginLeft: "auto",
      //       marginRight: "auto"
      //   }}>
      //       <LeftMenu/>
      //       <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      //           <FilterFoodItem/>
      //           <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      //               <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
      //                   <CardFood/>
      //                   <CardFood/>
      //                   <CardFood/>
      //               </div>
      //               <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
      //                   <CardFood/>
      //                   <CardFood/>
      //                   <CardFood/>
      //               </div>
      //           </div>
      //       </div>
      //       <CardBasket/>
      //   </div>
      // </body>
      // </html>
  );
}

export default App;
