import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {isAdminAuth} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";

export class AdminDashboard extends Component {

    render() {
        if (isAdminAuth()) return null;
        const insertFooter = FooterContent
        return (
            <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Admin Dashboard</h2><br/>
                        <p><Link to="/admin/stories"><button className="btn flashy-btn"><Icon.Signpost2Fill /> Manage Stories</button></Link></p>
                        <p><Link to="/admin/mission"><button className="btn flashy-btn"><Icon.Wrench /> Manage Missions</button></Link></p>
                        <p></p>
                        <p><Link to="/"><button className="btn flashy-btn"><Icon.ListOl /> Log out</button></Link></p>
                    </div>

                {insertFooter}
            </div>

        )
    }
}
export default AdminDashboard
