import React from "react";
import {Disclosure} from "@headlessui/react";
import menu from "../AdaptNavbar/Img/navbarToggler.png";
import logo from "../../Navbar/Img/Mask group.png";
import exit from "../../Navbar/Img/r_m_exit.png";
import basket from "../AdaptNavbar/Img/VectorBasket.png";


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
                <nav className={"bg-white"}>
                    <div className={"flex mx-auto max-w-nav-main-adapt h-28 2xl:h-32 xl:h-32 lg:h-32 lg:max-w-nav-main md:max-w-nav-main-medium"}>
                        <Disclosure.Button className={"border-0 bg-white h-[18px] ml-8 mt-[67px] md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}>
                            <img src={menu} alt={""}/>
                        </Disclosure.Button>
                        <div className={"flex flex-row mx-auto mt-12 lg:mx-auto lg:ml-11 md:mx-0 md:my-auto md:ml-4 sm:mx-auto sm:mt-12"}>
                            <div className={"flex flex-row my-auto gap-1 xl:min-w-[280px] lg:min-w-[270px] md:gap-3 md:min-w-[177px] sm:gap-2"}>
                                <div><img src={logo} alt={""}/></div>
                                <p className={"text-black text-[20px] leading-6 font-bold w-[103px]"}>Школьное Питание</p>
                            </div>
                            <div className={"hidden xl:gap-10 lg:gap-4 md:flex md:gap-2 md:px-2 md:py-[10px] md:h-[62px]"}>
                                {this.state.buttons.map((btn: any) => (
                                    <a
                                        href={btn.href}
                                        className={changeClasses(btn.current ? "text-white text-[18px] font-semibold rounded-[10px] bg-[#F05654] text-center py-[10px] px-[20px] leading-5" :
                                        "text-black text-[18px] font-semibold text-center py-[10px] px-[20px] leading-5")}
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
                        <div className={"hidden lg:mr-10 md:flex md:flex-row md:my-auto md:py-[10px] md:gap-3 md:mr-4"}>
                            <a href={""} className={"text-black text-[18px] font-semibold p-[10px]"}>Профиль</a>
                            <a href={""} className={"w-6 h-6 my-auto"}><img src={exit} alt={""}/></a>
                        </div>
                        <a href={""} className={"w-[30px] h-[30px] mt-[61px] mr-8 md:hidden"}><img src={basket} alt={""}></img></a>
                    </div>
                </nav>
                <Disclosure.Panel className={"md:hidden"}>
                    <div className={"flex flex-col gap-5 pt-[30px] px-4 mi-w-[728px]"}>
                        {this.state.navigation.map((currItem: any) => (
                            <Disclosure.Button
                                key={currItem.name}
                                as={"a"}
                                href={currItem.href}
                                className={changeClasses(currItem.current ? "text-white text-[18px] font-semibold rounded-[10px] bg-[#F05654] h-[60px] text-center pt-[15px]" :
                                    "text-black text-[18px] font-semibold rounded-[10px] h-[60px] bg-white text-center pt-[15px]"
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
