import React from "react";
import {Nav, Navbar, Image} from "react-bootstrap";
import styles from "./NavibarTeacher.module.css";
import exit from "./Img/r_m_exit.png";
import logo from "./Img/Mask group.png";


export class NavibarTeacher extends React.Component{
    render() {
        return (
            <Navbar className={styles.nav}>
                <Nav.Item className={styles.navbarCustom}>
                    <Nav.Item className={styles.navBlockLeft}>
                        <Nav.Item className={styles.navBrand}>
                            <Navbar.Brand className={styles.brand}><Image src={logo}></Image></Navbar.Brand>
                            <p className={styles.textBrand}>Школьное Питание</p>
                        </Nav.Item>
                        <Nav.Item className={styles.navBlock}>
                            <Nav.Link className={[styles.navItem, styles.red].join(' ')}>Отметить класс</Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                    <Nav.Item className={styles.navBlockRight}>
                        <Nav.Link className={styles.navItemProfile}>Профиль</Nav.Link>
                        <Nav.Link className={styles.navItemExit}><Image src={exit}></Image></Nav.Link>
                    </Nav.Item>
                </Nav.Item>
            </Navbar>
        )
    }
}
