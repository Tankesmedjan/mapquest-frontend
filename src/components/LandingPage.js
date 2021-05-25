import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";

export class LandingPage extends Component {
    render() {
        return (
                <div className="container">
                    <p><button className="btn flashy-btn"><Icon.CurrencyDollar /> Purchase Access</button></p>
                    <p><button className="btn flashy-btn"><Icon.DoorOpen /> Login</button></p>
                    <p><button className="btn flashy-btn"><Icon.Upc /> Scan QR</button></p>
                    <p><button className="btn flashy-btn"><Icon.BoxArrowInRight /> Quick access</button></p>

                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                       &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                </div>
        )
    }
}
export default LandingPage
