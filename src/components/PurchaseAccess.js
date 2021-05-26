import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import sha256 from "sha256";


export class PurchaseAccess extends Component {
    constructor() {
        super();
        this.state = {name: '', email: '', password: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    registerUser(e) {
        e.preventDefault()
        let data = {name: this.state.name, email: this.state.email, password: sha256(this.state.password)}
        http.post(`/user`, data)
        alert("Successfully registered!")
        this.setState({successMessage: "Registered!"})
        console.log(this.state.password)
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to
                        MapQuest</h2>
                    <b>The best geo based game online, for a fun and active game play!<br/>
                        Build your own story with missions from our library or chose from many ready-to-go stories. </b><br/>
                    <small><i>Only $24.99 for 24h access to the created game.</i></small><br/><br/>

                    <form onSubmit={(e) => this.registerUser(e)}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your name" className="form-control"
                                   name="name" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input placeholder="Enter your email" type="Email" className="form-control"
                                   name="email" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input placeholder="Enter your password" type="password" className="form-control"
                                   name="password" onChange={this.handleInputChange}/>
                        </div><br/>
                        <p>
                            <button type="submit" className="btn flashy-btn"><Icon.CurrencyDollar/>Register</button>
                        </p>
                    </form>
                </div>


                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline"
                         width="440"/>
                </div>
            </div>
        )
    }
}

export default PurchaseAccess