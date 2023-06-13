import React from "react";
import styles from "./BaseArea.module.css"


export class BaseArea extends React.Component<{width: any, height: any, placeholderText: any}>{
    render() {
        return(
            <div>
                <div className={styles.cardBlock}>
                    <textarea style={{width:`${this.props.width}px`, height: `${this.props.height}px`}}
                           className={styles.inputField} placeholder={`${this.props.placeholderText}`}/>
                </div>
            </div>
        )
    }
}
