import React from "react";
import {Nav, Navbar, Image} from "react-bootstrap";
import styles from "./Navibar.module.css";
import exit from "./Img/exit.svg";
import logo from "./Img/logo.svg";


export class Navibar extends React.Component<{leftButtonText: any, rightButtonText: any}>{
    render() {
        const orderMeals = () => {
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null) {
                if (watch.classList.contains(styles.red) ||
                    (!watch.classList.contains(styles.red) && !order.classList.contains(styles.red))) {
                    order.classList.toggle(styles.red)
                    watch.classList.remove(styles.red)
                }
            }
        }

        const orderWatch = () => {
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null) {
                if (order.classList.contains(styles.red) ||
                    (!watch.classList.contains(styles.red) && !order.classList.contains(styles.red))) {
                    order.classList.remove(styles.red)
                    watch.classList.toggle(styles.red)
                }
            }
        }

        const  onRightBtn = () => {
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null) {
                order.classList.remove(styles.red)
                watch.classList.remove(styles.red)
            }
        }

        return (
            <Navbar className={styles.nav}>
                <Nav.Item className={styles.navbarCustom}>
                    <Nav.Item className={styles.navBlockLeft}>
                        <Nav.Item className={styles.navBrand}>
                            <Navbar.Brand className={styles.brand}><Image src={logo}></Image></Navbar.Brand>
                            <p className={styles.textBrand}>Школьное Питание</p>
                        </Nav.Item>
                        <Nav.Item className={styles.navBlock}>
                            <Nav.Link className={[styles.navItem, styles.red].join(' ')} id={'order'} onClick={orderMeals}>{this.props.leftButtonText}</Nav.Link>
                            <Nav.Link className={styles.navItem} id={'watch'} onClick={orderWatch}>{this.props.rightButtonText}</Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                    <Nav.Item className={styles.navBlockRight}>
                        <Nav.Link className={styles.navItemProfile} onClick={onRightBtn}>Профиль</Nav.Link>
                        <Nav.Link className={styles.navItemExit} onClick={onRightBtn}><Image src={exit}></Image></Nav.Link>
                    </Nav.Item>
                </Nav.Item>
            </Navbar>
        )
    }
}
