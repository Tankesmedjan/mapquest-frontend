import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";

export class LandingPage extends Component {
    render() {
        return (
                <div className="container">
                    <p><button className="btn btn-light"><Icon.CurrencyEuro /> Purchase Access</button></p>
                    <p><button className="btn btn-light"><Icon.DoorOpen /> Login</button></p>
                    <p><button className="btn btn-light"><Icon.Upc /> Scan QR</button></p>
                    <p><button className="btn btn-light"><Icon.BoxArrowInRight /> Quick access</button></p>
                </div>
        )
    }
}
export default LandingPage
