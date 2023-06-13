import React from "react";
import styles from "./SearchCard.module.css"
import {Card, Image} from "react-bootstrap";
import find from "./Search.svg";


export class SearchCard extends React.Component<{w: any}>{
    render() {
        return(
            <Card className={styles.foodCard} style={{width: `${this.props.w}px`}}>
                <div className={styles.cardBlock}>
                        <Image src={find} className={styles.findIcon}></Image>
                        <input placeholder={"поиск"} type={"text"} className={styles.inputField}/>
                </div>
            </Card>
        )
    }
}
