import React from "react";
import "./index.css";
import {TestNav} from "./Components/TestAdapt/TestNavbar/TestNav";


function App() {
  return (
          <div className={"bg-[#F8F8F8]"}>
              <TestNav headerButtons={['Заказать питание', 'Посмотреть заказы']}/>
              <div className={"min-h-[50px]"}></div>
          </div>
  );
}

export default App;
