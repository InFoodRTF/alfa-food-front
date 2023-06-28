import React from "react";
import {Disclosure} from "@headlessui/react";
import menu from "../AdaptNavbar/Img/navbarToggler.png";
import logo from "../../Navbar/Img/Mask group.png";
import exit from "../../Navbar/Img/r_m_exit.png";
import basket from "../AdaptNavbar/Img/VectorBasket.png";
import styles from "./TestNav.module.scss";


interface IProps {
   headerButtons?: any
}

interface IState{
    navigation?: any
    buttons?: any
}

export class TestNav extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            navigation: [
                { name: 'Заказать питание', href: '#', current: true },
                { name: 'Посмотреть заказы', href: '#', current: false },
                { name: 'Профиль', href: '#', current: false },
                { name: 'Выйти', href: '#', current: false }
            ],
            buttons: [
                { name: props.headerButtons[0], href: '#', current: true },
                { name: props.headerButtons[1], href: '#', current: false }
            ]
        }
    }

    render() {
        function changeClasses(...classes: any){
            return classes.filter(Boolean).join(' ')
        }

        return(
            <Disclosure>
                <nav className={styles.nav}>
                    <div className={styles.mainBlock}>
                        <Disclosure.Button className={styles.dropDownMenuButton}>
                            <img src={menu} alt={""}/>
                        </Disclosure.Button>
                        <div className={styles.leftBlock}>
                            <div className={styles.logo}>
                                <img src={logo} alt={""}/>
                                <p className={styles.textLogo}>Школьное Питание</p>
                            </div>
                            <div className={styles.mainButtons}>
                                {this.state.buttons.map((btn: any) => (
                                    <a
                                        href={btn.href}
                                        className={changeClasses(btn.current ? `${styles.baseButton} ${styles.redButton}` :
                                            `${styles.baseButton}`)}
                                        onClick={() => {
                                            const newCurrentButtons = [...this.state.buttons]
                                            newCurrentButtons.find((item) => item.current === true ? item.current = false : item.current = false)
                                            newCurrentButtons.find((item) => item.name === btn.name && !item.current ? item.current = true : item.current = false)
                                            this.setState({buttons: newCurrentButtons})
                                            return this.state.buttons
                                        }}
                                    >
                                        {btn.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <a href={"#"} className={styles.profileButton}>Профиль</a>
                            <a href={"#"} className={styles.exitButton}><img src={exit} alt={""}/></a>
                        </div>
                        <a href={"#"} className={styles.basketButton}><img src={basket} alt={""}></img></a>
                    </div>
                </nav>
                <Disclosure.Panel className={styles.dropDownMenu}>
                    <div className={styles.dropDownButtons}>
                        {this.state.navigation.map((currItem: any) => (
                            <Disclosure.Button
                                key={currItem.name}
                                as={"a"}
                                href={currItem.href}
                                className={changeClasses(currItem.current ? `${styles.dropDownBaseButton} ${styles.dropDownRedButton}` :
                                    `${styles.dropDownBaseButton}`
                                )}
                                aria-current={currItem.current ? 'page' : undefined}
                                onClick={() => {
                                    const newNavigation = [...this.state.navigation]
                                    newNavigation.find((item) => item.current === true ? item.current = false : item.current = false)
                                    newNavigation.find((item) => item.name === currItem.name && !item.current ? item.current = true : item.current = false)
                                    this.setState({navigation: newNavigation})
                                    return this.state.navigation
                                }}
                            >
                                {currItem.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        );
    }
}
