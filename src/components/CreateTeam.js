import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import FooterContent from "./FooterContent";
import {isAuthenticated} from "../repositories/LoginAuth";

export class CreateTeam extends Component {

    constructor() {
        super();
        this.state = {teamName: '', gameId: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addTeam(e) {
        e.preventDefault()
        let data = {teamName: this.state.name, gameId: 1}
        http.post(`/team`, data)
        alert("Successfully registered!")

    }

    render() {
        {isAuthenticated()}
        const insertFooter = FooterContent;
        return (
            <>
                <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Create Team</h2><br/>
                    <h3 className="maps-header">Choose Team Name</h3>
                    <form onSubmit={(e) => this.addTeam(e)}>
                        <p><input type="text" placeholder="Enter Team Name" className="form-control" name="name" onChange={this.handleInputChange}/></p>
                        <p><button type="submit" className="btn flashy-btn"><Icon.PlusCircleFill /> Add Team</button></p>
                        <br/>

                    </form>
                </div>

                    {insertFooter}

                </div>
            </>
        )
    }
}
export default CreateTeam