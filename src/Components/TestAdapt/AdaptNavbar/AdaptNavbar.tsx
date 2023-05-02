import React from "react";
import {Image} from "react-bootstrap";
import styles from "./AdaptNavbar.module.css";
import exit from "../../Navbar/Img/r_m_exit.png";
import logo from "../../Navbar/Img/Mask group.png";
import basket from "./Img/VectorBasket.png";
import menu from "./Img/navbarToggler.png";


export class AdaptNavbar extends React.Component{
    render() {
        const orderMeals = (event: any) => {
            event.preventDefault()
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null && watch.classList.contains(styles.red)) {
                order.classList.toggle(styles.red)
                watch.classList.remove(styles.red)
            }
        }

        const orderWatch = (event: any) => {
            event.preventDefault()
            const order = document.getElementById('order')
            const watch = document.getElementById('watch')
            if (order !== null && watch !== null && order.classList.contains(styles.red)) {
                order.classList.remove(styles.red)
                watch.classList.toggle(styles.red)
            }
        }

        const changeClass = (event: any) => {
            event.preventDefault()
            const buttons = document.getElementsByClassName(styles.navItemAdapt)
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains(styles.red)) {
                    buttons[i].classList.remove(styles.red)
                }
            }
            event.currentTarget.classList.toggle(styles.red)
        }

        return (
            <nav className={`navbar navbar-expand-md bg-white ${styles.nav}`}>
                <div className={`container ${styles.navContainer}`}>
                    <button className={`d-md-none ${styles.navbarToggler}`} type={"button"} data-bs-toggle={"collapse"}
                            data-bs-target={"#navbarContent"} aria-controls={"navbarContent"} aria-expanded={"false"}>
                        <Image src={menu}/>
                    </button>
                    <div className={"navbar-brand m-auto"} style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                        <div className={styles.brand}><Image src={logo}></Image></div>
                        <p className={`mb-0 ${styles.textBrand}`}>Школьное Питание</p>
                    </div>
                    <a href={""} className={"d-md-none"}><Image src={basket}></Image></a>
                    <div className={"collapse navbar-collapse"} id={"navbarContent"}>
                        <ul className={"navbar-nav gap-md-2 gap-xl-5 m-auto"}>
                            <li className={"nav-item"}>
                                <a href={""} className={`nav-link ${styles.navItem} ${styles.red} d-md-flex d-none`}
                                   id={'order'} onClick={orderMeals}>Заказать питание</a>
                                <a href={""} className={`nav-link d-md-none ${styles.navItemAdapt} ${styles.red}`}
                                   onClick={changeClass}>Заказать питание</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href={""} className={`nav-link ${styles.navItem} d-md-flex d-none`}
                                   id={'watch'} onClick={orderWatch}>Посмотреть заказы</a>
                                <a href={""} className={`nav-link d-md-none ${styles.navItemAdapt}`}
                                   onClick={changeClass}>Посмотреть заказы</a>
                            </li>
                            <li className={"nav-item d-md-none"}>
                                <a href={""} className={`nav-link ${styles.navItemAdapt}`}
                                   onClick={changeClass}>Профиль</a>
                            </li>
                            <li className={"nav-item d-md-none"}>
                                <a href={""} className={`nav-link ${styles.navItemAdapt}`}
                                   onClick={changeClass}>Выйти</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`d-md-flex d-none gap-xl-5 gap-md-2 ${styles.navBlockRight}`}>
                        <a href={""} className={`nav-link ${styles.navItemProfile}`}>Профиль</a>
                        <a href={""} className={`nav-link ${styles.navItemExit}`}><Image src={exit}></Image></a>
                    </div>
                </div>
            </nav>
        )
    }
}
