import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {login} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";



export class Login extends Component {
    constructor() {
        super();
        this.state = { email: '', password: '' };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    submitLogin = (event) => {
        event.preventDefault();
        login(this.state)
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to MapQuest</h2>
                    <h3 className="maps-header">Login</h3>
                    <form onSubmit={this.submitLogin}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your email" className="form-control"
                                   name="email" onChange={this.handleInputChange}/>
                        </div><br/>
                        <div className="form-group">
                            <input placeholder="Enter your password" type="password" className="form-control"
                                   name="password" onChange={this.handleInputChange}/>
                        </div><br/>
                        <a href="mailto:tankesmedjan@protonmail.com">I Lost My Password</a><br/><br/>
                        <button type="submit" className="btn flashy-btn">Login</button>
                    </form>
                </div>

                <FooterContent/>

            </div>
        )
    }
}
export default Login
