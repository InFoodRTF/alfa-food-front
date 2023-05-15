import React from "react";
import styles from "./BaseButItem.module.css";
import {Button} from "react-bootstrap";


export class BaseButItem extends React.Component<{w: any, h: any, text: any}>{
    render() {
        return(
            <Button variant={''} bsPrefix={''} className={styles.orderButton} style={{width: `${this.props.w}px`, height: `${this.props.h}px`}}>
                {this.props.text}
            </Button>
        )
    }
}

