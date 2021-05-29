import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import FooterContent from "./FooterContent";
import {isAuthenticated} from "../repositories/LoginAuth";


export class ManageTeams extends Component {

    render() {
        isAuthenticated()
        const insertFooter = FooterContent
        return (
            <>
                <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Manage Teams</h2><br/>
                    <p><Link to="/createteam"><button className="btn flashy-btn"><Icon.Plus /> Create Team</button></Link></p>
                    <p><button className="btn flashy-btn"><Icon.Plus /> Add Player To Team</button></p>
                </div>

                    {insertFooter}

                </div>
            </>
        )
    }

}
export default ManageTeams
