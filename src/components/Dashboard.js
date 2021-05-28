import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../repositories/LoginAuth";

export class Dashboard extends Component {

    render() {
        {
            isAuthenticated()
        }
        return (
            <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Dashboard</h2><br/>
                        <p><Link to="/choosestory"><button className="btn flashy-btn"><Icon.Signpost2Fill /> Choose story</button></Link></p>
                        <p><Link to="/manageteams"><button className="btn flashy-btn"><Icon.Wrench /> Manage teams</button></Link></p>
                        <p><button className="btn flashy-btn"><Icon.Map /> Choose game area</button></p>
                        <p><button className="btn flashy-btn"><Icon.ListOl /> Scoreboard</button></p>
                    </div>


                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                </div>
            </div>

        )
    }
}
export default Dashboard
