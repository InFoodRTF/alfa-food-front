import styles from "./Components/LeftMenuItem/LeftButtonItem.module.css";
import stylesCooking from "./Components/LeftMenuCooking/LeftMenuCooking.module.css";
import stylesFilter from "./Components/FilterFoodItem/ButItem.module.css";


export const leftMenuButtons = [
    {
        width: 265,
        text: "Иванов Иван Петрович",
        classEl: [styles.orderButton, styles.red].join(" ")
    },
    {
        width: 265,
        text: "Иванов Дмитрий Петрович",
        classEl: styles.orderButton
    },
    {
        width: 265,
        text: "Иванова Яна Петровна",
        classEl: styles.orderButton
    }
]

export const leftMenuButtonsCooking = [
    {
        width: 231,
        text: "Иванов Иван Петрович",
        classEl: [stylesCooking.orderButton, stylesCooking.red].join(" ")
    },
    {
        width: 231,
        text: "Иванов Дмитрий Петрович",
        classEl: stylesCooking.orderButton
    },
    {
        width: 231,
        text: "Иванова Яна Петровна",
        classEl: stylesCooking.orderButton
    }
]

export const upperMenuButtons = [
    {
        width: 124,
        height: 44,
        text: "Завтрак",
        classEl: [stylesFilter.orderButtonMenu, stylesFilter.redMenu].join(" ")
    },
    {
        width: 94,
        height: 44,
        text: "Обед",
        classEl: stylesFilter.orderButtonMenu
    },
    {
        width: 129,
        height: 44,
        text: "Полдник",
        classEl: stylesFilter.orderButtonMenu
    }
]
