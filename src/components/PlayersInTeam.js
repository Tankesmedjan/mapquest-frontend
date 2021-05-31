import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import FooterContent from "./FooterContent";
import {isAuthenticated} from "../repositories/LoginAuth";

export class PlayersInTeam extends Component {
    constructor() {
        super();
        this.state = {name: '', teamId: ''}
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addPlayer(e) {
        e.preventDefault()

        if (!this.state.name || this.state.name.length <=3){
            alert("Player Name must contain at least 4 letters")
        } else {
            let data = {name: this.state.name, teamId: 1}
            http.post(`/player`, data)
            alert("Successfully registered!")
        }
    }

    render() {
        isAuthenticated()
        const insertFooter = FooterContent;
        return (
            <>
                <form onSubmit={(e) => this.addPlayer(e)}>
                    <input type="text" placeholder="Enter Player Name" className="input-text" name="name" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Add Player</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default PlayersInTeam

