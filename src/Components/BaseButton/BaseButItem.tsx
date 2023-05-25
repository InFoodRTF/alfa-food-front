import React from "react";
import {Button} from "react-bootstrap";


export class BaseButItem extends React.Component<{w: any, h: any, style: any, text: any}>{
    render() {
        return(
            <Button variant={''} bsPrefix={''} className={this.props.style} style={{width: `${this.props.w}px`, height: `${this.props.h}px`}}>
                {this.props.text}
            </Button>
        )
    }
}

