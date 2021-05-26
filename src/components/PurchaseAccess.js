import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
import * as Icon from "react-bootstrap-icons";


export class PurchaseAccess extends Component {
    constructor() {
        super();
        this.state = {name: '', email: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to
                        MapQuest</h2>
                    <b>The best geo based game online, for a fun and active game play!<br/>
                        Build your own story with missions from our library or chose from many ready-to-go stories. </b><br/>
                    <small><i>Only $24.99 for 24h access to the created game.</i></small><br/><br/>

                    <form onSubmit={this.submitLogin}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your name" className="form-control"
                                   name="name" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input placeholder="Enter your email" type="Email" className="form-control"
                                   name="password" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <p>
                            <button className="btn flashy-btn"><Icon.CurrencyDollar/> Get Access Code</button>
                        </p>
                    </form>
                </div>


                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline-image"
                         width="440"/>
                </div>
            </div>
        )
    }
}

export default PurchaseAccess