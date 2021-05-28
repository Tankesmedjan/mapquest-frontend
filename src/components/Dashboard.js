import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";

export class Dashboard extends Component {

    render() {
        {isAuthenticated()}
        const insertFooter = FooterContent
        return (
            <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Dashboard</h2><br/>
                        <p><Link to="/choosestory"><button className="btn flashy-btn"><Icon.Signpost2Fill /> Choose story</button></Link></p>
                        <p><Link to="/manageteams"><button className="btn flashy-btn"><Icon.Wrench /> Manage teams</button></Link></p>
                        <p><button className="btn flashy-btn"><Icon.Map /> Choose game area</button></p>
                        <p><button className="btn flashy-btn"><Icon.ListOl /> Scoreboard</button></p>
                    </div>

                {insertFooter}
            </div>

        )
    }
}
export default Dashboard
