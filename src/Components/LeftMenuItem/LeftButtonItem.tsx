import React from "react";
import styles from "./LeftButtonItem.module.css";
import {Button} from "react-bootstrap";


export const LeftButtonItem = ({h = 0, w = 0, text = "", classEl = "", funBtn = function () {

}}) => {
    return(
        <Button variant={''} bsPrefix={''} className={classEl} style={{width: `${w}px`, height: `${h}px`}}>
           {text}
        </Button>
    )
}
export default LeftButtonItem
