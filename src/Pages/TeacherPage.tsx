import {LeftMenu} from "../Components/LeftMenuItem/LeftMenu";
import React from "react";
import {TickCard} from "../Components/TickCard/TickCard";
import styles from "./TeacherStyles.module.css";
import {SearchCard} from "../Components/SearchCard/SearchCard";
import {BaseButItem} from "../Components/BaseButton/BaseButItem";
import {NavibarTeacher} from "../Components/NavbarTeacher/NavibarTeacher";

export class TeacherPage extends React.Component{
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Школьное питание</title>
                </head>
                <body style={{background:"#F8F8F8"}}>
                    <NavibarTeacher/>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        width: "1119px",
                        marginTop: "70px",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>
                        <LeftMenu/>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            <p className={styles.markClass}>Отметить класс</p>
                            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                                <SearchCard/>
                                <TickCard/>
                                <TickCard/>
                                <div style={{width: "642px", paddingTop: "10px", textAlign: "center"}}>
                                    <BaseButItem w={218} h={39} text={"Сохранить изменения"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}
