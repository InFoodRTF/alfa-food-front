import dayjs from "dayjs";
import React from "react";
import styles from "./Calendar.module.css"
import {Image} from "react-bootstrap";
import calendarIcon from "./Vector.png";

export const Calendar = () => {
    return(
        <div className={styles.blockDate}>
            <p className={styles.textDate}>{dayjs().format('DD.MM.YYYY')}</p>
            <Image src={calendarIcon} className={styles.blockImage}></Image>
        </div>
    )
}
export default Calendar
