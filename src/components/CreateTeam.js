import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import {isAuthenticated} from "../repositories/LoginAuth";

export class CreateTeam extends Component {

    constructor() {
        super();
        this.state = {teamName: '', gameId: sessionStorage.getItem('gameid')};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addTeam(e) {
        e.preventDefault()

        if (!this.state.name || this.state.name.length <=3){
            alert("Team Name must contain at least 4 letters")
        } else {
            let data = {teamName: this.state.name, gameId: this.state.gameid}
            http.post(`/team`, data)
            alert("Successfully registered!")
        }
    }

    render() {
        if (!isAuthenticated()) return null;
        return (
            <>
                    <form onSubmit={(e) => this.addTeam(e)}>
                        <input type="text" placeholder="Enter Team Name" className="input-text" name="name" onChange={this.handleInputChange}/>
                        <button type="submit" className="btn "><Icon.PlusCircleFill /> Add Team</button>
                    </form>
                <hr/>
            </>
        )
    }
}
export default CreateTeam
