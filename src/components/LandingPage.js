import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import FooterContent from "./FooterContent";

export class LandingPage extends Component {
    render() {
        return (
                <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to MapQuest</h2>
                        <b>The best geo based game online, for a fun and active game play!<br/>
                        Build your own story with missions from our library or chose from many ready-to-go stories. </b><br/>
                            <small><i>Only $24.99 for 24h access to the created game.</i></small><br/><br/>

                        <p><Link to="/purchaseaccess"><button className="btn flashy-btn"><Icon.CurrencyDollar /> Purchase Access</button></Link></p>
                        <p><Link to="/login"><button className="btn flashy-btn"><Icon.DoorOpen /> Login</button></Link></p>
                        <p><Link to="/qrscanner"><button className="btn flashy-btn"><Icon.Upc /> Scan QR</button></Link></p>
                        <p><Link to="/googlemap"><button className="btn flashy-btn"><Icon.BoxArrowInRight /> Quick access</button></Link></p>
                    </div>

                    <FooterContent/>

                </div>

        )
    }
}
export default LandingPage
