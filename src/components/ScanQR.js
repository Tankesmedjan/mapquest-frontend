import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export class ScanQR extends Component {

    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to MapQuest</h2>
                    <h3 className="maps-header">The Eminent QR Scanner</h3>
                </div>
                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline-image" width="440"/>
                </div>
            </div>
        )
    }
}
export default ScanQR
