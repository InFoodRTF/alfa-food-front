import React from "react";
import {Calendar} from "../Calendar/Calendar";
import {LeftMenuButtons} from "./LeftMenuButtons";

export class LeftMenu extends React.Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", gap: "52px"}}>
                <Calendar/>
                <LeftMenuButtons/>
            </div>
        )
    }
}

