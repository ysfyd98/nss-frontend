import React, { Component } from 'react';
import logo from "../images/ss_big.png"

export class BigLogoImage extends Component {
    render() {
        return (
            <div style={{"width": "100%", "textAlign": "center" }}>
                <img style={{"width": "50%"}} src={logo} alt="Shift scheduler"/>
            </div>
        )
    }
}

export default BigLogoImage;

