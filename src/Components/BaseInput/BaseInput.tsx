import React from "react";
import styles from "./BaseArea.module.css"


export class BaseInput extends React.Component<{width: any, height: any, placeholderText: any}>{
    render() {
        return(
            <div>
                <div className={styles.cardBlock}>
                    <input style={{width:`${this.props.width}px`, height: `${this.props.height}px`}}
                              className={styles.inputField} placeholder={`${this.props.placeholderText}`}/>
                </div>
            </div>
        )
    }
}
