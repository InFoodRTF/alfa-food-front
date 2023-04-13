import React from "react";
import {Nav, Navbar, Image} from "react-bootstrap";
import styles from "../Navbar/Navibar.module.css";
import exit from "../Navbar/Img/r_m_exit.png";
import logo from "../Navbar/Img/Mask group.png";


export class AdaptNavbar extends React.Component{
    render() {
        const orderMeals = () => {
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null && watch.classList.contains(styles.red)) {
                order.classList.toggle(styles.red)
                watch.classList.remove(styles.red)
            }
        }

        const orderWatch = () => {
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null && order.classList.contains(styles.red)) {
                order.classList.remove(styles.red)
                watch.classList.toggle(styles.red)
            }
        }

        return (
            <nav className={"navbar navbar-expand-md "}>
                <div className={"container"}>
                    <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"}
                            data-target={"#navbarContent"} aria-controls={"navbarContent"} aria-expanded={"false"}></button>
                    <div className={"navbar-brand"} style={{display:"flex", flexDirection: "row", gap: "12px"}}>
                        <div style={{width: "52.75px", height: "52.75px"}}><Image src={logo}></Image></div>
                        <p style={{width: "103px", height: "48px", whiteSpace: "normal"}}>Школьное Питание</p>
                    </div>
                    <div className={"col-xl-5"}>
                        <p>Заказать питание</p>
                        <p>Посмотреть заказы</p>
                    </div>
                    <div className={"col-xl-4"}>
                        <p>Профиль</p>
                        <div><Image src={exit}></Image></div>
                    </div>
                </div>
            </nav>
        )
    }
}
