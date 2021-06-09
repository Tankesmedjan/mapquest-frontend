import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {adminLogin} from "../repositories/LoginAuth";

class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {username: '', password: '' };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    submitLogin = (event) => {
        event.preventDefault();
        adminLogin(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper-admin-login">
                    <h3 className="maps-header">MapQuest Admin Login</h3>
                    <form onSubmit={this.submitLogin}>
                        <div className="form-group">
                            <input type="text" placeholder="Username:" className="form-control"
                                   name="username" onChange={this.handleInputChange}/>
                        </div><br/>
                        <div className="form-group">
                            <input placeholder="Password:" type="password" className="form-control"
                                   name="password" onChange={this.handleInputChange}/>
                        </div><br/>
                        <button type="submit" className="btn flashy-btn">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AdminLogin
