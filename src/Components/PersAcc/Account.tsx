import React from "react";
import styles from "./Account.module.css"


export class Account extends React.Component<{text: any}>{
    render() {
        return(
            <div>
                <div className={styles.cardBlock}>
                    <p className={styles.text}>{this.props.text}</p>
                    <input type={"text"} className={styles.inputField}/>
                </div>
            </div>
        )
    }
}
