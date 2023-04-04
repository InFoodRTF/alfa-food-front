import React from "react";
import {Button, Card} from "react-bootstrap";
import styles from "./Food.module.css";


export class Food extends React.Component<{}, {count: number}> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div className={styles.food}>
                <Card.Subtitle className={styles.cardFood}><p>Каша овсяная</p></Card.Subtitle>
                <div style={{
                    width: "55px",
                    height: "10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "9px",
                    alignItems: "center"
                }}>
                    <Button variant={''} bsPrefix={''} className={styles.addFood} onClick={() => this.state.count > 1 ?
                        this.setState({ count: this.state.count - 1 }) : this.setState({ count: this.state.count})}
                            style={{padding: "0px", alignItems: "center"}}>
                        <p className={styles.smallButton}>-</p>
                    </Button>
                    <p className={styles.addFood} style={{width: "5px", height: "11px", marginBottom: "0px"}}>{this.state.count}</p>
                    <Button variant={''} bsPrefix={''} className={styles.addFood} onClick={() => this.state.count < 9 ?
                        this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count})}
                            style={{padding: "0px", margin: "0px"}}>
                        <p className={styles.smallButton}>+</p>
                    </Button>
                </div>
                <p className={styles.price} style={{marginBottom: "0px"}}>50 руб</p>
            </div>
        )
    }
}

