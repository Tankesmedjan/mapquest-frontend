import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContentWoLogo from "./FooterContentWoLogo";

export class Dashboard extends Component {

    render() {
        if (!isAuthenticated()) return null;
        return (
            <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Dashboard</h2><br/>
                        <p><Link to="/choosestory"><button className="btn flashy-btn"><Icon.Signpost2Fill /> Choose story</button></Link></p>
                        <p><Link to="/manageteams"><button className="btn flashy-btn"><Icon.Wrench /> Manage teams</button></Link></p>
                        <p><Link to="/gamearea"><button className="btn flashy-btn"><Icon.Map /> Choose game area</button></Link></p>
                        <p><Link to="/missionpins"><button className="btn flashy-btn"><Icon.PinMap /> Place mission pins on map</button></Link></p>
                        <p><Link to="/qrcode"><button className="btn flashy-btn"><Icon.UpcScan /> Generate QR code</button></Link></p>
                        <p><Link to="/scoreboard"><button className="btn flashy-btn"><Icon.ListOl /> Scoreboard</button></Link></p>
                    </div>

                <FooterContentWoLogo />
            </div>

        )
    }
}
export default Dashboard
