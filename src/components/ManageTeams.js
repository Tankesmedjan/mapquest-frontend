import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import React, {Component} from "react";
import {Link} from "react-router-dom";


export class ManageTeams extends Component {

    render() {
        return (

            <>
                <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Manage Teams</h2><br/>
                    <p><Link to="/createteam"><button className="btn flashy-btn"><Icon.Plus /> Create Team</button></Link></p>
                    <p><button className="btn flashy-btn"><Icon.Plus /> Add Player To Team</button></p>
                </div>
                    <div className="wrapper-footer">
                        <div className="logo-holder">
                            <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                            &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                        </div>
                        <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                    </div>
                </div>
            </>
        )
    }

}
export default ManageTeams