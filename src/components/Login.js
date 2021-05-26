import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export class Login extends Component {
    constructor() {
        super();
        this.state = { username: '', password: '' };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to MapQuest</h2>
                    <h3 className="maps-header">Login</h3>
                    <form onSubmit={this.submitLogin}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your username" className="form-control"
                                   name="username" onChange={this.handleInputChange}/>
                        </div><br/>
                        <div className="form-group">
                            <input placeholder="Enter your password" type="password" className="form-control"
                                   name="password" onChange={this.handleInputChange}/>
                        </div><br/>
                        <a href="mailto:tankesmedjan@protonmail.com">I Lost My Password</a><br/><br/>
                        <button type="submit" className="btn flashy-btn">Login</button>
                    </form>
                </div>
                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline-image" width="440"/>
                </div>
            </div>
        )
    }
}
export default Login