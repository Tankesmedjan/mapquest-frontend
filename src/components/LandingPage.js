import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";

export class LandingPage extends Component {
    render() {
        return (
                <div className="container">
                    <p><button className="btn btn-light">Purchase Access</button></p>
                    <p><button className="btn btn-light">Login</button></p>
                    <p><button className="btn btn-light">Scan QR</button></p>
                    <p><button className="btn btn-light">Quick access</button></p>
                </div>
        )
    }
}
export default LandingPage
