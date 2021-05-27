import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import React, {Component} from "react";
import {Link} from "react-router-dom";


export class ManageTeams extends Component {

    render() {
        return (

            <>
                <h1 className="maps-header">MapQuest</h1>
                <div className="container">
                <div className="manageteam-wrapper">
                    <br/>
                    <br/>

                    <p><Link to="/createteam"><button className="btn flashy-btn"><Icon.Plus /> Create Team</button></Link></p>
                    <br/>
                    <br/>
                    <p><button className="btn flashy-btn"><Icon.Plus /> Add Player To Team</button></p>



                    <div className="wrapper-footer">
                        <div className="logo-holder">
                        </div>
                        <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                    </div>
                </div>
                </div>
            </>
        )
    }

}
export default ManageTeams