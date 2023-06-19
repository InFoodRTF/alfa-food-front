import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css"
import {AdaptNavbar} from "./Components/TestAdapt/AdaptNavbar/AdaptNavbar";
import {AdaptFoodCard} from "./Components/TestAdapt/AdaptFoodCard/AdaptFoodCard";
import {LeftMenu} from "./Components/LeftMenuItem/LeftMenu";
import {CardBasket} from "./Components/BasketCard/CardBasket";
import styles from "./AppMain.module.css"
import {FilterFoodItem} from "./Components/FilterFoodItem/FilterFoodItem";


function App() {
  return (
      <>
          <body style={{background:"#F8F8F8"}}>
            <AdaptNavbar></AdaptNavbar>
            <div className={`container ${styles.flexContainer} gap-xl-4 gap-md-1`}>
                {/*<LeftMenu/>*/}
                <div className={`row ${styles.mainContainer}`}>
                    {/*<FilterFoodItem/>*/}
                    <AdaptFoodCard/>
                    <AdaptFoodCard/>
                    <AdaptFoodCard/>
                </div>
               {/*<CardBasket/>*/}
            </div>
          </body>
      </>
  );
}

export default App;
